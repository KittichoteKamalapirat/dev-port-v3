import React, { ReactNode } from "react";
import Divider from "../app/components/Divider";

export type DocSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

const DocSection = ({ title, description, children }: DocSectionProps) => {
  const DescriptionContainer = typeof description === "string" ? "p" : "div";

  return (
    <section>
      <header className="mb-24px">
        <h3 className="mb-8px">{title}</h3>
        {Boolean(description) && (
          <DescriptionContainer className="typo-base-text-md text-foreground-secondary space-y-space-gap-lg">
            {description}
          </DescriptionContainer>
        )}
        <Divider className="my-16px" />
      </header>
      <div>{children}</div>
    </section>
  );
};

export default DocSection;
