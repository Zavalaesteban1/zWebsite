declare global {
  interface ServiceWorkerGlobalScope {
    define: (deps: string[], callback: (...args: any[]) => void) => void;
  }

  interface Window {
    define: (deps: string[], callback: (...args: any[]) => void) => void;
  }


  interface WorkboxPlugin {
    cacheWillUpdate?: (options: any) => Promise<Response | null>;
    // Add other plugin methods as needed
  }

  interface WorkboxStrategy {
    handle: (options: any) => Promise<Response>;
  }

  interface WorkboxConfig {
    cacheName: string;
    plugins?: WorkboxPlugin[];
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
  }

  interface WorkboxType {
    strategies: {
      NetworkFirst: new (config: WorkboxConfig) => WorkboxStrategy;
      StaleWhileRevalidate: new (config: WorkboxConfig) => WorkboxStrategy;
      CacheFirst: new (config: WorkboxConfig) => WorkboxStrategy;
    };
    routing: {
      registerRoute: (route: string | RegExp, strategy: WorkboxStrategy) => void;
      setCatchHandler: (handler: (options: any) => Promise<Response>) => void;
    };
  }
}
  export { };