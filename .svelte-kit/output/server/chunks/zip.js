import { c5 as log, c6 as error } from "./index.svelte.js";
import { unzip } from "fflate";
import { downloadZip } from "client-zip";
async function extractZip(file) {
  log(["zip"], `extracting zip: ${file.name}`);
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  return new Promise((resolve, reject) => {
    unzip(uint8Array, (err, unzipped) => {
      if (err) {
        error(["zip"], `failed to extract zip: ${err.message}`);
        reject(new Error(`Failed to extract zip: ${err.message}`));
        return;
      }
      const entries = Object.entries(unzipped).filter(([filename]) => !ignoreEntry(filename)).map(([filename, data]) => ({
        filename,
        data: new Uint8Array(data)
      }));
      log(["zip"], `extracted ${entries.length} entries from ${file.name}`);
      resolve(entries);
    });
  });
}
async function createZip(files) {
  log(["zip"], `creating zip with ${files.length} files`);
  const zipBlob = await downloadZip(files).blob();
  return new Uint8Array(await zipBlob.arrayBuffer());
}
function ignoreEntry(filename) {
  return filename.startsWith(".") || filename.includes("/__MACOSX/") || filename.endsWith("/");
}
export {
  createZip,
  extractZip,
  ignoreEntry
};
