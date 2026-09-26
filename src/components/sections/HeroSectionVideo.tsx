"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSectionVideo() {
  const scrollToNext = () => {
    const nextSection =
      document.querySelector("#about") ||
      document.querySelector("main > section:nth-child(2)");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative min-h-[100svh] w-full overflow-hidden bg-[#050505] text-[#f4f0e8] flex items-center justify-center"
      aria-label="Archinet featured architectural summit hero"
    >
      {/* =========================================================
          BACKGROUND MP4 VIDEO (assets/videos/hero_section_video.mp4)
      ========================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            filter: "brightness(92%) contrast(105%)",
          }}
        >
          <source src="/assets/videos/hero_section_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =========================================================
          LIGHT CINEMATIC OVERLAYS & VIGNETTE
      ========================================================== */}
      {/* Light subtle tint overlay for text legibility */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Soft vertical gradient overlay for header & footer blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#050505] pointer-events-none" />

      {/* =========================================================
          LEFT FEATURED INDICATOR (EDITORIAL SIDEBAR)
      ========================================================== */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute left-[4.5vw] top-1/2 z-20 hidden -translate-y-1/2 md:block pointer-events-none"
      >
        <div className="flex flex-col items-center gap-7">
          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              text-[10px]
              font-medium
              tracking-[0.42em]
              text-[#dcb45e]
              uppercase
            "
          >
            FEATURED
          </span>

          <div className="relative h-[145px] w-px bg-white/20">
            <div className="absolute left-1/2 top-0 h-[48px] w-px -translate-x-1/2 bg-[#dcb45e]" />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[#dcb45e] text-xs">
              ↓
            </span>
          </div>
        </div>
      </motion.div>

      {/* =========================================================
          MAIN HERO CONTENT
      ========================================================== */}
      <div className="relative z-20 flex min-h-[100svh] w-full max-w-[1280px] items-center justify-center px-6 pb-24 pt-24 text-center">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center">
          {/* Eyebrow / Tagline for Mobile & Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dcb45e]/30 bg-black/40 px-4 py-1.5 backdrop-blur-sm md:hidden"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#dcb45e] animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#dcb45e] uppercase">
              FEATURED
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="
              max-w-[1100px]
              font-serif
              text-[clamp(2.75rem,6.2vw,6.8rem)]
              font-normal
              leading-[0.93]
              tracking-[-0.04em]
              text-[#f4f0e8]
              drop-shadow-lg
            "
          >
            Where Visionaries Meet
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              mt-7
              max-w-[800px]
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.42em]
              text-[#f1eee7]/90
              sm:text-[11px]
            "
          >
            A CURATED PLATFORM FOR DESIGN &amp; ARCHITECTURE
          </motion.p>

          {/* Primary Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <Link
              href="#contact"
              className="
                group
                inline-flex
                h-[56px]
                min-w-[285px]
                items-center
                justify-center
                rounded-full
                border
                border-white/75
                bg-black/20
                px-8
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
                backdrop-blur-sm
                transition-all
                duration-500
                hover:border-[#dcb45e]
                hover:bg-[#dcb45e]
                hover:text-black
                hover:shadow-[0_0_25px_rgba(220,180,94,0.35)]
                focus:outline-none
                focus:ring-2
                focus:ring-[#dcb45e]
                focus:ring-offset-2
                focus:ring-offset-[#050505]
              "
            >
              REQUEST AN INVITATION
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL DOWN INDICATOR
      ========================================================== */}
      <motion.button
        type="button"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="
          absolute
          bottom-8
          left-1/2
          z-30
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/80
          transition-colors
          duration-300
          hover:text-[#dcb45e]
          focus:outline-none
        "
        aria-label="Scroll to next section"
      >
        <ArrowDown size={16} strokeWidth={1.5} className="animate-bounce text-[#dcb45e]" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
          Scroll Down
        </span>
      </motion.button>
    </section>
  );
}
