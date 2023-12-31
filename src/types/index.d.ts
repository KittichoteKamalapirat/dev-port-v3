export type ObjectKeys<T> = keyof T;
export type ObjectValues<T> = T[keyof T];

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare namespace JSX {
  interface IntrinsicElements {
    set: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      attributeName?: string;
      begin?: string;
      to?: any;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      set: {
        attributeName: string;
        begin: string;
        to: string;
      };
    }
  }
}
