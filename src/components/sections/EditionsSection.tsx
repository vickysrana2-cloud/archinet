'use client';

import React, { useState } from 'react';
import { EDITIONS_DATA } from '../../data';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, RevealItem } from '../animations/ScrollReveal';
import { fadeUp, scaleIn } from '../animations/motionVariants';

export default function EditionsSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to ITC Kohinoor (index 1)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? EDITIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === EDITIONS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getIndices = () => {
    const len = EDITIONS_DATA.length;
    const prev = (activeIndex - 1 + len) % len;
    const next = (activeIndex + 1) % len;
    return { prev, active: activeIndex, next };
  };

  const { prev, active, next } = getIndices();

  // Handle drag / swipe gesture threshold
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  return (
    <section id="editions" className="w-full bg-[#050505] text-[#f4f2ed] border-t border-white/[0.06] overflow-hidden">
      
      {/* 1. Compact Section Header / Navigation Bar (~70-75px height) */}
      <div className="w-full h-[72px] px-6 sm:px-10 lg:px-12 border-b border-white/[0.06] flex items-center justify-between">
        {/* Left side logo */}
        <div className="flex items-center gap-1.5">
          <span className="font-sans text-lg sm:text-xl font-bold tracking-[0.2em] text-[#f4f2ed] uppercase">
            ARCHINET
          </span>
          <span className="text-[#dcb45e] text-xs font-serif leading-none font-light">°</span>
        </div>

        {/* Right side 2x2 grid icon */}
        <button 
          type="button"
          aria-label="Grid Menu"
          className="grid grid-cols-2 gap-1 p-2 hover:opacity-80 transition-opacity focus:outline-none"
        >
          <span className="w-1.5 h-1.5 bg-[#f4f2ed]/90 rounded-[0.5px]" />
          <span className="w-1.5 h-1.5 bg-[#f4f2ed]/90 rounded-[0.5px]" />
          <span className="w-1.5 h-1.5 bg-[#f4f2ed]/90 rounded-[0.5px]" />
          <span className="w-1.5 h-1.5 bg-[#f4f2ed]/90 rounded-[0.5px]" />
        </button>
      </div>

      {/* Main Content Body */}
      <div className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 2. Centered Hero Typography */}
        <ScrollReveal staggerChildren={0.08} className="text-center mb-10 sm:mb-14 max-w-3xl">
          <RevealItem variants={fadeUp}>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#f4f2ed] font-normal tracking-tight leading-tight">
              Built <span className="editorial-italic italic text-[#dcb45e] font-serif">Over Time.</span>
            </h2>
          </RevealItem>

          <RevealItem variants={fadeUp}>
            <p className="text-[11px] sm:text-xs font-sans text-[#a09e97] tracking-[0.3em] uppercase mt-3 sm:mt-4 font-medium max-w-xs sm:max-w-none mx-auto leading-relaxed">
              FROM ONE IDEA TO A CURATED DESIGN NETWORK
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* 3. Coverflow Carousel */}
        <ScrollReveal variants={scaleIn} className="relative w-full flex flex-col items-center overflow-x-hidden">
          
          <div className="relative w-full flex items-center justify-center py-6 sm:py-8 lg:py-10 min-h-[480px] sm:min-h-[600px] lg:min-h-[460px]">
            
            {/* Left Circular Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1 sm:left-4 lg:left-10 xl:left-16 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full border border-[#dcb45e]/60 hover:border-[#dcb45e] bg-[#090909]/90 text-[#dcb45e] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Previous edition"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
            </button>

            {/* Right Circular Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1 sm:right-4 lg:left-auto lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-13 sm:h-13 rounded-full border border-[#dcb45e]/60 hover:border-[#dcb45e] bg-[#090909]/90 text-[#dcb45e] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              aria-label="Next edition"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
            </button>

            {/* Drag-enabled Cards Track with Desktop Overlap */}
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="flex items-center justify-center -space-x-12 sm:-space-x-20 lg:-space-x-16 xl:-space-x-20 w-full max-w-6xl lg:max-w-[1150px] xl:max-w-[1250px] px-0 sm:px-12"
            >
              {[prev, active, next].map((itemIndex, positionIdx) => {
                const isCenter = positionIdx === 1;
                const edition = EDITIONS_DATA[itemIndex];

                return (
                  <motion.div
                    key={edition.id}
                    layout
                    initial={false}
                    animate={{
                      opacity: isCenter ? 1 : 0.45,
                      scale: isCenter ? 1 : 0.92,
                      filter: isCenter ? 'brightness(1)' : 'brightness(0.75)',
                    }}
                    transition={{
                      layout: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                      scale: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                      filter: { duration: 0.55 }
                    }}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex(itemIndex);
                      }
                    }}
                    className={[
                      "shrink-0 cursor-pointer select-none rounded-[20px] overflow-hidden relative",
                      isCenter
                        ? "w-[74vw] max-w-[310px] sm:w-[490px] lg:w-[380px] xl:w-[390px] bg-[#080808] border border-[#dcb45e]/60 shadow-[0_0_40px_rgba(190,150,60,0.12)] p-3 sm:p-5 z-30 relative"
                        : "w-[70vw] max-w-[285px] sm:w-[460px] lg:w-[350px] xl:w-[360px] bg-[#0a0a0a] border border-white/10 p-3 sm:p-5 hover:opacity-75 z-10 relative"
                    ].join(" ")}
                  >
                    {/* Image Box (Landscape aspect ratio ~1.5 on desktop matching Screenshot 1) */}
                    <div className="relative w-full h-[190px] sm:h-[280px] lg:h-[250px] xl:h-[260px] rounded-xl overflow-hidden bg-black/60">
                      <img
                        src={edition.image}
                        alt={edition.venue}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 pointer-events-none"
                      />
                      
                      {/* Bottom-Left Floating Location Badge */}
                      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 bg-[#17140e]/95 border border-[#dcb45e]/50 text-[#dcb45e] rounded-full text-xs font-mono tracking-wider uppercase shadow-md">
                        <MapPin className="w-3 h-3 text-[#dcb45e]" />
                        <span>{edition.city}</span>
                      </div>
                    </div>

                    {/* Metadata Info Below Image */}
                    <div className="mt-4 px-1">
                      <h3 className="font-serif text-xl sm:text-2xl lg:text-2xl text-[#f4f2ed] font-medium tracking-tight truncate">
                        {edition.venue}
                      </h3>

                      <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-white/[0.08] text-xs sm:text-sm font-sans text-[#a09e97]">
                        <span className="truncate">
                          — {edition.city.charAt(0) + edition.city.slice(1).toLowerCase()}, India
                        </span>
                        <span className="text-[#dcb45e] font-mono text-xs flex items-center gap-1.5 shrink-0 ml-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {edition.date}
                        </span>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* 4. Pagination Capsule Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-10">
            {EDITIONS_DATA.map((edition, idx) => (
              <button
                key={edition.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-500 ${
                  activeIndex === idx
                    ? 'w-7 h-2 bg-[#dcb45e] rounded-full'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full'
                }`}
                aria-label={`Go to ${edition.venue}`}
              />
            ))}
          </div>

        </ScrollReveal>

      </div>

    </section>
  );
}


