"use client";
import React from "react";
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";

const projects = [
  {
    title: "PrepMate AI — AI Powered Interview Coach",
    problem:
      "Candidates struggle with real interview practice, feedback, and job-fit clarity.",
    solution:
      "Built an AI interview preparation platform with role-based interview simulations, voice feedback, and resume–JD matching to improve confidence and communication.",
    stack: ["Next.js", "GenAI", "Interview Simulation", "Resume Matching"],
    live: "https://interview-coach-kappa.vercel.app/",
    github: "", // optional (add later)
  },
  {
    title: "AI Lawyer — AI Powered Legal Assistant",
    problem:
      "Legal research and document analysis take hours of manual effort and reading.",
    solution:
      "Created an AI platform using GenAI + RAG to summarize legal documents, answer case questions, and speed up case preparation.",
    stack: ["Next.js", "GenAI", "RAG", "Document Analysis"],
    live: "https://ai-lawyer-mu.vercel.app/",
    github: "", // optional (add later)
  },
];

const Projects = () => {
  return (
    <section
      className="relative mx-auto w-full max-w-6xl px-4 sm:px-8 py-10"
      id="projects"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="text-xs tracking-[0.25em] text-white/55">
          SCENE 05 — MISSION LOGS
        </p>

        <h2 className="mt-2 text-[34px] sm:text-[42px] font-semibold text-white">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)]">
            Projects
          </span>
        </h2>

        <p className="mt-3 text-white/70 max-w-3xl mx-auto leading-relaxed">
          Real-world projects focused on AI-powered experiences, performance, and
          clean UI with Next.js.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <span className="text-xs text-white/50 border border-white/10 bg-white/5 px-3 py-1 rounded-full">
                Case File #{idx + 1}
              </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-white/70 leading-relaxed">
              <p>
                <span className="text-white/90 font-semibold">Problem:</span>{" "}
                {p.problem}
              </p>
              <p>
                <span className="text-white/90 font-semibold">Solution:</span>{" "}
                {p.solution}
              </p>
            </div>

            {/* Tech stack chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={p.live}
                target="_blank"
                className="button-primary flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-medium"
              >
                <RiExternalLinkLine className="text-lg" />
                Live Demo
              </a>

              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
                >
                  <RiGithubFill className="text-lg" />
                  GitHub
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
