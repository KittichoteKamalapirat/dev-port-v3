import { FiExternalLink } from "react-icons/fi";

import P from "../Text/P";

interface Props {
  className?: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}
const projects: Project[] = [
  {
    title: "Jouzu Speak",
    description:
      "A personalized Japanese AI tutor that helps you practice conversational Japanese whenever you want.",

    technologies: ["Google Cloud Platform", "OpenAI", "Python"],
    link: "https://www.jouzuspeak.com/",
  },
  {
    title: "Online Wedding Invitation",
    description:
      "A wedding website for my friend to make it easier for guests to RSVP and for us to manage the guest list.",
    technologies: ["Google Sheets API", "Google Maps API", "i18n"],
    link: "https://www.dev.parkandrotela.com/",
  },
  {
    title: "Software Engineer",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1",

    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
    link: "",
  },
];
const ProjectSection = ({ className }: Props) => {
  return (
    <section id="projects" className={className}>
      <h2 className="text-foreground-primary mb-4 font-semibold">Projects</h2>
      <ul className="group/list">
        {projects.map((proj, index) => (
          <li className="mb-12">
            <div
              key={`project-${index}`}
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:cursor-pointer"
            >
              {/* left */}
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                Image
              </header>
              {/* right */}
              <div className="z-10 sm:col-span-6">
                <div>
                  <h3 className="text-foreground-primary font-medium leading-snug ">
                    <a
                      href={proj.link}
                      target="_blank"
                      aria-label={`${proj.title}(opens in new tab))`}
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      rel="noreferrer noopener"
                    >
                      {/* make the entire card a link */}
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      {proj.title}
                      <FiExternalLink class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </a>
                  </h3>

                  <P className="mt-2 text-sm leading-normal text-foreground-secondary">
                    {proj.description}
                  </P>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {proj.technologies.map((tech, subIndex) => (
                      <li
                        key={`project-tech-${index}-${subIndex}`}
                        className="mr-1.5 mt-2"
                      >
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectSection;
