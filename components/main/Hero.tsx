"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* ✅ Soft blackhole video layer (blended) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
          absolute inset-0 w-full h-full object-cover
          opacity-35 blur-[1px]
          mix-blend-screen
          pointer-events-none
        "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* ✅ Gradient overlay so it merges with page background */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-b
          from-black/20 via-black/30 to-black/70
        "
      />

      {/* ✅ Hero content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
