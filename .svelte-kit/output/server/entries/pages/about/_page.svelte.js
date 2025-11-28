import { e as escape_html } from "../../../chunks/context.js";
import clsx$1 from "clsx";
import { U as sanitize_props, V as spread_props, W as slot, a3 as ensure_array_like, Y as attr_class, a4 as attr, Z as stringify, a1 as attr_style, a2 as clsx, X as store_get, _ as unsubscribe_stores, $ as attributes } from "../../../chunks/index2.js";
import { P as Panel } from "../../../chunks/Panel.js";
import { I as Icon, y as about_credits_title, z as about_credits_contact_team, A as about_credits_notable_contributors, B as about_credits_notable_description, C as about_credits_github_contributors, E as sanitize, H as link, J as about_credits_libraries, K as about_credits_libraries_description, G as GITHUB_URL_FILETOOLS, L as about_credits_github_description, M as about_credits_no_contributors, N as about_donate_title, O as about_donate_description, e as effects, P as about_donate_one_time, Q as about_donate_monthly, R as about_donate_custom, S as about_donate_pay_now, U as about_donate_donation_notice_unofficial, V as about_resources_title, D as DISCORD_URL, W as about_resources_discord, X as about_resources_source, Y as about_resources_email, Z as CONTACT_EMAIL, _ as about_why_title, $ as about_why_description, a0 as about_sponsors_title, a1 as about_sponsors_description, a2 as about_title, a3 as about_credits_roles_lead_developer, a4 as about_credits_roles_developer, a5 as about_credits_roles_designer, a6 as about_credits_roles_docker_ci, a7 as about_credits_roles_former_cofounder } from "../../../chunks/index.svelte.js";
import "../../../chunks/runtime.js";
import { h as html } from "../../../chunks/html.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/client.js";
import { F as FancyInput } from "../../../chunks/FancyInput.js";
import "@stripe/stripe-js/pure/index.mjs";
import { I as Info } from "../../../chunks/info.js";
function Calendar_heart($$renderer, $$props) {
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
        "d": "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125"
      }
    ],
    [
      "path",
      {
        "d": "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z"
      }
    ],
    ["path", { "d": "M16 2v4" }],
    ["path", { "d": "M3 10h18" }],
    ["path", { "d": "M8 2v4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "calendar-heart" },
    $$sanitized_props,
    {
      /**
       * @component @name CalendarHeart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuMTI3IDIySDVhMiAyIDAgMCAxLTItMlY2YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnY1LjEyNSIgLz4KICA8cGF0aCBkPSJNMTQuNjIgMTguOEEyLjI1IDIuMjUgMCAxIDEgMTggMTUuODM2YTIuMjUgMi4yNSAwIDEgMSAzLjM4IDIuOTY2bC0yLjYyNiAyLjg1NmEuOTk4Ljk5OCAwIDAgMS0xLjUwNyAweiIgLz4KICA8cGF0aCBkPSJNMTYgMnY0IiAvPgogIDxwYXRoIGQ9Ik0zIDEwaDE4IiAvPgogIDxwYXRoIGQ9Ik04IDJ2NCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/calendar-heart
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
function Copy($$renderer, $$props) {
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
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "copy" },
    $$sanitized_props,
    {
      /**
       * @component @name Copy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
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
function Github($$renderer, $$props) {
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
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "github" },
    $$sanitized_props,
    {
      /**
       * @component @name Github
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjJ2LTRhNC44IDQuOCAwIDAgMC0xLTMuNWMzIDAgNi0yIDYtNS41LjA4LTEuMjUtLjI3LTIuNDgtMS0zLjUuMjgtMS4xNS4yOC0yLjM1IDAtMy41IDAgMC0xIDAtMyAxLjUtMi42NC0uNS01LjM2LS41LTggMEM2IDIgNSAyIDUgMmMtLjMgMS4xNS0uMyAyLjM1IDAgMy41QTUuNDAzIDUuNDAzIDAgMCAwIDQgOWMwIDMuNSAzIDUuNSA2IDUuNS0uMzkuNDktLjY4IDEuMDUtLjg1IDEuNjUtLjE3LjYtLjIyIDEuMjMtLjE1IDEuODV2NCIgLz4KICA8cGF0aCBkPSJNOSAxOGMtNC41MSAyLTUtMi03LTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/github
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       * @deprecated Brand icons have been deprecated and are due to be removed, please refer to https://github.com/lucide-icons/lucide/issues/670. We recommend using https://simpleicons.org/?q=github instead. This icon will be removed in v1.0
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
function Hand_coins($$renderer, $$props) {
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
      { "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }
    ],
    [
      "path",
      {
        "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
      }
    ],
    ["path", { "d": "m2 16 6 6" }],
    ["circle", { "cx": "16", "cy": "9", "r": "2.9" }],
    ["circle", { "cx": "6", "cy": "5", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "hand-coins" },
    $$sanitized_props,
    {
      /**
       * @component @name HandCoins
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTVoMmEyIDIgMCAxIDAgMC00aC0zYy0uNiAwLTEuMS4yLTEuNC42TDMgMTciIC8+CiAgPHBhdGggZD0ibTcgMjEgMS42LTEuNGMuMy0uNC44LS42IDEuNC0uNmg0YzEuMSAwIDIuMS0uNCAyLjgtMS4ybDQuNi00LjRhMiAyIDAgMCAwLTIuNzUtMi45MWwtNC4yIDMuOSIgLz4KICA8cGF0aCBkPSJtMiAxNiA2IDYiIC8+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSI5IiByPSIyLjkiIC8+CiAgPGNpcmNsZSBjeD0iNiIgY3k9IjUiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/hand-coins
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
function Heart_handshake($$renderer, $$props) {
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
        "d": "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "heart-handshake" },
    $$sanitized_props,
    {
      /**
       * @component @name HeartHandshake
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkuNDE0IDE0LjQxNEMyMSAxMi44MjggMjIgMTEuNSAyMiA5LjVhNS41IDUuNSAwIDAgMC05LjU5MS0zLjY3Ni42LjYgMCAwIDEtLjgxOC4wMDFBNS41IDUuNSAwIDAgMCAyIDkuNWMwIDIuMyAxLjUgNCAzIDUuNWw1LjUzNSA1LjM2MmEyIDIgMCAwIDAgMi44NzkuMDUyIDIuMTIgMi4xMiAwIDAgMC0uMDA0LTMgMi4xMjQgMi4xMjQgMCAxIDAgMy0zIDIuMTI0IDIuMTI0IDAgMCAwIDMuMDA0IDAgMiAyIDAgMCAwIDAtMi44MjhsLTEuODgxLTEuODgyYTIuNDEgMi40MSAwIDAgMC0zLjQwOSAwbC0xLjcxIDEuNzFhMiAyIDAgMCAxLTIuODI4IDAgMiAyIDAgMCAxIDAtMi44MjhsMi44MjMtMi43NjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/heart-handshake
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
function Heart($$renderer, $$props) {
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
        "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "heart" },
    $$sanitized_props,
    {
      /**
       * @component @name Heart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
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
function Link($$renderer, $$props) {
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
        "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    ],
    [
      "path",
      {
        "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "link" },
    $$sanitized_props,
    {
      /**
       * @component @name Link
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSIgLz4KICA8cGF0aCBkPSJNMTQgMTFhNSA1IDAgMCAwLTcuNTQtLjU0bC0zIDNhNSA1IDAgMCAwIDcuMDcgNy4wN2wxLjcxLTEuNzEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/link
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
function Mail($$renderer, $$props) {
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
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
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
function Message_circle_more($$renderer, $$props) {
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
        "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ],
    ["path", { "d": "M8 12h.01" }],
    ["path", { "d": "M12 12h.01" }],
    ["path", { "d": "M16 12h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "message-circle-more" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageCircleMore
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+CiAgPHBhdGggZD0iTTggMTJoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xMiAxMmguMDEiIC8+CiAgPHBhdGggZD0iTTE2IDEyaC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/message-circle-more
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
function Message_circle_question_mark($$renderer, $$props) {
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
        "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
      }
    ],
    ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "message-circle-question-mark" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageCircleQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi45OTIgMTYuMzQyYTIgMiAwIDAgMSAuMDk0IDEuMTY3bC0xLjA2NSAzLjI5YTEgMSAwIDAgMCAxLjIzNiAxLjE2OGwzLjQxMy0uOTk4YTIgMiAwIDAgMSAxLjA5OS4wOTIgMTAgMTAgMCAxIDAtNC43NzctNC43MTkiIC8+CiAgPHBhdGggZD0iTTkuMDkgOWEzIDMgMCAwIDEgNS44MyAxYzAgMi0zIDMtMyAzIiAvPgogIDxwYXRoIGQ9Ik0xMiAxN2guMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-circle-question-mark
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
function Piggy_bank($$renderer, $$props) {
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
        "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M2 8v1a2 2 0 0 0 2 2h1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "piggy-bank" },
    $$sanitized_props,
    {
      /**
       * @component @name PiggyBank
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTdoM3YyYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xdi0zYTMuMTYgMy4xNiAwIDAgMCAyLTJoMWExIDEgMCAwIDAgMS0xdi0yYTEgMSAwIDAgMC0xLTFoLTFhNSA1IDAgMCAwLTItNFYzYTQgNCAwIDAgMC0zLjIgMS42bC0uMy40SDExYTYgNiAwIDAgMC02IDZ2MWE1IDUgMCAwIDAgMiA0djNhMSAxIDAgMCAwIDEgMWgyYTEgMSAwIDAgMCAxLTF6IiAvPgogIDxwYXRoIGQ9Ik0xNiAxMGguMDEiIC8+CiAgPHBhdGggZD0iTTIgOHYxYTIgMiAwIDAgMCAyIDJoMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/piggy-bank
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
function Wallet($$renderer, $$props) {
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
        "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      }
    ],
    ["path", { "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "wallet" },
    $$sanitized_props,
    {
      /**
       * @component @name Wallet
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgN1Y0YTEgMSAwIDAgMC0xLTFINWEyIDIgMCAwIDAgMCA0aDE1YTEgMSAwIDAgMSAxIDF2NGgtM2EyIDIgMCAwIDAgMCA0aDNhMSAxIDAgMCAwIDEtMXYtMmExIDEgMCAwIDAtMS0xIiAvPgogIDxwYXRoIGQ9Ik0zIDV2MTRhMiAyIDAgMCAwIDIgMmgxNWExIDEgMCAwIDAgMS0xdi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wallet
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
function contributor($$renderer, name, github, avatar, role, smaller) {
  $$renderer.push(`<div${attr_class("flex items-center gap-4", void 0, { "gap-1": smaller })}><a${attr("href", github)} target="_blank" rel="noopener noreferrer" class="flex-shrink-0"><img${attr("src", avatar)}${attr("alt", name)}${attr("title", name)}${attr_class(`${stringify(smaller ? "w-12 h-12 hoverable" : role ? "w-14 h-14 hoverable-md" : "w-10 h-10 hoverable-lg")} rounded-full`)}/></a> `);
  if (role) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="flex flex-col gap-1"><p${attr_class("font-semibold", void 0, { "text-xl": !smaller, "text-base": smaller })}>${escape_html(name)}</p> <p class="text-sm font-normal text-muted">${escape_html(role)}</p></div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function Credits($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { mainContribs, notableContribs, ghContribs } = $$props;
    Panel($$renderer2, {
      class: "flex flex-col gap-8 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl font-bold flex items-center"><div class="rounded-full bg-blue-300 p-2 inline-block mr-3 w-10 h-10">`);
        Heart_handshake($$renderer3, { color: "black" });
        $$renderer3.push(`<!----></div> ${escape_html(about_credits_title())}</h2> <p class="-mt-4 -mb-3 font-black text-lg">${escape_html(about_credits_contact_team())}</p> <div class="flex flex-col gap-4"><div class="flex flex-col flex-wrap gap-2"><!--[-->`);
        const each_array = ensure_array_like(mainContribs);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let contrib = each_array[$$index];
          const { name, github, avatar, role } = contrib;
          contributor($$renderer3, name, github, avatar, role);
        }
        $$renderer3.push(`<!--]--></div></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h2 class="text-base font-bold">${escape_html(about_credits_notable_contributors())}</h2> <div class="flex flex-col gap-2"><p class="text-base text-muted font-normal">${escape_html(about_credits_notable_description())}</p> <div class="flex flex-col gap-2"><!--[-->`);
        const each_array_1 = ensure_array_like(notableContribs);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let contrib = each_array_1[$$index_1];
          const { name, github, avatar, role } = contrib;
          contributor($$renderer3, name, github, avatar, role, true);
        }
        $$renderer3.push(`<!--]--></div></div></div> `);
        {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="flex flex-col gap-4"><div class="flex flex-col gap-1"><h2 class="text-base font-bold">${escape_html(about_credits_github_contributors())}</h2> `);
          if (ghContribs && ghContribs.length > 0) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-base text-muted font-normal">${html(sanitize(link("github_link", about_credits_github_description(), GITHUB_URL_FILETOOLS, true)))}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<p class="text-base text-muted font-normal italic">${html(sanitize(link("contribute_link", about_credits_no_contributors(), GITHUB_URL_FILETOOLS, true)))}</p>`);
          }
          $$renderer3.push(`<!--]--></div> `);
          if (ghContribs && ghContribs.length > 0) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex flex-row flex-wrap gap-2"><!--[-->`);
            const each_array_2 = ensure_array_like(ghContribs);
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let contrib = each_array_2[$$index_2];
              const { name, github, avatar } = contrib;
              contributor($$renderer3, name, github, avatar);
            }
            $$renderer3.push(`<!--]--></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <h2 class="mt-2 -mb-2">${escape_html(about_credits_libraries())}</h2> <p class="font-normal">${escape_html(about_credits_libraries_description())}</p>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
  });
}
function Donate($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let amount = 1;
    let customAmount = "";
    let type = "one-time";
    const presetAmounts = [1, 10, 25];
    let paymentState = "prepay";
    const payDuration = 400;
    const transition = "cubic-bezier(0.23, 1, 0.320, 1)";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Panel($$renderer3, {
        class: "flex flex-col gap-8 p-6",
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold flex items-center"><div class="rounded-full bg-accent-red p-2 inline-block mr-3 w-10 h-10">`);
          Heart($$renderer4, { color: "black" });
          $$renderer4.push(`<!----></div> ${escape_html(about_donate_title())}</h2> <p class="text-base font-normal">${escape_html(about_donate_description())}</p></div> <div class="flex flex-col gap-3 w-full overflow-visible"${attr_style(`height: ${stringify(124)}px; transform: scaleY(${stringify(1)}); opacity: ${stringify(1)}; filter: blur(${stringify(0)}px); transition: height ${stringify(payDuration)}ms ${stringify(transition)}, opacity ${stringify(payDuration - 200)}ms ${stringify(transition)}, transform ${stringify(payDuration)}ms ${stringify(transition)}, filter ${stringify(payDuration)}ms ${stringify(transition)};`)}><div class="flex gap-3 w-full"><button${attr_class(clsx(clsx$1("btn flex-1 p-4 rounded-lg flex items-center justify-center", {
            "!scale-100": !store_get($$store_subs ??= {}, "$effects", effects),
            "bg-accent-red text-black": type === "one-time"
          })))}>`);
          Hand_coins($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(about_donate_one_time())}</button> <button disabled${attr_class(clsx(clsx$1("btn flex-1 p-4 rounded-lg flex items-center justify-center", {
            "!scale-100": !store_get($$store_subs ??= {}, "$effects", effects),
            "bg-accent-red text-black": type === "monthly"
          })))}>`);
          Calendar_heart($$renderer4, { size: "24", class: "inline-block mr-2" });
          $$renderer4.push(`<!----> ${escape_html(about_donate_monthly())}</button></div> <div class="grid grid-cols-4 gap-3 w-full"><!--[-->`);
          const each_array = ensure_array_like(presetAmounts);
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            let preset = each_array[i];
            $$renderer4.push(`<button${attr_class(clsx(clsx$1("btn p-4 rounded-lg flex items-center justify-center", {
              "!scale-100": !store_get($$store_subs ??= {}, "$effects", effects),
              "bg-accent-red text-black": amount === preset
            })))}${attr_style(i === 2 ? "grid-column: 3;" : "")}>$${escape_html(preset)} USD</button>`);
          }
          $$renderer4.push(`<!--]--> <div class="flex items-center justify-center">`);
          FancyInput($$renderer4, {
            placeholder: about_donate_custom(),
            prefix: "$",
            type: "number",
            class: "h-full",
            get value() {
              return customAmount;
            },
            set value($$value) {
              customAmount = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----></div></div></div> <div class="flex flex-row justify-center w-full"><div role="button" tabindex="0"${attr_class(clsx(clsx$1("btn flex-1 p-3 relative rounded-3xl bg-accent-red border-2 border-accent-red h-14 text-black", {
            "h-[450px] rounded-2xl bg-transparent cursor-auto !scale-100 -mt-10 -mb-2": paymentState !== "prepay",
            "!scale-100": !store_get($$store_subs ??= {}, "$effects", effects)
          })))}${attr_style(`transition: height ${stringify(payDuration)}ms ${stringify(transition)}, border-radius ${stringify(payDuration)}ms ${stringify(transition)}, background-color ${stringify(payDuration)}ms ${stringify(transition)}, transform ${stringify(payDuration)}ms ${stringify(transition)}, margin ${stringify(payDuration)}ms ${stringify(transition)}; will-change: height, border-radius, background-color, transform, margin;`)}><div class="grid grid-cols-1 grid-rows-1 w-full h-full">`);
          {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`<div class="row-start-1 col-start-1 flex justify-center items-center">`);
            Wallet($$renderer4, { size: "24", class: "inline-block mr-2" });
            $$renderer4.push(`<!----> ${escape_html(about_donate_pay_now())}</div>`);
          }
          $$renderer4.push(`<!--]--></div></div></div> <p class="text-sm font-normal text-muted">`);
          {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`${html(sanitize(link("official_link", about_donate_donation_notice_unofficial(), "https://filetools.app", true, "")))}`);
          }
          $$renderer4.push(`<!--]--></p>`);
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
  });
}
function Resources($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    Panel($$renderer2, {
      class: "flex flex-col gap-4 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl font-bold flex items-center"><div class="rounded-full bg-accent-purple p-2 inline-block mr-3 w-10 h-10">`);
        Link($$renderer3, { color: "black" });
        $$renderer3.push(`<!----></div> ${escape_html(about_resources_title())}</h2> <div class="flex gap-3"><a${attr("href", DISCORD_URL)} target="_blank" rel="noopener noreferrer"${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 gap-2 p-4 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center`)}>`);
        Message_circle_more($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(about_resources_discord())}</a> <a${attr("href", GITHUB_URL_FILETOOLS)} target="_blank" rel="noopener noreferrer"${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 gap-2 p-4 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center`)}>`);
        Github($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(about_resources_source())}</a> <a${attr("href", `mailto:${stringify(CONTACT_EMAIL)}`)} target="_blank" rel="noopener noreferrer"${attr_class(`btn ${stringify(store_get($$store_subs ??= {}, "$effects", effects) ? "" : "!scale-100")} flex-1 gap-2 p-4 rounded-full bg-button text-black dynadark:text-white flex items-center justify-center`)}>`);
        Mail($$renderer3, { size: "24", class: "inline-block mr-2" });
        $$renderer3.push(`<!----> ${escape_html(about_resources_email())}</a></div>`);
      }
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Why($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Panel($$renderer2, {
      class: "flex flex-col gap-3 p-6",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl font-bold flex items-center"><div class="rounded-full bg-accent-pink p-2 inline-block mr-3 w-10 h-10">`);
        Message_circle_question_mark($$renderer3, { color: "black" });
        $$renderer3.push(`<!----></div> ${escape_html(about_why_title())}</h2> <p class="text-lg font-normal">${html(sanitize(about_why_description()))}</p>`);
      }
    });
  });
}
function Hotmilk_svg_component($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.push(`<svg${attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "400",
      height: "179.086",
      viewBox: "0 0 400 179.086",
      ...$$sanitized_props
    },
    void 0,
    void 0,
    void 0,
    3
  )}>${html('<path fill-rule="evenodd" d="M281.022.95c-8.035 4.427-7.366 16.604 1.087 19.788 10.869 4.094 19.925-8.99 12.263-17.717-2.739-3.12-9.532-4.174-13.35-2.071M12.921 5.094c-2.933 1.047-5.125 3.332-5.964 6.219-.845 2.905-.516 57.148.357 59.036 3.373 7.29 13.978 7.581 17.72.487l.837-1.587.159-11.774c.145-10.669.213-11.876.732-12.858 2.776-5.256 10.251-5.393 12.467-.229.5 1.165.582 2.622.729 12.932.157 10.968.202 11.698.818 13.029 3.373 7.29 13.978 7.581 17.72.487l.838-1.587V54.841c0-17.787-.434-19.901-5.105-24.879-6.584-7.016-19.97-7.562-26.356-1.076-.8.813-1.535 1.478-1.634 1.478s-.222-4.287-.274-9.527l-.094-9.528-.837-1.587c-2.197-4.165-7.611-6.233-12.113-4.628m301.791-.128c-2.951.743-5.552 3.003-6.608 5.742-.97 2.515-.913 57.534.062 59.641 3.373 7.29 13.978 7.581 17.72.487l.837-1.587.084-28.329c.093-31.377.192-29.708-1.933-32.604-1.953-2.662-6.692-4.224-10.162-3.35m30.602-.034c-2.904.803-4.689 2.191-6.051 4.703l-1.076 1.984v28.66c0 28.486.004 28.668.653 30.07 3.373 7.29 13.982 7.581 17.719.487.805-1.529.84-1.797.939-7.242l.103-5.654h1.018c4.374 0 5.556 1.001 7.749 6.563 3.822 9.695 5.827 11.604 11.924 11.352 4.588-.19 7.349-2.008 8.606-5.667 1.821-5.3-2.428-17.268-7.259-20.446-2.247-1.478-2.222-1.421-.946-2.175 3.046-1.799 4.747-4.191 5.946-8.359 2.287-7.95-1.049-13.428-8.373-13.748-6.208-.271-8.658 1.765-10.927 9.087-1.573 5.074-2.363 5.935-5.73 6.249l-2.057.192V26.702c0-16.037-.017-16.178-2.334-18.884-2.078-2.429-6.695-3.774-9.904-2.886M151.805 8.768c-5.085 1.441-6.895 4.456-7.057 11.759l-.108 4.88-1.29.023c-10.026.183-10.538 15.611-.576 17.365l1.865.329.132 9.189c.264 18.379 4.767 23.534 20.682 23.673 9.038.08 11.929-2.077 11.929-8.9 0-5.615-2.586-8.221-8.643-8.708-4.242-.341-4.31-.475-4.462-8.836l-.116-6.383 3.202-.177c6.889-.382 10.173-3.258 10.164-8.9-.009-5.631-3.103-8.395-9.647-8.617l-3.614-.122-.104-5.003c-.116-5.622-.5-6.929-2.676-9.105-2.259-2.259-6.553-3.353-9.681-2.467m65.936 15.758c-3.824.383-7.801 2.097-10.327 4.448l-1.4 1.305-.425-.81c-3.263-6.226-13.349-5.304-16.56 1.515l-.803 1.704v36.251l.87 1.77c3.43 6.986 13.845 7.061 17.503.127l.837-1.587.155-12.704c.166-13.635.133-13.372 1.861-14.826 2.021-1.7 5.197-1.225 6.57.982.702 1.129.711 1.274.864 13.844l.155 12.704.837 1.587c3.743 7.094 14.347 6.803 17.721-.487.62-1.34.66-2.03.807-13.959.176-14.234.153-14.099 2.577-15.199 1.655-.752 2.5-.75 4.071.011 2.512 1.216 2.472.982 2.647 15.343l.155 12.704.837 1.587c3.743 7.094 14.347 6.803 17.72-.487 1.521-3.286 1.068-28.649-.599-33.575-4.061-12.006-19.726-16.421-30.963-8.728l-1.949 1.334-1.199-1.231c-2.672-2.745-7.159-4.104-11.962-3.623m-126.705.562c-28.576 6.026-28.464 45.251.146 51.155 19.084 3.938 35.672-7.959 35.672-25.585 0-17.652-16.73-29.595-35.818-25.57m190.758 1.2c-2.074.981-3.632 2.562-4.612 4.68-1.02 2.206-1.02 37.175 0 39.381 3.373 7.29 13.978 7.581 17.72.487l.838-1.587V32.068l-.838-1.587c-2.425-4.598-8.288-6.473-13.108-4.193M102.482 42.1c6.249 3.188 5.872 14.598-.573 17.371-7.493 3.224-14.393-3.888-11.904-12.269 1.55-5.219 7.487-7.647 12.477-5.102M250.61 88.098c-12.056 4.498-8.852 21.755 3.939 21.215 11.39-.481 14.512-15.905 4.179-20.652-2.086-.958-6.279-1.249-8.118-.563m-30.625 4.833c-5.661 1.728-6.633 3.972-6.757 15.59-.052 4.899-.156 8.907-.232 8.907-.075 0-.799-.472-1.609-1.048-11.241-8.005-27.133-3.556-32.924 9.217-3.347 7.382-3.348 17.299-.001 24.519 8.633 18.624 39.87 20.09 50.63 2.378 3.524-5.801 3.659-7.024 3.54-32.122l-.099-21.069-.837-1.588c-2.109-3.997-7.318-6.125-11.711-4.784M77.444 96.762c-5.085 1.441-6.895 4.456-7.057 11.759l-.108 4.879-1.29.024c-10.026.183-10.538 15.61-.576 17.365l1.866.329.131 9.189c.264 18.379 4.768 23.533 20.682 23.673 9.038.079 11.929-2.077 11.929-8.9 0-5.615-2.586-8.221-8.643-8.708-4.242-.341-4.31-.475-4.462-8.836l-.116-6.383 3.202-.178c6.889-.381 10.173-3.257 10.164-8.899-.009-5.632-3.103-8.395-9.646-8.617l-3.615-.122-.104-5.003c-.116-5.622-.5-6.929-2.676-9.105-2.259-2.259-6.553-3.353-9.681-2.467m-54.328 16.314c-10.171 2.213-15.581 9.633-13.814 18.949 1.297 6.841 5.625 10.306 17.307 13.855 6.639 2.017 7.826 2.899 6.081 4.517-2.177 2.017-7.51 1.152-14.712-2.387-5.078-2.495-8.344-2.081-10.848 1.375-5.571 7.692 4.071 14.823 20.755 15.35 15.781.499 24.497-5.894 24.122-17.692-.235-7.405-4.246-11.707-13.742-14.738-7.824-2.497-8.909-2.899-9.771-3.624-1.918-1.615-.801-3.197 2.259-3.197 2.2 0 4.786.841 8.282 2.693 8.028 4.253 15.362-4.424 8.999-10.646-4.067-3.976-16.72-6.238-24.918-4.455m272.103.006c-28.576 6.026-28.464 45.25.146 51.154 19.084 3.939 35.672-7.958 35.672-25.584 0-17.652-16.73-29.596-35.818-25.57m62.521-.006c-10.171 2.213-15.581 9.633-13.814 18.949 1.297 6.841 5.626 10.306 17.308 13.855 6.638 2.017 7.826 2.899 6.08 4.517-2.176 2.017-7.51 1.152-14.712-2.387-5.077-2.495-8.344-2.081-10.847 1.375-5.572 7.692 4.07 14.823 20.755 15.35 15.78.499 24.496-5.894 24.122-17.692-.236-7.405-4.247-11.707-13.743-14.738-7.824-2.497-8.909-2.899-9.771-3.624-1.918-1.615-.8-3.197 2.259-3.197 2.201 0 4.786.841 8.282 2.693 8.028 4.253 15.363-4.424 8.999-10.646-4.067-3.976-16.72-6.238-24.918-4.455m-238.61 1.206c-4.989 2.36-5.245 3.278-5.355 19.15-.121 17.606.655 21.248 5.567 26.115 6.739 6.676 21.974 6.755 27.794.142l1.175-1.334.477 1.002c3.016 6.324 12.912 6.176 16.195-.242l.935-1.829v-18.457c0-18.113-.012-18.483-.653-19.867-3.373-7.29-13.977-7.582-17.72-.487l-.837 1.587-.155 11.929c-.121 9.284-.249 12.1-.579 12.703-2.564 4.679-9.623 4.974-12.055.505-.462-.851-.547-2.453-.686-13.053l-.158-12.084-.837-1.587c-2.425-4.598-8.289-6.473-13.108-4.193m130.441 0c-2.074.981-3.632 2.562-4.612 4.68-1.021 2.206-1.021 37.175 0 39.381 3.373 7.29 13.978 7.581 17.72.487l.838-1.588v-37.18l-.838-1.587c-2.425-4.598-8.288-6.473-13.108-4.193m-41.607 14.782c6.587 2.244 7.631 14.974 1.486 18.109-6.831 3.485-13.474-.945-13.477-8.986-.002-7.45 5.226-11.428 11.991-9.123m98.701 1.03c6.248 3.188 5.872 14.598-.573 17.371-7.494 3.223-14.393-3.888-11.905-12.269 1.551-5.22 7.488-7.648 12.478-5.102" style="fill:currentColor"/>')}</svg>`);
}
function Sponsors($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    Panel($$renderer2, {
      class: "flex flex-col gap-3 p-6 min-h-[280px]",
      children: ($$renderer3) => {
        $$renderer3.push(`<h2 class="text-2xl font-bold flex items-center"><div class="rounded-full bg-accent-pink p-2 inline-block mr-3 w-10 h-10">`);
        Piggy_bank($$renderer3, { color: "black" });
        $$renderer3.push(`<!----></div> ${escape_html(about_sponsors_title())}</h2> <div class="mt-2 [&amp;>*]:font-normal h-full flex justify-between flex-col"><div class="flex gap-3 justify-center text-lg"><a href="https://hotmilk.studio" target="_blank" class="w-fit h-fit rounded-2xl py-4 btn gap-2 flex flex-col justify-center items-center">`);
        Hotmilk_svg_component($$renderer3, { class: "w-full h-16" });
        $$renderer3.push(`<!----></a></div> <p class="text-muted">${html(sanitize(link("discord_link", about_sponsors_description(), DISCORD_URL, true)))} <span class="inline-block mx-[2px] relative top-[2px]"><button id="email" class="flex items-center gap-[6px] cursor-pointer svelte-3nps6b" aria-label="Copy email to clipboard">`);
        {
          $$renderer3.push("<!--[!-->");
          Copy($$renderer3, { size: "14" });
        }
        $$renderer3.push(`<!--]--> hello@filetools.app</button></span>!</p></div>`);
      }
    });
  });
}
const avatarNullptr = "/_app/immutable/assets/nullptr.BL9AEWgD.jpg";
const avatarLiam = "/_app/immutable/assets/liam.Dza2TlWQ.jpg";
const avatarJovannMC = "/_app/immutable/assets/jovannmc.Djs-uDil.jpg";
const avatarRealmy = "/_app/immutable/assets/realmy.BVTIFIp8.jpg";
const avatarAzurejelly = "/_app/immutable/assets/azurejelly.CJllCyxE.jpg";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const mainContribs = [
      {
        name: "nullptr",
        github: "https://github.com/not-nullptr",
        role: about_credits_roles_lead_developer(),
        avatar: avatarNullptr
      },
      {
        name: "JovannMC",
        github: "https://github.com/JovannMC",
        role: about_credits_roles_developer(),
        avatar: avatarJovannMC
      },
      {
        name: "Liam",
        github: "https://x.com/z2rMC",
        role: about_credits_roles_designer(),
        avatar: avatarLiam
      }
    ];
    const notableContribs = [
      {
        name: "azurejelly",
        github: "https://github.com/azurejelly",
        role: about_credits_roles_docker_ci(),
        avatar: avatarAzurejelly
      },
      {
        name: "Realmy",
        github: "https://github.com/RealmyTheMan",
        role: about_credits_roles_former_cofounder(),
        avatar: avatarRealmy
      }
    ];
    let ghContribs = [];
    $$renderer2.push(`<div class="flex flex-col h-full items-center"><h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6">`);
    Info($$renderer2, { size: "40", class: "inline-block -mt-2 mr-2" });
    $$renderer2.push(`<!----> ${escape_html(about_title())}</h1> <div class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"><div class="flex flex-col gap-4 flex-1">`);
    {
      $$renderer2.push("<!--[-->");
      Donate($$renderer2);
    }
    $$renderer2.push(`<!--]--> `);
    Why($$renderer2);
    $$renderer2.push(`<!----> `);
    Sponsors($$renderer2);
    $$renderer2.push(`<!----></div> <div class="flex flex-col gap-4 flex-1">`);
    Resources($$renderer2);
    $$renderer2.push(`<!----> `);
    Credits($$renderer2, { mainContribs, notableContribs, ghContribs });
    $$renderer2.push(`<!----></div></div></div>`);
  });
}
export {
  _page as default
};
