import AuroraBackground from "./components/ui/AuroraBackground";
import HeroContent from "./components/sections/HeroContent";
import BentoGrid from "./components/sections/BentoGrid";
import ProjectGallery from "./components/sections/ProjectGallery";
import Education from "./components/sections/Education";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className=" min-h-screen bg-transparent w-full relative selection:bg-blue-500/30 selection:text-blue-200">
      {/* Hero */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <AuroraBackground />
        <HeroContent />
      </section>

      <div className="relative z-20">
        <BentoGrid />
        <TechStack />
        <ProjectGallery />
        <Education />

        {/* Wrapper to ensure bottom padding so Dock doesn't cover Content */}
        <div className="pb-32 ">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
