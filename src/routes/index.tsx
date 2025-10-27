import About from "@src/components/About";
import Contact from "@src/components/Contact";
import Education from "@src/components/Education";
import Experience from "@src/components/Experience";
import Header from "@src/components/Header";
import Hero from "@src/components/Hero";
import Skills from "@src/components/Skill";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
