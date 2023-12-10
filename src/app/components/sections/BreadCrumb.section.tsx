"use client";
import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";

interface Props {
  className?: string;
}

type CurrentSection = "about" | "experience" | "projects";

interface SectionNav {
  title: string;
  href: string;
}

const sectionNavs: SectionNav[] = [
  { title: "ABOUT", href: "#about" },
  { title: "EXPERIENCE", href: "#experience" },
  { title: "PROJECTS", href: "#projects" },
];

const BreadCrumbSection = ({ className }: Props) => {
  const [currentSection, setCurrentSection] = useState<CurrentSection>("about");
  return (
    <nav className={cn("nav hidden lg:block", className)}>
      <ul className="mt-16 w-max">
        {sectionNavs.map((section) => (
          <li>
            <a
              className={cn(
                "group flex items-center py-3 active",
                currentSection === "about"
                  ? "text-foreground-primary"
                  : "text-foreground-secondary"
              )}
              href={section.href}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
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
