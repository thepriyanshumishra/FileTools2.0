import * as wasiShim from "@bjorn3/browser_wasi_shim";
import * as zip from "client-zip";
self.onmessage = async (e) => {
  const message = e.data;
  try {
    const res = await handleMessage(message);
    if (!res) return;
    self.postMessage({
      ...res,
      id: message.id
    });
  } catch (e2) {
    self.postMessage({
      type: "error",
      error: e2,
      id: message.id
    });
  }
};
let wasm = null;
const handleMessage = async (message) => {
  switch (message.type) {
    case "load": {
      wasm = message.wasm;
      postMessage({ type: "loaded", id: "0" });
      break;
    }
    case "convert": {
      try {
        const { to: ext, input } = message;
        const file = input.file;
        const to = ext;
        if (to === ".rtf") {
          throw new Error(
            "Converting into RTF is currently not supported."
          );
        }
        const buf = new Uint8Array(await file.arrayBuffer());
        const args = `-f ${formatToReader(`.${file.name.split(".").pop() || ""}`)} -t ${formatToReader(to)} --extract-media=.`;
        const [result, stderr, zip2] = await pandoc(
          args,
          buf,
          file.name,
          to
        );
        if (result.length === 0) {
          return {
            type: "error",
            error: stderr.replaceAll("\\n", "\n").replaceAll('\\"', '"').split('"').slice(1, -1).join('"'),
            errorKind: stderr.split(" ")[0]
          };
        }
        return {
          type: "finished",
          output: result,
          isZip: zip2
        };
      } catch (e) {
        console.error(e);
        return { type: "error", error: e };
      }
    }
  }
};
const formatToReader = (format) => {
  switch (format) {
    case ".md":
    case ".markdown":
      return "markdown";
    case ".doc":
    case ".docx":
      return "docx";
    case ".csv":
      return "csv";
    case ".tsv":
      return "tsv";
    case ".docbook":
      return "docbook";
    case ".epub":
      return "epub";
    case ".html":
      return "html";
    case ".json":
      return "json";
    case ".odt":
      return "odt";
    case ".rtf":
      return "rtf";
    case ".rst":
      return "rst";
  }
  throw new Error(`Unsupported format: ${format}`);
};
async function pandoc(args_str, in_data, in_name, out_ext) {
  if (!wasm) throw new Error("WASM not loaded");
  let stderr = "";
  const args = ["pandoc.wasm", "+RTS", "-H64m", "-RTS"];
  const env = [];
  const in_file = new wasiShim.File(in_data, {
    readonly: true
  });
  const out_file = new wasiShim.File(new Uint8Array(), {
    readonly: false
  });
  const map = /* @__PURE__ */ new Map([
    ["in", in_file],
    ["out", out_file]
  ]);
  const root = new wasiShim.PreopenDirectory("/", map);
  const fds = [
    new wasiShim.OpenFile(
      new wasiShim.File(new Uint8Array(), { readonly: true })
    ),
    wasiShim.ConsoleStdout.lineBuffered((msg) => {
      console.log(`[WASI stdout] ${msg}`);
    }),
    wasiShim.ConsoleStdout.lineBuffered((msg) => {
      console.warn(`[WASI stderr] ${msg}`);
      stderr += msg + "\n";
    }),
    root,
    new wasiShim.PreopenDirectory("/tmp", /* @__PURE__ */ new Map())
  ];
  const wasi = new wasiShim.WASI(args, env, fds, { debug: false });
  const { instance } = await WebAssembly.instantiate(
    wasm,
    {
      wasi_snapshot_preview1: wasi.wasiImport
    }
  );
  wasi.initialize(instance);
  instance.exports.__wasm_call_ctors();
  function memory_data_view() {
    return new DataView(instance.exports.memory.buffer);
  }
  const argc_ptr = instance.exports.malloc(4);
  memory_data_view().setUint32(argc_ptr, args.length, true);
  const argv = instance.exports.malloc(4 * (args.length + 1));
  for (let i = 0; i < args.length; ++i) {
    const arg = instance.exports.malloc(args[i].length + 1);
    new TextEncoder().encodeInto(
      args[i],
      new Uint8Array(instance.exports.memory.buffer, arg, args[i].length)
    );
    memory_data_view().setUint8(arg + args[i].length, 0);
    memory_data_view().setUint32(argv + 4 * i, arg, true);
  }
  memory_data_view().setUint32(argv + 4 * args.length, 0, true);
  const argv_ptr = instance.exports.malloc(4);
  memory_data_view().setUint32(argv_ptr, argv, true);
  instance.exports.hs_init_with_rtsopts(argc_ptr, argv_ptr);
  const args_ptr = instance.exports.malloc(args_str.length);
  new TextEncoder().encodeInto(
    args_str,
    new Uint8Array(
      instance.exports.memory.buffer,
      args_ptr,
      args_str.length
    )
  );
  instance.exports.wasm_main(args_ptr, args_str.length);
  const openedPath = root.dir.path_open(0, BigInt(0), 0).fd_obj;
  const dirRet = openedPath.path_lookup(".", 0);
  const dir = dirRet.inode_obj;
  if (dir) {
    const opened = dir.path_open(0, BigInt(0), 0).fd_obj;
    if (!opened) {
      return [out_file.data, stderr, false];
    }
    const fs = readRecursive(opened);
    const folders = [...fs.entries()].filter(
      (f) => f[0] !== "in" && f[0] !== "out"
    );
    if (folders.length > 0) {
      const file = new File(
        [new Uint8Array(Array.from(out_file.data))],
        `${in_name.split(".").slice(0, -1).join(".")}${out_ext}`
      );
      const filteredMap = /* @__PURE__ */ new Map();
      for (const [name, entry] of folders) {
        filteredMap.set(name, entry);
      }
      const zipped = await zipFiles(file, filteredMap);
      return [zipped, stderr, true];
    }
  }
  return [out_file.data, stderr, false];
}
const zipFiles = async (output, entries) => {
  const zipFormatted = pandocToFiles(entries);
  const zipped = zip.makeZip([...zipFormatted, output]);
  const reader = zipped.getReader();
  const chunks = [];
  let done = false;
  while (!done) {
    const { done: d, value } = await reader.read();
    done = d;
    if (value) {
      chunks.push(value);
    }
  }
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
};
const pandocToFiles = (entries, parent = "") => {
  const flattened = [];
  for (const [name, entry] of entries) {
    const fullPath = parent ? `${parent}/${name}` : name;
    if (entry.type === "folder") {
      const nestedFiles = pandocToFiles(entry.entries, fullPath);
      flattened.push(...nestedFiles);
    } else {
      const file = new File([new Uint8Array(Array.from(entry.data))], fullPath);
      flattened.push(file);
    }
  }
  return flattened;
};
const readRecursive = (fd) => {
  const entries = /* @__PURE__ */ new Map();
  const stat = fd.fd_filestat_get().filestat;
  if (!stat) return entries;
  const dir = fd.path_lookup(".", 0).inode_obj;
  if (!dir) return entries;
  const dirEntries = dir.contents;
  const results = readRecursiveInternal(dirEntries);
  for (const [name, entry] of results) {
    entries.set(name, entry);
  }
  return entries;
};
const readRecursiveInternal = (contents) => {
  const entries = /* @__PURE__ */ new Map();
  for (const [name, entry] of contents) {
    if (entry instanceof wasiShim.File) {
      const file = {
        data: entry.data,
        type: "file"
      };
      entries.set(name, file);
    } else {
      const folder = {
        entries: readRecursiveInternal(
          entry.contents
        ),
        type: "folder"
      };
      entries.set(name, folder);
    }
  }
  return entries;
};
