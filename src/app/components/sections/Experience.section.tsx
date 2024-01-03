import { FiExternalLink } from "react-icons/fi";
import P from "../Text/P";
import { cvLink } from "../../constants/links";

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
  link: string;
}
const experiences: Experience[] = [
  {
    title: "Software Engineer",
    commpany: "Earnin",
    description:
      "Developing a financial web app that enables more than 10,000 users/month to access their earnings before their payday. Working on our own  Design System.",
    technologies: ["React", "Typescript", "Tailwindcss", "Playwright"],
    startDate: "2022",
    endDate: "Present",
    link: "https://earnin.com/",
  },
  // {
  //   title: "Software Engineer Contract",
  //   commpany: "Endo Supply",
  //   description:
  //     "Designed and coded an endoscope management system which connects to storage cabinets to monitor endoscope usage history in a public hospital.",
  //   technologies: ["React", "Typescript", "Tailwindcss", "Node.JS"],
  //   startDate: "Aug",
  //   endDate: "Oct 2022",
  //   link: "https://www.endo-supply.com/",
  // },
  {
    title: "Senior React Developer",
    commpany: "Grounded Packaging",
    description:
      "Built an internal web app to fully automate a product quote process in a sustainable packaging industry.",
    technologies: ["Typescript", "NextJS", "GraphQL", "Ruby on Rails"],

    startDate: "Feb",
    endDate: "Jul 2022",
    link: "https://groundedpackaging.co/",
  },
  {
    title: "Software Engineer Freelance",
    commpany: "Toptal",
    description:
      "Built MVPs for various projects including a hair salon marketplace web app as well as an audio-based language learning mobile app.",
    technologies: ["React", "React Native", "NestJS", "Docker"],

    startDate: "2022",
    endDate: "Present",
    link: "https://www.toptal.com/",
  },
  {
    title: "Software Engineer Contract",
    commpany: "F Style",
    description:
      "Modernized and maintained the company’s landing page to be up-to-date.",
    technologies: ["HTML", "CSS", "JavaScript"],

    startDate: "2020",
    endDate: "2022",
    link: "#",
  },
];
const ExperienceSection = ({ className }: Props) => {
  return (
    <section id="experience" className={className}>
      <h2 className="text-foreground-primary mb-4 font-semibold">Experience</h2>
      <ul className="group/list">
        {experiences.map((exp, index) => (
          <li className="mb-12" key={`experience-${index}`}>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 hover:cursor-pointer ">
              {/* for bg color when hover */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100/20 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* left */}
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-foreground-secondary sm:col-span-2">
                {exp.startDate} - {exp.endDate}
              </header>
              {/* right */}
              <div className="z-10 sm:col-span-6">
                <div>
                  <h3 className="text-foreground-primary font-medium leading-snug ">
                    <a
                      href={exp.link}
                      target="_blank"
                      aria-label={`${exp.title}(opens in new tab))`}
                      className="inline-flex items-baseline font-medium leading-tight text-foreground-primary hover:text-brand-primary focus-visible:text-brand-primary  group/link text-base"
                      rel="noreferrer noopener"
                    >
                      {/* make the entire card a link */}
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      {exp.title} @{exp.commpany}
                      <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </a>
                  </h3>

                  <P className="mt-2 text-sm leading-normal text-foreground-secondary">
                    {exp.description}
                  </P>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {exp.technologies.map((tech, subIndex) => (
                      <li
                        key={`experience-${index}-${subIndex}`}
                        className="mr-1.5 mt-2"
                      >
                        <div className="flex items-center rounded-full bg-rose-400 bg-opacity-10 px-3 py-1 text-xs font-medium leading-5 text-brand-primary">
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

      <div className="mt-12">
        <a
          className="inline-flex items-baseline leading-tight text-foreground-primary hover:text-rose-400 focus-visible:text-rose-400 font-semibold group/link text-base"
          href={cvLink}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            View Full{" "}
            <span className="inline-block">
              Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};
export default ExperienceSection;
