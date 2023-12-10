import { ComponentProps } from "react";
import { cn } from "../lib/cn";

export type InlineCodeProps = ComponentProps<"code">;

const InlineCode = ({ className, ...restProps }: InlineCodeProps) => {
  return (
    <code
      {...restProps}
      className={cn(
        "py-[2px] px-[6px] rounded-md bg-background-secondary text-foreground-primary whitespace-nowrap ring-[1px] ring-border-light",
        className
      )}
    />
  );
};

export default InlineCode;
