import { b as ssr_context, e as escape_html } from "../../../chunks/context.js";
import clsx from "clsx";
import { I as Icon, aY as availableLocales, aZ as settings_appearance_title, a_ as settings_appearance_brightness_theme, a$ as settings_appearance_brightness_description, e as effects, b0 as settings_appearance_light, b1 as settings_appearance_dark, b2 as settings_appearance_effect_settings, b3 as settings_appearance_effect_description, b4 as settings_appearance_enable, b5 as settings_appearance_disable, b6 as settings_language_title, b7 as settings_language_description, b8 as updateLocale, b9 as settings_conversion_title, ba as settings_conversion_filename_format, E as sanitize, bb as settings_conversion_filename_description, bc as settings_conversion_advanced_settings, bd as settings_conversion_default_format, be as settings_conversion_default_format_description, bf as settings_conversion_default_format_enable, bg as settings_conversion_default_format_disable, bh as settings_conversion_default_format_image, ad as categories, bi as settings_conversion_default_format_audio, bj as settings_conversion_default_format_video, bk as settings_conversion_default_format_document, bl as settings_conversion_metadata, bm as settings_conversion_metadata_description, bn as settings_conversion_keep, bo as settings_conversion_remove, bp as settings_conversion_quality, bq as settings_conversion_quality_description, br as settings_conversion_quality_images, bs as settings_conversion_quality_audio, bt as CONVERSION_BITRATES, bu as settings_conversion_rate, bv as SAMPLE_RATES, bw as settings_filetoolsd_title, bx as settings_filetoolsd_status, by as settings_filetoolsd_unavailable, bz as settings_filetoolsd_description, H as link, bA as GITHUB_URL_FILETOOLSD, bB as settings_filetoolsd_hosting_info, bC as settings_filetoolsd_instance, bD as settings_filetoolsd_auto_instance, bE as settings_filetoolsd_eu_instance, bF as settings_filetoolsd_us_instance, bG as settings_filetoolsd_custom_instance, bH as FileToolsDInstance, bI as settings_filetoolsd_url_placeholder, bJ as settings_filetoolsd_conversion_speed, bK as settings_filetoolsd_speed_description, bL as settings_filetoolsd_speeds_very_slow, bM as settings_filetoolsd_speeds_slower, bN as settings_filetoolsd_speeds_slow, bO as settings_filetoolsd_speeds_medium, bP as settings_filetoolsd_speeds_fast, bQ as settings_filetoolsd_speeds_ultra_fast, bR as settings_privacy_title, bS as settings_privacy_plausible_title, bT as settings_privacy_plausible_description, bU as settings_privacy_opt_in, bV as settings_privacy_opt_out, bW as settings_privacy_cache_title, bX as settings_privacy_cache_description, bY as settings_privacy_total_size, bZ as settings_privacy_files_cached_label, b_ as settings_privacy_refresh_cache, b$ as settings_privacy_clear_cache, c0 as settings_privacy_site_data_title, c1 as settings_privacy_site_data_description, c2 as settings_privacy_clear_all_data, c3 as Settings, c4 as settings_title } from "../../../chunks/index.svelte.js";
import "../../../chunks/runtime.js";
import { a as Sun, M as Moon, S as Settings$1 } from "../../../chunks/sun.js";
import { U as sanitize_props, V as spread_props, W as slot, Y as attr_class, Z as stringify, X as store_get, _ as unsubscribe_stores, a6 as bind_props, a2 as clsx$1, a4 as attr } from "../../../chunks/index2.js";
import { F as FancyInput } from "../../../chunks/FancyInput.js";
import { P as Panel } from "../../../chunks/Panel.js";
import { D as Dropdown, C as Chevron_down, F as FormatDropdown, T as Trash_2 } from "../../../chunks/FormatDropdown.js";
import { R as Refresh_cw } from "../../../chunks/animation.js";
import { h as html } from "../../../chunks/html.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function Chart_column($$renderer, $$props) {
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
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "M18 17V9" }],
    ["path", { "d": "M13 17V5" }],
    ["path", { "d": "M8 17v-3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "chart-column" },
    $$sanitized_props,
    {
      /**
       * @component @name ChartColumn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAzdjE2YTIgMiAwIDAgMCAyIDJoMTYiIC8+CiAgPHBhdGggZD0iTTE4IDE3VjkiIC8+CiAgPHBhdGggZD0iTTEzIDE3VjUiIC8+CiAgPHBhdGggZD0iTTggMTd2LTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chart-column
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
function Palette($$renderer, $$props) {
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
        "d": "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"
      }
    ],
    [
      "circle",
      { "cx": "13.5", "cy": "6.5", "r": ".5", "fill": "currentColor" }
    ],
    [
      "circle",
      {
        "cx": "17.5",
        "cy": "10.5",
        "r": ".5",
        "fill": "currentColor"
      }
    ],
    [
      "circle",
      { "cx": "6.5", "cy": "12.5", "r": ".5", "fill": "currentColor" }
    ],
    [
      "circle",
      { "cx": "8.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "palette" },
    $$sanitized_props,
    {
      /**
       * @component @name Palette
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJhMSAxIDAgMCAxIDAtMjAgMTAgOSAwIDAgMSAxMCA5IDUgNSAwIDAgMS01IDVoLTIuMjVhMS43NSAxLjc1IDAgMCAwLTEuNCAyLjhsLjMuNGExLjc1IDEuNzUgMCAwIDEtMS40IDIuOHoiIC8+CiAgPGNpcmNsZSBjeD0iMTMuNSIgY3k9IjYuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTAuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KICA8Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMi41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIiAvPgogIDxjaXJjbGUgY3g9IjguNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/palette
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
function Pause($$renderer, $$props) {
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
      "rect",
      { "x": "14", "y": "3", "width": "5", "height": "18", "rx": "1" }
    ],
    [
      "rect",
      { "x": "5", "y": "3", "width": "5", "height": "18", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "pause" },
    $$sanitized_props,
    {
      /**
       * @component @name Pause
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIxNCIgeT0iMyIgd2lkdGg9IjUiIGhlaWdodD0iMTgiIHJ4PSIxIiAvPgogIDxyZWN0IHg9IjUiIHk9IjMiIHdpZHRoPSI1IiBoZWlnaHQ9IjE4IiByeD0iMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pause
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
function Play($$renderer, $$props) {
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
        "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "play" },
    $$sanitized_props,
    {
      /**
       * @component @name Play
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA1YTIgMiAwIDAgMSAzLjAwOC0xLjcyOGwxMS45OTcgNi45OThhMiAyIDAgMCAxIC4wMDMgMy40NThsLTEyIDdBMiAyIDAgMCAxIDUgMTl6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/play
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
function Server($$renderer, $$props) {
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
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }],
    ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "server" },
    $$sanitized_props,
    {
      /**
       * @component @name Server
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iOCIgeD0iMiIgeT0iMiIgcng9IjIiIHJ5PSIyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIxNCIgcng9IjIiIHJ5PSIyIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjYiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/server
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
function Appearance($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let currentLocale = "en";
    const getLanguageDisplayName = (locale) => {
      try {
        return availableLocales[locale];
      } catch {
        return locale.toUpperCase();
      }
    };
    const languageOptions = Object.keys(availableLocales).map((locale) => getLanguageDisplayName(locale));
    onDestroy(() => {
    });
    function handleLanguageChange(selectedLanguage) {
      const selectedLocale = Object.keys(availableLocales).find((locale) => getLanguageDisplayName(locale) === selectedLanguage);
      if (selectedLocale && selectedLocale !== currentLocale) {
        currentLocale = selectedLocale;
        updateLocale(selectedLocale);
      }
    }
    Panel($$renderer2, {
      class: "flex flex-col gap-8 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold">`);
        Palette($$renderer3, {
          size: "40",
          class: "inline-block -mt-1 mr-2 bg-accent-purple p-2 rounded-full",
          color: "black"
        });
        $$renderer3.push(`<!----> ${escape_html(settings_appearance_title())}</h2> <div class="flex flex-col gap-8"><div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_appearance_brightness_theme())}</p> <p class="text-sm text-muted font-normal italic">${escape_html(settings_appearance_brightness_description())}</p></div> <div class="flex flex-col gap-3 w-full"><div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
        Sun($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_appearance_light())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black flex items-center justify-center`)}>`);
        Moon($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_appearance_dark())}</button></div></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_appearance_effect_settings())}</p> <p class="text-sm text-muted font-normal italic">${escape_html(settings_appearance_effect_description())}</p></div> <div class="flex flex-col gap-3 w-full"><div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
        Play($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_appearance_enable())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
        Pause($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_appearance_disable())}</button></div></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_language_title())} `);
        if (currentLocale !== "en") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`(Language)`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></p> <p class="text-sm text-muted font-normal italic">${escape_html(settings_language_description())}</p></div> <div class="flex flex-col gap-3 w-full">`);
        Dropdown($$renderer3, {
          options: languageOptions,
          settingsStyle: true,
          selected: getLanguageDisplayName(currentLocale),
          onselect: handleLanguageChange
        });
        $$renderer3.push(`<!----></div></div></div></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Conversion($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { settings = void 0 } = $$props;
    let showAdvanced = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Panel($$renderer3, {
        class: "flex flex-col gap-8 p-6",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold">`);
          Refresh_cw($$renderer4, {
            size: "40",
            class: "inline-block -mt-1 mr-2 bg-accent p-2 rounded-full",
            color: "black"
          });
          $$renderer4.push(`<!----> ${escape_html(settings_conversion_title())}</h2> <div class="flex flex-col gap-4"><div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_conversion_filename_format())}</p> <p class="text-sm text-muted font-normal">${html(sanitize(settings_conversion_filename_description()))}</p></div> `);
          FancyInput($$renderer4, {
            placeholder: "FileTools_%name%",
            extension: ".ext",
            type: "text",
            get value() {
              return settings.filenameFormat;
            },
            set value($$value) {
              settings.filenameFormat = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-4"><button class="bg-button flex items-center justify-between p-4 rounded-lg text-black dynadark:text-white w-full"><span class="text-base font-bold">${escape_html(settings_conversion_advanced_settings())}</span> `);
          Chevron_down($$renderer4, {
            size: "20",
            class: clsx("transition-transform duration-300", { "rotate-180": showAdvanced })
          });
          $$renderer4.push(`<!----></button> <div${attr_class(clsx$1(clsx("flex flex-col gap-8 transition-all duration-300 ease-in-out", { "max-h-[2000px] opacity-100 overflow-visible": showAdvanced }, { "max-h-0 opacity-0 overflow-hidden -mb-4": !showAdvanced })))}><div class="flex flex-col gap-8"><div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_conversion_default_format())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_conversion_default_format_description())}</p></div> <div class="flex flex-col gap-3 w-full"><div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.useDefaultFormat ? "selected" : "")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Play($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(settings_conversion_default_format_enable())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.useDefaultFormat ? "" : "selected")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Pause($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(settings_conversion_default_format_disable())}</button></div></div> <div${attr_class("grid gap-3 grid-cols-2 md:grid-cols-4", void 0, { "opacity-50": !settings.useDefaultFormat })}><div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_default_format_image())}</p> `);
          FormatDropdown($$renderer4, {
            categories: { image: categories.image },
            from: ".png",
            disabled: !settings.useDefaultFormat,
            get selected() {
              return settings.defaultFormat.image;
            },
            set selected($$value) {
              settings.defaultFormat.image = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_default_format_audio())}</p> `);
          FormatDropdown($$renderer4, {
            categories: { audio: categories.audio },
            from: ".mp3",
            disabled: !settings.useDefaultFormat,
            get selected() {
              return settings.defaultFormat.audio;
            },
            set selected($$value) {
              settings.defaultFormat.audio = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_default_format_video())}</p> `);
          FormatDropdown($$renderer4, {
            categories: { video: categories.video },
            from: ".mp4",
            disabled: !settings.useDefaultFormat,
            get selected() {
              return settings.defaultFormat.video;
            },
            set selected($$value) {
              settings.defaultFormat.video = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_default_format_document())}</p> `);
          FormatDropdown($$renderer4, {
            categories: { doc: categories.doc },
            from: ".docx",
            disabled: !settings.useDefaultFormat,
            get selected() {
              return settings.defaultFormat.document;
            },
            set selected($$value) {
              settings.defaultFormat.document = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_conversion_metadata())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_conversion_metadata_description())}</p></div> <div class="flex flex-col gap-3 w-full"><div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.metadata ? "selected" : "")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Play($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(settings_conversion_keep())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.metadata ? "" : "selected")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Pause($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(settings_conversion_remove())}</button></div></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_conversion_quality())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_conversion_quality_description())}</p></div> <div class="grid grid-cols-2 gap-3"><div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_quality_images())}</p> `);
          FancyInput($$renderer4, {
            type: "number",
            min: 1,
            max: 100,
            placeholder: "100",
            extension: "%",
            get value() {
              return settings.magickQuality;
            },
            set value($$value) {
              settings.magickQuality = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_quality_audio())}</p> `);
          Dropdown($$renderer4, {
            options: CONVERSION_BITRATES.map((b) => b.toString()),
            selected: settings.ffmpegQuality.toString(),
            onselect: (option) => settings.ffmpegQuality = option,
            settingsStyle: true
          });
          $$renderer4.push(`<!----></div></div> <div class="grid grid-cols-2 gap-3"><div class="flex flex-col gap-2"><p class="text-sm font-bold">${escape_html(settings_conversion_rate())}</p> `);
          Dropdown($$renderer4, {
            options: SAMPLE_RATES.map((r) => r.toString()),
            selected: settings.ffmpegSampleRate.toString(),
            onselect: (option) => {
              settings.ffmpegSampleRate = option;
            },
            settingsStyle: true
          });
          $$renderer4.push(`<!----></div> <div class="flex flex-col gap-2"><p class="text-sm font-bold select-none">  </p> `);
          FancyInput($$renderer4, {
            type: "number",
            min: 1,
            placeholder: "44100",
            extension: "Hz",
            disabled: settings.ffmpegSampleRate !== "custom",
            get value() {
              return settings.ffmpegCustomSampleRate;
            },
            set value($$value) {
              settings.ffmpegCustomSampleRate = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div></div></div></div></div></div></div></div>`);
        }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { settings });
  });
}
function FileToolsD($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filetoolsdCommit = null;
    const { settings = void 0 } = $$props;
    Panel($$renderer2, {
      class: "flex flex-col gap-8 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold">`);
        Server($$renderer3, {
          size: "40",
          class: "inline-block -mt-1 mr-2 bg-accent-red p-2 rounded-full overflow-visible",
          color: "black"
        });
        $$renderer3.push(`<!----> ${escape_html(settings_filetoolsd_title())}</h2> <p${attr_class(clsx$1(clsx("text-sm font-normal", {
          "text-failure": filetoolsdCommit === null,
          "text-green-700 dynadark:text-green-300": filetoolsdCommit !== null,
          "!text-muted": filetoolsdCommit === "loading"
        })))}>${escape_html(settings_filetoolsd_status())}
			${escape_html(settings_filetoolsd_unavailable())}</p> <div class="flex flex-col gap-8"><div class="flex flex-col gap-4"><p class="text-sm text-muted font-normal">${html(sanitize(settings_filetoolsd_description()))}</p> <p class="text-sm text-muted font-normal">${html(sanitize(link("vertd_link", settings_filetoolsd_hosting_info(), GITHUB_URL_FILETOOLSD)))}</p> <div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_filetoolsd_instance())}</p> `);
        Dropdown($$renderer3, {
          options: [
            settings_filetoolsd_auto_instance(),
            settings_filetoolsd_eu_instance(),
            settings_filetoolsd_us_instance(),
            settings_filetoolsd_custom_instance()
          ],
          onselect: (selected) => {
            let inner;
            switch (selected) {
              case settings_filetoolsd_auto_instance():
                inner = { type: "auto" };
                break;
              case settings_filetoolsd_eu_instance():
                inner = { type: "eu" };
                break;
              case settings_filetoolsd_us_instance():
                inner = { type: "us" };
                break;
              case settings_filetoolsd_custom_instance():
                inner = { type: "custom" };
                break;
              default:
                inner = { type: "auto" };
            }
            FileToolsDInstance.instance.set(inner);
          },
          selected: (() => {
            switch (FileToolsDInstance.instance.innerData().type) {
              case "auto":
                return settings_filetoolsd_auto_instance();
              case "eu":
                return settings_filetoolsd_eu_instance();
              case "us":
                return settings_filetoolsd_us_instance();
              case "custom":
                return settings_filetoolsd_custom_instance();
            }
          })(),
          settingsStyle: true
        });
        $$renderer3.push(`<!----> `);
        if (FileToolsDInstance.instance.innerData().type === "custom") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<input type="text"${attr("placeholder", settings_filetoolsd_url_placeholder())}${attr("value", settings.filetoolsdURL)}/>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_filetoolsd_conversion_speed())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_filetoolsd_speed_description())}</p></div> `);
        Dropdown($$renderer3, {
          options: [
            settings_filetoolsd_speeds_very_slow(),
            settings_filetoolsd_speeds_slower(),
            settings_filetoolsd_speeds_slow(),
            settings_filetoolsd_speeds_medium(),
            settings_filetoolsd_speeds_fast(),
            settings_filetoolsd_speeds_ultra_fast()
          ],
          settingsStyle: true,
          selected: (() => {
            switch (settings.filetoolsdSpeed) {
              case "verySlow":
                return settings_filetoolsd_speeds_very_slow();
              case "slower":
                return settings_filetoolsd_speeds_slower();
              case "slow":
                return settings_filetoolsd_speeds_slow();
              case "medium":
                return settings_filetoolsd_speeds_medium();
              case "fast":
                return settings_filetoolsd_speeds_fast();
              case "ultraFast":
                return settings_filetoolsd_speeds_ultra_fast();
            }
          })(),
          onselect: (selected) => {
            switch (selected) {
              case settings_filetoolsd_speeds_very_slow():
                settings.filetoolsdSpeed = "verySlow";
                break;
              case settings_filetoolsd_speeds_slower():
                settings.filetoolsdSpeed = "slower";
                break;
              case settings_filetoolsd_speeds_slow():
                settings.filetoolsdSpeed = "slow";
                break;
              case settings_filetoolsd_speeds_medium():
                settings.filetoolsdSpeed = "medium";
                break;
              case settings_filetoolsd_speeds_fast():
                settings.filetoolsdSpeed = "fast";
                break;
              case settings_filetoolsd_speeds_ultra_fast():
                settings.filetoolsdSpeed = "ultraFast";
                break;
            }
          }
        });
        $$renderer3.push(`<!----></div></div></div></div>`);
      }
    });
    bind_props($$props, { settings });
  });
}
function Privacy($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const { settings = void 0 } = $$props;
    let isLoadingCache = false;
    Panel($$renderer2, {
      class: "flex flex-col gap-8 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold">`);
        Chart_column($$renderer3, {
          size: "40",
          class: "inline-block -mt-1 mr-2 bg-accent-blue p-2 rounded-full",
          color: "black"
        });
        $$renderer3.push(`<!----> ${escape_html(settings_privacy_title())}</h2> <div class="flex flex-col gap-8">`);
        {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_privacy_plausible_title())}</p> <p class="text-sm text-muted font-normal">${html(link(["plausible_link", "analytics_link"], settings_privacy_plausible_description(), [
            "https://plausible.io/privacy-focused-web-analytics",
            "https://ats.filetools.app/filetools.app"
          ]))}</p></div> <div class="flex flex-col gap-3 w-full"><div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.plausible ? "selected" : "")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Play($$renderer3, { size: "24", class: "inline-block mr-2" });
          $$renderer3.push(`<!----> ${escape_html(settings_privacy_opt_in())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} ${stringify(settings.plausible ? "" : "selected")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}>`);
          Pause($$renderer3, { size: "24", class: "inline-block mr-2" });
          $$renderer3.push(`<!----> ${escape_html(settings_privacy_opt_out())}</button></div></div></div>`);
        }
        $$renderer3.push(`<!--]--> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_privacy_cache_title())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_privacy_cache_description())}</p></div> <div class="grid grid-cols-2 gap-4"><div class="bg-button p-4 rounded-lg"><div class="text-sm text-muted">${escape_html(settings_privacy_total_size())}</div> <div class="text-lg font-bold flex items-center gap-2">`);
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`${escape_html("0 B")}`);
        }
        $$renderer3.push(`<!--]--></div></div> <div class="bg-button p-4 rounded-lg"><div class="text-sm text-muted">${escape_html(settings_privacy_files_cached_label())}</div> <div class="text-lg font-bold flex items-center gap-2">`);
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`${escape_html(0)}`);
        }
        $$renderer3.push(`<!--]--></div></div></div> <div class="flex gap-3 w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}${attr("disabled", isLoadingCache, true)}>`);
        Refresh_cw($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_privacy_refresh_cache())}</button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}${attr("disabled", isLoadingCache, true)}>`);
        Trash_2($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_privacy_clear_cache())}</button></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold">${escape_html(settings_privacy_site_data_title())}</p> <p class="text-sm text-muted font-normal">${escape_html(settings_privacy_site_data_description())}</p></div> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} w-full p-4 rounded-lg text-black dynadark:text-white flex items-center justify-center`)}${attr("disabled", isLoadingCache, true)}>`);
        Trash_2($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(settings_privacy_clear_all_data())}</button></div></div></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { settings });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let settings = Settings.instance.settings;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col h-full items-center"><h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6">`);
      Settings$1($$renderer3, { size: "40", class: "inline-block -mt-2 mr-2" });
      $$renderer3.push(`<!----> ${escape_html(settings_title())}</h1> <div class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"><div class="flex flex-col gap-4 flex-1"><!---->`);
      Conversion($$renderer3, {
        get settings() {
          return settings;
        },
        set settings($$value) {
          settings = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        FileToolsD($$renderer3, {
          get settings() {
            return settings;
          },
          set settings($$value) {
            settings = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-4 flex-1"><!---->`);
      Appearance($$renderer3);
      $$renderer3.push(`<!----> `);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        Privacy($$renderer3, {
          get settings() {
            return settings;
          },
          set settings($$value) {
            settings = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!---->`);
      }
      $$renderer3.push(`<!--]--></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
