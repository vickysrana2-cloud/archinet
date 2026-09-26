'use client';

import React, { useState } from 'react';
import { EDITIONS_DATA } from '../../data';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <section id="editions" className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#050505] border-b border-white/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Centered Section Header */}
        <ScrollReveal staggerChildren={0.08} className="text-center mb-16 max-w-2xl">
          <RevealItem variants={fadeUp}>
            <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal tracking-tight leading-tight">
              Built <span className="editorial-italic text-[#dcb45e]">Over Time.</span>
            </h2>
          </RevealItem>

          <RevealItem variants={fadeUp}>
            <p className="text-xs font-mono text-[#dcb45e] tracking-[0.3em] uppercase mt-3 font-medium">
              FROM ONE IDEA TO A CURATED DESIGN NETWORK
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Carousel Container with Far-Left & Far-Right Arrows */}
        <ScrollReveal variants={scaleIn} className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[480px]">
          
          {/* Left Floating Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 lg:left-8 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#dcb45e]/40 hover:border-[#dcb45e] bg-black/40 backdrop-blur-sm text-[#dcb45e] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous edition"
          >
            <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* Right Floating Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-4 lg:right-8 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#dcb45e]/40 hover:border-[#dcb45e] bg-black/40 backdrop-blur-sm text-[#dcb45e] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next edition"
          >
            <ChevronRight className="w-6 h-6 stroke-[1.5]" />
          </button>

          {/* Cards Coverflow Track */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl px-12 sm:px-16 overflow-hidden py-6">
            
            {[prev, active, next].map((itemIndex, positionIdx) => {
              const isCenter = positionIdx === 1;
              const edition = EDITIONS_DATA[itemIndex];

              return (
                <motion.div
                  key={edition.id}
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.45, 
                    scale: isCenter ? 1.04 : 0.88,
                    filter: isCenter ? 'blur(0px)' : 'blur(0.5px)'
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 24,
                    opacity: { duration: 0.5 }
                  }}
                  onClick={() => {
                    if (!isCenter) {
                      setActiveIndex(itemIndex);
                    }
                  }}
                  className={[
                    "shrink-0 rounded-2xl bg-[#0a0a0a] p-3.5 sm:p-4 cursor-pointer select-none relative overflow-hidden",
                    isCenter 
                      ? "w-[310px] sm:w-[380px] md:w-[430px] border-2 border-[#dcb45e] shadow-[0_0_35px_rgba(220,180,94,0.18)] z-20" 
                      : "hidden sm:block sm:w-[280px] md:w-[320px] border border-white/10 z-10 hover:opacity-75"
                  ].join(" ")}
                >
                  {/* Card Image Container with Smooth Motion Transition */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black/60">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={edition.image}
                        src={edition.image} 
                        alt={edition.venue}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Bottom Left Location Pill */}
                    <motion.div 
                      key={`city-${edition.id}`}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#dcb45e]/60 text-[#dcb45e] text-[10px] font-mono font-semibold tracking-wider"
                    >
                      <MapPin className="w-3 h-3 text-[#dcb45e]" />
                      <span>{edition.city}</span>
                    </motion.div>
                  </div>

                  {/* Card Content Below Image */}
                  <div className="mt-4 px-1 pb-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`info-${edition.id}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      >
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
                          {edition.venue}
                        </h3>
                        
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-xs font-mono">
                          <span className="text-[#a09e97]">
                            — {edition.city.charAt(0) + edition.city.slice(1).toLowerCase()}, India
                          </span>
                          <span className="text-[#dcb45e] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {edition.date}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </ScrollReveal>

        {/* Bottom Pagination Capsular Dots */}
        <ScrollReveal variants={fadeUp} className="flex items-center justify-center gap-2 mt-10">
          {EDITIONS_DATA.map((edition, idx) => (
            <button
              key={edition.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx 
                  ? 'w-8 bg-[#dcb45e]' 
                  : 'w-1.5 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to ${edition.venue}`}
            />
          ))}
        </ScrollReveal>

      </div>

    </section>
  );
}

