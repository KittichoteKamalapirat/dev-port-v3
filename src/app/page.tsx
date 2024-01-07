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
import ToolsSection from "./components/sections/Tools.section";
import BlogSection from "./components/sections/Blog.section";
import TimeMachineOverlay from "./components/TimeMachine/TimeMachineOverlay";
import Image from "next/image";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionState>("about");
  const [showTimeMachine, setShowTimeMachine] = useState<boolean>(false);

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
    threshold: 1,
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
      className="flex min-h-screen flex-col items-center justify-between bg-background-primary pb-12 relative"
      ref={appRef}
    >
      <Navbar />

      <Container>
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* left */}
          <header
            className={cn(
              "py-20", //mobile
              "lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
            )}
          >
            <div>
              <HeroSection />
              <BreadCrumbSection currentSection={currentSection} />
            </div>
            <SocialSection className="mt-2 lg:mt-8" />
          </header>

          {/* right */}
          <main className="pt-12 lg:w-1/2 lg:py-24">
            <div ref={aboutRef}>
              <AboutSection />
            </div>
            <div ref={expRef}>
              <ExperienceSection className="mt-20 lg:mt-16" />
            </div>
            <div ref={projectsRef}>
              <ProjectSection className="mt-20 lg:mt-16" />
            </div>
            <div>
              <BlogSection className="mt-20 lg:mt-16" />
            </div>
            <ToolsSection className="mt-20 lg:mt-24" />
          </main>
        </div>

        <div className="fixed pointer-events-none top-0 left-0 h-screen w-screen">
          <MouseUpdater />
        </div>
      </Container>

      {/* <TimeMachineOverlay
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-background-primary",
          "transition-opacity duration-500",
          showTimeMachine ? "opacity-100 z-[100]" : "opacity-0 -z-10"
        )}
        close={() => setShowTimeMachine(false)}
      />

      <button
        className="absolute bottom-0 right-0"
        onClick={() => setShowTimeMachine(true)}
      >
        <Image
          alt="Doctor Who Time Machine"
          src={"/doctor-who-time-machine.gif"}
          width={100}
          height={86}
          loading="lazy"
          decoding="async"
          className="rounded-md w-[100px] h-[86px]"
        />
      </button> */}
    </main>
  );
}
