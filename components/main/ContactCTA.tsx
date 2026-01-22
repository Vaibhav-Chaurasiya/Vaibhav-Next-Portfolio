"use client";

import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  RiMailSendLine,
  RiLinkedinFill,
  RiWhatsappLine,
  RiArrowRightUpLine,
} from "react-icons/ri";

const ContactCTA = () => {
  const email = "vaibhavchaurasiya50@gmail.com";
  const phone = "918726735025";

  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 py-20"
    >
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border t-border t-card backdrop-blur-md"
          >
            {/* ✅ Decorative glow layer (matches cinematic theme) */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-[var(--accent)]/10" />
              <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full blur-3xl bg-[var(--primary)]/10" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-7 sm:p-10">
              {/* LEFT: Text */}
              <div>
                <p className="text-xs tracking-[0.35em] t-muted">
                  SCENE 06 — FINAL TRANSMISSION
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold t-text leading-tight">
                  Want to work together?
                </h2>

                <p className="mt-3 max-w-xl leading-relaxed t-muted">
                  I’m open to internships, freelance projects, and full-time
                  opportunities. If you want a fast, premium and SEO-ready
                  website — let’s talk.
                </p>

                {/* ✅ Quick info */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-sm t-muted">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70" />
                    Response time: usually within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-sm t-muted">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]/70" />
                    Location: Noida / Uttar Pradesh (India)
                  </div>
                </div>

                {/* ✅ Buttons */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="button-primary inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-medium t-text"
                  >
                    <RiMailSendLine className="text-lg" />
                    Email Me
                    <RiArrowRightUpLine className="text-lg opacity-80" />
                  </a>

                  <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border t-border t-card px-5 py-2 text-sm font-medium t-text hover:opacity-90 transition"
                  >
                    <RiWhatsappLine className="text-lg" />
                    WhatsApp
                  </a>

                  <a
                    href="https://www.linkedin.com/in/vaibhav-chaurasiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border t-border t-card px-5 py-2 text-sm font-medium t-text hover:opacity-90 transition"
                  >
                    <RiLinkedinFill className="text-lg" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* RIGHT: Mini Contact Card */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-md rounded-2xl border t-border t-card p-6 backdrop-blur-md">
                  <p className="text-xs tracking-[0.35em] t-muted">
                    QUICK CONTACT
                  </p>

                  <h3 className="mt-3 text-xl font-semibold t-text">
                    Let’s build something premium ✨
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed t-muted">
                    You can reach me via email or WhatsApp. I’ll respond with
                    pricing + timeline quickly.
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border t-border t-card px-4 py-3">
                      <p className="text-xs t-muted">Email</p>
                      <p className="text-sm font-medium t-text break-all">
                        {email}
                      </p>
                    </div>

                    <div className="rounded-xl border t-border t-card px-4 py-3">
                      <p className="text-xs t-muted">WhatsApp</p>
                      <p className="text-sm font-medium t-text">+91 {phone}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-xs t-muted">
                    Tip: Keep your subject clear —{" "}
                    <span className="t-text font-medium">
                      “Portfolio / Website Project”
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </section>
  );
};

export default ContactCTA;
