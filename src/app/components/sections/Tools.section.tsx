import React from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";
import Link from "../Link";

interface Props {
  className?: string;
}
const ToolsSection = ({ className }: Props) => {
  return (
    <section className={cn("text-sm", className)}>
      {/* <h2 className="text-foreground-primary mb-4 font-semibold">Hi!</h2> */}
      <P className="text-foreground-secondary">
        Design inspired by{" "}
        <Link
          href="https://brittanychiang.com/"
          aria-label="Brinnary portfolio(opens in new tab)"
        >
          Brittany Portfolio.
        </Link>{" "}
        Coded in{" "}
        <Link
          href="https://code.visualstudio.com/"
          aria-label="Brinnary portfolio(opens in new tab)"
        >
          Visual Studio Code.
        </Link>{" "}
        Built with{" "}
        <Link
          href="https://nextjs.org"
          aria-label="Brinnary portfolio(opens in new tab)"
        >
          NextJS
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com"
          aria-label="Brinnary portfolio(opens in new tab)"
        >
          TailwindCSS.
        </Link>{" "}
        Deployed with{" "}
        <Link
          href="https://vercel.com"
          aria-label="Brinnary portfolio(opens in new tab)"
        >
          Vercel.
        </Link>
      </P>
    </section>
  );
};

export default ToolsSection;
