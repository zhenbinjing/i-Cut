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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

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
    "revision": "4d33e5c4c24a2e924f23e9812b9b1c28"
  },
  {
    "url": "manifest.json",
    "revision": "f54abb887837ec79b6b2b6740f708995"
  },
  {
    "url": "static/css/index-c68d935553.css",
    "revision": "e19a70491973ad409776081686d940d6"
  },
  {
    "url": "static/font/stfyt-1b772d7ffa.woff",
    "revision": "1b772d7ffa4ec4b6a7dbf22509427588"
  },
  {
    "url": "static/font/stfyt-3e7f684731.ttf",
    "revision": "3e7f68473172a055d7caf01864c136b0"
  },
  {
    "url": "static/font/stfyt-4189cfae7e.eot",
    "revision": "4189cfae7e888d07445f59ca6b07c8c5"
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
    "url": "static/img/b-84a5331f3e.webp",
    "revision": "84a5331f3e5df891882fcae3ae219d02"
  },
  {
    "url": "static/img/c-37ced9917e.webp",
    "revision": "37ced9917e0d17abf108b89e82940c33"
  },
  {
    "url": "static/img/d-860a9adb2e.webp",
    "revision": "860a9adb2ee461574fce09a47ef9c024"
  },
  {
    "url": "static/img/e-a9f9aa361d.webp",
    "revision": "a9f9aa361de361c22bd4ed1393be518d"
  },
  {
    "url": "static/img/icon/sprite-10a653b8c9.webp",
    "revision": "10a653b8c927907fbab7b68fb6a4cf2d"
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
    "url": "static/img/svg/sprite-08156fe270.webp",
    "revision": "08156fe27032f5e783af16b7bd255764"
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
