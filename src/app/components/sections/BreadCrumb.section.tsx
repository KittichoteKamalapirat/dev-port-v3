"use client";
import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";

interface Props {
  currentSection: SectionState;
  className?: string;
}

export type SectionState = "about" | "experience" | "projects";

interface SectionNav {
  title: string;
  href: string;
  slug: SectionState;
}

const sectionNavs: SectionNav[] = [
  { title: "ABOUT", href: "#about", slug: "about" },
  { title: "EXPERIENCE", href: "#experience", slug: "experience" },
  { title: "PROJECTS", href: "#projects", slug: "projects" },
];

const BreadCrumbSection = ({ currentSection, className }: Props) => {
  return (
    <nav className={cn("nav hidden lg:block", className)}>
      <ul className="mt-16 w-max">
        {sectionNavs.map((section) => (
          <li>
            <a
              className={cn(
                "group flex items-center py-3 active",
                section.slug === currentSection
                  ? "text-foreground-primary font-bold"
                  : "text-foreground-secondary"
              )}
              href={section.href}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-border-medium transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs uppercase tracking-widest  group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {section.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default BreadCrumbSection;
