import React from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";

interface Props {
  className?: string;
}
const HeroSection = ({ className }: Props) => {
  return (
    <section className={cn(className)}>
      <h1 className="text-foreground-primary text-3xl lg:text-5xl font-bold">
        Kittichote Shane
      </h1>
      <h2 className="text-foreground-primary text-xl font-semibold">
        Experienced Software Engineer
      </h2>
      <P className="text-foreground-secondary">
        I love building experience and services for the web
      </P>
    </section>
  );
};
export default HeroSection;
