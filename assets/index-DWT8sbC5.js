const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ServicesSection-Desv0XjW.js","assets/react-vendor-Bwa1dZdL.js","assets/firebase-vendor-CAk-8R_y.js","assets/ProjectsSection-BzGRzWU1.js","assets/ContactSection-CQTn66_6.js"])))=>i.map(i=>d[i]);
import{r as j,a as Zc,u as wa,B as tu,R as eu,b as Hn,N as Ia,L as nu}from"./react-vendor-Bwa1dZdL.js";import{L as ru,_ as su,C as iu,r as po,F as ou,a as au,g as lu,b as cu,c as uu,d as $t,e as hu,f as du,S as fu,h as kt,i as mu,j as pu,k as gu,l as yu,o as Aa,s as _u,m as vu}from"./firebase-vendor-CAk-8R_y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();var ba={exports:{}},vr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=j,Tu=Symbol.for("react.element"),wu=Symbol.for("react.fragment"),Iu=Object.prototype.hasOwnProperty,Au=Eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bu={key:!0,ref:!0,__self:!0,__source:!0};function Ra(r,t,e){var n,i={},o=null,a=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Iu.call(t,n)&&!bu.hasOwnProperty(n)&&(i[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Tu,type:r,key:o,ref:a,props:i,_owner:Au.current}}vr.Fragment=wu;vr.jsx=Ra;vr.jsxs=Ra;ba.exports=vr;var E=ba.exports,xa,go=Zc;xa=go.createRoot,go.hydrateRoot;const Ru="modulepreload",xu=function(r){return"/home/"+r},yo={},Cs=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(h=>{if(h=xu(h),h in yo)return;yo[h]=!0;const d=h.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":Ru,d||(v.as="script"),v.crossOrigin="",v.href=h,c&&v.setAttribute("nonce",c),document.head.appendChild(v),d)return new Promise((I,x)=>{v.addEventListener("load",I),v.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Su=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,n)=>n?n.toUpperCase():e.toLowerCase()),_o=r=>{const t=Su(r);return t.charAt(0).toUpperCase()+t.slice(1)},Pa=(...r)=>r.filter((t,e,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=j.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...c},h)=>j.createElement("svg",{ref:h,...Cu,width:t,height:t,stroke:r,strokeWidth:n?Number(e)*24/Number(t):e,className:Pa("lucide",i),...c},[...a.map(([d,m])=>j.createElement(d,m)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=(r,t)=>{const e=j.forwardRef(({className:n,...i},o)=>j.createElement(Vu,{ref:o,iconNode:t,className:Pa(`lucide-${Pu(_o(r))}`,`lucide-${r}`,n),...i}));return e.displayName=_o(r),e};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ku=St("arrow-down",Nu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Lu=St("arrow-up",Du);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Fu=St("circle-plus",Mu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ou=St("circle-x",ju);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],qu=St("facebook",Uu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],$u=St("github",Bu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ku=St("instagram",zu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Qu=St("linkedin",Gu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Hu=St("mail",Wu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Yu=St("save",Xu);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Zu=St("square-pen",Ju);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],eh=St("trash-2",th);/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],rh=St("twitter",nh),mn={_origin:"https://api.emailjs.com"},sh=(r,t="https://api.emailjs.com")=>{mn._userID=r,mn._origin=t},Sa=(r,t,e)=>{if(!r)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!e)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class vo{constructor(t){this.status=t.status,this.text=t.responseText}}const Ca=(r,t,e={})=>new Promise((n,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const c=new vo(a);c.status===200||c.text==="OK"?n(c):i(c)}),o.addEventListener("error",({target:a})=>{i(new vo(a))}),o.open("POST",mn._origin+r,!0),Object.keys(e).forEach(a=>{o.setRequestHeader(a,e[a])}),o.send(t)}),ih=(r,t,e,n)=>{const i=n||mn._userID;return Sa(i,r,t),Ca("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:i,service_id:r,template_id:t,template_params:e}),{"Content-type":"application/json"})},oh=r=>{let t;if(typeof r=="string"?t=document.querySelector(r):t=r,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},ah=(r,t,e,n)=>{const i=n||mn._userID,o=oh(e);Sa(i,r,t);const a=new FormData(o);return a.append("lib_version","3.2.0"),a.append("service_id",r),a.append("template_id",t),a.append("user_id",i),Ca("/api/v1.0/email/send-form",a)},Eo={init:sh,send:ih,sendForm:ah};var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Va;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.D=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(T,w,b){for(var _=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)_[Ut-2]=arguments[Ut];return p.prototype[w].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);var T=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)T[w]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(w=0;16>w;++w)T[w]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],w=y.g[2];var b=y.g[3],_=p+(b^g&(w^b))+T[0]+3614090360&4294967295;p=g+(_<<7&4294967295|_>>>25),_=b+(w^p&(g^w))+T[1]+3905402710&4294967295,b=p+(_<<12&4294967295|_>>>20),_=w+(g^b&(p^g))+T[2]+606105819&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(p^w&(b^p))+T[3]+3250441966&4294967295,g=w+(_<<22&4294967295|_>>>10),_=p+(b^g&(w^b))+T[4]+4118548399&4294967295,p=g+(_<<7&4294967295|_>>>25),_=b+(w^p&(g^w))+T[5]+1200080426&4294967295,b=p+(_<<12&4294967295|_>>>20),_=w+(g^b&(p^g))+T[6]+2821735955&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(p^w&(b^p))+T[7]+4249261313&4294967295,g=w+(_<<22&4294967295|_>>>10),_=p+(b^g&(w^b))+T[8]+1770035416&4294967295,p=g+(_<<7&4294967295|_>>>25),_=b+(w^p&(g^w))+T[9]+2336552879&4294967295,b=p+(_<<12&4294967295|_>>>20),_=w+(g^b&(p^g))+T[10]+4294925233&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(p^w&(b^p))+T[11]+2304563134&4294967295,g=w+(_<<22&4294967295|_>>>10),_=p+(b^g&(w^b))+T[12]+1804603682&4294967295,p=g+(_<<7&4294967295|_>>>25),_=b+(w^p&(g^w))+T[13]+4254626195&4294967295,b=p+(_<<12&4294967295|_>>>20),_=w+(g^b&(p^g))+T[14]+2792965006&4294967295,w=b+(_<<17&4294967295|_>>>15),_=g+(p^w&(b^p))+T[15]+1236535329&4294967295,g=w+(_<<22&4294967295|_>>>10),_=p+(w^b&(g^w))+T[1]+4129170786&4294967295,p=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(p^g))+T[6]+3225465664&4294967295,b=p+(_<<9&4294967295|_>>>23),_=w+(p^g&(b^p))+T[11]+643717713&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^p&(w^b))+T[0]+3921069994&4294967295,g=w+(_<<20&4294967295|_>>>12),_=p+(w^b&(g^w))+T[5]+3593408605&4294967295,p=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(p^g))+T[10]+38016083&4294967295,b=p+(_<<9&4294967295|_>>>23),_=w+(p^g&(b^p))+T[15]+3634488961&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^p&(w^b))+T[4]+3889429448&4294967295,g=w+(_<<20&4294967295|_>>>12),_=p+(w^b&(g^w))+T[9]+568446438&4294967295,p=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(p^g))+T[14]+3275163606&4294967295,b=p+(_<<9&4294967295|_>>>23),_=w+(p^g&(b^p))+T[3]+4107603335&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^p&(w^b))+T[8]+1163531501&4294967295,g=w+(_<<20&4294967295|_>>>12),_=p+(w^b&(g^w))+T[13]+2850285829&4294967295,p=g+(_<<5&4294967295|_>>>27),_=b+(g^w&(p^g))+T[2]+4243563512&4294967295,b=p+(_<<9&4294967295|_>>>23),_=w+(p^g&(b^p))+T[7]+1735328473&4294967295,w=b+(_<<14&4294967295|_>>>18),_=g+(b^p&(w^b))+T[12]+2368359562&4294967295,g=w+(_<<20&4294967295|_>>>12),_=p+(g^w^b)+T[5]+4294588738&4294967295,p=g+(_<<4&4294967295|_>>>28),_=b+(p^g^w)+T[8]+2272392833&4294967295,b=p+(_<<11&4294967295|_>>>21),_=w+(b^p^g)+T[11]+1839030562&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^p)+T[14]+4259657740&4294967295,g=w+(_<<23&4294967295|_>>>9),_=p+(g^w^b)+T[1]+2763975236&4294967295,p=g+(_<<4&4294967295|_>>>28),_=b+(p^g^w)+T[4]+1272893353&4294967295,b=p+(_<<11&4294967295|_>>>21),_=w+(b^p^g)+T[7]+4139469664&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^p)+T[10]+3200236656&4294967295,g=w+(_<<23&4294967295|_>>>9),_=p+(g^w^b)+T[13]+681279174&4294967295,p=g+(_<<4&4294967295|_>>>28),_=b+(p^g^w)+T[0]+3936430074&4294967295,b=p+(_<<11&4294967295|_>>>21),_=w+(b^p^g)+T[3]+3572445317&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^p)+T[6]+76029189&4294967295,g=w+(_<<23&4294967295|_>>>9),_=p+(g^w^b)+T[9]+3654602809&4294967295,p=g+(_<<4&4294967295|_>>>28),_=b+(p^g^w)+T[12]+3873151461&4294967295,b=p+(_<<11&4294967295|_>>>21),_=w+(b^p^g)+T[15]+530742520&4294967295,w=b+(_<<16&4294967295|_>>>16),_=g+(w^b^p)+T[2]+3299628645&4294967295,g=w+(_<<23&4294967295|_>>>9),_=p+(w^(g|~b))+T[0]+4096336452&4294967295,p=g+(_<<6&4294967295|_>>>26),_=b+(g^(p|~w))+T[7]+1126891415&4294967295,b=p+(_<<10&4294967295|_>>>22),_=w+(p^(b|~g))+T[14]+2878612391&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~p))+T[5]+4237533241&4294967295,g=w+(_<<21&4294967295|_>>>11),_=p+(w^(g|~b))+T[12]+1700485571&4294967295,p=g+(_<<6&4294967295|_>>>26),_=b+(g^(p|~w))+T[3]+2399980690&4294967295,b=p+(_<<10&4294967295|_>>>22),_=w+(p^(b|~g))+T[10]+4293915773&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~p))+T[1]+2240044497&4294967295,g=w+(_<<21&4294967295|_>>>11),_=p+(w^(g|~b))+T[8]+1873313359&4294967295,p=g+(_<<6&4294967295|_>>>26),_=b+(g^(p|~w))+T[15]+4264355552&4294967295,b=p+(_<<10&4294967295|_>>>22),_=w+(p^(b|~g))+T[6]+2734768916&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~p))+T[13]+1309151649&4294967295,g=w+(_<<21&4294967295|_>>>11),_=p+(w^(g|~b))+T[4]+4149444226&4294967295,p=g+(_<<6&4294967295|_>>>26),_=b+(g^(p|~w))+T[11]+3174756917&4294967295,b=p+(_<<10&4294967295|_>>>22),_=w+(p^(b|~g))+T[2]+718787259&4294967295,w=b+(_<<15&4294967295|_>>>17),_=g+(b^(w|~p))+T[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+w&4294967295,y.g[3]=y.g[3]+b&4294967295}n.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var g=p-this.blockSize,T=this.B,w=this.h,b=0;b<p;){if(w==0)for(;b<=g;)i(this,y,b),b+=this.blockSize;if(typeof y=="string"){for(;b<p;)if(T[w++]=y.charCodeAt(b++),w==this.blockSize){i(this,T),w=0;break}}else for(;b<p;)if(T[w++]=y[b++],w==this.blockSize){i(this,T),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var g=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=g&255,g/=256;for(this.u(y),y=Array(16),p=g=0;4>p;++p)for(var T=0;32>T;T+=8)y[g++]=this.g[p]>>>T&255;return y};function o(y,p){var g=c;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function a(y,p){this.h=p;for(var g=[],T=!0,w=y.length-1;0<=w;w--){var b=y[w]|0;T&&b==p||(g[w]=b,T=!1)}this.g=g}var c={};function h(y){return-128<=y&&128>y?o(y,function(p){return new a([p|0],0>p?-1:0)}):new a([y|0],0>y?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return v;if(0>y)return N(d(-y));for(var p=[],g=1,T=0;y>=g;T++)p[T]=y/g|0,g*=4294967296;return new a(p,0)}function m(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return N(m(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),T=v,w=0;w<y.length;w+=8){var b=Math.min(8,y.length-w),_=parseInt(y.substring(w,w+b),p);8>b?(b=d(Math.pow(p,b)),T=T.j(b).add(d(_))):(T=T.j(g),T=T.add(d(_)))}return T}var v=h(0),I=h(1),x=h(16777216);r=a.prototype,r.m=function(){if(D(this))return-N(this).m();for(var y=0,p=1,g=0;g<this.g.length;g++){var T=this.i(g);y+=(0<=T?T:4294967296+T)*p,p*=4294967296}return y},r.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C(this))return"0";if(D(this))return"-"+N(this).toString(y);for(var p=d(Math.pow(y,6)),g=this,T="";;){var w=L(g,p).g;g=O(g,w.j(p));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=w,C(g))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},r.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function C(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function D(y){return y.h==-1}r.l=function(y){return y=O(this,y),D(y)?-1:C(y)?0:1};function N(y){for(var p=y.g.length,g=[],T=0;T<p;T++)g[T]=~y.g[T];return new a(g,~y.h).add(I)}r.abs=function(){return D(this)?N(this):this},r.add=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],T=0,w=0;w<=p;w++){var b=T+(this.i(w)&65535)+(y.i(w)&65535),_=(b>>>16)+(this.i(w)>>>16)+(y.i(w)>>>16);T=_>>>16,b&=65535,_&=65535,g[w]=_<<16|b}return new a(g,g[g.length-1]&-2147483648?-1:0)};function O(y,p){return y.add(N(p))}r.j=function(y){if(C(this)||C(y))return v;if(D(this))return D(y)?N(this).j(N(y)):N(N(this).j(y));if(D(y))return N(this.j(N(y)));if(0>this.l(x)&&0>y.l(x))return d(this.m()*y.m());for(var p=this.g.length+y.g.length,g=[],T=0;T<2*p;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<y.g.length;w++){var b=this.i(T)>>>16,_=this.i(T)&65535,Ut=y.i(w)>>>16,Be=y.i(w)&65535;g[2*T+2*w]+=_*Be,U(g,2*T+2*w),g[2*T+2*w+1]+=b*Be,U(g,2*T+2*w+1),g[2*T+2*w+1]+=_*Ut,U(g,2*T+2*w+1),g[2*T+2*w+2]+=b*Ut,U(g,2*T+2*w+2)}for(T=0;T<p;T++)g[T]=g[2*T+1]<<16|g[2*T];for(T=p;T<2*p;T++)g[T]=0;return new a(g,0)};function U(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function G(y,p){this.g=y,this.h=p}function L(y,p){if(C(p))throw Error("division by zero");if(C(y))return new G(v,v);if(D(y))return p=L(N(y),p),new G(N(p.g),N(p.h));if(D(p))return p=L(y,N(p)),new G(N(p.g),p.h);if(30<y.g.length){if(D(y)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var g=I,T=p;0>=T.l(y);)g=Q(g),T=Q(T);var w=k(g,1),b=k(T,1);for(T=k(T,2),g=k(g,2);!C(T);){var _=b.add(T);0>=_.l(y)&&(w=w.add(g),b=_),T=k(T,1),g=k(g,1)}return p=O(y,w.j(p)),new G(w,p)}for(w=v;0<=y.l(p);){for(g=Math.max(1,Math.floor(y.m()/p.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=d(g),_=b.j(p);D(_)||0<_.l(y);)g-=T,b=d(g),_=b.j(p);C(b)&&(b=I),w=w.add(b),y=O(y,_)}return new G(w,y)}r.A=function(y){return L(this,y).h},r.and=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],T=0;T<p;T++)g[T]=this.i(T)&y.i(T);return new a(g,this.h&y.h)},r.or=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],T=0;T<p;T++)g[T]=this.i(T)|y.i(T);return new a(g,this.h|y.h)},r.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],T=0;T<p;T++)g[T]=this.i(T)^y.i(T);return new a(g,this.h^y.h)};function Q(y){for(var p=y.g.length+1,g=[],T=0;T<p;T++)g[T]=y.i(T)<<1|y.i(T-1)>>>31;return new a(g,y.h)}function k(y,p){var g=p>>5;p%=32;for(var T=y.g.length-g,w=[],b=0;b<T;b++)w[b]=0<p?y.i(b+g)>>>p|y.i(b+g+1)<<32-p:y.i(b+g);return new a(w,y.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Va=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Jt=a}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});var Xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Na,on,ka,nr,ds,Da,La,Ma;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,u){return s==Array.prototype||s==Object.prototype||(s[l]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xn=="object"&&Xn];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=e(this);function i(s,l){if(l)t:{var u=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in u))break t;u=u[A]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&t(u,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var u=0,f=!1,A={next:function(){if(!f&&u<s.length){var R=u++;return{value:l(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,u){return s.call.apply(s.bind,arguments)}function v(s,l,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(l,A)}}return function(){return s.apply(l,arguments)}}function I(s,l,u){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,I.apply(null,arguments)}function x(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function C(s,l){function u(){}u.prototype=l.prototype,s.aa=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,A,R){for(var V=Array(arguments.length-2),J=2;J<arguments.length;J++)V[J-2]=arguments[J];return l.prototype[A].apply(f,V)}}function D(s){const l=s.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function N(s,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const A=s.length||0,R=f.length||0;s.length=A+R;for(let V=0;V<R;V++)s[A+V]=f[V]}else s.push(f)}}class O{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function U(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function L(s){return L[" "](s),s}L[" "]=function(){};var Q=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function k(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function y(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function p(s){const l={};for(const u in s)l[u]=s[u];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,l){let u,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(u in f)s[u]=f[u];for(let R=0;R<g.length;R++)u=g[R],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function w(s){var l=1;s=s.split(":");const u=[];for(;0<l&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function b(s){c.setTimeout(()=>{throw s},0)}function _(){var s=Mr;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Ut{constructor(){this.h=this.g=null}add(l,u){const f=Be.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Be=new O(()=>new _c,s=>s.reset());class _c{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,ze=!1,Mr=new Ut,mi=()=>{const s=c.Promise.resolve(void 0);$e=()=>{s.then(vc)}};var vc=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){b(u)}var l=Be;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}ze=!1};function Qt(){this.s=this.s,this.C=this.C}Qt.prototype.s=!1,Qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Ec=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return s}();function Ke(s,l){if(mt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Q){t:{try{L(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Tc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ke.aa.h.call(this)}}C(Ke,mt);var Tc={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),wc=0;function Ic(s,l,u,f,A){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=A,this.key=++wc,this.da=this.fa=!1}function Vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Nn(s){this.src=s,this.g={},this.h=0}Nn.prototype.add=function(s,l,u,f,A){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=jr(s,l,f,A);return-1<V?(l=s[V],u||(l.fa=!1)):(l=new Ic(l,this.src,R,!!f,A),l.fa=u,s.push(l)),l};function Fr(s,l){var u=l.type;if(u in s.g){var f=s.g[u],A=Array.prototype.indexOf.call(f,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Vn(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function jr(s,l,u,f){for(var A=0;A<s.length;++A){var R=s[A];if(!R.da&&R.listener==l&&R.capture==!!u&&R.ha==f)return A}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Ur={};function pi(s,l,u,f,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)pi(s,l[R],u,f,A);return null}return u=_i(u),s&&s[Cn]?s.K(l,u,d(f)?!!f.capture:!!f,A):Ac(s,l,u,!1,f,A)}function Ac(s,l,u,f,A,R){if(!l)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,J=Br(s);if(J||(s[Or]=J=new Nn(s)),u=J.add(l,u,f,V,R),u.proxy)return u;if(f=bc(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)Ec||(A=V),A===void 0&&(A=!1),s.addEventListener(l.toString(),f,A);else if(s.attachEvent)s.attachEvent(yi(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function bc(){function s(u){return l.call(s.src,s.listener,u)}const l=Rc;return s}function gi(s,l,u,f,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)gi(s,l[R],u,f,A);else f=d(f)?!!f.capture:!!f,u=_i(u),s&&s[Cn]?(s=s.i,l=String(l).toString(),l in s.g&&(R=s.g[l],u=jr(R,u,f,A),-1<u&&(Vn(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete s.g[l],s.h--)))):s&&(s=Br(s))&&(l=s.g[l.toString()],s=-1,l&&(s=jr(l,u,f,A)),(u=-1<s?l[s]:null)&&qr(u))}function qr(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Cn])Fr(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(yi(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Br(l))?(Fr(u,s),u.h==0&&(u.src=null,l[Or]=null)):Vn(s)}}}function yi(s){return s in Ur?Ur[s]:Ur[s]="on"+s}function Rc(s,l){if(s.da)s=!0;else{l=new Ke(l,this);var u=s.listener,f=s.ha||s.src;s.fa&&qr(s),s=u.call(f,l)}return s}function Br(s){return s=s[Or],s instanceof Nn?s:null}var $r="__closure_events_fn_"+(1e9*Math.random()>>>0);function _i(s){return typeof s=="function"?s:(s[$r]||(s[$r]=function(l){return s.handleEvent(l)}),s[$r])}function pt(){Qt.call(this),this.i=new Nn(this),this.M=this,this.F=null}C(pt,Qt),pt.prototype[Cn]=!0,pt.prototype.removeEventListener=function(s,l,u,f){gi(this,s,l,u,f)};function Tt(s,l){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new mt(l,s);else if(l instanceof mt)l.target=l.target||s;else{var A=l;l=new mt(f,s),T(l,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var V=l.g=u[R];A=kn(V,f,!0,l)&&A}if(V=l.g=s,A=kn(V,f,!0,l)&&A,A=kn(V,f,!1,l)&&A,u)for(R=0;R<u.length;R++)V=l.g=u[R],A=kn(V,f,!1,l)&&A}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var u=s.g[l],f=0;f<u.length;f++)Vn(u[f]);delete s.g[l],s.h--}}this.F=null},pt.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},pt.prototype.L=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function kn(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var V=l[R];if(V&&!V.da&&V.capture==u){var J=V.listener,ut=V.ha||V.src;V.fa&&Fr(s.i,V),A=J.call(ut,f)!==!1&&A}}return A&&!f.defaultPrevented}function vi(s,l,u){if(typeof s=="function")u&&(s=I(s,u));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Ei(s){s.g=vi(()=>{s.g=null,s.i&&(s.i=!1,Ei(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class xc extends Qt{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(s){Qt.call(this),this.h=s,this.g={}}C(Ge,Qt);var Ti=[];function wi(s){k(s.g,function(l,u){this.g.hasOwnProperty(u)&&qr(l)},s),s.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),wi(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=c.JSON.stringify,Pc=c.JSON.parse,Sc=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Kr(){}Kr.prototype.h=null;function Ii(s){return s.h||(s.h=s.i())}function Ai(){}var Qe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gr(){mt.call(this,"d")}C(Gr,mt);function Qr(){mt.call(this,"c")}C(Qr,mt);var ue={},bi=null;function Dn(){return bi=bi||new pt}ue.La="serverreachability";function Ri(s){mt.call(this,ue.La,s)}C(Ri,mt);function We(s){const l=Dn();Tt(l,new Ri(l))}ue.STAT_EVENT="statevent";function xi(s,l){mt.call(this,ue.STAT_EVENT,s),this.stat=l}C(xi,mt);function wt(s){const l=Dn();Tt(l,new xi(l,s))}ue.Ma="timingevent";function Pi(s,l){mt.call(this,ue.Ma,s),this.size=l}C(Pi,mt);function He(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function Xe(){this.g=!0}Xe.prototype.xa=function(){this.g=!1};function Cc(s,l,u,f,A,R){s.info(function(){if(s.g)if(R)for(var V="",J=R.split("&"),ut=0;ut<J.length;ut++){var X=J[ut].split("=");if(1<X.length){var gt=X[0];X=X[1];var yt=gt.split("_");V=2<=yt.length&&yt[1]=="type"?V+(gt+"="+X+"&"):V+(gt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+u+`
`+V})}function Vc(s,l,u,f,A,R,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+u+`
`+R+" "+V})}function Ee(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+kc(s,u)+(f?" "+f:"")})}function Nc(s,l){s.info(function(){return"TIMEOUT: "+l})}Xe.prototype.info=function(){};function kc(s,l){if(!s.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return zr(u)}catch{return l}}var Ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wr;function Mn(){}C(Mn,Kr),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},Wr=new Mn;function Wt(s,l,u,f){this.j=s,this.i=l,this.l=u,this.R=f||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ci}function Ci(){this.i=null,this.g="",this.h=!1}var Vi={},Hr={};function Xr(s,l,u){s.L=1,s.v=Un(qt(l)),s.m=u,s.P=!0,Ni(s,null)}function Ni(s,l){s.F=Date.now(),Fn(s),s.A=qt(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Gi(u.i,"t",f),s.C=0,u=s.j.J,s.h=new Ci,s.g=uo(s.j,u?l:null,!s.m),0<s.O&&(s.M=new xc(I(s.Y,s,s.g),s.O)),l=s.U,u=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ti[0]=A.toString()),A=Ti);for(var R=0;R<A.length;R++){var V=pi(u,A[R],f||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),We(),Cc(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const l=this.M;l&&Bt(s)==3?l.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)t:{const yt=Bt(this.g);var l=this.g.Ba();const Ie=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Zi(this.g)))){this.J||yt!=4||l==7||(l==8||0>=Ie?We(3):We(2)),Yr(this);var u=this.g.Z();this.X=u;e:if(ki(this)){var f=Zi(this.g);s="";var A=f.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),Ye(this);var V="";break e}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(R&&l==A-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,Vc(this.i,this.u,this.A,this.l,this.R,yt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var J,ut=this.g;if((J=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(J)){var X=J;break e}}X=null}if(u=X)Ee(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,u);else{this.o=!1,this.s=3,wt(12),he(this),Ye(this);break t}}if(this.P){u=!0;let Vt;for(;!this.J&&this.C<V.length;)if(Vt=Dc(this,V),Vt==Hr){yt==4&&(this.s=4,wt(14),u=!1),Ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==Vi){this.s=4,wt(15),Ee(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else Ee(this.i,this.l,Vt,null),Jr(this,Vt);if(ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||V.length!=0||this.h.h||(this.s=1,wt(16),u=!1),this.o=this.o&&u,!u)Ee(this.i,this.l,V,"[Invalid Chunked Response]"),he(this),Ye(this);else if(0<V.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),ss(gt),gt.M=!0,wt(11))}}else Ee(this.i,this.l,V,null),Jr(this,V);yt==4&&he(this),this.o&&!this.J&&(yt==4?oo(this.j,this):(this.o=!1,Fn(this)))}else Yc(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),he(this),Ye(this)}}}catch{}finally{}};function ki(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Dc(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?Hr:(u=Number(l.substring(u,f)),isNaN(u)?Vi:(f+=1,f+u>l.length?Hr:(l=l.slice(f,f+u),s.C=f+u,l)))}Wt.prototype.cancel=function(){this.J=!0,he(this)};function Fn(s){s.S=Date.now()+s.I,Di(s,s.I)}function Di(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=He(I(s.ba,s),l)}function Yr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Nc(this.i,this.A),this.L!=2&&(We(),wt(17)),he(this),this.s=2,Ye(this)):Di(this,this.S-s)};function Ye(s){s.j.G==0||s.J||oo(s.j,s)}function he(s){Yr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,wi(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Jr(s,l){try{var u=s.j;if(u.G!=0&&(u.g==s||Zr(u.h,s))){if(!s.K&&Zr(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Gn(u),zn(u);else break t;rs(u),wt(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=He(I(u.Za,u),6e3));if(1>=Fi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else fe(u,11)}else if((s.K||u.g==s)&&Gn(u),!U(l))for(A=u.Da.g.parse(l),l=0;l<A.length;l++){let X=A[l];if(u.T=X[0],X=X[1],u.G==2)if(X[0]=="c"){u.K=X[1],u.ia=X[2];const gt=X[3];gt!=null&&(u.la=gt,u.j.info("VER="+u.la));const yt=X[4];yt!=null&&(u.Aa=yt,u.j.info("SVER="+u.Aa));const Ie=X[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(f=1.5*Ie,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Vt=s.g;if(Vt){const Wn=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var R=f.h;R.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ts(R,R.h),R.h=null))}if(f.D){const is=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;is&&(f.ya=is,tt(f.I,f.D,is))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var V=s;if(f.qa=co(f,f.J?f.ia:null,f.W),V.K){ji(f.h,V);var J=V,ut=f.L;ut&&(J.I=ut),J.B&&(Yr(J),Fn(J)),f.g=V}else so(f);0<u.i.length&&Kn(u)}else X[0]!="stop"&&X[0]!="close"||fe(u,7);else u.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?fe(u,7):ns(u):X[0]!="noop"&&u.l&&u.l.ta(X),u.v=0)}}We(4)}catch{}}var Lc=class{constructor(s,l){this.g=s,this.map=l}};function Li(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Fi(s){return s.h?1:s.g?s.g.size:0}function Zr(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function ts(s,l){s.g?s.g.add(l):s.h=l}function ji(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Li.prototype.cancel=function(){if(this.i=Oi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Oi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.D);return l}return D(s.i)}function Mc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],u=s.length,f=0;f<u;f++)l.push(s[f]);return l}l=[],u=0;for(f in s)l[u++]=s[f];return l}function Fc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var u=0;u<s;u++)l.push(u);return l}l=[],u=0;for(const f in s)l[u++]=f;return l}}}function Ui(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var u=Fc(s),f=Mc(s),A=f.length,R=0;R<A;R++)l.call(void 0,f[R],u&&u[R],s)}var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jc(s,l){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),A=null;if(0<=f){var R=s[u].substring(0,f);A=s[u].substring(f+1)}else R=s[u];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function de(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof de){this.h=s.h,jn(this,s.j),this.o=s.o,this.g=s.g,On(this,s.s),this.l=s.l;var l=s.i,u=new tn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Bi(this,u),this.m=s.m}else s&&(l=String(s).match(qi))?(this.h=!1,jn(this,l[1]||"",!0),this.o=Je(l[2]||""),this.g=Je(l[3]||"",!0),On(this,l[4]),this.l=Je(l[5]||"",!0),Bi(this,l[6]||"",!0),this.m=Je(l[7]||"")):(this.h=!1,this.i=new tn(null,this.h))}de.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Ze(l,$i,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Ze(l,$i,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Ze(u,u.charAt(0)=="/"?qc:Uc,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Ze(u,$c)),s.join("")};function qt(s){return new de(s)}function jn(s,l,u){s.j=u?Je(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function On(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Bi(s,l,u){l instanceof tn?(s.i=l,zc(s.i,s.h)):(u||(l=Ze(l,Bc)),s.i=new tn(l,s.h))}function tt(s,l,u){s.i.set(l,u)}function Un(s){return tt(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Je(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ze(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,Oc),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Oc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var $i=/[#\/\?@]/g,Uc=/[#\?:]/g,qc=/[#\?]/g,Bc=/[#\?@]/g,$c=/#/g;function tn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Ht(s){s.g||(s.g=new Map,s.h=0,s.i&&jc(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}r=tn.prototype,r.add=function(s,l){Ht(this),this.i=null,s=Te(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function zi(s,l){Ht(s),l=Te(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Ki(s,l){return Ht(s),l=Te(s,l),s.g.has(l)}r.forEach=function(s,l){Ht(this),this.g.forEach(function(u,f){u.forEach(function(A){s.call(l,A,f,this)},this)},this)},r.na=function(){Ht(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const A=s[f];for(let R=0;R<A.length;R++)u.push(l[f])}return u},r.V=function(s){Ht(this);let l=[];if(typeof s=="string")Ki(this,s)&&(l=l.concat(this.g.get(Te(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)l=l.concat(s[u])}return l},r.set=function(s,l){return Ht(this),this.i=null,s=Te(this,s),Ki(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},r.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Gi(s,l,u){zi(s,l),0<u.length&&(s.i=null,s.g.set(Te(s,l),D(u)),s.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var A=R;V[f]!==""&&(A+="="+encodeURIComponent(String(V[f]))),s.push(A)}}return this.i=s.join("&")};function Te(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function zc(s,l){l&&!s.j&&(Ht(s),s.i=null,s.g.forEach(function(u,f){var A=f.toLowerCase();f!=A&&(zi(this,f),Gi(this,A,u))},s)),s.j=l}function Kc(s,l){const u=new Xe;if(c.Image){const f=new Image;f.onload=x(Xt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=x(Xt,u,"TestLoadImage: error",!1,l,f),f.onabort=x(Xt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=x(Xt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function Gc(s,l){const u=new Xe,f=new AbortController,A=setTimeout(()=>{f.abort(),Xt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?Xt(u,"TestPingServer: ok",!0,l):Xt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Xt(u,"TestPingServer: error",!1,l)})}function Xt(s,l,u,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(u)}catch{}}function Qc(){this.g=new Sc}function Wc(s,l,u){const f=u||"";try{Ui(s,function(A,R){let V=A;d(A)&&(V=zr(A)),l.push(f+R+"="+encodeURIComponent(V))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function qn(s){this.l=s.Ub||null,this.j=s.eb||!1}C(qn,Kr),qn.prototype.g=function(){return new Bn(this.l,this.j)},qn.prototype.i=function(s){return function(){return s}}({});function Bn(s,l){pt.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Bn,pt),r=Bn.prototype,r.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,nn(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,nn(this)),this.g&&(this.readyState=3,nn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?en(this):nn(this),this.readyState==3&&Qi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,en(this))},r.Qa=function(s){this.g&&(this.response=s,en(this))},r.ga=function(){this.g&&en(this)};function en(s){s.readyState=4,s.l=null,s.j=null,s.v=null,nn(s)}r.setRequestHeader=function(s,l){this.u.append(s,l)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function nn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Wi(s){let l="";return k(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function es(s,l,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Wi(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):tt(s,l,u))}function rt(s){pt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(rt,pt);var Hc=/^https?$/i,Xc=["POST","PUT"];r=rt.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wr.g(),this.v=this.o?Ii(this.o):Ii(Wr),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(R){Hi(this,R);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)u.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xc,l,void 0))||f||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of u)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ji(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Hi(this,R)}};function Hi(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Xi(s),$n(s)}function Xi(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),$n(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),rt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Yi(this):this.bb())},r.bb=function(){Yi(this)};function Yi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Bt(s)!=4||s.Z()!=2)){if(s.u&&Bt(s)==4)vi(s.Ea,0,s);else if(Tt(s,"readystatechange"),Bt(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var u;if(!(u=l)){var f;if(f=V===0){var A=String(s.D).match(qi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Hc.test(A?A.toLowerCase():"")}u=f}if(u)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<Bt(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Xi(s)}}finally{$n(s)}}}}function $n(s,l){if(s.g){Ji(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Tt(s,"ready");try{u.onreadystatechange=f}catch{}}}function Ji(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Bt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Pc(l)}};function Zi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Yc(s){const l={};s=(s.g&&2<=Bt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(U(s[f]))continue;var u=w(s[f]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=l[A]||[];l[A]=R,R.push(u)}y(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rn(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function to(s){this.Aa=0,this.i=[],this.j=new Xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rn("baseRetryDelayMs",5e3,s),this.cb=rn("retryDelaySeedMs",1e4,s),this.Wa=rn("forwardChannelMaxRetries",2,s),this.wa=rn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(s&&s.concurrentRequestLimit),this.Da=new Qc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=to.prototype,r.la=8,r.G=1,r.connect=function(s,l,u,f){wt(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=co(this,null,this.W),Kn(this)};function ns(s){if(eo(s),s.G==3){var l=s.U++,u=qt(s.I);if(tt(u,"SID",s.K),tt(u,"RID",l),tt(u,"TYPE","terminate"),sn(s,u),l=new Wt(s,s.j,l),l.L=2,l.v=Un(qt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=uo(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Fn(l)}lo(s)}function zn(s){s.g&&(ss(s),s.g.cancel(),s.g=null)}function eo(s){zn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Gn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Kn(s){if(!Mi(s.h)&&!s.s){s.s=!0;var l=s.Ga;$e||mi(),ze||($e(),ze=!0),Mr.add(l,s),s.B=0}}function Jc(s,l){return Fi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=He(I(s.Ga,s,l),ao(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Wt(this,this.j,s);let R=this.o;if(this.S&&(R?(R=p(R),T(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var l=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break t}if(l===4096||u===this.i.length-1){l=u+1;break t}}l=1e3}else l=1e3;l=ro(this,A,l),u=qt(this.I),tt(u,"RID",s),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),sn(this,u),R&&(this.O?l="headers="+encodeURIComponent(String(Wi(R)))+"&"+l:this.m&&es(u,this.m,R)),ts(this.h,A),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",l),tt(u,"SID","null"),A.T=!0,Xr(A,u,null)):Xr(A,u,l),this.G=2}}else this.G==3&&(s?no(this,s):this.i.length==0||Mi(this.h)||no(this))};function no(s,l){var u;l?u=l.l:u=s.U++;const f=qt(s.I);tt(f,"SID",s.K),tt(f,"RID",u),tt(f,"AID",s.T),sn(s,f),s.m&&s.o&&es(f,s.m,s.o),u=new Wt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),l&&(s.i=l.D.concat(s.i)),l=ro(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),ts(s.h,u),Xr(u,f,l)}function sn(s,l){s.H&&k(s.H,function(u,f){tt(l,f,u)}),s.l&&Ui({},function(u,f){tt(l,f,u)})}function ro(s,l,u){u=Math.min(s.i.length,u);var f=s.l?I(s.l.Na,s.l,s):null;t:{var A=s.i;let R=-1;for(;;){const V=["count="+u];R==-1?0<u?(R=A[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let J=!0;for(let ut=0;ut<u;ut++){let X=A[ut].g;const gt=A[ut].map;if(X-=R,0>X)R=Math.max(0,A[ut].g-100),J=!1;else try{Wc(gt,V,"req"+X+"_")}catch{f&&f(gt)}}if(J){f=V.join("&");break t}}}return s=s.i.splice(0,u),l.D=s,f}function so(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;$e||mi(),ze||($e(),ze=!0),Mr.add(l,s),s.v=0}}function rs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=He(I(s.Fa,s),ao(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,io(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=He(I(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),zn(this),io(this))};function ss(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function io(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=qt(s.qa);tt(l,"RID","rpc"),tt(l,"SID",s.K),tt(l,"AID",s.T),tt(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&tt(l,"TO",s.ja),tt(l,"TYPE","xmlhttp"),sn(s,l),s.m&&s.o&&es(l,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=Un(qt(l)),u.m=null,u.P=!0,Ni(u,s)}r.Za=function(){this.C!=null&&(this.C=null,zn(this),rs(this),wt(19))};function Gn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function oo(s,l){var u=null;if(s.g==l){Gn(s),ss(s),s.g=null;var f=2}else if(Zr(s.h,l))u=l.D,ji(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var A=s.B;f=Dn(),Tt(f,new Pi(f,u)),Kn(s)}else so(s);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Jc(s,l)||f==2&&rs(s)))switch(u&&0<u.length&&(l=s.h,l.i=l.i.concat(u)),A){case 1:fe(s,5);break;case 4:fe(s,10);break;case 3:fe(s,6);break;default:fe(s,2)}}}function ao(s,l){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*l}function fe(s,l){if(s.j.info("Error code "+l),l==2){var u=I(s.fb,s),f=s.Xa;const A=!f;f=new de(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||jn(f,"https"),Un(f),A?Kc(f.toString(),u):Gc(f.toString(),u)}else wt(2);s.G=0,s.l&&s.l.sa(l),lo(s),eo(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function lo(s){if(s.G=0,s.ka=[],s.l){const l=Oi(s.h);(l.length!=0||s.i.length!=0)&&(N(s.ka,l),N(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function co(s,l,u){var f=u instanceof de?qt(u):new de(u);if(f.g!="")l&&(f.g=l+"."+f.g),On(f,f.s);else{var A=c.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new de(null);f&&jn(R,f),l&&(R.g=l),A&&On(R,A),u&&(R.l=u),f=R}return u=s.D,l=s.ya,u&&l&&tt(f,u,l),tt(f,"VER",s.la),sn(s,f),f}function uo(s,l,u){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new rt(new qn({eb:u})):new rt(s.pa),l.Ha(s.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ho(){}r=ho.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Qn(){}Qn.prototype.g=function(s,l){return new xt(s,l)};function xt(s,l){pt.call(this),this.g=new to(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!U(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!U(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new we(this)}C(xt,pt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){ns(this.g)},xt.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=zr(s),s=u);l.i.push(new Lc(l.Ya++,s)),l.G==3&&Kn(l)},xt.prototype.N=function(){this.g.l=null,delete this.j,ns(this.g),delete this.g,xt.aa.N.call(this)};function fo(s){Gr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){t:{for(const u in l){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}C(fo,Gr);function mo(){Qr.call(this),this.status=1}C(mo,Qr);function we(s){this.g=s}C(we,ho),we.prototype.ua=function(){Tt(this.g,"a")},we.prototype.ta=function(s){Tt(this.g,new fo(s))},we.prototype.sa=function(s){Tt(this.g,new mo)},we.prototype.ra=function(){Tt(this.g,"b")},Qn.prototype.createWebChannel=Qn.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Ma=function(){return new Qn},La=function(){return Dn()},Da=ue,ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,nr=Ln,Si.COMPLETE="complete",ka=Si,Ai.EventType=Qe,Qe.OPEN="a",Qe.CLOSE="b",Qe.ERROR="c",Qe.MESSAGE="d",pt.prototype.listen=pt.prototype.K,on=Ai,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Na=rt}).apply(typeof Xn<"u"?Xn:typeof self<"u"?self:typeof window<"u"?window:{});const wo="@firebase/firestore",Io="4.7.10";/**
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
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Fe="11.5.0";/**
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
 */const pe=new ru("@firebase/firestore");function Ae(){return pe.logLevel}function F(r,...t){if(pe.logLevel<=$t.DEBUG){const e=t.map(Vs);pe.debug(`Firestore (${Fe}): ${r}`,...e)}}function Kt(r,...t){if(pe.logLevel<=$t.ERROR){const e=t.map(Vs);pe.error(`Firestore (${Fe}): ${r}`,...e)}}function Ce(r,...t){if(pe.logLevel<=$t.WARN){const e=t.map(Vs);pe.warn(`Firestore (${Fe}): ${r}`,...e)}}function Vs(r){if(typeof r=="string")return r;try{/**
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
 */function B(r="Unexpected state"){const t=`FIRESTORE (${Fe}) INTERNAL ASSERTION FAILED: `+r;throw Kt(t),new Error(t)}function Y(r,t){r||B()}function z(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends ou{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class ch{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class uh{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new zt,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new zt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Y(typeof n.accessToken=="string"),new Fa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new vt(t)}}class hh{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class dh{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new hh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ao{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,au(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0);const n=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ao(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Ao(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ja(){return new TextEncoder}/**
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
 */class Oa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=mh(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function K(r,t){return r<t?-1:r>t?1:0}function fs(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return K(n,i);{const o=ja(),a=ph(o.encode(bo(r,e)),o.encode(bo(t,e)));return a!==0?a:K(n,i)}}e+=n>65535?2:1}return K(r.length,t.length)}function bo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function ph(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return K(r[e],t[e]);return K(r.length,t.length)}function Ve(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
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
 */const Ro=-62135596800,xo=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*xo);return new at(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ro)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xo}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ro;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new at(0,0))}static max(){return new $(new at(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Po="__name__";class Lt{constructor(t,e,n){e===void 0?e=0:e>t.length&&B(),n===void 0?n=t.length-e:n>t.length-e&&B(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Lt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Lt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return K(t.length,e.length)}static compareSegments(t,e){const n=Lt.isNumericId(t),i=Lt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Lt.extractNumericId(t).compare(Lt.extractNumericId(e)):fs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class et extends Lt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new M(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new et(e)}static emptyPath(){return new et([])}}const gh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Lt{construct(t,e,n){return new dt(t,e,n)}static isValidIdentifier(t){return gh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Po}static keyField(){return new dt([Po])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new M(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(n+=c,i++):(o(),i++)}if(o(),a)throw new M(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(et.fromString(t))}static fromName(t){return new q(et.fromString(t).popFirst(5))}static empty(){return new q(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new et(t.slice()))}}/**
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
 */const pn=-1;function yh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=$.fromTimestamp(n===1e9?new at(e+1,0):new at(e,n));return new ee(i,q.empty(),t)}function _h(r){return new ee(r.readTime,r.key,pn)}class ee{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ee($.min(),q.empty(),pn)}static max(){return new ee($.max(),q.empty(),pn)}}function vh(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(r.documentKey,t.documentKey),e!==0?e:K(r.largestBatchId,t.largestBatchId))}/**
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
 */const Eh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Th{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function je(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Eh)throw r;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,n)=>{e(t)})}static reject(t){return new S((e,n)=>{n(t)})}static waitFor(t){return new S((e,n)=>{let i=0,o=0,a=!1;t.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&e()},h=>n(h))}),a=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const n of t)e=e.next(i=>i?S.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new S((n,i)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&n(a)},m=>i(m))}})}static doWhile(t,e){return new S((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function wh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Oe(r){return r.name==="IndexedDbTransactionError"}/**
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
 */const Ns=-1;function Tr(r){return r==null}function lr(r){return r===0&&1/r==-1/0}function Ih(r){return typeof r=="number"&&Number.isInteger(r)&&!lr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ua="";function Ah(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=So(t)),t=bh(r.get(e),t);return So(t)}function bh(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Ua:e+="";break;default:e+=o}}return e}function So(r){return r+Ua+""}/**
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
 */function Co(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ae(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function qa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Yn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Yn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Yn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Yn(this.root,t,this.comparator,!0)}}class Yn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new ht(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,i,o){return this}insert(t,e,n){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vo(this.data.getIterator())}getIteratorFrom(t){return new Vo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new lt(this.comparator);return e.data=t,e}}class Vo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new lt(dt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Ba extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ba("Invalid base64 string: "+o):o}}(t);return new ft(e)}static fromUint8Array(t){const e=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const Rh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ne(r){if(Y(!!r),typeof r=="string"){let t=0;const e=Rh.exec(r);if(Y(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function re(r){return typeof r=="string"?ft.fromBase64String(r):ft.fromUint8Array(r)}/**
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
 */const $a="server_timestamp",za="__type__",Ka="__previous_value__",Ga="__local_write_time__";function ks(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[za])===null||e===void 0?void 0:e.stringValue)===$a}function wr(r){const t=r.mapValue.fields[Ka];return ks(t)?wr(t):t}function gn(r){const t=ne(r.mapValue.fields[Ga].timestampValue);return new at(t.seconds,t.nanos)}/**
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
 */class xh{constructor(t,e,n,i,o,a,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}const cr="(default)";class yn{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Qa="__type__",Wa="__max__",Jn={mapValue:{fields:{__type__:{stringValue:Wa}}}},Ha="__vector__",ur="value";function se(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ks(r)?4:Sh(r)?9007199254740991:Ph(r)?10:11:B()}function Ot(r,t){if(r===t)return!0;const e=se(r);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return gn(r).isEqual(gn(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=ne(i.timestampValue),c=ne(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return st(i.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(i.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return st(i.integerValue)===st(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=st(i.doubleValue),c=st(o.doubleValue);return a===c?lr(a)===lr(c):isNaN(a)&&isNaN(c)}return!1}(r,t);case 9:return Ve(r.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Co(a)!==Co(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ot(a[h],c[h])))return!1;return!0}(r,t);default:return B()}}function _n(r,t){return(r.values||[]).find(e=>Ot(e,t))!==void 0}function Ne(r,t){if(r===t)return 0;const e=se(r),n=se(t);if(e!==n)return K(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(r.booleanValue,t.booleanValue);case 2:return function(o,a){const c=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return No(r.timestampValue,t.timestampValue);case 4:return No(gn(r),gn(t));case 5:return fs(r.stringValue,t.stringValue);case 6:return function(o,a){const c=re(o),h=re(a);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=K(c[d],h[d]);if(m!==0)return m}return K(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,a){const c=K(st(o.latitude),st(a.latitude));return c!==0?c:K(st(o.longitude),st(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return ko(r.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const v=o.fields||{},I=a.fields||{},x=(c=v[ur])===null||c===void 0?void 0:c.arrayValue,C=(h=I[ur])===null||h===void 0?void 0:h.arrayValue,D=K(((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:ko(x,C)}(r.mapValue,t.mapValue);case 11:return function(o,a){if(o===Jn.mapValue&&a===Jn.mapValue)return 0;if(o===Jn.mapValue)return 1;if(a===Jn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let v=0;v<h.length&&v<m.length;++v){const I=fs(h[v],m[v]);if(I!==0)return I;const x=Ne(c[h[v]],d[m[v]]);if(x!==0)return x}return K(h.length,m.length)}(r.mapValue,t.mapValue);default:throw B()}}function No(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return K(r,t);const e=ne(r),n=ne(t),i=K(e.seconds,n.seconds);return i!==0?i:K(e.nanos,n.nanos)}function ko(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Ne(e[i],n[i]);if(o)return o}return K(e.length,n.length)}function ke(r){return ms(r)}function ms(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=ne(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return re(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return q.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ms(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const a of n)o?o=!1:i+=",",i+=`${a}:${ms(e.fields[a])}`;return i+"}"}(r.mapValue):B()}function rr(r){switch(se(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=wr(r);return t?16+rr(t):16;case 5:return 2*r.stringValue.length;case 6:return re(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+rr(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return ae(n.fields,(o,a)=>{i+=o.length+rr(a)}),i}(r.mapValue);default:throw B()}}function Do(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ps(r){return!!r&&"integerValue"in r}function Ds(r){return!!r&&"arrayValue"in r}function Lo(r){return!!r&&"nullValue"in r}function Mo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function sr(r){return!!r&&"mapValue"in r}function Ph(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qa])===null||e===void 0?void 0:e.stringValue)===Ha}function un(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ae(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=un(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=un(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Sh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Wa}/**
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
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=un(e)}setAll(t){let e=dt.emptyPath(),n={},i=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}a?n[c.lastSegment()]=un(a):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];sr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ae(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Rt(un(this.value))}}function Xa(r){const t=[];return ae(r.fields,(e,n)=>{const i=new dt([e]);if(sr(n)){const o=Xa(n.mapValue).fields;if(o.length===0)t.push(i);else for(const a of o)t.push(i.child(a))}else t.push(i)}),new Pt(t)}/**
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
 */class Et{constructor(t,e,n,i,o,a,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,$.min(),$.min(),$.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,i){return new Et(t,1,e,$.min(),n,i,0)}static newNoDocument(t,e){return new Et(t,2,e,$.min(),$.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,$.min(),$.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Fo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],a=r.position[i];if(o.field.isKeyField()?n=q.comparator(q.fromName(a.referenceValue),e.key):n=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function jo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Ot(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ch(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ya{}class ot extends Ya{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Nh(t,e,n):e==="array-contains"?new Lh(t,n):e==="in"?new Mh(t,n):e==="not-in"?new Fh(t,n):e==="array-contains-any"?new jh(t,n):new ot(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new kh(t,n):new Dh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Dt(t,e)}matches(t){return Ja(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Ja(r){return r.op==="and"}function Za(r){return Vh(r)&&Ja(r)}function Vh(r){for(const t of r.filters)if(t instanceof Dt)return!1;return!0}function gs(r){if(r instanceof ot)return r.field.canonicalString()+r.op.toString()+ke(r.value);if(Za(r))return r.filters.map(t=>gs(t)).join(",");{const t=r.filters.map(e=>gs(e)).join(",");return`${r.op}(${t})`}}function tl(r,t){return r instanceof ot?function(n,i){return i instanceof ot&&n.op===i.op&&n.field.isEqual(i.field)&&Ot(n.value,i.value)}(r,t):r instanceof Dt?function(n,i){return i instanceof Dt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,a,c)=>o&&tl(a,i.filters[c]),!0):!1}(r,t):void B()}function el(r){return r instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${ke(e.value)}`}(r):r instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(el).join(" ,")+"}"}(r):"Filter"}class Nh extends ot{constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class kh extends ot{constructor(t,e){super(t,"in",e),this.keys=nl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dh extends ot{constructor(t,e){super(t,"not-in",e),this.keys=nl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function nl(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>q.fromName(n.referenceValue))}class Lh extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ds(e)&&_n(e.arrayValue,this.value)}}class Mh extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_n(this.value.arrayValue,e)}}class Fh extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(_n(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!_n(this.value.arrayValue,e)}}class jh extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ds(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>_n(this.value.arrayValue,n))}}/**
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
 */class Oh{constructor(t,e=null,n=[],i=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function Oo(r,t=null,e=[],n=[],i=null,o=null,a=null){return new Oh(r,t,e,n,i,o,a)}function Ls(r){const t=z(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>gs(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Tr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ke(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ke(n)).join(",")),t.le=e}return t.le}function Ms(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ch(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!tl(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!jo(r.startAt,t.startAt)&&jo(r.endAt,t.endAt)}function ys(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ue{constructor(t,e=null,n=[],i=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Uh(r,t,e,n,i,o,a,c){return new Ue(r,t,e,n,i,o,a,c)}function Fs(r){return new Ue(r)}function Uo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function rl(r){return r.collectionGroup!==null}function hn(r){const t=z(r);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new lt(dt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new vn(o,n))}),e.has(dt.keyField().canonicalString())||t.he.push(new vn(dt.keyField(),n))}return t.he}function Ft(r){const t=z(r);return t.Pe||(t.Pe=qh(t,hn(r))),t.Pe}function qh(r,t){if(r.limitType==="F")return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new vn(i.field,o)});const e=r.endAt?new hr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new hr(r.startAt.position,r.startAt.inclusive):null;return Oo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function _s(r,t){const e=r.filters.concat([t]);return new Ue(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function vs(r,t,e){return new Ue(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ir(r,t){return Ms(Ft(r),Ft(t))&&r.limitType===t.limitType}function sl(r){return`${Ls(Ft(r))}|lt:${r.limitType}`}function be(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>el(i)).join(", ")}]`),Tr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>ke(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>ke(i)).join(",")),`Target(${n})`}(Ft(r))}; limitType=${r.limitType})`}function Ar(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):q.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of hn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(a,c,h){const d=Fo(a,c,h);return a.inclusive?d<=0:d<0}(n.startAt,hn(n),i)||n.endAt&&!function(a,c,h){const d=Fo(a,c,h);return a.inclusive?d>=0:d>0}(n.endAt,hn(n),i))}(r,t)}function Bh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function il(r){return(t,e)=>{let n=!1;for(const i of hn(r)){const o=$h(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function $h(r,t,e){const n=r.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ne(h,d):B()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return B()}}/**
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
 */class ye{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ae(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return qa(this.inner)}size(){return this.innerSize}}/**
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
 */const zh=new nt(q.comparator);function Gt(){return zh}const ol=new nt(q.comparator);function an(...r){let t=ol;for(const e of r)t=t.insert(e.key,e);return t}function al(r){let t=ol;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function me(){return dn()}function ll(){return dn()}function dn(){return new ye(r=>r.toString(),(r,t)=>r.isEqual(t))}const Kh=new nt(q.comparator),Gh=new lt(q.comparator);function W(...r){let t=Gh;for(const e of r)t=t.add(e);return t}const Qh=new lt(K);function Wh(){return Qh}/**
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
 */function js(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function cl(r){return{integerValue:""+r}}function Hh(r,t){return Ih(t)?cl(t):js(r,t)}/**
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
 */class br{constructor(){this._=void 0}}function Xh(r,t,e){return r instanceof dr?function(i,o){const a={fields:{[za]:{stringValue:$a},[Ga]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ks(o)&&(o=wr(o)),o&&(a.fields[Ka]=o),{mapValue:a}}(e,t):r instanceof En?hl(r,t):r instanceof Tn?dl(r,t):function(i,o){const a=ul(i,o),c=qo(a)+qo(i.Ie);return ps(a)&&ps(i.Ie)?cl(c):js(i.serializer,c)}(r,t)}function Yh(r,t,e){return r instanceof En?hl(r,t):r instanceof Tn?dl(r,t):e}function ul(r,t){return r instanceof fr?function(n){return ps(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class dr extends br{}class En extends br{constructor(t){super(),this.elements=t}}function hl(r,t){const e=fl(t);for(const n of r.elements)e.some(i=>Ot(i,n))||e.push(n);return{arrayValue:{values:e}}}class Tn extends br{constructor(t){super(),this.elements=t}}function dl(r,t){let e=fl(t);for(const n of r.elements)e=e.filter(i=>!Ot(i,n));return{arrayValue:{values:e}}}class fr extends br{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function qo(r){return st(r.integerValue||r.doubleValue)}function fl(r){return Ds(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Jh(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof En&&i instanceof En||n instanceof Tn&&i instanceof Tn?Ve(n.elements,i.elements,Ot):n instanceof fr&&i instanceof fr?Ot(n.Ie,i.Ie):n instanceof dr&&i instanceof dr}(r.transform,t.transform)}class Zh{constructor(t,e){this.version=t,this.transformResults=e}}class It{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new It}static exists(t){return new It(void 0,t)}static updateTime(t){return new It(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Rr{}function ml(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new xr(r.key,It.none()):new wn(r.key,r.data,It.none());{const e=r.data,n=Rt.empty();let i=new lt(dt.comparator);for(let o of t.fields)if(!i.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?n.delete(o):n.set(o,a),i=i.add(o)}return new le(r.key,n,new Pt(i.toArray()),It.none())}}function td(r,t,e){r instanceof wn?function(i,o,a){const c=i.value.clone(),h=$o(i.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(r,t,e):r instanceof le?function(i,o,a){if(!ir(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=$o(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(pl(i)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function fn(r,t,e,n){return r instanceof wn?function(o,a,c,h){if(!ir(o.precondition,a))return c;const d=o.value.clone(),m=zo(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof le?function(o,a,c,h){if(!ir(o.precondition,a))return c;const d=zo(o.fieldTransforms,h,a),m=a.data;return m.setAll(pl(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(r,t,e,n):function(o,a,c){return ir(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(r,t,e)}function ed(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ul(n.transform,i||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,o))}return e||null}function Bo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ve(n,i,(o,a)=>Jh(o,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class wn extends Rr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class le extends Rr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function pl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function $o(r,t,e){const n=new Map;Y(r.length===e.length);for(let i=0;i<e.length;i++){const o=r[i],a=o.transform,c=t.data.field(o.field);n.set(o.field,Yh(a,c,e[i]))}return n}function zo(r,t,e){const n=new Map;for(const i of r){const o=i.transform,a=e.data.field(i.field);n.set(i.field,Xh(o,a,t))}return n}class xr extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nd extends Rr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rd{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&td(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ll();return this.mutations.forEach(i=>{const o=t.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(i.key)?null:c;const h=ml(a,c);h!==null&&n.set(i.key,h),a.isValidDocument()||a.convertToNoDocument($.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),W())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,(e,n)=>Bo(e,n))&&Ve(this.baseMutations,t.baseMutations,(e,n)=>Bo(e,n))}}class Os{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Y(t.mutations.length===n.length);let i=function(){return Kh}();const o=t.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,n[a].version);return new Os(t,e,n,i)}}/**
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
 */var it,H;function od(r){switch(r){case P.OK:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B()}}function gl(r){if(r===void 0)return Kt("GRPC error has no .code"),P.UNKNOWN;switch(r){case it.OK:return P.OK;case it.CANCELLED:return P.CANCELLED;case it.UNKNOWN:return P.UNKNOWN;case it.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case it.INTERNAL:return P.INTERNAL;case it.UNAVAILABLE:return P.UNAVAILABLE;case it.UNAUTHENTICATED:return P.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case it.NOT_FOUND:return P.NOT_FOUND;case it.ALREADY_EXISTS:return P.ALREADY_EXISTS;case it.PERMISSION_DENIED:return P.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case it.ABORTED:return P.ABORTED;case it.OUT_OF_RANGE:return P.OUT_OF_RANGE;case it.UNIMPLEMENTED:return P.UNIMPLEMENTED;case it.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(H=it||(it={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ad=new Jt([4294967295,4294967295],0);function Ko(r){const t=ja().encode(r),e=new Va;return e.update(t),new Uint8Array(e.digest())}function Go(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Jt([e,n],0),new Jt([i,o],0)]}class Us{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(n<0)throw new ln(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Jt.fromNumber(this.Ee)}Ae(t,e,n){let i=t.add(e.multiply(Jt.fromNumber(n)));return i.compare(ad)===1&&(i=new Jt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Ko(t),[n,i]=Go(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,i,o);if(!this.Re(a))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Us(o,i,e);return n.forEach(c=>a.insert(c)),a}insert(t){if(this.Ee===0)return;const e=Ko(t),[n,i]=Go(e);for(let o=0;o<this.hashCount;o++){const a=this.Ae(n,i,o);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,In.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Pr($.min(),i,new nt(K),Gt(),W())}}class In{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new In(n,e,W(),W(),W())}}/**
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
 */class or{constructor(t,e,n,i){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=i}}class yl{constructor(t,e){this.targetId=t,this.ge=e}}class _l{constructor(t,e,n=ft.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Qo{constructor(){this.pe=0,this.ye=Wo(),this.we=ft.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=W(),e=W(),n=W();return this.ye.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:B()}}),new In(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=Wo()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Y(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ld{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Gt(),this.$e=Zn(),this.Ue=Zn(),this.Ke=new nt(K)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:B()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((n,i)=>{this.Je(i)&&e(i)})}Ze(t){const e=t.targetId,n=t.ge.count,i=this.Xe(e);if(i){const o=i.target;if(ys(o))if(n===0){const a=new q(o.path);this.ze(e,a,Et.newNoDocument(a,$.min()))}else Y(n===1);else{const a=this.et(e);if(a!==n){const c=this.tt(t),h=c?this.nt(c,t,a):1;if(h!==0){this.Ye(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let a,c;try{a=re(n).toUint8Array()}catch(h){if(h instanceof Ba)return Ce("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Us(a,i,o)}catch(h){return Ce(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),i++)}),i}ot(t){const e=new Map;this.qe.forEach((o,a)=>{const c=this.Xe(a);if(c){if(o.current&&ys(c.target)){const h=new q(c.target.path);this._t(h).has(a)||this.ut(a,h)||this.ze(a,h,Et.newNoDocument(h,t))}o.ve&&(e.set(a,o.Fe()),o.Me())}});let n=W();this.Ue.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this.Xe(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.Qe.forEach((o,a)=>a.setReadTime(t));const i=new Pr(t,e,this.Ke,this.Qe,n);return this.Qe=Gt(),this.$e=Zn(),this.Ue=Zn(),this.Ke=new nt(K),i}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const i=this.He(t);this.ut(t,e)?i.xe(e,1):i.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Qo,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new lt(K),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new lt(K),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||F("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Qo),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Zn(){return new nt(q.comparator)}function Wo(){return new nt(q.comparator)}const cd={asc:"ASCENDING",desc:"DESCENDING"},ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hd={and:"AND",or:"OR"};class dd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Es(r,t){return r.useProto3Json||Tr(t)?t:{value:t}}function mr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vl(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function fd(r,t){return mr(r,t.toTimestamp())}function jt(r){return Y(!!r),$.fromTimestamp(function(e){const n=ne(e);return new at(n.seconds,n.nanos)}(r))}function qs(r,t){return Ts(r,t).canonicalString()}function Ts(r,t){const e=function(i){return new et(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function El(r){const t=et.fromString(r);return Y(bl(t)),t}function ws(r,t){return qs(r.databaseId,t.path)}function os(r,t){const e=El(t);if(e.get(1)!==r.databaseId.projectId)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new M(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new q(wl(e))}function Tl(r,t){return qs(r.databaseId,t)}function md(r){const t=El(r);return t.length===4?et.emptyPath():wl(t)}function Is(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function wl(r){return Y(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Ho(r,t,e){return{name:ws(r,t),fields:e.value.mapValue.fields}}function pd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string"),ft.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ft.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?P.UNKNOWN:gl(d.code);return new M(m,d.message||"")}(a);e=new _l(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=os(r,n.document.name),o=jt(n.document.updateTime),a=n.document.createTime?jt(n.document.createTime):$.min(),c=new Rt({mapValue:{fields:n.document.fields}}),h=Et.newFoundDocument(i,o,a,c),d=n.targetIds||[],m=n.removedTargetIds||[];e=new or(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=os(r,n.document),o=n.readTime?jt(n.readTime):$.min(),a=Et.newNoDocument(i,o),c=n.removedTargetIds||[];e=new or([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=os(r,n.document),o=n.removedTargetIds||[];e=new or([],o,i,null)}else{if(!("filter"in t))return B();{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,a=new id(i,o),c=n.targetId;e=new yl(c,a)}}return e}function gd(r,t){let e;if(t instanceof wn)e={update:Ho(r,t.key,t.value)};else if(t instanceof xr)e={delete:ws(r,t.key)};else if(t instanceof le)e={update:Ho(r,t.key,t.data),updateMask:bd(t.fieldMask)};else{if(!(t instanceof nd))return B();e={verify:ws(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,a){const c=a.transform;if(c instanceof dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof En)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Tn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fr)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw B()}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:fd(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B()}(r,t.precondition)),e}function yd(r,t){return r&&r.length>0?(Y(t!==void 0),r.map(e=>function(i,o){let a=i.updateTime?jt(i.updateTime):jt(o);return a.isEqual($.min())&&(a=jt(o)),new Zh(a,i.transformResults||[])}(e,t))):[]}function _d(r,t){return{documents:[Tl(r,t.path)]}}function vd(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Tl(r,i);const o=function(d){if(d.length!==0)return Al(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:Re(I.field),direction:wd(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Es(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ht:e,parent:i}}function Ed(r){let t=md(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){Y(n===1);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(v){const I=Il(v);return I instanceof Dt&&Za(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(I=>function(C){return new vn(xe(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let c=null;e.limit&&(c=function(v){let I;return I=typeof v=="object"?v.value:v,Tr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(v){const I=!!v.before,x=v.values||[];return new hr(x,I)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const I=!v.before,x=v.values||[];return new hr(x,I)}(e.endAt)),Uh(t,i,a,o,c,"F",h,d)}function Td(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Il(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xe(e.unaryFilter.field);return ot.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xe(e.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xe(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xe(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(r):r.fieldFilter!==void 0?function(e){return ot.create(xe(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>Il(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(r):B()}function wd(r){return cd[r]}function Id(r){return ud[r]}function Ad(r){return hd[r]}function Re(r){return{fieldPath:r.canonicalString()}}function xe(r){return dt.fromServerFormat(r.fieldPath)}function Al(r){return r instanceof ot?function(e){if(e.op==="=="){if(Mo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Lo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Mo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Lo(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:Id(e.op),value:e.value}}}(r):r instanceof Dt?function(e){const n=e.getFilters().map(i=>Al(i));return n.length===1?n[0]:{compositeFilter:{op:Ad(e.op),filters:n}}}(r):B()}function bd(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function bl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Yt{constructor(t,e,n,i,o=$.min(),a=$.min(),c=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Rd{constructor(t){this.Tt=t}}function xd(r){const t=Ed({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vs(t,t.limit,"L"):t}/**
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
 */class Pd{constructor(){this.Tn=new Sd}addToCollectionParentIndex(t,e){return this.Tn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(ee.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(ee.min())}updateCollectionGroup(t,e,n){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Sd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new lt(et.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new lt(et.comparator)).toArray()}}/**
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
 */const Xo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rl=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Rl,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
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
 */class De{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new De(0)}static Kn(){return new De(-1)}}/**
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
 */const Yo="LruGarbageCollector",Cd=1048576;function Jo([r,t],[e,n]){const i=K(r,e);return i===0?K(t,n):i}class Vd{constructor(t){this.Hn=t,this.buffer=new lt(Jo),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Jo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Nd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){F(Yo,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?F(Yo,"Ignoring IndexedDB error during garbage collection: ",e):await je(e)}await this.er(3e5)})}}class kd{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Er.ae);const n=new Vd(e);return this.tr.forEachTarget(t,i=>n.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>n.Zn(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Xo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xo):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,i,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(t,i))).next(v=>(n=v,c=Date.now(),this.removeTargets(t,n,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(v=>(d=Date.now(),Ae()<=$t.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function Dd(r,t){return new kd(r,t)}/**
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
 */class Ld{constructor(){this.changes=new ye(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?S.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Fd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&fn(n.mutation,i,Pt.empty(),at.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,W()).next(()=>n))}getLocalViewOfDocuments(t,e,n=W()){const i=me();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let a=an();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=me();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,W()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,n,i){let o=Gt();const a=dn(),c=function(){return dn()}();return e.forEach((h,d)=>{const m=n.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof le)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fn(m.mutation,d,m.mutation.getFieldMask(),at.now())):a.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var v;return c.set(d,new Md(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const n=dn();let i=new nt((a,c)=>a-c),o=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=n.get(h)||Pt.empty();m=c.applyToLocalView(d,m),n.set(h,m);const v=(i.get(c.batchId)||W()).add(h);i=i.insert(c.batchId,v)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,v=ll();m.forEach(I=>{if(!o.has(I)){const x=ml(e.get(I),n.get(I));x!==null&&v.set(I,x),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return S.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):rl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):S.resolve(me());let c=pn,h=o;return a.next(d=>S.forEach(d,(m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,W())).next(m=>({batchId:c,changes:al(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(n=>{let i=an();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let a=an();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const d=function(v,I){return new Ue(I,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next(m=>{m.forEach((v,I)=>{a=a.insert(v,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Et.newInvalidDocument(m)))});let c=an();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&fn(m.mutation,d,Pt.empty(),at.now()),Ar(e,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class jd{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return S.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:jt(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:xd(i.bundledQuery),readTime:jt(i.readTime)}}(e)),S.resolve()}}/**
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
 */class Od{constructor(){this.overlays=new nt(q.comparator),this.Rr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const n=me();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.Et(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Rr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(n)),S.resolve()}getOverlaysForCollection(t,e,n){const i=me(),o=e.length+1,a=new q(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new nt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=o.get(d.largestBatchId);m===null&&(m=me(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=me(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return S.resolve(c)}Et(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(n.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new sd(e,n));let o=this.Rr.get(e);o===void 0&&(o=W(),this.Rr.set(e,o)),this.Rr.set(e,o.add(n.key))}}/**
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
 */class Ud{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class Bs{constructor(){this.Vr=new lt(ct.mr),this.gr=new lt(ct.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new ct(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.wr(new ct(t,e))}Sr(t,e){t.forEach(n=>this.removeReference(n,e))}br(t){const e=new q(new et([])),n=new ct(e,t),i=new ct(e,t+1),o=[];return this.gr.forEachInRange([n,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new q(new et([])),n=new ct(e,t),i=new ct(e,t+1);let o=W();return this.gr.forEachInRange([n,i],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ct(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ct{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return q.comparator(t.key,e.key)||K(t.Cr,e.Cr)}static pr(t,e){return K(t.Cr,e.Cr)||q.comparator(t.key,e.key)}}/**
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
 */class qd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new lt(ct.mr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rd(o,e,n,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new ct(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Nr(n),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?Ns:this.Fr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ct(e,0),i=new ct(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([n,i],a=>{const c=this.Or(a.Cr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lt(K);return e.forEach(i=>{const o=new ct(i,0),a=new ct(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{n=n.add(c.Cr)})}),S.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;q.isDocumentKey(o)||(o=o.child(""));const a=new ct(new q(o),0);let c=new lt(K);return this.Mr.forEachWhile(h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.Cr)),!0)},a),S.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(n=>{const i=this.Or(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){Y(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return S.forEach(e.mutations,i=>{const o=new ct(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=n})}qn(t){}containsKey(t,e){const n=new ct(e,0),i=this.Mr.firstAfterOrEqual(n);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bd{constructor(t){this.kr=t,this.docs=function(){return new nt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return S.resolve(n?n.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let n=Gt();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),S.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Gt();const a=e.path,c=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||vh(_h(m),n)<=0||(i.has(m.key)||Ar(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,n,i){B()}qr(t,e){return S.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new $d(this)}getSize(t){return S.resolve(this.size)}}class $d extends Ld{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(n)}),S.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class zd{constructor(t){this.persistence=t,this.Qr=new ye(e=>Ls(e),Ms),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Bs,this.targetCount=0,this.Kr=De.Un()}forEachTarget(t,e){return this.Qr.forEach((n,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),S.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new De(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.zn(e),S.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return S.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),S.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(a=>{o.push(i.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),S.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return S.resolve(n)}containsKey(t,e){return S.resolve(this.Ur.containsKey(e))}}/**
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
 */class xl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Er(0),this.zr=!1,this.zr=!0,this.jr=new Ud,this.referenceDelegate=t(this),this.Hr=new zd(this),this.indexManager=new Pd,this.remoteDocumentCache=function(i){return new Bd(i)}(n=>this.referenceDelegate.Jr(n)),this.serializer=new Rd(e),this.Yr=new jd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new qd(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){F("MemoryPersistence","Starting transaction:",t);const i=new Kd(this.Gr.next());return this.referenceDelegate.Zr(),n(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return S.or(Object.values(this.Wr).map(n=>()=>n.containsKey(t,e)))}}class Kd extends Th{constructor(t){super(),this.currentSequenceNumber=t}}class $s{constructor(t){this.persistence=t,this.ti=new Bs,this.ni=null}static ri(t){return new $s(t)}get ii(){if(this.ni)return this.ni;throw B()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),S.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),S.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ii,n=>{const i=q.fromPath(n);return this.si(t,i).next(o=>{o||e.removeEntry(i,$.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return S.or([()=>S.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class pr{constructor(t,e){this.persistence=t,this.oi=new ye(n=>Ah(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Dd(this,e)}static ri(t,e){return new pr(t,e)}Zr(){}Xr(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}sr(t){let e=0;return this.rr(t,n=>{e++}).next(()=>e)}rr(t,e){return S.forEach(this.oi,(n,i)=>this.ar(t,n,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,a=>this.ar(t,a,e).next(c=>{c||(n++,o.removeEntry(a,$.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),S.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),S.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=rr(t.data.value)),e}ar(t,e,n){return S.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return S.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class zs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=i}static Yi(t,e){let n=W(),i=W();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new zs(t,e.fromCache,n,i)}}/**
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
 */class Qd{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return mu()?8:wh(pu())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.rs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(t,e,i,n).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Gd;return this._s(t,e,a).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,a,c.size)})}).next(()=>o.result)}us(t,e,n,i){return n.documentReadCount<this.es?(Ae()<=$t.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",be(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),S.resolve()):(Ae()<=$t.DEBUG&&F("QueryEngine","Query:",be(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ts*i?(Ae()<=$t.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",be(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ft(e))):S.resolve())}rs(t,e){if(Uo(e))return S.resolve(null);let n=Ft(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=vs(e,null,"F"),n=Ft(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const a=W(...o);return this.ns.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const d=this.cs(e,c);return this.ls(e,d,a,h.readTime)?this.rs(t,vs(e,null,"F")):this.hs(t,d,e,h)}))})))}ss(t,e,n,i){return Uo(e)||i.isEqual($.min())?S.resolve(null):this.ns.getDocuments(t,n).next(o=>{const a=this.cs(e,o);return this.ls(e,a,n,i)?S.resolve(null):(Ae()<=$t.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),be(e)),this.hs(t,a,e,yh(i,pn)).next(c=>c))})}cs(t,e){let n=new lt(il(t));return e.forEach((i,o)=>{Ar(t,o)&&(n=n.add(o))}),n}ls(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,n){return Ae()<=$t.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",be(e)),this.ns.getDocumentsMatchingQuery(t,e,ee.min(),n)}hs(t,e,n,i){return this.ns.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Ks="LocalStore",Wd=3e8;class Hd{constructor(t,e,n,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new nt(K),this.Is=new ye(o=>Ls(o),Ms),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Fd(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Xd(r,t,e,n){return new Hd(r,t,e,n)}async function Pl(r,t){const e=z(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const a=[],c=[];let h=W();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Yd(r,t){const e=z(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const v=d.batch,I=v.keys();let x=S.resolve();return I.forEach(C=>{x=x.next(()=>m.getEntry(h,C)).next(D=>{const N=d.docVersions.get(C);Y(N!==null),D.version.compareTo(N)<0&&(v.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))})}),x.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function Sl(r){const t=z(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function Jd(r,t){const e=z(r),n=t.snapshotVersion;let i=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});i=e.Ts;const c=[];t.targetChanges.forEach((m,v)=>{const I=i.get(v);if(!I)return;c.push(e.Hr.removeMatchingKeys(o,m.removedDocuments,v).next(()=>e.Hr.addMatchingKeys(o,m.addedDocuments,v)));let x=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?x=x.withResumeToken(ft.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):m.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(m.resumeToken,n)),i=i.insert(v,x),function(D,N,O){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Wd?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(I,x,m)&&c.push(e.Hr.updateTargetData(o,x))});let h=Gt(),d=W();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Zd(o,a,t.documentUpdates).next(m=>{h=m.Vs,d=m.fs})),!n.isEqual($.min())){const m=e.Hr.getLastRemoteSnapshotVersion(o).next(v=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Ts=i,o))}function Zd(r,t,e){let n=W(),i=W();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let a=Gt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual($.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):F(Ks,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Vs:a,fs:i}})}function tf(r,t){const e=z(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ns),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function ef(r,t){const e=z(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Hr.getTargetData(n,t).next(o=>o?(i=o,S.resolve(i)):e.Hr.allocateTargetId(n).next(a=>(i=new Yt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.Ts.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n})}async function As(r,t,e){const n=z(r),i=n.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,a=>n.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Oe(a))throw a;F(Ks,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(i.target)}function Zo(r,t,e){const n=z(r);let i=$.min(),o=W();return n.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const v=z(h),I=v.Is.get(m);return I!==void 0?S.resolve(v.Ts.get(I)):v.Hr.getTargetData(d,m)}(n,a,Ft(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>n.Ps.getDocumentsMatchingQuery(a,t,e?i:$.min(),e?o:W())).next(c=>(nf(n,Bh(t),c),{documents:c,gs:o})))}function nf(r,t,e){let n=r.Es.get(t)||$.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Es.set(t,n)}class ta{constructor(){this.activeTargetIds=Wh()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rf{constructor(){this.ho=new ta,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ta,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */const ea="ConnectivityMonitor";class na{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){F(ea,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){F(ea,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tr=null;function bs(){return tr===null?tr=function(){return 268435456+Math.round(2147483648*Math.random())}():tr++,"0x"+tr.toString(16)}/**
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
 */const as="RestConnection",of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class af{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${i}`,this.wo=this.databaseId.database===cr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}So(t,e,n,i,o){const a=bs(),c=this.bo(t,e.toUriEncodedString());F(as,`Sending RPC '${t}' ${a}:`,c,n);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(t,c,h,n).then(d=>(F(as,`Received RPC '${t}' ${a}: `,d),d),d=>{throw Ce(as,`RPC '${t}' ${a} failed with error: `,d,"url: ",c,"request:",n),d})}Co(t,e,n,i,o,a){return this.So(t,e,n,i,o)}Do(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const n=of[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
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
 */const _t="WebChannelConnection";class cf extends af{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,i){const o=bs();return new Promise((a,c)=>{const h=new Na;h.setWithCredentials(!0),h.listenOnce(ka.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case nr.NO_ERROR:const m=h.getResponseJson();F(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case nr.TIMEOUT:F(_t,`RPC '${t}' ${o} timed out`),c(new M(P.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const v=h.getStatus();if(F(_t,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const C=function(N){const O=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(O)>=0?O:P.UNKNOWN}(x.status);c(new M(C,x.message))}else c(new M(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new M(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{F(_t,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);F(_t,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,n,15)})}Wo(t,e,n){const i=bs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ma(),c=La(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");F(_t,`Creating RPC '${t}' stream ${i}: ${m}`,h);const v=a.createWebChannel(m,h);let I=!1,x=!1;const C=new lf({Fo:N=>{x?F(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,N):(I||(F(_t,`Opening RPC '${t}' stream ${i} transport.`),v.open(),I=!0),F(_t,`RPC '${t}' stream ${i} sending:`,N),v.send(N))},Mo:()=>v.close()}),D=(N,O,U)=>{N.listen(O,G=>{try{U(G)}catch(L){setTimeout(()=>{throw L},0)}})};return D(v,on.EventType.OPEN,()=>{x||(F(_t,`RPC '${t}' stream ${i} transport opened.`),C.Qo())}),D(v,on.EventType.CLOSE,()=>{x||(x=!0,F(_t,`RPC '${t}' stream ${i} transport closed`),C.Uo())}),D(v,on.EventType.ERROR,N=>{x||(x=!0,Ce(_t,`RPC '${t}' stream ${i} transport errored:`,N),C.Uo(new M(P.UNAVAILABLE,"The operation could not be completed")))}),D(v,on.EventType.MESSAGE,N=>{var O;if(!x){const U=N.data[0];Y(!!U);const G=U,L=(G==null?void 0:G.error)||((O=G[0])===null||O===void 0?void 0:O.error);if(L){F(_t,`RPC '${t}' stream ${i} received error:`,L);const Q=L.status;let k=function(g){const T=it[g];if(T!==void 0)return gl(T)}(Q),y=L.message;k===void 0&&(k=P.INTERNAL,y="Unknown error status: "+Q+" with message "+L.message),x=!0,C.Uo(new M(k,y)),v.close()}else F(_t,`RPC '${t}' stream ${i} received:`,U),C.Ko(U)}}),D(c,Da.STAT_EVENT,N=>{N.stat===ds.PROXY?F(_t,`RPC '${t}' stream ${i} detected buffering proxy`):N.stat===ds.NOPROXY&&F(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function ls(){return typeof document<"u"?document:null}/**
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
 */class Cl{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-n);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const ra="PersistentStream";class Vl{constructor(t,e,n,i,o,a,c,h){this.Ti=t,this.n_=n,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Cl(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Kt(e.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.i_===e&&this.V_(n,i)},n=>{t(()=>{const i=new M(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(i)})})}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{n(()=>this.listener.xo())}),this.stream.No(()=>{n(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{n(()=>this.m_(i))}),this.stream.onMessage(i=>{n(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return F(ra,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(F(ra,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uf extends Vl{constructor(t,e,n,i,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=pd(this.serializer,t),n=function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?jt(a.readTime):$.min()}(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=Is(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=ys(h)?{documents:_d(o,h)}:{query:vd(o,h).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=vl(o,a.resumeToken);const d=Es(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=mr(o,a.snapshotVersion.toTimestamp());const d=Es(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const n=Td(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=Is(this.serializer),e.removeTarget=t,this.I_(e)}}class hf extends Vl{constructor(t,e,n,i,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,a),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=yd(t.writeResults,t.commitTime),n=jt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=Is(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>gd(this.serializer,n))};this.I_(e)}}/**
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
 */class df{}class ff extends df{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.So(t,Ts(e,n),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(P.UNKNOWN,o.toString())})}Co(t,e,n,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(t,Ts(e,n),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(P.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class mf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Kt(e),this.N_=!1):F("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ge="RemoteStore";class pf{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{n.enqueueAndForget(async()=>{_e(this)&&(F(ge,"Restarting streams for network reachability change."),await async function(h){const d=z(h);d.W_.add(4),await An(d),d.j_.set("Unknown"),d.W_.delete(4),await Cr(d)}(this))})}),this.j_=new mf(n,i)}}async function Cr(r){if(_e(r))for(const t of r.G_)await t(!0)}async function An(r){for(const t of r.G_)await t(!1)}function Nl(r,t){const e=z(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Hs(e)?Ws(e):qe(e).c_()&&Qs(e,t))}function Gs(r,t){const e=z(r),n=qe(e);e.K_.delete(t),n.c_()&&kl(e,t),e.K_.size===0&&(n.c_()?n.P_():_e(e)&&e.j_.set("Unknown"))}function Qs(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}qe(r).y_(t)}function kl(r,t){r.H_.Ne(t),qe(r).w_(t)}function Ws(r){r.H_=new ld({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),qe(r).start(),r.j_.B_()}function Hs(r){return _e(r)&&!qe(r).u_()&&r.K_.size>0}function _e(r){return z(r).W_.size===0}function Dl(r){r.H_=void 0}async function gf(r){r.j_.set("Online")}async function yf(r){r.K_.forEach((t,e)=>{Qs(r,t)})}async function _f(r,t){Dl(r),Hs(r)?(r.j_.q_(t),Ws(r)):r.j_.set("Unknown")}async function vf(r,t,e){if(r.j_.set("Online"),t instanceof _l&&t.state===2&&t.cause)try{await async function(i,o){const a=o.cause;for(const c of o.targetIds)i.K_.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.K_.delete(c),i.H_.removeTarget(c))}(r,t)}catch(n){F(ge,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await gr(r,n)}else if(t instanceof or?r.H_.We(t):t instanceof yl?r.H_.Ze(t):r.H_.je(t),!e.isEqual($.min()))try{const n=await Sl(r.localStore);e.compareTo(n)>=0&&await function(o,a){const c=o.H_.ot(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.K_.get(d);m&&o.K_.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.K_.get(h);if(!m)return;o.K_.set(h,m.withResumeToken(ft.EMPTY_BYTE_STRING,m.snapshotVersion)),kl(o,h);const v=new Yt(m.target,h,d,m.sequenceNumber);Qs(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){F(ge,"Failed to raise snapshot:",n),await gr(r,n)}}async function gr(r,t,e){if(!Oe(t))throw t;r.W_.add(1),await An(r),r.j_.set("Offline"),e||(e=()=>Sl(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{F(ge,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await Cr(r)})}function Ll(r,t){return t().catch(e=>gr(r,e,t))}async function Vr(r){const t=z(r),e=ie(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:Ns;for(;Ef(t);)try{const i=await tf(t.localStore,n);if(i===null){t.U_.length===0&&e.P_();break}n=i.batchId,Tf(t,i)}catch(i){await gr(t,i)}Ml(t)&&Fl(t)}function Ef(r){return _e(r)&&r.U_.length<10}function Tf(r,t){r.U_.push(t);const e=ie(r);e.c_()&&e.S_&&e.b_(t.mutations)}function Ml(r){return _e(r)&&!ie(r).u_()&&r.U_.length>0}function Fl(r){ie(r).start()}async function wf(r){ie(r).C_()}async function If(r){const t=ie(r);for(const e of r.U_)t.b_(e.mutations)}async function Af(r,t,e){const n=r.U_.shift(),i=Os.from(n,t,e);await Ll(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Vr(r)}async function bf(r,t){t&&ie(r).S_&&await async function(n,i){if(function(a){return od(a)&&a!==P.ABORTED}(i.code)){const o=n.U_.shift();ie(n).h_(),await Ll(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Vr(n)}}(r,t),Ml(r)&&Fl(r)}async function sa(r,t){const e=z(r);e.asyncQueue.verifyOperationInProgress(),F(ge,"RemoteStore received new credentials");const n=_e(e);e.W_.add(3),await An(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Cr(e)}async function Rf(r,t){const e=z(r);t?(e.W_.delete(2),await Cr(e)):t||(e.W_.add(2),await An(e),e.j_.set("Unknown"))}function qe(r){return r.J_||(r.J_=function(e,n,i){const o=z(e);return o.M_(),new uf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:gf.bind(null,r),No:yf.bind(null,r),Lo:_f.bind(null,r),p_:vf.bind(null,r)}),r.G_.push(async t=>{t?(r.J_.h_(),Hs(r)?Ws(r):r.j_.set("Unknown")):(await r.J_.stop(),Dl(r))})),r.J_}function ie(r){return r.Y_||(r.Y_=function(e,n,i){const o=z(e);return o.M_(),new hf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:wf.bind(null,r),Lo:bf.bind(null,r),D_:If.bind(null,r),v_:Af.bind(null,r)}),r.G_.push(async t=>{t?(r.Y_.h_(),await Vr(r)):(await r.Y_.stop(),r.U_.length>0&&(F(ge,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class Xs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const a=Date.now()+n,c=new Xs(t,e,a,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(r,t){if(Kt("AsyncQueue",`${t}: ${r}`),Oe(r))return new M(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Pe{static emptySet(t){return new Pe(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(e,n)=>q.comparator(e.key,n.key),this.keyedMap=an(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Pe;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class ia{constructor(){this.Z_=new nt(q.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):B():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Le{constructor(t,e,n,i,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Le(t,e,Pe.emptySet(e),a,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class xf{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class Pf{constructor(){this.queries=oa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const i=z(e),o=i.queries;i.queries=oa(),o.forEach((a,c)=>{for(const h of c.ta)h.onError(n)})})(this,new M(P.ABORTED,"Firestore shutting down"))}}function oa(){return new ye(r=>sl(r),Ir)}async function jl(r,t){const e=z(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.na()&&t.ra()&&(n=2):(o=new xf,n=t.ra()?0:1);try{switch(n){case 0:o.ea=await e.onListen(i,!0);break;case 1:o.ea=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(a){const c=Ys(a,`Initialization of query '${be(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&Js(e)}async function Ol(r,t){const e=z(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const a=o.ta.indexOf(t);a>=0&&(o.ta.splice(a,1),o.ta.length===0?i=t.ra()?0:1:!o.na()&&t.ra()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Sf(r,t){const e=z(r);let n=!1;for(const i of t){const o=i.query,a=e.queries.get(o);if(a){for(const c of a.ta)c.oa(i)&&(n=!0);a.ea=i}}n&&Js(e)}function Cf(r,t,e){const n=z(r),i=n.queries.get(t);if(i)for(const o of i.ta)o.onError(e);n.queries.delete(t)}function Js(r){r.ia.forEach(t=>{t.next()})}var Rs,aa;(aa=Rs||(Rs={}))._a="default",aa.Cache="cache";class Ul{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Le(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Rs.Cache}}/**
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
 */class ql{constructor(t){this.key=t}}class Bl{constructor(t){this.key=t}}class Vf{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=W(),this.mutatedKeys=W(),this.ya=il(t),this.wa=new Pe(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new ia,i=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,a=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,v)=>{const I=i.get(m),x=Ar(this.query,v)?v:null,C=!!I&&this.mutatedKeys.has(I.key),D=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let N=!1;I&&x?I.data.isEqual(x.data)?C!==D&&(n.track({type:3,doc:x}),N=!0):this.va(I,x)||(n.track({type:2,doc:x}),N=!0,(h&&this.ya(x,h)>0||d&&this.ya(x,d)<0)&&(c=!0)):!I&&x?(n.track({type:0,doc:x}),N=!0):I&&!x&&(n.track({type:1,doc:I}),N=!0,(h||d)&&(c=!0)),N&&(x?(a=a.add(x),o=D?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort((m,v)=>function(x,C){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return D(x)-D(C)}(m.type,v.type)||this.ya(m.doc,v.doc)),this.Ca(n),i=i!=null&&i;const c=e&&!i?this.Fa():[],h=this.pa.size===0&&this.current&&!i?1:0,d=h!==this.ga;return this.ga=h,a.length!==0||d?{snapshot:new Le(this.query,t.wa,o,a,t.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ia,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=W(),this.wa.forEach(n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))});const e=[];return t.forEach(n=>{this.pa.has(n)||e.push(new Bl(n))}),this.pa.forEach(n=>{t.has(n)||e.push(new ql(n))}),e}Oa(t){this.fa=t.gs,this.pa=W();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Le.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Zs="SyncEngine";class Nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class kf{constructor(t){this.key=t,this.Ba=!1}}class Df{constructor(t,e,n,i,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new ye(c=>sl(c),Ir),this.qa=new Map,this.Qa=new Set,this.$a=new nt(q.comparator),this.Ua=new Map,this.Ka=new Bs,this.Wa={},this.Ga=new Map,this.za=De.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Lf(r,t,e=!0){const n=Wl(r);let i;const o=n.ka.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Na()):i=await $l(n,t,e,!0),i}async function Mf(r,t){const e=Wl(r);await $l(e,t,!0,!1)}async function $l(r,t,e,n){const i=await ef(r.localStore,Ft(t)),o=i.targetId,a=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await Ff(r,t,o,a==="current",i.resumeToken)),r.isPrimaryClient&&e&&Nl(r.remoteStore,i),c}async function Ff(r,t,e,n,i){r.Ha=(v,I,x)=>async function(D,N,O,U){let G=N.view.ba(O);G.ls&&(G=await Zo(D.localStore,N.query,!1).then(({documents:y})=>N.view.ba(y,G)));const L=U&&U.targetChanges.get(N.targetId),Q=U&&U.targetMismatches.get(N.targetId)!=null,k=N.view.applyChanges(G,D.isPrimaryClient,L,Q);return ca(D,N.targetId,k.Ma),k.snapshot}(r,v,I,x);const o=await Zo(r.localStore,t,!0),a=new Vf(t,o.gs),c=a.ba(o.documents),h=In.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=a.applyChanges(c,r.isPrimaryClient,h);ca(r,e,d.Ma);const m=new Nf(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function jf(r,t,e){const n=z(r),i=n.ka.get(t),o=n.qa.get(i.targetId);if(o.length>1)return n.qa.set(i.targetId,o.filter(a=>!Ir(a,t))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await As(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Gs(n.remoteStore,i.targetId),xs(n,i.targetId)}).catch(je)):(xs(n,i.targetId),await As(n.localStore,i.targetId,!0))}async function Of(r,t){const e=z(r),n=e.ka.get(t),i=e.qa.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Gs(e.remoteStore,n.targetId))}async function Uf(r,t,e){const n=Qf(r);try{const i=await function(a,c){const h=z(a),d=at.now(),m=c.reduce((x,C)=>x.add(C.key),W());let v,I;return h.persistence.runTransaction("Locally write mutations","readwrite",x=>{let C=Gt(),D=W();return h.ds.getEntries(x,m).next(N=>{C=N,C.forEach((O,U)=>{U.isValidDocument()||(D=D.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(x,C)).next(N=>{v=N;const O=[];for(const U of c){const G=ed(U,v.get(U.key).overlayedDocument);G!=null&&O.push(new le(U.key,G,Xa(G.value.mapValue),It.exists(!0)))}return h.mutationQueue.addMutationBatch(x,d,O,c)}).next(N=>{I=N;const O=N.applyToLocalDocumentSet(v,D);return h.documentOverlayCache.saveOverlays(x,N.batchId,O)})}).then(()=>({batchId:I.batchId,changes:al(v)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(a,c,h){let d=a.Wa[a.currentUser.toKey()];d||(d=new nt(K)),d=d.insert(c,h),a.Wa[a.currentUser.toKey()]=d}(n,i.batchId,e),await bn(n,i.changes),await Vr(n.remoteStore)}catch(i){const o=Ys(i,"Failed to persist write");e.reject(o)}}async function zl(r,t){const e=z(r);try{const n=await Jd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const a=e.Ua.get(o);a&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Ba=!0:i.modifiedDocuments.size>0?Y(a.Ba):i.removedDocuments.size>0&&(Y(a.Ba),a.Ba=!1))}),await bn(e,n,t)}catch(n){await je(n)}}function la(r,t,e){const n=z(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.ka.forEach((o,a)=>{const c=a.view.sa(t);c.snapshot&&i.push(c.snapshot)}),function(a,c){const h=z(a);h.onlineState=c;let d=!1;h.queries.forEach((m,v)=>{for(const I of v.ta)I.sa(c)&&(d=!0)}),d&&Js(h)}(n.eventManager,t),i.length&&n.La.p_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function qf(r,t,e){const n=z(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Ua.get(t),o=i&&i.key;if(o){let a=new nt(q.comparator);a=a.insert(o,Et.newNoDocument(o,$.min()));const c=W().add(o),h=new Pr($.min(),new Map,new nt(K),a,c);await zl(n,h),n.$a=n.$a.remove(o),n.Ua.delete(t),ti(n)}else await As(n.localStore,t,!1).then(()=>xs(n,t,e)).catch(je)}async function Bf(r,t){const e=z(r),n=t.batch.batchId;try{const i=await Yd(e.localStore,t);Gl(e,n,null),Kl(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await bn(e,i)}catch(i){await je(i)}}async function $f(r,t,e){const n=z(r);try{const i=await function(a,c){const h=z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(v=>(Y(v!==null),m=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(n.localStore,t);Gl(n,t,e),Kl(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await bn(n,i)}catch(i){await je(i)}}function Kl(r,t){(r.Ga.get(t)||[]).forEach(e=>{e.resolve()}),r.Ga.delete(t)}function Gl(r,t,e){const n=z(r);let i=n.Wa[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Wa[n.currentUser.toKey()]=i}}function xs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach(n=>{r.Ka.containsKey(n)||Ql(r,n)})}function Ql(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Gs(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),ti(r))}function ca(r,t,e){for(const n of e)n instanceof ql?(r.Ka.addReference(n.key,t),zf(r,n)):n instanceof Bl?(F(Zs,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||Ql(r,n.key)):B()}function zf(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(F(Zs,"New document in limbo: "+e),r.Qa.add(n),ti(r))}function ti(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new q(et.fromString(t)),n=r.za.next();r.Ua.set(n,new kf(e)),r.$a=r.$a.insert(e,n),Nl(r.remoteStore,new Yt(Ft(Fs(e.path)),n,"TargetPurposeLimboResolution",Er.ae))}}async function bn(r,t,e){const n=z(r),i=[],o=[],a=[];n.ka.isEmpty()||(n.ka.forEach((c,h)=>{a.push(n.Ha(h,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const v=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(d){i.push(d);const v=zs.Yi(h.targetId,d);o.push(v)}}))}),await Promise.all(a),n.La.p_(i),await async function(h,d){const m=z(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>S.forEach(d,I=>S.forEach(I.Hi,x=>m.persistence.referenceDelegate.addReference(v,I.targetId,x)).next(()=>S.forEach(I.Ji,x=>m.persistence.referenceDelegate.removeReference(v,I.targetId,x)))))}catch(v){if(!Oe(v))throw v;F(Ks,"Failed to update sequence numbers: "+v)}for(const v of d){const I=v.targetId;if(!v.fromCache){const x=m.Ts.get(I),C=x.snapshotVersion,D=x.withLastLimboFreeSnapshotVersion(C);m.Ts=m.Ts.insert(I,D)}}}(n.localStore,o))}async function Kf(r,t){const e=z(r);if(!e.currentUser.isEqual(t)){F(Zs,"User change. New user:",t.toKey());const n=await Pl(e.localStore,t);e.currentUser=t,function(o,a){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new M(P.CANCELLED,a))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await bn(e,n.Rs)}}function Gf(r,t){const e=z(r),n=e.Ua.get(t);if(n&&n.Ba)return W().add(n.key);{let i=W();const o=e.qa.get(t);if(!o)return i;for(const a of o){const c=e.ka.get(a);i=i.unionWith(c.view.Sa)}return i}}function Wl(r){const t=z(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=qf.bind(null,t),t.La.p_=Sf.bind(null,t.eventManager),t.La.Ja=Cf.bind(null,t.eventManager),t}function Qf(r){const t=z(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$f.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Xd(this.persistence,new Qd,t.initialUser,this.serializer)}Xa(t){return new xl($s.ri,this.serializer)}Za(t){return new rf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Wf extends yr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){Y(this.persistence.referenceDelegate instanceof pr);const n=this.persistence.referenceDelegate.garbageCollector;return new Nd(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new xl(n=>pr.ri(n,e),this.serializer)}}class Ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>la(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kf.bind(null,this.syncEngine),await Rf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Pf}()}createDatastore(t){const e=Sr(t.databaseInfo.databaseId),n=function(o){return new cf(o)}(t.databaseInfo);return function(o,a,c,h){return new ff(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,a,c){return new pf(n,i,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>la(this.syncEngine,e,0),function(){return na.D()?new na:new sf}())}createSyncEngine(t,e){return function(i,o,a,c,h,d,m){const v=new Df(i,o,a,c,h,d);return m&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=z(i);F(ge,"RemoteStore shutting down."),o.W_.add(5),await An(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Ps.provider={build:()=>new Ps};/**
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
 */class Hl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const oe="FirestoreClient";class Hf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=Oa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async a=>{F(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(F(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ys(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function cs(r,t){r.asyncQueue.verifyOperationInProgress(),F(oe,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Pl(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ua(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Xf(r);F(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>sa(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>sa(t.remoteStore,i)),r._onlineComponents=t}async function Xf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){F(oe,"Using user provided OfflineComponentProvider");try{await cs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ce("Error using user provided cache. Falling back to memory cache: "+e),await cs(r,new yr)}}else F(oe,"Using default OfflineComponentProvider"),await cs(r,new Wf(void 0));return r._offlineComponents}async function Xl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(F(oe,"Using user provided OnlineComponentProvider"),await ua(r,r._uninitializedComponentsProvider._online)):(F(oe,"Using default OnlineComponentProvider"),await ua(r,new Ps))),r._onlineComponents}function Yf(r){return Xl(r).then(t=>t.syncEngine)}async function Yl(r){const t=await Xl(r),e=t.eventManager;return e.onListen=Lf.bind(null,t.syncEngine),e.onUnlisten=jf.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Of.bind(null,t.syncEngine),e}function Jf(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Hl({next:I=>{m.su(),a.enqueueAndForget(()=>Ol(o,v));const x=I.docs.has(c);!x&&I.fromCache?d.reject(new M(P.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&I.fromCache&&h&&h.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new Ul(Fs(c.path),m,{includeMetadataChanges:!0,Ta:!0});return jl(o,v)}(await Yl(r),r.asyncQueue,t,e,n)),n.promise}function Zf(r,t,e={}){const n=new zt;return r.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Hl({next:I=>{m.su(),a.enqueueAndForget(()=>Ol(o,v)),I.fromCache&&h.source==="server"?d.reject(new M(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new Ul(c,m,{includeMetadataChanges:!0,Ta:!0});return jl(o,v)}(await Yl(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function Jl(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ha=new Map;/**
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
 */function Zl(r,t,e){if(!e)throw new M(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function tm(r,t,e,n){if(t===!0&&n===!0)throw new M(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function da(r){if(!q.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function fa(r){if(q.isDocumentKey(r))throw new M(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Nr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":B()}function Ct(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new M(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Nr(r);throw new M(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const tc="firestore.googleapis.com",ma=!0;class pa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new M(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tc,this.ssl=ma}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ma;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Rl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Cd)throw new M(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}tm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jl((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lh;switch(n.type){case"firstParty":return new dh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ha.get(e);n&&(F("ComponentProvider","Removing Datastore"),ha.delete(e),n.terminate())}(this),Promise.resolve()}}function em(r,t,e,n={}){var i;const o=(r=Ct(r,kr))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:r._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==tc&&o.host!==c&&Ce("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:n});if(!hu(h,a)&&(r._setSettings(h),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=vt.MOCK_USER;else{d=du(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const v=n.mockUserToken.sub||n.mockUserToken.user_id;if(!v)throw new M(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new vt(v)}r._authCredentials=new ch(new Fa(d,m))}}/**
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
 */class ve{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class At{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Zt extends ve{constructor(t,e,n){super(t,e,Fs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new q(t))}withConverter(t){return new Zt(this.firestore,t,this._path)}}function ec(r,t,...e){if(r=kt(r),Zl("collection","path",t),r instanceof kr){const n=et.fromString(t,...e);return fa(n),new Zt(r,null,n)}{if(!(r instanceof At||r instanceof Zt))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return fa(n),new Zt(r.firestore,null,n)}}function Mt(r,t,...e){if(r=kt(r),arguments.length===1&&(t=Oa.newId()),Zl("doc","path",t),r instanceof kr){const n=et.fromString(t,...e);return da(n),new At(r,null,new q(n))}{if(!(r instanceof At||r instanceof Zt))throw new M(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(et.fromString(t,...e));return da(n),new At(r.firestore,r instanceof Zt?r.converter:null,new q(n))}}/**
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
 */const ga="AsyncQueue";class ya{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Cl(this,"async_queue_retry"),this.Su=()=>{const n=ls();n&&F(ga,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=ls();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=ls();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new zt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Oe(t))throw t;F(ga,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(n=>{this.gu=n,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(n);throw Kt("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.pu=!1,n))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=Xs.createAndSchedule(this,t,e,n,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&B()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class ce extends kr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new ya,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ya(t),this._firestoreClient=void 0,await t}}}function nm(r,t){const e=typeof r=="object"?r:lu(),n=typeof r=="string"?r:cr,i=cu(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=uu("firestore");o&&em(i,...o)}return i}function Dr(r){if(r._terminated)throw new M(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rm(r),r._firestoreClient}function rm(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,d,m){return new xh(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Jl(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Hf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(ft.fromBase64String(t))}catch(e){throw new M(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Rn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ei{constructor(t){this._methodName=t}}/**
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
 */class ni{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
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
 */class ri{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const sm=/^__.*__$/;class im{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}class nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function rc(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class si{constructor(t,e,n,i,o,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new si(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.$u(t),i}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:n,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return _r(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(rc(this.Lu)&&sm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class om{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Sr(t)}ju(t,e,n,i=!1){return new si({Lu:t,methodName:e,zu:n,path:dt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xn(r){const t=r._freezeSettings(),e=Sr(r._databaseId);return new om(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ii(r,t,e,n,i,o={}){const a=r.ju(o.merge||o.mergeFields?2:0,t,e,i);oi("Data must be an object, but it was:",a,n);const c=oc(n,a);let h,d;if(o.merge)h=new Pt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const I=Ss(t,v,e);if(!a.contains(I))throw new M(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);lc(m,I)||m.push(I)}h=new Pt(m),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new im(new Rt(c),h,d)}class Lr extends ei{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}function sc(r,t,e,n){const i=r.ju(1,t,e);oi("Data must be an object, but it was:",i,n);const o=[],a=Rt.empty();ae(n,(h,d)=>{const m=ai(t,h,e);d=kt(d);const v=i.Uu(m);if(d instanceof Lr)o.push(m);else{const I=Pn(d,v);I!=null&&(o.push(m),a.set(m,I))}});const c=new Pt(o);return new nc(a,c,i.fieldTransforms)}function ic(r,t,e,n,i,o){const a=r.ju(1,t,e),c=[Ss(t,n,e)],h=[i];if(o.length%2!=0)throw new M(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(Ss(t,o[I])),h.push(o[I+1]);const d=[],m=Rt.empty();for(let I=c.length-1;I>=0;--I)if(!lc(d,c[I])){const x=c[I];let C=h[I];C=kt(C);const D=a.Uu(x);if(C instanceof Lr)d.push(x);else{const N=Pn(C,D);N!=null&&(d.push(x),m.set(x,N))}}const v=new Pt(d);return new nc(m,v,a.fieldTransforms)}function am(r,t,e,n=!1){return Pn(e,r.ju(n?4:3,t))}function Pn(r,t){if(ac(r=kt(r)))return oi("Unsupported field value:",t,r),oc(r,t);if(r instanceof ei)return function(n,i){if(!rc(i.Lu))throw i.Wu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(n,i){const o=[];let a=0;for(const c of n){let h=Pn(c,i.Ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=kt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Hh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=at.fromDate(n);return{timestampValue:mr(i.serializer,o)}}if(n instanceof at){const o=new at(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mr(i.serializer,o)}}if(n instanceof ni)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Me)return{bytesValue:vl(i.serializer,n._byteString)};if(n instanceof At){const o=i.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:qs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof ri)return function(a,c){return{mapValue:{fields:{[Qa]:{stringValue:Ha},[ur]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return js(c.serializer,d)})}}}}}}(n,i);throw i.Wu(`Unsupported field value: ${Nr(n)}`)}(r,t)}function oc(r,t){const e={};return qa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ae(r,(n,i)=>{const o=Pn(i,t.qu(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function ac(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof at||r instanceof ni||r instanceof Me||r instanceof At||r instanceof ei||r instanceof ri)}function oi(r,t,e){if(!ac(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Nr(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function Ss(r,t,e){if((t=kt(t))instanceof Rn)return t._internalPath;if(typeof t=="string")return ai(r,t);throw _r("Field path arguments must be of type string or ",r,!1,void 0,e)}const lm=new RegExp("[~\\*/\\[\\]]");function ai(r,t,e){if(t.search(lm)>=0)throw _r(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Rn(...t.split("."))._internalPath}catch{throw _r(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function _r(r,t,e,n,i){const o=n&&!n.isEmpty(),a=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${i}`),h+=")"),new M(P.INVALID_ARGUMENT,c+r+h)}function lc(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class cc{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new cm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(li("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class cm extends cc{data(){return super.data()}}function li(r,t){return typeof t=="string"?ai(r,t):t instanceof Rn?t._internalPath:t._delegate._internalPath}/**
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
 */function um(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ci{}class uc extends ci{}function hc(r,t,...e){let n=[];t instanceof ci&&n.push(t),n=n.concat(e),function(o){const a=o.filter(h=>h instanceof hi).length,c=o.filter(h=>h instanceof ui).length;if(a>1||a>0&&c>0)throw new M(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class ui extends uc{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new ui(t,e,n)}_apply(t){const e=this._parse(t);return fc(t._query,e),new ve(t.firestore,t.converter,_s(t._query,e))}_parse(t){const e=xn(t.firestore);return function(o,a,c,h,d,m,v){let I;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new M(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){va(v,m);const C=[];for(const D of v)C.push(_a(h,o,D));I={arrayValue:{values:C}}}else I=_a(h,o,v)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||va(v,m),I=am(c,a,v,m==="in"||m==="not-in");return ot.create(d,m,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class hi extends ci{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new hi(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let a=i;const c=o.getFlattenedFilters();for(const h of c)fc(a,h),a=_s(a,h)}(t._query,e),new ve(t.firestore,t.converter,_s(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class di extends uc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new di(t,e)}_apply(t){const e=function(i,o,a){if(i.startAt!==null)throw new M(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new M(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vn(o,a)}(t._query,this._field,this._direction);return new ve(t.firestore,t.converter,function(i,o){const a=i.explicitOrderBy.concat([o]);return new Ue(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function dc(r,t="asc"){const e=t,n=li("orderBy",r);return di._create(n,e)}function _a(r,t,e){if(typeof(e=kt(e))=="string"){if(e==="")throw new M(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rl(t)&&e.indexOf("/")!==-1)throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(et.fromString(e));if(!q.isDocumentKey(n))throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Do(r,new q(n))}if(e instanceof At)return Do(r,e._key);throw new M(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nr(e)}.`)}function va(r,t){if(!Array.isArray(r)||r.length===0)throw new M(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fc(r,t){const e=function(i,o){for(const a of i)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class hm{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw B()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ae(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[ur].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(a=>st(a.doubleValue));return new ri(o)}convertGeoPoint(t){return new ni(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=wr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(gn(t));default:return null}}convertTimestamp(t){const e=ne(t);return new at(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);Y(bl(n));const i=new yn(n.get(1),n.get(3)),o=new q(n.popFirst(5));return i.isEqual(e)||Kt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function fi(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
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
 */class cn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class mc extends cc{constructor(t,e,n,i,o,a){super(t,e,n,i,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ar(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ar extends mc{data(t={}){return super.data(t)}}class dm{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ar(this._firestore,this._userDataWriter,n.key,n,new cn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ar(i._firestore,i._userDataWriter,c.doc.key,c.doc,new cn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:fm(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function fm(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
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
 */function pc(r){r=Ct(r,At);const t=Ct(r.firestore,ce);return Jf(Dr(t),r._key).then(e=>_m(t,r,e))}class gc extends hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new At(this.firestore,null,e)}}function yc(r){r=Ct(r,ve);const t=Ct(r.firestore,ce),e=Dr(t),n=new gc(t);return um(r._query),Zf(e,r._query).then(i=>new dm(t,n,r,i))}function mm(r,t,e){r=Ct(r,At);const n=Ct(r.firestore,ce),i=fi(r.converter,t,e);return Sn(n,[ii(xn(n),"setDoc",r._key,i,r.converter!==null,e).toMutation(r._key,It.none())])}function pm(r,t,e,...n){r=Ct(r,At);const i=Ct(r.firestore,ce),o=xn(i);let a;return a=typeof(t=kt(t))=="string"||t instanceof Rn?ic(o,"updateDoc",r._key,t,e,n):sc(o,"updateDoc",r._key,t),Sn(i,[a.toMutation(r._key,It.exists(!0))])}function gm(r){return Sn(Ct(r.firestore,ce),[new xr(r._key,It.none())])}function ym(r,t){const e=Ct(r.firestore,ce),n=Mt(r),i=fi(r.converter,t);return Sn(e,[ii(xn(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,It.exists(!1))]).then(()=>n)}function Sn(r,t){return function(n,i){const o=new zt;return n.asyncQueue.enqueueAndForget(async()=>Uf(await Yf(n),i,o)),o.promise}(Dr(r),t)}function _m(r,t,e){const n=e.docs.get(t._key),i=new gc(r);return new mc(r,i,t._key,n,new cn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class vm{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=xn(t)}set(t,e,n){this._verifyNotCommitted();const i=us(t,this._firestore),o=fi(i.converter,e,n),a=ii(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(a.toMutation(i._key,It.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=us(t,this._firestore);let a;return a=typeof(e=kt(e))=="string"||e instanceof Rn?ic(this._dataReader,"WriteBatch.update",o._key,e,n,i):sc(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(a.toMutation(o._key,It.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=us(t,this._firestore);return this._mutations=this._mutations.concat(new xr(e._key,It.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function us(r,t){if((r=kt(r)).firestore!==t)throw new M(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function Ea(r){return Dr(r=Ct(r,ce)),new vm(r,t=>Sn(r,t))}(function(t,e=!0){(function(i){Fe=i})(fu),su(new iu("firestore",(n,{instanceIdentifier:i,options:o})=>{const a=n.getProvider("app").getImmediate(),c=new ce(new uh(n.getProvider("auth-internal")),new fh(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),po(wo,Io,t),po(wo,Io,"esm2017")})();const Em={apiKey:"AIzaSyAsGrtbRSjz77iShv4tB0vQ33A23ie9JM8",authDomain:"tiger3homs-f3a5f-d60da.firebaseapp.com",projectId:"tiger3homs-f3a5f-d60da",storageBucket:"tiger3homs-f3a5f-d60da.firebasestorage.app",messagingSenderId:"509990310606",appId:"1:509990310606:web:e36d91ea748c4cd64d369f",measurementId:"G-DDZTZ6MR6S"};let hs=null,te=null,Z=null;try{hs=gu(Em),te=yu(hs),Z=nm(hs)}catch(r){throw console.error("Firebase initialization error:",r),new Error(`Firebase initialization failed: ${r instanceof Error?r.message:String(r)}`)}if(!Z)throw new Error("Firestore failed to initialize and is null.");const Nt={en:{generalInfo:{title:"General Information",siteTitle:"Tiger3Homs",siteRole:"Website Developer & Tech Enthusiast",logoUrl:"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",footerText:"© 2025. Built and designed by Tiger3homs"},about:{title:"About Me",description:"I'm a passionate software developer with expertise in web development and system architecture. I love building efficient, scalable solutions and contributing to open-source projects. When I'm not coding, you can find me exploring new technologies and sharing knowledge with the developer community."},projects:{title:"Featured Projects",project1:{title:"OS Design v1",description:"The website offers a sleek, intuitive design with straightforward navigation and professional fonts. It highlights the company's services and expertise, making it easy for visitors to get in touch. Simple visuals and effective calls-to-action ensure a smooth and engaging experience. For more information, explore the site.",tags:["Modern","User-friendly","Professional"],link:""},project2:{title:"Project 2",description:"Coming soon.",tags:["Wait","For","It"],link:""},project3:{title:"New Project",description:"This is a new project description.",tags:["New","Exciting","Innovative"],link:""}},contact:{title:"Contact Me",nameLabel:"Name",namePlaceholder:"Enter your name",emailLabel:"Email",emailPlaceholder:"Enter your email",messageLabel:"Message",messagePlaceholder:"Enter your message",submitButton:"Send Message"},services:{title:"Services",list:[{title:"Web Development",description:"Building modern, responsive websites tailored to your needs."},{title:"UI/UX Design",description:"Crafting user-friendly and visually appealing designs."},{title:"SEO Optimization",description:"Improving your website's visibility on search engines."},{title:"Consulting",description:"Providing expert advice to help you achieve your goals."}]}}},Tm=r=>{const e=/[A-Z]/.test(r),n=/[a-z]/.test(r),i=/\d/.test(r),o=/[!@#$%^&*(),.?":{}|<>]/.test(r);return r.length>=8&&e&&n&&i&&o},wm=()=>{const[r,t]=j.useState(""),[e,n]=j.useState(""),[i,o]=j.useState(""),[a,c]=j.useState(!1),h=wa();j.useEffect(()=>{const m=setTimeout(()=>{te.signOut()},18e5);return()=>clearTimeout(m)},[]),j.useEffect(()=>{const m=Aa(te,v=>{v&&h("/admin/dashboard",{replace:!0})});return()=>m()},[h]);const d=async m=>{if(m.preventDefault(),o(""),c(!0),!r.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){o("Please enter a valid email address"),c(!1);return}if(!Tm(e)){o("Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters"),c(!1);return}try{await _u(te,r,e)}catch(v){let I="Failed to log in. Please check your credentials.";if(v.code)switch(v.code){case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":I="Invalid email or password.";break;case"auth/invalid-email":I="Invalid email format.";break;case"auth/too-many-requests":I="Too many failed attempts. Please try again later.";break;default:console.error("Firebase Login error:",v)}o(I)}finally{c(!1)}};return E.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:E.jsxs("div",{className:"p-8 bg-white rounded shadow-md w-full max-w-sm",children:[E.jsx("h2",{className:"text-2xl font-bold mb-6 text-center",children:"Admin Login"}),E.jsxs("form",{onSubmit:d,children:[E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),E.jsx("input",{type:"email",id:"email",value:r,onChange:m=>t(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"password",children:"Password"}),E.jsx("input",{type:"password",id:"password",value:e,onChange:m=>n(m.target.value),className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0,disabled:a})]}),i&&E.jsx("p",{className:"text-red-500 text-xs italic mb-4",children:i}),E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50",disabled:a,children:a?"Logging in...":"Login"})})]})]})})},Im=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:i,handleAddProject:o,handleDelete:a,renderFields:c})=>E.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[E.jsxs("div",{className:"flex justify-between items-center mb-3",children:[E.jsx("h4",{className:"text-lg font-semibold capitalize",children:(r==null?void 0:r.title)||String(t[0]).replace(/([A-Z])/g," $1")}),E.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),(r==null?void 0:r.title)!==void 0&&typeof r.title=="string"&&c({title:r.title},t,e,n,i,void 0,void 0),Object.entries(r).map(([h,d])=>{if(h!=="title"&&typeof d=="object"&&d!==null&&!Array.isArray(d)){const m=[...t,h];return E.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[E.jsxs("div",{className:"flex justify-between items-start mb-3",children:[E.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",E.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:h})]}),E.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${h}"?`)&&a(m)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${h}`,children:"Delete Project"})]}),E.jsx("div",{className:"space-y-4",children:c(d,m,e,n,i,void 0,a)})]},m.join("."))}return null})]},t.join(".")),Am=({data:r,path:t,handleChange:e,editingPath:n,setEditingPath:i,handleDelete:o,renderFields:a})=>E.jsx(E.Fragment,{children:a(r,t,e,n,i,void 0,o)}),bm=()=>{const[r,t]=j.useState("#007bff"),[e,n]=j.useState("#6c757d"),[i,o]=j.useState("'Noto Sans', sans-serif"),[a,c]=j.useState(!0),[h,d]=j.useState(!1),m=O=>/^#[0-9A-F]{6}$/i.test(O),v=O=>{t(O.target.value)},I=O=>{const U=O.target.value;(m(U)||U===""||U==="#")&&t(U)},x=O=>{n(O.target.value)},C=O=>{const U=O.target.value;(m(U)||U===""||U==="#")&&n(U)},D=O=>{o(O.target.value)};j.useEffect(()=>{if(!Z){console.error("loadStyles Effect: Firestore db instance is not available."),c(!1);return}const O=Mt(Z,"settings","styles");console.log("loadStyles Effect: Created stylesDocRefInsideEffect:",O.path),(async()=>{c(!0),console.log("loadStyles Function: Attempting getDoc...");try{const G=await pc(O);if(console.log("loadStyles Function: getDoc finished."),G.exists()){console.log("loadStyles Function: Document exists. Data:",G.data());const L=G.data();t(L.primaryColor),n(L.secondaryColor),o(L.fontFamily)}else console.log("loadStyles Function: No style document found, using defaults.")}catch(G){console.error("loadStyles Function: Error during getDoc or processing:",G),alert("Failed to load styles.")}finally{console.log("loadStyles Function: Setting isLoading to false."),c(!1)}})()},[Z]),j.useEffect(()=>{if(!a){const O=r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",U=e.match(/^#[0-9A-F]{6}$/i)?e:"#000000";document.documentElement.style.setProperty("--primary-color",O),document.documentElement.style.setProperty("--secondary-color",U),document.documentElement.style.setProperty("--font-family",i)}},[r,e,i,a]);const N=async()=>{if(!Z){console.error("Save Error: Firestore db instance is not available."),alert("Error: Cannot save styles. Firestore not available.");return}const O=Mt(Z,"settings","styles");if(!O){console.error("Save Error: Failed to create doc reference."),alert("Error: Cannot save styles. Failed to create reference.");return}d(!0),console.log("Attempting to save styles to Firestore:",{primaryColor:r,secondaryColor:e,fontFamily:i});try{const U={primaryColor:r,secondaryColor:e,fontFamily:i};await mm(O,U),console.log("Firestore save successful:",U),alert("Styles saved successfully!")}catch(U){console.error("Firestore save error:",U),alert(`Failed to save styles. Error: ${U instanceof Error?U.message:String(U)}`)}finally{console.log("Finished save attempt."),d(!1)}};return a?E.jsx("div",{children:"Loading styles..."}):E.jsxs("div",{children:[E.jsx("h4",{className:"text-lg font-medium mb-4",children:"Style Editor"})," ",E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{children:[E.jsx("label",{htmlFor:"primaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Primary Color"}),E.jsxs("div",{className:"flex items-center space-x-2",children:[E.jsx("input",{type:"color",id:"primaryColorPicker",value:r.match(/^#[0-9A-F]{6}$/i)?r:"#000000",onChange:v,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),E.jsx("input",{type:"text",id:"primaryColorText",value:r,onChange:I,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"secondaryColorText",className:"block text-sm font-medium text-gray-700 mb-1",children:"Secondary Color"}),E.jsxs("div",{className:"flex items-center space-x-2",children:[E.jsx("input",{type:"color",id:"secondaryColorPicker",value:e.match(/^#[0-9A-F]{6}$/i)?e:"#000000",onChange:x,className:"h-10 w-10 p-1 border border-gray-300 rounded cursor-pointer"}),E.jsx("input",{type:"text",id:"secondaryColorText",value:e,onChange:C,className:"flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"#rrggbb",maxLength:7})]})]}),E.jsxs("div",{children:[E.jsx("label",{htmlFor:"fontFamily",className:"block text-sm font-medium text-gray-700 mb-1",children:"Font Family"}),E.jsx("input",{type:"text",id:"fontFamily",value:i,onChange:D,className:"w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"e.g., 'Arial, sans-serif', 'Roboto, sans-serif'"}),E.jsx("p",{className:"mt-1 text-xs text-gray-500",children:"Enter a valid CSS font-family value."})]}),E.jsxs("div",{className:"mt-6 p-4 border border-gray-300 rounded",children:[E.jsx("h5",{className:"text-md font-medium mb-3",children:"Preview"}),E.jsxs("div",{style:{fontFamily:i},children:[E.jsx("p",{className:"mb-2",children:"This text uses the selected font family."}),E.jsx("button",{style:{backgroundColor:r,color:"white"},className:"px-3 py-1 rounded mr-2",children:"Primary Button"}),E.jsx("button",{style:{backgroundColor:e,color:"white"},className:"px-3 py-1 rounded",children:"Secondary Button"}),E.jsx("p",{style:{color:r},className:"mt-2",children:"This text uses the primary color."}),E.jsx("p",{style:{color:e},className:"mt-1",children:"This text uses the secondary color."})]})]}),E.jsx("div",{className:"pt-4",children:E.jsx("button",{onClick:N,disabled:h||a,className:`px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${h||a?"opacity-50 cursor-not-allowed":""}`,children:h?"Saving...":"Save Styles"})})]})]})},er=["Github","Facebook","Mail","Instagram","Linkedin","Twitter"],Rm=()=>{const[r,t]=j.useState([]),[e,n]=j.useState(!0),[i,o]=j.useState(null),[a,c]=j.useState(!1),[h,d]=j.useState(null),[m,v]=j.useState({name:"",url:"",icon:er[0],order:0}),I=j.useMemo(()=>Z?ec(Z,"socialLinks"):null,[]),x=j.useCallback(async()=>{if(!Z||!I){o("Firestore is not initialized correctly."),n(!1);return}n(!0),o(null);try{const k=hc(I,dc("order","asc")),p=(await yc(k)).docs.map(g=>({...g.data(),id:g.id}));t(p)}catch(k){console.error("Error fetching social links:",k),o("Failed to load social links. Please try again.")}finally{n(!1)}},[I]);j.useEffect(()=>{x()},[x]);const C=k=>{const{name:y,value:p}=k.target;v(g=>({...g,[y]:y==="order"?parseInt(p,10)||0:p}))},D=()=>{c(!1),d(null),v({name:"",url:"",icon:er[0],order:0})},N=async k=>{if(k.preventDefault(),!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!Z||!I){o("Firestore is not initialized correctly.");return}try{await ym(I,m),D(),x()}catch(y){console.error("Error adding link:",y),o("Failed to add link. Please try again.")}},O=async k=>{if(k.preventDefault(),!h||!m.name||!m.url||!m.icon){o("Name, URL, and Icon are required.");return}if(o(null),!Z){o("Firestore is not initialized correctly.");return}try{const y=Mt(Z,"socialLinks",h);await pm(y,m),D(),x()}catch(y){console.error("Error updating link:",y),o("Failed to update link. Please try again.")}},U=async k=>{if(k===0||!Z)return;o(null);const y=r[k],p=r[k-1],g=Ea(Z),T=Mt(Z,"socialLinks",y.id),w=Mt(Z,"socialLinks",p.id);g.update(T,{order:p.order}),g.update(w,{order:y.order});try{await g.commit(),x()}catch(b){console.error("Error moving link up:",b),o("Failed to reorder link. Please try again.")}},G=async k=>{if(k===r.length-1||!Z)return;o(null);const y=r[k],p=r[k+1],g=Ea(Z),T=Mt(Z,"socialLinks",y.id),w=Mt(Z,"socialLinks",p.id);g.update(T,{order:p.order}),g.update(w,{order:y.order});try{await g.commit(),x()}catch(b){console.error("Error moving link down:",b),o("Failed to reorder link. Please try again.")}},L=async k=>{if(window.confirm("Are you sure you want to delete this link?")){if(o(null),!Z){o("Firestore is not initialized correctly.");return}try{const y=Mt(Z,"socialLinks",k);await gm(y),x()}catch(y){console.error("Error deleting link:",y),o("Failed to delete link. Please try again.")}}},Q=k=>{d(k.id),v({name:k.name,url:k.url,icon:k.icon,order:k.order}),c(!1)};return E.jsxs("div",{className:"p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200",children:[E.jsx("h2",{className:"text-2xl font-semibold mb-4 text-white",children:"Manage Social Links"}),i&&E.jsx("p",{className:"text-red-400 bg-red-900/50 p-3 rounded mb-4",children:i}),e&&E.jsx("p",{children:"Loading links..."}),(a||h)&&E.jsxs("form",{onSubmit:h?O:N,className:"mb-6 p-4 bg-gray-700 rounded",children:[E.jsx("h3",{className:"text-xl font-medium mb-3 text-white",children:h?"Edit Link":"Add New Link"}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-3",children:[E.jsx("input",{type:"text",name:"name",placeholder:"Link Name (e.g., GitHub)",value:m.name,onChange:C,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),E.jsx("input",{type:"url",name:"url",placeholder:"Full URL (e.g., https://github.com/user)",value:m.url,onChange:C,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0}),E.jsxs("select",{name:"icon",value:m.icon,onChange:C,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,children:[E.jsx("option",{value:"",disabled:!0,children:"Select Icon"}),er.map(k=>E.jsx("option",{value:k,children:k},k))]}),E.jsx("input",{type:"number",name:"order",placeholder:"Order (e.g., 1)",value:m.order,onChange:C,className:"p-2 rounded bg-gray-600 text-white border border-gray-500 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50",required:!0,min:"0"})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsxs("button",{type:"submit",className:"flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[E.jsx(Yu,{size:18})," ",h?"Save Changes":"Add Link"]}),E.jsxs("button",{type:"button",onClick:D,className:"flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[E.jsx(Ou,{size:18})," Cancel"]})]})]}),!a&&!h&&E.jsxs("button",{onClick:()=>{c(!0),v({name:"",url:"",icon:er[0],order:r.length>0?Math.max(...r.map(k=>k.order))+1:0})},className:"mb-6 flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out",children:[E.jsx(Fu,{size:18})," Add New Link"]}),!e&&r.length>0&&E.jsx("div",{className:"overflow-x-auto",children:E.jsxs("table",{className:"min-w-full bg-gray-700 rounded",children:[E.jsx("thead",{children:E.jsxs("tr",{className:"bg-gray-600",children:[E.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Order"}),E.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Name"}),E.jsx("th",{className:"text-left py-2 px-3 text-white",children:"URL"}),E.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Icon"}),E.jsx("th",{className:"text-left py-2 px-3 text-white",children:"Actions"})]})}),E.jsx("tbody",{children:r.map((k,y)=>E.jsxs("tr",{className:"border-b border-gray-600 hover:bg-gray-600/50",children:[E.jsx("td",{className:"py-2 px-3",children:k.order}),E.jsx("td",{className:"py-2 px-3",children:k.name}),E.jsx("td",{className:"py-2 px-3",children:E.jsx("a",{href:k.url,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline truncate max-w-xs inline-block",children:k.url})}),E.jsx("td",{className:"py-2 px-3",children:k.icon}),E.jsxs("td",{className:"py-2 px-3 flex items-center gap-1",children:[E.jsx("button",{onClick:()=>U(y),disabled:y===0,className:`p-1 ${y===0?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Up",children:E.jsx(Lu,{size:18})}),E.jsx("button",{onClick:()=>G(y),disabled:y===r.length-1,className:`p-1 ${y===r.length-1?"text-gray-500 cursor-not-allowed":"text-blue-400 hover:text-blue-300"}`,title:"Move Down",children:E.jsx(ku,{size:18})}),E.jsx("button",{onClick:()=>Q(k),className:"text-yellow-400 hover:text-yellow-300 p-1",title:"Edit",children:E.jsx(Zu,{size:18})}),E.jsx("button",{onClick:()=>L(k.id),className:"text-red-500 hover:text-red-400 p-1",title:"Delete",children:E.jsx(eh,{size:18})})]})]},k.id))})]})}),!e&&r.length===0&&!a&&E.jsx("p",{className:"text-center text-gray-400 mt-4",children:"No social links found. Add one!"})]})},xm={title:"New Project Title",description:"New project description.",tags:["Tag1","Tag2"],link:""},Se=(r,t,e,n,i,o,a)=>t.length===1&&t[0]==="projects"&&typeof r=="object"&&r!==null&&!Array.isArray(r)?E.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[E.jsxs("div",{className:"flex justify-between items-center mb-3",children:[E.jsx("h4",{className:"text-lg font-semibold capitalize",children:String(t[0]).replace(/([A-Z])/g," $1")}),o&&E.jsx("button",{onClick:o,className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline",children:"+ Add Project"})]}),Object.entries(r).map(([c,h])=>{if(c!=="title"&&typeof h=="object"&&h!==null&&!Array.isArray(h)){const d=[...t,c];return E.jsxs("div",{className:"mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm relative",children:[E.jsxs("div",{className:"flex justify-between items-start mb-3",children:[" ",E.jsxs("h5",{className:"text-lg font-semibold text-gray-700 mr-4",children:["Project: ",E.jsx("span",{className:"font-mono text-sm bg-gray-100 px-2 py-1 rounded",children:c})]}),a&&E.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete project "${c}"?`)&&a(d)},className:"bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete project ${c}`,children:"Delete Project"})]}),E.jsxs("div",{className:"space-y-4",children:[" ",Se(h,d,e,n,i,void 0,void 0)]})]},d.join("."))}else if(c==="title"&&typeof h=="string"){const d=[...t,c],m=d.join("."),v=n===m;return E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),v?E.jsx("input",{type:"text",id:m,name:m,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2",value:h,onChange:I=>e(d,I.target.value),onBlur:()=>i(null),autoFocus:!0}):E.jsx("div",{className:"mt-1 block w-full rounded-md border border-transparent p-2 cursor-pointer hover:bg-gray-100 min-h-[38px]",onClick:()=>i(m),children:h||E.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m)}return null})]},t.join(".")):Object.entries(r).map(([c,h])=>{const d=[...t,c],m=d.map(String).join("."),v=n===m;return typeof h=="string"?E.jsxs("div",{className:"mb-4",children:[E.jsx("label",{htmlFor:m,className:"block text-sm font-medium text-gray-700 capitalize mb-1",children:c.replace(/([A-Z])/g," $1")}),v?E.jsx("textarea",{id:m,name:m,rows:h.length>100?4:2,className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:h,onChange:I=>e(d,I.target.value),onBlur:()=>i(null),autoFocus:!0}):E.jsx("div",{className:"mt-1 block w-full rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[50px] whitespace-pre-wrap text-gray-800",onClick:()=>i(m),children:h||E.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})})]},m):typeof h=="object"&&h!==null&&!Array.isArray(h)?E.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded",children:[E.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize",children:String(c).replace(/([A-Z])/g," $1")}),Se(h,d,e,n,i)]},m):Array.isArray(h)?E.jsxs("div",{className:"mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow-sm",children:[E.jsx("h4",{className:"text-lg font-semibold mb-3 capitalize text-gray-700",children:String(c).replace(/([A-Z])/g," $1")}),E.jsxs("div",{className:"space-y-3",children:[" ",h.map((I,x)=>{const C=[...d,x],D=C.map(String).join("."),N=n===D;return typeof I=="string"?E.jsxs("div",{className:"flex items-center space-x-2",children:[N?E.jsx("input",{type:"text",id:D,name:D,className:"flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 bg-white",value:I,onChange:O=>e(C,O.target.value),onBlur:()=>i(null),autoFocus:!0}):E.jsx("div",{className:"flex-grow rounded-md border border-gray-200 bg-gray-50 p-2 cursor-pointer hover:bg-gray-100 min-h-[38px] text-gray-800",onClick:()=>i(D),children:I||E.jsx("span",{className:"text-gray-400 italic",children:"Click to edit..."})}),a&&E.jsx("button",{onClick:()=>{window.confirm("Are you sure you want to delete this item?")&&a(C)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline transition-colors duration-150","aria-label":`Delete item ${x+1}`,children:"Delete"})]},D):typeof I=="object"&&I!==null?E.jsxs("div",{className:"mb-4 p-3 border border-gray-100 rounded relative",children:[" ",E.jsxs("div",{className:"flex justify-between items-center mb-2",children:[" ",E.jsxs("h5",{className:"text-md font-medium",children:["Item ",x+1]}),a&&E.jsx("button",{onClick:()=>{window.confirm(`Are you sure you want to delete Item ${x+1}?`)&&a(C)},className:"bg-red-400 hover:bg-red-600 text-white text-xs font-bold py-0.5 px-1.5 rounded focus:outline-none focus:shadow-outline","aria-label":`Delete item ${x+1}`,children:"Delete"})]}),Se(I,C,e,n,i,void 0,a)]},D):null})]})," "]},m):null}),Pm=(r,t,e)=>{if(!t||t.length===0)return r;const n=JSON.parse(JSON.stringify(r));let i=n;for(let a=0;a<t.length-1;a++){const c=t[a];if(i[c]===void 0||i[c]===null){const h=typeof t[a+1]=="number";i[c]=h?[]:{}}if(Array.isArray(i)&&typeof c=="number")for(;i.length<=c;)i.push(null);i=i[c]}const o=t[t.length-1];return typeof i!="object"||i===null?(console.error("Cannot set property on non-object:",i,"at path",t),r):(i[o]=e,n)},Sm=()=>{const r=wa(),[t,e]=j.useState(()=>{const L=localStorage.getItem("siteTranslations");try{const Q=L?JSON.parse(L):{};return{en:{...Nt.en,...Q.en||{}}}}catch(Q){return console.error("Failed to parse translations from localStorage",Q),Nt}}),[n,i]=j.useState(""),[o,a]=j.useState(""),[c,h]=j.useState(null),[d,m]=j.useState(null),v=j.useMemo(()=>{if(t&&t.en){const L=Object.keys(t.en);return c===null&&L.length>0&&h(L[0]),L}return[]},[t]),I=async()=>{if(a(""),!te){console.error("Firebase auth instance is not available."),a("Logout service unavailable. Please try again later.");return}try{await vu(te),r("/admin/login")}catch(L){console.error("Logout failed:",L),a("Failed to log out. Please try again.")}},x=j.useCallback((L,Q)=>{e(k=>{const y="en";if(!L||L.length===0)return k;const p=Pm(k[y],L,Q);return{...k,[y]:p}}),i("")},[]),C=j.useCallback(()=>{e(L=>{const Q=`project_${Date.now()}`,k={...L.en};return(typeof k.projects!="object"||k.projects===null)&&(k.projects={title:Nt.en.projects.title}),k.projects[Q]={...xm},{...L,en:k}}),i("New project added. Edit details and save."),c!=="projects"&&h("projects")},[c]),D=j.useCallback(L=>{if(!L||L.length<1){console.error("Invalid path for deletion:",L);return}e(Q=>{const k=JSON.parse(JSON.stringify(Q));let y=k.en;for(let g=0;g<L.length-1;g++){const T=L[g];if(typeof y!="object"||y===null||y[T]===void 0)return console.error("Path not found for deletion:",L,"at segment",T),Q;y=y[T]}const p=L[L.length-1];if(Array.isArray(y)&&typeof p=="number")if(p>=0&&p<y.length)y.splice(p,1);else return console.error("Index out of bounds for deletion:",L),Q;else if(typeof y=="object"&&y!==null&&typeof p=="string")if(p in y)delete y[p];else return console.error("Key not found for deletion:",L,`Key: ${p}`),Q;else return console.error("Cannot delete from target:",y,"at path",L),Q;return k}),i("Item deleted. Remember to save changes.")},[]),N=()=>{try{localStorage.setItem("siteTranslations",JSON.stringify(t)),i("Content changes saved successfully!"),setTimeout(()=>i(""),3e3)}catch(L){console.error("Failed to save translations to localStorage",L),i("Error saving content changes.")}},O=()=>{if(window.confirm("Are you sure you want to reset the English text content (About, Contact, Services, General Info) to the default values? This cannot be undone and does not affect Projects, Styles, or Social Links.")){const L=t.en.projects;e(Q=>({...Q,en:{...Nt.en,projects:L}})),localStorage.setItem("siteTranslations",JSON.stringify({en:{...Nt.en,projects:L}})),i("Text content sections reset to defaults."),setTimeout(()=>i(""),3e3)}},U=L=>L===null?!1:L in Nt.en,G=()=>{if(!c)return E.jsx("p",{className:"text-gray-500",children:"Select a section above to start editing."});if(c==="styleEditor")return E.jsx(bm,{});if(c==="socialLinks")return E.jsx(Rm,{});if(U(c)){const L=t.en[c],Q=typeof L=="object"&&L!==null&&"title"in L&&typeof L.title=="string"?L.title:c.replace(/([A-Z])/g," $1");return E.jsxs(E.Fragment,{children:[E.jsxs("h3",{className:"text-xl font-semibold mb-4 text-gray-700 capitalize",children:["Editing: ",Q," Content"]}),c==="projects"?E.jsx(Im,{data:L,path:[c],handleChange:x,editingPath:d,setEditingPath:m,handleAddProject:C,handleDelete:D,renderFields:Se}):c==="services"?E.jsx(Am,{data:L,path:[c],handleChange:x,editingPath:d,setEditingPath:m,handleDelete:D,renderFields:Se}):Se(L,[c],x,d,m,void 0,D)]})}return E.jsxs("p",{className:"text-red-500",children:["Error: Invalid tab '",c,"' selected."]})};return E.jsxs("div",{className:"p-4 md:p-6 bg-gray-100 min-h-screen",children:[E.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-6 pb-4 border-b border-gray-300 gap-4",children:[E.jsx("h1",{className:"text-2xl md:text-3xl font-bold text-gray-800",children:"Admin Dashboard"}),E.jsxs("div",{className:"flex gap-2 flex-wrap justify-center sm:justify-end",children:[E.jsx("button",{onClick:O,className:"bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",title:"Reset text content (About, Contact, Services, General Info) to defaults. Does not affect Projects, Styles, or Social Links.",children:"Reset Text Defaults"}),E.jsx("button",{onClick:I,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm transition-colors",children:"Logout"})]}),o&&E.jsx("p",{className:"text-red-500 text-xs italic w-full text-center sm:text-right mt-2",children:o})]}),E.jsx("div",{className:"mb-6 border-b border-gray-300",children:E.jsxs("nav",{className:"-mb-px flex space-x-4 sm:space-x-6 overflow-x-auto pb-px","aria-label":"Tabs",children:[v.map(L=>{const Q=L,k=t.en[Q],y=typeof k=="object"&&k!==null&&"title"in k&&typeof k.title=="string"?k.title:Q.replace(/([A-Z])/g," $1");return E.jsx("button",{onClick:()=>h(Q),className:`${c===Q?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c===Q?"page":void 0,children:y},Q)}),E.jsx("button",{onClick:()=>h("styleEditor"),className:`${c==="styleEditor"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c==="styleEditor"?"page":void 0,children:"Style Editor"},"styleEditor"),E.jsx("button",{onClick:()=>h("socialLinks"),className:`${c==="socialLinks"?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} whitespace-nowrap py-3 px-3 border-b-2 font-medium text-sm capitalize transition-colors duration-150`,"aria-current":c==="socialLinks"?"page":void 0,children:"Social Links"},"socialLinks")]})}),E.jsx("div",{className:"bg-white p-4 md:p-6 rounded-lg shadow-md",children:G()}),E.jsxs("div",{className:"mt-6 text-right flex justify-end items-center gap-4",children:[n&&E.jsx("span",{className:"text-green-600 text-sm transition-opacity duration-300",children:n}),E.jsx("button",{onClick:N,className:`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline transition-all duration-150 text-sm ${c==="styleEditor"||c==="socialLinks"?"opacity-50 cursor-not-allowed":"opacity-100"}`,disabled:c==="styleEditor"||c==="socialLinks",title:c==="styleEditor"||c==="socialLinks"?"Changes are saved directly within this tab":"Save text content changes",children:"Save Content Changes"})]})]})},Cm=(r=Nt)=>{const t=r.en,e=t==null?void 0:t.projects,n=e?Object.entries(e).filter(([i,o])=>i!=="title"&&typeof o=="object"&&o!==null).map(([i,o])=>({title:(o==null?void 0:o.title)??`Project ${i}`,description:(o==null?void 0:o.description)??"Description missing.",tags:(o==null?void 0:o.tags)??[],link:(o==null?void 0:o.link)??""})):[];return{title:(e==null?void 0:e.title)??"Featured Projects",projects:n}},Vm=({logoUrl:r})=>E.jsx("img",{src:r||"https://raw.githubusercontent.com/tiger3homs/home/refs/heads/main/public/logo.png",alt:"Logo",className:"mx-auto mb-6 w-24 h-24",style:{pointerEvents:"none",userSelect:"none"}}),Nm=j.lazy(()=>Cs(()=>import("./ServicesSection-Desv0XjW.js"),__vite__mapDeps([0,1,2]))),km=j.lazy(()=>Cs(()=>import("./ProjectsSection-BzGRzWU1.js"),__vite__mapDeps([3,1,2]))),Dm=j.lazy(()=>Cs(()=>import("./ContactSection-CQTn66_6.js"),__vite__mapDeps([4,1,2]))),Lm=6e4;let Ta=0;const Mm=r=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r),Fm=r=>r.length>=10&&r.length<=1e3,jm={Github:$u,Facebook:qu,Mail:Hu,Instagram:Ku,Linkedin:Qu,Twitter:rh},Om=({children:r})=>{const[t,e]=j.useState(null),[n,i]=j.useState(!0);return j.useEffect(()=>{if(!te){i(!1);return}const o=Aa(te,a=>{e(a),i(!1)});return()=>o()},[]),n?E.jsx("div",{className:"flex items-center justify-center min-h-screen",children:E.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}):t?r:E.jsx(Ia,{to:"/admin/login",replace:!0})},Um=()=>{const[r,t]=j.useState(()=>{const v=localStorage.getItem("siteTranslations");try{return v?JSON.parse(v):Nt}catch(I){return console.error("Failed to parse translations from localStorage on main site",I),Nt}});j.useEffect(()=>{const v=()=>{const I=localStorage.getItem("siteTranslations");try{t(I?JSON.parse(I):Nt)}catch(x){console.error("Failed to parse translations from localStorage on storage event",x),t(Nt)}};return window.addEventListener("storage",v),v(),()=>{window.removeEventListener("storage",v)}},[]);const e=j.useMemo(()=>r.en,[r]),[n,i]=j.useState([]),[o,a]=j.useState({name:"",email:"",message:""}),c=j.useCallback(v=>{const{name:I,value:x}=v.target;a(C=>({...C,[I]:x}))},[]),h=j.useCallback(async v=>{v.preventDefault();const I=Date.now();if(I-Ta<Lm){alert("Please wait a minute before sending another message.");return}if(!Mm(o.email)){alert("Please enter a valid email address.");return}if(!Fm(o.message)){alert("Message must be between 10 and 1000 characters.");return}Ta=I;try{Eo.init("skwn_-DYfDakGK644"),await Eo.send("service_bdj14o3","template_2e2nikq",{name:o.name,email:o.email,message:o.message,to_email:"tiger3homs@gmail.com"}),alert("Message sent successfully!"),a({name:"",email:"",message:""})}catch(x){console.error("Failed to send message:",x),alert("Failed to send message. Please try again.")}},[o]);j.useEffect(()=>{(async()=>{if(Z)try{const I=ec(Z,"socialLinks"),x=hc(I,dc("order","asc")),D=(await yc(x)).docs.map(N=>({id:N.id,...N.data()}));i(D)}catch(I){console.error("Error fetching social links:",I)}})()},[]);const d=j.useMemo(()=>Cm(r),[r]),m=E.jsx("div",{className:"flex items-center justify-center p-8",children:E.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"})});return E.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ltr",children:[E.jsx("header",{className:"container mx-auto px-4 py-16 md:py-32",children:E.jsxs("div",{className:"max-w-3xl mx-auto text-center",children:[E.jsx(Vm,{logoUrl:e.generalInfo.logoUrl}),E.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6 text-primary",style:{pointerEvents:"none",userSelect:"none"},children:e.generalInfo.siteTitle}),E.jsx("p",{className:"text-xl md:text-2xl text-secondary mb-8",style:{pointerEvents:"none",userSelect:"none"},children:e.generalInfo.siteRole}),E.jsx("div",{className:"flex justify-center space-x-6",children:n.map(v=>{const I=jm[v.icon];return I?E.jsx("a",{href:v.url,target:"_blank",rel:"noopener noreferrer","aria-label":v.name,className:"text-secondary hover:text-primary transition-colors transform hover:scale-110",children:E.jsx(I,{size:24})},v.id):null})})]})}),E.jsx(j.Suspense,{fallback:m,children:E.jsx(km,{title:d.title,projects:d.projects})}),E.jsx("section",{className:"container mx-auto px-4 py-16 bg-gray-800/50 backdrop-blur-sm",children:E.jsxs("div",{className:"max-w-3xl mx-auto",children:[E.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-primary",children:e.about.title}),E.jsx("p",{className:"text-secondary text-lg leading-relaxed",children:e.about.description})]})}),E.jsx(j.Suspense,{fallback:m,children:E.jsx(Nm,{title:e.services.title,services:e.services.list})}),E.jsx(j.Suspense,{fallback:m,children:E.jsx(Dm,{t:e.contact,handleSubmit:h,formData:o,handleInputChange:c})}),E.jsxs("footer",{className:"container mx-auto px-4 py-8 text-center text-secondary",children:[E.jsx("p",{children:e.generalInfo.footerText}),E.jsx("div",{className:"mt-4",children:E.jsx(nu,{to:"/admin/dashboard",className:"text-sm text-secondary hover:text-primary transition-colors",children:"Admin Dashboard"})})]})]})};function qm(){const r="/home/";return j.useEffect(()=>{(async()=>{if(!Z){console.error("App.tsx: Firestore not initialized correctly for loading styles.");return}const e=Mt(Z,"settings","styles");try{console.log("App.tsx: Attempting to load global styles...");const n=await pc(e);if(n.exists()){const i=n.data();document.documentElement.style.setProperty("--primary-color",i.primaryColor),document.documentElement.style.setProperty("--secondary-color",i.secondaryColor),document.documentElement.style.setProperty("--font-family",i.fontFamily),console.log("App.tsx: Global styles applied from Firestore:",i)}else console.log("App.tsx: No global styles document found in Firestore, using CSS defaults.")}catch(n){console.error("App.tsx: Error loading global styles from Firestore:",n)}})()},[]),E.jsx(tu,{basename:r,children:E.jsxs(eu,{children:[E.jsx(Hn,{path:"/",element:E.jsx(Um,{})}),E.jsx(Hn,{path:"/admin/login",element:E.jsx(wm,{})}),E.jsx(Hn,{path:"/admin/dashboard",element:E.jsx(Om,{children:E.jsx(Sm,{})})}),E.jsx(Hn,{path:"/admin",element:E.jsx(Ia,{to:"/admin/login",replace:!0})})]})})}xa(document.getElementById("root")).render(E.jsx(j.StrictMode,{children:E.jsx(qm,{})}));export{St as c,E as j};
//# sourceMappingURL=index-DWT8sbC5.js.map
