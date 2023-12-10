import { ComponentProps } from "react";
import { cn } from "../lib/cn";

export type LinkProps = ComponentProps<"a"> & {
  isNewTab?: boolean;
};

const Link = ({
  isNewTab,
  target,
  className,
  children,
  ...restProps
}: LinkProps) => {
  return (
    <a
      {...restProps}
      className={cn(
        "text-foreground-primary font-semibold hover:text-foreground-secondary border-b-w-100 border-b-foreground-secondary hover:border-b-w-200",
        className
      )}
      target={target ?? isNewTab ? "_blank" : undefined}
    >
      {children}
    </a>
  );
};

export default Link;
