const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ServicesSection-923wNxBe.js","assets/react-vendor-Bwa1dZdL.js","assets/firebase-vendor-CAk-8R_y.js","assets/ProjectsSection-BTMu5bv8.js","assets/ContactSection-CpNF7jjY.js"])))=>i.map(i=>d[i]);
import{r as F,a as Zc,u as Ia,B as tu,R as eu,b as Xn,N as Aa,L as nu}from"./react-vendor-Bwa1dZdL.js";import{L as ru,_ as su,C as iu,r as go,F as ou,a as au,g as lu,b as cu,c as uu,d as Kt,e as hu,f as du,S as fu,h as Lt,i as mu,j as pu,k as gu,l as yu,o as ba,s as _u,m as vu}from"./firebase-vendor-CAk-8R_y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var xa={exports:{}},Tr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu=F,Eu=Symbol.for("react.element"),wu=Symbol.for("react.fragment"),Iu=Object.prototype.hasOwnProperty,Au=Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bu={key:!0,ref:!0,__self:!0,__source:!0};function Ra(r,t,e){var n,i={},o=null,a=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Iu.call(t,n)&&!bu.hasOwnProperty(n)&&(i[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Eu,type:r,key:o,ref:a,props:i,_owner:Au.current}}Tr.Fragment=wu;Tr.jsx=Ra;Tr.jsxs=Ra;xa.exports=Tr;var v=xa.exports,Ca,yo=Zc;Ca=yo.createRoot,yo.hydrateRoot;const xu="modulepreload",Ru=function(r){return"/home/"+r},_o={},Vs=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(h=>{if(h=Ru(h),h in _o)return;_o[h]=!0;const d=h.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const T=document.createElement("link");if(T.rel=d?"stylesheet":xu,d||(T.as="script"),T.crossOrigin="",T.href=h,c&&T.setAttribute("nonce",c),document.head.appendChild(T),d)return new Promise((w,R)=>{T.addEventListener("load",w),T.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pu=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,n)=>n?n.toUpperCase():e.toLowerCase()),vo=r=>{const t=Pu(r);return t.charAt(0).toUpperCase()+t.slice(1)},Pa=(...r)=>r.filter((t,e,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Su={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=F.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},h)=>F.createElement("svg",{ref:h,...Su,width:t,height:t,stroke:r,strokeWidth:n?Number(e)*24/Number(t):e,className:Pa("lucide",i),...c},[...a.map(([d,m])=>F.createElement(d,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(r,t)=>{const e=F.forwardRef(({className:n,...i},o)=>F.createElement(Vu,{ref:o,iconNode:t,className:Pa(`lucide-${Cu(vo(r))}`,`lucide-${r}`,n),...i}));return e.displayName=vo(r),e};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ku=Vt("arrow-down",Nu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Lu=Vt("arrow-up",Du);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],ju=Vt("circle-plus",Mu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ou=Vt("circle-x",Fu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],qu=Vt("facebook",Uu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],$u=Vt("github",Bu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ku=Vt("instagram",zu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Qu=Vt("linkedin",Gu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Hu=Vt("mail",Wu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Yu=Vt("save",Xu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Zu=Vt("square-pen",Ju);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],eh=Vt("trash-2",th);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],rh=Vt("twitter",nh),pn={_origin:"https://api.emailjs.com"},sh=(r,t="https://api.emailjs.com")=>{pn._userID=r,pn._origin=t},Sa=(r,t,e)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class To{constructor(t){this.status=t.status,this.text=t.responseText}}const Va=(r,t,e={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const c=new To(a);c.status===200||c.text==="OK"?n(c):i(c)}),o.addEventListener("error",({target:a})=>{i(new To(a))}),o.open("POST",pn._origin+r,!0),Object.keys(e).forEach(a=>{o.setRequestHeader(a,e[a])}),o.send(t)}),ih=(r,t,e,n)=>{const i=n||pn._userID;return Sa(i,r,t),Va("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:r,template_id:t,template_params:e}),{"Content-type":"application/json"})},oh=r=>{let t;if(typeof r=="string"?t=document.querySelector(r):t=r,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},ah=(r,t,e,n)=>{const i=n||pn._userID,o=oh(e);Sa(i,r,t);const a=new FormData(o);return a.append("lib_version","3.2.0"),a.append("service_id",r),a.append("template_id",t),a.append("user_id",i),Va("/api/v1.0/email/send-form",a)},Eo={init:sh,send:ih,sendForm:ah};var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,Na;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,p){function y(){}y.prototype=p.prototype,_.D=p.prototype,_.prototype=new y,_.prototype.constructor=_,_.C=function(E,I,b){for(var g=Array(arguments.length-2),$=2;$<arguments.length;$++)g[$-2]=arguments[$];return p.prototype[I].apply(E,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var I=0;16>I;++I)E[I]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=_.g[0],y=_.g[1],I=_.g[2];var b=_.g[3],g=p+(b^y&(I^b))+E[0]+3614090360&4294967295;p=y+(g<<7&4294967295|g>>>25),g=b+(I^p&(y^I))+E[1]+3905402710&4294967295,b=p+(g<<12&4294967295|g>>>20),g=I+(y^b&(p^y))+E[2]+606105819&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(p^I&(b^p))+E[3]+3250441966&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(b^y&(I^b))+E[4]+4118548399&4294967295,p=y+(g<<7&4294967295|g>>>25),g=b+(I^p&(y^I))+E[5]+1200080426&4294967295,b=p+(g<<12&4294967295|g>>>20),g=I+(y^b&(p^y))+E[6]+2821735955&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(p^I&(b^p))+E[7]+4249261313&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(b^y&(I^b))+E[8]+1770035416&4294967295,p=y+(g<<7&4294967295|g>>>25),g=b+(I^p&(y^I))+E[9]+2336552879&4294967295,b=p+(g<<12&4294967295|g>>>20),g=I+(y^b&(p^y))+E[10]+4294925233&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(p^I&(b^p))+E[11]+2304563134&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(b^y&(I^b))+E[12]+1804603682&4294967295,p=y+(g<<7&4294967295|g>>>25),g=b+(I^p&(y^I))+E[13]+4254626195&4294967295,b=p+(g<<12&4294967295|g>>>20),g=I+(y^b&(p^y))+E[14]+2792965006&4294967295,I=b+(g<<17&4294967295|g>>>15),g=y+(p^I&(b^p))+E[15]+1236535329&4294967295,y=I+(g<<22&4294967295|g>>>10),g=p+(I^b&(y^I))+E[1]+4129170786&4294967295,p=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(p^y))+E[6]+3225465664&4294967295,b=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(b^p))+E[11]+643717713&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^p&(I^b))+E[0]+3921069994&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^b&(y^I))+E[5]+3593408605&4294967295,p=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(p^y))+E[10]+38016083&4294967295,b=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(b^p))+E[15]+3634488961&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^p&(I^b))+E[4]+3889429448&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^b&(y^I))+E[9]+568446438&4294967295,p=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(p^y))+E[14]+3275163606&4294967295,b=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(b^p))+E[3]+4107603335&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^p&(I^b))+E[8]+1163531501&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(I^b&(y^I))+E[13]+2850285829&4294967295,p=y+(g<<5&4294967295|g>>>27),g=b+(y^I&(p^y))+E[2]+4243563512&4294967295,b=p+(g<<9&4294967295|g>>>23),g=I+(p^y&(b^p))+E[7]+1735328473&4294967295,I=b+(g<<14&4294967295|g>>>18),g=y+(b^p&(I^b))+E[12]+2368359562&4294967295,y=I+(g<<20&4294967295|g>>>12),g=p+(y^I^b)+E[5]+4294588738&4294967295,p=y+(g<<4&4294967295|g>>>28),g=b+(p^y^I)+E[8]+2272392833&4294967295,b=p+(g<<11&4294967295|g>>>21),g=I+(b^p^y)+E[11]+1839030562&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^p)+E[14]+4259657740&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^b)+E[1]+2763975236&4294967295,p=y+(g<<4&4294967295|g>>>28),g=b+(p^y^I)+E[4]+1272893353&4294967295,b=p+(g<<11&4294967295|g>>>21),g=I+(b^p^y)+E[7]+4139469664&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^p)+E[10]+3200236656&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^b)+E[13]+681279174&4294967295,p=y+(g<<4&4294967295|g>>>28),g=b+(p^y^I)+E[0]+3936430074&4294967295,b=p+(g<<11&4294967295|g>>>21),g=I+(b^p^y)+E[3]+3572445317&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^p)+E[6]+76029189&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(y^I^b)+E[9]+3654602809&4294967295,p=y+(g<<4&4294967295|g>>>28),g=b+(p^y^I)+E[12]+3873151461&4294967295,b=p+(g<<11&4294967295|g>>>21),g=I+(b^p^y)+E[15]+530742520&4294967295,I=b+(g<<16&4294967295|g>>>16),g=y+(I^b^p)+E[2]+3299628645&4294967295,y=I+(g<<23&4294967295|g>>>9),g=p+(I^(y|~b))+E[0]+4096336452&4294967295,p=y+(g<<6&4294967295|g>>>26),g=b+(y^(p|~I))+E[7]+1126891415&4294967295,b=p+(g<<10&4294967295|g>>>22),g=I+(p^(b|~y))+E[14]+2878612391&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~p))+E[5]+4237533241&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~b))+E[12]+1700485571&4294967295,p=y+(g<<6&4294967295|g>>>26),g=b+(y^(p|~I))+E[3]+2399980690&4294967295,b=p+(g<<10&4294967295|g>>>22),g=I+(p^(b|~y))+E[10]+4293915773&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~p))+E[1]+2240044497&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~b))+E[8]+1873313359&4294967295,p=y+(g<<6&4294967295|g>>>26),g=b+(y^(p|~I))+E[15]+4264355552&4294967295,b=p+(g<<10&4294967295|g>>>22),g=I+(p^(b|~y))+E[6]+2734768916&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~p))+E[13]+1309151649&4294967295,y=I+(g<<21&4294967295|g>>>11),g=p+(I^(y|~b))+E[4]+4149444226&4294967295,p=y+(g<<6&4294967295|g>>>26),g=b+(y^(p|~I))+E[11]+3174756917&4294967295,b=p+(g<<10&4294967295|g>>>22),g=I+(p^(b|~y))+E[2]+718787259&4294967295,I=b+(g<<15&4294967295|g>>>17),g=y+(b^(I|~p))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+p&4294967295,_.g[1]=_.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,_.g[2]=_.g[2]+I&4294967295,_.g[3]=_.g[3]+b&4294967295}n.prototype.u=function(_,p){p===void 0&&(p=_.length);for(var y=p-this.blockSize,E=this.B,I=this.h,b=0;b<p;){if(I==0)for(;b<=y;)i(this,_,b),b+=this.blockSize;if(typeof _=="string"){for(;b<p;)if(E[I++]=_.charCodeAt(b++),I==this.blockSize){i(this,E),I=0;break}}else for(;b<p;)if(E[I++]=_[b++],I==this.blockSize){i(this,E),I=0;break}}this.h=I,this.o+=p},n.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var p=1;p<_.length-8;++p)_[p]=0;var y=8*this.o;for(p=_.length-8;p<_.length;++p)_[p]=y&255,y/=256;for(this.u(_),_=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)_[y++]=this.g[p]>>>E&255;return _};function o(_,p){var y=c;return Object.prototype.hasOwnProperty.call(y,_)?y[_]:y[_]=p(_)}function a(_,p){this.h=p;for(var y=[],E=!0,I=_.length-1;0<=I;I--){var b=_[I]|0;E&&b==p||(y[I]=b,E=!1)}this.g=y}var c={};function h(_){return-128<=_&&128>_?o(_,function(p){return new a([p|0],0>p?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return T;if(0>_)return V(d(-_));for(var p=[],y=1,E=0;_>=y;E++)p[E]=_/y|0,y*=4294967296;return new a(p,0)}function m(_,p){if(_.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(_.charAt(0)=="-")return V(m(_.substring(1),p));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),E=T,I=0;I<_.length;I+=8){var b=Math.min(8,_.length-I),g=parseInt(_.substring(I,I+b),p);8>b?(b=d(Math.pow(p,b)),E=E.j(b).add(d(g))):(E=E.j(y),E=E.add(d(g)))}return E}var T=h(0),w=h(1),R=h(16777216);r=a.prototype,r.m=function(){if(D(this))return-V(this).m();for(var _=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);_+=(0<=E?E:4294967296+E)*p,p*=4294967296}return _},r.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S(this))return"0";if(D(this))return"-"+V(this).toString(_);for(var p=d(Math.pow(_,6)),y=this,E="";;){var I=M(y,p).g;y=G(y,I.j(p));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(_);if(y=I,S(y))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},r.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function S(_){if(_.h!=0)return!1;for(var p=0;p<_.g.length;p++)if(_.g[p]!=0)return!1;return!0}function D(_){return _.h==-1}r.l=function(_){return _=G(this,_),D(_)?-1:S(_)?0:1};function V(_){for(var p=_.g.length,y=[],E=0;E<p;E++)y[E]=~_.g[E];return new a(y,~_.h).add(w)}r.abs=function(){return D(this)?V(this):this},r.add=function(_){for(var p=Math.max(this.g.length,_.g.length),y=[],E=0,I=0;I<=p;I++){var b=E+(this.i(I)&65535)+(_.i(I)&65535),g=(b>>>16)+(this.i(I)>>>16)+(_.i(I)>>>16);E=g>>>16,b&=65535,g&=65535,y[I]=g<<16|b}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(_,p){return _.add(V(p))}r.j=function(_){if(S(this)||S(_))return T;if(D(this))return D(_)?V(this).j(V(_)):V(V(this).j(_));if(D(_))return V(this.j(V(_)));if(0>this.l(R)&&0>_.l(R))return d(this.m()*_.m());for(var p=this.g.length+_.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<_.g.length;I++){var b=this.i(E)>>>16,g=this.i(E)&65535,$=_.i(I)>>>16,ut=_.i(I)&65535;y[2*E+2*I]+=g*ut,W(y,2*E+2*I),y[2*E+2*I+1]+=b*ut,W(y,2*E+2*I+1),y[2*E+2*I+1]+=g*$,W(y,2*E+2*I+1),y[2*E+2*I+2]+=b*$,W(y,2*E+2*I+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function W(_,p){for(;(_[p]&65535)!=_[p];)_[p+1]+=_[p]>>>16,_[p]&=65535,p++}function H(_,p){this.g=_,this.h=p}function M(_,p){if(S(p))throw Error("division by zero");if(S(_))return new H(T,T);if(D(_))return p=M(V(_),p),new H(V(p.g),V(p.h));if(D(p))return p=M(_,V(p)),new H(V(p.g),p.h);if(30<_.g.length){if(D(_)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var y=w,E=p;0>=E.l(_);)y=K(y),E=K(E);var I=k(y,1),b=k(E,1);for(E=k(E,2),y=k(y,2);!S(E);){var g=b.add(E);0>=g.l(_)&&(I=I.add(y),b=g),E=k(E,1),y=k(y,1)}return p=G(_,I.j(p)),new H(I,p)}for(I=T;0<=_.l(p);){for(y=Math.max(1,Math.floor(_.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(y),g=b.j(p);D(g)||0<g.l(_);)y-=E,b=d(y),g=b.j(p);S(b)&&(b=w),I=I.add(b),_=G(_,g)}return new H(I,_)}r.A=function(_){return M(this,_).h},r.and=function(_){for(var p=Math.max(this.g.length,_.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&_.i(E);return new a(y,this.h&_.h)},r.or=function(_){for(var p=Math.max(this.g.length,_.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|_.i(E);return new a(y,this.h|_.h)},r.xor=function(_){for(var p=Math.max(this.g.length,_.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^_.i(E);return new a(y,this.h^_.h)};function K(_){for(var p=_.g.length+1,y=[],E=0;E<p;E++)y[E]=_.i(E)<<1|_.i(E-1)>>>31;return new a(y,_.h)}function k(_,p){var y=p>>5;p%=32;for(var E=_.g.length-y,I=[],b=0;b<E;b++)I[b]=0<p?_.i(b+y)>>>p|_.i(b+y+1)<<32-p:_.i(b+y);return new a(I,_.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Na=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,te=a}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ka,an,Da,rr,fs,La,Ma,ja;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yn=="object"&&Yn];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function i(s,l){if(l)t:{var u=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in u))break t;u=u[A]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&t(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,A={next:function(){if(!f&&u<s.length){var x=u++;return{value:l(x,s[x]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,u){return s.call.apply(s.bind,arguments)}function T(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(l,A)}}return function(){return s.apply(l,arguments)}}function w(s,l,u){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,w.apply(null,arguments)}function R(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function S(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,A,x){for(var N=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)N[Z-2]=arguments[Z];return l.prototype[A].apply(f,N)}}function D(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function V(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=s.length||0,x=f.length||0;s.length=A+x;for(let N=0;N<x;N++)s[A+N]=f[N]}else s.push(f)}}class G{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function W(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function M(s){return M[" "](s),s}M[" "]=function(){};var K=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function k(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function _(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(s,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)s[u]=f[u];for(let x=0;x<y.length;x++)u=y[x],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function I(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function b(s){c.setTimeout(()=>{throw s},0)}function g(){var s=jr;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class ${constructor(){this.h=this.g=null}add(l,u){const f=ut.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var ut=new G(()=>new jt,s=>s.reset());class jt{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let de,Ke=!1,jr=new $,pi=()=>{const s=c.Promise.resolve(void 0);de=()=>{s.then(vc)}};var vc=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){b(u)}var l=ut;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Ke=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Tc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function Ge(s,l){if(gt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(K){t:{try{M(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ec[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ge.aa.h.call(this)}}S(Ge,gt);var Ec={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),wc=0;function Ic(s,l,u,f,A){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++wc,this.da=this.fa=!1}function Nn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function kn(s){this.src=s,this.g={},this.h=0}kn.prototype.add=function(s,l,u,f,A){var x=s.toString();s=this.g[x],s||(s=this.g[x]=[],this.h++);var N=Or(s,l,f,A);return-1<N?(l=s[N],u||(l.fa=!1)):(l=new Ic(l,this.src,x,!!f,A),l.fa=u,s.push(l)),l};function Fr(s,l){var u=l.type;if(u in s.g){var f=s.g[u],A=Array.prototype.indexOf.call(f,l,void 0),x;(x=0<=A)&&Array.prototype.splice.call(f,A,1),x&&(Nn(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Or(s,l,u,f){for(var A=0;A<s.length;++A){var x=s[A];if(!x.da&&x.listener==l&&x.capture==!!u&&x.ha==f)return A}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),qr={};function gi(s,l,u,f,A){if(Array.isArray(l)){for(var x=0;x<l.length;x++)gi(s,l[x],u,f,A);return null}return u=vi(u),s&&s[Vn]?s.K(l,u,d(f)?!!f.capture:!!f,A):Ac(s,l,u,!1,f,A)}function Ac(s,l,u,f,A,x){if(!l)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,Z=$r(s);if(Z||(s[Ur]=Z=new kn(s)),u=Z.add(l,u,f,N,x),u.proxy)return u;if(f=bc(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Tc||(A=N),A===void 0&&(A=!1),s.addEventListener(l.toString(),f,A);else if(s.attachEvent)s.attachEvent(_i(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function bc(){function s(u){return l.call(s.src,s.listener,u)}const l=xc;return s}function yi(s,l,u,f,A){if(Array.isArray(l))for(var x=0;x<l.length;x++)yi(s,l[x],u,f,A);else f=d(f)?!!f.capture:!!f,u=vi(u),s&&s[Vn]?(s=s.i,l=String(l).toString(),l in s.g&&(x=s.g[l],u=Or(x,u,f,A),-1<u&&(Nn(x[u]),Array.prototype.splice.call(x,u,1),x.length==0&&(delete s.g[l],s.h--)))):s&&(s=$r(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Or(l,u,f,A)),(u=-1<s?l[s]:null)&&Br(u))}function Br(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Vn])Fr(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(_i(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=$r(l))?(Fr(u,s),u.h==0&&(u.src=null,l[Ur]=null)):Nn(s)}}}function _i(s){return s in qr?qr[s]:qr[s]="on"+s}function xc(s,l){if(s.da)s=!0;else{l=new Ge(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&Br(s),s=u.call(f,l)}return s}function $r(s){return s=s[Ur],s instanceof kn?s:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function vi(s){return typeof s=="function"?s:(s[zr]||(s[zr]=function(l){return s.handleEvent(l)}),s[zr])}function yt(){Ht.call(this),this.i=new kn(this),this.M=this,this.F=null}S(yt,Ht),yt.prototype[Vn]=!0,yt.prototype.removeEventListener=function(s,l,u,f){yi(this,s,l,u,f)};function It(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new gt(l,s);else if(l instanceof gt)l.target=l.target||s;else{var A=l;l=new gt(f,s),E(l,A)}if(A=!0,u)for(var x=u.length-1;0<=x;x--){var N=l.g=u[x];A=Dn(N,f,!0,l)&&A}if(N=l.g=s,A=Dn(N,f,!0,l)&&A,A=Dn(N,f,!1,l)&&A,u)for(x=0;x<u.length;x++)N=l.g=u[x],A=Dn(N,f,!1,l)&&A}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)Nn(u[f]);delete s.g[l],s.h--}}this.F=null},yt.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},yt.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function Dn(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,x=0;x<l.length;++x){var N=l[x];if(N&&!N.da&&N.capture==u){var Z=N.listener,dt=N.ha||N.src;N.fa&&Fr(s.i,N),A=Z.call(dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Ti(s,l,u){if(typeof s=="function")u&&(s=w(s,u));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Ei(s){s.g=Ti(()=>{s.g=null,s.i&&(s.i=!1,Ei(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Rc extends Ht{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(s){Ht.call(this),this.h=s,this.g={}}S(Qe,Ht);var wi=[];function Ii(s){k(s.g,function(l,u){this.g.hasOwnProperty(u)&&Br(l)},s),s.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),Ii(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kr=c.JSON.stringify,Cc=c.JSON.parse,Pc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Gr(){}Gr.prototype.h=null;function Ai(s){return s.h||(s.h=s.i())}function bi(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){gt.call(this,"d")}S(Qr,gt);function Wr(){gt.call(this,"c")}S(Wr,gt);var fe={},xi=null;function Ln(){return xi=xi||new yt}fe.La="serverreachability";function Ri(s){gt.call(this,fe.La,s)}S(Ri,gt);function He(s){const l=Ln();It(l,new Ri(l))}fe.STAT_EVENT="statevent";function Ci(s,l){gt.call(this,fe.STAT_EVENT,s),this.stat=l}S(Ci,gt);function At(s){const l=Ln();It(l,new Ci(l,s))}fe.Ma="timingevent";function Pi(s,l){gt.call(this,fe.Ma,s),this.size=l}S(Pi,gt);function Xe(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function Ye(){this.g=!0}Ye.prototype.xa=function(){this.g=!1};function Sc(s,l,u,f,A,x){s.info(function(){if(s.g)if(x)for(var N="",Z=x.split("&"),dt=0;dt<Z.length;dt++){var Y=Z[dt].split("=");if(1<Y.length){var _t=Y[0];Y=Y[1];var vt=_t.split("_");N=2<=vt.length&&vt[1]=="type"?N+(_t+"="+Y+"&"):N+(_t+"=redacted&")}}else N=null;else N=x;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+N})}function Vc(s,l,u,f,A,x,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+x+" "+N})}function Ie(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+kc(s,u)+(f?" "+f:"")})}function Nc(s,l){s.info(function(){return"TIMEOUT: "+l})}Ye.prototype.info=function(){};function kc(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var x=A[0];if(x!="noop"&&x!="stop"&&x!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return Kr(u)}catch{return l}}var Mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hr;function jn(){}S(jn,Gr),jn.prototype.g=function(){return new XMLHttpRequest},jn.prototype.i=function(){return{}},Hr=new jn;function Xt(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var Ni={},Xr={};function Yr(s,l,u){s.L=1,s.v=qn($t(l)),s.m=u,s.P=!0,ki(s,null)}function ki(s,l){s.F=Date.now(),Fn(s),s.A=$t(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Qi(u.i,"t",f),s.C=0,u=s.j.J,s.h=new Vi,s.g=ho(s.j,u?l:null,!s.m),0<s.O&&(s.M=new Rc(w(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(wi[0]=A.toString()),A=wi);for(var x=0;x<A.length;x++){var N=gi(u,A[x],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),He(),Sc(s.i,s.u,s.A,s.l,s.R,s.m)}Xt.prototype.ca=function(s){s=s.target;const l=this.M;l&&zt(s)==3?l.j():this.Y(s)},Xt.prototype.Y=function(s){try{if(s==this.g)t:{const vt=zt(this.g);var l=this.g.Ba();const xe=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||to(this.g)))){this.J||vt!=4||l==7||(l==8||0>=xe?He(3):He(2)),Jr(this);var u=this.g.Z();this.X=u;e:if(Di(this)){var f=to(this.g);s="";var A=f.length,x=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),Je(this);var N="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(x&&l==A-1)});f.length=0,this.h.g+=s,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=u==200,Vc(this.i,this.u,this.A,this.l,this.R,vt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,dt=this.g;if((Z=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Z)){var Y=Z;break e}}Y=null}if(u=Y)Ie(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,u);else{this.o=!1,this.s=3,At(12),me(this),Je(this);break t}}if(this.P){u=!0;let kt;for(;!this.J&&this.C<N.length;)if(kt=Dc(this,N),kt==Xr){vt==4&&(this.s=4,At(14),u=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Ni){this.s=4,At(15),Ie(this.i,this.l,N,"[Invalid Chunk]"),u=!1;break}else Ie(this.i,this.l,kt,null),Zr(this,kt);if(Di(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||N.length!=0||this.h.h||(this.s=1,At(16),u=!1),this.o=this.o&&u,!u)Ie(this.i,this.l,N,"[Invalid Chunked Response]"),me(this),Je(this);else if(0<N.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),is(_t),_t.M=!0,At(11))}}else Ie(this.i,this.l,N,null),Zr(this,N);vt==4&&me(this),this.o&&!this.J&&(vt==4?ao(this.j,this):(this.o=!1,Fn(this)))}else Yc(this.g),u==400&&0<N.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),me(this),Je(this)}}}catch{}finally{}};function Di(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Dc(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?Xr:(u=Number(l.substring(u,f)),isNaN(u)?Ni:(f+=1,f+u>l.length?Xr:(l=l.slice(f,f+u),s.C=f+u,l)))}Xt.prototype.cancel=function(){this.J=!0,me(this)};function Fn(s){s.S=Date.now()+s.I,Li(s,s.I)}function Li(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Xe(w(s.ba,s),l)}function Jr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Xt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Nc(this.i,this.A),this.L!=2&&(He(),At(17)),me(this),this.s=2,Je(this)):Li(this,this.S-s)};function Je(s){s.j.G==0||s.J||ao(s.j,s)}function me(s){Jr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,Ii(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Zr(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||ts(u.h,s))){if(!s.K&&ts(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Qn(u),Kn(u);else break t;ss(u),At(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Xe(w(u.Za,u),6e3));if(1>=Fi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else ge(u,11)}else if((s.K||u.g==s)&&Qn(u),!W(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(u.T=Y[0],Y=Y[1],u.G==2)if(Y[0]=="c"){u.K=Y[1],u.ia=Y[2];const _t=Y[3];_t!=null&&(u.la=_t,u.j.info("VER="+u.la));const vt=Y[4];vt!=null&&(u.Aa=vt,u.j.info("SVER="+u.Aa));const xe=Y[5];xe!=null&&typeof xe=="number"&&0<xe&&(f=1.5*xe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const kt=s.g;if(kt){const Hn=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var x=f.h;x.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(es(x,x.h),x.h=null))}if(f.D){const os=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;os&&(f.ya=os,et(f.I,f.D,os))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var N=s;if(f.qa=uo(f,f.J?f.ia:null,f.W),N.K){Oi(f.h,N);var Z=N,dt=f.L;dt&&(Z.I=dt),Z.B&&(Jr(Z),Fn(Z)),f.g=N}else io(f);0<u.i.length&&Gn(u)}else Y[0]!="stop"&&Y[0]!="close"||ge(u,7);else u.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?ge(u,7):rs(u):Y[0]!="noop"&&u.l&&u.l.ta(Y),u.v=0)}}He(4)}catch{}}var Lc=class{constructor(s,l){this.g=s,this.map=l}};function Mi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ji(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Fi(s){return s.h?1:s.g?s.g.size:0}function ts(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function es(s,l){s.g?s.g.add(l):s.h=l}function Oi(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Mi.prototype.cancel=function(){if(this.i=Ui(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ui(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return D(s.i)}function Mc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function jc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function qi(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=jc(s),f=Mc(s),A=f.length,x=0;x<A;x++)l.call(void 0,f[x],u&&u[x],s)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),A=null;if(0<=f){var x=s[u].substring(0,f);A=s[u].substring(f+1)}else x=s[u];l(x,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,On(this,s.j),this.o=s.o,this.g=s.g,Un(this,s.s),this.l=s.l;var l=s.i,u=new en;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),$i(this,u),this.m=s.m}else s&&(l=String(s).match(Bi))?(this.h=!1,On(this,l[1]||"",!0),this.o=Ze(l[2]||""),this.g=Ze(l[3]||"",!0),Un(this,l[4]),this.l=Ze(l[5]||"",!0),$i(this,l[6]||"",!0),this.m=Ze(l[7]||"")):(this.h=!1,this.i=new en(null,this.h))}pe.prototype.toString=function(){var s=[],l=this.j;l&&s.push(tn(l,zi,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(tn(l,zi,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(tn(u,u.charAt(0)=="/"?qc:Uc,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",tn(u,$c)),s.join("")};function $t(s){return new pe(s)}function On(s,l,u){s.j=u?Ze(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Un(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function $i(s,l,u){l instanceof en?(s.i=l,zc(s.i,s.h)):(u||(l=tn(l,Bc)),s.i=new en(l,s.h))}function et(s,l,u){s.i.set(l,u)}function qn(s){return et(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ze(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function tn(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,Oc),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Oc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var zi=/[#\/\?@]/g,Uc=/[#\?:]/g,qc=/[#\?]/g,Bc=/[#\?@]/g,$c=/#/g;function en(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Yt(s){s.g||(s.g=new Map,s.h=0,s.i&&Fc(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=en.prototype,r.add=function(s,l){Yt(this),this.i=null,s=Ae(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Ki(s,l){Yt(s),l=Ae(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Gi(s,l){return Yt(s),l=Ae(s,l),s.g.has(l)}r.forEach=function(s,l){Yt(this),this.g.forEach(function(u,f){u.forEach(function(A){s.call(l,A,f,this)},this)},this)},r.na=function(){Yt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=s[f];for(let x=0;x<A.length;x++)u.push(l[f])}return u},r.V=function(s){Yt(this);let l=[];if(typeof s=="string")Gi(this,s)&&(l=l.concat(this.g.get(Ae(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},r.set=function(s,l){return Yt(this),this.i=null,s=Ae(this,s),Gi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},r.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Qi(s,l,u){Ki(s,l),0<u.length&&(s.i=null,s.g.set(Ae(s,l),D(u)),s.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const x=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=x;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),s.push(A)}}return this.i=s.join("&")};function Ae(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function zc(s,l){l&&!s.j&&(Yt(s),s.i=null,s.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(Ki(this,f),Qi(this,A,u))},s)),s.j=l}function Kc(s,l){const u=new Ye;if(c.Image){const f=new Image;f.onload=R(Jt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=R(Jt,u,"TestLoadImage: error",!1,l,f),f.onabort=R(Jt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=R(Jt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function Gc(s,l){const u=new Ye,f=new AbortController,A=setTimeout(()=>{f.abort(),Jt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(x=>{clearTimeout(A),x.ok?Jt(u,"TestPingServer: ok",!0,l):Jt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Jt(u,"TestPingServer: error",!1,l)})}function Jt(s,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function Qc(){this.g=new Pc}function Wc(s,l,u){const f=u||"";try{qi(s,function(A,x){let N=A;d(A)&&(N=Kr(A)),l.push(f+x+"="+encodeURIComponent(N))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Bn(s){this.l=s.Ub||null,this.j=s.eb||!1}S(Bn,Gr),Bn.prototype.g=function(){return new $n(this.l,this.j)},Bn.prototype.i=function(s){return function(){return s}}({});function $n(s,l){yt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S($n,yt),r=$n.prototype,r.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,rn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,rn(this)),this.g&&(this.readyState=3,rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?nn(this):rn(this),this.readyState==3&&Wi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,nn(this))},r.Qa=function(s){this.g&&(this.response=s,nn(this))},r.ga=function(){this.g&&nn(this)};function nn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,rn(s)}r.setRequestHeader=function(s,l){this.u.append(s,l)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Hi(s){let l="";return k(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function ns(s,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Hi(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):et(s,l,u))}function st(s){yt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(st,yt);var Hc=/^https?$/i,Xc=["POST","PUT"];r=st.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hr.g(),this.v=this.o?Ai(this.o):Ai(Hr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(x){Xi(this,x);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const x of f.keys())u.set(x,f.get(x));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(x=>x.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xc,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,N]of u)this.g.setRequestHeader(x,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zi(this),this.u=!0,this.g.send(s),this.u=!1}catch(x){Xi(this,x)}};function Xi(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Yi(s),zn(s)}function Yi(s){s.A||(s.A=!0,It(s,"complete"),It(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,It(this,"complete"),It(this,"abort"),zn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),st.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ji(this):this.bb())},r.bb=function(){Ji(this)};function Ji(s){if(s.h&&typeof a<"u"&&(!s.v[1]||zt(s)!=4||s.Z()!=2)){if(s.u&&zt(s)==4)Ti(s.Ea,0,s);else if(It(s,"readystatechange"),zt(s)==4){s.h=!1;try{const N=s.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=N===0){var A=String(s.D).match(Bi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Hc.test(A?A.toLowerCase():"")}u=f}if(u)It(s,"complete"),It(s,"success");else{s.m=6;try{var x=2<zt(s)?s.g.statusText:""}catch{x=""}s.l=x+" ["+s.Z()+"]",Yi(s)}}finally{zn(s)}}}}function zn(s,l){if(s.g){Zi(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||It(s,"ready");try{u.onreadystatechange=f}catch{}}}function Zi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function zt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Cc(l)}};function to(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Yc(s){const l={};s=(s.g&&2<=zt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(W(s[f]))continue;var u=I(s[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const x=l[A]||[];l[A]=x,x.push(u)}_(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sn(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function eo(s){this.Aa=0,this.i=[],this.j=new Ye,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,s),this.cb=sn("retryDelaySeedMs",1e4,s),this.Wa=sn("forwardChannelMaxRetries",2,s),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(s&&s.concurrentRequestLimit),this.Da=new Qc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=eo.prototype,r.la=8,r.G=1,r.connect=function(s,l,u,f){At(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=uo(this,null,this.W),Gn(this)};function rs(s){if(no(s),s.G==3){var l=s.U++,u=$t(s.I);if(et(u,"SID",s.K),et(u,"RID",l),et(u,"TYPE","terminate"),on(s,u),l=new Xt(s,s.j,l),l.L=2,l.v=qn($t(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=ho(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Fn(l)}co(s)}function Kn(s){s.g&&(is(s),s.g.cancel(),s.g=null)}function no(s){Kn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Qn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Gn(s){if(!ji(s.h)&&!s.s){s.s=!0;var l=s.Ga;de||pi(),Ke||(de(),Ke=!0),jr.add(l,s),s.B=0}}function Jc(s,l){return Fi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Xe(w(s.Ga,s,l),lo(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Xt(this,this.j,s);let x=this.o;if(this.S&&(x?(x=p(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(A.H=x,x=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=so(this,A,l),u=$t(this.I),et(u,"RID",s),et(u,"CVER",22),this.D&&et(u,"X-HTTP-Session-Id",this.D),on(this,u),x&&(this.O?l="headers="+encodeURIComponent(String(Hi(x)))+"&"+l:this.m&&ns(u,this.m,x)),es(this.h,A),this.Ua&&et(u,"TYPE","init"),this.P?(et(u,"$req",l),et(u,"SID","null"),A.T=!0,Yr(A,u,null)):Yr(A,u,l),this.G=2}}else this.G==3&&(s?ro(this,s):this.i.length==0||ji(this.h)||ro(this))};function ro(s,l){var u;l?u=l.l:u=s.U++;const f=$t(s.I);et(f,"SID",s.K),et(f,"RID",u),et(f,"AID",s.T),on(s,f),s.m&&s.o&&ns(f,s.m,s.o),u=new Xt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=so(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),es(s.h,u),Yr(u,f,l)}function on(s,l){s.H&&k(s.H,function(u,f){et(l,f,u)}),s.l&&qi({},function(u,f){et(l,f,u)})}function so(s,l,u){u=Math.min(s.i.length,u);var f=s.l?w(s.l.Na,s.l,s):null;t:{var A=s.i;let x=-1;for(;;){const N=["count="+u];x==-1?0<u?(x=A[0].g,N.push("ofs="+x)):x=0:N.push("ofs="+x);let Z=!0;for(let dt=0;dt<u;dt++){let Y=A[dt].g;const _t=A[dt].map;if(Y-=x,0>Y)x=Math.max(0,A[dt].g-100),Z=!1;else try{Wc(_t,N,"req"+Y+"_")}catch{f&&f(_t)}}if(Z){f=N.join("&");break t}}}return s=s.i.splice(0,u),l.D=s,f}function io(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;de||pi(),Ke||(de(),Ke=!0),jr.add(l,s),s.v=0}}function ss(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Xe(w(s.Fa,s),lo(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,oo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Xe(w(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Kn(this),oo(this))};function is(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function oo(s){s.g=new Xt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=$t(s.qa);et(l,"RID","rpc"),et(l,"SID",s.K),et(l,"AID",s.T),et(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&et(l,"TO",s.ja),et(l,"TYPE","xmlhttp"),on(s,l),s.m&&s.o&&ns(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=qn($t(l)),u.m=null,u.P=!0,ki(u,s)}r.Za=function(){this.C!=null&&(this.C=null,Kn(this),ss(this),At(19))};function Qn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function ao(s,l){var u=null;if(s.g==l){Qn(s),is(s),s.g=null;var f=2}else if(ts(s.h,l))u=l.D,Oi(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=s.B;f=Ln(),It(f,new Pi(f,u)),Gn(s)}else io(s);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Jc(s,l)||f==2&&ss(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),A){case 1:ge(s,5);break;case 4:ge(s,10);break;case 3:ge(s,6);break;default:ge(s,2)}}}function lo(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function ge(s,l){if(s.j.info("Error code "+l),l==2){var u=w(s.fb,s),f=s.Xa;const A=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||On(f,"https"),qn(f),A?Kc(f.toString(),u):Gc(f.toString(),u)}else At(2);s.G=0,s.l&&s.l.sa(l),co(s),no(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function co(s){if(s.G=0,s.ka=[],s.l){const l=Ui(s.h);(l.length!=0||s.i.length!=0)&&(V(s.ka,l),V(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function uo(s,l,u){var f=u instanceof pe?$t(u):new pe(u);if(f.g!="")l&&(f.g=l+"."+f.g),Un(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var x=new pe(null);f&&On(x,f),l&&(x.g=l),A&&Un(x,A),u&&(x.l=u),f=x}return u=s.D,l=s.ya,u&&l&&et(f,u,l),et(f,"VER",s.la),on(s,f),f}function ho(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new st(new Bn({eb:u})):new st(s.pa),l.Ha(s.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function fo(){}r=fo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Wn(){}Wn.prototype.g=function(s,l){return new Pt(s,l)};function Pt(s,l){yt.call(this),this.g=new eo(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!W(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!W(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new be(this)}S(Pt,yt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){rs(this.g)},Pt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Kr(s),s=u);l.i.push(new Lc(l.Ya++,s)),l.G==3&&Gn(l)},Pt.prototype.N=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,Pt.aa.N.call(this)};function mo(s){Qr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const u in l){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}S(mo,Qr);function po(){Wr.call(this),this.status=1}S(po,Wr);function be(s){this.g=s}S(be,fo),be.prototype.ua=function(){It(this.g,"a")},be.prototype.ta=function(s){It(this.g,new mo(s))},be.prototype.sa=function(s){It(this.g,new po)},be.prototype.ra=function(){It(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,ja=function(){return new Wn},Ma=function(){return Ln()},La=fe,fs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,rr=Mn,Si.COMPLETE="complete",Da=Si,bi.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",yt.prototype.listen=yt.prototype.K,an=bi,st.prototype.listenOnce=st.prototype.L,st.prototype.getLastError=st.prototype.Ka,st.prototype.getLastErrorCode=st.prototype.Ba,st.prototype.getStatus=st.prototype.Z,st.prototype.getResponseJson=st.prototype.Oa,st.prototype.getResponseText=st.prototype.oa,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Ha,ka=st}).apply(typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{});const Io="@firebase/firestore",Ao="4.7.10";/**
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
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */const _e=new ru("@firebase/firestore");function Re(){return _e.logLevel}function j(r,...t){if(_e.logLevel<=Kt.DEBUG){const e=t.map(Ns);_e.debug(`Firestore (${Ue}): ${r}`,...e)}}function Qt(r,...t){if(_e.logLevel<=Kt.ERROR){const e=t.map(Ns);_e.error(`Firestore (${Ue}): ${r}`,...e)}}function ke(r,...t){if(_e.logLevel<=Kt.WARN){const e=t.map(Ns);_e.warn(`Firestore (${Ue}): ${r}`,...e)}}function Ns(r){if(typeof r=="string")return r;try{/**
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
 */function U(r="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+r;throw Qt(t),new Error(t)}function J(r,t){r||U()}function B(r,t){return r}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends ou{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Et.UNAUTHENTICATED))}shutdown(){}}class ch{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class uh{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(J(typeof n.accessToken=="string"),new Fa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string"),new Et(t)}}class hh{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dh{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new hh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,au(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){J(this.o===void 0);const n=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new bo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(J(typeof e.token=="string"),this.R=e.token,new bo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function Oa(){return new TextEncoder}/**
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
 */class Ua{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=mh(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function ms(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return z(n,i);{const o=Oa(),a=ph(o.encode(xo(r,e)),o.encode(xo(t,e)));return a!==0?a:z(n,i)}}e+=n>65535?2:1}return z(r.length,t.length)}function xo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function ph(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return z(r[e],t[e]);return z(r.length,t.length)}function De(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const Ro=-62135596800,Co=1e6;class lt{static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Co);return new lt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ro)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Co}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ro;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class q{static fromTimestamp(t){return new q(t)}static min(){return new q(new lt(0,0))}static max(){return new q(new lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Po="__name__";class Ft{constructor(t,e,n){e===void 0?e=0:e>t.length&&U(),n===void 0?n=t.length-e:n>t.length-e&&U(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ft.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ft?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ft.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return z(t.length,e.length)}static compareSegments(t,e){const n=Ft.isNumericId(t),i=Ft.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ft.extractNumericId(t).compare(Ft.extractNumericId(e)):ms(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return te.fromString(t.substring(4,t.length-2))}}class nt extends Ft{construct(t,e,n){return new nt(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new nt(e)}static emptyPath(){return new nt([])}}const gh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Ft{construct(t,e,n){return new mt(t,e,n)}static isValidIdentifier(t){return gh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Po}static keyField(){return new mt([Po])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(nt.fromString(t))}static fromName(t){return new O(nt.fromString(t).popFirst(5))}static empty(){return new O(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new nt(t.slice()))}}/**
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
 */const gn=-1;function yh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=q.fromTimestamp(n===1e9?new lt(e+1,0):new lt(e,n));return new re(i,O.empty(),t)}function _h(r){return new re(r.readTime,r.key,gn)}class re{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new re(q.min(),O.empty(),gn)}static max(){return new re(q.max(),O.empty(),gn)}}function vh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
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
 */const Th="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Eh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qe(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==Th)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,n)=>{e(t)})}static reject(t){return new P((e,n)=>{n(t)})}static waitFor(t){return new P((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next(i=>i?P.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new P((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new P((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function wh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Er.ae=-1;/**
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
 */const ks=-1;function wr(r){return r==null}function cr(r){return r===0&&1/r==-1/0}function Ih(r){return typeof r=="number"&&Number.isInteger(r)&&!cr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const qa="";function Ah(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=So(t)),t=bh(r.get(e),t);return So(t)}function bh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case qa:e+="";break;default:e+=o}}return e}function So(r){return r+qa+""}/**
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
 */function Vo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ce(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ba(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class rt{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jn(this.root,t,this.comparator,!0)}}class Jn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ft.RED,this.left=i??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ft(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(t){return new No(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class No{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new St([])}unionWith(t){let e=new ct(mt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class $a extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $a("Invalid base64 string: "+o):o}}(t);return new pt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const xh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(r){if(J(!!r),typeof r=="string"){let t=0;const e=xh.exec(r);if(J(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ie(r){return typeof r=="string"?pt.fromBase64String(r):pt.fromUint8Array(r)}/**
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
 */const za="server_timestamp",Ka="__type__",Ga="__previous_value__",Qa="__local_write_time__";function Ds(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ka])===null||e===void 0?void 0:e.stringValue)===za}function Ir(r){const t=r.mapValue.fields[Ga];return Ds(t)?Ir(t):t}function yn(r){const t=se(r.mapValue.fields[Qa].timestampValue);return new lt(t.seconds,t.nanos)}/**
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
 */class Rh{constructor(t,e,n,i,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const ur="(default)";class _n{constructor(t,e){this.projectId=t,this.database=e||ur}static empty(){return new _n("","")}get isDefaultDatabase(){return this.database===ur}isEqual(t){return t instanceof _n&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Wa="__type__",Ha="__max__",Zn={mapValue:{fields:{__type__:{stringValue:Ha}}}},Xa="__vector__",hr="value";function oe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ds(r)?4:Ph(r)?9007199254740991:Ch(r)?10:11:U()}function Bt(r,t){if(r===t)return!0;const e=oe(r);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return yn(r).isEqual(yn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=se(i.timestampValue),c=se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return ie(i.bytesValue).isEqual(ie(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return it(i.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return it(i.integerValue)===it(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=it(i.doubleValue),c=it(o.doubleValue);return a===c?cr(a)===cr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return De(r.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Vo(a)!==Vo(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Bt(a[h],c[h])))return!1;return!0}(r,t);default:return U()}}function vn(r,t){return(r.values||[]).find(e=>Bt(e,t))!==void 0}function Le(r,t){if(r===t)return 0;const e=oe(r),n=oe(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=it(o.integerValue||o.doubleValue),h=it(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return ko(r.timestampValue,t.timestampValue);case 4:return ko(yn(r),yn(t));case 5:return ms(r.stringValue,t.stringValue);case 6:return function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=z(c[d],h[d]);if(m!==0)return m}return z(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=z(it(o.latitude),it(a.latitude));return c!==0?c:z(it(o.longitude),it(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Do(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const T=o.fields||{},w=a.fields||{},R=(c=T[hr])===null||c===void 0?void 0:c.arrayValue,S=(h=w[hr])===null||h===void 0?void 0:h.arrayValue,D=z(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:Do(R,S)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Zn.mapValue&&a===Zn.mapValue)return 0;if(o===Zn.mapValue)return 1;if(a===Zn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const w=ms(h[T],m[T]);if(w!==0)return w;const R=Le(c[h[T]],d[m[T]]);if(R!==0)return R}return z(h.length,m.length)}(r.mapValue,t.mapValue);default:throw U()}}function ko(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=se(r),n=se(t),i=z(e.seconds,n.seconds);return i!==0?i:z(e.nanos,n.nanos)}function Do(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Le(e[i],n[i]);if(o)return o}return z(e.length,n.length)}function Me(r){return ps(r)}function ps(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=se(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ie(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ps(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ps(e.fields[a])}`;return i+"}"}(r.mapValue):U()}function sr(r){switch(oe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ir(r);return t?16+sr(t):16;case 5:return 2*r.stringValue.length;case 6:return ie(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+sr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return ce(n.fields,(o,a)=>{i+=o.length+sr(a)}),i}(r.mapValue);default:throw U()}}function Lo(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function gs(r){return!!r&&"integerValue"in r}function Ls(r){return!!r&&"arrayValue"in r}function Mo(r){return!!r&&"nullValue"in r}function jo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ir(r){return!!r&&"mapValue"in r}function Ch(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Wa])===null||e===void 0?void 0:e.stringValue)===Xa}function hn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ce(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=hn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ph(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ha}/**
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
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ir(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=mt.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=hn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());ir(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];ir(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ce(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Ct(hn(this.value))}}function Ya(r){const t=[];return ce(r.fields,(e,n)=>{const i=new mt([e]);if(ir(n)){const o=Ya(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new St(t)}/**
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
 */class wt{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new wt(t,0,q.min(),q.min(),q.min(),Ct.empty(),0)}static newFoundDocument(t,e,n,i){return new wt(t,1,e,q.min(),n,i,0)}static newNoDocument(t,e){return new wt(t,2,e,q.min(),q.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new wt(t,3,e,q.min(),q.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof wt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dr{constructor(t,e){this.position=t,this.inclusive=e}}function Fo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=Le(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Oo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Bt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Tn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Sh(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ja{}class at extends Ja{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Nh(t,e,n):e==="array-contains"?new Lh(t,n):e==="in"?new Mh(t,n):e==="not-in"?new jh(t,n):e==="array-contains-any"?new Fh(t,n):new at(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new kh(t,n):new Dh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Le(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Le(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ja{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Mt(t,e)}matches(t){return Za(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Za(r){return r.op==="and"}function tl(r){return Vh(r)&&Za(r)}function Vh(r){for(const t of r.filters)if(t instanceof Mt)return!1;return!0}function ys(r){if(r instanceof at)return r.field.canonicalString()+r.op.toString()+Me(r.value);if(tl(r))return r.filters.map(t=>ys(t)).join(",");{const t=r.filters.map(e=>ys(e)).join(",");return`${r.op}(${t})`}}function el(r,t){return r instanceof at?function(n,i){return i instanceof at&&n.op===i.op&&n.field.isEqual(i.field)&&Bt(n.value,i.value)}(r,t):r instanceof Mt?function(n,i){return i instanceof Mt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&el(a,i.filters[c]),!0):!1}(r,t):void U()}function nl(r){return r instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`}(r):r instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(nl).join(" ,")+"}"}(r):"Filter"}class Nh extends at{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class kh extends at{constructor(t,e){super(t,"in",e),this.keys=rl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dh extends at{constructor(t,e){super(t,"not-in",e),this.keys=rl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function rl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class Lh extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ls(e)&&vn(e.arrayValue,this.value)}}class Mh extends at{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class jh extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vn(this.value.arrayValue,e)}}class Fh extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ls(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>vn(this.value.arrayValue,n))}}/**
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
 */class Oh{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function Uo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Oh(r,t,e,n,i,o,a)}function Ms(r){const t=B(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>ys(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Me(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Me(n)).join(",")),t.le=e}return t.le}function js(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Sh(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!el(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Oo(r.startAt,t.startAt)&&Oo(r.endAt,t.endAt)}function _s(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class $e{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Uh(r,t,e,n,i,o,a,c){return new $e(r,t,e,n,i,o,a,c)}function Fs(r){return new $e(r)}function qo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function sl(r){return r.collectionGroup!==null}function dn(r){const t=B(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ct(mt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Tn(o,n))}),e.has(mt.keyField().canonicalString())||t.he.push(new Tn(mt.keyField(),n))}return t.he}function Ut(r){const t=B(r);return t.Pe||(t.Pe=qh(t,dn(r))),t.Pe}function qh(r,t){if(r.limitType==="F")return Uo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Tn(i.field,o)});const e=r.endAt?new dr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new dr(r.startAt.position,r.startAt.inclusive):null;return Uo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function vs(r,t){const e=r.filters.concat([t]);return new $e(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ts(r,t,e){return new $e(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ar(r,t){return js(Ut(r),Ut(t))&&r.limitType===t.limitType}function il(r){return`${Ms(Ut(r))}|lt:${r.limitType}`}function Ce(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>nl(i)).join(", ")}]`),wr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Me(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Me(i)).join(",")),`Target(${n})`}(Ut(r))}; limitType=${r.limitType})`}function br(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of dn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,h){const d=Fo(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,dn(n),i)||n.endAt&&!function(a,c,h){const d=Fo(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,dn(n),i))}(r,t)}function Bh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function ol(r){return(t,e)=>{let n=!1;for(const i of dn(r)){const o=$h(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function $h(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Le(h,d):U()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return U()}}/**
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
 */class Te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ce(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ba(this.inner)}size(){return this.innerSize}}/**
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
 */const zh=new rt(O.comparator);function Wt(){return zh}const al=new rt(O.comparator);function ln(...r){let t=al;for(const e of r)t=t.insert(e.key,e);return t}function ll(r){let t=al;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ye(){return fn()}function cl(){return fn()}function fn(){return new Te(r=>r.toString(),(r,t)=>r.isEqual(t))}const Kh=new rt(O.comparator),Gh=new ct(O.comparator);function Q(...r){let t=Gh;for(const e of r)t=t.add(e);return t}const Qh=new ct(z);function Wh(){return Qh}/**
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
 */function Os(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(t)?"-0":t}}function ul(r){return{integerValue:""+r}}function Hh(r,t){return Ih(t)?ul(t):Os(r,t)}/**
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
 */class xr{constructor(){this._=void 0}}function Xh(r,t,e){return r instanceof fr?function(i,o){const a={fields:{[Ka]:{stringValue:za},[Qa]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Ds(o)&&(o=Ir(o)),o&&(a.fields[Ga]=o),{mapValue:a}}(e,t):r instanceof En?dl(r,t):r instanceof wn?fl(r,t):function(i,o){const a=hl(i,o),c=Bo(a)+Bo(i.Ie);return gs(a)&&gs(i.Ie)?ul(c):Os(i.serializer,c)}(r,t)}function Yh(r,t,e){return r instanceof En?dl(r,t):r instanceof wn?fl(r,t):e}function hl(r,t){return r instanceof mr?function(n){return gs(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class fr extends xr{}class En extends xr{constructor(t){super(),this.elements=t}}function dl(r,t){const e=ml(t);for(const n of r.elements)e.some(i=>Bt(i,n))||e.push(n);return{arrayValue:{values:e}}}class wn extends xr{constructor(t){super(),this.elements=t}}function fl(r,t){let e=ml(t);for(const n of r.elements)e=e.filter(i=>!Bt(i,n));return{arrayValue:{values:e}}}class mr extends xr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Bo(r){return it(r.integerValue||r.doubleValue)}function ml(r){return Ls(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Jh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof En&&i instanceof En||n instanceof wn&&i instanceof wn?De(n.elements,i.elements,Bt):n instanceof mr&&i instanceof mr?Bt(n.Ie,i.Ie):n instanceof fr&&i instanceof fr}(r.transform,t.transform)}class Zh{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function or(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Rr{}function pl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Cr(r.key,bt.none()):new In(r.key,r.data,bt.none());{const e=r.data,n=Ct.empty();let i=new ct(mt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new ue(r.key,n,new St(i.toArray()),bt.none())}}function td(r,t,e){r instanceof In?function(i,o,a){const c=i.value.clone(),h=zo(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ue?function(i,o,a){if(!or(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=zo(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(gl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function mn(r,t,e,n){return r instanceof In?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=o.value.clone(),m=Ko(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ue?function(o,a,c,h){if(!or(o.precondition,a))return c;const d=Ko(o.fieldTransforms,h,a),m=a.data;return m.setAll(gl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,a,c){return or(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function ed(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=hl(n.transform,i||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(n.field,o))}return e||null}function $o(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&De(n,i,(o,a)=>Jh(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class In extends Rr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ue extends Rr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function gl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function zo(r,t,e){const n=new Map;J(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,Yh(a,c,e[i]))}return n}function Ko(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,Xh(o,a,t))}return n}class Cr extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nd extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rd{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&td(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=cl();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=pl(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(q.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,n)=>$o(e,n))&&De(this.baseMutations,t.baseMutations,(e,n)=>$o(e,n))}}class Us{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){J(t.mutations.length===n.length);let i=function(){return Kh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Us(t,e,n,i)}}/**
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
 */class sd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class id{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ot,X;function od(r){switch(r){case C.OK:return U();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return U()}}function yl(r){if(r===void 0)return Qt("GRPC error has no .code"),C.UNKNOWN;switch(r){case ot.OK:return C.OK;case ot.CANCELLED:return C.CANCELLED;case ot.UNKNOWN:return C.UNKNOWN;case ot.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ot.INTERNAL:return C.INTERNAL;case ot.UNAVAILABLE:return C.UNAVAILABLE;case ot.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ot.NOT_FOUND:return C.NOT_FOUND;case ot.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ot.ABORTED:return C.ABORTED;case ot.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ot.DATA_LOSS:return C.DATA_LOSS;default:return U()}}(X=ot||(ot={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ad=new te([4294967295,4294967295],0);function Go(r){const t=Oa().encode(r),e=new Na;return e.update(t),new Uint8Array(e.digest())}function Qo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,n],0),new te([i,o],0)]}class qs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new cn(`Invalid padding: ${e}`);if(n<0)throw new cn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new cn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new cn(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=te.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(te.fromNumber(n)));return i.compare(ad)===1&&(i=new te([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Go(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,i,o);if(!this.Re(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new qs(o,i,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ee===0)return;const e=Go(t),[n,i]=Qo(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,i,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class cn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,An.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Pr(q.min(),i,new rt(z),Wt(),Q())}}class An{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new An(n,e,Q(),Q(),Q())}}/**
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
 */class ar{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class _l{constructor(t,e){this.targetId=t,this.ge=e}}class vl{constructor(t,e,n=pt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.pe=0,this.ye=Ho(),this.we=pt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=Q(),e=Q(),n=Q();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:U()}}),new An(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=Ho()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,J(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ld{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Wt(),this.$e=tr(),this.Ue=tr(),this.Ke=new rt(z)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(_s(o))if(n===0){const a=new O(o.path);this.ze(e,a,wt.newNoDocument(a,q.min()))}else J(n===1);else{const a=this.et(e);if(a!==n){const c=this.tt(t),h=c?this.nt(c,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=ie(n).toUint8Array()}catch(h){if(h instanceof $a)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new qs(a,i,o)}catch(h){return ke(h instanceof cn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const c=this.Xe(a);if(c){if(o.current&&_s(c.target)){const h=new O(c.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,wt.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let n=Q();this.Ue.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const i=new Pr(t,e,this.Ke,this.Qe,n);return this.Qe=Wt(),this.$e=tr(),this.Ue=tr(),this.Ke=new rt(z),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Wo,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new ct(z),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new ct(z),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Wo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function tr(){return new rt(O.comparator)}function Ho(){return new rt(O.comparator)}const cd={asc:"ASCENDING",desc:"DESCENDING"},ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hd={and:"AND",or:"OR"};class dd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(r,t){return r.useProto3Json||wr(t)?t:{value:t}}function pr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function fd(r,t){return pr(r,t.toTimestamp())}function qt(r){return J(!!r),q.fromTimestamp(function(e){const n=se(e);return new lt(n.seconds,n.nanos)}(r))}function Bs(r,t){return ws(r,t).canonicalString()}function ws(r,t){const e=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function El(r){const t=nt.fromString(r);return J(xl(t)),t}function Is(r,t){return Bs(r.databaseId,t.path)}function as(r,t){const e=El(t);if(e.get(1)!==r.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(Il(e))}function wl(r,t){return Bs(r.databaseId,t)}function md(r){const t=El(r);return t.length===4?nt.emptyPath():Il(t)}function As(r){return new nt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Il(r){return J(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Xo(r,t,e){return{name:Is(r,t),fields:e.value.mapValue.fields}}function pd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string"),pt.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array),pt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?C.UNKNOWN:yl(d.code);return new L(m,d.message||"")}(a);e=new vl(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=as(r,n.document.name),o=qt(n.document.updateTime),a=n.document.createTime?qt(n.document.createTime):q.min(),c=new Ct({mapValue:{fields:n.document.fields}}),h=wt.newFoundDocument(i,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new ar(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=as(r,n.document),o=n.readTime?qt(n.readTime):q.min(),a=wt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new ar([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=as(r,n.document),o=n.removedTargetIds||[];e=new ar([],o,i,null)}else{if(!("filter"in t))return U();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new id(i,o),c=n.targetId;e=new _l(c,a)}}return e}function gd(r,t){let e;if(t instanceof In)e={update:Xo(r,t.key,t.value)};else if(t instanceof Cr)e={delete:Is(r,t.key)};else if(t instanceof ue)e={update:Xo(r,t.key,t.data),updateMask:bd(t.fieldMask)};else{if(!(t instanceof nd))return U();e={verify:Is(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof En)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof wn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mr)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw U()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:fd(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(r,t.precondition)),e}function yd(r,t){return r&&r.length>0?(J(t!==void 0),r.map(e=>function(i,o){let a=i.updateTime?qt(i.updateTime):qt(o);return a.isEqual(q.min())&&(a=qt(o)),new Zh(a,i.transformResults||[])}(e,t))):[]}function _d(r,t){return{documents:[wl(r,t.path)]}}function vd(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=wl(r,i);const o=function(d){if(d.length!==0)return bl(Mt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Pe(w.field),direction:wd(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Es(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function Td(r){let t=md(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){J(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const w=Al(T);return w instanceof Mt&&tl(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(w=>function(S){return new Tn(Se(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,wr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(T){const w=!!T.before,R=T.values||[];return new dr(R,w)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const w=!T.before,R=T.values||[];return new dr(R,w)}(e.endAt)),Uh(t,i,a,o,c,"F",h,d)}function Ed(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Al(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Se(e.unaryFilter.field);return at.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Se(e.unaryFilter.field);return at.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return at.create(a,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(r):r.fieldFilter!==void 0?function(e){return at.create(Se(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(n=>Al(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(r):U()}function wd(r){return cd[r]}function Id(r){return ud[r]}function Ad(r){return hd[r]}function Pe(r){return{fieldPath:r.canonicalString()}}function Se(r){return mt.fromServerFormat(r.fieldPath)}function bl(r){return r instanceof at?function(e){if(e.op==="=="){if(jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Mo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:Id(e.op),value:e.value}}}(r):r instanceof Mt?function(e){const n=e.getFilters().map(i=>bl(i));return n.length===1?n[0]:{compositeFilter:{op:Ad(e.op),filters:n}}}(r):U()}function bd(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function xl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Zt{constructor(t,e,n,i,o=q.min(),a=q.min(),c=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class xd{constructor(t){this.Tt=t}}function Rd(r){const t=Td({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ts(t,t.limit,"L"):t}/**
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
 */class Cd{constructor(){this.Tn=new Pd}addToCollectionParentIndex(t,e){return this.Tn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(re.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Pd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ct(nt.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ct(nt.comparator)).toArray()}}/**
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
 */const Yo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rl=41943040;class Rt{static withCacheSize(t){return new Rt(t,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(Rl,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
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
 */class je{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new je(0)}static Kn(){return new je(-1)}}/**
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
 */const Jo="LruGarbageCollector",Sd=1048576;function Zo([r,t],[e,n]){const i=z(r,e);return i===0?z(t,n):i}class Vd{constructor(t){this.Hn=t,this.buffer=new ct(Zo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Zo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Nd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){j(Jo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?j(Jo,"Ignoring IndexedDB error during garbage collection: ",e):await qe(e)}await this.er(3e5)})}}class kd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return P.resolve(Er.ae);const n=new Vd(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Yo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,a=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(n=T,c=Date.now(),this.removeTargets(t,n,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(T=>(d=Date.now(),Re()<=Kt.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Dd(r,t){return new kd(r,t)}/**
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
 */class Ld{constructor(){this.changes=new Te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,wt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Md{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class jd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&mn(n.mutation,i,St.empty(),lt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,Q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=Q()){const i=ye();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=ln();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=ye();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,Q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=Wt();const a=fn(),c=function(){return fn()}();return e.forEach((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof ue)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),mn(m.mutation,d,m.mutation.getFieldMask(),lt.now())):a.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var T;return c.set(d,new Md(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const n=fn();let i=new rt((a,c)=>a-c),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||St.empty();m=c.applyToLocalView(d,m),n.set(h,m);const T=(i.get(c.batchId)||Q()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,T=cl();m.forEach(w=>{if(!o.has(w)){const R=pl(e.get(w),n.get(w));R!==null&&T.set(w,R),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return P.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):sl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(ye());let c=gn,h=o;return a.next(d=>P.forEach(d,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Q())).next(m=>({batchId:c,changes:ll(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let i=ln();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=ln();return this.indexManager.getCollectionParents(t,o).next(c=>P.forEach(c,h=>{const d=function(T,w){return new $e(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,wt.newInvalidDocument(m)))});let c=ln();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&mn(m.mutation,d,St.empty(),lt.now()),br(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class Fd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return P.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:qt(i.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:Rd(i.bundledQuery),readTime:qt(i.readTime)}}(e)),P.resolve()}}/**
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
 */class Od{constructor(){this.overlays=new rt(O.comparator),this.Rr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ye();return P.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=ye(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=ye(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return P.resolve(c)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new sd(e,n));let o=this.Rr.get(e);o===void 0&&(o=Q(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
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
 */class Ud{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class $s{constructor(){this.Vr=new ct(ht.mr),this.gr=new ct(ht.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new ht(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new ht(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new O(new nt([])),n=new ht(e,t),i=new ht(e,t+1),o=[];return this.gr.forEachInRange([n,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new O(new nt([])),n=new ht(e,t),i=new ht(e,t+1);let o=Q();return this.gr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ht(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ht{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return O.comparator(t.key,e.key)||z(t.Cr,e.Cr)}static pr(t,e){return z(t.Cr,e.Cr)||O.comparator(t.key,e.key)}}/**
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
 */class qd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new ct(ht.mr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rd(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new ht(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ks:this.Fr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ht(e,0),i=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],a=>{const c=this.Or(a.Cr);o.push(c)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ct(z);return e.forEach(i=>{const o=new ht(i,0),a=new ht(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{n=n.add(c.Cr)})}),P.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const a=new ht(new O(o),0);let c=new ct(z);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Cr)),!0)},a),P.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){J(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return P.forEach(e.mutations,i=>{const o=new ht(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new ht(e,0),i=this.Mr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bd{constructor(t){this.kr=t,this.docs=function(){return new rt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():wt.newInvalidDocument(e))}getEntries(t,e){let n=Wt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():wt.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Wt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||vh(_h(m),n)<=0||(i.has(m.key)||br(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){U()}qr(t,e){return P.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new $d(this)}getSize(t){return P.resolve(this.size)}}class $d extends Ld{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),P.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class zd{constructor(t){this.persistence=t,this.Qr=new Te(e=>Ms(e),js),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.$r=0,this.Ur=new $s,this.targetCount=0,this.Kr=je.Un()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),P.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new je(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.zn(e),P.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.Ur.containsKey(e))}}/**
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
 */class Cl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Er(0),this.zr=!1,this.zr=!0,this.jr=new Ud,this.referenceDelegate=t(this),this.Hr=new zd(this),this.indexManager=new Cd,this.remoteDocumentCache=function(i){return new Bd(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new xd(e),this.Yr=new Fd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new qd(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){j("MemoryPersistence","Starting transaction:",t);const i=new Kd(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return P.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class Kd extends Eh{constructor(t){super(),this.currentSequenceNumber=t}}class zs{constructor(t){this.persistence=t,this.ti=new $s,this.ni=null}static ri(t){return new zs(t)}get ii(){if(this.ni)return this.ni;throw U()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),P.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.ii,n=>{const i=O.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,q.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return P.or([()=>P.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.oi=new Te(n=>Ah(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Dd(this,e)}static ri(t,e){return new gr(t,e)}Zr(){}Xr(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return P.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?P.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,a=>this.ar(t,a,e).next(c=>{c||(n++,o.removeEntry(a,q.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),P.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=sr(t.data.value)),e}ar(t,e,n){return P.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ks{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=Q(),i=Q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ks(t,e.fromCache,n,i)}}/**
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
 */class Gd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Qd{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return mu()?8:wh(pu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Gd;return this._s(t,e,a).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,a,c.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(Re()<=Kt.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),P.resolve()):(Re()<=Kt.DEBUG&&j("QueryEngine","Query:",Ce(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(Re()<=Kt.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):P.resolve())}rs(t,e){if(qo(e))return P.resolve(null);let n=Ut(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ts(e,null,"F"),n=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=Q(...o);return this.ns.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.cs(e,c);return this.ls(e,d,a,h.readTime)?this.rs(t,Ts(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,n,i){return qo(e)||i.isEqual(q.min())?P.resolve(null):this.ns.getDocuments(t,n).next(o=>{const a=this.cs(e,o);return this.ls(e,a,n,i)?P.resolve(null):(Re()<=Kt.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ce(e)),this.hs(t,a,e,yh(i,gn)).next(c=>c))})}cs(t,e){let n=new ct(ol(t));return e.forEach((i,o)=>{br(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return Re()<=Kt.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Ce(e)),this.ns.getDocumentsMatchingQuery(t,e,re.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Gs="LocalStore",Wd=3e8;class Hd{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new rt(z),this.Is=new Te(o=>Ms(o),js),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Xd(r,t,e,n){return new Hd(r,t,e,n)}async function Pl(r,t){const e=B(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=Q();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Yd(r,t){const e=B(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const T=d.batch,w=T.keys();let R=P.resolve();return w.forEach(S=>{R=R.next(()=>m.getEntry(h,S)).next(D=>{const V=d.docVersions.get(S);J(V!==null),D.version.compareTo(V)<0&&(T.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=Q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Sl(r){const t=B(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Jd(r,t){const e=B(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((m,T)=>{const w=i.get(T);if(!w)return;c.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,T)));let R=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?R=R.withResumeToken(pt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,n)),i=i.insert(T,R),function(D,V,G){return D.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Wd?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(w,R,m)&&c.push(e.Hr.updateTargetData(o,R))});let h=Wt(),d=Q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Zd(o,a,t.documentUpdates).next(m=>{h=m.Vs,d=m.fs})),!n.isEqual(q.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(T=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return P.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=i,o))}function Zd(r,t,e){let n=Q(),i=Q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Wt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(q.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):j(Gs,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:i}})}function tf(r,t){const e=B(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=ks),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ef(r,t){const e=B(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,P.resolve(i)):e.Hr.allocateTargetId(n).next(a=>(i=new Zt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function bs(r,t,e){const n=B(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Be(a))throw a;j(Gs,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function ta(r,t,e){const n=B(r);let i=q.min(),o=Q();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=B(h),w=T.Is.get(m);return w!==void 0?P.resolve(T.Ts.get(w)):T.Hr.getTargetData(d,m)}(n,a,Ut(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,t,e?i:q.min(),e?o:Q())).next(c=>(nf(n,Bh(t),c),{documents:c,gs:o})))}function nf(r,t,e){let n=r.Es.get(t)||q.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class ea{constructor(){this.activeTargetIds=Wh()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rf{constructor(){this.ho=new ea,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ea,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class sf{To(t){}shutdown(){}}/**
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
 */const na="ConnectivityMonitor";class ra{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){j(na,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){j(na,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let er=null;function xs(){return er===null?er=function(){return 268435456+Math.round(2147483648*Math.random())}():er++,"0x"+er.toString(16)}/**
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
 */const ls="RestConnection",of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class af{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===ur?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const a=xs(),c=this.bo(t,e.toUriEncodedString());j(ls,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,c,h,n).then(d=>(j(ls,`Received RPC '${t}' ${a}: `,d),d),d=>{throw ke(ls,`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",n),d})}Co(t,e,n,i,o,a){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=of[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
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
 */class lf{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const Tt="WebChannelConnection";class cf extends af{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=xs();return new Promise((a,c)=>{const h=new ka;h.setWithCredentials(!0),h.listenOnce(Da.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case rr.NO_ERROR:const m=h.getResponseJson();j(Tt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case rr.TIMEOUT:j(Tt,`RPC '${t}' ${o} timed out`),c(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case rr.HTTP_ERROR:const T=h.getStatus();if(j(Tt,`RPC '${t}' ${o} failed with status:`,T,"response text:",h.getResponseText()),T>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const S=function(V){const G=V.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(R.status);c(new L(S,R.message))}else c(new L(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new L(C.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{j(Tt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);j(Tt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,n,15)})}Wo(t,e,n){const i=xs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ja(),c=Ma(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");j(Tt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const T=a.createWebChannel(m,h);let w=!1,R=!1;const S=new lf({Fo:V=>{R?j(Tt,`Not sending because RPC '${t}' stream ${i} is closed:`,V):(w||(j(Tt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),w=!0),j(Tt,`RPC '${t}' stream ${i} sending:`,V),T.send(V))},Mo:()=>T.close()}),D=(V,G,W)=>{V.listen(G,H=>{try{W(H)}catch(M){setTimeout(()=>{throw M},0)}})};return D(T,an.EventType.OPEN,()=>{R||(j(Tt,`RPC '${t}' stream ${i} transport opened.`),S.Qo())}),D(T,an.EventType.CLOSE,()=>{R||(R=!0,j(Tt,`RPC '${t}' stream ${i} transport closed`),S.Uo())}),D(T,an.EventType.ERROR,V=>{R||(R=!0,ke(Tt,`RPC '${t}' stream ${i} transport errored:`,V),S.Uo(new L(C.UNAVAILABLE,"The operation could not be completed")))}),D(T,an.EventType.MESSAGE,V=>{var G;if(!R){const W=V.data[0];J(!!W);const H=W,M=(H==null?void 0:H.error)||((G=H[0])===null||G===void 0?void 0:G.error);if(M){j(Tt,`RPC '${t}' stream ${i} received error:`,M);const K=M.status;let k=function(y){const E=ot[y];if(E!==void 0)return yl(E)}(K),_=M.message;k===void 0&&(k=C.INTERNAL,_="Unknown error status: "+K+" with message "+M.message),R=!0,S.Uo(new L(k,_)),T.close()}else j(Tt,`RPC '${t}' stream ${i} received:`,W),S.Ko(W)}}),D(c,La.STAT_EVENT,V=>{V.stat===fs.PROXY?j(Tt,`RPC '${t}' stream ${i} detected buffering proxy`):V.stat===fs.NOPROXY&&j(Tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function cs(){return typeof document<"u"?document:null}/**
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
 */function Sr(r){return new dd(r,!0)}/**
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
 */class Vl{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const sa="PersistentStream";class Nl{constructor(t,e,n,i,o,a,c,h){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Vl(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return j(sa,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(j(sa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uf extends Nl{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=pd(this.serializer,t),n=function(o){if(!("targetChange"in o))return q.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?qt(a.readTime):q.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=As(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=_s(h)?{documents:_d(o,h)}:{query:vd(o,h).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Tl(o,a.resumeToken);const d=Es(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=pr(o,a.snapshotVersion.toTimestamp());const d=Es(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=Ed(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=As(this.serializer),e.removeTarget=t,this.I_(e)}}class hf extends Nl{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return J(!!t.streamToken),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){J(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=yd(t.writeResults,t.commitTime),n=qt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=As(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>gd(this.serializer,n))};this.I_(e)}}/**
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
 */class df{}class ff extends df{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,ws(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(C.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(t,ws(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(C.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class mf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Qt(e),this.N_=!1):j("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ve="RemoteStore";class pf{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{n.enqueueAndForget(async()=>{Ee(this)&&(j(ve,"Restarting streams for network reachability change."),await async function(h){const d=B(h);d.W_.add(4),await bn(d),d.j_.set("Unknown"),d.W_.delete(4),await Vr(d)}(this))})}),this.j_=new mf(n,i)}}async function Vr(r){if(Ee(r))for(const t of r.G_)await t(!0)}async function bn(r){for(const t of r.G_)await t(!1)}function kl(r,t){const e=B(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Xs(e)?Hs(e):ze(e).c_()&&Ws(e,t))}function Qs(r,t){const e=B(r),n=ze(e);e.K_.delete(t),n.c_()&&Dl(e,t),e.K_.size===0&&(n.c_()?n.P_():Ee(e)&&e.j_.set("Unknown"))}function Ws(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(r).y_(t)}function Dl(r,t){r.H_.Ne(t),ze(r).w_(t)}function Hs(r){r.H_=new ld({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),ze(r).start(),r.j_.B_()}function Xs(r){return Ee(r)&&!ze(r).u_()&&r.K_.size>0}function Ee(r){return B(r).W_.size===0}function Ll(r){r.H_=void 0}async function gf(r){r.j_.set("Online")}async function yf(r){r.K_.forEach((t,e)=>{Ws(r,t)})}async function _f(r,t){Ll(r),Xs(r)?(r.j_.q_(t),Hs(r)):r.j_.set("Unknown")}async function vf(r,t,e){if(r.j_.set("Online"),t instanceof vl&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.K_.delete(c),i.H_.removeTarget(c))}(r,t)}catch(n){j(ve,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yr(r,n)}else if(t instanceof ar?r.H_.We(t):t instanceof _l?r.H_.Ze(t):r.H_.je(t),!e.isEqual(q.min()))try{const n=await Sl(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.H_.ot(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(d);m&&o.K_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),Dl(o,h);const T=new Zt(m.target,h,d,m.sequenceNumber);Ws(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){j(ve,"Failed to raise snapshot:",n),await yr(r,n)}}async function yr(r,t,e){if(!Be(t))throw t;r.W_.add(1),await bn(r),r.j_.set("Offline"),e||(e=()=>Sl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{j(ve,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await Vr(r)})}function Ml(r,t){return t().catch(e=>yr(r,e,t))}async function Nr(r){const t=B(r),e=ae(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:ks;for(;Tf(t);)try{const i=await tf(t.localStore,n);if(i===null){t.U_.length===0&&e.P_();break}n=i.batchId,Ef(t,i)}catch(i){await yr(t,i)}jl(t)&&Fl(t)}function Tf(r){return Ee(r)&&r.U_.length<10}function Ef(r,t){r.U_.push(t);const e=ae(r);e.c_()&&e.S_&&e.b_(t.mutations)}function jl(r){return Ee(r)&&!ae(r).u_()&&r.U_.length>0}function Fl(r){ae(r).start()}async function wf(r){ae(r).C_()}async function If(r){const t=ae(r);for(const e of r.U_)t.b_(e.mutations)}async function Af(r,t,e){const n=r.U_.shift(),i=Us.from(n,t,e);await Ml(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Nr(r)}async function bf(r,t){t&&ae(r).S_&&await async function(n,i){if(function(a){return od(a)&&a!==C.ABORTED}(i.code)){const o=n.U_.shift();ae(n).h_(),await Ml(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Nr(n)}}(r,t),jl(r)&&Fl(r)}async function ia(r,t){const e=B(r);e.asyncQueue.verifyOperationInProgress(),j(ve,"RemoteStore received new credentials");const n=Ee(e);e.W_.add(3),await bn(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Vr(e)}async function xf(r,t){const e=B(r);t?(e.W_.delete(2),await Vr(e)):t||(e.W_.add(2),await bn(e),e.j_.set("Unknown"))}function ze(r){return r.J_||(r.J_=function(e,n,i){const o=B(e);return o.M_(),new uf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:gf.bind(null,r),No:yf.bind(null,r),Lo:_f.bind(null,r),p_:vf.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Xs(r)?Hs(r):r.j_.set("Unknown")):(await r.J_.stop(),Ll(r))})),r.J_}function ae(r){return r.Y_||(r.Y_=function(e,n,i){const o=B(e);return o.M_(),new hf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:wf.bind(null,r),Lo:bf.bind(null,r),D_:If.bind(null,r),v_:Af.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Nr(r)):(await r.Y_.stop(),r.U_.length>0&&(j(ve,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class Ys{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new Ys(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(r,t){if(Qt("AsyncQueue",`${t}: ${r}`),Be(r))return new L(C.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Ve{static emptySet(t){return new Ve(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=ln(),this.sortedSet=new rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ve;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class oa{constructor(){this.Z_=new rt(O.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):U():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Fe{constructor(t,e,n,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Fe(t,e,Ve.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ar(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Rf{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Cf{constructor(){this.queries=aa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=B(e),o=i.queries;i.queries=aa(),o.forEach((a,c)=>{for(const h of c.ta)h.onError(n)})})(this,new L(C.ABORTED,"Firestore shutting down"))}}function aa(){return new Te(r=>il(r),Ar)}async function Ol(r,t){const e=B(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new Rf,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Js(a,`Initialization of query '${Ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Zs(e)}async function Ul(r,t){const e=B(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Pf(r,t){const e=B(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.ta)c.oa(i)&&(n=!0);a.ea=i}}n&&Zs(e)}function Sf(r,t,e){const n=B(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function Zs(r){r.ia.forEach(t=>{t.next()})}var Rs,la;(la=Rs||(Rs={}))._a="default",la.Cache="cache";class ql{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Fe(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Fe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Rs.Cache}}/**
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
 */class Bl{constructor(t){this.key=t}}class $l{constructor(t){this.key=t}}class Vf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Q(),this.mutatedKeys=Q(),this.ya=ol(t),this.wa=new Ve(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new oa,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,T)=>{const w=i.get(m),R=br(this.query,T)?T:null,S=!!w&&this.mutatedKeys.has(w.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let V=!1;w&&R?w.data.isEqual(R.data)?S!==D&&(n.track({type:3,doc:R}),V=!0):this.va(w,R)||(n.track({type:2,doc:R}),V=!0,(h&&this.ya(R,h)>0||d&&this.ya(R,d)<0)&&(c=!0)):!w&&R?(n.track({type:0,doc:R}),V=!0):w&&!R&&(n.track({type:1,doc:w}),V=!0,(h||d)&&(c=!0)),V&&(R?(a=a.add(R),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,T)=>function(R,S){const D=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return D(R)-D(S)}(m.type,T.type)||this.ya(m.doc,T.doc)),this.Ca(n),i=i!=null&&i;const c=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new Fe(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new oa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=Q(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new $l(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new Bl(n))}),e}Oa(t){this.fa=t.gs,this.pa=Q();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Fe.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ti="SyncEngine";class Nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class kf{constructor(t){this.key=t,this.Ba=!1}}class Df{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Te(c=>il(c),Ar),this.qa=new Map,this.Qa=new Set,this.$a=new rt(O.comparator),this.Ua=new Map,this.Ka=new $s,this.Wa={},this.Ga=new Map,this.za=je.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Lf(r,t,e=!0){const n=Hl(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await zl(n,t,e,!0),i}async function Mf(r,t){const e=Hl(r);await zl(e,t,!0,!1)}async function zl(r,t,e,n){const i=await ef(r.localStore,Ut(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await jf(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&kl(r.remoteStore,i),c}async function jf(r,t,e,n,i){r.Ha=(T,w,R)=>async function(D,V,G,W){let H=V.view.ba(G);H.ls&&(H=await ta(D.localStore,V.query,!1).then(({documents:_})=>V.view.ba(_,H)));const M=W&&W.targetChanges.get(V.targetId),K=W&&W.targetMismatches.get(V.targetId)!=null,k=V.view.applyChanges(H,D.isPrimaryClient,M,K);return ua(D,V.targetId,k.Ma),k.snapshot}(r,T,w,R);const o=await ta(r.localStore,t,!0),a=new Vf(t,o.gs),c=a.ba(o.documents),h=An.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,h);ua(r,e,d.Ma);const m=new Nf(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function Ff(r,t,e){const n=B(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(a=>!Ar(a,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await bs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Qs(n.remoteStore,i.targetId),Cs(n,i.targetId)}).catch(qe)):(Cs(n,i.targetId),await bs(n.localStore,i.targetId,!0))}async function Of(r,t){const e=B(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Qs(e.remoteStore,n.targetId))}async function Uf(r,t,e){const n=Qf(r);try{const i=await function(a,c){const h=B(a),d=lt.now(),m=c.reduce((R,S)=>R.add(S.key),Q());let T,w;return h.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=Wt(),D=Q();return h.ds.getEntries(R,m).next(V=>{S=V,S.forEach((G,W)=>{W.isValidDocument()||(D=D.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(R,S)).next(V=>{T=V;const G=[];for(const W of c){const H=ed(W,T.get(W.key).overlayedDocument);H!=null&&G.push(new ue(W.key,H,Ya(H.value.mapValue),bt.exists(!0)))}return h.mutationQueue.addMutationBatch(R,d,G,c)}).next(V=>{w=V;const G=V.applyToLocalDocumentSet(T,D);return h.documentOverlayCache.saveOverlays(R,V.batchId,G)})}).then(()=>({batchId:w.batchId,changes:ll(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(c,h),a.Wa[a.currentUser.toKey()]=d}(n,i.batchId,e),await xn(n,i.changes),await Nr(n.remoteStore)}catch(i){const o=Js(i,"Failed to persist write");e.reject(o)}}async function Kl(r,t){const e=B(r);try{const n=await Jd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ua.get(o);a&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?J(a.Ba):i.removedDocuments.size>0&&(J(a.Ba),a.Ba=!1))}),await xn(e,n,t)}catch(n){await qe(n)}}function ca(r,t,e){const n=B(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,a)=>{const c=a.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=B(a);h.onlineState=c;let d=!1;h.queries.forEach((m,T)=>{for(const w of T.ta)w.sa(c)&&(d=!0)}),d&&Zs(h)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function qf(r,t,e){const n=B(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ua.get(t),o=i&&i.key;if(o){let a=new rt(O.comparator);a=a.insert(o,wt.newNoDocument(o,q.min()));const c=Q().add(o),h=new Pr(q.min(),new Map,new rt(z),a,c);await Kl(n,h),n.$a=n.$a.remove(o),n.Ua.delete(t),ei(n)}else await bs(n.localStore,t,!1).then(()=>Cs(n,t,e)).catch(qe)}async function Bf(r,t){const e=B(r),n=t.batch.batchId;try{const i=await Yd(e.localStore,t);Ql(e,n,null),Gl(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await xn(e,i)}catch(i){await qe(i)}}async function $f(r,t,e){const n=B(r);try{const i=await function(a,c){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(T=>(J(T!==null),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);Ql(n,t,e),Gl(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await xn(n,i)}catch(i){await qe(i)}}function Gl(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function Ql(r,t,e){const n=B(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function Cs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||Wl(r,n)})}function Wl(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Qs(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),ei(r))}function ua(r,t,e){for(const n of e)n instanceof Bl?(r.Ka.addReference(n.key,t),zf(r,n)):n instanceof $l?(j(ti,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||Wl(r,n.key)):U()}function zf(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(j(ti,"New document in limbo: "+e),r.Qa.add(n),ei(r))}function ei(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new O(nt.fromString(t)),n=r.za.next();r.Ua.set(n,new kf(e)),r.$a=r.$a.insert(e,n),kl(r.remoteStore,new Zt(Ut(Fs(e.path)),n,"TargetPurposeLimboResolution",Er.ae))}}async function xn(r,t,e){const n=B(r),i=[],o=[],a=[];n.ka.isEmpty()||(n.ka.forEach((c,h)=>{a.push(n.Ha(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){i.push(d);const T=Ks.Yi(h.targetId,d);o.push(T)}}))}),await Promise.all(a),n.La.p_(i),await async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>P.forEach(d,w=>P.forEach(w.Hi,R=>m.persistence.referenceDelegate.addReference(T,w.targetId,R)).next(()=>P.forEach(w.Ji,R=>m.persistence.referenceDelegate.removeReference(T,w.targetId,R)))))}catch(T){if(!Be(T))throw T;j(Gs,"Failed to update sequence numbers: "+T)}for(const T of d){const w=T.targetId;if(!T.fromCache){const R=m.Ts.get(w),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);m.Ts=m.Ts.insert(w,D)}}}(n.localStore,o))}async function Kf(r,t){const e=B(r);if(!e.currentUser.isEqual(t)){j(ti,"User change. New user:",t.toKey());const n=await Pl(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new L(C.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await xn(e,n.Rs)}}function Gf(r,t){const e=B(r),n=e.Ua.get(t);if(n&&n.Ba)return Q().add(n.key);{let i=Q();const o=e.qa.get(t);if(!o)return i;for(const a of o){const c=e.ka.get(a);i=i.unionWith(c.view.Sa)}return i}}function Hl(r){const t=B(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qf.bind(null,t),t.La.p_=Pf.bind(null,t.eventManager),t.La.Ja=Sf.bind(null,t.eventManager),t}function Qf(r){const t=B(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$f.bind(null,t),t}class _r{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Xd(this.persistence,new Qd,t.initialUser,this.serializer)}Xa(t){return new Cl(zs.ri,this.serializer)}Za(t){return new rf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_r.provider={build:()=>new _r};class Wf extends _r{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){J(this.persistence.referenceDelegate instanceof gr);const n=this.persistence.referenceDelegate.garbageCollector;return new Nd(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new Cl(n=>gr.ri(n,e),this.serializer)}}class Ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>ca(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kf.bind(null,this.syncEngine),await xf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Cf}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),n=function(o){return new cf(o)}(t.databaseInfo);return function(o,a,c,h){return new ff(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new pf(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ca(this.syncEngine,e,0),function(){return ra.D()?new ra:new sf}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,m){const T=new Df(i,o,a,c,h,d);return m&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);j(ve,"RemoteStore shutting down."),o.W_.add(5),await bn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ps.provider={build:()=>new Ps};/**
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
 */class Xl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const le="FirestoreClient";class Hf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=Ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{j(le,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(j(le,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Js(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function us(r,t){r.asyncQueue.verifyOperationInProgress(),j(le,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Pl(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ha(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Xf(r);j(le,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>ia(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>ia(t.remoteStore,i)),r._onlineComponents=t}async function Xf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j(le,"Using user provided OfflineComponentProvider");try{await us(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await us(r,new _r)}}else j(le,"Using default OfflineComponentProvider"),await us(r,new Wf(void 0));return r._offlineComponents}async function Yl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j(le,"Using user provided OnlineComponentProvider"),await ha(r,r._uninitializedComponentsProvider._online)):(j(le,"Using default OnlineComponentProvider"),await ha(r,new Ps))),r._onlineComponents}function Yf(r){return Yl(r).then(t=>t.syncEngine)}async function Jl(r){const t=await Yl(r),e=t.eventManager;return e.onListen=Lf.bind(null,t.syncEngine),e.onUnlisten=Ff.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Of.bind(null,t.syncEngine),e}function Jf(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Xl({next:w=>{m.su(),a.enqueueAndForget(()=>Ul(o,T));const R=w.docs.has(c);!R&&w.fromCache?d.reject(new L(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&w.fromCache&&h&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new ql(Fs(c.path),m,{includeMetadataChanges:!0,Ta:!0});return Ol(o,T)}(await Jl(r),r.asyncQueue,t,e,n)),n.promise}function Zf(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Xl({next:w=>{m.su(),a.enqueueAndForget(()=>Ul(o,T)),w.fromCache&&h.source==="server"?d.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new ql(c,m,{includeMetadataChanges:!0,Ta:!0});return Ol(o,T)}(await Jl(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Zl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const da=new Map;/**
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
 */function tc(r,t,e){if(!e)throw new L(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function tm(r,t,e,n){if(t===!0&&n===!0)throw new L(C.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function fa(r){if(!O.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ma(r){if(O.isDocumentKey(r))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function kr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":U()}function Nt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=kr(r);throw new L(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const ec="firestore.googleapis.com",pa=!0;class ga{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ec,this.ssl=pa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:pa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Rl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Sd)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zl((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Dr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lh;switch(n.type){case"firstParty":return new dh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=da.get(e);n&&(j("ComponentProvider","Removing Datastore"),da.delete(e),n.terminate())}(this),Promise.resolve()}}function em(r,t,e,n={}){var i;const o=(r=Nt(r,Dr))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==ec&&o.host!==c&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!hu(h,a)&&(r._setSettings(h),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=Et.MOCK_USER;else{d=du(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const T=n.mockUserToken.sub||n.mockUserToken.user_id;if(!T)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Et(T)}r._authCredentials=new ch(new Fa(d,m))}}/**
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
 */class we{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new we(this.firestore,t,this._query)}}class xt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xt(this.firestore,t,this._key)}}class ee extends we{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xt(this.firestore,null,new O(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function nc(r,t,...e){if(r=Lt(r),tc("collection","path",t),r instanceof Dr){const n=nt.fromString(t,...e);return ma(n),new ee(r,null,n)}{if(!(r instanceof xt||r instanceof ee))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(nt.fromString(t,...e));return ma(n),new ee(r.firestore,null,n)}}function Ot(r,t,...e){if(r=Lt(r),arguments.length===1&&(t=Ua.newId()),tc("doc","path",t),r instanceof Dr){const n=nt.fromString(t,...e);return fa(n),new xt(r,null,new O(n))}{if(!(r instanceof xt||r instanceof ee))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(nt.fromString(t,...e));return fa(n),new xt(r.firestore,r instanceof ee?r.converter:null,new O(n))}}/**
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
 */const ya="AsyncQueue";class _a{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Vl(this,"async_queue_retry"),this.Su=()=>{const n=cs();n&&j(ya,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=cs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=cs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Gt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Be(t))throw t;j(ya,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Qt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Ys.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&U()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class he extends Dr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new _a,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _a(t),this._firestoreClient=void 0,await t}}}function nm(r,t){const e=typeof r=="object"?r:lu(),n=typeof r=="string"?r:ur,i=cu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=uu("firestore");o&&em(i,...o)}return i}function Lr(r){if(r._terminated)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rm(r),r._firestoreClient}function rm(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,d,m){return new Rh(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Zl(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Hf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oe(pt.fromBase64String(t))}catch(e){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Oe(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Rn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ni{constructor(t){this._methodName=t}}/**
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
 */class ri{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
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
 */class si{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const sm=/^__.*__$/;class im{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ue(t,this.data,this.fieldMask,e,this.fieldTransforms):new In(t,this.data,e,this.fieldTransforms)}}class rc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ue(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sc(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class ii{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return vr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(sc(this.Lu)&&sm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class om{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Sr(t)}ju(t,e,n,i=!1){return new ii({Lu:t,methodName:e,zu:n,path:mt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cn(r){const t=r._freezeSettings(),e=Sr(r._databaseId);return new om(r._databaseId,!!t.ignoreUndefinedProperties,e)}function oi(r,t,e,n,i,o={}){const a=r.ju(o.merge||o.mergeFields?2:0,t,e,i);ai("Data must be an object, but it was:",a,n);const c=ac(n,a);let h,d;if(o.merge)h=new St(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const w=Ss(t,T,e);if(!a.contains(w))throw new L(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);cc(m,w)||m.push(w)}h=new St(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new im(new Ct(c),h,d)}class Mr extends ni{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Mr}}function ic(r,t,e,n){const i=r.ju(1,t,e);ai("Data must be an object, but it was:",i,n);const o=[],a=Ct.empty();ce(n,(h,d)=>{const m=li(t,h,e);d=Lt(d);const T=i.Uu(m);if(d instanceof Mr)o.push(m);else{const w=Pn(d,T);w!=null&&(o.push(m),a.set(m,w))}});const c=new St(o);return new rc(a,c,i.fieldTransforms)}function oc(r,t,e,n,i,o){const a=r.ju(1,t,e),c=[Ss(t,n,e)],h=[i];if(o.length%2!=0)throw new L(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(Ss(t,o[w])),h.push(o[w+1]);const d=[],m=Ct.empty();for(let w=c.length-1;w>=0;--w)if(!cc(d,c[w])){const R=c[w];let S=h[w];S=Lt(S);const D=a.Uu(R);if(S instanceof Mr)d.push(R);else{const V=Pn(S,D);V!=null&&(d.push(R),m.set(R,V))}}const T=new St(d);return new rc(m,T,a.fieldTransforms)}function am(r,t,e,n=!1){return Pn(e,r.ju(n?4:3,t))}function Pn(r,t){if(lc(r=Lt(r)))return ai("Unsupported field value:",t,r),ac(r,t);if(r instanceof ni)return function(n,i){if(!sc(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const c of n){let h=Pn(c,i.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=lt.fromDate(n);return{timestampValue:pr(i.serializer,o)}}if(n instanceof lt){const o=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pr(i.serializer,o)}}if(n instanceof ri)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Oe)return{bytesValue:Tl(i.serializer,n._byteString)};if(n instanceof xt){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Bs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof si)return function(a,c){return{mapValue:{fields:{[Wa]:{stringValue:Xa},[hr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return Os(c.serializer,d)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${kr(n)}`)}(r,t)}function ac(r,t){const e={};return Ba(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ce(r,(n,i)=>{const o=Pn(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function lc(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof lt||r instanceof ri||r instanceof Oe||r instanceof xt||r instanceof ni||r instanceof si)}function ai(r,t,e){if(!lc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=kr(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function Ss(r,t,e){if((t=Lt(t))instanceof Rn)return t._internalPath;if(typeof t=="string")return li(r,t);throw vr("Field path arguments must be of type string or ",r,!1,void 0,e)}const lm=new RegExp("[~\\*/\\[\\]]");function li(r,t,e){if(t.search(lm)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Rn(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function vr(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new L(C.INVALID_ARGUMENT,c+r+h)}function cc(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class uc{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ci("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cm extends uc{data(){return super.data()}}function ci(r,t){return typeof t=="string"?li(r,t):t instanceof Rn?t._internalPath:t._delegate._internalPath}/**
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
 */function um(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ui{}class hc extends ui{}function dc(r,t,...e){let n=[];t instanceof ui&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof di).length,c=o.filter(h=>h instanceof hi).length;if(a>1||a>0&&c>0)throw new L(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class hi extends hc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new hi(t,e,n)}_apply(t){const e=this._parse(t);return mc(t._query,e),new we(t.firestore,t.converter,vs(t._query,e))}_parse(t){const e=Cn(t.firestore);return function(o,a,c,h,d,m,T){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ta(T,m);const S=[];for(const D of T)S.push(va(h,o,D));w={arrayValue:{values:S}}}else w=va(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ta(T,m),w=am(c,a,T,m==="in"||m==="not-in");return at.create(d,m,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class di extends ui{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new di(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)mc(a,h),a=vs(a,h)}(t._query,e),new we(t.firestore,t.converter,vs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fi extends hc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new fi(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new L(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tn(o,a)}(t._query,this._field,this._direction);return new we(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new $e(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function fc(r,t="asc"){const e=t,n=ci("orderBy",r);return fi._create(n,e)}function va(r,t,e){if(typeof(e=Lt(e))=="string"){if(e==="")throw new L(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sl(t)&&e.indexOf("/")!==-1)throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(nt.fromString(e));if(!O.isDocumentKey(n))throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Lo(r,new O(n))}if(e instanceof xt)return Lo(r,e._key);throw new L(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kr(e)}.`)}function Ta(r,t){if(!Array.isArray(r)||r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function mc(r,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class hm{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ce(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[hr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>it(a.doubleValue));return new si(o)}convertGeoPoint(t){return new ri(it(t.latitude),it(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ir(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=se(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=nt.fromString(t);J(xl(n));const i=new _n(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function mi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
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
 */class un{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class pc extends uc{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ci("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lr extends pc{data(t={}){return super.data(t)}}class dm{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new lr(this._firestore,this._userDataWriter,n.key,n,new un(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new un(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new lr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new un(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:fm(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function gc(r){r=Nt(r,xt);const t=Nt(r.firestore,he);return Jf(Lr(t),r._key).then(e=>_m(t,r,e))}class yc extends hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new xt(this.firestore,null,e)}}function _c(r){r=Nt(r,we);const t=Nt(r.firestore,he),e=Lr(t),n=new yc(t);return um(r._query),Zf(e,r._query).then(i=>new dm(t,n,r,i))}function mm(r,t,e){r=Nt(r,xt);const n=Nt(r.firestore,he),i=mi(r.converter,t,e);return Sn(n,[oi(Cn(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,bt.none())])}function pm(r,t,e,...n){r=Nt(r,xt);const i=Nt(r.firestore,he),o=Cn(i);let a;return a=typeof(t=Lt(t))=="string"||t instanceof Rn?oc(o,"updateDoc",r._key,t,e,n):ic(o,"updateDoc",r._key,t),Sn(i,[a.toMutation(r._key,bt.exists(!0))])}function gm(r){return Sn(Nt(r.firestore,he),[new Cr(r._key,bt.none())])}function ym(r,t){const e=Nt(r.firestore,he),n=Ot(r),i=mi(r.converter,t);return Sn(e,[oi(Cn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,bt.exists(!1))]).then(()=>n)}function Sn(r,t){return function(n,i){const o=new Gt;return n.asyncQueue.enqueueAndForget(async()=>Uf(await Yf(n),i,o)),o.promise}(Lr(r),t)}function _m(r,t,e){const n=e.docs.get(t._key),i=new yc(r);return new pc(r,i,t._key,n,new un(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class vm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Cn(t)}set(t,e,n){this._verifyNotCommitted();const i=hs(t,this._firestore),o=mi(i.converter,e,n),a=oi(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,bt.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=hs(t,this._firestore);let a;return a=typeof(e=Lt(e))=="string"||e instanceof Rn?oc(this._dataReader,"WriteBatch.update",o._key,e,n,i):ic(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,bt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=hs(t,this._firestore);return this._mutations=this._mutations.concat(new Cr(e._key,bt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hs(r,t){if((r=Lt(r)).firestore!==t)throw new L(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function Ea(r){return Lr(r=Nt(r,he)),new vm(r,t=>Sn(r,t))}(function(t,e=!0){(function(i){Ue=i})(fu),su(new iu("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new he(new uh(n.getProvider("auth-internal")),new fh(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _n(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),go(Io,Ao,t),go(Io,Ao,"esm2017")})();const Tm={apiKey:"AIzaSyAsGrtbRSjz77iShv4tB0vQ33A23ie9JM8",authDomain:"tiger3homs-f3a5f-d60da.firebaseapp.com",projectId:"tiger3homs-f3a5f-d60da",storageBucket:"tiger3homs-f3a5f-d60da.firebasestorage.app",messagingSenderId:"509990310606",appId:"1:509990310606:web:e36d91ea748c4cd64d369f",measurementId:"G-DDZTZ6MR6S"};let ds=null,ne=null,tt=null;try{ds=gu(Tm),ne=yu(ds),tt=nm(ds)}catch(r){throw console.error("Firebase initialization error:",r),new Error(`Firebase initialization failed: ${r instanceof Error?r.message:String(r)}`)}if(!tt)throw new Error("Firestore failed to initialize and is null.");const Dt={en:{generalInfo:{title:"General Information",siteTitle:"Tiger3Homs",siteRole:"Website Developer & Tech Enthusiast",logoUrl:"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",footerText:"© 2025. Built and designed by Tiger3homs"},about:{title:"About Me",description:"I'm a passionate software developer with expertise in web development and system architecture. I love building efficient, scalable solutions and contributing to open-source projects. When I'm not coding, you can find me exploring new technologies and sharing knowledge with the developer community."},projects:{title:"Featured Projects",project1:{title:"OS Design v1",description:"The website offers a sleek, intuitive design with straightforward navigation and professional fonts. It highlights the company's services and expertise, making it easy for visitors to get in touch. Simple visuals and effective calls-to-action ensure a smooth and engaging experience. For more information, explore the site.",tags:["Modern","User-friendly","Professional"],link:""},project2:{title:"Project 2",description:"Coming soon.",tags:["Wait","For","It"],link:""},project3:{title:"New Project",description:"This is a new project description.",tags:["New","Exciting","Innovative"],link:""}},contact:{title:"Contact Me",nameLabel:"Name",namePlaceholder:"Enter your name",emailLabel:"Email",emailPlaceholder:"Enter your email",messageLabel:"Message",messagePlaceholder:"Enter your message",submitButton:"Send Message"},services:{title:"Services",list:[{title:"Web Development",description:"Building modern, responsive websites tailored to your needs."},{title:"UI/UX Design",description:"Crafting user-friendly and visually appealing designs."},{title:"SEO Optimization",description:"Improving your website's visibility on search engines."},{title:"Consulting",description:"Providing expert advice to help you achieve your goals."}]}}},Em=r=>{const e=/[A-Z]/.test(r),n=/[a-z]/.test(r),i=/\d/.test(r),o=/[!@#$%^&*(),.?":{}|<>]/.test(r);return r.length>=8&&e&&n&&i&&o},wm=()=>{const[r,t]=F.useState(""),[e,n]=F.useState(""),[i,o]=F.useState(""),[a,c]=F.useState(!1),h=Ia();F.useEffect(()=>{const m=setTimeout(()=>{ne.signOut()},18e5);return()=>clearTimeout(m)},[]),F.useEffect(()=>{const m=ba(ne,T=>{T&&h("/admin/dashboard",{replace:!0})});return()=>m()},[h]);const d=async m=>{if(m.preventDefault(),o(""),c(!0),!r.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){o("Please enter a valid email address"),c(!1);return}if(!Em(e)){o("Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters"),c(!1);return}try{await _u(ne,r,e)}catch(T){let w="Failed to log in. Please check your credentials.";if(T.code)switch(T.code){case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":w="Invalid email or password.";break;case"auth/invalid-email":w="Invalid email format.";break;case"auth/too-many-requests":w="Too many failed attempts. Please try again later.";break;default:console.error("Firebase Login error:",T)}o(w)}finally{c(!1)}};return v.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:v.jsxs("div",{className:"p-8 bg-white rounded shadow-md w-full max-w-sm",children:[v.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Admin Login"}),v.jsxs("form",{onSubmit:d,children:[v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),v.jsx("input",{type:"email",id:"email",value:r,onChange:m=>t(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),v.jsx("input",{type:"password",id:"password",value:e,onChange:m=>n(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),i&&v.jsx("p",{className:"text-red-500 text-xs italic mb-4",children:i}),v.jsx("div",{className:"flex items-center justify-between",children:v.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50",disabled:a,children:a?"Logging in...":"Login"})})]})]})})},Im=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:i,handleAddProject:o,handleDelete:a,renderFields:c})=>v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsxs("div",{className:"flex justify-between items-center mb-3",children:[v.jsx("h4",{className:"text-lg font-semibold capitalize",children:(r==null?void 0:r.title)||String(t[0]).replace(/([A-Z])/g," $1")}),v.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),(r==null?void 0:r.title)!==void 0&&typeof r.title=="string"&&c({title:r.title},t,e,n,i,void 0,void 0),Object.entries(r).map(([h,d])=>{if(h!=="title"&&typeof d=="object"&&d!==null&&!Array.isArray(d)){const m=[...t,h];return v.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[v.jsxs("div",{className:"flex justify-between items-start mb-3",children:[v.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",v.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:h})]}),v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${h}"?`)&&a(m)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${h}`,children:"Delete Project"})]}),v.jsx("div",{className:"space-y-4",children:c(d,m,e,n,i,void 0,a)})]},m.join("."))}return null})]},t.join(".")),Am=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:i,handleDelete:o,renderFields:a})=>v.jsx(v.Fragment,{children:a(r,t,e,n,i,void 0,o)}),bm=()=>{const[r,t]=F.useState("#007bff"),[e,n]=F.useState("#6c757d"),[i,o]=F.useState("'Noto Sans', sans-serif"),[a,c]=F.useState("#ffffff"),[h,d]=F.useState("#b91212"),[m,T]=F.useState("#24853c"),[w,R]=F.useState(!0),[S,D]=F.useState(!1),V=g=>/^#[0-9A-F]{6}$/i.test(g),G=g=>{t(g.target.value)},W=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&t($)},H=g=>{n(g.target.value)},M=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&n($)},K=g=>{o(g.target.value)},k=g=>{c(g.target.value)},_=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&c($)},p=g=>{d(g.target.value)},y=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&d($)},E=g=>{T(g.target.value)},I=g=>{const $=g.target.value;(V($)||$===""||$==="#")&&T($)};F.useEffect(()=>{if(!tt){console.error("loadStyles Effect: Firestore db instance is not available."),R(!1);return}const g=Ot(tt,"settings","styles");console.log("loadStyles Effect: Created stylesDocRefInsideEffect:",g.path),(async()=>{R(!0),console.log("loadStyles Function: Attempting getDoc...");try{const ut=await gc(g);if(console.log("loadStyles Function: getDoc finished."),ut.exists()){console.log("loadStyles Function: Document exists. Data:",ut.data());const jt=ut.data();t(jt.primaryColor||"#007bff"),n(jt.secondaryColor||"#6c757d"),o(jt.fontFamily||"'Noto Sans', sans-serif"),c(jt.titleColor||"#ffffff"),d(jt.h3TitleColor||"#b91212"),T(jt.textColor||"#24853c")}else console.log("loadStyles Function: No style document found, using defaults for all styles.")}catch(ut){console.error("loadStyles Function: Error during getDoc or processing:",ut),alert("Failed to load styles.")}finally{console.log("loadStyles Function: Setting isLoading to false."),R(!1)}})()},[tt]),F.useEffect(()=>{if(!w){const g=r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",$=e.match(/^#[0-9A-F]{6}$/i)?e:"#000000",ut=a.match(/^#[0-9A-F]{6}$/i)?a:"#ffffff",jt=h.match(/^#[0-9A-F]{6}$/i)?h:"#b91212",de=m.match(/^#[0-9A-F]{6}$/i)?m:"#24853c";document.documentElement.style.setProperty("--primary-color",g),document.documentElement.style.setProperty("--secondary-color",$),document.documentElement.style.setProperty("--font-family",i),document.documentElement.style.setProperty("--title-color",ut),document.documentElement.style.setProperty("--h3title-color",jt),document.documentElement.style.setProperty("--text-color",de)}},[r,e,i,a,h,m,w]);const b=async()=>{if(!tt){console.error("Save Error: Firestore db instance is not available."),alert("Error: Cannot save styles. Firestore not available.");return}const g=Ot(tt,"settings","styles");if(!g){console.error("Save Error: Failed to create doc reference."),alert("Error: Cannot save styles. Failed to create reference.");return}D(!0);const $={primaryColor:r,secondaryColor:e,fontFamily:i,titleColor:a,h3TitleColor:h,textColor:m};console.log("Attempting to save styles to Firestore:",$);try{await mm(g,$),console.log("Firestore save successful:",$),alert("Styles saved successfully!")}catch(ut){console.error("Firestore save error:",ut),alert(`Failed to save styles. Error: ${ut instanceof Error?ut.message:String(ut)}`)}finally{console.log("Finished save attempt."),D(!1)}};return w?v.jsx("div",{children:"Loading styles..."}):v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-medium mb-4",children:"Style Editor"})," ",v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{htmlFor:"primaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Primary Color"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"primaryColorPicker",value:r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",onChange:G,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"primaryColorText",value:r,onChange:W,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"secondaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Secondary Color"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"secondaryColorPicker",value:e.match(/^#[0-9A-F]{6}$/i)?e:"#000000",onChange:H,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"secondaryColorText",value:e,onChange:M,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"fontFamily",className:"block text-sm font-medium text-gray-700 mb-1",children:"Font Family"}),v.jsx("input",{type:"text",id:"fontFamily",value:i,onChange:K,className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"e.g., 'Arial, sans-serif', 'Roboto, sans-serif'"}),v.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Enter a valid CSS font-family value."})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"titleColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Title Color (h2)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"titleColorPicker",value:a.match(/^#[0-9A-F]{6}$/i)?a:"#ffffff",onChange:k,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"titleColorText",value:a,onChange:_,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"h3TitleColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Sub-Title Color (h3)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"h3TitleColorPicker",value:h.match(/^#[0-9A-F]{6}$/i)?h:"#b91212",onChange:p,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"h3TitleColorText",value:h,onChange:y,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{children:[v.jsx("label",{htmlFor:"textColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Text Color (p, label)"}),v.jsxs("div",{className:"flex items-center space-x-2",children:[v.jsx("input",{type:"color",id:"textColorPicker",value:m.match(/^#[0-9A-F]{6}$/i)?m:"#24853c",onChange:E,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),v.jsx("input",{type:"text",id:"textColorText",value:m,onChange:I,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),v.jsxs("div",{className:"mt-6 p-4 border border-gray-300 rounded",children:[v.jsx("h5",{className:"text-md font-medium mb-3",children:"Preview"}),v.jsxs("div",{style:{fontFamily:i},children:[v.jsx("p",{className:"mb-2",children:"This text uses the selected font family."}),v.jsx("button",{style:{backgroundColor:r,color:"white"},className:"px-3 py-1 rounded mr-2",children:"Primary Button"}),v.jsx("button",{style:{backgroundColor:e,color:"white"},className:"px-3 py-1 rounded",children:"Secondary Button"}),v.jsx("p",{style:{color:r},className:"mt-2",children:"This text uses the primary color."}),v.jsx("p",{style:{color:e},className:"mt-1",children:"This text uses the secondary color."}),v.jsx("h2",{style:{color:a},className:"text-lg font-semibold mt-3",children:"Preview Title (h2)"}),v.jsx("h3",{style:{color:h},className:"text-md font-semibold mt-1",children:"Preview Sub-Title (h3)"}),v.jsx("p",{style:{color:m},className:"mt-1",children:"This paragraph text uses the main text color."})]})]}),v.jsx("div",{className:"pt-4",children:v.jsx("button",{onClick:b,disabled:S||w,className:`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${S||w?"opacity-50 cursor-not-allowed":""}`,children:S?"Saving...":"Save Styles"})})]})]})},nr=["Github","Facebook","Mail","Instagram","Linkedin","Twitter"],xm=()=>{const[r,t]=F.useState([]),[e,n]=F.useState(!0),[i,o]=F.useState(null),[a,c]=F.useState(!1),[h,d]=F.useState(null),[m,T]=F.useState({name:"",url:"",icon:nr[0],order:0}),w=F.useMemo(()=>tt?nc(tt,"socialLinks"):null,[]),R=F.useCallback(async()=>{if(!tt||!w){o("Firestore is not initialized correctly."),n(!1);return}n(!0),o(null);try{const k=dc(w,fc("order","asc")),p=(await _c(k)).docs.map(y=>({...y.data(),id:y.id}));t(p)}catch(k){console.error("Error fetching social links:",k),o("Failed to load social links. Please try again.")}finally{n(!1)}},[w]);F.useEffect(()=>{R()},[R]);const S=k=>{const{name:_,value:p}=k.target;T(y=>({...y,[_]:_==="order"?parseInt(p,10)||0:p}))},D=()=>{c(!1),d(null),T({name:"",url:"",icon:nr[0],order:0})},V=async k=>{if(k.preventDefault(),!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!tt||!w){o("Firestore is not initialized correctly.");return}try{await ym(w,m),D(),R()}catch(_){console.error("Error adding link:",_),o("Failed to add link. Please try again.")}},G=async k=>{if(k.preventDefault(),!h||!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!tt){o("Firestore is not initialized correctly.");return}try{const _=Ot(tt,"socialLinks",h);await pm(_,m),D(),R()}catch(_){console.error("Error updating link:",_),o("Failed to update link. Please try again.")}},W=async k=>{if(k===0||!tt)return;o(null);const _=r[k],p=r[k-1],y=Ea(tt),E=Ot(tt,"socialLinks",_.id),I=Ot(tt,"socialLinks",p.id);y.update(E,{order:p.order}),y.update(I,{order:_.order});try{await y.commit(),R()}catch(b){console.error("Error moving link up:",b),o("Failed to reorder link. Please try again.")}},H=async k=>{if(k===r.length-1||!tt)return;o(null);const _=r[k],p=r[k+1],y=Ea(tt),E=Ot(tt,"socialLinks",_.id),I=Ot(tt,"socialLinks",p.id);y.update(E,{order:p.order}),y.update(I,{order:_.order});try{await y.commit(),R()}catch(b){console.error("Error moving link down:",b),o("Failed to reorder link. Please try again.")}},M=async k=>{if(window.confirm("Are you sure you want to delete this link?")){if(o(null),!tt){o("Firestore is not initialized correctly.");return}try{const _=Ot(tt,"socialLinks",k);await gm(_),R()}catch(_){console.error("Error deleting link:",_),o("Failed to delete link. Please try again.")}}},K=k=>{d(k.id),T({name:k.name,url:k.url,icon:k.icon,order:k.order}),c(!1)};return v.jsxs("div",{className:"p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200",children:[v.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"Manage Social Links"}),i&&v.jsx("p",{className:"text-red-400 bg-red-900/50 p-3 rounded mb-4",children:i}),e&&v.jsx("p",{children:"Loading links..."}),(a||h)&&v.jsxs("form",{onSubmit:h?G:V,className:"mb-6 p-4 bg-gray-700 rounded",children:[v.jsx("h3",{className:"text-xl font-medium mb-3 text-white",children:h?"Edit Link":"Add New Link"}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3",children:[v.jsx("input",{type:"text",name:"name",placeholder:"Link Name (e.g., GitHub)",value:m.name,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),v.jsx("input",{type:"url",name:"url",placeholder:"Full URL (e.g., https://github.com/user)",value:m.url,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),v.jsxs("select",{name:"icon",value:m.icon,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,children:[v.jsx("option",{value:"",disabled:!0,children:"Select Icon"}),nr.map(k=>v.jsx("option",{value:k,children:k},k))]}),v.jsx("input",{type:"number",name:"order",placeholder:"Order (e.g., 1)",value:m.order,onChange:S,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,min:"0"})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("button",{type:"submit",className:"flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(Yu,{size:18})," ",h?"Save Changes":"Add Link"]}),v.jsxs("button",{type:"button",onClick:D,className:"flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(Ou,{size:18})," Cancel"]})]})]}),!a&&!h&&v.jsxs("button",{onClick:()=>{c(!0),T({name:"",url:"",icon:nr[0],order:r.length>0?Math.max(...r.map(k=>k.order))+1:0})},className:"mb-6 flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[v.jsx(ju,{size:18})," Add New Link"]}),!e&&r.length>0&&v.jsx("div",{className:"overflow-x-auto",children:v.jsxs("table",{className:"min-w-full bg-gray-700 rounded",children:[v.jsx("thead",{children:v.jsxs("tr",{className:"bg-gray-600",children:[v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Order"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Name"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"URL"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Icon"}),v.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Actions"})]})}),v.jsx("tbody",{children:r.map((k,_)=>v.jsxs("tr",{className:"border-b border-gray-600 hover:bg-gray-600/50",children:[v.jsx("td",{className:"py-2 px-3",children:k.order}),v.jsx("td",{className:"py-2 px-3",children:k.name}),v.jsx("td",{className:"py-2 px-3",children:v.jsx("a",{href:k.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline truncate max-w-xs inline-block",children:k.url})}),v.jsx("td",{className:"py-2 px-3",children:k.icon}),v.jsxs("td",{className:"py-2 px-3 flex items-center gap-1",children:[v.jsx("button",{onClick:()=>W(_),disabled:_===0,className:`p-1 ${_===0?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Up",children:v.jsx(Lu,{size:18})}),v.jsx("button",{onClick:()=>H(_),disabled:_===r.length-1,className:`p-1 ${_===r.length-1?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Down",children:v.jsx(ku,{size:18})}),v.jsx("button",{onClick:()=>K(k),className:"text-yellow-400 hover:text-yellow-300 p-1",title:"Edit",children:v.jsx(Zu,{size:18})}),v.jsx("button",{onClick:()=>M(k.id),className:"text-red-500 hover:text-red-400 p-1",title:"Delete",children:v.jsx(eh,{size:18})})]})]},k.id))})]})}),!e&&r.length===0&&!a&&v.jsx("p",{className:"text-center text-gray-400 mt-4",children:"No social links found. Add one!"})]})},Rm={title:"New Project Title",description:"New project description.",tags:["Tag1","Tag2"],link:""},Ne=(r,t,e,n,i,o,a)=>t.length===1&&t[0]==="projects"&&typeof r=="object"&&r!==null&&!Array.isArray(r)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsxs("div",{className:"flex justify-between items-center mb-3",children:[v.jsx("h4",{className:"text-lg font-semibold capitalize",children:String(t[0]).replace(/([A-Z])/g," $1")}),o&&v.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),Object.entries(r).map(([c,h])=>{if(c!=="title"&&typeof h=="object"&&h!==null&&!Array.isArray(h)){const d=[...t,c];return v.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[v.jsxs("div",{className:"flex justify-between items-start mb-3",children:[" ",v.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",v.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:c})]}),a&&v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${c}"?`)&&a(d)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${c}`,children:"Delete Project"})]}),v.jsxs("div",{className:"space-y-4",children:[" ",Ne(h,d,e,n,i,void 0,void 0)]})]},d.join("."))}else if(c==="title"&&typeof h=="string"){const d=[...t,c],m=d.join("."),T=n===m;return v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),T?v.jsx("input",{type:"text",id:m,name:m,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2",value:h,onChange:w=>e(d,w.target.value),onBlur:()=>i(null),autoFocus:!0}):v.jsx("div",{className:"mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[38px]",onClick:()=>i(m),children:h||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m)}return null})]},t.join(".")):Object.entries(r).map(([c,h])=>{const d=[...t,c],m=d.map(String).join("."),T=n===m;return typeof h=="string"?v.jsxs("div",{className:"mb-4",children:[v.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),T?v.jsx("textarea",{id:m,name:m,rows:h.length>100?4:2,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:h,onChange:w=>e(d,w.target.value),onBlur:()=>i(null),autoFocus:!0}):v.jsx("div",{className:"mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[50px] whitespace-pre-wrap text-gray-800",onClick:()=>i(m),children:h||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m):typeof h=="object"&&h!==null&&!Array.isArray(h)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[v.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize",children:String(c).replace(/([A-Z])/g," $1")}),Ne(h,d,e,n,i)]},m):Array.isArray(h)?v.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm",children:[v.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize text-gray-700",children:String(c).replace(/([A-Z])/g," $1")}),v.jsxs("div",{className:"space-y-3",children:[" ",h.map((w,R)=>{const S=[...d,R],D=S.map(String).join("."),V=n===D;return typeof w=="string"?v.jsxs("div",{className:"flex items-center space-x-2",children:[V?v.jsx("input",{type:"text",id:D,name:D,className:"flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:w,onChange:G=>e(S,G.target.value),onBlur:()=>i(null),autoFocus:!0}):v.jsx("div",{className:"flex-grow rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[38px] text-gray-800",onClick:()=>i(D),children:w||v.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})}),a&&v.jsx("button",{onClick:()=>{window.confirm("Are you sure you want to delete this item?")&&a(S)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete item ${R+1}`,children:"Delete"})]},D):typeof w=="object"&&w!==null?v.jsxs("div",{className:"mb-4 p-3 border border-gray-100 rounded relative",children:[" ",v.jsxs("div",{className:"flex justify-between items-center mb-2",children:[" ",v.jsxs("h5",{className:"text-md font-medium",children:["Item ",R+1]}),a&&v.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete Item ${R+1}?`)&&a(S)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-0.5 px-1.5 rounded focus:outline-none focus:shadow-outline","aria-label":`Delete item ${R+1}`,children:"Delete"})]}),Ne(w,S,e,n,i,void 0,a)]},D):null})]})," "]},m):null}),Cm=(r,t,e)=>{if(!t||t.length===0)return r;const n=JSON.parse(JSON.stringify(r));let i=n;for(let a=0;a<t.length-1;a++){const c=t[a];if(i[c]===void 0||i[c]===null){const h=typeof t[a+1]=="number";i[c]=h?[]:{}}if(Array.isArray(i)&&typeof c=="number")for(;i.length<=c;)i.push(null);i=i[c]}const o=t[t.length-1];return typeof i!="object"||i===null?(console.error("Cannot set property on non-object:",i,"at path",t),r):(i[o]=e,n)},Pm=()=>{const r=Ia(),[t,e]=F.useState(()=>{const M=localStorage.getItem("siteTranslations");try{const K=M?JSON.parse(M):{};return{en:{...Dt.en,...K.en||{}}}}catch(K){return console.error("Failed to parse translations from localStorage",K),Dt}}),[n,i]=F.useState(""),[o,a]=F.useState(""),[c,h]=F.useState(null),[d,m]=F.useState(null),T=F.useMemo(()=>{if(t&&t.en){const M=Object.keys(t.en);return c===null&&M.length>0&&h(M[0]),M}return[]},[t]),w=async()=>{if(a(""),!ne){console.error("Firebase auth instance is not available."),a("Logout service unavailable. Please try again later.");return}try{await vu(ne),r("/admin/login")}catch(M){console.error("Logout failed:",M),a("Failed to log out. Please try again.")}},R=F.useCallback((M,K)=>{e(k=>{const _="en";if(!M||M.length===0)return k;const p=Cm(k[_],M,K);return{...k,[_]:p}}),i("")},[]),S=F.useCallback(()=>{e(M=>{const K=`project_${Date.now()}`,k={...M.en};return(typeof k.projects!="object"||k.projects===null)&&(k.projects={title:Dt.en.projects.title}),k.projects[K]={...Rm},{...M,en:k}}),i("New project added. Edit details and save."),c!=="projects"&&h("projects")},[c]),D=F.useCallback(M=>{if(!M||M.length<1){console.error("Invalid path for deletion:",M);return}e(K=>{const k=JSON.parse(JSON.stringify(K));let _=k.en;for(let y=0;y<M.length-1;y++){const E=M[y];if(typeof _!="object"||_===null||_[E]===void 0)return console.error("Path not found for deletion:",M,"at segment",E),K;_=_[E]}const p=M[M.length-1];if(Array.isArray(_)&&typeof p=="number")if(p>=0&&p<_.length)_.splice(p,1);else return console.error("Index out of bounds for deletion:",M),K;else if(typeof _=="object"&&_!==null&&typeof p=="string")if(p in _)delete _[p];else return console.error("Key not found for deletion:",M,`Key: ${p}`),K;else return console.error("Cannot delete from target:",_,"at path",M),K;return k}),i("Item deleted. Remember to save changes.")},[]),V=()=>{try{localStorage.setItem("siteTranslations",JSON.stringify(t)),i("Content changes saved successfully!"),setTimeout(()=>i(""),3e3)}catch(M){console.error("Failed to save translations to localStorage",M),i("Error saving content changes.")}},G=()=>{if(window.confirm("Are you sure you want to reset the English text content (About, Contact, Services, General Info) to the default values? This cannot be undone and does not affect Projects, Styles, or Social Links.")){const M=t.en.projects;e(K=>({...K,en:{...Dt.en,projects:M}})),localStorage.setItem("siteTranslations",JSON.stringify({en:{...Dt.en,projects:M}})),i("Text content sections reset to defaults."),setTimeout(()=>i(""),3e3)}},W=M=>M===null?!1:M in Dt.en,H=()=>{if(!c)return v.jsx("p",{className:"text-gray-500",children:"Select a section above to start editing."});if(c==="styleEditor")return v.jsx(bm,{});if(c==="socialLinks")return v.jsx(xm,{});if(W(c)){const M=t.en[c],K=typeof M=="object"&&M!==null&&"title"in M&&typeof M.title=="string"?M.title:c.replace(/([A-Z])/g," $1");return v.jsxs(v.Fragment,{children:[v.jsxs("h3",{className:"text-xl font-semibold mb-4 text-gray-700 capitalize",children:["Editing: ",K," Content"]}),c==="projects"?v.jsx(Im,{data:M,path:[c],handleChange:R,editingPath:d,setEditingPath:m,handleAddProject:S,handleDelete:D,renderFields:Ne}):c==="services"?v.jsx(Am,{data:M,path:[c],handleChange:R,editingPath:d,setEditingPath:m,handleDelete:D,renderFields:Ne}):Ne(M,[c],R,d,m,void 0,D)]})}return v.jsxs("p",{className:"text-red-500",children:["Error: Invalid tab '",c,"' selected."]})};return v.jsxs("div",{className:"p-4 md:p-6 bg-gray-100 min-h-screen",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-300 gap-4",children:[v.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-800",children:"Admin Dashboard"}),v.jsxs("div",{className:"flex gap-2 flex-wrap justify-center sm:justify-end",children:[v.jsx("button",{onClick:G,className:"bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",title:"Reset text content (About, Contact, Services, General Info) to defaults. Does not affect Projects, Styles, or Social Links.",children:"Reset Text Defaults"}),v.jsx("button",{onClick:w,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",children:"Logout"})]}),o&&v.jsx("p",{className:"text-red-500 text-xs italic w-full text-center sm:text-right mt-2",children:o})]}),v.jsx("div",{className:"mb-6 border-b border-gray-300",children:v.jsxs("nav",{className:"-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto pb-px","aria-label":"Tabs",children:[T.map(M=>{const K=M,k=t.en[K],_=typeof k=="object"&&k!==null&&"title"in k&&typeof k.title=="string"?k.title:K.replace(/([A-Z])/g," $1");return v.jsx("button",{onClick:()=>h(K),className:`${c===K?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c===K?"page":void 0,children:_},K)}),v.jsx("button",{onClick:()=>h("styleEditor"),className:`${c==="styleEditor"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c==="styleEditor"?"page":void 0,children:"Style Editor"},"styleEditor"),v.jsx("button",{onClick:()=>h("socialLinks"),className:`${c==="socialLinks"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c==="socialLinks"?"page":void 0,children:"Social Links"},"socialLinks")]})}),v.jsx("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-md",children:H()}),v.jsxs("div",{className:"mt-6 text-right flex justify-end items-center gap-4",children:[n&&v.jsx("span",{className:"text-green-600 text-sm transition-opacity duration-300",children:n}),v.jsx("button",{onClick:V,className:`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline transition-all duration-150 text-sm ${c==="styleEditor"||c==="socialLinks"?"opacity-50 cursor-not-allowed":"opacity-100"}`,disabled:c==="styleEditor"||c==="socialLinks",title:c==="styleEditor"||c==="socialLinks"?"Changes are saved directly within this tab":"Save text content changes",children:"Save Content Changes"})]})]})},Sm=(r=Dt)=>{const t=r.en,e=t==null?void 0:t.projects,n=e?Object.entries(e).filter(([i,o])=>i!=="title"&&typeof o=="object"&&o!==null).map(([i,o])=>({title:(o==null?void 0:o.title)??`Project ${i}`,description:(o==null?void 0:o.description)??"Description missing.",tags:(o==null?void 0:o.tags)??[],link:(o==null?void 0:o.link)??""})):[];return{title:(e==null?void 0:e.title)??"Featured Projects",projects:n}},Vm=({logoUrl:r})=>v.jsx("img",{src:r||"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",alt:"Logo",className:"mx-auto mb-6 w-24 h-24",style:{pointerEvents:"none",userSelect:"none"}}),Nm=F.lazy(()=>Vs(()=>import("./ServicesSection-923wNxBe.js"),__vite__mapDeps([0,1,2]))),km=F.lazy(()=>Vs(()=>import("./ProjectsSection-BTMu5bv8.js"),__vite__mapDeps([3,1,2]))),Dm=F.lazy(()=>Vs(()=>import("./ContactSection-CpNF7jjY.js"),__vite__mapDeps([4,1,2]))),Lm=6e4;let wa=0;const Mm=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),jm=r=>r.length>=10&&r.length<=1e3,Fm={Github:$u,Facebook:qu,Mail:Hu,Instagram:Ku,Linkedin:Qu,Twitter:rh},Om=({children:r})=>{const[t,e]=F.useState(null),[n,i]=F.useState(!0);return F.useEffect(()=>{if(!ne){i(!1);return}const o=ba(ne,a=>{e(a),i(!1)});return()=>o()},[]),n?v.jsx("div",{className:"flex items-center justify-center min-h-screen",children:v.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}):t?r:v.jsx(Aa,{to:"/admin/login",replace:!0})},Um=()=>{const[r,t]=F.useState(()=>{const T=localStorage.getItem("siteTranslations");try{return T?JSON.parse(T):Dt}catch(w){return console.error("Failed to parse translations from localStorage on main site",w),Dt}});F.useEffect(()=>{const T=()=>{const w=localStorage.getItem("siteTranslations");try{t(w?JSON.parse(w):Dt)}catch(R){console.error("Failed to parse translations from localStorage on storage event",R),t(Dt)}};return window.addEventListener("storage",T),T(),()=>{window.removeEventListener("storage",T)}},[]);const e=F.useMemo(()=>r.en,[r]),[n,i]=F.useState([]),[o,a]=F.useState({name:"",email:"",message:""}),c=F.useCallback(T=>{const{name:w,value:R}=T.target;a(S=>({...S,[w]:R}))},[]),h=F.useCallback(async T=>{T.preventDefault();const w=Date.now();if(w-wa<Lm){alert("Please wait a minute before sending another message.");return}if(!Mm(o.email)){alert("Please enter a valid email address.");return}if(!jm(o.message)){alert("Message must be between 10 and 1000 characters.");return}wa=w;try{Eo.init("skwn_-DYfDakGK644"),await Eo.send("service_bdj14o3","template_2e2nikq",{name:o.name,email:o.email,message:o.message,to_email:"tiger3homs@gmail.com"}),alert("Message sent successfully!"),a({name:"",email:"",message:""})}catch(R){console.error("Failed to send message:",R),alert("Failed to send message. Please try again.")}},[o]);F.useEffect(()=>{(async()=>{if(tt)try{const w=nc(tt,"socialLinks"),R=dc(w,fc("order","asc")),D=(await _c(R)).docs.map(V=>({id:V.id,...V.data()}));i(D)}catch(w){console.error("Error fetching social links:",w)}})()},[]);const d=F.useMemo(()=>Sm(r),[r]),m=v.jsx("div",{className:"flex items-center justify-center p-8",children:v.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"})});return v.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ltr",children:[v.jsx("header",{className:"container mx-auto px-4 py-16 md:py-32",children:v.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[v.jsx(Vm,{logoUrl:e.generalInfo.logoUrl}),v.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 text-primary",style:{pointerEvents:"none",userSelect:"none"},children:e.generalInfo.siteTitle}),v.jsx("p",{className:"text-xl md:text-2xl text-secondary mb-8",style:{pointerEvents:"none",userSelect:"none",color:"var(--text-color)"},children:e.generalInfo.siteRole}),v.jsx("div",{className:"flex justify-center space-x-6",children:n.map(T=>{const w=Fm[T.icon];return w?v.jsx("a",{href:T.url,target:"_blank",rel:"noopener noreferrer","aria-label":T.name,className:"text-secondary hover:text-primary transition-colors transform hover:scale-110",children:v.jsx(w,{size:24})},T.id):null})})]})}),v.jsx(F.Suspense,{fallback:m,children:v.jsx(km,{title:d.title,projects:d.projects})}),v.jsx("section",{className:"container mx-auto px-4 py-16 bg-gray-800/50 backdrop-blur-sm",children:v.jsxs("div",{className:"max-w-3xl mx-auto",children:[v.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-titel",style:{color:"var(--title-color)"},children:e.about.title}),v.jsx("p",{className:"text-secondary text-lg leading-relaxed",style:{color:"var(--text-color)"},children:e.about.description})]})}),v.jsx(F.Suspense,{fallback:m,children:v.jsx(Nm,{title:e.services.title,services:e.services.list})}),v.jsx(F.Suspense,{fallback:m,children:v.jsx(Dm,{t:e.contact,handleSubmit:h,formData:o,handleInputChange:c})}),v.jsxs("footer",{className:"container mx-auto px-4 py-8 text-center text-secondary",children:[v.jsx("p",{style:{color:"var(--text-color)"},children:e.generalInfo.footerText}),v.jsx("div",{className:"mt-4",children:v.jsx(nu,{to:"/admin/dashboard",className:"text-sm text-secondary hover:text-primary transition-colors",children:"Admin Dashboard"})})]})]})};function qm(){const r="/home/";return F.useEffect(()=>{(async()=>{if(!tt){console.error("App.tsx: Firestore not initialized correctly for loading styles.");return}const e=Ot(tt,"settings","styles");try{console.log("App.tsx: Attempting to load global styles...");const n=await gc(e);if(n.exists()){const i=n.data();document.documentElement.style.setProperty("--primary-color",i.primaryColor),document.documentElement.style.setProperty("--secondary-color",i.secondaryColor),document.documentElement.style.setProperty("--font-family",i.fontFamily),i.titleColor&&document.documentElement.style.setProperty("--title-color",i.titleColor),i.h3TitleColor&&document.documentElement.style.setProperty("--h3title-color",i.h3TitleColor),i.textColor&&document.documentElement.style.setProperty("--text-color",i.textColor),console.log("App.tsx: Global styles applied from Firestore:",i)}else console.log("App.tsx: No global styles document found in Firestore, using CSS defaults.")}catch(n){console.error("App.tsx: Error loading global styles from Firestore:",n)}})()},[]),v.jsx(tu,{basename:r,children:v.jsxs(eu,{children:[v.jsx(Xn,{path:"/",element:v.jsx(Um,{})}),v.jsx(Xn,{path:"/admin/login",element:v.jsx(wm,{})}),v.jsx(Xn,{path:"/admin/dashboard",element:v.jsx(Om,{children:v.jsx(Pm,{})})}),v.jsx(Xn,{path:"/admin",element:v.jsx(Aa,{to:"/admin/login",replace:!0})})]})})}Ca(document.getElementById("root")).render(v.jsx(F.StrictMode,{children:v.jsx(qm,{})}));export{Vt as c,v as j};
//# sourceMappingURL=index-f0C8XoYF.js.map
