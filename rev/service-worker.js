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

importScripts("/rev/static/pwa/workbox-sw.js");

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
    "revision": "11f9f29c0292fe852768b0eb9ff06f73"
  },
  {
    "url": "static/css/index-35f7402fd1.css",
    "revision": "8d5bd9c92cb5fcea3974a9caa6fbd901"
  },
  {
    "url": "static/font/stfyt-5f67a1bcd3.eot",
    "revision": "5f67a1bcd398030f8891a850e8b5b1f3"
  },
  {
    "url": "static/font/stfyt-6ff4b1d512.ttf",
    "revision": "6ff4b1d512ad2b6efdc030d13aa89f68"
  },
  {
    "url": "static/font/stfyt-b99b89d949.svg",
    "revision": "b99b89d94951632a1e676a4bbd48dfbe"
  },
  {
    "url": "static/font/stfyt-fe2c7a2670.woff",
    "revision": "fe2c7a2670ce804ff2b8b8e40788bf9d"
  },
  {
    "url": "static/img/a-9542fffc42.webp",
    "revision": "9542fffc4209e71e61750a7f069e598c"
  },
  {
    "url": "static/img/b-353c69d70d.webp",
    "revision": "353c69d70d28b26ac7930f10fdbfd9b3"
  },
  {
    "url": "static/img/c-34921f0128.webp",
    "revision": "34921f01288b8c4a5cd55abf2da02021"
  },
  {
    "url": "static/img/d-8a98369306.webp",
    "revision": "8a9836930678b34d624ca005f66d1ac8"
  },
  {
    "url": "static/img/e-0ba2ae195a.webp",
    "revision": "0ba2ae195ac8be8578bb39b8cc6fc009"
  },
  {
    "url": "static/img/icon/sprite-6103344413.webp",
    "revision": "61033444139cb3dc7a5eaef632bd72ab"
  },
  {
    "url": "static/img/rwd/bgrwd-7567180940.webp",
    "revision": "756718094006842adb2c3d6b31fac8e4"
  },
  {
    "url": "static/img/rwd/bgrwd@1x-c4263fd1c5.webp",
    "revision": "c4263fd1c585987f2f2fde8cffaaee64"
  },
  {
    "url": "static/img/rwd/bgrwd@2x-e0011a3dfc.webp",
    "revision": "e0011a3dfc3383f8eb97589717b6bc6e"
  },
  {
    "url": "static/img/rwd/bgrwd@3x-7aba847bbb.webp",
    "revision": "7aba847bbb58739c0a021b6d800e8a9a"
  },
  {
    "url": "static/img/rwd/rwd-7567180940.webp",
    "revision": "756718094006842adb2c3d6b31fac8e4"
  },
  {
    "url": "static/img/rwd/rwd@1x-c4263fd1c5.webp",
    "revision": "c4263fd1c585987f2f2fde8cffaaee64"
  },
  {
    "url": "static/img/rwd/rwd@2x-e0011a3dfc.webp",
    "revision": "e0011a3dfc3383f8eb97589717b6bc6e"
  },
  {
    "url": "static/img/rwd/rwd@3x-7aba847bbb.webp",
    "revision": "7aba847bbb58739c0a021b6d800e8a9a"
  },
  {
    "url": "static/img/svg/sprite-37c61b32d0.webp",
    "revision": "37c61b32d09e37d1a0aeffff080af06a"
  },
  {
    "url": "static/js/index-c041bfe66c.js",
    "revision": "c041bfe66c56270e5cbe3914747fd876"
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
    "url": "static/pwa/manifest.json",
    "revision": "119892d240612cbc59fd994033533650"
  },
  {
    "url": "static/pwa/mstile-150x150.png",
    "revision": "8ace526a6715cd6cc8be3ae5e242df8d"
  },
  {
    "url": "static/pwa/pwa-header.html",
    "revision": "4afeb036b451bd6cd2c5bf3179e0a30f"
  },
  {
    "url": "static/pwa/pwa-script.html",
    "revision": "8cd7ab27275e21c5df53621385062a3c"
  },
  {
    "url": "static/pwa/safari-pinned-tab.svg",
    "revision": "36d3bc5286e4fe2776af301e59fe8131"
  },
  {
    "url": "static/pwa/workbox-sw.js",
    "revision": "06da38385218ae9eba0fd70937aa906c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, workbox.strategies.staleWhileRevalidate({ plugins: [{"cacheableResponse":{"statuses":[0,200]}}] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/, workbox.strategies.cacheFirst({ plugins: [{"expiration":{"maxAgeSeconds":86400,"maxEntries":50}}] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, workbox.strategies.networkFirst(), 'GET');
