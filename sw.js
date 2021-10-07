/* eslint-disable no-restricted-globals */

const cacheName = 'static-cache-v3';
const dynamicCache = 'dynamic-cache-v3';

const precache = ['/scoreboard/', '/scoreboard/logo144x144.png', '/scoreboard/favicon.ico', '/scoreboard/index.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precache)));
});

self.addEventListener('activate', (event) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            if (cacheResponse) {
                return cacheResponse;
            }
            // add to dynamic cache
            return fetch(event.request).then((response) => {
                return caches.open(dynamicCache).then((cache) => {
                    cache.put(event.request.url, response.clone());
                    return response;
                })
            });
        })
    );
});