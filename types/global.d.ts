import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  interface Window {
    scrollTo: (x: number, y: number) => void;
  }

  interface Document {
    querySelector: (selectors: string) => Element | null;
  }
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface ContainerProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export { ContainerProps };
