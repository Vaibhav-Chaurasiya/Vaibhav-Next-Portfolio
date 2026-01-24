"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100vh] flex items-center overflow-hidden"
      aria-label="Hero Section"
    >
      {/* ✅ Blackhole video layer (soft so stars + global bg still visible) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.40] saturate-150"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* ✅ Ultra soft blend overlay (NOT dark, only smooth readability) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none" />

      {/* ✅ Smooth bottom fade to avoid any cut/gap */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

      {/* ✅ Content */}
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
