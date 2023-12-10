import React from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";

interface Props {
  className?: string;
}

interface Experience {
  title: string;
  commpany: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
}
const experiences: Experience[] = [
  {
    title: "Software Engineer",
    commpany: "string",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
    startDate: "2022",
    endDate: "Present",
  },
  {
    title: "Software Engineer",
    commpany: "string",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
    startDate: "2022",
    endDate: "Present",
  },
  {
    title: "Software Engineer",
    commpany: "string",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",
    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
    startDate: "2022",
    endDate: "Present",
  },
];
const ExperienceSection = ({ className }: Props) => {
  return (
    <section className={className}>
      <h2 className="text-foreground-primary mb-4">Experience</h2>
      {experiences.map((exp) => (
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          {/* left */}
          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
            {exp.startDate} - {exp.endDate}
          </header>
          {/* right */}
          <div className="z-10 sm:col-span-6">
            <div>
              <h3 className="text-foreground-primary font-medium leading-snug ">
                {exp.title} | {exp.commpany}
              </h3>

              <P className="mt-2 text-sm leading-normal text-foreground-secondary">
                {exp.description}
              </P>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                {exp.technologies.map((tech) => (
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
export default ExperienceSection;
