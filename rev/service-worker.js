if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,r,a)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return c;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-5b6cbe4e"],(function(e){"use strict";e.setCacheNameDetails({prefix:"GPWA"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"b80648b9b395db724291f7b15f3f9209"},{url:"manifest.json",revision:"f54abb887837ec79b6b2b6740f708995"},{url:"static/css/index-a50df32d53.css",revision:"c5879336eead0392a20322361a619af9"},{url:"static/font/stfyt-0d70533666.eot",revision:"0d70533666ddddc524c04013b8f5705a"},{url:"static/font/stfyt-1e4f98524d.ttf",revision:"1e4f98524dcbf1b1538c5dd00c8682b8"},{url:"static/font/stfyt-ad55b562af.woff",revision:"ad55b562aff6e41787733521b53f777f"},{url:"static/font/stfyt-ed324e7675.svg",revision:"ed324e76751df716958c42d7ffcb2906"},{url:"static/img/a-831e026675.webp",revision:"831e02667581d023315c340eec91ff2d"},{url:"static/img/b-c6a0b51cec.webp",revision:"c6a0b51cecdc8a8ff610d630a3483d18"},{url:"static/img/c-f9a033c35b.webp",revision:"f9a033c35bd06d067d8ccadbe801979a"},{url:"static/img/d-4abfa458a7.webp",revision:"4abfa458a7c8f339fd9760501b64615a"},{url:"static/img/e-59a1c10b33.webp",revision:"59a1c10b33a8750c12f321dbd16159fa"},{url:"static/img/icon/sprite-6103344413.webp",revision:"61033444139cb3dc7a5eaef632bd72ab"},{url:"static/img/rwd/bgrwd-041be88fc8.webp",revision:"041be88fc8ab72119c715e012aceb719"},{url:"static/img/rwd/bgrwd@1x-6f349ffd99.webp",revision:"6f349ffd99e780e7f1bf19777179f7ea"},{url:"static/img/rwd/bgrwd@2x-bc5c589cfe.webp",revision:"bc5c589cfe137493dd91b4a291f8ed93"},{url:"static/img/rwd/bgrwd@3x-9f42f74d3d.webp",revision:"9f42f74d3dad70bb8132f8de9114c3f0"},{url:"static/img/rwd/rwd-041be88fc8.webp",revision:"041be88fc8ab72119c715e012aceb719"},{url:"static/img/rwd/rwd@1x-6f349ffd99.webp",revision:"6f349ffd99e780e7f1bf19777179f7ea"},{url:"static/img/rwd/rwd@2x-bc5c589cfe.webp",revision:"bc5c589cfe137493dd91b4a291f8ed93"},{url:"static/img/rwd/rwd@3x-9f42f74d3d.webp",revision:"9f42f74d3dad70bb8132f8de9114c3f0"},{url:"static/img/svg/sprite-25e7e4a971.webp",revision:"25e7e4a971cea1eddceddfc9d765a77a"},{url:"static/js/index-1236ef7f81.js",revision:"1236ef7f81dc09a2bf09cddbf90b2e7b"},{url:"static/pwa/android-chrome-192x192.png",revision:"1f1ff33bac38484ae1565cf11fd4046e"},{url:"static/pwa/android-chrome-512x512.png",revision:"477376d302911be898d715e94ca58a88"},{url:"static/pwa/apple-touch-icon-152x152.png",revision:"00580380b0bc8827f68a160d4a5303a5"},{url:"static/pwa/favicon-16x16.png",revision:"15a03c37ad261341ce0c1290230a42a2"},{url:"static/pwa/favicon-32x32.png",revision:"50d623c5863e882c1a3b9b1d7a86846b"},{url:"static/pwa/favicon.ico",revision:"97f4686f9a4d212e3cda86e0c1bcfc62"},{url:"static/pwa/safari-pinned-tab.svg",revision:"36d3bc5286e4fe2776af301e59fe8131"}],{}),e.registerRoute(/.*\.js/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.css/,new e.StaleWhileRevalidate({plugins:[{cacheableResponse:{statuses:[0,200]}}]}),"GET"),e.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/,new e.CacheFirst({cacheName:"img-cache",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/.*\.html/,new e.NetworkFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
