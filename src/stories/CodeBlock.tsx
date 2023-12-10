import { ComponentProps } from "react";
import { cn } from "../lib/cn";

const CodeBlock = ({ children, className }: ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "block bg-background-secondary p-8px rounded-4px font_size-14px_em text-foreground-primary ring-w-100 ring-inset ring-base-black/8 dark:ring-base-white/12",
        className
      )}
    >
      {children}
    </code>
  );
};

export default CodeBlock;
