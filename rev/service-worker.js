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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "GPWA"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "d1afbe10dee1f4d5b8dc400fe598fdf4"
  },
  {
    "url": "manifest.json",
    "revision": "f54abb887837ec79b6b2b6740f708995"
  },
  {
    "url": "static/css/index-a50df32d53.css",
    "revision": "41e2fcf1dbdf0a361b6d2da919b0427c"
  },
  {
    "url": "static/font/stfyt-0b66b065e5.ttf",
    "revision": "0b66b065e558e2d388eb40b9949db05e"
  },
  {
    "url": "static/font/stfyt-309addd604.woff",
    "revision": "309addd60416ddbdbe3c8236caf84fb5"
  },
  {
    "url": "static/font/stfyt-b99b89d949.svg",
    "revision": "b99b89d94951632a1e676a4bbd48dfbe"
  },
  {
    "url": "static/font/stfyt-f669f7ed19.eot",
    "revision": "f669f7ed1945ee621be61896d8fa24e4"
  },
  {
    "url": "static/img/a-831e026675.webp",
    "revision": "831e02667581d023315c340eec91ff2d"
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
    "url": "static/img/rwd/bgrwd@1x-6f349ffd99.webp",
    "revision": "6f349ffd99e780e7f1bf19777179f7ea"
  },
  {
    "url": "static/img/rwd/bgrwd@2x-bc5c589cfe.webp",
    "revision": "bc5c589cfe137493dd91b4a291f8ed93"
  },
  {
    "url": "static/img/rwd/bgrwd@3x-9f42f74d3d.webp",
    "revision": "9f42f74d3dad70bb8132f8de9114c3f0"
  },
  {
    "url": "static/img/rwd/rwd-041be88fc8.webp",
    "revision": "041be88fc8ab72119c715e012aceb719"
  },
  {
    "url": "static/img/rwd/rwd@1x-6f349ffd99.webp",
    "revision": "6f349ffd99e780e7f1bf19777179f7ea"
  },
  {
    "url": "static/img/rwd/rwd@2x-bc5c589cfe.webp",
    "revision": "bc5c589cfe137493dd91b4a291f8ed93"
  },
  {
    "url": "static/img/rwd/rwd@3x-9f42f74d3d.webp",
    "revision": "9f42f74d3dad70bb8132f8de9114c3f0"
  },
  {
    "url": "static/img/svg/sprite-25e7e4a971.webp",
    "revision": "25e7e4a971cea1eddceddfc9d765a77a"
  },
  {
    "url": "static/js/index-98aa463c13.js",
    "revision": "98aa463c13802026bba45c054d39a7f3"
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
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, new workbox.strategies.StaleWhileRevalidate({ plugins: [{ cacheableResponse: { statuses: [ 0, 200 ] } }] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/, new workbox.strategies.CacheFirst({ "cacheName":"img-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 60, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, new workbox.strategies.NetworkFirst(), 'GET');
