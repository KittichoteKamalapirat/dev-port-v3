import React, { ReactNode } from "react";
import { cn } from "../../../lib/cn";

interface Props {
  className?: string;
  children: ReactNode;
}
const P = ({ children, className }: Props) => {
  return (
    <div className={cn("text-foreground-primary", className)}>{children}</div>
  );
};
export default P;
