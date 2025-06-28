const swConfig = {
  cacheName: "cache",
  log: true,
};

// Event Handlers

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      try {
        await caches.delete(swConfig.cacheName);
      } catch (error) {
        console.error("❌ Error in service worker:", error);
      }
    })()
  );
  self.skipWaiting();
  swConfig.log && console.log("✨ Service Worker installed");
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.registration?.navigationPreload.enable());
  swConfig.log && console.log("✅ Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(staleRevalidate(event));
});

// Functions

async function staleRevalidate(event) {
  let request = event.request;

  if (request.url.includes('localhost')) {
    return fetch(request, { redirect: "follow" });
  }

  // Only cache GET requests
  if (request.method !== "GET") {
    return fetch(request, { redirect: "follow" });
  }

  let cache = await caches.open(swConfig.cacheName);

  // Serve the cached response immediately if it exists
  let cachedResponse = await cache.match(request);

  if (cachedResponse) {
    // Only update cache and log if we're online
    if (typeof navigator !== 'undefined' && navigator.onLine) {
      // Update the cache in the background
      event.waitUntil(
        fetch(request, { cache: "no-store", redirect: "follow" })
          .then(async (networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              if (!networkResponse.redirected) {
                await cache.put(request, networkResponse.clone());
              }
            }
          })
          .catch((errors) => {
            console.warn("Error updating cache", errors);
          })
      );
      swConfig.log && console.log("🚀 Serving from cache:", request.url);
    }
    // Always return cached response whether online or offline
    return cachedResponse;
  }

  // If no cached response, fetch from network
  try {
    let preloadResponse = navigator.onLine ? await event.preloadResponse : null;
    let networkResponse =
      preloadResponse ||
      (navigator.onLine ? await fetch(request, { redirect: "follow" }) : null);

    if (networkResponse && networkResponse.ok) {
      if (!networkResponse.redirected) {
        await cache.put(request, networkResponse.clone());
      }
      swConfig.log &&
        console.log(`🛰️ Serving from network: ${event.request.url}`);
      return networkResponse;
    } else if (networkResponse && networkResponse.status === 404) {
      let notFoundResponse =
        (await caches.match("/404.html")) || fetch("/404.html");
      return notFoundResponse || new Response("404 Not Found", { status: 404 });
    }
  } catch (error) {
    console.warn("Network error:", error);
  }

  return new Response("Network Error", { status: 400 });
}