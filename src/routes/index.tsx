import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Contact from "@src/components/Contact";
import Experience from "@src/components/Experience";
import Header from "@src/components/Header";
import Hero from "@src/components/Hero/hero";
import Projects from "@src/components/Project";
import Skills from "@src/components/Skills";
import { createFileRoute } from "@tanstack/react-router";

import "./globals.css";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen text-foreground"
    >
      <Header />
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </motion.main>
  );
}
