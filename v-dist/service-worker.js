if(!self.define){let i,s={};const c=(c,e)=>(c=new URL(c+".js",e).href,s[c]||new Promise((s=>{if("document"in self){const i=document.createElement("script");i.src=c,i.onload=s,document.head.appendChild(i)}else i=c,importScripts(c),s()})).then((()=>{let i=s[c];if(!i)throw new Error(`Module ${c} didn’t register its module`);return i})));self.define=(e,t)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const r=i=>c(i,n),d={module:{uri:n},exports:a,require:r};s[n]=Promise.all(e.map((i=>d[i]||r(i)))).then((i=>(t(...i),a)))}}define(["./workbox-9492bd28"],(function(i){"use strict";i.setCacheNameDetails({prefix:"VUEPWA"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/v-dist/index.html",revision:"eaa91e8410a179136ddb1a65e5c4dcdb"},{url:"/v-dist/manifest.json",revision:"667fe87036a783251cf77381afb7ad81"},{url:"/v-dist/static/css/index.8545f290271214c47fa6.css",revision:null},{url:"/v-dist/static/css/index.b0bacb026ff6f0ea9375.css",revision:null},{url:"/v-dist/static/font/amrcaxbc.0006f75.eot",revision:null},{url:"/v-dist/static/font/amrcaxbc.0acc140.woff",revision:null},{url:"/v-dist/static/font/amrcaxbc.7bd40df.svg",revision:null},{url:"/v-dist/static/font/amrcaxbc.8fb874b.ttf",revision:null},{url:"/v-dist/static/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/v-dist/static/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/v-dist/static/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/v-dist/static/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/v-dist/static/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/v-dist/static/icons/favicon.ico",revision:"7a2fa8fc2aff558ca7b7e6d5dddb5315"},{url:"/v-dist/static/icons/logo.png",revision:"04094c981e19b077458ac5d414185112"},{url:"/v-dist/static/icons/safari-pinned-tab.svg",revision:"f78c0251d6ddd56ee219a1830ded71b4"},{url:"/v-dist/static/img/hld.c1739fb.png",revision:null},{url:"/v-dist/static/js/464.8545f290271214c47fa6.js",revision:null},{url:"/v-dist/static/js/709.712d567b46f17b94c112.js",revision:null},{url:"/v-dist/static/js/chunk-vendors.cc069e870cb7de4d16d2.js",revision:null},{url:"/v-dist/static/js/main.b0bacb026ff6f0ea9375.js",revision:null}],{}),i.registerRoute(/.*\.js/,new i.NetworkFirst,"GET"),i.registerRoute(/.*\.css/,new i.StaleWhileRevalidate,"GET"),i.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/,new i.CacheFirst({cacheName:"img-cache",plugins:[new i.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),i.registerRoute(/.*\.html/,new i.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
