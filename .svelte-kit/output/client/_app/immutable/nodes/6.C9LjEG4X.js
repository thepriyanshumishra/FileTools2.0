import"../chunks/NZTpNUN0.js";import{g as X,a as Y,b as I,p as de,l as ce,F as u,z as Z,f as se,d as a,s as n,r,q as o,G as A,t as ee,e as k,c as fe,A as be,H as ye}from"../chunks/B2FR920w.js";import{l as Se,s as we,p as $e,i as te}from"../chunks/CXQUeE7d.js";import{c as C}from"../chunks/2lrRA0kY.js";import{I as ke,s as Ie,ae as J,af as G,ag as Fe,h as le,v as oe,ah as De,w as Le,ai as Ne,aj as Oe,ak as ie,al as H,am as M,an as R,ao as j,ap as q,aq as B,ar as K,as as Q,at as V,au as W,av as ze,aw as Ae,ax as Ce,ay as Je,az as Pe,aA as Te,aB as Ee,aC as Ue,aD as Ge,aE as He,aa as Me,aF as Re,aG as je,aH as qe,aI as Be,aJ as $,F as ne,aK as Ke,aL as Qe,aM as Ve,aN as We,aO as Xe,aP as Ye}from"../chunks/B5_f92kn.js";import{S as Ze}from"../chunks/C9qBMrOu.js";import"../chunks/ZuJMJxCK.js";function et(F,m){const s=Se(m,["children","$$slots","$$events","$$legacy"]);/**
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
 */const d=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ke(F,we({name:"server"},()=>s,{get iconNode(){return d},children:(t,v)=>{var i=X(),x=Y(i);Ie(x,m,"default",{}),I(t,i)},$$slots:{default:!0}}))}var tt=se('<input type="text"/>'),st=se('<div class="flex flex-col gap-3"><h2 class="text-2xl font-bold"><!> </h2> <p> </p> <div class="flex flex-col gap-8"><div class="flex flex-col gap-4"><p class="text-sm text-muted font-normal"><!></p> <p class="text-sm text-muted font-normal"><!></p> <div class="flex flex-col gap-2"><p class="text-base font-bold"> </p> <!> <!></div> <div class="flex flex-col gap-4"><div class="flex flex-col gap-2"><p class="text-base font-bold"> </p> <p class="text-sm text-muted font-normal"> </p></div> <!></div></div></div></div>');function at(F,m){de(m,!0);let s=Z(null),d=null;const t=$e(m,"settings",15);ce(()=>{d&&d.abort(),d=new AbortController;const{signal:v}=d;return u(s,"loading"),J.instance.url().then(i=>fetch(`${i}/api/version`,{signal:v})).then(i=>{if(!i.ok)throw new Error("bad response");return G.set(!1),i.json()}).then(i=>{u(s,i.data,!0),G.set(!0)}).catch(i=>{i.name!=="AbortError"&&(u(s,null),G.set(!1))}),()=>{d&&d.abort()}}),Fe(F,{class:"flex flex-col gap-8 p-6",children:(v,i)=>{var x=st(),b=a(x),y=a(b);et(y,{size:"40",class:"inline-block -mt-1 mr-2 bg-accent-red p-2 rounded-full overflow-visible",color:"black"});var z=n(y);r(b);var S=n(b,2),P=a(S);r(S);var D=n(S,2),L=a(D),N=a(L),T=a(N);le(T,()=>oe(De())),r(N);var e=n(N,2),l=a(e);le(l,()=>oe(Le("vertd_link",Oe(),Ne))),r(e);var f=n(e,2),h=a(f),O=a(h,!0);r(h);var w=n(h,2);{let _=A(()=>[j(),R(),M(),H()]),c=A(()=>(()=>{switch(J.instance.innerData().type){case"auto":return j();case"eu":return R();case"us":return M();case"custom":return H()}})());ie(w,{get options(){return o(_)},onselect:p=>{let g;switch(p){case j():g={type:"auto"};break;case R():g={type:"eu"};break;case M():g={type:"us"};break;case H():g={type:"custom"};break;default:g={type:"auto"}}J.instance.set(g)},get selected(){return o(c)},settingsStyle:!0})}var _e=n(w,2);{var pe=_=>{var c=tt();Re(c),ee(p=>qe(c,"placeholder",p),[()=>je()]),Be(c,()=>t().filetoolsdURL,p=>t(t().filetoolsdURL=p,!0)),I(_,c)};te(_e,_=>{J.instance.innerData().type==="custom"&&_(pe)})}r(f);var ae=n(f,2),E=a(ae),U=a(E),ve=a(U,!0);r(U);var re=n(U,2),ge=a(re,!0);r(re),r(E);var ue=n(E,2);{let _=A(()=>[W(),V(),Q(),K(),B(),q()]),c=A(()=>(()=>{switch(t().filetoolsdSpeed){case"verySlow":return W();case"slower":return V();case"slow":return Q();case"medium":return K();case"fast":return B();case"ultraFast":return q()}})());ie(ue,{get options(){return o(_)},settingsStyle:!0,get selected(){return o(c)},onselect:p=>{switch(p){case W():t(t().filetoolsdSpeed="verySlow",!0);break;case V():t(t().filetoolsdSpeed="slower",!0);break;case Q():t(t().filetoolsdSpeed="slow",!0);break;case K():t(t().filetoolsdSpeed="medium",!0);break;case B():t(t().filetoolsdSpeed="fast",!0);break;case q():t(t().filetoolsdSpeed="ultraFast",!0);break}}})}r(ae),r(L),r(D),r(x),ee((_,c,p,g,me,xe,he)=>{k(z,` ${_??""}`),Me(S,1,c),k(P,`${p??""}
			${g??""}`),k(O,me),k(ve,xe),k(ge,he)},[()=>ze(),()=>Ae(He("text-sm font-normal",{"text-failure":o(s)===null,"text-green-700 dynadark:text-green-300":o(s)!==null,"!text-muted":o(s)==="loading"})),()=>Ce(),()=>o(s)?o(s)==="loading"?Je():Pe({commitId:o(s)}):Te(),()=>Ee(),()=>Ue(),()=>Ge()]),I(v,x)}}),fe()}var rt=se('<div class="flex flex-col h-full items-center"><h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6"><!> </h1> <div class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"><div class="flex flex-col gap-4 flex-1"><!> <!></div> <div class="flex flex-col gap-4 flex-1"><!> <!></div></div></div>');function _t(F,m){de(m,!0);let s=Z(be($.instance.settings)),d=Z(!0);ce(()=>{if(o(d)){u(d,!1);return}const e=localStorage.getItem("settings");if(e){const l=JSON.parse(e);if(JSON.stringify(l)===JSON.stringify(o(s)))return}try{$.instance.settings=o(s),$.instance.save(),ne(["settings"],"saving settings")}catch(l){ne(["settings","error"],`failed to save settings: ${l}`),Ke.add({type:"error",message:Qe()})}}),ye(()=>{const e=localStorage.getItem("settings");if(e){const l=JSON.parse(e);$.instance.settings={...$.instance.settings,...l},u(s,$.instance.settings,!0)}});var t=rt(),v=a(t),i=a(v);Ze(i,{size:"40",class:"inline-block -mt-2 mr-2"});var x=n(i);r(v);var b=n(v,2),y=a(b),z=a(y);C(z,()=>We,(e,l)=>{l(e,{get settings(){return o(s)},set settings(f){u(s,f,!0)}})});var S=n(z,2);{var P=e=>{var l=X(),f=Y(l);C(f,()=>at,(h,O)=>{O(h,{get settings(){return o(s)},set settings(w){u(s,w,!0)}})}),I(e,l)};te(S,e=>{e(P)})}r(y);var D=n(y,2),L=a(D);C(L,()=>Xe,(e,l)=>{l(e,{})});var N=n(L,2);{var T=e=>{var l=X(),f=Y(l);C(f,()=>Ye,(h,O)=>{O(h,{get settings(){return o(s)},set settings(w){u(s,w,!0)}})}),I(e,l)};te(N,e=>{e(T)})}r(D),r(b),r(t),ee(e=>k(x,` ${e??""}`),[()=>Ve()]),I(F,t),fe()}export{_t as component};
