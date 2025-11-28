import { X as store_get, _ as unsubscribe_stores } from "../../chunks/index2.js";
import { F as Film, B as Book_text, A as Audio_lines, I as Image, U as Uploader } from "../../chunks/Uploader.js";
import { p as converters, u as upload_cards_video, q as upload_cards_documents, r as upload_cards_audio, s as upload_cards_images, t as upload_title, v as upload_subtitle, w as upload_cards_title, x as filetoolsdLoaded } from "../../chunks/index.svelte.js";
import "../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import "clsx";
import "../../chunks/runtime.js";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const getSupportedFormats = (name) => converters.find((c) => c.name === name)?.supportedFormats.map((f) => `${f.name}${f.fromSupported && f.toSupported ? "" : "*"}`).join(", ") || "none";
    const worker = (() => {
      const output = {
        Images: {
          formats: getSupportedFormats("imagemagick"),
          icon: Image,
          title: upload_cards_images(),
          status: converters.find((c) => c.name === "imagemagick")?.status || "not-ready"
        },
        Audio: {
          formats: getSupportedFormats("ffmpeg"),
          icon: Audio_lines,
          title: upload_cards_audio(),
          status: converters.find((c) => c.name === "ffmpeg")?.status || "not-ready"
        },
        Documents: {
          formats: getSupportedFormats("pandoc"),
          icon: Book_text,
          title: upload_cards_documents(),
          status: converters.find((c) => c.name === "pandoc")?.status || "not-ready"
        }
      };
      {
        output.Video = {
          formats: getSupportedFormats("filetoolsd"),
          icon: Film,
          title: upload_cards_video(),
          status: store_get($$store_subs ??= {}, "$filetoolsdLoaded", filetoolsdLoaded) === true ? "ready" : "not-ready"
          // not using converter.status for this
        };
      }
      return output;
    })();
    Array(Object.keys(worker).length).fill(false);
    $$renderer2.push(`<div class="max-w-6xl w-full mx-auto px-6 md:px-8"><div class="flex items-center justify-center pb-10 md:py-16"><div class="flex items-center h-auto gap-12 md:gap-24 md:flex-row flex-col"><div class="flex-grow w-full text-center md:text-left"><h1 class="text-4xl px-12 md:p-0 md:text-6xl flex-wrap tracking-tight leading-tight md:leading-[72px] mb-4 md:mb-6">${escape_html(upload_title())}</h1> <p class="font-normal px-5 md:p-0 text-lg md:text-xl text-black text-muted dynadark:text-muted">${escape_html(upload_subtitle())}</p></div> <div class="flex-grow w-full h-72">`);
    Uploader($$renderer2, { class: "w-full h-full" });
    $$renderer2.push(`<!----></div></div></div> <hr/> <div class="mt-10 md:mt-16"><h2 class="text-center text-4xl">${escape_html(upload_cards_title())}</h2> <div class="flex gap-4 mt-8 md:flex-row flex-col">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
