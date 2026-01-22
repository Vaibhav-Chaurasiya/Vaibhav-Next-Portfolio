"use client";

import React from "react";
import { RiMailSendLine, RiLinkedinFill, RiWhatsappLine } from "react-icons/ri";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl pb-16 px-4 sm:px-8"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <p className="text-xs tracking-[0.25em] text-white/55">
          SCENE 06 — FINAL TRANSMISSION
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
          Want to work together?
        </h2>

        <p className="mt-2 text-white/70 leading-relaxed max-w-3xl">
          Let’s connect and build something amazing. I’m open to internships,
          freelance projects, and full-time opportunities.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:vaibhavchaurasiya50@gmail.com"
            className="button-primary flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-medium"
          >
            <RiMailSendLine className="text-lg" />
            Email Me
          </a>

          <a
            href="https://wa.me/918726735025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            <RiWhatsappLine className="text-lg" />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/vaibhav-chaurasiya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition"
          >
            <RiLinkedinFill className="text-lg" />
            LinkedIn
          </a>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Response time: usually within 24 hours ⚡
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
