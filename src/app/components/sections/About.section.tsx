import P from "../Text/P";

interface Props {
  className?: string;
}
const AboutSection = ({ className }: Props) => {
  return (
    <section id="about" className={className}>
      <h2 className="text-foreground-primary mb-4 font-semibold">About</h2>
      <P className="text-foreground-secondary">
        I love{" "}
        <span className="text-foreground-primary">
          creating intuitive User Experience.
        </span>{" "}
        I code during my full-time job as well as my free-time.
      </P>
      <P className="mt-4 text-foreground-secondary">
        My current day-to-day technologies include{" "}
        <span className="text-foreground-primary">
          TypeScript, Python, React, Tailwind, Postgres, GraphqQL, and Docker.
        </span>
      </P>
      <P className="mt-4 text-foreground-secondary">
        Besides staring at my computer when coding, I also stare at it when{" "}
        <span className="text-foreground-primary">reading manga</span>{" "}
        &#40;Recommend{" "}
        <span
          className={
            "lg:hover:text-foreground-primary lg:cursor-[url('/pojita-32x32.png'),_pointer]"
          }
        >
          "Chainsaw man"
        </span>{" "}
        and "Summer Time Rendering" this year&#41;
      </P>
    </section>
  );
};
export default AboutSection;
