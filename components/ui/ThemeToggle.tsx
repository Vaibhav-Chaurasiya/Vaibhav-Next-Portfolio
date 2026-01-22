"use client";

import React from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <span
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <RiMoonFill className="h-5 w-5 text-white/90" />
        </span>

        <span
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <RiSunFill className="h-5 w-5 text-white/90" />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
