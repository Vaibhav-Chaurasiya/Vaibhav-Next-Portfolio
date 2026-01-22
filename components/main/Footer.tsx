"use client";

import React from "react";
import { RiGithubFill, RiLinkedinFill, RiMailLine, RiPhoneLine, RiMapPin2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="mt-10 w-full px-4 sm:px-8 pb-10">
      <div className="mx-auto w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Brand */}
          <div className="flex-1">
            <p className="text-xs tracking-[0.25em] text-white/55">
              AURORA MISSION — FINAL SCENE
            </p>

            <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
              Vaibhav Chaurasiya
            </h3>

            <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-md">
              Full Stack Developer focused on modern web apps using MERN + Next.js
              with clean UI, smooth UX and performance-first mindset.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Next.js
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                MERN
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                UI Motion
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                GenAI Projects
              </span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h4 className="text-white font-semibold">Contact</h4>

            <div className="mt-3 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <RiMapPin2Line className="text-lg text-white/80" />
                Noida, Uttar Pradesh (India)
              </p>

              <a
                href="mailto:vaibhavchaurasiya50@gmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <RiMailLine className="text-lg text-white/80" />
                vaibhavchaurasiya50@gmail.com
              </a>

              <a
                href="tel:+918726735025"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <RiPhoneLine className="text-lg text-white/80" />
                +91 87267 35025
              </a>
            </div>

            {/* Socials */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/Vaibhav-Chaurasiya"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <RiGithubFill className="text-xl text-white/90" />
              </a>

              <a
                href="https://www.linkedin.com/in/vaibhav-chaurasiya/"
                target="_blank"
                className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <RiLinkedinFill className="text-xl text-white/90" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1">
            <h4 className="text-white font-semibold">Quick Links</h4>

            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              <a href="#home" className="hover:text-white transition">
                Scene 01 — Home
              </a>
              <a href="#about" className="hover:text-white transition">
                Scene 03 — Journey
              </a>
              <a href="#skills" className="hover:text-white transition">
                Scene 04 — Skills
              </a>
              <a href="#projects" className="hover:text-white transition">
                Scene 05 — Projects
              </a>
              <a href="#contact" className="hover:text-white transition">
                Scene 06 — Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Vaibhav Chaurasiya. All rights reserved.
          </p>

          <p className="text-xs text-white/55">
            Built with Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
