import { ReactNode } from "react";
import { cn } from "../../../lib/cn";

interface Props {
  children: ReactNode;
  position?: string;
  className?: string;
}

export default function Container({
  children,
  position = "flex-col",
  className,
}: Props) {
  return (
    <div
      className={cn("mx-auto h-full px-4 md:max-w-6xl", position, className)}
    >
      {children}
    </div>
  );
}
