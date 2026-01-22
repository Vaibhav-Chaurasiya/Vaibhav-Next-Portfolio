"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Mission = () => {
  return (
    <section className="mx-auto w-full max-w-7xl pt-2 pb-8">
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border t-border t-card p-6 sm:p-8 backdrop-blur-md"
          >
            <p className="text-xs tracking-[0.35em] t-muted">
              SCENE 02 — MISSION
            </p>

            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold t-text">
              Build fast, clean & SEO-ready web experiences.
            </h2>

            <p className="mt-2 t-muted leading-relaxed max-w-3xl">
              I focus on modern UI, performance optimization and smooth motion —
              from landing pages to full-stack web applications.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border t-border t-card p-4">
                <h3 className="font-semibold t-text">Performance</h3>
                <p className="mt-1 text-sm t-muted">
                  Fast load, clean UX and smooth interactions.
                </p>
              </div>

              <div className="rounded-2xl border t-border t-card p-4">
                <h3 className="font-semibold t-text">SEO Ready</h3>
                <p className="mt-1 text-sm t-muted">
                  Structured pages with best practices for ranking.
                </p>
              </div>

              <div className="rounded-2xl border t-border t-card p-4">
                <h3 className="font-semibold t-text">Premium UI</h3>
                <p className="mt-1 text-sm t-muted">
                  Glassmorphism + modern motion for premium feel.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default Mission;
