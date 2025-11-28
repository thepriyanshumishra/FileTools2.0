import { U as sanitize_props, V as spread_props, W as slot, Y as attr_class, a1 as attr_style, a4 as attr, Z as stringify, X as store_get, _ as unsubscribe_stores, a3 as ensure_array_like } from "../../../chunks/index2.js";
import { I as Icon, f as files, e as effects, a8 as convert_panel_convert_all, a9 as convert_panel_download_all, aa as isMobile, ab as convert_panel_remove_all, ac as convert_panel_set_all_to, ad as categories, ae as convert_panel_na, p as converters, af as convert_errors_cant_convert, ag as convert_errors_filetoolsd_server, ah as convert_errors_unsupported_format, ai as convert_errors_format_output_only, aj as workers_errors_file_too_large, ak as MAX_ARRAY_BUFFER_SIZE, al as GB, am as convert_errors_worker_downloading, an as convert_errors_worker_error, ao as convert_errors_worker_timeout, x as filetoolsdLoaded, ap as convert_errors_filetoolsd_not_found, aq as convert_tooltips_unknown_file, ar as convert_tooltips_audio_file, as as convert_tooltips_video_file, at as convert_tooltips_document_file, au as convert_tooltips_image_file, av as convert_errors_audio, aw as convert_errors_doc, ax as convert_errors_image, ay as convert_tooltips_convert_file, az as convert_tooltips_download_file } from "../../../chunks/index.svelte.js";
import { P as Panel } from "../../../chunks/Panel.js";
import { T as Trash_2, F as FormatDropdown, D as Dropdown } from "../../../chunks/FormatDropdown.js";
import { T as Tooltip, X } from "../../../chunks/Tooltip.js";
import "../../../chunks/runtime.js";
import { R as Refresh_cw } from "../../../chunks/animation.js";
import { e as escape_html } from "../../../chunks/context.js";
import { U as Uploader, A as Audio_lines, F as Film, B as Book_text, I as Image } from "../../../chunks/Uploader.js";
import "@ffmpeg/ffmpeg";
import "clsx";
function Download($$renderer, $$props) {
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
    ["path", { "d": "M12 15V3" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { "d": "m7 10 5 5 5-5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "download" },
    $$sanitized_props,
    {
      /**
       * @component @name Download
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTVWMyIgLz4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cGF0aCBkPSJtNyAxMCA1IDUgNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
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
function File_music($$renderer, $$props) {
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
        "d": "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
    ["path", { "d": "M8 20v-7l3 1.474" }],
    ["circle", { "cx": "6", "cy": "20", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-music" },
    $$sanitized_props,
    {
      /**
       * @component @name FileMusic
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNjUgMjJIMThhMiAyIDAgMCAwIDItMlY4YTIuNCAyLjQgMCAwIDAtLjcwNi0xLjcwNmwtMy41ODgtMy41ODhBMi40IDIuNCAwIDAgMCAxNCAySDZhMiAyIDAgMCAwLTIgMnYxMC4zNSIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNOCAyMHYtN2wzIDEuNDc0IiAvPgogIDxjaXJjbGUgY3g9IjYiIGN5PSIyMCIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-music
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
function File_question_mark($$renderer, $$props) {
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
        "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { "d": "M12 17h.01" }],
    ["path", { "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-question-mark" },
    $$sanitized_props,
    {
      /**
       * @component @name FileQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgogIDxwYXRoIGQ9Ik05LjEgOWEzIDMgMCAwIDEgNS44MiAxYzAgMi0zIDMtMyAzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-question-mark
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
function File_video_camera($$renderer, $$props) {
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
        "d": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
    [
      "path",
      {
        "d": "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157"
      }
    ],
    [
      "rect",
      { "width": "7", "height": "6", "x": "3", "y": "16", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "file-video-camera" },
    $$sanitized_props,
    {
      /**
       * @component @name FileVideoCamera
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMlY0YTIgMiAwIDAgMSAyLTJoOGEyLjQgMi40IDAgMCAxIDEuNzA2LjcwNmwzLjU4OCAzLjU4OEEyLjQgMi40IDAgMCAxIDIwIDh2MTJhMiAyIDAgMCAxLTIgMiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJtMTAgMTcuODQzIDMuMDMzLTEuNzU1YS42NC42NCAwIDAgMSAuOTY3LjU2djQuNzA0YS42NS42NSAwIDAgMS0uOTY3LjU2TDEwIDIwLjE1NyIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI2IiB4PSIzIiB5PSIxNiIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-video-camera
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
function Folder_archive($$renderer, $$props) {
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
    ["circle", { "cx": "15", "cy": "19", "r": "2" }],
    [
      "path",
      {
        "d": "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
      }
    ],
    ["path", { "d": "M15 11v-1" }],
    ["path", { "d": "M15 17v-2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "folder-archive" },
    $$sanitized_props,
    {
      /**
       * @component @name FolderArchive
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE5IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik0yMC45IDE5LjhBMiAyIDAgMCAwIDIyIDE4VjhhMiAyIDAgMCAwLTItMmgtNy45YTIgMiAwIDAgMS0xLjY5LS45TDkuNiAzLjlBMiAyIDAgMCAwIDcuOTMgM0g0YTIgMiAwIDAgMC0yIDJ2MTNhMiAyIDAgMCAwIDIgMmg1LjEiIC8+CiAgPHBhdGggZD0iTTE1IDExdi0xIiAvPgogIDxwYXRoIGQ9Ik0xNSAxN3YtMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/folder-archive
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
function Image_off($$renderer, $$props) {
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
    ["line", { "x1": "2", "x2": "22", "y1": "2", "y2": "22" }],
    ["path", { "d": "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
    [
      "line",
      { "x1": "13.5", "x2": "6", "y1": "13.5", "y2": "21" }
    ],
    ["line", { "x1": "18", "x2": "21", "y1": "12", "y2": "15" }],
    [
      "path",
      {
        "d": "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
      }
    ],
    ["path", { "d": "M21 15V5a2 2 0 0 0-2-2H9" }]
  ];
  Icon($$renderer, spread_props([
    { name: "image-off" },
    $$sanitized_props,
    {
      /**
       * @component @name ImageOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMiIgeTI9IjIyIiAvPgogIDxwYXRoIGQ9Ik0xMC40MSAxMC40MWEyIDIgMCAxIDEtMi44My0yLjgzIiAvPgogIDxsaW5lIHgxPSIxMy41IiB4Mj0iNiIgeTE9IjEzLjUiIHkyPSIyMSIgLz4KICA8bGluZSB4MT0iMTgiIHgyPSIyMSIgeTE9IjEyIiB5Mj0iMTUiIC8+CiAgPHBhdGggZD0iTTMuNTkgMy41OUExLjk5IDEuOTkgMCAwIDAgMyA1djE0YTIgMiAwIDAgMCAyIDJoMTRjLjU1IDAgMS4wNTItLjIyIDEuNDEtLjU5IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNVY1YTIgMiAwIDAgMC0yLTJIOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/image-off
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
function Rotate_cw($$renderer, $$props) {
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
      { "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "rotate-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RotateCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJhOSA5IDAgMSAxLTktOWMyLjUyIDAgNC45MyAxIDYuNzQgMi43NEwyMSA4IiAvPgogIDxwYXRoIGQ9Ik0yMSAzdjVoLTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/rotate-cw
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
function ProgressBar($$renderer, $$props) {
  let { progress, min, max } = $$props;
  const percent = progress ? (progress - min) / (max - min) * 100 : null;
  $$renderer.push(`<div class="w-full h-1 bg-panel-alt rounded-full overflow-hidden relative svelte-1l7rvw9"><div${attr_class("h-full bg-accent absolute left-0 top-0 svelte-1l7rvw9", void 0, { "percentless-animation": progress === null })}${attr_style(percent ? `width: ${percent}%; transition: 500ms linear width;` : "")}></div></div>`);
}
function ConversionPanel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const length = files.files.length;
    const progress = files.files.filter((f) => f.result).length;
    Panel($$renderer2, {
      class: "flex flex-col gap-4",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="w-full h-auto flex items-center justify-between flex-col md:flex-row gap-4"><div class="flex items-center flex-col md:flex-row gap-2.5 max-md:w-full"><button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} highlight flex gap-3 max-md:w-full md:max-w-[15.5rem]`)}${attr("disabled", !files.ready, true)}>`);
        Refresh_cw($$renderer3, { size: "24" });
        $$renderer3.push(`<!----> <p>${escape_html(convert_panel_convert_all())}</p></button> <button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex gap-3 max-md:w-full md:max-w-[15.5rem]`)}${attr("disabled", !files.ready || !files.results, true)}>`);
        Folder_archive($$renderer3, { size: "24" });
        $$renderer3.push(`<!----> <p>${escape_html(convert_panel_download_all())}</p></button> `);
        if (store_get($$store_subs ??= {}, "$isMobile", isMobile)) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<button${attr_class(`btn p-4 ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex gap-3 max-md:w-full`)}${attr("disabled", files.files.length === 0, true)}>`);
          Trash_2($$renderer3, { size: "24" });
          $$renderer3.push(`<!----> <p>${escape_html(convert_panel_remove_all())}</p></button>`);
        } else {
          $$renderer3.push("<!--[!-->");
          Tooltip($$renderer3, {
            text: convert_panel_remove_all(),
            position: "right",
            children: ($$renderer4) => {
              $$renderer4.push(`<button${attr_class(`btn p-4 ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex gap-3 max-md:w-full`)}${attr("disabled", files.files.length === 0, true)}>`);
              Trash_2($$renderer4, { size: "24" });
              $$renderer4.push(`<!----></button>`);
            }
          });
        }
        $$renderer3.push(`<!--]--></div> <div class="w-full bg-separator h-0.5 flex md:hidden"></div> <div class="flex items-center gap-2"><p class="whitespace-normal text-xl text-right w-full">${escape_html(convert_panel_set_all_to())}</p> <div class="w-48 md:max-w-[6.5rem]">`);
        if (files.files.length > 0 && files.files.every((f) => f.converters.length) && files.files.every((f) => JSON.stringify(f.converters) === JSON.stringify(files.files[0].converters))) {
          $$renderer3.push("<!--[-->");
          FormatDropdown($$renderer3, {
            onselect: (r) => files.files.forEach((f) => {
              f.to = r;
              f.result = null;
            }),
            categories,
            dropdownSize: "large"
          });
        } else {
          $$renderer3.push("<!--[!-->");
          Dropdown($$renderer3, { options: [convert_panel_na()], disabled: true });
        }
        $$renderer3.push(`<!--]--></div></div> `);
        if (files.files.length > 50) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="w-full px-2 flex gap-4 items-center"><div class="flex-shrink-0 -mt-0.5 font-normal text-sm text-muted">${escape_html(progress)}/${escape_html(length)}</div> <div class="flex-grow">`);
          ProgressBar($$renderer3, { min: 0, max: length, progress });
          $$renderer3.push(`<!----></div></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const handleSelect = (option, file) => {
      file.result = null;
    };
    function fileItem($$renderer3, file, index) {
      const currentConverter = file.findConverter();
      const isImage = currentConverter?.name === "imagemagick";
      const isAudio = currentConverter?.name === "ffmpeg";
      const isVideo = currentConverter?.name === "filetoolsd";
      const isDocument = currentConverter?.name === "pandoc";
      Panel($$renderer3, {
        class: "p-5 flex flex-col min-w-0 gap-4 relative",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex-shrink-0 h-8 w-full flex items-center gap-2">`);
          if (!converters.length) {
            $$renderer4.push("<!--[-->");
            Tooltip($$renderer4, {
              text: convert_tooltips_unknown_file(),
              position: "bottom",
              children: ($$renderer5) => {
                File_question_mark($$renderer5, { size: "24", class: "flex-shrink-0" });
              }
            });
          } else {
            $$renderer4.push("<!--[!-->");
            if (isAudio) {
              $$renderer4.push("<!--[-->");
              Tooltip($$renderer4, {
                text: convert_tooltips_audio_file(),
                position: "bottom",
                children: ($$renderer5) => {
                  Audio_lines($$renderer5, { size: "24", class: "flex-shrink-0" });
                }
              });
            } else {
              $$renderer4.push("<!--[!-->");
              if (isVideo) {
                $$renderer4.push("<!--[-->");
                Tooltip($$renderer4, {
                  text: convert_tooltips_video_file(),
                  position: "bottom",
                  children: ($$renderer5) => {
                    Film($$renderer5, { size: "24", class: "flex-shrink-0" });
                  }
                });
              } else {
                $$renderer4.push("<!--[!-->");
                if (isDocument) {
                  $$renderer4.push("<!--[-->");
                  Tooltip($$renderer4, {
                    text: convert_tooltips_document_file(),
                    position: "bottom",
                    children: ($$renderer5) => {
                      Book_text($$renderer5, { size: "24", class: "flex-shrink-0" });
                    }
                  });
                } else {
                  $$renderer4.push("<!--[!-->");
                  Tooltip($$renderer4, {
                    text: convert_tooltips_image_file(),
                    position: "bottom",
                    children: ($$renderer5) => {
                      Image($$renderer5, { size: "24", class: "flex-shrink-0" });
                    }
                  });
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]--> <div class="flex-grow overflow-hidden">`);
          if (file.processing) {
            $$renderer4.push("<!--[-->");
            ProgressBar($$renderer4, {
              min: 0,
              max: 100,
              progress: currentConverter?.reportsProgress || file.isZip() ? file.progress : null
            });
          } else {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`<h2 class="text-xl font-body overflow-hidden text-ellipsis whitespace-nowrap"${attr("title", file.name)}>${escape_html(file.name)}</h2>`);
          }
          $$renderer4.push(`<!--]--></div> <button class="flex-shrink-0 w-8 rounded-full hover:bg-panel-alt h-full flex items-center justify-center">`);
          X($$renderer4, { size: "24", class: "text-muted" });
          $$renderer4.push(`<!----></button></div> `);
          if (!currentConverter) {
            $$renderer4.push("<!--[-->");
            if (file.name.startsWith("filetoolsd")) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_filetoolsd_server())}</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_unsupported_format())}</p></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          } else {
            $$renderer4.push("<!--[!-->");
            const formatInfo = currentConverter.supportedFormats.find((f) => f.name === file.from);
            const isLarge = file.isLarge();
            if (formatInfo && !formatInfo.fromSupported) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_format_output_only())}</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              if (isLarge && !file.supportsStreaming()) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(workers_errors_file_too_large({ limit: (MAX_ARRAY_BUFFER_SIZE / GB).toFixed(2) }))}</p></div>`);
              } else {
                $$renderer4.push("<!--[!-->");
                if (currentConverter.status === "downloading") {
                  $$renderer4.push("<!--[-->");
                  $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_worker_downloading({
                    type: isAudio ? convert_errors_audio() : isVideo ? "Video" : isDocument ? convert_errors_doc() : convert_errors_image()
                  }))}</p></div>`);
                } else {
                  $$renderer4.push("<!--[!-->");
                  if (currentConverter.status === "error") {
                    $$renderer4.push("<!--[-->");
                    $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_worker_error({
                      type: isAudio ? convert_errors_audio() : isVideo ? "Video" : isDocument ? convert_errors_doc() : convert_errors_image()
                    }))}</p></div>`);
                  } else {
                    $$renderer4.push("<!--[!-->");
                    if (currentConverter.status === "not-ready") {
                      $$renderer4.push("<!--[-->");
                      $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_worker_timeout({
                        type: isAudio ? convert_errors_audio() : isVideo ? "Video" : isDocument ? convert_errors_doc() : convert_errors_image()
                      }))}</p></div>`);
                    } else {
                      $$renderer4.push("<!--[!-->");
                      if (isVideo && !store_get($$store_subs ??= {}, "$filetoolsdLoaded", filetoolsdLoaded) && !isAudio && !isImage && !isDocument) {
                        $$renderer4.push("<!--[-->");
                        $$renderer4.push(`<div class="h-full flex flex-col text-center justify-center text-failure"><p class="font-body font-bold">${escape_html(convert_errors_cant_convert())}</p> <p class="font-normal">${escape_html(convert_errors_filetoolsd_not_found())}</p></div>`);
                      } else {
                        $$renderer4.push("<!--[!-->");
                        $$renderer4.push(`<div class="flex flex-row justify-between"><div class="flex gap-4 w-full h-[152px] overflow-hidden relative"><div class="w-1/2 h-full overflow-hidden rounded-xl">`);
                        if (file.blobUrl) {
                          $$renderer4.push("<!--[-->");
                          $$renderer4.push(`<img class="object-cover w-full h-full"${attr("src", file.blobUrl)}${attr("alt", file.name)}/>`);
                        } else {
                          $$renderer4.push("<!--[!-->");
                          $$renderer4.push(`<div class="w-full h-full flex items-center justify-center text-black"${attr_style(`background: var(${stringify(isAudio ? "--bg-gradient-purple-alt" : isVideo ? "--bg-gradient-red-alt" : isDocument ? "--bg-gradient-green-alt" : "--bg-gradient-blue-alt")})`)}>`);
                          if (isAudio) {
                            $$renderer4.push("<!--[-->");
                            File_music($$renderer4, { size: "56" });
                          } else {
                            $$renderer4.push("<!--[!-->");
                            if (isVideo) {
                              $$renderer4.push("<!--[-->");
                              File_video_camera($$renderer4, { size: "56" });
                            } else {
                              $$renderer4.push("<!--[!-->");
                              if (isDocument) {
                                $$renderer4.push("<!--[-->");
                                Book_text($$renderer4, { size: "56" });
                              } else {
                                $$renderer4.push("<!--[!-->");
                                Image_off($$renderer4, { size: "56" });
                              }
                              $$renderer4.push(`<!--]-->`);
                            }
                            $$renderer4.push(`<!--]-->`);
                          }
                          $$renderer4.push(`<!--]--></div>`);
                        }
                        $$renderer4.push(`<!--]--></div></div> <div class="absolute top-16 right-0 mr-4 pl-2 h-[calc(100%-83px)] w-[calc(50%-38px)] pr-4 pb-1 flex items-center justify-center aspect-square"><div class="w-[122px] h-fit flex flex-col gap-2 items-center justify-center">`);
                        FormatDropdown($$renderer4, {
                          categories,
                          from: file.from,
                          onselect: (option) => handleSelect(option, file),
                          file,
                          get selected() {
                            return file.to;
                          },
                          set selected($$value) {
                            file.to = $$value;
                            $$settled = false;
                          }
                        });
                        $$renderer4.push(`<!----> <div class="w-full flex items-center justify-between">`);
                        Tooltip($$renderer4, {
                          text: convert_tooltips_convert_file(),
                          position: "bottom",
                          children: ($$renderer5) => {
                            $$renderer5.push(`<button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} p-0 w-14 h-14 text-black ${stringify(isAudio ? "bg-accent-purple" : isVideo ? "bg-accent-red" : isDocument ? "bg-accent-green" : "bg-accent-blue")}`)}${attr("disabled", !files.ready, true)}>`);
                            Rotate_cw($$renderer5, { size: "24" });
                            $$renderer5.push(`<!----></button>`);
                          }
                        });
                        $$renderer4.push(`<!----> `);
                        Tooltip($$renderer4, {
                          text: convert_tooltips_download_file(),
                          position: "bottom",
                          children: ($$renderer5) => {
                            $$renderer5.push(`<button${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} p-0 w-14 h-14`)}${attr("disabled", !file.result, true)}>`);
                            Download($$renderer5, { size: "24" });
                            $$renderer5.push(`<!----></button>`);
                          }
                        });
                        $$renderer4.push(`<!----></div></div></div></div>`);
                      }
                      $$renderer4.push(`<!--]-->`);
                    }
                    $$renderer4.push(`<!--]-->`);
                  }
                  $$renderer4.push(`<!--]-->`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]-->`);
            }
            $$renderer4.push(`<!--]-->`);
          }
          $$renderer4.push(`<!--]-->`);
        }
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col justify-center items-center gap-8 -mt-4 px-4 md:p-0"><div class="max-w-[778px] w-full">`);
      ConversionPanel($$renderer3);
      $$renderer3.push(`<!----></div> <div class="w-full max-w-[778px] grid grid-cols-1 md:grid-cols-2 auto-rows-[240px] gap-4 md:p-0"><!--[-->`);
      const each_array = ensure_array_like(files.files);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let file = each_array[i];
        if (files.files.length >= 2 && i === 1) {
          $$renderer3.push("<!--[-->");
          Uploader($$renderer3, {
            class: "w-full h-full col-start-1 row-start-1 md:col-start-2"
          });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--> `);
        fileItem($$renderer3, file);
        $$renderer3.push(`<!----> `);
        if (files.files.length < 2) {
          $$renderer3.push("<!--[-->");
          Uploader($$renderer3, { class: "w-full h-full" });
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--> `);
      if (files.files.length === 0) {
        $$renderer3.push("<!--[-->");
        Uploader($$renderer3, { class: "w-full h-full col-span-2" });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
