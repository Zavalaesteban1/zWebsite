if (!self.define) {
  let registry = {};

  const require = (url: string) => {
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
        url: "/_next/static/5upvKbEEJGcpF03CulW-y/_buildManifest.js",
        revision: "1fb3b98f1bd9e2359693c7fbfec41471",
      },
      {
        url: "/_next/static/5upvKbEEJGcpF03CulW-y/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933",
      },
      {
        url: "/_next/static/chunks/201.3ef88f16a64392d3.js",
        revision: "3ef88f16a64392d3",
      },
      {
        url: "/_next/static/chunks/256.9ac065f6238f1ee0.js",
        revision: "9ac065f6238f1ee0",
      },
      {
        url: "/_next/static/chunks/268.5ffeadc9d6ec62fe.js",
        revision: "5ffeadc9d6ec62fe",
      },
      {
        url: "/_next/static/chunks/275.6bc7c76b04f55586.js",
        revision: "6bc7c76b04f55586",
      },
      {
        url: "/_next/static/chunks/432-ea5dd483e0865b7a.js",
        revision: "ea5dd483e0865b7a",
      },
      {
        url: "/_next/static/chunks/58a3678d-0433f00c84885d03.js",
        revision: "0433f00c84885d03",
      },
      {
        url: "/_next/static/chunks/61905917.e03de3a9a172c346.js",
        revision: "e03de3a9a172c346",
      },
      {
        url: "/_next/static/chunks/669.4aa4d43279392604.js",
        revision: "4aa4d43279392604",
      },
      {
        url: "/_next/static/chunks/732.f63b257c3602dcab.js",
        revision: "f63b257c3602dcab",
      },
      {
        url: "/_next/static/chunks/778.4e8137400b8d609c.js",
        revision: "4e8137400b8d609c",
      },
      {
        url: "/_next/static/chunks/e39c296e.8fcaf8e4230d7eef.js",
        revision: "8fcaf8e4230d7eef",
      },
      {
        url: "/_next/static/chunks/ee9ce975-e357a86298b555a6.js",
        revision: "e357a86298b555a6",
      },
      {
        url: "/_next/static/chunks/framework-49c6cecf1f6d5795.js",
        revision: "49c6cecf1f6d5795",
      },
      {
        url: "/_next/static/chunks/main-92fc664a5dbe9b1b.js",
        revision: "92fc664a5dbe9b1b",
      },
      {
        url: "/_next/static/chunks/pages/_app-c0ea6211b5e3420c.js",
        revision: "c0ea6211b5e3420c",
      },
      {
        url: "/_next/static/chunks/pages/_error-7a92967bea80186d.js",
        revision: "7a92967bea80186d",
      },
      {
        url: "/_next/static/chunks/pages/index-1b72a70a50f75826.js",
        revision: "1b72a70a50f75826",
      },
      {
        url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
        revision: "846118c33b2c0e922d7b3a7676f81f6f",
      },
      {
        url: "/_next/static/chunks/webpack-36529bf40bcd3fe9.js",
        revision: "36529bf40bcd3fe9",
      },
      {
        url: "/_next/static/css/6285c3383b87f15e.css",
        revision: "6285c3383b87f15e",
      },
      {
        url: "/_next/static/css/9021ea1e0784d42f.css",
        revision: "9021ea1e0784d42f",
      },
      {
        url: "/_next/static/media/56d4c7a1c09c3371-s.woff2",
        revision: "43b1d1276722d640d51608db4600bb69",
      },
      {
        url: "/_next/static/media/7e6a2e30184bb114-s.p.woff2",
        revision: "bca21fe1983e7d9137ef6e68e05f3aee",
      },
      {
        url: "/assets/infinitevps.webm",
        revision: "f7b371e070057472204ab2ae0b8915d4",
      },
      {
        url: "/assets/z.webp",
        revision: "65c9a0758232b4ebb67062c77dc51dd4",
      },
      {
        url: "/assets/portfolio.webm",
        revision: "3c5c99872974c5db962f4aa1d8da08ce",
      },
      {
        url: "/assets/scene.splinecode",
        revision: "a86155ea39bd500447e9c825ef110b58",
      },
      {
        url: "/assets/translate_bot.webm",
        revision: "9fc3ca04ec7b1aa9e328d64f5a0532ca",
      },
      {
        url: "/assets/unqueue.webm",
        revision: "04cd7ece4cb5b88a718605b596046cc9",
      },
      {
        url: "/assets/wrona.jpeg",
        revision: "89872f2806610edde5ea90ee8afbace6",
      },
      {
        url: "/favicon.ico",
        revision: "9f394dd2d1f01ab67d08ad0a0d2fc977",
      },
      {
        url: "/fonts/ClashGrotesk-Variable.woff2",
        revision: "218f4f81bdee5932a127929c6d693f0c",
      },
      {
        url: "/icon-192x192.png",
        revision: "3d82a3c3a8f93ada0df0fac471f90a04",
      },
      {
        url: "/icon-256x256.png",
        revision: "163a0793bd04edca75d788db5be7e16f",
      },
      {
        url: "/icon-384x384.png",
        revision: "60d91c093fdce918a995cebcf4cfe957",
      },
      {
        url: "/icon-512x512.png",
        revision: "2d8845afaf9400bfd34c4b160c448e36",
      },
      {
        url: "/manifest.json",
        revision: "397c15f89afa2472849bffb802a53190",
      },
      {
        url: "/robots.txt",
        revision: "f77c87f977e0fcce05a6df46c885a129",
      },
    ],
    { ignoreURLParametersMatching: [] },
  );

  workbox.cleanupOutdatedCaches();

  // Start URL
  workbox.registerRoute(
    "/",
    new workbox.NetworkFirst({
      cacheName: "start-url",
      plugins: [
        {
          cacheWillUpdate: async ({ request, response, event, state }) => {
            if (response && response.type === "opaqueredirect") {
              return new Response(response.body, {
                status: 200,
                statusText: "OK",
                headers: response.headers,
              });
            }
            return response;
          },
        },
      ],
    }),
    "GET",
  );

  // Google Fonts
  workbox.registerRoute(
    /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
    new workbox.CacheFirst({
      cacheName: "google-fonts-webfonts",
      plugins: [
        new workbox.ExpirationPlugin({
          maxEntries: 4,
          maxAgeSeconds: 31536000,
        }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
      ],
    }),
    "GET",
  );

  // Static Assets
  workbox.registerRoute(
    /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "static-font-assets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "static-image-assets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\/_next\/image\?url=.+$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "next-image",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:mp3|wav|ogg)$/i,
    new workbox.CacheFirst({
      cacheName: "static-audio-assets",
      plugins: [
        new workbox.RangeRequestsPlugin(),
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:mp4)$/i,
    new workbox.CacheFirst({
      cacheName: "static-video-assets",
      plugins: [
        new workbox.RangeRequestsPlugin(),
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:js)$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "static-js-assets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:css|less)$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "static-style-assets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\/_next\/data\/.+\/.+\.json$/i,
    new workbox.StaleWhileRevalidate({
      cacheName: "next-data",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  workbox.registerRoute(
    /\.(?:json|xml|csv)$/i,
    new workbox.NetworkFirst({
      cacheName: "static-data-assets",
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  // API routes
  workbox.registerRoute(
    ({ url }) => {
      if (!(self.origin === url.origin)) return false;
      const pathname = url.pathname;
      return (
        !pathname.startsWith("/api/auth/") && !!pathname.startsWith("/api/")
      );
    },
    new workbox.NetworkFirst({
      cacheName: "apis",
      networkTimeoutSeconds: 10,
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  // Other routes
  workbox.registerRoute(
    ({ url }) => {
      if (!(self.origin === url.origin)) return false;
      return !url.pathname.startsWith("/api/");
    },
    new workbox.NetworkFirst({
      cacheName: "others",
      networkTimeoutSeconds: 10,
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET",
  );

  // Cross-origin routes
  workbox.registerRoute(
    ({ url }) => !(self.origin === url.origin),
    new workbox.NetworkFirst({
      cacheName: "cross-origin",
      networkTimeoutSeconds: 10,
      plugins: [
        new workbox.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
      ],
    }),
    "GET",
  );
});
