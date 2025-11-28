import { e as escape_html } from "../../../chunks/context.js";
import "clsx";
import { h as html } from "../../../chunks/html.js";
import "../../../chunks/runtime.js";
import { I as Icon, aC as privacy_title, aD as privacy_summary_title, E as sanitize, H as link, aE as privacy_conversions_title, aF as privacy_donations_title, aG as privacy_conversion_errors_title, aH as privacy_conversion_errors_description, aI as privacy_conversion_errors_list_job_id, aJ as privacy_conversion_errors_list_format_from, aK as privacy_conversion_errors_list_format_to, aL as privacy_conversion_errors_list_stderr, aM as privacy_conversion_errors_list_video, aN as privacy_conversion_errors_footer, aO as privacy_analytics_title, aP as privacy_local_storage_title, aQ as privacy_contact_title, aR as privacy_last_updated, aS as privacy_summary_description, aT as privacy_conversions_description, aU as privacy_donations_description, aV as privacy_analytics_description, aW as privacy_local_storage_description, aX as privacy_contact_description } from "../../../chunks/index.svelte.js";
import { U as sanitize_props, V as spread_props, W as slot } from "../../../chunks/index2.js";
function Shield_check($$renderer, $$props) {
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
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "shield-check" },
    $$sanitized_props,
    {
      /**
       * @component @name ShieldCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="flex flex-col h-full items-center"><h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6">`);
    Shield_check($$renderer2, { size: "40", class: "inline-block -mt-2 mr-2" });
    $$renderer2.push(`<!----> ${escape_html(privacy_title())}</h1> <div class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"><div class="bg-panel rounded-2xl p-6 shadow-panel text-lg font-normal"><h2 class="text-2xl mb-3">${escape_html(privacy_summary_title())}</h2> <p class="mb-4">${html(sanitize(link(["vert_link"], privacy_summary_description(), ["https://filetools.app"], [true])))}</p> <h2 class="text-2xl mb-3">${escape_html(privacy_conversions_title())}</h2> <p class="mb-4">${html(sanitize(privacy_conversions_description()))}</p> <h2 class="text-2xl mb-3">${escape_html(privacy_donations_title())}</h2> <p class="mb-4">${html(sanitize(link(
      ["about_link", "stripe_link"],
      privacy_donations_description(),
      [
        "/about",
        "https://stripe.com/docs/disputes/prevention/advanced-fraud-detection"
      ],
      [false, true]
    )))}</p> <h2 class="text-2xl mb-3">${escape_html(privacy_conversion_errors_title())}</h2> <div class="mb-4">${escape_html(privacy_conversion_errors_description())} <ul class="list-disc list-inside mt-2 mb-2"><li>${escape_html(privacy_conversion_errors_list_job_id())}</li> <li>${escape_html(privacy_conversion_errors_list_format_from())}</li> <li>${escape_html(privacy_conversion_errors_list_format_to())}</li> <li>${escape_html(privacy_conversion_errors_list_stderr())}</li> <li>${escape_html(privacy_conversion_errors_list_video())}</li></ul> ${escape_html(privacy_conversion_errors_footer())}</div> <h3 class="text-xl mt-4 mb-2">${escape_html(privacy_analytics_title())}</h3> <p class="mb-4">${html(sanitize(link(
      ["settings_link", "plausible_link"],
      privacy_analytics_description(),
      [
        "/settings",
        "https://plausible.io/privacy-focused-web-analytics"
      ],
      [false, true]
    )))}</p> <h3 class="text-xl mt-4 mb-2">${escape_html(privacy_local_storage_title())}</h3> <p class="mb-4">${html(sanitize(link(["settings_link"], privacy_local_storage_description(), ["/settings"], [false])))}</p> <h3 class="text-xl mt-4 mb-2">${escape_html(privacy_contact_title())}</h3> <p class="mb-0">${html(sanitize(link(["email_link"], privacy_contact_description(), ["mailto:hello@filetools.app"], [false])))}</p> <p class="text-sm text-muted mt-6">${escape_html(privacy_last_updated())}</p></div></div></div>`);
  });
}
export {
  _page as default
};
