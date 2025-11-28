import { initializeImageMagick, MagickImageCollection, MagickImage, MagickReadSettings, MagickFormat } from "@imagemagick/magick-wasm";
import { makeZip } from "client-zip";
import { RIFFFile } from "riff-file";
import { unpackString, unpackArray } from "byte-data";
import { parseIcns } from "vert-wasm";
const DWORD = { bits: 32, be: false, signed: false, fp: false };
function parseAni(arr) {
  const riff = new RIFFFile();
  riff.setSignature(arr);
  const signature = riff.signature;
  if (signature.format !== "ACON") {
    throw new Error(
      `Expected format. Expected "ACON", got "${signature.format}"`
    );
  }
  function mapChunk(chunkId, mapper) {
    const chunk = riff.findChunk(chunkId);
    return chunk == null ? null : mapper(chunk);
  }
  function readImages(chunk, frameCount) {
    return chunk.subChunks.slice(0, frameCount).map((c) => {
      if (c.chunkId !== "icon") {
        throw new Error(`Unexpected chunk type in fram: ${c.chunkId}`);
      }
      return arr.slice(c.chunkData.start, c.chunkData.end);
    });
  }
  const metadata = mapChunk("anih", (c) => {
    const words = unpackArray(
      arr,
      DWORD,
      c.chunkData.start,
      c.chunkData.end
    );
    return {
      cbSize: words[0],
      nFrames: words[1],
      nSteps: words[2],
      iWidth: words[3],
      iHeight: words[4],
      iBitCount: words[5],
      nPlanes: words[6],
      iDispRate: words[7],
      bfAttributes: words[8]
    };
  });
  if (metadata == null) {
    throw new Error("Did not find anih");
  }
  const rate = mapChunk("rate", (c) => {
    return unpackArray(arr, DWORD, c.chunkData.start, c.chunkData.end);
  });
  const seq = mapChunk("seq ", (c) => {
    return unpackArray(arr, DWORD, c.chunkData.start, c.chunkData.end);
  });
  const lists = riff.findChunk("LIST", true);
  const imageChunk = lists?.find((c) => c.format === "fram");
  if (imageChunk == null) {
    throw new Error("Did not find fram LIST");
  }
  let images = readImages(imageChunk, metadata.nFrames);
  let title = null;
  let artist = null;
  const infoChunk = lists?.find((c) => c.format === "INFO");
  if (infoChunk != null) {
    infoChunk.subChunks.forEach((c) => {
      switch (c.chunkId) {
        case "INAM":
          title = unpackString(
            arr,
            c.chunkData.start,
            c.chunkData.end
          );
          break;
        case "IART":
          artist = unpackString(
            arr,
            c.chunkData.start,
            c.chunkData.end
          );
          break;
        case "LIST":
          if (c.format === "fram") {
            images = readImages(c, metadata.nFrames);
          }
          break;
      }
    });
  }
  return { images, rate, seq, metadata, artist, title };
}
let magickInitialized = false;
self.postMessage({ type: "ready", id: "0" });
const handleMessage = async (message) => {
  switch (message.type) {
    case "load": {
      try {
        if (!message.wasm || !(message.wasm instanceof ArrayBuffer)) {
          throw new Error(
            `Invalid WASM data: ${typeof message.wasm}`
          );
        }
        const wasmBytes = new Uint8Array(message.wasm);
        await initializeImageMagick(wasmBytes);
        magickInitialized = true;
        return { type: "loaded" };
      } catch (error) {
        return {
          type: "error",
          error: `error loading magick-wasm: ${error.message}`
        };
      }
    }
    case "convert": {
      if (!magickInitialized) {
        return { type: "error", error: "magick-wasm not initialized" };
      }
      const compression = message.compression ?? void 0;
      const keepMetadata = message.keepMetadata ?? true;
      if (!message.to.startsWith(".")) message.to = `.${message.to}`;
      message.to = message.to.toLowerCase();
      if (message.to === ".jfif") message.to = ".jpeg";
      let from = message.input.from;
      if (from === ".jfif") from = ".jpeg";
      if (from === ".fit") from = ".fits";
      const buffer = await message.input.file.arrayBuffer();
      if (from === ".ico") {
        const imgs = MagickImageCollection.create();
        while (true) {
          try {
            const img2 = MagickImage.create(
              new Uint8Array(buffer),
              new MagickReadSettings({
                format: MagickFormat.Ico,
                frameIndex: imgs.length
              })
            );
            imgs.push(img2);
          } catch (_) {
            break;
          }
        }
        if (imgs.length === 0) {
          return {
            type: "error",
            error: `Failed to read ICO -- no images found inside?`
          };
        }
        const convertedImgs = [];
        await Promise.all(
          imgs.map(async (img2, i) => {
            const output = await magickConvert(
              img2,
              message.to,
              keepMetadata,
              compression
            );
            convertedImgs[i] = output;
          })
        );
        const zip = makeZip(
          convertedImgs.map(
            (img2, i) => new File(
              [new Uint8Array(img2)],
              `image${i}.${message.to.slice(1)}`
            )
          ),
          "images.zip"
        );
        const zipBytes = await readToEnd(zip.getReader());
        imgs.dispose();
        return {
          type: "finished",
          output: zipBytes,
          zip: true
        };
      } else if (from === ".ani") {
        console.log("Parsing ANI file");
        try {
          const parsedAni = parseAni(new Uint8Array(buffer));
          const files = [];
          await Promise.all(
            parsedAni.images.map(async (img2, i) => {
              const blob = await magickConvert(
                MagickImage.create(
                  img2,
                  new MagickReadSettings({
                    format: MagickFormat.Ico
                  })
                ),
                message.to,
                keepMetadata,
                compression
              );
              files.push(
                new File(
                  [new Uint8Array(blob)],
                  `image${i}${message.to}`
                )
              );
            })
          );
          const zip = makeZip(files, "images.zip");
          const zipBytes = await readToEnd(zip.getReader());
          return {
            type: "finished",
            output: zipBytes,
            zip: true
          };
        } catch (e) {
          console.error(e);
        }
      } else if (from === ".icns") {
        const icns = parseIcns(new Uint8Array(buffer));
        if (typeof icns === "string") {
          return {
            type: "error",
            error: `Failed to read ICNS -- ${icns}`
          };
        }
        const formats = [
          MagickFormat.Png,
          MagickFormat.Jpeg,
          MagickFormat.Rgba,
          MagickFormat.Rgb
        ];
        const outputs = [];
        for (const file of icns) {
          for (const format of formats) {
            try {
              const img2 = MagickImage.create(
                file,
                new MagickReadSettings({
                  format
                })
              );
              const converted2 = await magickConvert(
                img2,
                message.to,
                keepMetadata,
                compression
              );
              outputs.push(converted2);
              break;
            } catch (_) {
              continue;
            }
          }
        }
        const zip = makeZip(
          outputs.map(
            (img2, i) => new File(
              [new Uint8Array(img2)],
              `image${i}.${message.to.slice(1)}`
            )
          ),
          "images.zip"
        );
        const zipBytes = await readToEnd(zip.getReader());
        return {
          type: "finished",
          output: zipBytes,
          zip: true
        };
      }
      if ((from === ".webp" || from === ".gif") && (message.to === ".gif" || message.to === ".webp")) {
        const collection = MagickImageCollection.create(
          new Uint8Array(buffer)
        );
        const format = message.to === ".gif" ? MagickFormat.Gif : MagickFormat.WebP;
        const result = await new Promise((resolve) => {
          collection.write(format, (output) => {
            resolve(structuredClone(output));
          });
        });
        collection.dispose();
        return {
          type: "finished",
          output: result
        };
      }
      const img = MagickImage.create(
        new Uint8Array(buffer),
        new MagickReadSettings({
          format: from.slice(1).toUpperCase()
        })
      );
      const converted = await magickConvert(
        img,
        message.to,
        keepMetadata,
        compression
      );
      return {
        type: "finished",
        output: converted
      };
    }
    default:
      return {
        type: "error",
        error: `Unknown message type: ${message.type}`
      };
  }
};
const readToEnd = async (reader) => {
  const chunks = [];
  let done = false;
  while (!done) {
    const { value, done: d } = await reader.read();
    if (value) chunks.push(value);
    done = d;
  }
  const blob = new Blob(
    chunks.map((chunk) => new Uint8Array(chunk)),
    { type: "application/zip" }
  );
  const arrayBuffer = await blob.arrayBuffer();
  return new Uint8Array(arrayBuffer);
};
const magickConvert = async (img, to, keepMetadata, compression) => {
  let fmt = to.slice(1).toUpperCase();
  if (fmt === "JFIF") fmt = "JPEG";
  if (fmt === "ICO") {
    const max = 256;
    const w = img.width;
    const h = img.height;
    if (w > max || h > max) {
      const scale = max / Math.max(w, h);
      const newW = Math.max(1, Math.round(w * scale));
      const newH = Math.max(1, Math.round(h * scale));
      img.resize(newW, newH);
    }
  }
  const result = await new Promise((resolve, reject) => {
    try {
      if (compression) img.quality = compression;
      if (!keepMetadata) img.strip();
      img.write(fmt, (o) => {
        resolve(structuredClone(o));
      });
    } catch (error) {
      reject(error);
    }
  });
  return result;
};
onmessage = async (e) => {
  const message = e.data;
  try {
    const res = await handleMessage(message);
    if (!res) return;
    postMessage({
      ...res,
      id: message.id
    });
  } catch (e2) {
    postMessage({
      type: "error",
      error: e2,
      id: message.id
    });
  }
};
