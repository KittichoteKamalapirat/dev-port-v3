import { cn } from "../../../lib/cn";

interface ProjectArchive {
  title: string;
  year: string;
  madeAt: string;
  technologies: string[];
  link: string;
  thumbnail: string;
}
const projects: ProjectArchive[] = [
  {
    title: "Earned Wage Access",
    year: "2023",
    madeAt: "EarnIn",
    technologies: ["React", "Nx", "Typescript", "TailwindCSS", "Playwright"],
    link: "https://earnin.com/",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "Packaging CMS",
    year: "2022",
    madeAt: "Grounded Packaging",
    technologies: ["NextJS", "GraphQL"],
    link: "https://groundedpackaging.co/",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "Endoscope iOT",
    year: "2022",
    madeAt: "Endo Supply",
    technologies: ["NextJS", "GraphQL"],
    // link: "https://www.endo-supply.com/",
    link: "#",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "Japanese AI Tutor",
    year: "2023",
    madeAt: "",
    technologies: ["Google Cloud Platform", "OpenAI", "Python"],
    link: "https://www.jouzuspeak.com/",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "Smartbanner NPM Package",
    year: "2023",
    madeAt: "",
    technologies: ["React", "Typescript", "Tailwind", "NPM"],
    link: "https://www.npmjs.com/package/custom-react-smartbanner",
    thumbnail: "/smartbanner.svg",
  },
  {
    title: "Portfolio V3",
    year: "2023",
    madeAt: "",
    technologies: ["NextJS", "TailwindCSS", "Vercel"],
    link: "https://v3.kittishane.com/",
    thumbnail: "/v3.webp",
  },
  {
    title: "Wedding Card",
    year: "2023",
    madeAt: "",
    technologies: ["Google Sheets API", "Google Maps API", "i18n"],
    link: "https://www.dev.parkandrotela.com/",
    thumbnail: "/wedding.webp",
  },
  {
    title: "Party Calculator",
    year: "2022",
    madeAt: "",
    technologies: ["React", "Typescript", "Tailwind", "Netlify"],
    link: "https://www.shareculator.com/",
    thumbnail: "/shareculator.webp",
  },
  {
    title: "Test Youtube Thumbnail",
    year: "2022",
    madeAt: "",
    technologies: ["Youtube API"],
    link: "https://www.testthumbnail.com/",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "iPhone Mockup",
    year: "2022",
    madeAt: "",
    technologies: ["ThreeJS"],
    link: "https://mokei.vercel.app/",
    thumbnail: "/jouzu.webp",
  },
  {
    title: "Portfolio V2",
    year: "2021",
    madeAt: "",
    technologies: ["NextJS", "ChakraUI", "Netlify"],
    link: "https://v2.kittishane.com/",
    thumbnail: "/v2.webp",
  },
  {
    title: "Insole Marketing",
    year: "2020",
    madeAt: "F Style",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    thumbnail: "/v1.webp",
  },
  {
    title: "Mealkit Marketplace",
    year: "2020",
    madeAt: "",
    technologies: ["Node", "GraphQL", "NextJS"],
    link: "https://cookknow-monorepo-client.vercel.app/",
    thumbnail: "/v1.webp",
  },
  {
    title: "Portfolio V1",
    year: "2019",
    madeAt: "",
    technologies: ["Node", "EJS"],
    link: "https://v1.kittishane.com/",
    thumbnail: "/v1.webp",
  },
  {
    title: "Meeting Room Marketplace",
    year: "2017",
    madeAt: "Spacee",
    technologies: ["Ruby on Rails"],
    link: "https://www.spacee.jp/",
    thumbnail: "/v1.webp",
  },
];
interface Props {
  className?: string;
}
const ProjectsTableSection = ({ className }: Props) => {
  return (
    <table className={cn("mt-12 w-full border-collapse text-left", className)}>
      <thead className="sticky top-0 z-10 border-b-[1px] border-medium px-6 py-5 text-foreground-primary">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold">Year</th>
          <th className="py-4 pr-8 text-sm font-semibold">Project</th>
          <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
            Made at
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
            Built with
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {projects.map((proj, index) => (
          <tr
            className="border-b-[1px] border-light last:border-none"
            key={`${proj.title}-${index}`}
          >
            <td className="py-4 pr-4 align-top text-sm text-foreground-secondary">
              <div className="translate-y-px ">{proj.year}</div>
            </td>
            <td className="py-4 pr-4 align-top leading-snug text-foreground-primary">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="inline-flex items-baseline leading-tight text-slate-200 hover:text-rose-400 focus-visible:text-rose-400 sm:hidden group/link text-base"
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${proj.title} (opens in a new tab)`}
                  >
                    <span>
                      {" "}
                      <span className="inline-block">
                        {proj.title}
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
                <div className="hidden sm:block">{proj.title}</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-foreground-primary lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                {proj.madeAt}
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                {proj.technologies.map((tech, subIndex) => (
                  <li key={`${proj.title}-${tech}`} className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-rose-400/10 px-3 py-1 text-xs font-medium leading-5 text-rose-400 ">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              {proj.link !== "#" && (
                <ul className="translate-y-1">
                  <li className="mb-1 flex items-center">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-foreground-primary hover:text-rose-400 focus-visible:text-rose-400 text-sm group/link "
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="emersoncollective.com (opens in a new tab)"
                    >
                      <span>
                        {" "}
                        <span className="inline-block">
                          Link
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                  </li>
                </ul>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectsTableSection;
