import"./NZTpNUN0.js";import"./ZuJMJxCK.js";import{g as B,a as C,b as v,y as I,p as L,z as h,A as O,l as P,q as s,f as E,d as y,C as U,r as x,s as X,t as k,D as T,c as Y,F as c,e as q}from"./B2FR920w.js";import{I as A,s as D,aa as $,ab as F,ac as G,ad as H}from"./B5_f92kn.js";import{l as j,s as J,p as K,b as w,i as Q}from"./CXQUeE7d.js";function st(f,i){const p=j(i,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 3v12"}],["path",{d:"m17 8-5-5-5 5"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}]];A(f,J({name:"upload"},()=>p,{get iconNode(){return n},children:(d,l)=>{var a=B(),r=C(a);D(r,i,"default",{}),v(d,a)},$$slots:{default:!0}}))}var S=E("<span> </span>"),V=E('<span role="tooltip"><!></span> <!>',1);function at(f,i){L(i,!0);let p=K(i,"position",3,"top"),n=h(!1),d=null,l,a=h(void 0),r=h(O({x:0,y:0}));function m(){d=setTimeout(()=>{if(!l)return;const t=l.getBoundingClientRect();switch(p()){case"top":c(r,{x:t.left+t.width/2,y:t.top-10},!0);break;case"bottom":c(r,{x:t.left+t.width/2,y:t.bottom+10},!0);break;case"left":c(r,{x:t.left-10,y:t.top+t.height/2},!0);break;case"right":c(r,{x:t.right+10,y:t.top+t.height/2},!0);break}c(n,!0)},500)}function u(){c(n,!1),d&&clearTimeout(d)}function g(t){if(!s(n)||!l)return;const e=l.getBoundingClientRect();t.clientX>=e.left&&t.clientX<=e.right&&t.clientY>=e.top&&t.clientY<=e.bottom||u()}P(()=>(s(n)&&s(a)&&(document.body.appendChild(s(a)),document.addEventListener("mousemove",g)),()=>{s(a)&&s(a).parentNode===document.body&&document.body.removeChild(s(a)),document.removeEventListener("mousemove",g)}));var _=V(),o=C(_);o.__focusin=m,o.__focusout=u,o.__touchstart=m,o.__touchend=u;var M=y(o);U(M,()=>i.children),x(o),w(o,t=>l=t,()=>l);var N=X(o,2);{var R=t=>{var e=S(),b=y(e,!0);x(e),w(e,z=>c(a,z),()=>s(a)),k(()=>{$(e,1,`tooltip tooltip-${p()??""}`,"svelte-14e12rk"),F(e,`left: ${s(r).x??""}px; top: ${s(r).y??""}px;`),q(b,i.text)}),G(3,e,()=>H,()=>({duration:100})),v(t,e)};Q(N,t=>{s(n)&&t(R)})}k(()=>$(o,1,`relative inline-block ${i.className??""}`,"svelte-14e12rk")),T("mouseenter",o,m),T("mouseleave",o,u),v(f,_),Y()}I(["focusin","focusout","touchstart","touchend"]);export{at as T,st as U};
