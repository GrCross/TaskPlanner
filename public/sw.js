const cacheName = "taskplannerapp-v1";
const staticAssets = [
    "/",
    "/index.html",
    "/manifest.json"
];

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
}

