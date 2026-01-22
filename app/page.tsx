import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Mission from "@/components/main/Mission";
import ContactCTA from "@/components/main/ContactCTA";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ✅ Full width wrapper */}
      <div className="w-full">
        {/* ✅ Hero full-bleed */}
        <Hero />

        {/* ✅ Rest sections with premium centered container */}
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <Mission />
          <About />
          <Skills />
          <Projects />
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
