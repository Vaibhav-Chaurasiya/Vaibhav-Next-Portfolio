"use client";

import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-4 sm:px-6 py-3 shadow-lg shadow-black/20">
            {/* Left */}
            <a href="#home" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Vaibhav Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-sm sm:text-base font-semibold text-white">
                  Vaibhav Chaurasiya
                </p>
                <p className="text-xs text-white/55 tracking-wide">
                  Full Stack Developer
                </p>
              </div>
            </a>

            {/* Center */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <a
                href="#about"
                className="px-3 py-1 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                Journey
              </a>
              <a
                href="#skills"
                className="px-3 py-1 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="px-3 py-1 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-3 py-1 rounded-full text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
              >
                Contact
              </a>
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              {Socials.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                  aria-label={social.name}
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="opacity-90"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
