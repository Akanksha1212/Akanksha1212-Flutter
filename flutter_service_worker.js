'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/VT323-Regular.ttf": "692c37377cd1e0f4850f47c7c0148426",
"assets/assets/images/akanksha.jpeg": "93e1219c95e076457cbb455384dc2ad5",
"assets/LICENSE": "fce0d0627f103411fa9e7a3d28fd9270",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "3c80969d54b7642735b9bdeb47fbbf81",
"assets/FontManifest.json": "e19ac7db3165f81bee3791a142f3a340",
"main.dart.js": "d6fbb9967e536a6b4b2e46799f9eb5e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "0bc6f18e96a5b8b8089697c792c5423e",
"/": "0bc6f18e96a5b8b8089697c792c5423e",
"manifest.json": "f901735377b1ea71a9c347551b589a1f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
