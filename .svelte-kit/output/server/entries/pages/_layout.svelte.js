import { U as sanitize_props, V as spread_props, W as slot, X as store_get, Y as attr_class, Z as stringify, _ as unsubscribe_stores, $ as attributes, a0 as state, r as render_effect, P as set, d as get, a1 as attr_style, a2 as clsx, a3 as ensure_array_like, a4 as attr, a5 as head } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/client.js";
import { I as Icon, d as dropping, e as effects, f as files, g as gradientColor, T as ToastManager, a as dialogs, b as footer_copyright, c as footer_source_code, G as GITHUB_URL_FILETOOLS, h as footer_discord_server, D as DISCORD_URL, i as footer_privacy_policy, n as navbar_upload, j as navbar_convert, k as navbar_settings, l as navbar_about, m as browser, o as navbar_toggle_theme, F as FILETOOLS_NAME } from "../../chunks/index.svelte.js";
import { p as page } from "../../chunks/index3.js";
import { d as duration, t as transition, R as Refresh_cw } from "../../chunks/animation.js";
import { h as html } from "../../chunks/html.js";
import clsx$1 from "clsx";
import { n as noop, e as escape_html } from "../../chunks/context.js";
import { I as Info } from "../../chunks/info.js";
import { X, T as Tooltip } from "../../chunks/Tooltip.js";
import "../../chunks/runtime.js";
import { P as Panel } from "../../chunks/Panel.js";
import { U as Upload } from "../../chunks/Tooltip.svelte_svelte_type_style_lang.js";
import { S as Settings, a as Sun, M as Moon } from "../../chunks/sun.js";
import "@ffmpeg/ffmpeg";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function Ban($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.554.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M4.929 4.929 19.07 19.071" }],
    ["circle", { "cx": "12", "cy": "12", "r": "10" }]
  ];
  Icon($$renderer, spread_props([
    { name: "ban" },
    $$sanitized_props,
    {
      /**
       * @component @name Ban
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNC45MjkgNC45MjkgMTkuMDcgMTkuMDcxIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ban
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.554.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Triangle_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.554.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      {
        "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
      }
    ],
    ["path", { "d": "M12 9v4" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "triangle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name TriangleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEuNzMgMTgtOC0xNGEyIDIgMCAwIDAtMy40OCAwbC04IDE0QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjczLTMiIC8+CiAgPHBhdGggZD0iTTEyIDl2NCIgLz4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/triangle-alert
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function linear(t) {
  return t;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function UploadRegion($$renderer) {
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$dropping", dropping)) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div${attr_class(`fixed w-screen h-screen opacity-40 dynadark:opacity-20 z-[100] pointer-events-none blur-2xl ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "dragoverlay" : "bg-accent-blue")}`, "svelte-1bsgigu", {
      "_dragover": dropping && store_get($$store_subs ??= {}, "$effects", effects)
    })}></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Vert_bg_svg_component($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.push(`<svg${attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      style: "fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2",
      viewBox: "0 0 1279 1307",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    void 0,
    3
  )}>${html('<path d="M418.473 1306.492.003.008h312.422L713.85 1306.492zm2.176-2.991h289.12A69657160 69657160 0 0 0 310.196 2.999H4.115zM707.24 878.305 969.462.008h308.623L905.409 1163.564zm3.291-.517 193.872 279.085L1273.978 2.999H971.692z"/>')}</svg>`);
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
class Tween {
  #current;
  #target;
  /** @type {TweenedOptions<T>} */
  #defaults;
  /** @type {import('../internal/client/types').Task | null} */
  #task = null;
  /**
   * @param {T} value
   * @param {TweenedOptions<T>} options
   */
  constructor(value, options = {}) {
    this.#current = state(value);
    this.#target = state(value);
    this.#defaults = options;
  }
  /**
   * Create a tween whose value is bound to the return value of `fn`. This must be called
   * inside an effect root (for example, during component initialisation).
   *
   * ```svelte
   * <script>
   * 	import { Tween } from 'svelte/motion';
   *
   * 	let { number } = $props();
   *
   * 	const tween = Tween.of(() => number);
   * <\/script>
   * ```
   * @template U
   * @param {() => U} fn
   * @param {TweenedOptions<U>} [options]
   */
  static of(fn, options) {
    const tween = new Tween(fn(), options);
    render_effect(() => {
      tween.set(fn());
    });
    return tween;
  }
  /**
   * Sets `tween.target` to `value` and returns a `Promise` that resolves if and when `tween.current` catches up to it.
   *
   * If `options` are provided, they will override the tween's defaults.
   * @param {T} value
   * @param {TweenedOptions<T>} [options]
   * @returns
   */
  set(value, options) {
    set(this.#target, value);
    let {
      delay = 0,
      duration: duration2 = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...this.#defaults, ...options };
    if (duration2 === 0) {
      this.#task?.abort();
      set(this.#current, value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    let started = false;
    let previous_task = this.#task;
    this.#task = loop((now2) => {
      if (now2 < start) {
        return true;
      }
      if (!started) {
        started = true;
        const prev = this.#current.v;
        fn = interpolate(prev, value);
        if (typeof duration2 === "function") {
          duration2 = duration2(prev, value);
        }
        previous_task?.abort();
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration2) {
        set(this.#current, value);
        return false;
      }
      set(this.#current, fn(easing(elapsed / /** @type {number} */
      duration2)));
      return true;
    });
    return this.#task.promise;
  }
  get current() {
    return get(this.#current);
  }
  get target() {
    return get(this.#target);
  }
  set target(v) {
    this.set(v);
  }
}
function Gradients($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const colors = [
      {
        matcher: (path) => path === "/",
        color: "var(--bg-gradient-from)",
        at: 100
      },
      {
        matcher: (path) => path === "/convert/",
        color: `var(--bg-gradient-${store_get($$store_subs ??= {}, "$gradientColor", gradientColor) ? store_get($$store_subs ??= {}, "$gradientColor", gradientColor) + "-" : ""}from)`,
        at: 25
      },
      {
        matcher: (path) => path === "/settings/",
        color: "var(--bg-gradient-blue-from)",
        at: 25
      },
      {
        matcher: (path) => path === "/about/",
        color: "var(--bg-gradient-from)",
        at: 25
      },
      {
        matcher: (path) => path === "/privacy/",
        color: "var(--bg-gradient-red-from)",
        at: 100
      }
    ];
    const color = Object.values(colors).find((p) => p.matcher(page.url.pathname)) || { color: "transparent", at: 0 };
    let at = new Tween(color.at, { duration, easing: quintOut });
    const maskImage = `linear-gradient(to top, transparent ${100 - at.current}%, black 100%)`;
    if (page.url.pathname === "/") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed -z-30 top-0 left-0 w-screen h-screen flex items-center justify-center overflow-hidden">`);
      Vert_bg_svg_component($$renderer2, {
        class: "fill-[--fg] opacity-10 dynadark:opacity-5 scale-[200%] md:scale-[80%]"
      });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="fixed top-0 left-0 w-screen h-screen -z-40 pointer-events-none"${attr_style(`background-color: ${stringify(color.color)}; mask-image: ${stringify(maskImage)}; -webkit-mask-image: ${stringify(maskImage)}; transition: background-color ${stringify(duration)}ms ${stringify(transition)};`)}></div> `);
    if (page.url.pathname === "/convert/" && files.files.length === 1) {
      $$renderer2.push("<!--[-->");
      const bgMask = "linear-gradient(to top, transparent 5%, rgba(0, 0, 0, 0.5) 100%)";
      $$renderer2.push(`<div class="fixed top-0 left-0 w-screen h-screen -z-50"${attr_style(`background-image: url(${stringify(files.files[0].blobUrl)}); background-size: cover; background-position: center; background-repeat: no-repeat; filter: blur(10px); mask-image: ${stringify(bgMask)}; -webkit-mask-image: ${stringify(bgMask)};`)}></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    const { id, type, message, durations } = props.toast;
    const additional = "additional" in props.toast ? props.toast.additional : {};
    const colors = {
      success: "purple",
      error: "red",
      info: "blue",
      warning: "pink"
    };
    const Icons = {
      success: Check,
      error: Ban,
      info: Info,
      warning: Triangle_alert
    };
    let color = colors[type];
    let Icon2 = Icons[type];
    $$renderer2.push(`<div${attr_class(`flex flex-col max-w-[100%] md:max-w-md p-4 gap-2 bg-accent-${stringify(color)} border-accent-${stringify(color)}-alt border-l-4 rounded-lg shadow-md`)}><div class="flex flex-row items-center justify-between w-full gap-4"><div class="flex items-center gap-2"><!---->`);
    Icon2($$renderer2, {
      class: "w-6 h-6 text-black flex-shrink-0",
      size: "24",
      stroke: "2",
      fill: "none"
    });
    $$renderer2.push(`<!----> <p${attr_class(clsx(clsx$1("text-black whitespace-pre-wrap", { "font-normal": true })))}>${escape_html(message)}</p></div> <button class="text-gray-600 hover:text-black flex-shrink-0">`);
    X($$renderer2, { size: "16" });
    $$renderer2.push(`<!----></button></div> `);
    if (typeof message !== "string") {
      $$renderer2.push("<!--[-->");
      const MessageComponent = message;
      $$renderer2.push(`<div class="font-normal"><!---->`);
      MessageComponent($$renderer2, { durations, id, message, type, additional });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Toasts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="fixed bottom-28 md:bottom-0 right-0 p-4 flex flex-col-reverse gap-4 z-50"><!--[-->`);
    const each_array = ensure_array_like(ToastManager.toasts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast = each_array[$$index];
      $$renderer2.push(`<div class="flex justify-end">`);
      Toast($$renderer2, { toast });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function Dialog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const { id, title, message, buttons, type } = props;
    const additional = "additional" in props ? props.additional : void 0;
    const colors = {
      success: "purple",
      error: "red",
      info: "blue",
      warning: "pink"
    };
    const Icons = {
      success: Check,
      error: Ban,
      info: Info,
      warning: Triangle_alert
    };
    let color = colors[type];
    let Icon2 = Icons[type];
    $$renderer2.push(`<div${attr_class(`flex flex-col items-center justify-between w-full max-w-sm p-4 gap-6 bg-panel border-accent-${stringify(color)}-alt rounded-lg shadow-md`)}><div class="flex justify-between w-full items-center"><div class="flex items-center gap-3"><div${attr_class(`rounded-full bg-accent-${stringify(color)} p-2 inline-block w-8 h-8`)}><!---->`);
    Icon2($$renderer2, { size: "16", color: "black" });
    $$renderer2.push(`<!----></div> <p class="text-lg font-semibold">${escape_html(title)}</p></div></div> <div class="flex flex-col gap-1 w-full">`);
    if (typeof message === "string") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-sm font-normal text-muted whitespace-pre-wrap">${escape_html(message)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      const MessageComponent = message;
      $$renderer2.push(`<div class="text-sm font-normal text-muted"><!---->`);
      MessageComponent($$renderer2, { id, title, type, buttons, additional });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-row items-center gap-4 w-full"><!--[-->`);
    const each_array = ensure_array_like(buttons);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let { text, action } = each_array[i];
      $$renderer2.push(`<button${attr_class(`hover:scale-105 active:scale-100 duration-200 flex items-center gap-2 p-2 rounded-md ${stringify(i === 1 ? `bg-accent-${color} text-black` : "bg-button text-black dynadark:text-white")} px-6`)}>${escape_html(text)}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function Dialogs($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let dialogList = [];
    dialogs.subscribe((value) => {
      dialogList = value;
    });
    if (dialogList.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-40"><!--[-->`);
      const each_array = ensure_array_like(dialogList);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let dialog = each_array[i];
        if (i === 0) {
          $$renderer2.push("<!--[-->");
          Dialog($$renderer2, spread_props([dialog]));
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function PageContent($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<div class="grid grid-rows-1 grid-cols-1 h-full flex-grow"><!---->`);
    {
      $$renderer2.push(`<div class="row-start-1 col-start-1"><div class="flex flex-col h-full pb-32">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!----></div>`);
  });
}
function Logo($$renderer) {
  $$renderer.push(`<svg width="100%" height="100%" viewBox="0 0 300 83" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(0.172257,0,0,0.172257,-160.012,-223.436)"><path d="M1082.77,1777.46L928.913,1297.11L1043.78,1297.11L1191.37,1777.46L1082.77,1777.46ZM1188.94,1620.03L1285.35,1297.11L1398.82,1297.11L1261.8,1724.91L1188.94,1620.03ZM1803.99,1777.46L1441.99,1777.46L1441.99,1297.11L1801.21,1297.11L1801.21,1398.05L1549.89,1398.05L1549.89,1485.77L1771.27,1485.77L1771.27,1581.14L1549.89,1581.14L1549.89,1676.52L1803.99,1676.52L1803.99,1777.46ZM1980.12,1615.25L1980.12,1777.46L1872.22,1777.46L1872.22,1297.11L2069.23,1297.11C2127.24,1297.11 2171.57,1311.49 2202.2,1340.27C2232.83,1369.04 2248.14,1407.57 2248.14,1455.83C2248.14,1504.1 2232.83,1542.74 2202.2,1571.74C2187.36,1585.8 2169.3,1596.44 2148.04,1603.69L2261.37,1777.46L2140.24,1777.46L2042.05,1615.25L1980.12,1615.25ZM1980.12,1398.05L1980.12,1514.31L2062.96,1514.31C2089.42,1514.31 2108.56,1509.32 2120.4,1499.34C2132.23,1489.36 2138.15,1474.86 2138.15,1455.83C2138.15,1436.8 2132.23,1422.42 2120.4,1412.67C2108.56,1402.92 2089.42,1398.05 2062.96,1398.05L1980.12,1398.05ZM2422.18,1398.05L2282.95,1398.05L2282.95,1297.11L2668.62,1297.11L2668.62,1398.05L2529.39,1398.05L2529.39,1777.46L2422.18,1777.46L2422.18,1398.05Z"></path></g></svg>`);
}
function MobileLogo($$renderer) {
  $$renderer.push(`<div class="flex md:hidden justify-center items-center pb-8 pt-4"><a class="flex items-center justify-center bg-panel p-2 rounded-[20px] shadow-panel" href="/"><div class="h-14 bg-accent rounded-[14px] flex items-center justify-center"><div class="w-28 h-5">`);
  Logo($$renderer);
  $$renderer.push(`<!----></div></div></a></div>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const commitHash = "a8601e8";
    const items = [
      [footer_source_code(), GITHUB_URL_FILETOOLS],
      [footer_discord_server(), DISCORD_URL],
      [footer_privacy_policy(), "/privacy"],
      ...[[commitHash, `${GITHUB_URL_FILETOOLS}/commit/${commitHash}`]]
    ];
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="hidden md:block w-full h-14 border-t border-separator fixed bottom-0 mt-12"><div class="w-full h-full flex items-center justify-center text-muted gap-3 relative"><p>${escape_html(footer_copyright({ year }))}</p> <!--[-->`);
    const each_array = ensure_array_like(items);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [name, url] = each_array[$$index];
      $$renderer2.push(`<p>•</p> <a class="hover:underline font-normal"${attr("href", url)}${attr("target", url.startsWith("http") ? "_blank" : "_self")}>${escape_html(name)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="absolute bottom-0 left-0 w-full h-24 -z-10 pointer-events-none" style="background: linear-gradient(to bottom, transparent, var(--bg) 100%)"></div></footer>`);
  });
}
function Base($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const items = [
      {
        name: navbar_upload(),
        url: "/",
        activeMatch: (pathname) => pathname === "/",
        icon: Upload
      },
      {
        name: navbar_convert(),
        url: "/convert/",
        activeMatch: (pathname) => pathname === "/convert/" || pathname === "/convert",
        icon: Refresh_cw,
        badge: files.files.length
      },
      {
        name: navbar_settings(),
        url: "/settings/",
        activeMatch: (pathname) => pathname.startsWith("/settings"),
        icon: Settings
      },
      {
        name: navbar_about(),
        url: "/about/",
        activeMatch: (pathname) => pathname.startsWith("/about"),
        icon: Info
      }
    ];
    let links = [];
    const linkRects = links.map((l) => l.getBoundingClientRect());
    const selectedIndex = items.findIndex((i) => i.activeMatch(page.url.pathname));
    function link($$renderer3, item, index) {
      const Icon2 = item.icon;
      $$renderer3.push(`<a${attr("href", item.url)}${attr("aria-label", item.name)}${attr_class(clsx(clsx$1("min-w-16 md:min-w-32 h-full relative z-10 rounded-xl flex flex-1 items-center justify-center gap-3 overflow-hidden", {
        "bg-panel-highlight": item.activeMatch(page.url.pathname) && !browser
      })))}${attr("draggable", false)}><div class="grid grid-rows-1 grid-cols-1"><!---->`);
      {
        $$renderer3.push(`<div class="w-full row-start-1 col-start-1 h-full flex items-center justify-center gap-3"><div class="relative"><!---->`);
        Icon2($$renderer3, {});
        $$renderer3.push(`<!----> `);
        if (item.badge) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="absolute overflow-hidden grid grid-rows-1 grid-cols-1 -top-1 font-display -right-1 w-fit px-1.5 h-4 rounded-full bg-badge text-on-badge font-medium" style="font-size: 0.7rem;"><!---->`);
          {
            $$renderer3.push(`<div class="flex items-center justify-center w-full h-full col-start-1 row-start-1">${escape_html(item.badge)}</div>`);
          }
          $$renderer3.push(`<!----></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <p class="font-medium hidden hyphens-auto break-all md:flex min-w-0">${escape_html(item.name)}</p></div>`);
      }
      $$renderer3.push(`<!----></div></a>`);
    }
    $$renderer2.push(`<div>`);
    Panel($$renderer2, {
      class: "max-w-[778px] w-screen h-20 flex items-center gap-3 relative",
      children: ($$renderer3) => {
        linkRects.at(selectedIndex) || linkRects[0];
        {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> <a class="w-28 h-full bg-accent rounded-xl items-center justify-center hidden md:flex" href="/"><div class="h-5 w-full">`);
        Logo($$renderer3);
        $$renderer3.push(`<!----></div></a> <!--[-->`);
        const each_array = ensure_array_like(items);
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let item = each_array[i];
          link($$renderer3, item);
        }
        $$renderer3.push(`<!--]--> <div class="w-0.5 bg-separator h-full hidden md:flex"></div> `);
        Tooltip($$renderer3, {
          text: navbar_toggle_theme(),
          position: "right",
          children: ($$renderer4) => {
            $$renderer4.push(`<button class="w-14 h-full items-center justify-center hidden md:flex">`);
            Sun($$renderer4, { class: "dynadark:hidden block" });
            $$renderer4.push(`<!----> `);
            Moon($$renderer4, { class: "dynadark:block hidden" });
            $$renderer4.push(`<!----></button>`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function Desktop($$renderer) {
  $$renderer.push(`<div class="hidden md:flex p-8 w-screen justify-center">`);
  Base($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Mobile($$renderer) {
  $$renderer.push(`<div class="fixed md:hidden bottom-0 left-0 w-screen p-8 justify-center z-100"><div class="flex flex-col justify-center items-center">`);
  Base($$renderer);
  $$renderer.push(`<!----></div></div>`);
}
const featuredImage = "/_app/immutable/assets/FileTools_Feature.D5UIwpMt.webp";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, data } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(FILETOOLS_NAME)}</title>`);
      });
      $$renderer3.push(`<meta name="theme-color" content="#F2ABEE"/> <meta name="title"${attr("content", `${stringify(FILETOOLS_NAME)} — Free, fast, and awesome file converter`)}/> <meta name="description" content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."/> <meta property="og:url" content="https://filetools.app"/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", `${stringify(FILETOOLS_NAME)} — Free, fast, and awesome file converter`)}/> <meta property="og:description" content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."/> <meta property="og:image"${attr("content", featuredImage)}/> <meta name="twitter:card" content="summary_large_image"/> <meta property="twitter:domain" content="filetools.app"/> <meta property="twitter:url" content="https://filetools.app"/> <meta property="twitter:title"${attr("content", `${stringify(FILETOOLS_NAME)} — Free, fast, and awesome file converter`)}/> <meta property="twitter:description" content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."/> <meta property="twitter:image"${attr("content", featuredImage)}/> <link rel="manifest" href="/manifest.json"/> <link rel="canonical" href="https://filetools.app/"/> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (data.isAprilFools) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<style>
			* {
				font-family: "Comic Sans MS", "Comic Sans", cursive !important;
			}
		</style>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<!---->`);
    {
      $$renderer2.push(`<div class="flex flex-col min-h-screen h-full w-full overflow-x-hidden" role="region"><!---->`);
      UploadRegion($$renderer2);
      $$renderer2.push(`<!----> <div><!---->`);
      MobileLogo($$renderer2);
      $$renderer2.push(`<!----> <!---->`);
      Desktop($$renderer2);
      $$renderer2.push(`<!----></div> <!---->`);
      PageContent($$renderer2, { children });
      $$renderer2.push(`<!----> <!---->`);
      Toasts($$renderer2);
      $$renderer2.push(`<!----> <!---->`);
      Dialogs($$renderer2);
      $$renderer2.push(`<!----> <div><!---->`);
      Footer($$renderer2);
      $$renderer2.push(`<!----> <!---->`);
      Mobile($$renderer2);
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!----> <!---->`);
    Gradients($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
