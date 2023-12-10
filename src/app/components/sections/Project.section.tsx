import React from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";

interface Props {
  className?: string;
}

interface Project {
  title: string;

  description: string;
  technologies: string[];
}
const projects: Project[] = [
  {
    title: "Software Engineer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",

    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
  },
  {
    title: "Software Engineer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",

    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
  },
  {
    title: "Software Engineer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",

    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
  },
];
const ProjectSection = ({ className }: Props) => {
  return (
    <section id="projects" className={className}>
      <h2 className="text-foreground-primary mb-4">Projects</h2>
      {projects.map((proj) => (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {/* left */}
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            Image
          </header>
          {/* right */}
          <div className="z-10 sm:col-span-6">
            <div>
              <h3 className="text-foreground-primary font-medium leading-snug ">
                {proj.title}
              </h3>

              <P className="mt-2 text-sm leading-normal text-foreground-secondary">
                {proj.description}
              </P>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                {proj.technologies.map((tech) => (
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default ProjectSection;
