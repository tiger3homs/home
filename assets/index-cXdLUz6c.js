const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ServicesSection-B0n5g5FI.js","assets/react-vendor-Bwa1dZdL.js","assets/firebase-vendor-CAk-8R_y.js","assets/ProjectsSection-DUCKxv21.js","assets/ContactSection-B4rna1rU.js"])))=>i.map(i=>d[i]);
import{r as F,a as cu,u as La,B as uu,R as hu,b as Zn,N as Fa,L as du}from"./react-vendor-Bwa1dZdL.js";import{L as fu,_ as mu,C as pu,r as bo,F as gu,a as yu,g as _u,b as vu,c as Tu,d as Kt,e as Eu,f as wu,S as Au,h as Lt,i as Iu,j as bu,k as xu,l as Ru,o as Ma,s as Cu,m as Pu}from"./firebase-vendor-CAk-8R_y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ja={exports:{}},Ir={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=F,Vu=Symbol.for("react.element"),Nu=Symbol.for("react.fragment"),ku=Object.prototype.hasOwnProperty,Du=Su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lu={key:!0,ref:!0,__self:!0,__source:!0};function Oa(r,t,e){var n,s={},o=null,a=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)ku.call(t,n)&&!Lu.hasOwnProperty(n)&&(s[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Vu,type:r,key:o,ref:a,props:s,_owner:Du.current}}Ir.Fragment=Nu;Ir.jsx=Oa;Ir.jsxs=Oa;ja.exports=Ir;var v=ja.exports,Ua,xo=cu;Ua=xo.createRoot,xo.hydrateRoot;const Fu="modulepreload",Mu=function(r){return"/home/"+r},Ro={},Fs=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(h=>{if(h=Mu(h),h in Ro)return;Ro[h]=!0;const d=h.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const E=document.createElement("link");if(E.rel=d?"stylesheet":Fu,d||(E.as="script"),E.crossOrigin="",E.href=h,c&&E.setAttribute("nonce",c),document.head.appendChild(E),d)return new Promise((A,R)=>{E.addEventListener("load",A),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ou=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,n)=>n?n.toUpperCase():e.toLowerCase()),Co=r=>{const t=Ou(r);return t.charAt(0).toUpperCase()+t.slice(1)},qa=(...r)=>r.filter((t,e,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=F.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:a,...c},h)=>F.createElement("svg",{ref:h,...Uu,width:t,height:t,stroke:r,strokeWidth:n?Number(e)*24/Number(t):e,className:qa("lucide",s),...c},[...a.map(([d,m])=>F.createElement(d,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=(r,t)=>{const e=F.forwardRef(({className:n,...s},o)=>F.createElement(qu,{ref:o,iconNode:t,className:qa(`lucide-${ju(Co(r))}`,`lucide-${r}`,n),...s}));return e.displayName=Co(r),e};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],$u=kt("arrow-down",Bu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Gu=kt("arrow-up",zu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Qu=kt("circle-plus",Ku);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Hu=kt("circle-x",Wu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Yu=kt("facebook",Xu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Zu=kt("github",Ju);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],eh=kt("instagram",th);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],rh=kt("linkedin",nh);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ih=kt("mail",sh);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ah=kt("save",oh);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],ch=kt("square-pen",lh);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],hh=kt("trash-2",uh);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],fh=kt("twitter",dh),gn={_origin:"https://api.emailjs.com"},mh=(r,t="https://api.emailjs.com")=>{gn._userID=r,gn._origin=t},Ba=(r,t,e)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Po{constructor(t){this.status=t.status,this.text=t.responseText}}const $a=(r,t,e={})=>new Promise((n,s)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const c=new Po(a);c.status===200||c.text==="OK"?n(c):s(c)}),o.addEventListener("error",({target:a})=>{s(new Po(a))}),o.open("POST",gn._origin+r,!0),Object.keys(e).forEach(a=>{o.setRequestHeader(a,e[a])}),o.send(t)}),ph=(r,t,e,n)=>{const s=n||gn._userID;return Ba(s,r,t),$a("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:s,service_id:r,template_id:t,template_params:e}),{"Content-type":"application/json"})},gh=r=>{let t;if(typeof r=="string"?t=document.querySelector(r):t=r,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},yh=(r,t,e,n)=>{const s=n||gn._userID,o=gh(e);Ba(s,r,t);const a=new FormData(o);return a.append("lib_version","3.2.0"),a.append("service_id",r),a.append("template_id",t),a.append("user_id",s),$a("/api/v1.0/email/send-form",a)},So={init:mh,send:ph,sendForm:yh};var Vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ee,za;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,y){function p(){}p.prototype=y.prototype,w.D=y.prototype,w.prototype=new p,w.prototype.constructor=w,w.C=function(_,T,I){for(var g=Array(arguments.length-2),$=2;$<arguments.length;$++)g[$-2]=arguments[$];return y.prototype[T].apply(_,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,p){p||(p=0);var _=Array(16);if(typeof y=="string")for(var T=0;16>T;++T)_[T]=y.charCodeAt(p++)|y.charCodeAt(p++)<<8|y.charCodeAt(p++)<<16|y.charCodeAt(p++)<<24;else for(T=0;16>T;++T)_[T]=y[p++]|y[p++]<<8|y[p++]<<16|y[p++]<<24;y=w.g[0],p=w.g[1],T=w.g[2];var I=w.g[3],g=y+(I^p&(T^I))+_[0]+3614090360&4294967295;y=p+(g<<7&4294967295|g>>>25),g=I+(T^y&(p^T))+_[1]+3905402710&4294967295,I=y+(g<<12&4294967295|g>>>20),g=T+(p^I&(y^p))+_[2]+606105819&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(y^T&(I^y))+_[3]+3250441966&4294967295,p=T+(g<<22&4294967295|g>>>10),g=y+(I^p&(T^I))+_[4]+4118548399&4294967295,y=p+(g<<7&4294967295|g>>>25),g=I+(T^y&(p^T))+_[5]+1200080426&4294967295,I=y+(g<<12&4294967295|g>>>20),g=T+(p^I&(y^p))+_[6]+2821735955&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(y^T&(I^y))+_[7]+4249261313&4294967295,p=T+(g<<22&4294967295|g>>>10),g=y+(I^p&(T^I))+_[8]+1770035416&4294967295,y=p+(g<<7&4294967295|g>>>25),g=I+(T^y&(p^T))+_[9]+2336552879&4294967295,I=y+(g<<12&4294967295|g>>>20),g=T+(p^I&(y^p))+_[10]+4294925233&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(y^T&(I^y))+_[11]+2304563134&4294967295,p=T+(g<<22&4294967295|g>>>10),g=y+(I^p&(T^I))+_[12]+1804603682&4294967295,y=p+(g<<7&4294967295|g>>>25),g=I+(T^y&(p^T))+_[13]+4254626195&4294967295,I=y+(g<<12&4294967295|g>>>20),g=T+(p^I&(y^p))+_[14]+2792965006&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(y^T&(I^y))+_[15]+1236535329&4294967295,p=T+(g<<22&4294967295|g>>>10),g=y+(T^I&(p^T))+_[1]+4129170786&4294967295,y=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(y^p))+_[6]+3225465664&4294967295,I=y+(g<<9&4294967295|g>>>23),g=T+(y^p&(I^y))+_[11]+643717713&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^y&(T^I))+_[0]+3921069994&4294967295,p=T+(g<<20&4294967295|g>>>12),g=y+(T^I&(p^T))+_[5]+3593408605&4294967295,y=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(y^p))+_[10]+38016083&4294967295,I=y+(g<<9&4294967295|g>>>23),g=T+(y^p&(I^y))+_[15]+3634488961&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^y&(T^I))+_[4]+3889429448&4294967295,p=T+(g<<20&4294967295|g>>>12),g=y+(T^I&(p^T))+_[9]+568446438&4294967295,y=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(y^p))+_[14]+3275163606&4294967295,I=y+(g<<9&4294967295|g>>>23),g=T+(y^p&(I^y))+_[3]+4107603335&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^y&(T^I))+_[8]+1163531501&4294967295,p=T+(g<<20&4294967295|g>>>12),g=y+(T^I&(p^T))+_[13]+2850285829&4294967295,y=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(y^p))+_[2]+4243563512&4294967295,I=y+(g<<9&4294967295|g>>>23),g=T+(y^p&(I^y))+_[7]+1735328473&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^y&(T^I))+_[12]+2368359562&4294967295,p=T+(g<<20&4294967295|g>>>12),g=y+(p^T^I)+_[5]+4294588738&4294967295,y=p+(g<<4&4294967295|g>>>28),g=I+(y^p^T)+_[8]+2272392833&4294967295,I=y+(g<<11&4294967295|g>>>21),g=T+(I^y^p)+_[11]+1839030562&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^y)+_[14]+4259657740&4294967295,p=T+(g<<23&4294967295|g>>>9),g=y+(p^T^I)+_[1]+2763975236&4294967295,y=p+(g<<4&4294967295|g>>>28),g=I+(y^p^T)+_[4]+1272893353&4294967295,I=y+(g<<11&4294967295|g>>>21),g=T+(I^y^p)+_[7]+4139469664&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^y)+_[10]+3200236656&4294967295,p=T+(g<<23&4294967295|g>>>9),g=y+(p^T^I)+_[13]+681279174&4294967295,y=p+(g<<4&4294967295|g>>>28),g=I+(y^p^T)+_[0]+3936430074&4294967295,I=y+(g<<11&4294967295|g>>>21),g=T+(I^y^p)+_[3]+3572445317&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^y)+_[6]+76029189&4294967295,p=T+(g<<23&4294967295|g>>>9),g=y+(p^T^I)+_[9]+3654602809&4294967295,y=p+(g<<4&4294967295|g>>>28),g=I+(y^p^T)+_[12]+3873151461&4294967295,I=y+(g<<11&4294967295|g>>>21),g=T+(I^y^p)+_[15]+530742520&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^y)+_[2]+3299628645&4294967295,p=T+(g<<23&4294967295|g>>>9),g=y+(T^(p|~I))+_[0]+4096336452&4294967295,y=p+(g<<6&4294967295|g>>>26),g=I+(p^(y|~T))+_[7]+1126891415&4294967295,I=y+(g<<10&4294967295|g>>>22),g=T+(y^(I|~p))+_[14]+2878612391&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~y))+_[5]+4237533241&4294967295,p=T+(g<<21&4294967295|g>>>11),g=y+(T^(p|~I))+_[12]+1700485571&4294967295,y=p+(g<<6&4294967295|g>>>26),g=I+(p^(y|~T))+_[3]+2399980690&4294967295,I=y+(g<<10&4294967295|g>>>22),g=T+(y^(I|~p))+_[10]+4293915773&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~y))+_[1]+2240044497&4294967295,p=T+(g<<21&4294967295|g>>>11),g=y+(T^(p|~I))+_[8]+1873313359&4294967295,y=p+(g<<6&4294967295|g>>>26),g=I+(p^(y|~T))+_[15]+4264355552&4294967295,I=y+(g<<10&4294967295|g>>>22),g=T+(y^(I|~p))+_[6]+2734768916&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~y))+_[13]+1309151649&4294967295,p=T+(g<<21&4294967295|g>>>11),g=y+(T^(p|~I))+_[4]+4149444226&4294967295,y=p+(g<<6&4294967295|g>>>26),g=I+(p^(y|~T))+_[11]+3174756917&4294967295,I=y+(g<<10&4294967295|g>>>22),g=T+(y^(I|~p))+_[2]+718787259&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~y))+_[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+I&4294967295}n.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var p=y-this.blockSize,_=this.B,T=this.h,I=0;I<y;){if(T==0)for(;I<=p;)s(this,w,I),I+=this.blockSize;if(typeof w=="string"){for(;I<y;)if(_[T++]=w.charCodeAt(I++),T==this.blockSize){s(this,_),T=0;break}}else for(;I<y;)if(_[T++]=w[I++],T==this.blockSize){s(this,_),T=0;break}}this.h=T,this.o+=y},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var p=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=p&255,p/=256;for(this.u(w),w=Array(16),y=p=0;4>y;++y)for(var _=0;32>_;_+=8)w[p++]=this.g[y]>>>_&255;return w};function o(w,y){var p=c;return Object.prototype.hasOwnProperty.call(p,w)?p[w]:p[w]=y(w)}function a(w,y){this.h=y;for(var p=[],_=!0,T=w.length-1;0<=T;T--){var I=w[T]|0;_&&I==y||(p[T]=I,_=!1)}this.g=p}var c={};function h(w){return-128<=w&&128>w?o(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return E;if(0>w)return V(d(-w));for(var y=[],p=1,_=0;w>=p;_++)y[_]=w/p|0,p*=4294967296;return new a(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return V(m(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=d(Math.pow(y,8)),_=E,T=0;T<w.length;T+=8){var I=Math.min(8,w.length-T),g=parseInt(w.substring(T,T+I),y);8>I?(I=d(Math.pow(y,I)),_=_.j(I).add(d(g))):(_=_.j(p),_=_.add(d(g)))}return _}var E=h(0),A=h(1),R=h(16777216);r=a.prototype,r.m=function(){if(N(this))return-V(this).m();for(var w=0,y=1,p=0;p<this.g.length;p++){var _=this.i(p);w+=(0<=_?_:4294967296+_)*y,y*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(N(this))return"-"+V(this).toString(w);for(var y=d(Math.pow(w,6)),p=this,_="";;){var T=J(p,y).g;p=q(p,T.j(y));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(w);if(p=T,S(p))return I+_;for(;6>I.length;)I="0"+I;_=I+_}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function N(w){return w.h==-1}r.l=function(w){return w=q(this,w),N(w)?-1:S(w)?0:1};function V(w){for(var y=w.g.length,p=[],_=0;_<y;_++)p[_]=~w.g[_];return new a(p,~w.h).add(A)}r.abs=function(){return N(this)?V(this):this},r.add=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],_=0,T=0;T<=y;T++){var I=_+(this.i(T)&65535)+(w.i(T)&65535),g=(I>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);_=g>>>16,I&=65535,g&=65535,p[T]=g<<16|I}return new a(p,p[p.length-1]&-2147483648?-1:0)};function q(w,y){return w.add(V(y))}r.j=function(w){if(S(this)||S(w))return E;if(N(this))return N(w)?V(this).j(V(w)):V(V(this).j(w));if(N(w))return V(this.j(V(w)));if(0>this.l(R)&&0>w.l(R))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,p=[],_=0;_<2*y;_++)p[_]=0;for(_=0;_<this.g.length;_++)for(var T=0;T<w.g.length;T++){var I=this.i(_)>>>16,g=this.i(_)&65535,$=w.i(T)>>>16,st=w.i(T)&65535;p[2*_+2*T]+=g*st,K(p,2*_+2*T),p[2*_+2*T+1]+=I*st,K(p,2*_+2*T+1),p[2*_+2*T+1]+=g*$,K(p,2*_+2*T+1),p[2*_+2*T+2]+=I*$,K(p,2*_+2*T+2)}for(_=0;_<y;_++)p[_]=p[2*_+1]<<16|p[2*_];for(_=y;_<2*y;_++)p[_]=0;return new a(p,0)};function K(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function W(w,y){this.g=w,this.h=y}function J(w,y){if(S(y))throw Error("division by zero");if(S(w))return new W(E,E);if(N(w))return y=J(V(w),y),new W(V(y.g),V(y.h));if(N(y))return y=J(w,V(y)),new W(V(y.g),y.h);if(30<w.g.length){if(N(w)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var p=A,_=y;0>=_.l(w);)p=It(p),_=It(_);var T=M(p,1),I=M(_,1);for(_=M(_,2),p=M(p,2);!S(_);){var g=I.add(_);0>=g.l(w)&&(T=T.add(p),I=g),_=M(_,1),p=M(p,1)}return y=q(w,T.j(y)),new W(T,y)}for(T=E;0<=w.l(y);){for(p=Math.max(1,Math.floor(w.m()/y.m())),_=Math.ceil(Math.log(p)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),I=d(p),g=I.j(y);N(g)||0<g.l(w);)p-=_,I=d(p),g=I.j(y);S(I)&&(I=A),T=T.add(I),w=q(w,g)}return new W(T,w)}r.A=function(w){return J(this,w).h},r.and=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],_=0;_<y;_++)p[_]=this.i(_)&w.i(_);return new a(p,this.h&w.h)},r.or=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],_=0;_<y;_++)p[_]=this.i(_)|w.i(_);return new a(p,this.h|w.h)},r.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),p=[],_=0;_<y;_++)p[_]=this.i(_)^w.i(_);return new a(p,this.h^w.h)};function It(w){for(var y=w.g.length+1,p=[],_=0;_<y;_++)p[_]=w.i(_)<<1|w.i(_-1)>>>31;return new a(p,w.h)}function M(w,y){var p=y>>5;y%=32;for(var _=w.g.length-p,T=[],I=0;I<_;I++)T[I]=0<y?w.i(I+p)>>>y|w.i(I+p+1)<<32-y:w.i(I+p);return new a(T,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,za=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ee=a}).apply(typeof Vo<"u"?Vo:typeof self<"u"?self:typeof window<"u"?window:{});var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ga,ln,Ka,or,gs,Qa,Wa,Ha;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,l,u){return i==Array.prototype||i==Object.prototype||(i[l]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof tr=="object"&&tr];for(var l=0;l<i.length;++l){var u=i[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function s(i,l){if(l)t:{var u=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in u))break t;u=u[b]}i=i[i.length-1],f=u[i],l=l(f),l!=f&&l!=null&&t(u,i,{configurable:!0,writable:!0,value:l})}}function o(i,l){i instanceof String&&(i+="");var u=0,f=!1,b={next:function(){if(!f&&u<i.length){var x=u++;return{value:l(x,i[x]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(i){return i||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var l=typeof i;return l=l!="object"?l:i?Array.isArray(i)?"array":l:"null",l=="array"||l=="object"&&typeof i.length=="number"}function d(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function m(i,l,u){return i.call.apply(i.bind,arguments)}function E(i,l,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),i.apply(l,b)}}return function(){return i.apply(l,arguments)}}function A(i,l,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,A.apply(null,arguments)}function R(i,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,l){function u(){}u.prototype=l.prototype,i.aa=l.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,b,x){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return l.prototype[b].apply(f,k)}}function N(i){const l=i.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=i[f];return u}return[]}function V(i,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const b=i.length||0,x=f.length||0;i.length=b+x;for(let k=0;k<x;k++)i[b+k]=f[k]}else i.push(f)}}class q{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function K(i){return/^[\s\xa0]*$/.test(i)}function W(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function J(i){return J[" "](i),i}J[" "]=function(){};var It=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function M(i,l,u){for(const f in i)l.call(u,i[f],f,i)}function w(i,l){for(const u in i)l.call(void 0,i[u],u,i)}function y(i){const l={};for(const u in i)l[u]=i[u];return l}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,l){let u,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(u in f)i[u]=f[u];for(let x=0;x<p.length;x++)u=p[x],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var l=1;i=i.split(":");const u=[];for(;0<l&&i.length;)u.push(i.shift()),l--;return i.length&&u.push(i.join(":")),u}function I(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Ur;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,u){const f=st.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var st=new q(()=>new Dt,i=>i.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ge=!1,Ur=new $,Ii=()=>{const i=c.Promise.resolve(void 0);fe=()=>{i.then(Pc)}};var Pc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){I(u)}var l=st;l.j(i),100>l.h&&(l.h++,i.next=l.g,l.g=i)}Ge=!1};function Xt(){this.s=this.s,this.C=this.C}Xt.prototype.s=!1,Xt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Sc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return i}();function Ke(i,l){if(pt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget){if(It){t:{try{J(l.nodeName);var b=!0;break t}catch{}b=!1}b||(l=null)}}else u=="mouseover"?l=i.fromElement:u=="mouseout"&&(l=i.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Vc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ke.aa.h.call(this)}}S(Ke,pt);var Vc={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Dn="closure_listenable_"+(1e6*Math.random()|0),Nc=0;function kc(i,l,u,f,b){this.listener=i,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=b,this.key=++Nc,this.da=this.fa=!1}function Ln(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Fn(i){this.src=i,this.g={},this.h=0}Fn.prototype.add=function(i,l,u,f,b){var x=i.toString();i=this.g[x],i||(i=this.g[x]=[],this.h++);var k=Br(i,l,f,b);return-1<k?(l=i[k],u||(l.fa=!1)):(l=new kc(l,this.src,x,!!f,b),l.fa=u,i.push(l)),l};function qr(i,l){var u=l.type;if(u in i.g){var f=i.g[u],b=Array.prototype.indexOf.call(f,l,void 0),x;(x=0<=b)&&Array.prototype.splice.call(f,b,1),x&&(Ln(l),i.g[u].length==0&&(delete i.g[u],i.h--))}}function Br(i,l,u,f){for(var b=0;b<i.length;++b){var x=i[b];if(!x.da&&x.listener==l&&x.capture==!!u&&x.ha==f)return b}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),zr={};function bi(i,l,u,f,b){if(Array.isArray(l)){for(var x=0;x<l.length;x++)bi(i,l[x],u,f,b);return null}return u=Ci(u),i&&i[Dn]?i.K(l,u,d(f)?!!f.capture:!!f,b):Dc(i,l,u,!1,f,b)}function Dc(i,l,u,f,b,x){if(!l)throw Error("Invalid event type");var k=d(b)?!!b.capture:!!b,Z=Kr(i);if(Z||(i[$r]=Z=new Fn(i)),u=Z.add(l,u,f,k,x),u.proxy)return u;if(f=Lc(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Sc||(b=k),b===void 0&&(b=!1),i.addEventListener(l.toString(),f,b);else if(i.attachEvent)i.attachEvent(Ri(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Lc(){function i(u){return l.call(i.src,i.listener,u)}const l=Fc;return i}function xi(i,l,u,f,b){if(Array.isArray(l))for(var x=0;x<l.length;x++)xi(i,l[x],u,f,b);else f=d(f)?!!f.capture:!!f,u=Ci(u),i&&i[Dn]?(i=i.i,l=String(l).toString(),l in i.g&&(x=i.g[l],u=Br(x,u,f,b),-1<u&&(Ln(x[u]),Array.prototype.splice.call(x,u,1),x.length==0&&(delete i.g[l],i.h--)))):i&&(i=Kr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=Br(l,u,f,b)),(u=-1<i?l[i]:null)&&Gr(u))}function Gr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[Dn])qr(l.i,i);else{var u=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(u,f,i.capture):l.detachEvent?l.detachEvent(Ri(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Kr(l))?(qr(u,i),u.h==0&&(u.src=null,l[$r]=null)):Ln(i)}}}function Ri(i){return i in zr?zr[i]:zr[i]="on"+i}function Fc(i,l){if(i.da)i=!0;else{l=new Ke(l,this);var u=i.listener,f=i.ha||i.src;i.fa&&Gr(i),i=u.call(f,l)}return i}function Kr(i){return i=i[$r],i instanceof Fn?i:null}var Qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ci(i){return typeof i=="function"?i:(i[Qr]||(i[Qr]=function(l){return i.handleEvent(l)}),i[Qr])}function gt(){Xt.call(this),this.i=new Fn(this),this.M=this,this.F=null}S(gt,Xt),gt.prototype[Dn]=!0,gt.prototype.removeEventListener=function(i,l,u,f){xi(this,i,l,u,f)};function bt(i,l){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new pt(l,i);else if(l instanceof pt)l.target=l.target||i;else{var b=l;l=new pt(f,i),_(l,b)}if(b=!0,u)for(var x=u.length-1;0<=x;x--){var k=l.g=u[x];b=Mn(k,f,!0,l)&&b}if(k=l.g=i,b=Mn(k,f,!0,l)&&b,b=Mn(k,f,!1,l)&&b,u)for(x=0;x<u.length;x++)k=l.g=u[x],b=Mn(k,f,!1,l)&&b}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var i=this.i,l;for(l in i.g){for(var u=i.g[l],f=0;f<u.length;f++)Ln(u[f]);delete i.g[l],i.h--}}this.F=null},gt.prototype.K=function(i,l,u,f){return this.i.add(String(i),l,!1,u,f)},gt.prototype.L=function(i,l,u,f){return this.i.add(String(i),l,!0,u,f)};function Mn(i,l,u,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,x=0;x<l.length;++x){var k=l[x];if(k&&!k.da&&k.capture==u){var Z=k.listener,ht=k.ha||k.src;k.fa&&qr(i.i,k),b=Z.call(ht,f)!==!1&&b}}return b&&!f.defaultPrevented}function Pi(i,l,u){if(typeof i=="function")u&&(i=A(i,u));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(i,l||0)}function Si(i){i.g=Pi(()=>{i.g=null,i.i&&(i.i=!1,Si(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Mc extends Xt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Si(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){Xt.call(this),this.h=i,this.g={}}S(Qe,Xt);var Vi=[];function Ni(i){M(i.g,function(l,u){this.g.hasOwnProperty(u)&&Gr(l)},i),i.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),Ni(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wr=c.JSON.stringify,jc=c.JSON.parse,Oc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Hr(){}Hr.prototype.h=null;function ki(i){return i.h||(i.h=i.i())}function Di(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){pt.call(this,"d")}S(Xr,pt);function Yr(){pt.call(this,"c")}S(Yr,pt);var me={},Li=null;function jn(){return Li=Li||new gt}me.La="serverreachability";function Fi(i){pt.call(this,me.La,i)}S(Fi,pt);function He(i){const l=jn();bt(l,new Fi(l))}me.STAT_EVENT="statevent";function Mi(i,l){pt.call(this,me.STAT_EVENT,i),this.stat=l}S(Mi,pt);function xt(i){const l=jn();bt(l,new Mi(l,i))}me.Ma="timingevent";function ji(i,l){pt.call(this,me.Ma,i),this.size=l}S(ji,pt);function Xe(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},l)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Uc(i,l,u,f,b,x){i.info(function(){if(i.g)if(x)for(var k="",Z=x.split("&"),ht=0;ht<Z.length;ht++){var X=Z[ht].split("=");if(1<X.length){var yt=X[0];X=X[1];var _t=yt.split("_");k=2<=_t.length&&_t[1]=="type"?k+(yt+"="+X+"&"):k+(yt+"=redacted&")}}else k=null;else k=x;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+u+`
`+k})}function qc(i,l,u,f,b,x,k){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+u+`
`+x+" "+k})}function Ie(i,l,u,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+$c(i,u)+(f?" "+f:"")})}function Bc(i,l){i.info(function(){return"TIMEOUT: "+l})}Ye.prototype.info=function(){};function $c(i,l){if(!i.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var x=b[0];if(x!="noop"&&x!="stop"&&x!="close")for(var k=1;k<b.length;k++)b[k]=""}}}}return Wr(u)}catch{return l}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function Un(){}S(Un,Hr),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},Jr=new Un;function Yt(i,l,u,f){this.j=i,this.i=l,this.l=u,this.R=f||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ui}function Ui(){this.i=null,this.g="",this.h=!1}var qi={},Zr={};function ts(i,l,u){i.L=1,i.v=zn(zt(l)),i.m=u,i.P=!0,Bi(i,null)}function Bi(i,l){i.F=Date.now(),qn(i),i.A=zt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),no(u.i,"t",f),i.C=0,u=i.j.J,i.h=new Ui,i.g=Eo(i.j,u?l:null,!i.m),0<i.O&&(i.M=new Mc(A(i.Y,i,i.g),i.O)),l=i.U,u=i.g,f=i.ca;var b="readystatechange";Array.isArray(b)||(b&&(Vi[0]=b.toString()),b=Vi);for(var x=0;x<b.length;x++){var k=bi(u,b[x],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,l)):(i.u="GET",i.g.ea(i.A,i.u,null,l)),He(),Uc(i.i,i.u,i.A,i.l,i.R,i.m)}Yt.prototype.ca=function(i){i=i.target;const l=this.M;l&&Gt(i)==3?l.j():this.Y(i)},Yt.prototype.Y=function(i){try{if(i==this.g)t:{const _t=Gt(this.g);var l=this.g.Ba();const Re=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||co(this.g)))){this.J||_t!=4||l==7||(l==8||0>=Re?He(3):He(2)),es(this);var u=this.g.Z();this.X=u;e:if($i(this)){var f=co(this.g);i="";var b=f.length,x=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pe(this),Je(this);var k="";break e}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,i+=this.h.i.decode(f[l],{stream:!(x&&l==b-1)});f.length=0,this.h.g+=i,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,qc(this.i,this.u,this.A,this.l,this.R,_t,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,ht=this.g;if((Z=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Z)){var X=Z;break e}}X=null}if(u=X)Ie(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ns(this,u);else{this.o=!1,this.s=3,xt(12),pe(this),Je(this);break t}}if(this.P){u=!0;let Ft;for(;!this.J&&this.C<k.length;)if(Ft=zc(this,k),Ft==Zr){_t==4&&(this.s=4,xt(14),u=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==qi){this.s=4,xt(15),Ie(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else Ie(this.i,this.l,Ft,null),ns(this,Ft);if($i(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||k.length!=0||this.h.h||(this.s=1,xt(16),u=!1),this.o=this.o&&u,!u)Ie(this.i,this.l,k,"[Invalid Chunked Response]"),pe(this),Je(this);else if(0<k.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ls(yt),yt.M=!0,xt(11))}}else Ie(this.i,this.l,k,null),ns(this,k);_t==4&&pe(this),this.o&&!this.J&&(_t==4?yo(this.j,this):(this.o=!1,qn(this)))}else au(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),pe(this),Je(this)}}}catch{}finally{}};function $i(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function zc(i,l){var u=i.C,f=l.indexOf(`
`,u);return f==-1?Zr:(u=Number(l.substring(u,f)),isNaN(u)?qi:(f+=1,f+u>l.length?Zr:(l=l.slice(f,f+u),i.C=f+u,l)))}Yt.prototype.cancel=function(){this.J=!0,pe(this)};function qn(i){i.S=Date.now()+i.I,zi(i,i.I)}function zi(i,l){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Xe(A(i.ba,i),l)}function es(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Yt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Bc(this.i,this.A),this.L!=2&&(He(),xt(17)),pe(this),this.s=2,Je(this)):zi(this,this.S-i)};function Je(i){i.j.G==0||i.J||yo(i.j,i)}function pe(i){es(i);var l=i.M;l&&typeof l.ma=="function"&&l.ma(),i.M=null,Ni(i.U),i.g&&(l=i.g,i.g=null,l.abort(),l.ma())}function ns(i,l){try{var u=i.j;if(u.G!=0&&(u.g==i||rs(u.h,i))){if(!i.K&&rs(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Xn(u),Wn(u);else break t;as(u),xt(18)}}else u.za=b[1],0<u.za-u.T&&37500>b[2]&&u.F&&u.v==0&&!u.C&&(u.C=Xe(A(u.Za,u),6e3));if(1>=Qi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ye(u,11)}else if((i.K||u.g==i)&&Xn(u),!K(l))for(b=u.Da.g.parse(l),l=0;l<b.length;l++){let X=b[l];if(u.T=X[0],X=X[1],u.G==2)if(X[0]=="c"){u.K=X[1],u.ia=X[2];const yt=X[3];yt!=null&&(u.la=yt,u.j.info("VER="+u.la));const _t=X[4];_t!=null&&(u.Aa=_t,u.j.info("SVER="+u.Aa));const Re=X[5];Re!=null&&typeof Re=="number"&&0<Re&&(f=1.5*Re,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Ft=i.g;if(Ft){const Jn=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jn){var x=f.h;x.g||Jn.indexOf("spdy")==-1&&Jn.indexOf("quic")==-1&&Jn.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ss(x,x.h),x.h=null))}if(f.D){const cs=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;cs&&(f.ya=cs,tt(f.I,f.D,cs))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var k=i;if(f.qa=To(f,f.J?f.ia:null,f.W),k.K){Wi(f.h,k);var Z=k,ht=f.L;ht&&(Z.I=ht),Z.B&&(es(Z),qn(Z)),f.g=k}else po(f);0<u.i.length&&Hn(u)}else X[0]!="stop"&&X[0]!="close"||ye(u,7);else u.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?ye(u,7):os(u):X[0]!="noop"&&u.l&&u.l.ta(X),u.v=0)}}He(4)}catch{}}var Gc=class{constructor(i,l){this.g=i,this.map=l}};function Gi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ki(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Qi(i){return i.h?1:i.g?i.g.size:0}function rs(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ss(i,l){i.g?i.g.add(l):i.h=l}function Wi(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}Gi.prototype.cancel=function(){if(this.i=Hi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Hi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const u of i.g.values())l=l.concat(u.D);return l}return N(i.i)}function Kc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var l=[],u=i.length,f=0;f<u;f++)l.push(i[f]);return l}l=[],u=0;for(f in i)l[u++]=i[f];return l}function Qc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var l=[];i=i.length;for(var u=0;u<i;u++)l.push(u);return l}l=[],u=0;for(const f in i)l[u++]=f;return l}}}function Xi(i,l){if(i.forEach&&typeof i.forEach=="function")i.forEach(l,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,l,void 0);else for(var u=Qc(i),f=Kc(i),b=f.length,x=0;x<b;x++)l.call(void 0,f[x],u&&u[x],i)}var Yi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wc(i,l){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),b=null;if(0<=f){var x=i[u].substring(0,f);b=i[u].substring(f+1)}else x=i[u];l(x,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ge(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ge){this.h=i.h,Bn(this,i.j),this.o=i.o,this.g=i.g,$n(this,i.s),this.l=i.l;var l=i.i,u=new en;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Ji(this,u),this.m=i.m}else i&&(l=String(i).match(Yi))?(this.h=!1,Bn(this,l[1]||"",!0),this.o=Ze(l[2]||""),this.g=Ze(l[3]||"",!0),$n(this,l[4]),this.l=Ze(l[5]||"",!0),Ji(this,l[6]||"",!0),this.m=Ze(l[7]||"")):(this.h=!1,this.i=new en(null,this.h))}ge.prototype.toString=function(){var i=[],l=this.j;l&&i.push(tn(l,Zi,!0),":");var u=this.g;return(u||l=="file")&&(i.push("//"),(l=this.o)&&i.push(tn(l,Zi,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(tn(u,u.charAt(0)=="/"?Yc:Xc,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",tn(u,Zc)),i.join("")};function zt(i){return new ge(i)}function Bn(i,l,u){i.j=u?Ze(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function $n(i,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);i.s=l}else i.s=null}function Ji(i,l,u){l instanceof en?(i.i=l,tu(i.i,i.h)):(u||(l=tn(l,Jc)),i.i=new en(l,i.h))}function tt(i,l,u){i.i.set(l,u)}function zn(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ze(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function tn(i,l,u){return typeof i=="string"?(i=encodeURI(i).replace(l,Hc),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Hc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Zi=/[#\/\?@]/g,Xc=/[#\?:]/g,Yc=/[#\?]/g,Jc=/[#\?@]/g,Zc=/#/g;function en(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function Jt(i){i.g||(i.g=new Map,i.h=0,i.i&&Wc(i.i,function(l,u){i.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=en.prototype,r.add=function(i,l){Jt(this),this.i=null,i=be(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(l),this.h+=1,this};function to(i,l){Jt(i),l=be(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function eo(i,l){return Jt(i),l=be(i,l),i.g.has(l)}r.forEach=function(i,l){Jt(this),this.g.forEach(function(u,f){u.forEach(function(b){i.call(l,b,f,this)},this)},this)},r.na=function(){Jt(this);const i=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const b=i[f];for(let x=0;x<b.length;x++)u.push(l[f])}return u},r.V=function(i){Jt(this);let l=[];if(typeof i=="string")eo(this,i)&&(l=l.concat(this.g.get(be(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)l=l.concat(i[u])}return l},r.set=function(i,l){return Jt(this),this.i=null,i=be(this,i),eo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},r.get=function(i,l){return i?(i=this.V(i),0<i.length?String(i[0]):l):l};function no(i,l,u){to(i,l),0<u.length&&(i.i=null,i.g.set(be(i,l),N(u)),i.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const x=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var b=x;k[f]!==""&&(b+="="+encodeURIComponent(String(k[f]))),i.push(b)}}return this.i=i.join("&")};function be(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function tu(i,l){l&&!i.j&&(Jt(i),i.i=null,i.g.forEach(function(u,f){var b=f.toLowerCase();f!=b&&(to(this,f),no(this,b,u))},i)),i.j=l}function eu(i,l){const u=new Ye;if(c.Image){const f=new Image;f.onload=R(Zt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Zt,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Zt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Zt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function nu(i,l){const u=new Ye,f=new AbortController,b=setTimeout(()=>{f.abort(),Zt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(x=>{clearTimeout(b),x.ok?Zt(u,"TestPingServer: ok",!0,l):Zt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Zt(u,"TestPingServer: error",!1,l)})}function Zt(i,l,u,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(u)}catch{}}function ru(){this.g=new Oc}function su(i,l,u){const f=u||"";try{Xi(i,function(b,x){let k=b;d(b)&&(k=Wr(b)),l.push(f+x+"="+encodeURIComponent(k))})}catch(b){throw l.push(f+"type="+encodeURIComponent("_badmap")),b}}function Gn(i){this.l=i.Ub||null,this.j=i.eb||!1}S(Gn,Hr),Gn.prototype.g=function(){return new Kn(this.l,this.j)},Gn.prototype.i=function(i){return function(){return i}}({});function Kn(i,l){gt.call(this),this.D=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Kn,gt),r=Kn.prototype,r.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=l,this.readyState=1,rn(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(l.body=i),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ro(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ro(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?nn(this):rn(this),this.readyState==3&&ro(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,nn(this))},r.Qa=function(i){this.g&&(this.response=i,nn(this))},r.ga=function(){this.g&&nn(this)};function nn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,rn(i)}r.setRequestHeader=function(i,l){this.u.append(i,l)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=l.next();return i.join(`\r
`)};function rn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function so(i){let l="";return M(i,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function is(i,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=so(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):tt(i,l,u))}function rt(i){gt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(rt,gt);var iu=/^https?$/i,ou=["POST","PUT"];r=rt.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?ki(this.o):ki(Jr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(x){io(this,x);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)u.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const x of f.keys())u.set(x,f.get(x));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(x=>x.toLowerCase()=="content-type"),b=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ou,l,void 0))||f||b||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,k]of u)this.g.setRequestHeader(x,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lo(this),this.u=!0,this.g.send(i),this.u=!1}catch(x){io(this,x)}};function io(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.m=5,oo(i),Qn(i)}function oo(i){i.A||(i.A=!0,bt(i,"complete"),bt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,bt(this,"complete"),bt(this,"abort"),Qn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),rt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ao(this):this.bb())},r.bb=function(){ao(this)};function ao(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Gt(i)!=4||i.Z()!=2)){if(i.u&&Gt(i)==4)Pi(i.Ea,0,i);else if(bt(i,"readystatechange"),Gt(i)==4){i.h=!1;try{const k=i.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=k===0){var b=String(i.D).match(Yi)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),f=!iu.test(b?b.toLowerCase():"")}u=f}if(u)bt(i,"complete"),bt(i,"success");else{i.m=6;try{var x=2<Gt(i)?i.g.statusText:""}catch{x=""}i.l=x+" ["+i.Z()+"]",oo(i)}}finally{Qn(i)}}}}function Qn(i,l){if(i.g){lo(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,l||bt(i,"ready");try{u.onreadystatechange=f}catch{}}}function lo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Gt(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),jc(l)}};function co(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function au(i){const l={};i=(i.g&&2<=Gt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(K(i[f]))continue;var u=T(i[f]);const b=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const x=l[b]||[];l[b]=x,x.push(u)}w(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(i,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||l}function uo(i){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,i),this.cb=sn("retryDelaySeedMs",1e4,i),this.Wa=sn("forwardChannelMaxRetries",2,i),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(i&&i.concurrentRequestLimit),this.Da=new ru,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=uo.prototype,r.la=8,r.G=1,r.connect=function(i,l,u,f){xt(0),this.W=i,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=To(this,null,this.W),Hn(this)};function os(i){if(ho(i),i.G==3){var l=i.U++,u=zt(i.I);if(tt(u,"SID",i.K),tt(u,"RID",l),tt(u,"TYPE","terminate"),on(i,u),l=new Yt(i,i.j,l),l.L=2,l.v=zn(zt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Eo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),qn(l)}vo(i)}function Wn(i){i.g&&(ls(i),i.g.cancel(),i.g=null)}function ho(i){Wn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Xn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Hn(i){if(!Ki(i.h)&&!i.s){i.s=!0;var l=i.Ga;fe||Ii(),Ge||(fe(),Ge=!0),Ur.add(l,i),i.B=0}}function lu(i,l){return Qi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=l.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Xe(A(i.Ga,i,l),_o(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const b=new Yt(this,this.j,i);let x=this.o;if(this.S&&(x?(x=y(x),_(x,this.S)):x=this.S),this.m!==null||this.O||(b.H=x,x=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=mo(this,b,l),u=zt(this.I),tt(u,"RID",i),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),on(this,u),x&&(this.O?l="headers="+encodeURIComponent(String(so(x)))+"&"+l:this.m&&is(u,this.m,x)),ss(this.h,b),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",l),tt(u,"SID","null"),b.T=!0,ts(b,u,null)):ts(b,u,l),this.G=2}}else this.G==3&&(i?fo(this,i):this.i.length==0||Ki(this.h)||fo(this))};function fo(i,l){var u;l?u=l.l:u=i.U++;const f=zt(i.I);tt(f,"SID",i.K),tt(f,"RID",u),tt(f,"AID",i.T),on(i,f),i.m&&i.o&&is(f,i.m,i.o),u=new Yt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),l&&(i.i=l.D.concat(i.i)),l=mo(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ss(i.h,u),ts(u,f,l)}function on(i,l){i.H&&M(i.H,function(u,f){tt(l,f,u)}),i.l&&Xi({},function(u,f){tt(l,f,u)})}function mo(i,l,u){u=Math.min(i.i.length,u);var f=i.l?A(i.l.Na,i.l,i):null;t:{var b=i.i;let x=-1;for(;;){const k=["count="+u];x==-1?0<u?(x=b[0].g,k.push("ofs="+x)):x=0:k.push("ofs="+x);let Z=!0;for(let ht=0;ht<u;ht++){let X=b[ht].g;const yt=b[ht].map;if(X-=x,0>X)x=Math.max(0,b[ht].g-100),Z=!1;else try{su(yt,k,"req"+X+"_")}catch{f&&f(yt)}}if(Z){f=k.join("&");break t}}}return i=i.i.splice(0,u),l.D=i,f}function po(i){if(!i.g&&!i.u){i.Y=1;var l=i.Fa;fe||Ii(),Ge||(fe(),Ge=!0),Ur.add(l,i),i.v=0}}function as(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Xe(A(i.Fa,i),_o(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,go(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Xe(A(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Wn(this),go(this))};function ls(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function go(i){i.g=new Yt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var l=zt(i.qa);tt(l,"RID","rpc"),tt(l,"SID",i.K),tt(l,"AID",i.T),tt(l,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(l,"TO",i.ja),tt(l,"TYPE","xmlhttp"),on(i,l),i.m&&i.o&&is(l,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=zn(zt(l)),u.m=null,u.P=!0,Bi(u,i)}r.Za=function(){this.C!=null&&(this.C=null,Wn(this),as(this),xt(19))};function Xn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function yo(i,l){var u=null;if(i.g==l){Xn(i),ls(i),i.g=null;var f=2}else if(rs(i.h,l))u=l.D,Wi(i.h,l),f=1;else return;if(i.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var b=i.B;f=jn(),bt(f,new ji(f,u)),Hn(i)}else po(i);else if(b=l.s,b==3||b==0&&0<l.X||!(f==1&&lu(i,l)||f==2&&as(i)))switch(u&&0<u.length&&(l=i.h,l.i=l.i.concat(u)),b){case 1:ye(i,5);break;case 4:ye(i,10);break;case 3:ye(i,6);break;default:ye(i,2)}}}function _o(i,l){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*l}function ye(i,l){if(i.j.info("Error code "+l),l==2){var u=A(i.fb,i),f=i.Xa;const b=!f;f=new ge(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bn(f,"https"),zn(f),b?eu(f.toString(),u):nu(f.toString(),u)}else xt(2);i.G=0,i.l&&i.l.sa(l),vo(i),ho(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function vo(i){if(i.G=0,i.ka=[],i.l){const l=Hi(i.h);(l.length!=0||i.i.length!=0)&&(V(i.ka,l),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function To(i,l,u){var f=u instanceof ge?zt(u):new ge(u);if(f.g!="")l&&(f.g=l+"."+f.g),$n(f,f.s);else{var b=c.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var x=new ge(null);f&&Bn(x,f),l&&(x.g=l),b&&$n(x,b),u&&(x.l=u),f=x}return u=i.D,l=i.ya,u&&l&&tt(f,u,l),tt(f,"VER",i.la),on(i,f),f}function Eo(i,l,u){if(l&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Ca&&!i.pa?new rt(new Gn({eb:u})):new rt(i.pa),l.Ha(i.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wo(){}r=wo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Yn(){}Yn.prototype.g=function(i,l){return new Vt(i,l)};function Vt(i,l){gt.call(this),this.g=new uo(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(i?i["X-WebChannel-Client-Profile"]=l.va:i={"X-WebChannel-Client-Profile":l.va}),this.g.S=i,(i=l&&l.Sb)&&!K(i)&&(this.g.m=i),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!K(l)&&(this.g.D=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new xe(this)}S(Vt,gt),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){os(this.g)},Vt.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Wr(i),i=u);l.i.push(new Gc(l.Ya++,i)),l.G==3&&Hn(l)},Vt.prototype.N=function(){this.g.l=null,delete this.j,os(this.g),delete this.g,Vt.aa.N.call(this)};function Ao(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const u in l){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}S(Ao,Xr);function Io(){Yr.call(this),this.status=1}S(Io,Yr);function xe(i){this.g=i}S(xe,wo),xe.prototype.ua=function(){bt(this.g,"a")},xe.prototype.ta=function(i){bt(this.g,new Ao(i))},xe.prototype.sa=function(i){bt(this.g,new Io)},xe.prototype.ra=function(){bt(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Ha=function(){return new Yn},Wa=function(){return jn()},Qa=me,gs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,or=On,Oi.COMPLETE="complete",Ka=Oi,Di.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",gt.prototype.listen=gt.prototype.K,ln=Di,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Ga=rt}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});const No="@firebase/firestore",ko="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new fu("@firebase/firestore");function Ce(){return Te.logLevel}function L(r,...t){if(Te.logLevel<=Kt.DEBUG){const e=t.map(Ms);Te.debug(`Firestore (${Ue}): ${r}`,...e)}}function Wt(r,...t){if(Te.logLevel<=Kt.ERROR){const e=t.map(Ms);Te.error(`Firestore (${Ue}): ${r}`,...e)}}function ke(r,...t){if(Te.logLevel<=Kt.WARN){const e=t.map(Ms);Te.warn(`Firestore (${Ue}): ${r}`,...e)}}function Ms(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+r;throw Wt(t),new Error(t)}function Y(r,t){r||O()}function B(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends gu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _h{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class vh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Th{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string"),new Xa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new Tt(t)}}class Eh{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class wh{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Eh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Do{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ah{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,yu(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0);const n=o=>{o.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Do(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Do(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Ih(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function G(r,t){return r<t?-1:r>t?1:0}function ys(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return G(n,s);{const o=Ya(),a=bh(o.encode(Lo(r,e)),o.encode(Lo(t,e)));return a!==0?a:G(n,s)}}e+=n>65535?2:1}return G(r.length,t.length)}function Lo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function bh(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return G(r[e],t[e]);return G(r.length,t.length)}function De(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-62135596800,Mo=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Mo);return new lt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Fo)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mo}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Fo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new lt(0,0))}static max(){return new U(new lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="__name__";class Ot{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ot.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ot?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Ot.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return G(t.length,e.length)}static compareSegments(t,e){const n=Ot.isNumericId(t),s=Ot.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Ot.extractNumericId(t).compare(Ot.extractNumericId(e)):ys(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ee.fromString(t.substring(4,t.length-2))}}class et extends Ot{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const xh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Ot{construct(t,e,n){return new ft(t,e,n)}static isValidIdentifier(t){return xh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jo}static keyField(){return new ft([jo])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(n+=c,s++):(o(),s++)}if(o(),a)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ft(e)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(et.fromString(t))}static fromName(t){return new j(et.fromString(t).popFirst(5))}static empty(){return new j(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new et(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function Rh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new lt(e+1,0):new lt(e,n));return new se(s,j.empty(),t)}function Ch(r){return new se(r.readTime,r.key,yn)}class se{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new se(U.min(),j.empty(),yn)}static max(){return new se(U.max(),j.empty(),yn)}}function Ph(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(r.documentKey,t.documentKey),e!==0?e:G(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Sh)throw r;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>n(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(s=>s?P.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&n(a)},m=>s(m))}})}static doWhile(t,e){return new P((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function Nh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}br.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=-1;function xr(r){return r==null}function dr(r){return r===0&&1/r==-1/0}function kh(r){return typeof r=="number"&&Number.isInteger(r)&&!dr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="";function Dh(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Oo(t)),t=Lh(r.get(e),t);return Oo(t)}function Lh(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case Za:e+="";break;default:e+=o}}return e}function Oo(r){return r+Za+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ue(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function tl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.comparator=t,this.root=e||dt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new er(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new er(this.root,t,this.comparator,!1)}getReverseIterator(){return new er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new er(this.root,t,this.comparator,!0)}}class er{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dt{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??dt.RED,this.left=s??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new dt(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,o){return this}insert(t,e,n){return new dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(t){return new qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.fields=t,t.sort(ft.comparator)}static empty(){return new Nt([])}unionWith(t){let e=new ct(ft.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Nt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new el("Invalid base64 string: "+o):o}}(t);return new mt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new mt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const Fh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(r){if(Y(!!r),typeof r=="string"){let t=0;const e=Fh.exec(r);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function oe(r){return typeof r=="string"?mt.fromBase64String(r):mt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="server_timestamp",rl="__type__",sl="__previous_value__",il="__local_write_time__";function Os(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[rl])===null||e===void 0?void 0:e.stringValue)===nl}function Rr(r){const t=r.mapValue.fields[sl];return Os(t)?Rr(t):t}function _n(r){const t=ie(r.mapValue.fields[il].timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,n,s,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const fr="(default)";class vn{constructor(t,e){this.projectId=t,this.database=e||fr}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database===fr}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="__type__",al="__max__",nr={mapValue:{fields:{__type__:{stringValue:al}}}},ll="__vector__",mr="value";function ae(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Os(r)?4:Oh(r)?9007199254740991:jh(r)?10:11:O()}function Bt(r,t){if(r===t)return!0;const e=ae(r);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return _n(r).isEqual(_n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ie(s.timestampValue),c=ie(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return oe(s.bytesValue).isEqual(oe(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=it(s.doubleValue),c=it(o.doubleValue);return a===c?dr(a)===dr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return De(r.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Uo(a)!==Uo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Bt(a[h],c[h])))return!1;return!0}(r,t);default:return O()}}function Tn(r,t){return(r.values||[]).find(e=>Bt(e,t))!==void 0}function Le(r,t){if(r===t)return 0;const e=ae(r),n=ae(t);if(e!==n)return G(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return Bo(r.timestampValue,t.timestampValue);case 4:return Bo(_n(r),_n(t));case 5:return ys(r.stringValue,t.stringValue);case 6:return function(o,a){const c=oe(o),h=oe(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=G(c[d],h[d]);if(m!==0)return m}return G(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=G(it(o.latitude),it(a.latitude));return c!==0?c:G(it(o.longitude),it(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return $o(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const E=o.fields||{},A=a.fields||{},R=(c=E[mr])===null||c===void 0?void 0:c.arrayValue,S=(h=A[mr])===null||h===void 0?void 0:h.arrayValue,N=G(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:$o(R,S)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===nr.mapValue&&a===nr.mapValue)return 0;if(o===nr.mapValue)return 1;if(a===nr.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const A=ys(h[E],m[E]);if(A!==0)return A;const R=Le(c[h[E]],d[m[E]]);if(R!==0)return R}return G(h.length,m.length)}(r.mapValue,t.mapValue);default:throw O()}}function Bo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return G(r,t);const e=ie(r),n=ie(t),s=G(e.seconds,n.seconds);return s!==0?s:G(e.nanos,n.nanos)}function $o(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Le(e[s],n[s]);if(o)return o}return G(e.length,n.length)}function Fe(r){return _s(r)}function _s(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ie(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return oe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return j.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=_s(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${_s(e.fields[a])}`;return s+"}"}(r.mapValue):O()}function ar(r){switch(ae(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Rr(r);return t?16+ar(t):16;case 5:return 2*r.stringValue.length;case 6:return oe(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+ar(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return ue(n.fields,(o,a)=>{s+=o.length+ar(a)}),s}(r.mapValue);default:throw O()}}function zo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function vs(r){return!!r&&"integerValue"in r}function Us(r){return!!r&&"arrayValue"in r}function Go(r){return!!r&&"nullValue"in r}function Ko(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function lr(r){return!!r&&"mapValue"in r}function jh(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[ol])===null||e===void 0?void 0:e.stringValue)===ll}function dn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ue(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=dn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Oh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===al}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!lr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=ft.emptyPath(),n={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=c.popLast()}a?n[c.lastSegment()]=dn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());lr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];lr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new St(dn(this.value))}}function cl(r){const t=[];return ue(r.fields,(e,n)=>{const s=new ft([e]);if(lr(n)){const o=cl(n.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Nt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e,n,s,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,U.min(),U.min(),U.min(),St.empty(),0)}static newFoundDocument(t,e,n,s){return new Et(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new Et(t,2,e,U.min(),U.min(),St.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,U.min(),U.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.position=t,this.inclusive=e}}function Qo(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],a=r.position[s];if(o.field.isKeyField()?n=j.comparator(j.fromName(a.referenceValue),e.key):n=Le(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Wo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Bt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e="asc"){this.field=t,this.dir=e}}function Uh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{}class at extends ul{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Bh(t,e,n):e==="array-contains"?new Gh(t,n):e==="in"?new Kh(t,n):e==="not-in"?new Qh(t,n):e==="array-contains-any"?new Wh(t,n):new at(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new $h(t,n):new zh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Le(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends ul{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new jt(t,e)}matches(t){return hl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function hl(r){return r.op==="and"}function dl(r){return qh(r)&&hl(r)}function qh(r){for(const t of r.filters)if(t instanceof jt)return!1;return!0}function Ts(r){if(r instanceof at)return r.field.canonicalString()+r.op.toString()+Fe(r.value);if(dl(r))return r.filters.map(t=>Ts(t)).join(",");{const t=r.filters.map(e=>Ts(e)).join(",");return`${r.op}(${t})`}}function fl(r,t){return r instanceof at?function(n,s){return s instanceof at&&n.op===s.op&&n.field.isEqual(s.field)&&Bt(n.value,s.value)}(r,t):r instanceof jt?function(n,s){return s instanceof jt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,a,c)=>o&&fl(a,s.filters[c]),!0):!1}(r,t):void O()}function ml(r){return r instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${Fe(e.value)}`}(r):r instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(ml).join(" ,")+"}"}(r):"Filter"}class Bh extends at{constructor(t,e,n){super(t,e,n),this.key=j.fromName(n.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class $h extends at{constructor(t,e){super(t,"in",e),this.keys=pl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class zh extends at{constructor(t,e){super(t,"not-in",e),this.keys=pl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>j.fromName(n.referenceValue))}class Gh extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Us(e)&&Tn(e.arrayValue,this.value)}}class Kh extends at{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class Qh extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Tn(this.value.arrayValue,e)}}class Wh extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Us(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Tn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e=null,n=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function Ho(r,t=null,e=[],n=[],s=null,o=null,a=null){return new Hh(r,t,e,n,s,o,a)}function qs(r){const t=B(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Ts(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),xr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Fe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Fe(n)).join(",")),t.le=e}return t.le}function Bs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Uh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!fl(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Wo(r.startAt,t.startAt)&&Wo(r.endAt,t.endAt)}function Es(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e=null,n=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Xh(r,t,e,n,s,o,a,c){return new $e(r,t,e,n,s,o,a,c)}function Cr(r){return new $e(r)}function Xo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gl(r){return r.collectionGroup!==null}function fn(r){const t=B(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(ft.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new En(o,n))}),e.has(ft.keyField().canonicalString())||t.he.push(new En(ft.keyField(),n))}return t.he}function Ut(r){const t=B(r);return t.Pe||(t.Pe=Yh(t,fn(r))),t.Pe}function Yh(r,t){if(r.limitType==="F")return Ho(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new En(s.field,o)});const e=r.endAt?new pr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new pr(r.startAt.position,r.startAt.inclusive):null;return Ho(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function ws(r,t){const e=r.filters.concat([t]);return new $e(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function As(r,t,e){return new $e(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Pr(r,t){return Bs(Ut(r),Ut(t))&&r.limitType===t.limitType}function yl(r){return`${qs(Ut(r))}|lt:${r.limitType}`}function Pe(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ml(s)).join(", ")}]`),xr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fe(s)).join(",")),`Target(${n})`}(Ut(r))}; limitType=${r.limitType})`}function Sr(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):j.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of fn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,c,h){const d=Qo(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,fn(n),s)||n.endAt&&!function(a,c,h){const d=Qo(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,fn(n),s))}(r,t)}function Jh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function _l(r){return(t,e)=>{let n=!1;for(const s of fn(r)){const o=Zh(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Zh(r,t,e){const n=r.field.isKeyField()?j.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Le(h,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return tl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new nt(j.comparator);function Ht(){return td}const vl=new nt(j.comparator);function cn(...r){let t=vl;for(const e of r)t=t.insert(e.key,e);return t}function Tl(r){let t=vl;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function _e(){return mn()}function El(){return mn()}function mn(){return new we(r=>r.toString(),(r,t)=>r.isEqual(t))}const ed=new nt(j.comparator),nd=new ct(j.comparator);function Q(...r){let t=nd;for(const e of r)t=t.add(e);return t}const rd=new ct(G);function sd(){return rd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(t)?"-0":t}}function wl(r){return{integerValue:""+r}}function id(r,t){return kh(t)?wl(t):$s(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this._=void 0}}function od(r,t,e){return r instanceof gr?function(s,o){const a={fields:{[rl]:{stringValue:nl},[il]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Os(o)&&(o=Rr(o)),o&&(a.fields[sl]=o),{mapValue:a}}(e,t):r instanceof wn?Il(r,t):r instanceof An?bl(r,t):function(s,o){const a=Al(s,o),c=Yo(a)+Yo(s.Ie);return vs(a)&&vs(s.Ie)?wl(c):$s(s.serializer,c)}(r,t)}function ad(r,t,e){return r instanceof wn?Il(r,t):r instanceof An?bl(r,t):e}function Al(r,t){return r instanceof yr?function(n){return vs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class gr extends Vr{}class wn extends Vr{constructor(t){super(),this.elements=t}}function Il(r,t){const e=xl(t);for(const n of r.elements)e.some(s=>Bt(s,n))||e.push(n);return{arrayValue:{values:e}}}class An extends Vr{constructor(t){super(),this.elements=t}}function bl(r,t){let e=xl(t);for(const n of r.elements)e=e.filter(s=>!Bt(s,n));return{arrayValue:{values:e}}}class yr extends Vr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Yo(r){return it(r.integerValue||r.doubleValue)}function xl(r){return Us(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ld(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof wn&&s instanceof wn||n instanceof An&&s instanceof An?De(n.elements,s.elements,Bt):n instanceof yr&&s instanceof yr?Bt(n.Ie,s.Ie):n instanceof gr&&s instanceof gr}(r.transform,t.transform)}class cd{constructor(t,e){this.version=t,this.transformResults=e}}class Rt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cr(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Nr{}function Rl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new kr(r.key,Rt.none()):new In(r.key,r.data,Rt.none());{const e=r.data,n=St.empty();let s=new ct(ft.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new he(r.key,n,new Nt(s.toArray()),Rt.none())}}function ud(r,t,e){r instanceof In?function(s,o,a){const c=s.value.clone(),h=Zo(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof he?function(s,o,a){if(!cr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Zo(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Cl(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pn(r,t,e,n){return r instanceof In?function(o,a,c,h){if(!cr(o.precondition,a))return c;const d=o.value.clone(),m=ta(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof he?function(o,a,c,h){if(!cr(o.precondition,a))return c;const d=ta(o.fieldTransforms,h,a),m=a.data;return m.setAll(Cl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(r,t,e,n):function(o,a,c){return cr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function hd(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Al(n.transform,s||null);o!=null&&(e===null&&(e=St.empty()),e.set(n.field,o))}return e||null}function Jo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&De(n,s,(o,a)=>ld(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class In extends Nr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class he extends Nr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Cl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Zo(r,t,e){const n=new Map;Y(r.length===e.length);for(let s=0;s<e.length;s++){const o=r[s],a=o.transform,c=t.data.field(o.field);n.set(o.field,ad(a,c,e[s]))}return n}function ta(r,t,e){const n=new Map;for(const s of r){const o=s.transform,a=e.data.field(s.field);n.set(s.field,od(o,a,t))}return n}class kr extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dd extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&ud(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=El();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Rl(a,c);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,n)=>Jo(e,n))&&De(this.baseMutations,t.baseMutations,(e,n)=>Jo(e,n))}}class zs{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Y(t.mutations.length===n.length);let s=function(){return ed}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new zs(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,H;function gd(r){switch(r){case C.OK:return O();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return O()}}function Pl(r){if(r===void 0)return Wt("GRPC error has no .code"),C.UNKNOWN;switch(r){case ot.OK:return C.OK;case ot.CANCELLED:return C.CANCELLED;case ot.UNKNOWN:return C.UNKNOWN;case ot.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ot.INTERNAL:return C.INTERNAL;case ot.UNAVAILABLE:return C.UNAVAILABLE;case ot.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ot.NOT_FOUND:return C.NOT_FOUND;case ot.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ot.ABORTED:return C.ABORTED;case ot.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ot.DATA_LOSS:return C.DATA_LOSS;default:return O()}}(H=ot||(ot={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new ee([4294967295,4294967295],0);function ea(r){const t=Ya().encode(r),e=new za;return e.update(t),new Uint8Array(e.digest())}function na(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ee([e,n],0),new ee([s,o],0)]}class Gs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new un(`Invalid padding: ${e}`);if(n<0)throw new un(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new un(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new un(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=ee.fromNumber(this.Ee)}Ae(t,e,n){let s=t.add(e.multiply(ee.fromNumber(n)));return s.compare(yd)===1&&(s=new ee([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=ea(t),[n,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,s,o);if(!this.Re(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Gs(o,s,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ee===0)return;const e=ea(t),[n,s]=na(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,s,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,bn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Dr(U.min(),s,new nt(G),Ht(),Q())}}class bn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new bn(n,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e,n,s){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=s}}class Sl{constructor(t,e){this.targetId=t,this.ge=e}}class Vl{constructor(t,e,n=mt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ra{constructor(){this.pe=0,this.ye=sa(),this.we=mt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Q(),e=Q(),n=Q();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new bn(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=sa()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Y(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class _d{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ht(),this.$e=rr(),this.Ue=rr(),this.Ke=new nt(G)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,n=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(Es(o))if(n===0){const a=new j(o.path);this.ze(e,a,Et.newNoDocument(a,U.min()))}else Y(n===1);else{const a=this.et(e);if(a!==n){const c=this.tt(t),h=c?this.nt(c,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=oe(n).toUint8Array()}catch(h){if(h instanceof el)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Gs(a,s,o)}catch(h){return ke(h instanceof un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const c=this.Xe(a);if(c){if(o.current&&Es(c.target)){const h=new j(c.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,Et.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let n=Q();this.Ue.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const s=new Dr(t,e,this.Ke,this.Qe,n);return this.Qe=Ht(),this.$e=rr(),this.Ue=rr(),this.Ke=new nt(G),s}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new ra,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new ct(G),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new ct(G),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new ra),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function rr(){return new nt(j.comparator)}function sa(){return new nt(j.comparator)}const vd={asc:"ASCENDING",desc:"DESCENDING"},Td={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ed={and:"AND",or:"OR"};class wd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Is(r,t){return r.useProto3Json||xr(t)?t:{value:t}}function _r(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Ad(r,t){return _r(r,t.toTimestamp())}function qt(r){return Y(!!r),U.fromTimestamp(function(e){const n=ie(e);return new lt(n.seconds,n.nanos)}(r))}function Ks(r,t){return bs(r,t).canonicalString()}function bs(r,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function kl(r){const t=et.fromString(r);return Y(jl(t)),t}function xs(r,t){return Ks(r.databaseId,t.path)}function us(r,t){const e=kl(t);if(e.get(1)!==r.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new j(Ll(e))}function Dl(r,t){return Ks(r.databaseId,t)}function Id(r){const t=kl(r);return t.length===4?et.emptyPath():Ll(t)}function Rs(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Ll(r){return Y(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ia(r,t,e){return{name:xs(r,t),fields:e.value.mapValue.fields}}function bd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string"),mt.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array),mt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:Pl(d.code);return new D(m,d.message||"")}(a);e=new Vl(n,s,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=us(r,n.document.name),o=qt(n.document.updateTime),a=n.document.createTime?qt(n.document.createTime):U.min(),c=new St({mapValue:{fields:n.document.fields}}),h=Et.newFoundDocument(s,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new ur(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=us(r,n.document),o=n.readTime?qt(n.readTime):U.min(),a=Et.newNoDocument(s,o),c=n.removedTargetIds||[];e=new ur([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=us(r,n.document),o=n.removedTargetIds||[];e=new ur([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new pd(s,o),c=n.targetId;e=new Sl(c,a)}}return e}function xd(r,t){let e;if(t instanceof In)e={update:ia(r,t.key,t.value)};else if(t instanceof kr)e={delete:xs(r,t.key)};else if(t instanceof he)e={update:ia(r,t.key,t.data),updateMask:Ld(t.fieldMask)};else{if(!(t instanceof dd))return O();e={verify:xs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof An)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof yr)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ad(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(r,t.precondition)),e}function Rd(r,t){return r&&r.length>0?(Y(t!==void 0),r.map(e=>function(s,o){let a=s.updateTime?qt(s.updateTime):qt(o);return a.isEqual(U.min())&&(a=qt(o)),new cd(a,s.transformResults||[])}(e,t))):[]}function Cd(r,t){return{documents:[Dl(r,t.path)]}}function Pd(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Dl(r,s);const o=function(d){if(d.length!==0)return Ml(jt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:Se(A.field),direction:Nd(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Is(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:s}}function Sd(r){let t=Id(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){Y(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const A=Fl(E);return A instanceof jt&&dl(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(A=>function(S){return new En(Ve(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(E){let A;return A=typeof E=="object"?E.value:E,xr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(E){const A=!!E.before,R=E.values||[];return new pr(R,A)}(e.startAt));let d=null;return e.endAt&&(d=function(E){const A=!E.before,R=E.values||[];return new pr(R,A)}(e.endAt)),Xh(t,s,a,o,c,"F",h,d)}function Vd(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Fl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ve(e.unaryFilter.field);return at.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ve(e.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ve(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ve(e.unaryFilter.field);return at.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return at.create(Ve(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>Fl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function Nd(r){return vd[r]}function kd(r){return Td[r]}function Dd(r){return Ed[r]}function Se(r){return{fieldPath:r.canonicalString()}}function Ve(r){return ft.fromServerFormat(r.fieldPath)}function Ml(r){return r instanceof at?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:kd(e.op),value:e.value}}}(r):r instanceof jt?function(e){const n=e.getFilters().map(s=>Ml(s));return n.length===1?n[0]:{compositeFilter:{op:Dd(e.op),filters:n}}}(r):O()}function Ld(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function jl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,n,s,o=U.min(),a=U.min(),c=mt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new te(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new te(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t){this.Tt=t}}function Md(r){const t=Sd({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?As(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.Tn=new Od}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(se.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Od{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new ct(et.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new ct(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ol=41943040;class Pt{static withCacheSize(t){return new Pt(t,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Ol,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Me(0)}static Kn(){return new Me(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="LruGarbageCollector",Ud=1048576;function la([r,t],[e,n]){const s=G(r,e);return s===0?G(t,n):s}class qd{constructor(t){this.Hn=t,this.buffer=new ct(la),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();la(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Bd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){L(aa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?L(aa,"Ignoring IndexedDB error during garbage collection: ",e):await qe(e)}await this.er(3e5)})}}class $d{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(br.ae);const n=new qd(e);return this.tr.forEachTarget(t,s=>n.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>n.Zn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(oa)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oa):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(n=E,c=Date.now(),this.removeTargets(t,n,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(E=>(d=Date.now(),Ce()<=Kt.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function zd(r,t){return new $d(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.changes=new we(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&pn(n.mutation,s,Nt.empty(),lt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const s=_e();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let a=cn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=_e();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,s){let o=Ht();const a=mn(),c=function(){return mn()}();return e.forEach((h,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof he)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),pn(m.mutation,d,m.mutation.getFieldMask(),lt.now())):a.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var E;return c.set(d,new Kd(m,(E=a.get(d))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const n=mn();let s=new nt((a,c)=>a-c),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Nt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const E=(s.get(c.batchId)||Q()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,E=El();m.forEach(A=>{if(!o.has(A)){const R=Rl(e.get(A),n.get(A));R!==null&&E.set(A,R),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return P.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return j.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):P.resolve(_e());let c=yn,h=o;return a.next(d=>P.forEach(d,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Q())).next(m=>({batchId:c,changes:Tl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(n=>{let s=cn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(E,A){return new $e(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))});let c=cn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&pn(m.mutation,d,Nt.empty(),lt.now()),Sr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:Md(s.bundledQuery),readTime:qt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.overlays=new nt(j.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=_e();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Rr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const s=_e(),o=e.length+1,a=new j(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new nt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=_e(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=_e(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return P.resolve(c)}Et(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(n.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new md(e,n));let o=this.Rr.get(e);o===void 0&&(o=Q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.Vr=new ct(ut.mr),this.gr=new ct(ut.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new ut(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new ut(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new j(new et([])),n=new ut(e,t),s=new ut(e,t+1),o=[];return this.gr.forEachInRange([n,s],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new j(new et([])),n=new ut(e,t),s=new ut(e,t+1);let o=Q();return this.gr.forEachInRange([n,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ut(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ut{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return j.comparator(t.key,e.key)||G(t.Cr,e.Cr)}static pr(t,e){return G(t.Cr,e.Cr)||j.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new ct(ut.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fd(o,e,n,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new ut(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Nr(n),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?js:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,s],a=>{const c=this.Or(a.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ct(G);return e.forEach(s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{n=n.add(c.Cr)})}),P.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;j.isDocumentKey(o)||(o=o.child(""));const a=new ut(new j(o),0);let c=new ct(G);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Cr)),!0)},a),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const s=this.Or(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return P.forEach(e.mutations,s=>{const o=new ut(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new ut(e,0),s=this.Mr.firstAfterOrEqual(n);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.kr=t,this.docs=function(){return new nt(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let n=Ht();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():Et.newInvalidDocument(s))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ht();const a=e.path,c=new j(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ph(Ch(m),n)<=0||(s.has(m.key)||Sr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,s){O()}qr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Zd(this)}getSize(t){return P.resolve(this.size)}}class Zd extends Gd{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.persistence=t,this.Qr=new we(e=>qs(e),Bs),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Qs,this.targetCount=0,this.Kr=Me.Un()}forEachTarget(t,e){return this.Qr.forEach((n,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Me(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new br(0),this.zr=!1,this.zr=!0,this.jr=new Xd,this.referenceDelegate=t(this),this.Hr=new tf(this),this.indexManager=new jd,this.remoteDocumentCache=function(s){return new Jd(s)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Fd(e),this.Yr=new Wd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new Yd(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){L("MemoryPersistence","Starting transaction:",t);const s=new ef(this.Gr.next());return this.referenceDelegate.Zr(),n(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class ef extends Vh{constructor(t){super(),this.currentSequenceNumber=t}}class Ws{constructor(t){this.persistence=t,this.ti=new Qs,this.ni=null}static ri(t){return new Ws(t)}get ii(){if(this.ni)return this.ni;throw O()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,n=>{const s=j.fromPath(n);return this.si(t,s).next(o=>{o||e.removeEntry(s,U.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class vr{constructor(t,e){this.persistence=t,this.oi=new we(n=>Dh(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=zd(this,e)}static ri(t,e){return new vr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(n,s)=>this.ar(t,n,s).next(o=>o?P.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,a=>this.ar(t,a,e).next(c=>{c||(n++,o.removeEntry(a,U.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ar(t.data.value)),e}ar(t,e,n){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=s}static Yi(t,e){let n=Q(),s=Q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Hs(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return Iu()?8:Nh(bu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,s,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new nf;return this._s(t,e,a).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,a,c.size)})}).next(()=>o.result)}us(t,e,n,s){return n.documentReadCount<this.es?(Ce()<=Kt.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Ce()<=Kt.DEBUG&&L("QueryEngine","Query:",Pe(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ts*s?(Ce()<=Kt.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):P.resolve())}rs(t,e){if(Xo(e))return P.resolve(null);let n=Ut(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=As(e,null,"F"),n=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=Q(...o);return this.ns.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.cs(e,c);return this.ls(e,d,a,h.readTime)?this.rs(t,As(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,n,s){return Xo(e)||s.isEqual(U.min())?P.resolve(null):this.ns.getDocuments(t,n).next(o=>{const a=this.cs(e,o);return this.ls(e,a,n,s)?P.resolve(null):(Ce()<=Kt.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.hs(t,a,e,Rh(s,yn)).next(c=>c))})}cs(t,e){let n=new ct(_l(t));return e.forEach((s,o)=>{Sr(t,o)&&(n=n.add(o))}),n}ls(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,n){return Ce()<=Kt.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.ns.getDocumentsMatchingQuery(t,e,se.min(),n)}hs(t,e,n,s){return this.ns.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="LocalStore",sf=3e8;class of{constructor(t,e,n,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new nt(G),this.Is=new we(o=>qs(o),Bs),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Qd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function af(r,t,e,n){return new of(r,t,e,n)}async function ql(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=Q();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function lf(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const E=d.batch,A=E.keys();let R=P.resolve();return A.forEach(S=>{R=R.next(()=>m.getEntry(h,S)).next(N=>{const V=d.docVersions.get(S);Y(V!==null),N.version.compareTo(V)<0&&(E.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Bl(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function cf(r,t){const e=B(r),n=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const c=[];t.targetChanges.forEach((m,E)=>{const A=s.get(E);if(!A)return;c.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,E)));let R=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?R=R.withResumeToken(mt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,n)),s=s.insert(E,R),function(N,V,q){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=sf?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(A,R,m)&&c.push(e.Hr.updateTargetData(o,R))});let h=Ht(),d=Q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(uf(o,a,t.documentUpdates).next(m=>{h=m.Vs,d=m.fs})),!n.isEqual(U.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(E=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=s,o))}function uf(r,t,e){let n=Q(),s=Q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Ht();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(U.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):L(Xs,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:s}})}function hf(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=js),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function df(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Hr.getTargetData(n,t).next(o=>o?(s=o,P.resolve(s)):e.Hr.allocateTargetId(n).next(a=>(s=new te(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ts.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function Cs(r,t,e){const n=B(r),s=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Be(a))throw a;L(Xs,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(s.target)}function ca(r,t,e){const n=B(r);let s=U.min(),o=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=B(h),A=E.Is.get(m);return A!==void 0?P.resolve(E.Ts.get(A)):E.Hr.getTargetData(d,m)}(n,a,Ut(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?o:Q())).next(c=>(ff(n,Jh(t),c),{documents:c,gs:o})))}function ff(r,t,e){let n=r.Es.get(t)||U.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class ua{constructor(){this.activeTargetIds=sd()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mf{constructor(){this.ho=new ua,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ua,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="ConnectivityMonitor";class da{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){L(ha,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){L(ha,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function Ps(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="RestConnection",gf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yf{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${s}`,this.wo=this.databaseId.database===fr?`project_id=${n}`:`project_id=${n}&database_id=${s}`}So(t,e,n,s,o){const a=Ps(),c=this.bo(t,e.toUriEncodedString());L(hs,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,c,h,n).then(d=>(L(hs,`Received RPC '${t}' ${a}: `,d),d),d=>{throw ke(hs,`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",n),d})}Co(t,e,n,s,o,a){return this.So(t,e,n,s,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),n&&n.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const n=gf[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class vf extends yf{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,s){const o=Ps();return new Promise((a,c)=>{const h=new Ga;h.setWithCredentials(!0),h.listenOnce(Ka.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case or.NO_ERROR:const m=h.getResponseJson();L(vt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case or.TIMEOUT:L(vt,`RPC '${t}' ${o} timed out`),c(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const E=h.getStatus();if(L(vt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A==null?void 0:A.error;if(R&&R.status&&R.message){const S=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(q)>=0?q:C.UNKNOWN}(R.status);c(new D(S,R.message))}else c(new D(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new D(C.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{L(vt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);L(vt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,n,15)})}Wo(t,e,n){const s=Ps(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ha(),c=Wa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");L(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let A=!1,R=!1;const S=new _f({Fo:V=>{R?L(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(L(vt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),A=!0),L(vt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},Mo:()=>E.close()}),N=(V,q,K)=>{V.listen(q,W=>{try{K(W)}catch(J){setTimeout(()=>{throw J},0)}})};return N(E,ln.EventType.OPEN,()=>{R||(L(vt,`RPC '${t}' stream ${s} transport opened.`),S.Qo())}),N(E,ln.EventType.CLOSE,()=>{R||(R=!0,L(vt,`RPC '${t}' stream ${s} transport closed`),S.Uo())}),N(E,ln.EventType.ERROR,V=>{R||(R=!0,ke(vt,`RPC '${t}' stream ${s} transport errored:`,V),S.Uo(new D(C.UNAVAILABLE,"The operation could not be completed")))}),N(E,ln.EventType.MESSAGE,V=>{var q;if(!R){const K=V.data[0];Y(!!K);const W=K,J=(W==null?void 0:W.error)||((q=W[0])===null||q===void 0?void 0:q.error);if(J){L(vt,`RPC '${t}' stream ${s} received error:`,J);const It=J.status;let M=function(p){const _=ot[p];if(_!==void 0)return Pl(_)}(It),w=J.message;M===void 0&&(M=C.INTERNAL,w="Unknown error status: "+It+" with message "+J.message),R=!0,S.Uo(new D(M,w)),E.close()}else L(vt,`RPC '${t}' stream ${s} received:`,K),S.Ko(K)}}),N(c,Qa.STAT_EVENT,V=>{V.stat===gs.PROXY?L(vt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===gs.NOPROXY&&L(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function ds(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(r){return new wd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,e,n=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-n);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="PersistentStream";class zl{constructor(t,e,n,s,o,a,c,h){this.Ti=t,this.n_=n,this.r_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $l(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Wt(e.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.i_===e&&this.V_(n,s)},n=>{t(()=>{const s=new D(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(s)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{n(()=>this.m_(s))}),this.stream.onMessage(s=>{n(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return L(fa,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(L(fa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Tf extends zl{constructor(t,e,n,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=bd(this.serializer,t),n=function(o){if(!("targetChange"in o))return U.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?qt(a.readTime):U.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=Rs(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Es(h)?{documents:Cd(o,h)}:{query:Pd(o,h).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Nl(o,a.resumeToken);const d=Is(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=_r(o,a.snapshotVersion.toTimestamp());const d=Is(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=Vd(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=Rs(this.serializer),e.removeTarget=t,this.I_(e)}}class Ef extends zl{constructor(t,e,n,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Rd(t.writeResults,t.commitTime),n=qt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=Rs(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>xd(this.serializer,n))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{}class Af extends wf{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,bs(e,n),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(C.UNKNOWN,o.toString())})}Co(t,e,n,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(t,bs(e,n),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class If{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Wt(e),this.N_=!1):L("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="RemoteStore";class bf{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{n.enqueueAndForget(async()=>{Ae(this)&&(L(Ee,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.W_.add(4),await xn(d),d.j_.set("Unknown"),d.W_.delete(4),await Fr(d)}(this))})}),this.j_=new If(n,s)}}async function Fr(r){if(Ae(r))for(const t of r.G_)await t(!0)}async function xn(r){for(const t of r.G_)await t(!1)}function Gl(r,t){const e=B(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),ti(e)?Zs(e):ze(e).c_()&&Js(e,t))}function Ys(r,t){const e=B(r),n=ze(e);e.K_.delete(t),n.c_()&&Kl(e,t),e.K_.size===0&&(n.c_()?n.P_():Ae(e)&&e.j_.set("Unknown"))}function Js(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(r).y_(t)}function Kl(r,t){r.H_.Ne(t),ze(r).w_(t)}function Zs(r){r.H_=new _d({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),ze(r).start(),r.j_.B_()}function ti(r){return Ae(r)&&!ze(r).u_()&&r.K_.size>0}function Ae(r){return B(r).W_.size===0}function Ql(r){r.H_=void 0}async function xf(r){r.j_.set("Online")}async function Rf(r){r.K_.forEach((t,e)=>{Js(r,t)})}async function Cf(r,t){Ql(r),ti(r)?(r.j_.q_(t),Zs(r)):r.j_.set("Unknown")}async function Pf(r,t,e){if(r.j_.set("Online"),t instanceof Vl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.K_.delete(c),s.H_.removeTarget(c))}(r,t)}catch(n){L(Ee,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Tr(r,n)}else if(t instanceof ur?r.H_.We(t):t instanceof Sl?r.H_.Ze(t):r.H_.je(t),!e.isEqual(U.min()))try{const n=await Bl(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.H_.ot(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(d);m&&o.K_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(mt.EMPTY_BYTE_STRING,m.snapshotVersion)),Kl(o,h);const E=new te(m.target,h,d,m.sequenceNumber);Js(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){L(Ee,"Failed to raise snapshot:",n),await Tr(r,n)}}async function Tr(r,t,e){if(!Be(t))throw t;r.W_.add(1),await xn(r),r.j_.set("Offline"),e||(e=()=>Bl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{L(Ee,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await Fr(r)})}function Wl(r,t){return t().catch(e=>Tr(r,e,t))}async function Mr(r){const t=B(r),e=le(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:js;for(;Sf(t);)try{const s=await hf(t.localStore,n);if(s===null){t.U_.length===0&&e.P_();break}n=s.batchId,Vf(t,s)}catch(s){await Tr(t,s)}Hl(t)&&Xl(t)}function Sf(r){return Ae(r)&&r.U_.length<10}function Vf(r,t){r.U_.push(t);const e=le(r);e.c_()&&e.S_&&e.b_(t.mutations)}function Hl(r){return Ae(r)&&!le(r).u_()&&r.U_.length>0}function Xl(r){le(r).start()}async function Nf(r){le(r).C_()}async function kf(r){const t=le(r);for(const e of r.U_)t.b_(e.mutations)}async function Df(r,t,e){const n=r.U_.shift(),s=zs.from(n,t,e);await Wl(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Mr(r)}async function Lf(r,t){t&&le(r).S_&&await async function(n,s){if(function(a){return gd(a)&&a!==C.ABORTED}(s.code)){const o=n.U_.shift();le(n).h_(),await Wl(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Mr(n)}}(r,t),Hl(r)&&Xl(r)}async function ma(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),L(Ee,"RemoteStore received new credentials");const n=Ae(e);e.W_.add(3),await xn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Fr(e)}async function Ff(r,t){const e=B(r);t?(e.W_.delete(2),await Fr(e)):t||(e.W_.add(2),await xn(e),e.j_.set("Unknown"))}function ze(r){return r.J_||(r.J_=function(e,n,s){const o=B(e);return o.M_(),new Tf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{xo:xf.bind(null,r),No:Rf.bind(null,r),Lo:Cf.bind(null,r),p_:Pf.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),ti(r)?Zs(r):r.j_.set("Unknown")):(await r.J_.stop(),Ql(r))})),r.J_}function le(r){return r.Y_||(r.Y_=function(e,n,s){const o=B(e);return o.M_(),new Ef(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Nf.bind(null,r),Lo:Lf.bind(null,r),D_:kf.bind(null,r),v_:Df.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Mr(r)):(await r.Y_.stop(),r.U_.length>0&&(L(Ee,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const a=Date.now()+n,c=new ei(t,e,a,s,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ni(r,t){if(Wt("AsyncQueue",`${t}: ${r}`),Be(r))return new D(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{static emptySet(t){return new Ne(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||j.comparator(e.key,n.key):(e,n)=>j.comparator(e.key,n.key),this.keyedMap=cn(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ne;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.Z_=new nt(j.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):O():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class je{constructor(t,e,n,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new je(t,e,Ne.emptySet(e),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class jf{constructor(){this.queries=ga(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const s=B(e),o=s.queries;s.queries=ga(),o.forEach((a,c)=>{for(const h of c.ta)h.onError(n)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function ga(){return new we(r=>yl(r),Pr)}async function ri(r,t){const e=B(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(n=2):(o=new Mf,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ni(a,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&ii(e)}async function si(r,t){const e=B(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Of(r,t){const e=B(r);let n=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.ta)c.oa(s)&&(n=!0);a.ea=s}}n&&ii(e)}function Uf(r,t,e){const n=B(r),s=n.queries.get(t);if(s)for(const o of s.ta)o.onError(e);n.queries.delete(t)}function ii(r){r.ia.forEach(t=>{t.next()})}var Ss,ya;(ya=Ss||(Ss={}))._a="default",ya.Cache="cache";class oi{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new je(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Ss.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t){this.key=t}}class Jl{constructor(t){this.key=t}}class qf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Q(),this.mutatedKeys=Q(),this.ya=_l(t),this.wa=new Ne(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new pa,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const A=s.get(m),R=Sr(this.query,E)?E:null,S=!!A&&this.mutatedKeys.has(A.key),N=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;A&&R?A.data.isEqual(R.data)?S!==N&&(n.track({type:3,doc:R}),V=!0):this.va(A,R)||(n.track({type:2,doc:R}),V=!0,(h&&this.ya(R,h)>0||d&&this.ya(R,d)<0)&&(c=!0)):!A&&R?(n.track({type:0,doc:R}),V=!0):A&&!R&&(n.track({type:1,doc:A}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,E)=>function(R,S){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(R)-N(S)}(m.type,E.type)||this.ya(m.doc,E.doc)),this.Ca(n),s=s!=null&&s;const c=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new je(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Q(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new Jl(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new Yl(n))}),e}Oa(t){this.fa=t.gs,this.pa=Q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return je.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ai="SyncEngine";class Bf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class $f{constructor(t){this.key=t,this.Ba=!1}}class zf{constructor(t,e,n,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new we(c=>yl(c),Pr),this.qa=new Map,this.Qa=new Set,this.$a=new nt(j.comparator),this.Ua=new Map,this.Ka=new Qs,this.Wa={},this.Ga=new Map,this.za=Me.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Gf(r,t,e=!0){const n=sc(r);let s;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await Zl(n,t,e,!0),s}async function Kf(r,t){const e=sc(r);await Zl(e,t,!0,!1)}async function Zl(r,t,e,n){const s=await df(r.localStore,Ut(t)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Qf(r,t,o,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Gl(r.remoteStore,s),c}async function Qf(r,t,e,n,s){r.Ha=(E,A,R)=>async function(N,V,q,K){let W=V.view.ba(q);W.ls&&(W=await ca(N.localStore,V.query,!1).then(({documents:w})=>V.view.ba(w,W)));const J=K&&K.targetChanges.get(V.targetId),It=K&&K.targetMismatches.get(V.targetId)!=null,M=V.view.applyChanges(W,N.isPrimaryClient,J,It);return va(N,V.targetId,M.Ma),M.snapshot}(r,E,A,R);const o=await ca(r.localStore,t,!0),a=new qf(t,o.gs),c=a.ba(o.documents),h=bn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(c,r.isPrimaryClient,h);va(r,e,d.Ma);const m=new Bf(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function Wf(r,t,e){const n=B(r),s=n.ka.get(t),o=n.qa.get(s.targetId);if(o.length>1)return n.qa.set(s.targetId,o.filter(a=>!Pr(a,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Cs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Ys(n.remoteStore,s.targetId),Vs(n,s.targetId)}).catch(qe)):(Vs(n,s.targetId),await Cs(n.localStore,s.targetId,!0))}async function Hf(r,t){const e=B(r),n=e.ka.get(t),s=e.qa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ys(e.remoteStore,n.targetId))}async function Xf(r,t,e){const n=rm(r);try{const s=await function(a,c){const h=B(a),d=lt.now(),m=c.reduce((R,S)=>R.add(S.key),Q());let E,A;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Ht(),N=Q();return h.ds.getEntries(R,m).next(V=>{S=V,S.forEach((q,K)=>{K.isValidDocument()||(N=N.add(q))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,S)).next(V=>{E=V;const q=[];for(const K of c){const W=hd(K,E.get(K.key).overlayedDocument);W!=null&&q.push(new he(K.key,W,cl(W.value.mapValue),Rt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,q,c)}).next(V=>{A=V;const q=V.applyToLocalDocumentSet(E,N);return h.documentOverlayCache.saveOverlays(R,V.batchId,q)})}).then(()=>({batchId:A.batchId,changes:Tl(E)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new nt(G)),d=d.insert(c,h),a.Wa[a.currentUser.toKey()]=d}(n,s.batchId,e),await Rn(n,s.changes),await Mr(n.remoteStore)}catch(s){const o=ni(s,"Failed to persist write");e.reject(o)}}async function tc(r,t){const e=B(r);try{const n=await cf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ua.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Y(a.Ba):s.removedDocuments.size>0&&(Y(a.Ba),a.Ba=!1))}),await Rn(e,n,t)}catch(n){await qe(n)}}function _a(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ka.forEach((o,a)=>{const c=a.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let d=!1;h.queries.forEach((m,E)=>{for(const A of E.ta)A.sa(c)&&(d=!0)}),d&&ii(h)}(n.eventManager,t),s.length&&n.La.p_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Yf(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ua.get(t),o=s&&s.key;if(o){let a=new nt(j.comparator);a=a.insert(o,Et.newNoDocument(o,U.min()));const c=Q().add(o),h=new Dr(U.min(),new Map,new nt(G),a,c);await tc(n,h),n.$a=n.$a.remove(o),n.Ua.delete(t),li(n)}else await Cs(n.localStore,t,!1).then(()=>Vs(n,t,e)).catch(qe)}async function Jf(r,t){const e=B(r),n=t.batch.batchId;try{const s=await lf(e.localStore,t);nc(e,n,null),ec(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Rn(e,s)}catch(s){await qe(s)}}async function Zf(r,t,e){const n=B(r);try{const s=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(E=>(Y(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);nc(n,t,e),ec(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Rn(n,s)}catch(s){await qe(s)}}function ec(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function nc(r,t,e){const n=B(r);let s=n.Wa[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Wa[n.currentUser.toKey()]=s}}function Vs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||rc(r,n)})}function rc(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Ys(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),li(r))}function va(r,t,e){for(const n of e)n instanceof Yl?(r.Ka.addReference(n.key,t),tm(r,n)):n instanceof Jl?(L(ai,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||rc(r,n.key)):O()}function tm(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(L(ai,"New document in limbo: "+e),r.Qa.add(n),li(r))}function li(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new j(et.fromString(t)),n=r.za.next();r.Ua.set(n,new $f(e)),r.$a=r.$a.insert(e,n),Gl(r.remoteStore,new te(Ut(Cr(e.path)),n,"TargetPurposeLimboResolution",br.ae))}}async function Rn(r,t,e){const n=B(r),s=[],o=[],a=[];n.ka.isEmpty()||(n.ka.forEach((c,h)=>{a.push(n.Ha(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=Hs.Yi(h.targetId,d);o.push(E)}}))}),await Promise.all(a),n.La.p_(s),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>P.forEach(d,A=>P.forEach(A.Hi,R=>m.persistence.referenceDelegate.addReference(E,A.targetId,R)).next(()=>P.forEach(A.Ji,R=>m.persistence.referenceDelegate.removeReference(E,A.targetId,R)))))}catch(E){if(!Be(E))throw E;L(Xs,"Failed to update sequence numbers: "+E)}for(const E of d){const A=E.targetId;if(!E.fromCache){const R=m.Ts.get(A),S=R.snapshotVersion,N=R.withLastLimboFreeSnapshotVersion(S);m.Ts=m.Ts.insert(A,N)}}}(n.localStore,o))}async function em(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){L(ai,"User change. New user:",t.toKey());const n=await ql(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new D(C.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Rn(e,n.Rs)}}function nm(r,t){const e=B(r),n=e.Ua.get(t);if(n&&n.Ba)return Q().add(n.key);{let s=Q();const o=e.qa.get(t);if(!o)return s;for(const a of o){const c=e.ka.get(a);s=s.unionWith(c.view.Sa)}return s}}function sc(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=tc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yf.bind(null,t),t.La.p_=Of.bind(null,t.eventManager),t.La.Ja=Uf.bind(null,t.eventManager),t}function rm(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Jf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Zf.bind(null,t),t}class Er{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Lr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return af(this.persistence,new rf,t.initialUser,this.serializer)}Xa(t){return new Ul(Ws.ri,this.serializer)}Za(t){return new mf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Er.provider={build:()=>new Er};class sm extends Er{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Y(this.persistence.referenceDelegate instanceof vr);const n=this.persistence.referenceDelegate.garbageCollector;return new Bd(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Ul(n=>vr.ri(n,e),this.serializer)}}class Ns{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>_a(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=em.bind(null,this.syncEngine),await Ff(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jf}()}createDatastore(t){const e=Lr(t.databaseInfo.databaseId),n=function(o){return new vf(o)}(t.databaseInfo);return function(o,a,c,h){return new Af(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,a,c){return new bf(n,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>_a(this.syncEngine,e,0),function(){return da.D()?new da:new pf}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const E=new zf(s,o,a,c,h,d);return m&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=B(s);L(Ee,"RemoteStore shutting down."),o.W_.add(5),await xn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ns.provider={build:()=>new Ns};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Wt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="FirestoreClient";class im{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Ja.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{L(ce,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(L(ce,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ni(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function fs(r,t){r.asyncQueue.verifyOperationInProgress(),L(ce,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await ql(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Ta(r,t){r.asyncQueue.verifyOperationInProgress();const e=await om(r);L(ce,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ma(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>ma(t.remoteStore,s)),r._onlineComponents=t}async function om(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){L(ce,"Using user provided OfflineComponentProvider");try{await fs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await fs(r,new Er)}}else L(ce,"Using default OfflineComponentProvider"),await fs(r,new sm(void 0));return r._offlineComponents}async function ic(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(L(ce,"Using user provided OnlineComponentProvider"),await Ta(r,r._uninitializedComponentsProvider._online)):(L(ce,"Using default OnlineComponentProvider"),await Ta(r,new Ns))),r._onlineComponents}function am(r){return ic(r).then(t=>t.syncEngine)}async function wr(r){const t=await ic(r),e=t.eventManager;return e.onListen=Gf.bind(null,t.syncEngine),e.onUnlisten=Wf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Kf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Hf.bind(null,t.syncEngine),e}function lm(r,t,e={}){const n=new Qt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new ci({next:A=>{m.su(),a.enqueueAndForget(()=>si(o,E));const R=A.docs.has(c);!R&&A.fromCache?d.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&h&&h.source==="server"?d.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(A)},error:A=>d.reject(A)}),E=new oi(Cr(c.path),m,{includeMetadataChanges:!0,Ta:!0});return ri(o,E)}(await wr(r),r.asyncQueue,t,e,n)),n.promise}function cm(r,t,e={}){const n=new Qt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new ci({next:A=>{m.su(),a.enqueueAndForget(()=>si(o,E)),A.fromCache&&h.source==="server"?d.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),E=new oi(c,m,{includeMetadataChanges:!0,Ta:!0});return ri(o,E)}(await wr(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(r,t,e){if(!e)throw new D(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function um(r,t,e,n){if(t===!0&&n===!0)throw new D(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function wa(r){if(!j.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Aa(r){if(j.isDocumentKey(r))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function jr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function Ct(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=jr(r);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="firestore.googleapis.com",Ia=!0;class ba{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lc,this.ssl=Ia}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ia;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ol;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ud)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}um("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oc((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Or{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ba({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ba(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _h;switch(n.type){case"firstParty":return new wh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ea.get(e);n&&(L("ComponentProvider","Removing Datastore"),Ea.delete(e),n.terminate())}(this),Promise.resolve()}}function hm(r,t,e,n={}){var s;const o=(r=Ct(r,Or))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==lc&&o.host!==c&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!Eu(h,a)&&(r._setSettings(h),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=Tt.MOCK_USER;else{d=wu(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const E=n.mockUserToken.sub||n.mockUserToken.user_id;if(!E)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Tt(E)}r._authCredentials=new vh(new Xa(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new de(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class ne extends de{constructor(t,e,n){super(t,e,Cr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new j(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function cc(r,t,...e){if(r=Lt(r),ac("collection","path",t),r instanceof Or){const n=et.fromString(t,...e);return Aa(n),new ne(r,null,n)}{if(!(r instanceof At||r instanceof ne))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return Aa(n),new ne(r.firestore,null,n)}}function wt(r,t,...e){if(r=Lt(r),arguments.length===1&&(t=Ja.newId()),ac("doc","path",t),r instanceof Or){const n=et.fromString(t,...e);return wa(n),new At(r,null,new j(n))}{if(!(r instanceof At||r instanceof ne))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return wa(n),new At(r.firestore,r instanceof ne?r.converter:null,new j(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="AsyncQueue";class Ra{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $l(this,"async_queue_retry"),this.Su=()=>{const n=ds();n&&L(xa,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=ds();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ds();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Qt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Be(t))throw t;L(xa,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Wt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=ei.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&O()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Ca(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(r,["next","error","complete"])}class $t extends Or{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ra,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ra(t),this._firestoreClient=void 0,await t}}}function dm(r,t){const e=typeof r=="object"?r:_u(),n=typeof r=="string"?r:fr,s=vu(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Tu("firestore");o&&hm(s,...o)}return s}function Cn(r){if(r._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fm(r),r._firestoreClient}function fm(r){var t,e,n;const s=r._freezeSettings(),o=function(c,h,d,m){return new Mh(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,oc(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new im(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oe(mt.fromBase64String(t))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Oe(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=/^__.*__$/;class pm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new In(t,this.data,e,this.fieldTransforms)}}class uc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hc(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class fi{constructor(t,e,n,s,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new fi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.$u(t),s}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ar(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(hc(this.Lu)&&mm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class gm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Lr(t)}ju(t,e,n,s=!1){return new fi({Lu:t,methodName:e,zu:n,path:ft.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sn(r){const t=r._freezeSettings(),e=Lr(r._databaseId);return new gm(r._databaseId,!!t.ignoreUndefinedProperties,e)}function mi(r,t,e,n,s,o={}){const a=r.ju(o.merge||o.mergeFields?2:0,t,e,s);pi("Data must be an object, but it was:",a,n);const c=mc(n,a);let h,d;if(o.merge)h=new Nt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const A=ks(t,E,e);if(!a.contains(A))throw new D(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);gc(m,A)||m.push(A)}h=new Nt(m),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new pm(new St(c),h,d)}class Vn extends ui{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vn}}function dc(r,t,e,n){const s=r.ju(1,t,e);pi("Data must be an object, but it was:",s,n);const o=[],a=St.empty();ue(n,(h,d)=>{const m=gi(t,h,e);d=Lt(d);const E=s.Uu(m);if(d instanceof Vn)o.push(m);else{const A=Nn(d,E);A!=null&&(o.push(m),a.set(m,A))}});const c=new Nt(o);return new uc(a,c,s.fieldTransforms)}function fc(r,t,e,n,s,o){const a=r.ju(1,t,e),c=[ks(t,n,e)],h=[s];if(o.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(ks(t,o[A])),h.push(o[A+1]);const d=[],m=St.empty();for(let A=c.length-1;A>=0;--A)if(!gc(d,c[A])){const R=c[A];let S=h[A];S=Lt(S);const N=a.Uu(R);if(S instanceof Vn)d.push(R);else{const V=Nn(S,N);V!=null&&(d.push(R),m.set(R,V))}}const E=new Nt(d);return new uc(m,E,a.fieldTransforms)}function ym(r,t,e,n=!1){return Nn(e,r.ju(n?4:3,t))}function Nn(r,t){if(pc(r=Lt(r)))return pi("Unsupported field value:",t,r),mc(r,t);if(r instanceof ui)return function(n,s){if(!hc(s.Lu))throw s.Wu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,s){const o=[];let a=0;for(const c of n){let h=Nn(c,s.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=Lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return id(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=lt.fromDate(n);return{timestampValue:_r(s.serializer,o)}}if(n instanceof lt){const o=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:_r(s.serializer,o)}}if(n instanceof hi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Oe)return{bytesValue:Nl(s.serializer,n._byteString)};if(n instanceof At){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ks(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof di)return function(a,c){return{mapValue:{fields:{[ol]:{stringValue:ll},[mr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return $s(c.serializer,d)})}}}}}}(n,s);throw s.Wu(`Unsupported field value: ${jr(n)}`)}(r,t)}function mc(r,t){const e={};return tl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(r,(n,s)=>{const o=Nn(s,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function pc(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof lt||r instanceof hi||r instanceof Oe||r instanceof At||r instanceof ui||r instanceof di)}function pi(r,t,e){if(!pc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=jr(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function ks(r,t,e){if((t=Lt(t))instanceof Pn)return t._internalPath;if(typeof t=="string")return gi(r,t);throw Ar("Field path arguments must be of type string or ",r,!1,void 0,e)}const _m=new RegExp("[~\\*/\\[\\]]");function gi(r,t,e){if(t.search(_m)>=0)throw Ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Pn(...t.split("."))._internalPath}catch{throw Ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ar(r,t,e,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new D(C.INVALID_ARGUMENT,c+r+h)}function gc(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new vm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class vm extends yc{data(){return super.data()}}function yi(r,t){return typeof t=="string"?gi(r,t):t instanceof Pn?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _i{}class vc extends _i{}function Tc(r,t,...e){let n=[];t instanceof _i&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof Ti).length,c=o.filter(h=>h instanceof vi).length;if(a>1||a>0&&c>0)throw new D(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class vi extends vc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new vi(t,e,n)}_apply(t){const e=this._parse(t);return wc(t._query,e),new de(t.firestore,t.converter,ws(t._query,e))}_parse(t){const e=Sn(t.firestore);return function(o,a,c,h,d,m,E){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Sa(E,m);const S=[];for(const N of E)S.push(Pa(h,o,N));A={arrayValue:{values:S}}}else A=Pa(h,o,E)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Sa(E,m),A=ym(c,a,E,m==="in"||m==="not-in");return at.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ti extends _i{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ti(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:jt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const c=o.getFlattenedFilters();for(const h of c)wc(a,h),a=ws(a,h)}(t._query,e),new de(t.firestore,t.converter,ws(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ei extends vc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ei(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new En(o,a)}(t._query,this._field,this._direction);return new de(t.firestore,t.converter,function(s,o){const a=s.explicitOrderBy.concat([o]);return new $e(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Ec(r,t="asc"){const e=t,n=yi("orderBy",r);return Ei._create(n,e)}function Pa(r,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new D(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gl(t)&&e.indexOf("/")!==-1)throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(et.fromString(e));if(!j.isDocumentKey(n))throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return zo(r,new j(n))}if(e instanceof At)return zo(r,e._key);throw new D(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jr(e)}.`)}function Sa(r,t){if(!Array.isArray(r)||r.length===0)throw new D(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wc(r,t){const e=function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Tm{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[mr].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>it(a.doubleValue));return new di(o)}convertGeoPoint(t){return new hi(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Rr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=ie(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);Y(jl(n));const s=new vn(n.get(1),n.get(3)),o=new j(n.popFirst(5));return s.isEqual(e)||Wt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ac extends yc{constructor(t,e,n,s,o,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class hr extends Ac{data(t={}){return super.data(t)}}class Ic{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new hn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new hr(this._firestore,this._userDataWriter,n.key,n,new hn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new hr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new hr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:Em(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Em(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(r){r=Ct(r,At);const t=Ct(r.firestore,$t);return lm(Cn(t),r._key).then(e=>Cc(t,r,e))}class Ai extends Tm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function xc(r){r=Ct(r,de);const t=Ct(r.firestore,$t),e=Cn(t),n=new Ai(t);return _c(r._query),cm(e,r._query).then(s=>new Ic(t,n,r,s))}function Ds(r,t,e){r=Ct(r,At);const n=Ct(r.firestore,$t),s=wi(r.converter,t,e);return kn(n,[mi(Sn(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Rt.none())])}function Ls(r,t,e,...n){r=Ct(r,At);const s=Ct(r.firestore,$t),o=Sn(s);let a;return a=typeof(t=Lt(t))=="string"||t instanceof Pn?fc(o,"updateDoc",r._key,t,e,n):dc(o,"updateDoc",r._key,t),kn(s,[a.toMutation(r._key,Rt.exists(!0))])}function wm(r){return kn(Ct(r.firestore,$t),[new kr(r._key,Rt.none())])}function Am(r,t){const e=Ct(r.firestore,$t),n=wt(r),s=wi(r.converter,t);return kn(e,[mi(Sn(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Rt.exists(!1))]).then(()=>n)}function Rc(r,...t){var e,n,s;r=Lt(r);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ca(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Ca(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(n=E.error)===null||n===void 0?void 0:n.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,d,m;if(r instanceof At)d=Ct(r.firestore,$t),m=Cr(r._key.path),h={next:E=>{t[a]&&t[a](Cc(d,r,E))},error:t[a+1],complete:t[a+2]};else{const E=Ct(r,de);d=Ct(E.firestore,$t),m=E._query;const A=new Ai(d);h={next:R=>{t[a]&&t[a](new Ic(d,A,E,R))},error:t[a+1],complete:t[a+2]},_c(r._query)}return function(A,R,S,N){const V=new ci(N),q=new oi(R,V,S);return A.asyncQueue.enqueueAndForget(async()=>ri(await wr(A),q)),()=>{V.su(),A.asyncQueue.enqueueAndForget(async()=>si(await wr(A),q))}}(Cn(d),m,c,h)}function kn(r,t){return function(n,s){const o=new Qt;return n.asyncQueue.enqueueAndForget(async()=>Xf(await am(n),s,o)),o.promise}(Cn(r),t)}function Cc(r,t,e){const n=e.docs.get(t._key),s=new Ai(r);return new Ac(r,s,t._key,n,new hn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Sn(t)}set(t,e,n){this._verifyNotCommitted();const s=ms(t,this._firestore),o=wi(s.converter,e,n),a=mi(this._dataReader,"WriteBatch.set",s._key,o,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,Rt.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const o=ms(t,this._firestore);let a;return a=typeof(e=Lt(e))=="string"||e instanceof Pn?fc(this._dataReader,"WriteBatch.update",o._key,e,n,s):dc(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,Rt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ms(t,this._firestore);return this._mutations=this._mutations.concat(new kr(e._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ms(r,t){if((r=Lt(r)).firestore!==t)throw new D(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return new Vn("deleteField")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(r){return Cn(r=Ct(r,$t)),new Im(r,t=>kn(r,t))}(function(t,e=!0){(function(s){Ue=s})(Au),mu(new pu("firestore",(n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new $t(new Th(n.getProvider("auth-internal")),new Ah(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),bo(No,ko,t),bo(No,ko,"esm2017")})();const xm={apiKey:"AIzaSyAsGrtbRSjz77iShv4tB0vQ33A23ie9JM8",authDomain:"tiger3homs-f3a5f-d60da.firebaseapp.com",projectId:"tiger3homs-f3a5f-d60da",storageBucket:"tiger3homs-f3a5f-d60da.firebasestorage.app",messagingSenderId:"509990310606",appId:"1:509990310606:web:e36d91ea748c4cd64d369f",measurementId:"G-DDZTZ6MR6S"};let ps=null,re=null,z=null;try{ps=xu(xm),re=Ru(ps),z=dm(ps)}catch(r){throw console.error("Firebase initialization error:",r),new Error(`Firebase initialization failed: ${r instanceof Error?r.message:String(r)}`)}if(!z)throw new Error("Firestore failed to initialize and is null.");const Mt={en:{generalInfo:{title:"General Information",siteTitle:"Tiger3Homs",siteRole:"Website Developer & Tech Enthusiast",logoUrl:"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",footerText:"© 2025. Built and designed by Tiger3homs"},about:{title:"About Me",description:"I'm a passionate software developer with expertise in web development and system architecture. I love building efficient, scalable solutions and contributing to open-source projects. When I'm not coding, you can find me exploring new technologies and sharing knowledge with the developer community."},projects:{title:"Featured Projects",project1:{title:"OS Design v1",description:"The website offers a sleek, intuitive design with straightforward navigation and professional fonts. It highlights the company's services and expertise, making it easy for visitors to get in touch. Simple visuals and effective calls-to-action ensure a smooth and engaging experience. For more information, explore the site.",tags:["Modern","User-friendly","Professional"],link:""},project2:{title:"Project 2",description:"Coming soon.",tags:["Wait","For","It"],link:""},project3:{title:"New Project",description:"This is a new project description.",tags:["New","Exciting","Innovative"],link:""}},contact:{title:"Contact Me",nameLabel:"Name",namePlaceholder:"Enter your name",emailLabel:"Email",emailPlaceholder:"Enter your email",messageLabel:"Message",messagePlaceholder:"Enter your message",submitButton:"Send Message"},services:{title:"Services",list:[{title:"Web Development",description:"Building modern, responsive websites tailored to your needs."},{title:"UI/UX Design",description:"Crafting user-friendly and visually appealing designs."},{title:"SEO Optimization",description:"Improving your website's visibility on search engines."},{title:"Consulting",description:"Providing expert advice to help you achieve your goals."}]}}},Rm=r=>{const e=/[A-Z]/.test(r),n=/[a-z]/.test(r),s=/\d/.test(r),o=/[!@#$%^&*(),.?":{}|<>]/.test(r);return r.length>=8&&e&&n&&s&&o},Cm=()=>{const[r,t]=F.useState(""),[e,n]=F.useState(""),[s,o]=F.useState(""),[a,c]=F.useState(!1),h=La();F.useEffect(()=>{const m=setTimeout(()=>{re.signOut()},18e5);return()=>clearTimeout(m)},[]),F.useEffect(()=>{const m=Ma(re,E=>{E&&h("/admin/dashboard",{replace:!0})});return()=>m()},[h]);const d=async m=>{if(m.preventDefault(),o(""),c(!0),!r.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){o("Please enter a valid email address"),c(!1);return}if(!Rm(e)){o("Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters"),c(!1);return}try{await Cu(re,r,e)}catch(E){let A="Failed to log in. Please check your credentials.";if(E.code)switch(E.code){case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":A="Invalid email or password.";break;case"auth/invalid-email":A="Invalid email format.";break;case"auth/too-many-requests":A="Too many failed attempts. Please try again later.";break;default:console.error("Firebase Login error:",E)}o(A)}finally{c(!1)}};return v.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:v.jsxs("div",{className:"p-8 bg-white rounded shadow-md w-full max-w-sm",children:[v.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Admin Login"}),v.jsxs("form",{onSubmit:d,children:[v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),v.jsx("input",{type:"email",id:"email",value:r,onChange:m=>t(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),v.jsx("input",{type:"password",id:"password",value:e,onChange:m=>n(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),s&&v.jsx("p",{className:"text-red-500 text-xs italic mb-4",children:s}),v.jsx("div",{className:"flex items-center justify-between",children:v.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50",disabled:a,children:a?"Logging in...":"Login"})})]})]})})},Pm=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:s,handleAddProject:o,handleDelete:a,renderFields:c})=>v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsxs("div",{className:"flex justify-between items-center mb-3",children:[v.jsx("h4",{className:"text-lg font-semibold capitalize",children:(r==null?void 0:r.title)||String(t[0]).replace(/([A-Z])/g," $1")}),v.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),(r==null?void 0:r.title)!==void 0&&typeof r.title=="string"&&c({title:r.title},t,e,n,s,void 0,void 0),Object.entries(r).map(([h,d])=>{if(h!=="title"&&typeof d=="object"&&d!==null&&!Array.isArray(d)){const m=[...t,h];return v.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[v.jsxs("div",{className:"flex justify-between items-start mb-3",children:[v.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",v.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:h})]}),v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${h}"?`)&&a(m)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${h}`,children:"Delete Project"})]}),v.jsx("div",{className:"space-y-4",children:c(d,m,e,n,s,void 0,a)})]},m.join("."))}return null})]},t.join(".")),Na=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:s,handleDelete:o,handleAddService:a,renderFields:c})=>!r||typeof r!="object"?v.jsx("p",{children:"Error: Services data is missing or invalid."}):(Array.isArray(r.list)||console.warn("Services data is missing 'list' array."),v.jsxs(v.Fragment,{children:[v.jsx("button",{onClick:a,className:"mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50","aria-label":"Add new service item",children:"Add New Service Item"}),c(r,t,e,n,s,void 0,o)]})),Sm=()=>{const[r,t]=F.useState("#007bff"),[e,n]=F.useState("#6c757d"),[s,o]=F.useState("'Noto Sans', sans-serif"),[a,c]=F.useState("#ffffff"),[h,d]=F.useState("#b91212"),[m,E]=F.useState("#24853c"),[A,R]=F.useState(!0),[S,N]=F.useState(!1),V=g=>/^#[0-9A-F]{6}$/i.test(g),q=g=>{t(g.target.value)},K=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&t($)},W=g=>{n(g.target.value)},J=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&n($)},It=g=>{o(g.target.value)},M=g=>{c(g.target.value)},w=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&c($)},y=g=>{d(g.target.value)},p=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&d($)},_=g=>{E(g.target.value)},T=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&E($)};F.useEffect(()=>{if(!z){console.error("loadStyles Effect: Firestore db instance is not available."),R(!1);return}const g=wt(z,"settings","styles");console.log("loadStyles Effect: Created stylesDocRefInsideEffect:",g.path),(async()=>{R(!0),console.log("loadStyles Function: Attempting getDoc...");try{const st=await bc(g);if(console.log("loadStyles Function: getDoc finished."),st.exists()){console.log("loadStyles Function: Document exists. Data:",st.data());const Dt=st.data();t(Dt.primaryColor||"#007bff"),n(Dt.secondaryColor||"#6c757d"),o(Dt.fontFamily||"'Noto Sans', sans-serif"),c(Dt.titleColor||"#ffffff"),d(Dt.h3TitleColor||"#b91212"),E(Dt.textColor||"#24853c")}else console.log("loadStyles Function: No style document found, using defaults for all styles.")}catch(st){console.error("loadStyles Function: Error during getDoc or processing:",st),alert("Failed to load styles.")}finally{console.log("loadStyles Function: Setting isLoading to false."),R(!1)}})()},[z]),F.useEffect(()=>{if(!A){const g=r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",$=e.match(/^#[0-9A-F]{6}$/i)?e:"#000000",st=a.match(/^#[0-9A-F]{6}$/i)?a:"#ffffff",Dt=h.match(/^#[0-9A-F]{6}$/i)?h:"#b91212",fe=m.match(/^#[0-9A-F]{6}$/i)?m:"#24853c";document.documentElement.style.setProperty("--primary-color",g),document.documentElement.style.setProperty("--secondary-color",$),document.documentElement.style.setProperty("--font-family",s),document.documentElement.style.setProperty("--title-color",st),document.documentElement.style.setProperty("--h3title-color",Dt),document.documentElement.style.setProperty("--text-color",fe)}},[r,e,s,a,h,m,A]);const I=async()=>{if(!z){console.error("Save Error: Firestore db instance is not available."),alert("Error: Cannot save styles. Firestore not available.");return}const g=wt(z,"settings","styles");if(!g){console.error("Save Error: Failed to create doc reference."),alert("Error: Cannot save styles. Failed to create reference.");return}N(!0);const $={primaryColor:r,secondaryColor:e,fontFamily:s,titleColor:a,h3TitleColor:h,textColor:m};console.log("Attempting to save styles to Firestore:",$);try{await Ds(g,$),console.log("Firestore save successful:",$),alert("Styles saved successfully!")}catch(st){console.error("Firestore save error:",st),alert(`Failed to save styles. Error: ${st instanceof Error?st.message:String(st)}`)}finally{console.log("Finished save attempt."),N(!1)}};return A?v.jsx("div",{children:"Loading styles..."}):v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-medium mb-4",children:"Style Editor"})," ",v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"primaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Primary Color"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"primaryColorPicker",value:r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",onChange:q,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"primaryColorText",value:r,onChange:K,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"secondaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Secondary Color"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"secondaryColorPicker",value:e.match(/^#[0-9A-F]{6}$/i)?e:"#000000",onChange:W,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"secondaryColorText",value:e,onChange:J,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"fontFamily",className:"block text-sm font-medium text-gray-700 mb-1",children:"Font Family"}),v.jsx("input",{type:"text",id:"fontFamily",value:s,onChange:It,className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"e.g., 'Arial, sans-serif', 'Roboto, sans-serif'"}),v.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Enter a valid CSS font-family value."})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"titleColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Title Color (h2)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"titleColorPicker",value:a.match(/^#[0-9A-F]{6}$/i)?a:"#ffffff",onChange:M,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"titleColorText",value:a,onChange:w,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"h3TitleColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Sub-Title Color (h3)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"h3TitleColorPicker",value:h.match(/^#[0-9A-F]{6}$/i)?h:"#b91212",onChange:y,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"h3TitleColorText",value:h,onChange:p,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"textColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Text Color (p, label)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"textColorPicker",value:m.match(/^#[0-9A-F]{6}$/i)?m:"#24853c",onChange:_,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"textColorText",value:m,onChange:T,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{className:"mt-6 p-4 border border-gray-300 rounded",children:[v.jsx("h5",{className:"text-md font-medium mb-3",children:"Preview"}),v.jsxs("div",{style:{fontFamily:s},children:[v.jsx("p",{className:"mb-2",children:"This text uses the selected font family."}),v.jsx("button",{style:{backgroundColor:r,color:"white"},className:"px-3 py-1 rounded mr-2",children:"Primary Button"}),v.jsx("button",{style:{backgroundColor:e,color:"white"},className:"px-3 py-1 rounded",children:"Secondary Button"}),v.jsx("p",{style:{color:r},className:"mt-2",children:"This text uses the primary color."}),v.jsx("p",{style:{color:e},className:"mt-1",children:"This text uses the secondary color."}),v.jsx("h2",{style:{color:a},className:"text-lg font-semibold mt-3",children:"Preview Title (h2)"}),v.jsx("h3",{style:{color:h},className:"text-md font-semibold mt-1",children:"Preview Sub-Title (h3)"}),v.jsx("p",{style:{color:m},className:"mt-1",children:"This paragraph text uses the main text color."})]})]}),v.jsx("div",{className:"pt-4",children:v.jsx("button",{onClick:I,disabled:S||A,className:`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${S||A?"opacity-50 cursor-not-allowed":""}`,children:S?"Saving...":"Save Styles"})})]})]})},ir=["Github","Facebook","Mail","Instagram","Linkedin","Twitter"],Vm=()=>{const[r,t]=F.useState([]),[e,n]=F.useState(!0),[s,o]=F.useState(null),[a,c]=F.useState(!1),[h,d]=F.useState(null),[m,E]=F.useState({name:"",url:"",icon:ir[0],order:0}),A=F.useMemo(()=>z?cc(z,"socialLinks"):null,[]),R=F.useCallback(async()=>{if(!z||!A){o("Firestore is not initialized correctly."),n(!1);return}n(!0),o(null);try{const M=Tc(A,Ec("order","asc")),y=(await xc(M)).docs.map(p=>({...p.data(),id:p.id}));t(y)}catch(M){console.error("Error fetching social links:",M),o("Failed to load social links. Please try again.")}finally{n(!1)}},[A]);F.useEffect(()=>{R()},[R]);const S=M=>{const{name:w,value:y}=M.target;E(p=>({...p,[w]:w==="order"?parseInt(y,10)||0:y}))},N=()=>{c(!1),d(null),E({name:"",url:"",icon:ir[0],order:0})},V=async M=>{if(M.preventDefault(),!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!z||!A){o("Firestore is not initialized correctly.");return}try{await Am(A,m),N(),R()}catch(w){console.error("Error adding link:",w),o("Failed to add link. Please try again.")}},q=async M=>{if(M.preventDefault(),!h||!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!z){o("Firestore is not initialized correctly.");return}try{const w=wt(z,"socialLinks",h);await Ls(w,m),N(),R()}catch(w){console.error("Error updating link:",w),o("Failed to update link. Please try again.")}},K=async M=>{if(M===0||!z)return;o(null);const w=r[M],y=r[M-1],p=Va(z),_=wt(z,"socialLinks",w.id),T=wt(z,"socialLinks",y.id);p.update(_,{order:y.order}),p.update(T,{order:w.order});try{await p.commit(),R()}catch(I){console.error("Error moving link up:",I),o("Failed to reorder link. Please try again.")}},W=async M=>{if(M===r.length-1||!z)return;o(null);const w=r[M],y=r[M+1],p=Va(z),_=wt(z,"socialLinks",w.id),T=wt(z,"socialLinks",y.id);p.update(_,{order:y.order}),p.update(T,{order:w.order});try{await p.commit(),R()}catch(I){console.error("Error moving link down:",I),o("Failed to reorder link. Please try again.")}},J=async M=>{if(window.confirm("Are you sure you want to delete this link?")){if(o(null),!z){o("Firestore is not initialized correctly.");return}try{const w=wt(z,"socialLinks",M);await wm(w),R()}catch(w){console.error("Error deleting link:",w),o("Failed to delete link. Please try again.")}}},It=M=>{d(M.id),E({name:M.name,url:M.url,icon:M.icon,order:M.order}),c(!1)};return v.jsxs("div",{className:"p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200",children:[v.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"Manage Social Links"}),s&&v.jsx("p",{className:"text-red-400 bg-red-900/50 p-3 rounded mb-4",children:s}),e&&v.jsx("p",{children:"Loading links..."}),(a||h)&&v.jsxs("form",{onSubmit:h?q:V,className:"mb-6 p-4 bg-gray-700 rounded",children:[v.jsx("h3",{className:"text-xl font-medium mb-3 text-white",children:h?"Edit Link":"Add New Link"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3",children:[v.jsx("input",{type:"text",name:"name",placeholder:"Link Name (e.g., GitHub)",value:m.name,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),v.jsx("input",{type:"url",name:"url",placeholder:"Full URL (e.g., https://github.com/user)",value:m.url,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),v.jsxs("select",{name:"icon",value:m.icon,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,children:[v.jsx("option",{value:"",disabled:!0,children:"Select Icon"}),ir.map(M=>v.jsx("option",{value:M,children:M},M))]}),v.jsx("input",{type:"number",name:"order",placeholder:"Order (e.g., 1)",value:m.order,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,min:"0"})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("button",{type:"submit",className:"flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(ah,{size:18})," ",h?"Save Changes":"Add Link"]}),v.jsxs("button",{type:"button",onClick:N,className:"flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(Hu,{size:18})," Cancel"]})]})]}),!a&&!h&&v.jsxs("button",{onClick:()=>{c(!0),E({name:"",url:"",icon:ir[0],order:r.length>0?Math.max(...r.map(M=>M.order))+1:0})},className:"mb-6 flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(Qu,{size:18})," Add New Link"]}),!e&&r.length>0&&v.jsx("div",{className:"overflow-x-auto",children:v.jsxs("table",{className:"min-w-full bg-gray-700 rounded",children:[v.jsx("thead",{children:v.jsxs("tr",{className:"bg-gray-600",children:[v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Order"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Name"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"URL"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Icon"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Actions"})]})}),v.jsx("tbody",{children:r.map((M,w)=>v.jsxs("tr",{className:"border-b border-gray-600 hover:bg-gray-600/50",children:[v.jsx("td",{className:"py-2 px-3",children:M.order}),v.jsx("td",{className:"py-2 px-3",children:M.name}),v.jsx("td",{className:"py-2 px-3",children:v.jsx("a",{href:M.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline truncate max-w-xs inline-block",children:M.url})}),v.jsx("td",{className:"py-2 px-3",children:M.icon}),v.jsxs("td",{className:"py-2 px-3 flex items-center gap-1",children:[v.jsx("button",{onClick:()=>K(w),disabled:w===0,className:`p-1 ${w===0?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Up",children:v.jsx(Gu,{size:18})}),v.jsx("button",{onClick:()=>W(w),disabled:w===r.length-1,className:`p-1 ${w===r.length-1?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Down",children:v.jsx($u,{size:18})}),v.jsx("button",{onClick:()=>It(M),className:"text-yellow-400 hover:text-yellow-300 p-1",title:"Edit",children:v.jsx(ch,{size:18})}),v.jsx("button",{onClick:()=>J(M.id),className:"text-red-500 hover:text-red-400 p-1",title:"Delete",children:v.jsx(hh,{size:18})})]})]},M.id))})]})}),!e&&r.length===0&&!a&&v.jsx("p",{className:"text-center text-gray-400 mt-4",children:"No social links found. Add one!"})]})},Nm={title:"New Project Title",description:"New project description.",tags:["Tag1","Tag2"],link:""},ve=(r,t,e,n,s,o,a)=>t.length===1&&t[0]==="projects"&&typeof r=="object"&&r!==null&&!Array.isArray(r)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsxs("div",{className:"flex justify-between items-center mb-3",children:[v.jsx("h4",{className:"text-lg font-semibold capitalize",children:String(t[0]).replace(/([A-Z])/g," $1")}),o&&v.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),Object.entries(r).map(([c,h])=>{if(c!=="title"&&typeof h=="object"&&h!==null&&!Array.isArray(h)){const d=[...t,c];return v.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[v.jsxs("div",{className:"flex justify-between items-start mb-3",children:[" ",v.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",v.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:c})]}),a&&v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${c}"?`)&&a(d)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${c}`,children:"Delete Project"})]}),v.jsxs("div",{className:"space-y-4",children:[" ",ve(h,d,e,n,s,void 0,void 0)]})]},d.join("."))}else if(c==="title"&&typeof h=="string"){const d=[...t,c],m=d.join("."),E=n===m;return v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),E?v.jsx("input",{type:"text",id:m,name:m,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2",value:h,onChange:A=>e(d,A.target.value),onBlur:()=>s(null),autoFocus:!0}):v.jsx("div",{className:"mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[38px]",onClick:()=>s(m),children:h||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m)}return null})]},t.join(".")):Object.entries(r).map(([c,h])=>{const d=[...t,c],m=d.map(String).join("."),E=n===m;return typeof h=="string"?v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),E?v.jsx("textarea",{id:m,name:m,rows:h.length>100?4:2,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:h,onChange:A=>e(d,A.target.value),onBlur:()=>s(null),autoFocus:!0}):v.jsx("div",{className:"mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[50px] whitespace-pre-wrap text-gray-800",onClick:()=>s(m),children:h||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m):typeof h=="object"&&h!==null&&!Array.isArray(h)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize",children:String(c).replace(/([A-Z])/g," $1")}),ve(h,d,e,n,s)]},m):Array.isArray(h)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm",children:[v.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize text-gray-700",children:String(c).replace(/([A-Z])/g," $1")}),v.jsxs("div",{className:"space-y-3",children:[" ",h.map((A,R)=>{const S=[...d,R],N=S.map(String).join("."),V=n===N;return typeof A=="string"?v.jsxs("div",{className:"flex items-center space-x-2",children:[V?v.jsx("input",{type:"text",id:N,name:N,className:"flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:A,onChange:q=>e(S,q.target.value),onBlur:()=>s(null),autoFocus:!0}):v.jsx("div",{className:"flex-grow rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[38px] text-gray-800",onClick:()=>s(N),children:A||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})}),a&&v.jsx("button",{onClick:()=>{window.confirm("Are you sure you want to delete this item?")&&a(S)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete item ${R+1}`,children:"Delete"})]},N):typeof A=="object"&&A!==null?v.jsxs("div",{className:"mb-4 p-3 border border-gray-100 rounded relative",children:[" ",v.jsxs("div",{className:"flex justify-between items-center mb-2",children:[" ",v.jsxs("h5",{className:"text-md font-medium",children:["Item ",R+1]}),a&&v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete Item ${R+1}?`)&&a(S)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-0.5 px-1.5 rounded focus:outline-none focus:shadow-outline","aria-label":`Delete item ${R+1}`,children:"Delete"})]}),ve(A,S,e,n,s,void 0,a)]},N):null})]})," "]},m):null}),km=(r,t,e)=>{if(!t||t.length===0)return r;const n=JSON.parse(JSON.stringify(r));let s=n;for(let a=0;a<t.length-1;a++){const c=t[a];if(s[c]===void 0||s[c]===null){const h=typeof t[a+1]=="number";s[c]=h?[]:{}}if(Array.isArray(s)&&typeof c=="number")for(;s.length<=c;)s.push(null);s=s[c]}const o=t[t.length-1];return typeof s!="object"||s===null?(console.error("Cannot set property on non-object:",s,"at path",t),r):(s[o]=e,n)},Dm={title:"New Service Title",description:"New service description."},ka=r=>r.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase()),an="translations/en",Lm=()=>{var y;const r=La(),[t,e]=F.useState(Mt),[n,s]=F.useState(!0),[o,a]=F.useState(""),[c,h]=F.useState(""),[d,m]=F.useState(null),[E,A]=F.useState(null),R=F.useMemo(()=>{if(t&&t.en){const p=Object.keys(t.en);return d===null&&p.length>0&&m(p[0]),p}return[]},[t,d]);F.useEffect(()=>{if(!z){console.error("Firestore instance is not available."),a("Error: Firestore connection failed."),s(!1);return}const p=wt(z,an);s(!0);const _=Rc(p,T=>{if(T.exists()){const I=T.data();e(g=>({...g,en:I}))}else e(Mt),console.log("No translations document found in Firestore, using defaults.");s(!1)},T=>{console.error("Firestore snapshot error:",T),a("Error fetching data from Firestore."),s(!1)});return()=>_()},[]);const S=async()=>{if(h(""),!re){console.error("Firebase auth instance is not available."),h("Logout service unavailable. Please try again later.");return}try{await Pu(re),r("/admin/login")}catch(p){console.error("Logout failed:",p),h("Failed to log out. Please try again.")}},N=F.useCallback((p,_)=>{e(T=>{const I="en";if(!p||p.length===0)return T;const g=km(T[I],p,_);return{...T,[I]:g}}),a("")},[]),V=F.useCallback(()=>{e(p=>{const _=`project_${Date.now()}`,T={...p.en};return(typeof T.projects!="object"||T.projects===null)&&(T.projects={title:Mt.en.projects.title}),T.projects[_]={...Nm},{...p,en:T}}),a("New project added. Edit details and save."),d!=="projects"&&m("projects")},[d]),q=F.useCallback(()=>{e(p=>{const _={...p.en};return typeof _.services!="object"||_.services===null?_.services={title:Mt.en.services.title||"Services",list:[]}:Array.isArray(_.services.list)||(_.services.list=[]),_.services.list.push({...Dm}),{...p,en:_}}),a("New service added. Edit details and save."),d!=="services"&&m("services")},[d]),K=async p=>{const _=t.en;if(!z){a("Error: Firestore connection failed.");return}a("Saving...");try{const T=wt(z,an);await Ds(T,_,{merge:!0}),a("Content changes saved successfully!"),setTimeout(()=>a(""),3e3)}catch(T){console.error("Failed to save translations to Firestore:",T),a("Error saving content changes."),setTimeout(()=>a(""),5e3)}},W=async p=>{if(!z){a("Error: Firestore connection failed.");return}a("Deleting item...");const _=wt(z,an);try{await Ls(_,{[p]:bm()})}catch(T){console.error("Failed to delete item from Firestore:",T),a("Error deleting item."),setTimeout(()=>a(""),5e3)}},J=F.useCallback(async p=>{var _;if(!p||p.length<1){console.error("Invalid path for deletion:",p),a("Error: Invalid deletion path.");return}if(p[0]==="services"&&p[1]==="list"&&typeof p[2]=="number"){const T=p[2],I=(_=t.en.services)==null?void 0:_.list;if(!Array.isArray(I)){console.error("Cannot delete service item: services.list is not an array or is missing.",I),a("Error: Services data structure issue.");return}const g=I.filter((st,Dt)=>Dt!==T);if(!z){a("Error: Firestore connection failed.");return}a("Deleting service item...");const $=wt(z,an);try{await Ls($,{"services.list":g})}catch(st){console.error("Failed to update services list in Firestore:",st),a("Error deleting service item."),setTimeout(()=>a(""),5e3)}}else{const T=p.join(".");if(!T){console.error("Generated empty field path for deletion:",p),a("Error: Could not determine field to delete.");return}await W(T)}},[(y=t.en.services)==null?void 0:y.list,z]),It=async()=>{if(!z){a("Error: Firestore connection failed.");return}if(window.confirm("Are you sure you want to reset the English text content (About, Contact, Services, General Info) to the default values? This cannot be undone and does not affect Projects, Styles, or Social Links.")){a("Resetting...");const p={...Mt.en,projects:t.en.projects};try{const _=wt(z,an);await Ds(_,p),a("Text content sections reset to defaults."),setTimeout(()=>a(""),3e3)}catch(_){console.error("Failed to reset translations in Firestore:",_),a("Error resetting content."),setTimeout(()=>a(""),5e3)}}},M=p=>p===null?!1:p in Mt.en,w=()=>{if(n)return v.jsx("p",{className:"text-gray-500 text-center py-10",children:"Loading content..."});if(!d)return v.jsx("p",{className:"text-gray-500",children:"Select a section above to start editing."});if(d==="styleEditor")return v.jsx(Sm,{});if(d==="socialLinks")return v.jsx(Vm,{});if(M(d)){const p=ka(d);return v.jsxs(v.Fragment,{children:[v.jsxs("h3",{className:"text-xl font-semibold mb-4 text-gray-700 capitalize",children:["Editing: ",p," Content"]}),d==="projects"?(()=>{const _=t.en.projects;return v.jsx(Pm,{data:_,path:[d],handleChange:N,editingPath:E,setEditingPath:A,handleAddProject:V,handleDelete:J,renderFields:ve})})():d==="services"?(()=>{const _=t.en.services;if(!_||typeof _!="object"||!Array.isArray(_.list)){console.error("Services data is not in the expected format:",_);const T={title:"Services",list:[]};return v.jsx(Na,{data:T,path:[d],handleChange:N,editingPath:E,setEditingPath:A,handleAddService:q,handleDelete:J,renderFields:ve})}return v.jsx(Na,{data:_,path:[d],handleChange:N,editingPath:E,setEditingPath:A,handleAddService:q,handleDelete:J,renderFields:ve})})():ve(t.en[d],[d],N,E,A,void 0,J)]})}return v.jsxs("p",{className:"text-red-500",children:["Error: Invalid tab '",d,"' selected."]})};return v.jsxs("div",{className:"p-4 md:p-6 bg-gray-100 min-h-screen",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-300 gap-4",children:[v.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-800",children:"Admin Dashboard"}),v.jsxs("div",{className:"flex gap-2 flex-wrap justify-center sm:justify-end",children:[v.jsx("button",{onClick:It,className:"bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",title:"Reset text content (About, Contact, Services, General Info) to defaults. Does not affect Projects, Styles, or Social Links.",children:"Reset Text Defaults"}),v.jsx("button",{onClick:S,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",children:"Logout"})]}),c&&v.jsx("p",{className:"text-red-500 text-xs italic w-full text-center sm:text-right mt-2",children:c})]}),v.jsx("div",{className:"mb-6 border-b border-gray-300",children:v.jsxs("nav",{className:"-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto pb-px","aria-label":"Tabs",children:[R.map(p=>{const _=p,T=ka(_);return v.jsx("button",{onClick:()=>m(_),className:`${d===_?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":d===_?"page":void 0,children:T},_)}),v.jsx("button",{onClick:()=>m("styleEditor"),className:`${d==="styleEditor"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":d==="styleEditor"?"page":void 0,children:"Style Editor"},"styleEditor"),v.jsx("button",{onClick:()=>m("socialLinks"),className:`${d==="socialLinks"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":d==="socialLinks"?"page":void 0,children:"Social Links"},"socialLinks")]})}),v.jsx("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-md",children:w()}),v.jsxs("div",{className:"mt-6 text-right flex justify-end items-center gap-4",children:[o&&v.jsx("span",{className:"text-green-600 text-sm transition-opacity duration-300",children:o}),v.jsx("button",{onClick:()=>K(),className:`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline transition-all duration-150 text-sm ${d==="styleEditor"||d==="socialLinks"?"opacity-50 cursor-not-allowed":"opacity-100"}`,disabled:d==="styleEditor"||d==="socialLinks",title:d==="styleEditor"||d==="socialLinks"?"Changes are saved directly within this tab":"Save text content changes",children:"Save Content Changes"})]})]})},Fm=(r=Mt)=>{const t=r.en,e=t==null?void 0:t.projects,n=e?Object.entries(e).filter(([s,o])=>s!=="title"&&typeof o=="object"&&o!==null).map(([s,o])=>({title:(o==null?void 0:o.title)??`Project ${s}`,description:(o==null?void 0:o.description)??"Description missing.",tags:(o==null?void 0:o.tags)??[],link:(o==null?void 0:o.link)??""})):[];return{title:(e==null?void 0:e.title)??"Featured Projects",projects:n}},Mm=({logoUrl:r})=>v.jsx("img",{src:r||"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",alt:"Logo",className:"mx-auto mb-6 w-24 h-24",style:{pointerEvents:"none",userSelect:"none"}}),jm=F.lazy(()=>Fs(()=>import("./ServicesSection-B0n5g5FI.js"),__vite__mapDeps([0,1,2]))),Om=F.lazy(()=>Fs(()=>import("./ProjectsSection-DUCKxv21.js"),__vite__mapDeps([3,1,2]))),Um=F.lazy(()=>Fs(()=>import("./ContactSection-B4rna1rU.js"),__vite__mapDeps([4,1,2]))),qm=6e4;let Da=0;const Bm=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),$m=r=>r.length>=10&&r.length<=1e3,zm={Github:Zu,Facebook:Yu,Mail:ih,Instagram:eh,Linkedin:rh,Twitter:fh},Gm=({children:r})=>{const[t,e]=F.useState(null),[n,s]=F.useState(!0);return F.useEffect(()=>{if(!re){s(!1);return}const o=Ma(re,a=>{e(a),s(!1)});return()=>o()},[]),n?v.jsx("div",{className:"flex items-center justify-center min-h-screen",children:v.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}):t?r:v.jsx(Fa,{to:"/admin/login",replace:!0})},Km=()=>{const[r,t]=F.useState(Mt),[e,n]=F.useState(!0);F.useEffect(()=>{if(!z){console.error("MainSite: Firestore instance is not available."),n(!1);return}const R=wt(z,"translations/en");n(!0);const S=Rc(R,N=>{if(N.exists()){const V=N.data();t(q=>({...q,en:{...Mt.en,...V}}))}else t(Mt),console.log("MainSite: No translations document found in Firestore, using defaults.");n(!1)},N=>{console.error("MainSite: Firestore snapshot error:",N),t(Mt),n(!1)});return()=>S()},[]);const s=F.useMemo(()=>r.en,[r]),[o,a]=F.useState([]),[c,h]=F.useState({name:"",email:"",message:""}),d=F.useCallback(R=>{const{name:S,value:N}=R.target;h(V=>({...V,[S]:N}))},[]),m=F.useCallback(async R=>{R.preventDefault();const S=Date.now();if(S-Da<qm){alert("Please wait a minute before sending another message.");return}if(!Bm(c.email)){alert("Please enter a valid email address.");return}if(!$m(c.message)){alert("Message must be between 10 and 1000 characters.");return}Da=S;try{So.init("skwn_-DYfDakGK644"),await So.send("service_bdj14o3","template_2e2nikq",{name:c.name,email:c.email,message:c.message,to_email:"tiger3homs@gmail.com"}),alert("Message sent successfully!"),h({name:"",email:"",message:""})}catch(N){console.error("Failed to send message:",N),alert("Failed to send message. Please try again.")}},[c]);F.useEffect(()=>{(async()=>{if(z)try{const S=cc(z,"socialLinks"),N=Tc(S,Ec("order","asc")),q=(await xc(N)).docs.map(K=>({id:K.id,...K.data()}));a(q)}catch(S){console.error("Error fetching social links:",S)}})()},[]);const E=F.useMemo(()=>Fm(r),[r]),A=v.jsx("div",{className:"flex items-center justify-center p-8",children:v.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"})});return e?v.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-900",children:v.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}):v.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ltr",children:[v.jsx("header",{className:"container mx-auto px-4 py-16 md:py-32",children:v.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[v.jsx(Mm,{logoUrl:s.generalInfo.logoUrl}),v.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 text-primary",style:{pointerEvents:"none",userSelect:"none"},children:s.generalInfo.siteTitle}),v.jsx("p",{className:"text-xl md:text-2xl text-text mb-8",style:{pointerEvents:"none",userSelect:"none"},children:s.generalInfo.siteRole}),v.jsx("div",{className:"flex justify-center space-x-6",children:o.map(R=>{const S=zm[R.icon];return S?v.jsx("a",{href:R.url,target:"_blank",rel:"noopener noreferrer","aria-label":R.name,className:"text-primary hover:text-text transition-colors transform hover:scale-110",children:v.jsx(S,{size:24})},R.id):null})})]})}),v.jsx(F.Suspense,{fallback:A,children:v.jsx(Om,{title:E.title,projects:E.projects})}),v.jsx("section",{className:"container mx-auto px-4 py-16 bg-gray-800/50 backdrop-blur-sm",children:v.jsxs("div",{className:"max-w-3xl mx-auto",children:[v.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-title",children:s.about.title}),v.jsx("p",{className:"text-lg leading-relaxed text-text",children:s.about.description})]})}),v.jsx(F.Suspense,{fallback:A,children:v.jsx(jm,{title:s.services.title,services:s.services.list})}),v.jsx(F.Suspense,{fallback:A,children:v.jsx(Um,{t:s.contact,handleSubmit:m,formData:c,handleInputChange:d})}),v.jsxs("footer",{className:"container mx-auto px-4 py-8 text-center text-text",children:[v.jsx("p",{children:s.generalInfo.footerText}),v.jsx("div",{className:"mt-4",children:v.jsx(du,{to:"/admin/dashboard",className:"text-sm text-secondary hover:text-primary transition-colors",children:"Admin Dashboard"})})]})]})};function Qm(){const r="/home/";return F.useEffect(()=>{(async()=>{if(!z){console.error("App.tsx: Firestore not initialized correctly for loading styles.");return}const e=wt(z,"settings","styles");try{console.log("App.tsx: Attempting to load global styles...");const n=await bc(e);if(n.exists()){const s=n.data();document.documentElement.style.setProperty("--primary-color",s.primaryColor),document.documentElement.style.setProperty("--secondary-color",s.secondaryColor),document.documentElement.style.setProperty("--font-family",s.fontFamily),s.titleColor&&document.documentElement.style.setProperty("--title-color",s.titleColor),s.h3TitleColor&&document.documentElement.style.setProperty("--h3title-color",s.h3TitleColor),s.textColor&&document.documentElement.style.setProperty("--text-color",s.textColor),console.log("App.tsx: Global styles applied from Firestore:",s)}else console.log("App.tsx: No global styles document found in Firestore, using CSS defaults.")}catch(n){console.error("App.tsx: Error loading global styles from Firestore:",n)}})()},[]),v.jsx(uu,{basename:r,children:v.jsxs(hu,{children:[v.jsx(Zn,{path:"/",element:v.jsx(Km,{})}),v.jsx(Zn,{path:"/admin/login",element:v.jsx(Cm,{})}),v.jsx(Zn,{path:"/admin/dashboard",element:v.jsx(Gm,{children:v.jsx(Lm,{})})}),v.jsx(Zn,{path:"/admin",element:v.jsx(Fa,{to:"/admin/login",replace:!0})})]})})}Ua(document.getElementById("root")).render(v.jsx(F.StrictMode,{children:v.jsx(Qm,{})}));export{kt as c,v as j};
//# sourceMappingURL=index-cXdLUz6c.js.map
