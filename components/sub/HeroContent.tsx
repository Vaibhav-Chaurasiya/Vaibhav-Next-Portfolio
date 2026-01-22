"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { RiExternalLinkLine, RiMailLine } from "react-icons/ri";

const HeroContent = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-12 pt-32 md:pt-36 pb-16"
        >
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-xs tracking-[0.25em] t-muted text-center md:text-left"
          >
            FULL STACK DEVELOPER • NEXT.JS • MERN • SEO
          </motion.p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.4)}
              className="flex flex-col gap-5"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight t-text">
                Hi, I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                  Vaibhav Chaurasiya
                </span>
                .
                <br />
                I build modern websites that feel premium & fast.
              </h1>

              <p className="leading-relaxed max-w-2xl t-muted">
                I design and develop responsive, SEO-friendly web experiences
                with smooth animations, clean UI and production-ready code.
              </p>

              <div className="text-sm space-y-2 t-muted">
                <p>• Web Developer Intern @ Code Eternity (Noida)</p>
                <p>• Built PrepMate AI & AI Lawyer (GenAI + RAG)</p>
                <p>• Focus: UI polish, performance & clean architecture</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="#projects"
                  className="button-primary rounded-xl px-5 py-2 text-sm font-medium t-text flex items-center gap-2"
                >
                  <RiExternalLinkLine className="text-lg" />
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border t-border t-card px-5 py-2 text-sm font-medium t-text hover:opacity-90 transition flex items-center gap-2"
                >
                  <RiMailLine className="text-lg" />
                  Contact
                </a>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.5)}
              className="flex justify-center md:justify-end"
            >
              <div className="w-full max-w-[420px] rounded-3xl border t-border t-card backdrop-blur-md overflow-hidden relative">
                <div className="relative z-10 p-7">
                  <p className="text-xs tracking-[0.25em] t-muted">
                    QUICK SUMMARY
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold t-text">
                    Fast • Clean • SEO-ready
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed t-muted">
                    I ship responsive UI with smooth motion and performance-first structure.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "Tailwind", "Framer Motion", "SEO"].map((x) => (
                      <span
                        key={x}
                        className="rounded-full border t-border t-card px-3 py-1 text-xs t-muted"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default HeroContent;
