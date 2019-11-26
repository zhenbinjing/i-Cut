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

importScripts(
  "/v-dist/precache-manifest.146448ba8d1809a2a6bf1913156cf367.js"
);

workbox.core.setCacheNameDetails({prefix: "VUEPWA"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, new workbox.strategies.StaleWhileRevalidate({ plugins: [{ cacheableResponse: { statuses: [ 0, 200 ] } }] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|webp|svg|gif)/, new workbox.strategies.CacheFirst({ "cacheName":"img-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 60, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, new workbox.strategies.NetworkFirst(), 'GET');
