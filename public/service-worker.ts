/// <reference lib="webworker" />
/// <reference lib="es2015" />

declare const self: ServiceWorkerGlobalScope;
export default null;

// Type Definitions
interface ExtendableEventInit extends EventInit {
  waitUntil(f: Promise<any>): void;
}

interface FetchEvent extends ExtendableEvent {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
}

interface PushEvent extends ExtendableEvent {
  data?: PushMessageData;
}

interface PushMessageData {
  json(): any;
  text(): string;
  arrayBuffer(): ArrayBuffer;
}

interface NotificationEvent extends ExtendableEvent {
  action: string;
  notification: Notification;
}

interface PushNotification {
  title: string;
  body: string;
  icon?: string;
  data?: Record<string, unknown>;
  actions?: Array<{
    action: string;
    title: string;
  }>;
}

interface WorkboxStrategyOptions {
  cacheName: string;
  plugins?: Array<{
    cacheWillUpdate?: (response: Response) => Promise<Response>;
    cacheDidUpdate?: (cache: Cache, request: Request, response: Response) => void;
    cacheKeyWillBeUsed?: (request: Request) => Promise<Request>;
    cachedResponseWillBeUsed?: (response: Response) => Promise<Response>;
  }>;
  networkTimeoutSeconds?: number;
}

interface WorkboxType {
  skipWaiting: () => void;
  clientsClaim: () => void;
  precacheAndRoute: (
    assets: Array<{ url: string; revision: string | null }>,
    options?: {
      ignoreURLParametersMatching?: RegExp[];
    }
  ) => void;
  cleanupOutdatedCaches: () => void;
  strategies: {
    NetworkFirst: new (options: WorkboxStrategyOptions) => WorkboxStrategy;
    StaleWhileRevalidate: new (options: WorkboxStrategyOptions) => WorkboxStrategy;
    CacheFirst: new (options: WorkboxStrategyOptions) => WorkboxStrategy;
  };
  routing: {
    registerRoute: (route: string | RegExp, strategy: WorkboxStrategy) => void;
    setCatchHandler: (handler: (options: { event: FetchEvent }) => Promise<Response>) => void;
  };
  expiration: {
    ExpirationPlugin: new (options: { maxEntries?: number; maxAgeSeconds?: number }) => Plugin;
  };
  cacheableResponse: {
    CacheableResponsePlugin: new (options: { statuses: number[] }) => Plugin;
  };
}

interface WorkboxStrategy {
  handle: (options: { event: FetchEvent }) => Promise<Response>;
}

interface Plugin {
  cacheWillUpdate?: (response: Response) => Promise<Response>;
  cacheDidUpdate?: (cache: Cache, request: Request, response: Response) => void;
  cacheKeyWillBeUsed?: (request: Request) => Promise<Request>;
  cachedResponseWillBeUsed?: (response: Response) => Promise<Response>;
}

// Cache Configuration
const CACHE_VERSION = 'v1';
const CACHE_NAMES = {
  static: `static-${CACHE_VERSION}`,
  runtime: `runtime-${CACHE_VERSION}`,
  api: `api-${CACHE_VERSION}`,
  images: `images-${CACHE_VERSION}`,
  fonts: `fonts-${CACHE_VERSION}`
} as const;

// Define function declaration
declare function define(
  deps: string[],
  factory: (workbox: WorkboxType) => void
): void;

// Registry setup for define
if (!self.define) {
  const registry: Record<string, unknown> = {};

  const require = (url: string): unknown => {
    const baseURL = new URL(".", self.location.toString()).href;
    return registry[new URL(url + ".js", baseURL).href];
  };

  self.define = (
    deps: string[],
    factory: (require: (url: string) => unknown) => void,
  ): void => {
    const baseURL = new URL(".", self.location.toString()).href;
    registry[baseURL] = factory(require);
  };
}

// Critical assets to precache
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/offline-image.png',
  '/favicon.ico',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js'
] as const;

define(["./workbox-4754cb34"], function (workbox: WorkboxType) {
  "use strict";

  // Initialize workbox
  workbox.skipWaiting();
  workbox.clientsClaim();

  // Precaching with versioning
  workbox.precacheAndRoute(
    PRECACHE_ASSETS.map(url => ({
      url,
      revision: CACHE_VERSION
    })),
    {
      ignoreURLParametersMatching: [/^utm_/, /^fbclid$/, /^source$/],
    },
  );

  workbox.cleanupOutdatedCaches();

  // Caching strategies
  const networkFirstStrategy = new workbox.strategies.NetworkFirst({
    cacheName: CACHE_NAMES.static,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 86400 // 24 hours
      })
    ]
  });

  const staleWhileRevalidateStrategy = new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE_NAMES.static,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
      })
    ]
  });

  const cacheFirstStrategy = new workbox.strategies.CacheFirst({
    cacheName: CACHE_NAMES.images,
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  });

  // Route registration
  workbox.routing.registerRoute("/", networkFirstStrategy);
  workbox.routing.registerRoute(/\/_next\/static\/.+/, staleWhileRevalidateStrategy);
  workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/, cacheFirstStrategy);

  // Offline fallback
  workbox.routing.setCatchHandler(async ({ event }) => {
    const { request } = event;

    switch (request.destination) {
      case 'document':
        return caches.match('/offline.html') ?? Response.error();
      case 'image':
        return caches.match('/offline-image.png') ?? Response.error();
      default:
        return Response.error();
    }
  });
});

// Event Listeners
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAMES.static),
      caches.open(CACHE_NAMES.runtime),
    ]).then(() => {
      console.log('Service Worker installed successfully');
    }).catch(error => {
      console.error('Service Worker installation failed:', error);
    })
  );
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then(cacheNames => 
      Promise.all(
        cacheNames
          .filter(cacheName => !Object.values(CACHE_NAMES).includes(cacheName))
          .map(cacheName => caches.delete(cacheName))
      )
    ).catch(error => {
      console.error('Cache cleanup failed:', error);
    })
  );
});

self.addEventListener('push', (event: PushEvent) => {
  if (!event.data) return;

  try {
    const notification: PushNotification = event.data.json();
    event.waitUntil(
      self.registration.showNotification(notification.title, {
        body: notification.body,
        icon: notification.icon ?? '/icon.png',
        data: notification.data ?? {},
        actions: notification.actions ?? [],
        badge: '/badge.png',
        requireInteraction: false
      })
    );
  } catch (error) {
    console.error('Push notification error:', error);
  }
});

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  event.notification.close();

  if (event.action) {
    handleNotificationAction(event.action, event.notification.data);
  } else {
    event.waitUntil(
      self.clients.matchAll({ type: 'window' }).then(clients => {
        for (const client of clients) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        return self.clients.openWindow('/');
      }).catch(error => {
        console.error('Error handling notification click:', error);
      })
    );
  }
});

function handleNotificationAction(action: string, data: Record<string, unknown>): void {
  switch (action) {
    case 'view':
      void self.clients.openWindow((data.url as string) ?? '/');
      break;
    case 'dismiss':
      // Just close the notification (already done in notificationclick handler)
      break;
    default:
      console.log('Unknown action:', action);
  }
}

// Error handling
self.addEventListener('error', (event: ErrorEvent) => {
  console.error('Service Worker Error:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

self.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
  console.error('Service Worker Unhandled Rejection:', {
    reason: event.reason,
    promise: event.promise
  });
});