const cacheName = "taskplannerapp";
const staticAssets = [
    "/",
    "/index.html",
    "/manifest.json"
];
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(keyList =>
            Promise.all(
                keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log("Deleting cache: " + key);
                        return caches.delete(key);
                    }
                })
            )
        )
    );
});

self.addEventListener("install", function (event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            fetch("manifest.json")
                .then(response => {
                    response.json();
                })
                .then(assets => {
                    const urlsToCache = ["/", "/index.html", "/manifest.json", "/App.js"];
                    cache.addAll(urlsToCache);
                    console.log("cached");
                });
        })
    );

});

self.addEventListener("fetch", function (event) {

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );

});
/*
async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        console.log(fresh);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch(e) {
        const cached = await cache.match(req);
        return cached;
    }
}

self.addEventListener("install", async e => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener("activate", e => {
    self.clients.claim();
});

self.addEventListener("fetch", async e => {
    const req = e.request;
    const url = new URL(req.url);
    console.log(e)
    if (url.origin == location.origin) {
       e.respondWith(this.cacheFirst(req));
    } else {
        e.respondWith(this.networkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || await fetch(req);
}*/

