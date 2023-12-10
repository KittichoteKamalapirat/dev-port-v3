import BlurBlob from "./components/BlurBlob";
import Card from "./components/Card";
import Container from "./components/Container";

import Navbar from "./components/Navbar";
import AboutSection from "./components/sections/About.section";
import ExperienceSection from "./components/sections/Experience.section";
import HeroSection from "./components/sections/Hero.section";
import ProjectSection from "./components/sections/Project.section";
import SocialSection from "./components/sections/Social.section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-primary">
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          {/* left */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between  lg:py-24">
            <HeroSection />
            <SocialSection className="mt-8 ml-1" />
          </header>

          {/* right */}

          <div className="lg:py-24">
            <AboutSection />
            <ExperienceSection className="mt-12" />
            <ProjectSection className="mt-12" />
          </div>
        </div>

        <BlurBlob />
      </Container>
    </main>
  );
}
