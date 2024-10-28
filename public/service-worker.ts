declare const self: ServiceWorkerGlobalScope;
declare const location: Location; // Add this line

if (!self.define) {
  let registry: Record<string, any> = {};

  const require = (url: string) => {
    const baseURL = new URL(".", location).href;
    return registry[new URL(url + ".js", baseURL).href];
  };

  self.define = (
    deps: string[],
    factory: (require: (url: string) => any) => void,
  ) => {
    const baseURL = new URL(".", self.location.toString()).href;
    registry[baseURL] = factory(require);
  };
}

interface WorkboxType {
  skipWaiting: () => void;
  clientsClaim: () => void;
  precacheAndRoute: (
    assets: Array<{ url: string; revision: string | null }>,
    options?: any,
  ) => void;
  cleanupOutdatedCaches: () => void;
  strategies: {
    NetworkFirst: any;
    StaleWhileRevalidate: any;
    CacheFirst: any;
  };
  routing: {
    registerRoute: (route: string | RegExp, strategy: any) => void;
    setCatchHandler: (handler: any) => void;
  };
  expiration: {
    ExpirationPlugin: any;
  };
  cacheableResponse: {
    CacheableResponsePlugin: any;
  };
}

define(["./workbox-4754cb34"], function (workbox: WorkboxType) {
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
  workbox.routing.setCatchHandler(({ event }: { event: FetchEvent }) => {
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
});

// Event listeners with TypeScript types
self.addEventListener("install", (event: ExtendableEvent) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event: FetchEvent) => {
  // Add specific fetch handling if needed
});

interface PushNotification {
  title: string;
  body: string;
  icon: string;
}

self.addEventListener("push", (event: PushEvent) => {
  if (event.data) {
    const notification: PushNotification = event.data.json();
    self.registration.showNotification(notification.title, {
      body: notification.body,
      icon: notification.icon,
    });
  }
});

self.addEventListener("notificationclick", (event: NotificationEvent) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});

// Error handling
self.addEventListener("error", (event: ErrorEvent) => {
  console.error("Service Worker Error:", event.error);
});

self.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
  console.error("Service Worker Unhandled Rejection:", event.reason);
});
