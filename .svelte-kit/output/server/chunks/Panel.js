import { Y as attr_class, Z as stringify } from "./index2.js";
function Panel($$renderer, $$props) {
  const { class: classList, children } = $$props;
  $$renderer.push(`<div${attr_class(`bg-panel ${stringify(classList)} p-3 rounded-2.5xl shadow-panel`)}>`);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  Panel as P
};
