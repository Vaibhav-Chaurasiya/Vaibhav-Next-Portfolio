"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

import { Backend_skill, DevTools, Frontend_skill, libraries } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-7xl px-5 md:px-12 py-20">
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-center"
          >
            <p className="text-xs tracking-[0.25em] t-muted">
              SCENE 04 — POWER MODULES
            </p>

            <h2 className="mt-2 text-[34px] sm:text-[42px] font-semibold t-text">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                Skills
              </span>
            </h2>

            <p className="mt-3 max-w-3xl mx-auto leading-relaxed t-muted">
              I work with modern web technologies to build responsive, scalable,
              and user-friendly applications.
            </p>
          </motion.div>
        )}
      </InView>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Frontend */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.35)}
              className="rounded-2xl border t-border t-card p-6 backdrop-blur-md hover:opacity-95 transition"
            >
              <h3 className="text-xl font-semibold t-text">Frontend Module</h3>
              <p className="mt-1 text-sm t-muted">
                UI, components, animation & performance.
              </p>

              <div className="mt-5 flex flex-row justify-around flex-wrap gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </InView>

        {/* Backend */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.35)}
              className="rounded-2xl border t-border t-card p-6 backdrop-blur-md hover:opacity-95 transition"
            >
              <h3 className="text-xl font-semibold t-text">Backend Module</h3>
              <p className="mt-1 text-sm t-muted">
                APIs, databases & server-side building blocks.
              </p>

              <div className="mt-5 flex flex-row justify-around flex-wrap gap-5 items-center">
                {Backend_skill.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </InView>

        {/* Dev Tools */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.45)}
              className="rounded-2xl border t-border t-card p-6 backdrop-blur-md hover:opacity-95 transition"
            >
              <h3 className="text-xl font-semibold t-text">Dev Tools Module</h3>
              <p className="mt-1 text-sm t-muted">
                Tools I use for development & deployment.
              </p>

              <div className="mt-5 flex flex-row justify-around flex-wrap gap-5 items-center">
                {DevTools.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </InView>

        {/* Libraries */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.45)}
              className="rounded-2xl border t-border t-card p-6 backdrop-blur-md hover:opacity-95 transition"
            >
              <h3 className="text-xl font-semibold t-text">Libraries Module</h3>
              <p className="mt-1 text-sm t-muted">
                Animations, icons & 3D ecosystem.
              </p>

              <div className="mt-5 flex flex-row justify-around flex-wrap gap-5 items-center">
                {libraries.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </InView>
      </div>

      <div className="mt-8 rounded-2xl border t-border t-card p-5 backdrop-blur-md text-center">
        <p className="t-muted text-sm leading-relaxed">
          ⚡ Current Focus: Next.js + MERN projects with clean UI, smooth UX and
          production-ready deployment.
        </p>
      </div>
    </section>
  );
};

export default Skills;
