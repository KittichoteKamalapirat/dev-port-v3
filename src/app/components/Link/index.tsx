import React from "react";
import { cn } from "../../../lib/cn";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const Link = ({ href, className, children, ...rest }: Props) => {
  return (
    <a
      href={href}
      className={cn("text-foreground-primary", className)}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};
export default Link;
