"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  RiExternalLinkLine,
  RiMailLine,
  RiCodeSSlashLine,
  RiSparklingFill,
} from "react-icons/ri";

const HeroContent: React.FC = () => {
  const [inView, setInView] = useState(false);

  // Typing effect states
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);

  // 3D Tilt Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [4, -4]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-4, 4]), {
    stiffness: 140,
    damping: 18,
  });

  // Professional phrases (your profile)
  const phrases = useMemo(
    () => [
      "Full Stack Web Developer",
      "Next.js + MERN Specialist",
      "SEO-Optimized Websites",
      "AI & GenAI Integrations",
      "Clean UI/UX + Scalable Code",
    ],
    []
  );

  // Intersection Observer
  useEffect(() => {
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!inView) return;

    const current = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = current.slice(0, typedText.length + 1);
        setTypedText(nextText);

        if (nextText === current) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const nextText = current.slice(0, typedText.length - 1);
        setTypedText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, phraseIndex, isDeleting, phrases, inView]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-12 pt-28 md:pt-36 pb-14 md:pb-20 min-h-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-8 w-72 h-72 bg-[var(--primary)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 border border-[var(--primary)]/20 backdrop-blur-xl">
            <RiSparklingFill className="text-[var(--primary)]" />
            <span className="text-xs font-semibold tracking-wider uppercase t-muted">
              Vaibhav Chaurasiya • Full Stack Developer • Next.js • MERN • SEO • GenAI
            </span>
          </div>
        </motion.div>

        {/* Name + 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mb-7"
          style={{ perspective: "1000px" }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.08] t-text"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <span className="block mb-2">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] drop-shadow-[0_18px_55px_rgba(34,211,238,0.22)]">
                Vaibhav
              </span>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
              Chaurasiya
            </span>
          </motion.h1>
        </motion.div>

        {/* Typing Role */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.35 }}
          className="mb-8"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-bold t-text">
            <span className="t-muted font-medium">I build </span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] blur-xl opacity-40" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                {typedText}
                <span className="inline-block w-[10px] ml-1 animate-pulse align-middle text-[var(--primary)]">
                  |
                </span>
              </span>
            </span>
          </div>

          <p className="mt-3 text-base sm:text-lg t-muted">
            Fast, clean &amp; scalable products with modern UI, animations and SEO-ready structure.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto t-muted mb-10"
        >
          I create production-grade websites and web apps using Next.js, React and MERN stack.
          My focus is performance, clean architecture, responsive UI/UX, SEO optimization, and
          AI-powered features that improve real-world user experience.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: "⚡", text: "Performance First" },
            { icon: "🔍", text: "SEO Ready" },
            { icon: "🎨", text: "Premium UI/UX" },
            { icon: "🤖", text: "AI Integrations" },
            { icon: "📱", text: "Fully Responsive" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2.5 rounded-full border t-border t-card backdrop-blur-md text-sm font-semibold t-text flex items-center gap-2"
            >
              <span className="text-lg">{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.05 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {[
            { num: "20+", label: "Projects Delivered" },
            { num: "3+", label: "Years Experience" },
            { num: "100%", label: "Quality Focus" },
            { num: "24/7", label: "Learning Mode" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl border t-border t-card backdrop-blur-md"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-1">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm t-muted font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border t-border t-card backdrop-blur-md text-sm t-muted">
            <RiCodeSSlashLine className="text-[var(--primary)]" />
            Web Developer Intern @ Code Eternity (Noida)
          </div>
          <p className="text-sm t-muted">
            Built AI products: Interview Coach + Legal Assistant (LLM-powered)
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.35 }}
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
              View Projects
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl border-2 t-border t-card backdrop-blur-md font-bold t-text hover:border-[var(--primary)] transition-all flex items-center gap-2"
          >
            <RiMailLine className="text-xl" />
            Let&apos;s Connect
          </motion.a>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.55 }}
          className="mt-8 text-xs t-muted"
        >
          Available for internships • freelance projects • full-time opportunities
        </motion.p>
      </div>
    </section>
  );
};

export default HeroContent;
