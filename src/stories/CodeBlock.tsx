import { ComponentProps } from "react";
import { cn } from "../lib/cn";

const CodeBlock = ({ children, className }: ComponentProps<"code">) => {
  return (
    <code
      className={cn(
        "block bg-background-secondary p-2 rounded-md text-foreground-primary ring-[1px] ring-border-light",
        className
      )}
    >
      {children}
    </code>
  );
};

export default CodeBlock;
