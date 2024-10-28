declare global {
    interface ServiceWorkerGlobalScope {
      define: (deps: string[], callback: (...args: any[]) => void) => void;
    }
  
    interface Window {
      define: (deps: string[], callback: (...args: any[]) => void) => void;
    }
  }
  
  export {};