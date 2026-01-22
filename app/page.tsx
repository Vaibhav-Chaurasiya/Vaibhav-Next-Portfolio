"use client";

import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import ContactCTA from "@/components/main/ContactCTA";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Full width sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactCTA />
    </main>
  );
}
