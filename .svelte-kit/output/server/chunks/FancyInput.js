import { Y as attr_class, a4 as attr, a6 as bind_props, Z as stringify } from "./index2.js";
import { e as escape_html } from "./context.js";
function FancyInput($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className,
      placeholder = "",
      value = void 0,
      disabled = false,
      extension,
      prefix,
      type = "text",
      min = 0,
      max = 100
    } = $$props;
    $$renderer2.push(`<div${attr_class(`relative flex w-full ${stringify(className)}`)}><input${attr("type", type)}${attr("min", min)}${attr("max", max)}${attr("value", value)}${attr("placeholder", placeholder)}${attr("disabled", disabled, true)}${attr_class(`w-full p-3 rounded-lg bg-panel border-2 border-button ${stringify(prefix ? "pl-[2rem]" : "pl-3")} ${stringify(extension ? "pr-[4rem]" : "pr-3")} ${stringify(disabled && "opacity-50 cursor-not-allowed")}`)}/> `);
    if (prefix) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute left-0 top-0 bottom-0 flex items-center px-2"><span class="text-sm text-gray-400 px-2 py-1 rounded">${escape_html(prefix)}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (extension) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute right-0 top-0 bottom-0 flex items-center px-4"><span class="text-sm bg-button text-black dynadark:text-white px-2 py-1 rounded">${escape_html(extension)}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
export {
  FancyInput as F
};
