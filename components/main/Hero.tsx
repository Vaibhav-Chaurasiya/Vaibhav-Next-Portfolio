import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* ✅ Background Video (soft so stars visible) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.55] saturate-150"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* ✅ Soft aurora tint (NOT DARK overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(3,0,20,0.10)]" />

      {/* ✅ Smooth merge to next section (no gap line) */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
