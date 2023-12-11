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
    commpany: "Earnin",
    description:
      "Developing a financial web app that enables more than 10,000 users/month to access their earnings before their payday. Working on our own  Design System .",
    technologies: ["React", "Typescript", "Tailwindcss", "Playwright"],
    startDate: "2022",
    endDate: "Present",
  },
  {
    title: "Software Engineer (Contract)",
    commpany: "Endo Supply",
    description:
      "Designed and coded an endoscope management system which connects to storage cabinets to monitor endoscope usage history in a public hospital.",
    technologies: ["React", "Typescript", "Tailwindcss", "Nx"],
    startDate: "Aug",
    endDate: "Oct 2022",
  },
  {
    title: "Senior React Developer",
    commpany: "Grounded Packaging",
    description:
      "Built an internal web app to fully automate a product quote process in a sustainable packaging industry.",
    technologies: ["Typescript", "NextJS", "GraphQL", "Ruby on Rails"],

    startDate: "Feb",
    endDate: "Jul 2022",
  },
];
const ExperienceSection = ({ className }: Props) => {
  return (
    <section id="experience" className={className}>
      <h2 className="text-foreground-primary mb-4 font-semibold">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={`experience-${index}`}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            {/* left */}
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {exp.startDate} - {exp.endDate}
            </header>
            {/* right */}
            <div className="z-10 sm:col-span-6">
              <div>
                <h3 className="text-foreground-primary font-medium leading-snug ">
                  {exp.title} @ {exp.commpany}
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
      </div>
    </section>
  );
};
export default ExperienceSection;
