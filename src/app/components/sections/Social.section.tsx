import { AiFillProfile } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React, { ReactNode } from "react";
import { cn } from "../../../lib/cn";
import P from "../Text/P";
import { cvLink, githubLink, linkedInLink } from "../../constants/links";

interface Props {
  className?: string;
}

interface Social {
  ariaLabel: string;
  href: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    ariaLabel: "LinkedIn",
    href: linkedInLink,
    icon: (
      <FaLinkedin class="w-6 h-6 hover:text-foreground-interactive-hover" />
    ),
  },
  {
    ariaLabel: "Github",
    href: githubLink,
    icon: <FaGithub class="w-6 h-6 hover:text-foreground-interactive-hover" />,
  },
  {
    ariaLabel: "Resume",
    href: cvLink,
    icon: (
      <AiFillProfile class="w-6 h-6 hover:text-foreground-interactive-hover" />
    ),
  },
];
const SocialSection = ({ className }: Props) => {
  return (
    <section className={cn("flex items-center", className)}>
      <ul className="flex items-center">
        {socials.map((social) => (
          <li className="mr-5 text-xs">
            <a
              href={social.href}
              className={cn("", className)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.ariaLabel}(opens in a new tab)`}
            >
              <div className="text-foreground-primary">{social.icon}</div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SocialSection;
