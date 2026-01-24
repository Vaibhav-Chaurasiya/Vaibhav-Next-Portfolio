"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { RiExternalLinkLine, RiMailLine, RiCodeSSlashLine, RiSparklingFill } from "react-icons/ri";

const HeroContent = () => {
  const [inView, setInView] = useState(false);
  const heroRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [2, -2]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-2, 2]), {
    stiffness: 150,
    damping: 20
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-12 pt-28 md:pt-36 pb-14 md:pb-20 min-h-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-[var(--primary)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 backdrop-blur-xl">
            <RiSparklingFill className="text-[var(--primary)]" />
            <span className="text-xs font-medium tracking-wider uppercase t-muted">
              Full Stack Engineer • Next.js • MERN • SEO • GenAI
            </span>
          </div>
        </motion.div>

        {/* Main Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8"
        >
          {/* Glow backdrop */}
          <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
            <div className="h-40 w-96 rounded-full bg-[var(--primary)]/20 blur-3xl" />
          </div>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] t-text"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <motion.span 
              className="block mb-2"
              style={{ rotateX, rotateY }}
            >
              <span className="inline-block">Hi, I'm </span>
              <span className="relative inline-block">
                {/* Multi-layer shadow effect */}
                <span
                  className="absolute left-0 top-0 translate-x-[3px] translate-y-[3px] opacity-30 blur-sm"
                  style={{ color: "rgba(34,211,238,0.4)" }}
                  aria-hidden="true"
                >
                  Vaibhav
                </span>
                <span
                  className="absolute left-0 top-0 translate-x-[5px] translate-y-[5px] opacity-20 blur-md"
                  style={{ color: "rgba(168,85,247,0.3)" }}
                  aria-hidden="true"
                >
                  Vaibhav
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] drop-shadow-[0_15px_50px_rgba(34,211,238,0.25)]">
                  Vaibhav
                </span>
              </span>
            </motion.span>

            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Chaurasiya
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold t-text mb-4">
            I build{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] blur-lg opacity-40" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                premium web products
              </span>
            </span>
          </h2>
          <p className="text-xl sm:text-2xl t-muted font-light">
            Fast, clean & scalable
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto t-muted mb-10"
        >
          I craft performance-first interfaces with modern motion, SEO-ready structure, 
          and production-grade architecture. Specialized in building clean UI systems, 
          reusable components, and seamless user experiences.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: "⚡", text: "Performance First" },
            { icon: "🎨", text: "Modern UI/UX" },
            { icon: "🤖", text: "AI Integration" },
            { icon: "📱", text: "Responsive Design" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 rounded-full border t-border t-card backdrop-blur-md text-sm font-medium t-text flex items-center gap-2"
            >
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {[
            { num: "15+", label: "Projects Built" },
            { num: "3+", label: "Years Experience" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "∞", label: "Lines of Code" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl border t-border t-card backdrop-blur-md"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-1">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm t-muted font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border t-border t-card backdrop-blur-md text-sm t-muted">
            <RiCodeSSlashLine className="text-[var(--primary)]" />
            Web Developer Intern @ Code Eternity (Noida)
          </div>
          <p className="text-sm t-muted">
            Built LLM-powered products: Interview Coach + Legal Assistant
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <span className="relative flex items-center gap-2">
              <RiExternalLinkLine className="text-xl" />
              View My Work
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border-2 t-border t-card backdrop-blur-md font-bold t-text hover:border-[var(--primary)] transition-all flex items-center gap-2"
          >
            <RiMailLine className="text-xl" />
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-8 text-xs t-muted"
        >
          Available for internships • freelance projects • full-time opportunities
        </motion.p>
      </div>
    </section>
  );
};

export default HeroContent;