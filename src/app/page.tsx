"use client";
import { useInView } from "react-intersection-observer";
import Container from "./components/Container";

import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/cn";
import MouseUpdater from "./components/MouseUpdater";
import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/About.section";
import BreadCrumbSection, {
  SectionState,
} from "./components/sections/BreadCrumb.section";
import ExperienceSection from "./components/sections/Experience.section";
import HeroSection from "./components/sections/Hero.section";
import ProjectSection from "./components/sections/Project.section";
import SocialSection from "./components/sections/Social.section";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionState>("about");

  const appRef = useRef<any>(); // TODO: fix any
  const {
    ref: aboutRef,
    inView: aboutInView,
    entry: aboutEntry,
  } = useInView({
    threshold: 0.5,
  });
  const {
    ref: expRef,
    inView: expInView,
    entry: expEntry,
  } = useInView({
    threshold: 0.8,
  });
  const {
    ref: projectsRef,
    inView: projectsInView,
    entry: projectsEntry,
  } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutInView) setCurrentSection("about");
  }, [aboutInView]);

  useEffect(() => {
    if (expInView) setCurrentSection("experience");
  }, [expInView]);

  useEffect(() => {
    if (projectsInView) setCurrentSection("projects");
  }, [projectsInView]);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-background-primary"
      ref={appRef}
    >
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* left */}
          <header
            className={cn(
              "py-16",
              "lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between  lg:py-24"
            )}
          >
            <div>
              <HeroSection />
              <BreadCrumbSection currentSection={currentSection} />
            </div>
            <SocialSection className="mt-2 lg:mt-8" />
          </header>

          {/* right */}
          <div className="lg:py-24">
            <div ref={aboutRef}>
              <AboutSection />
            </div>
            <div ref={expRef}>
              <ExperienceSection className="mt-8 lg:mt-16" />
            </div>
            <div ref={projectsRef}>
              <ProjectSection className="mt-8 lg:mt-16" />
            </div>
          </div>
        </div>

        <div className="fixed pointer-events-none top-0 left-0 h-screen w-screen">
          <MouseUpdater />
        </div>
      </Container>
    </main>
  );
}
