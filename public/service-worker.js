if (!self.define) {
  let registry = {};

  const require = (url) => {
    const baseURL = new URL(".", location).href;
    return registry[new URL(url + ".js", baseURL).href];
  };

  self.define = (deps, factory) => {
    const baseURL = new URL(".", location).href;
    registry[baseURL] = factory(require);
  };
}

define(["./workbox-4754cb34"], function (workbox) {
  "use strict";

  // Initialize workbox
  workbox.skipWaiting();
  workbox.clientsClaim();

  // Precaching
  workbox.precacheAndRoute(
    [
      {
        url: "/_next/static/chunks/main.js",
        revision: null,
      },
      {
        url: "/_next/static/chunks/webpack.js",
        revision: null,
      },
      // Add other assets you want to precache
    ],
    {
      ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
    },
  );

  workbox.cleanupOutdatedCaches();

  // Runtime caching
  workbox.routing.registerRoute(
    "/",
    new workbox.strategies.NetworkFirst({
      cacheName: "start-url",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 1,
          maxAgeSeconds: 86400,
        }),
      ],
    }),
  );

  // Static assets caching
  workbox.routing.registerRoute(
    /\.(?:js|css|png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-resources",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        }),
      ],
    }),
  );

  // API routes caching
  workbox.routing.registerRoute(
    /^https?:\/\/api\./,
    new workbox.strategies.NetworkFirst({
      cacheName: "api-cache",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 5 * 60, // 5 minutes
        }),
      ],
    }),
  );

  // Google Fonts caching
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
    }),
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          maxEntries: 30,
        }),
      ],
    }),
  );

  // Image caching
  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        }),
      ],
    }),
  );

  // Offline fallback
  workbox.routing.setCatchHandler(({ event }) => {
    switch (event.request.destination) {
      case "document":
        return caches.match("/offline.html");
      case "image":
        return caches.match("/offline-image.png");
      case "font":
      default:
        return Response.error();
    }
  });

  // Handle errors
  self.addEventListener("error", function (event) {
    console.error("Service Worker Error:", event.error);
  });

  self.addEventListener("unhandledrejection", function (event) {
    console.error("Service Worker Unhandled Rejection:", event.reason);
  });
});

// Optional: Add listeners for specific scenarios
self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  // You can add specific fetch handling here if needed
});

self.addEventListener("push", (event) => {
  // Handle push notifications
  if (event.data) {
    const notification = event.data.json();
    self.registration.showNotification(notification.title, {
      body: notification.body,
      icon: notification.icon,
      // Add other notification options as needed
    });
  }
});

self.addEventListener("notificationclick", (event) => {
  // Handle notification clicks
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
