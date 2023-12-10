export type ObjectKeys<T> = keyof T;
export type ObjectValues<T> = T[keyof T];

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
