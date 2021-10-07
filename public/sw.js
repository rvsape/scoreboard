/* eslint-disable no-restricted-globals */
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v2';

const precache = ['/scoreboard/', '/scoreboard/logo144x144.png', '/scoreboard/favicon.ico', '/scoreboard/index.html'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(STATIC_CACHE).then((cache) => cache.addAll(precache)));
});

self.addEventListener('activate', (event) => {
    // clean up cache
    event.waitUntil(
        caches.keys()
            .then((keys) => {
                return Promise.all(keys.map((k) => {
                    if (k !== STATIC_CACHE && k !== DYNAMIC_CACHE) {
                        // old cache, remove
                        return caches.delete(k);
                    }
                }));
            })
    );
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
                return caches.open(DYNAMIC_CACHE).then((cache) => {
                    try {
                        if (!event.request.url.includes("chrome")) {
                            cache.put(event.request.url, response.clone());
                        }
                    } catch (err) {
                        console.log('put to', DYNAMIC_CACHE, 'failed: ', err)
                    }
                    return response;
                })
            });
        })
    );
});