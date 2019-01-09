/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "GPWA"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "1608535046c343fa0f447824bdfdc5f2"
  },
  {
    "url": "manifest.json",
    "revision": "119892d240612cbc59fd994033533650"
  },
  {
    "url": "static/css/index-c68d935553.css",
    "revision": "09c2a1f4d38ae7ac49898c8820dba43a"
  },
  {
    "url": "static/font/stfyt-31db89fedc.eot",
    "revision": "31db89fedc9f5c9a378e00f384aaef94"
  },
  {
    "url": "static/font/stfyt-b619b3bae1.woff",
    "revision": "b619b3bae1cb2556e20b922c675c2690"
  },
  {
    "url": "static/font/stfyt-b7a692e882.ttf",
    "revision": "b7a692e8827e474393ce1cfc538ce06a"
  },
  {
    "url": "static/font/stfyt-b99b89d949.svg",
    "revision": "b99b89d94951632a1e676a4bbd48dfbe"
  },
  {
    "url": "static/img/a-4b829bdee3.webp",
    "revision": "4b829bdee33fd585aa9779c176169047"
  },
  {
    "url": "static/img/b-c6a0b51cec.webp",
    "revision": "c6a0b51cecdc8a8ff610d630a3483d18"
  },
  {
    "url": "static/img/c-f9a033c35b.webp",
    "revision": "f9a033c35bd06d067d8ccadbe801979a"
  },
  {
    "url": "static/img/d-4abfa458a7.webp",
    "revision": "4abfa458a7c8f339fd9760501b64615a"
  },
  {
    "url": "static/img/e-59a1c10b33.webp",
    "revision": "59a1c10b33a8750c12f321dbd16159fa"
  },
  {
    "url": "static/img/icon/sprite-6103344413.webp",
    "revision": "61033444139cb3dc7a5eaef632bd72ab"
  },
  {
    "url": "static/img/rwd/bgrwd-041be88fc8.webp",
    "revision": "041be88fc8ab72119c715e012aceb719"
  },
  {
    "url": "static/img/rwd/bgrwd@1x-39a2865f77.webp",
    "revision": "39a2865f7754afe0a5a84c54e2427f20"
  },
  {
    "url": "static/img/rwd/bgrwd@2x-a80b1d8db8.webp",
    "revision": "a80b1d8db871824da3b4a0c4d4d452c6"
  },
  {
    "url": "static/img/rwd/bgrwd@3x-9f76a6f10d.webp",
    "revision": "9f76a6f10d7b71bf68e79bd8c98a5265"
  },
  {
    "url": "static/img/rwd/rwd-041be88fc8.webp",
    "revision": "041be88fc8ab72119c715e012aceb719"
  },
  {
    "url": "static/img/rwd/rwd@1x-39a2865f77.webp",
    "revision": "39a2865f7754afe0a5a84c54e2427f20"
  },
  {
    "url": "static/img/rwd/rwd@2x-a80b1d8db8.webp",
    "revision": "a80b1d8db871824da3b4a0c4d4d452c6"
  },
  {
    "url": "static/img/rwd/rwd@3x-9f76a6f10d.webp",
    "revision": "9f76a6f10d7b71bf68e79bd8c98a5265"
  },
  {
    "url": "static/img/svg/sprite-25e7e4a971.webp",
    "revision": "25e7e4a971cea1eddceddfc9d765a77a"
  },
  {
    "url": "static/js/index-47f6b231e6.js",
    "revision": "47f6b231e68d852a740167e5ad29232b"
  },
  {
    "url": "static/pwa/android-chrome-192x192.png",
    "revision": "1f1ff33bac38484ae1565cf11fd4046e"
  },
  {
    "url": "static/pwa/android-chrome-512x512.png",
    "revision": "477376d302911be898d715e94ca58a88"
  },
  {
    "url": "static/pwa/apple-touch-icon-152x152.png",
    "revision": "00580380b0bc8827f68a160d4a5303a5"
  },
  {
    "url": "static/pwa/favicon-16x16.png",
    "revision": "15a03c37ad261341ce0c1290230a42a2"
  },
  {
    "url": "static/pwa/favicon-32x32.png",
    "revision": "50d623c5863e882c1a3b9b1d7a86846b"
  },
  {
    "url": "static/pwa/favicon.ico",
    "revision": "97f4686f9a4d212e3cda86e0c1bcfc62"
  },
  {
    "url": "static/pwa/safari-pinned-tab.svg",
    "revision": "36d3bc5286e4fe2776af301e59fe8131"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, workbox.strategies.staleWhileRevalidate({ plugins: [{ cacheableResponse: { statuses: [ 0, 200 ] } }] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/, workbox.strategies.cacheFirst({ "cacheName":"img-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":60,"maxAgeSeconds":2592000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, workbox.strategies.networkFirst(), 'GET');
