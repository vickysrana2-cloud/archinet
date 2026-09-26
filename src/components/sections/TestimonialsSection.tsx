'use client';

import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, RevealItem } from '../animations/ScrollReveal';
import { fadeRight, imageReveal } from '../animations/motionVariants';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardStep, setCardStep] = useState(384);

  const total = TESTIMONIALS_DATA.length;

  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth >= 1280) {
        setCardStep(404); // 380px card + 24px gap
      } else {
        setCardStep(364); // 340px card + 24px gap
      }
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  // Append first item to the end for seamless wrap rendering on desktop
  const extendedDesktopData = [...TESTIMONIALS_DATA, TESTIMONIALS_DATA[0]];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#050505] text-[#f4f0e8]"
    >
      <div className="grid min-h-[720px] w-full grid-cols-1 lg:grid-cols-2">

        {/* =========================================================
            LEFT — 50% CINEMATIC MONOCHROME IMAGE
        ========================================================= */}
        <ScrollReveal
          variants={imageReveal}
          className="
            relative
            min-h-[360px]
            w-full
            overflow-hidden
            lg:min-h-[720px]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/images/audience-hero.jpg')",
              filter: 'grayscale(100%) contrast(120%) brightness(36%)',
            }}
          />

          {/* Desktop gradient fade to right background */}
          <div
            className="
              absolute
              inset-0
              hidden
              bg-gradient-to-r
              from-transparent
              via-black/45
              to-[#050505]
              lg:block
            "
          />

          {/* Mobile gradient fade to bottom background */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050505]
              via-transparent
              to-transparent
              lg:hidden
            "
          />
        </ScrollReveal>

        {/* =========================================================
            RIGHT — 50% EDITORIAL CONTENT AREA
        ========================================================= */}
        <ScrollReveal
          staggerChildren={0.1}
          className="
            relative
            flex
            min-w-0
            flex-col
            justify-center
            overflow-hidden
            bg-[#050505]
            px-6
            py-12
            sm:px-8
            lg:px-8
            xl:px-12
            2xl:px-16
          "
        >

          {/* =====================================================
              HEADING — EXACTLY 2 LINES MATCHING SCREENSHOT
          ===================================================== */}
          <RevealItem
            variants={fadeRight}
            className="
              relative
              z-30
              mb-8
              font-serif
              text-[36px]
              sm:text-[46px]
              lg:text-[52px]
              xl:text-[60px]
              font-normal
              uppercase
              leading-[0.96]
              tracking-tight
              text-white
              text-left
              max-w-[720px]
            "
          >
            WHAT OUR ATTENDEES
            <br />
            SAY
          </RevealItem>

          {/* =====================================================
              DESKTOP VIEW (≥ 1024px): 1 ACTIVE CARD + 1 HALF VISIBLE CUT-OFF CARD
          ===================================================== */}
          <div className="hidden lg:block w-full overflow-hidden">
            <div className="relative w-full">
              <motion.div
                className="flex gap-6 w-max"
                animate={{ x: -activeIndex * cardStep }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {extendedDesktopData.map((item, index) => {
                  const isRealIndex = index % total;
                  const isActive = activeIndex === isRealIndex && index === activeIndex;
                  const isNext = index === activeIndex + 1;

                  return (
                    <div
                      key={`desktop-card-${item.id}-${index}`}
                      onClick={() => {
                        if (!isActive) goToSlide(isRealIndex);
                      }}
                      className={`
                        relative
                        flex
                        flex-col
                        justify-between
                        bg-[#080808]
                        p-6
                        pt-7
                        w-[340px]
                        xl:w-[380px]
                        h-[385px]
                        xl:h-[390px]
                        shrink-0
                        transition-all
                        duration-300
                        cursor-pointer
                        ${
                          isActive
                            ? 'border border-[#dcb45e] shadow-[0_0_35px_rgba(220,180,94,0.15)] opacity-100 z-20 scale-100'
                            : 'border border-[#dcb45e]/40 opacity-65 hover:opacity-85 z-10 scale-[0.98]'
                        }
                      `}
                    >
                      {/* Gold Corner Accent (Attached Top-Left) */}
                      <div className="absolute top-0 left-0 w-8 h-8 bg-[#dcb45e] flex items-center justify-center font-serif text-lg font-bold text-[#050505]">
                        “
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-1 flex-col pt-3">
                        {/* Centered Stars */}
                        <div className="mb-4 flex items-center justify-center gap-1.5 text-xl xl:text-2xl text-[#dcb45e]">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>

                        {/* Centered Quote */}
                        <div className="flex flex-1 items-center justify-center px-1">
                          <p className="text-center font-sans text-xs sm:text-[13px] xl:text-[14px] font-normal leading-[1.65] text-[#e5e2db] max-w-[280px] xl:max-w-[310px]">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* Author Area */}
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-3.5 text-left">
                          <img
                            src={item.avatar}
                            alt={item.author}
                            className="h-11 w-11 shrink-0 rounded-full border border-[#dcb45e]/40 object-cover"
                          />
                          <div className="min-w-0">
                            <h4 className="truncate font-serif text-xs xl:text-sm font-bold uppercase tracking-wide text-white">
                              {item.author}
                            </h4>
                            <p className="mt-0.5 truncate font-mono text-[9px] xl:text-[10px] uppercase tracking-[0.14em] text-[#dcb45e]">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Desktop Pagination Controls */}
            <div className="mt-8 flex items-center justify-start gap-2.5">
              {TESTIMONIALS_DATA.map((item, index) => (
                <button
                  key={`dot-desktop-${item.id}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? 'w-7 bg-[#dcb45e]'
                      : 'w-2 bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* =====================================================
              MOBILE / TABLET VIEW (< 1024px): DEDICATED CAROUSEL
          ===================================================== */}
          <div className="block lg:hidden w-full relative">
            <div className="relative h-[380px] w-full overflow-hidden">
              {TESTIMONIALS_DATA.map((item, index) => {
                const offset = getOffset(index);
                const isActive = offset === 0;
                const isPrevious = offset === -1;
                const isNext = offset === 1;

                if (!isActive && !isPrevious && !isNext) return null;

                let xPosition = '0%';
                if (offset === -1) xPosition = '-105%';
                if (offset === 1) xPosition = '105%';

                return (
                  <motion.article
                    key={`mobile-${item.id}`}
                    initial={false}
                    animate={{
                      x: xPosition,
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.35,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => {
                      if (isPrevious) setActiveIndex((prev) => (prev - 1 + total) % total);
                      if (isNext) setActiveIndex((prev) => (prev + 1) % total);
                    }}
                    className={`
                      absolute
                      top-0
                      left-0
                      flex
                      h-full
                      w-full
                      flex-col
                      justify-between
                      bg-[#080808]
                      p-6
                      pt-7
                      ${
                        isActive
                          ? 'z-20 border border-[#dcb45e] shadow-[0_0_35px_rgba(220,180,94,0.15)]'
                          : 'z-10 border border-white/10'
                      }
                    `}
                  >
                    <div className="absolute top-0 left-0 flex h-7 w-7 items-center justify-center bg-[#dcb45e] font-serif text-lg font-bold text-[#050505]">
                      “
                    </div>

                    <div className="flex flex-1 flex-col pt-3">
                      <div className="mb-4 flex items-center justify-start gap-1.5 text-lg text-[#dcb45e]">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>

                      <div className="flex flex-1 items-center justify-start py-2">
                        <p className="w-full text-left font-sans text-[13px] font-normal leading-[1.65] text-[#e5e2db]">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-3.5 text-left">
                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="h-12 w-12 shrink-0 rounded-full border border-[#dcb45e]/40 object-cover"
                        />
                        <div className="min-w-0">
                          <h4 className="truncate font-serif text-xs font-bold uppercase tracking-wide text-white">
                            {item.author}
                          </h4>
                          <p className="mt-0.5 truncate font-mono text-[9px] uppercase tracking-[0.14em] text-[#dcb45e]">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Mobile Pagination */}
            <div className="mt-6 flex items-center justify-start gap-2.5">
              {TESTIMONIALS_DATA.map((item, index) => (
                <button
                  key={`dot-mobile-${item.id}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index ? 'w-7 bg-[#dcb45e]' : 'w-2 bg-white/20 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}