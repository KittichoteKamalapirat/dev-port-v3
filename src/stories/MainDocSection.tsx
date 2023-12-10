import React, { ReactNode } from "react";
import { cn } from "../lib/cn";
import P from "../app/components/Text/P";

export type MainDocSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  children?: ReactNode;
};

const MainDocSection = ({
  title,
  description,
  className,
  children,
}: MainDocSectionProps) => {
  const DescriptionContainer = typeof description === "string" ? "p" : "div";

  return (
    <section className="py-4">
      <header className="my-4">
        <P className="text-foreground-primary text-2xl font-bold">{title}</P>
        {Boolean(description) && (
          <DescriptionContainer className="text-foreground-secondary space-y-space-gap-lg mt-4">
            {description}
          </DescriptionContainer>
        )}
      </header>
      <div className={cn("space-y-8", className)}>{children}</div>
    </section>
  );
};

export default MainDocSection;
