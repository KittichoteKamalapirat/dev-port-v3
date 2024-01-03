"use client";

import Container from "../components/Container";
import MouseUpdater from "../components/MouseUpdater";
import Navbar from "../components/Navbar";
import ProjectsTableSection from "../components/sections/ProjectsTable.section";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-primary pb-12 relative">
      <Navbar />

      <Container className="py-24">
        <a
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-rose-400"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Kittichote Shane
        </a>
        <h1 className="text-4xl font-bold tracking-tight text-foreground-primary sm:text-5xl">
          All Projects
        </h1>
        <ProjectsTableSection />
        <div className="fixed pointer-events-none top-0 left-0 h-screen w-screen">
          <MouseUpdater />
        </div>
      </Container>
    </main>
  );
}
