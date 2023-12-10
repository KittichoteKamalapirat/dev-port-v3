import React from "react";
import P from "./Text/P";
import { cn } from "../../lib/cn";

interface Props {
  title: string;
  description: string;
  className?: string;
}
const Card = ({ title, description, className }: Props) => {
  return (
    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={cn(
        "group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-2 text-2xl text-foreground-primary font-semibold`}>
        {title}
      </h2>
      <P className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</P>
    </a>
  );
};
export default Card;
