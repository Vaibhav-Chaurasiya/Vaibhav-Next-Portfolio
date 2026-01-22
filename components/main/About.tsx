"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const About = () => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-4 sm:px-8 py-16 overflow-hidden">
      {/* Background encryption video */}
      <div className="absolute inset-0 opacity-20 pointer-events-none hidden md:block">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/encryption.webm" type="video/webm" />
        </video>
      </div>

      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="relative z-10 text-center"
          >
            <p className="text-xs tracking-[0.25em] text-white/55">ABOUT</p>
            <h2 className="mt-2 text-[34px] sm:text-[42px] font-semibold text-white">
              A little{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                about me
              </span>
            </h2>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto leading-relaxed">
              I’m Vaibhav Chaurasiya — focused on web development, UI quality,
              performance optimization, and SEO-ready structure using Next.js.
            </p>
          </motion.div>
        )}
      </InView>

      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.35)}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h3 className="text-white font-semibold text-xl">What I do</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                I build landing pages, portfolios, and web apps with clean UI,
                fast loading, smooth motion, and scalable code structure.
              </p>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.35)}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <h3 className="text-white font-semibold text-xl">What I built</h3>
              <p className="mt-2 text-white/70 leading-relaxed">
                Projects like PrepMate AI (Interview Coach) and AI Lawyer
                (legal assistant with RAG) — focused on real-world use cases.
              </p>
            </motion.div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
