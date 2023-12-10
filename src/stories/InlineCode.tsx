import { ComponentProps } from "react";
import { cn } from "../lib/cn";

export type InlineCodeProps = ComponentProps<"code">;

const InlineCode = ({ className, ...restProps }: InlineCodeProps) => {
  return (
    <code
      {...restProps}
      className={cn(
        "py-2px px-6px rounded-4px bg-background-secondary text-foreground-primary whitespace-nowrap ring-w-100 ring-inset ring-base-black/8 dark:ring-base-white/12",
        className
      )}
    />
  );
};

export default InlineCode;
