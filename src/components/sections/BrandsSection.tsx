'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, RevealItem } from '../animations/ScrollReveal';
import { fadeUp, scaleIn } from '../animations/motionVariants';

const ROW_1_BRANDS = [
  'GREATWHITE',
  'TOTO',
  'SIEMENS',
  'HYBEC',
  'O GENERAL',
  'HUNTERDOUGLAS',
  'NEXION',
  'KUCHE7',
  'COLOUR COATS',
  'JSW AVANTE',
  'LEGRAND',
  'JAIPUR RUGS'
];

const ROW_2_BRANDS = [
  'REDINGTON SOLAR',
  'PLATO',
  'SCUBA',
  'ABRADO',
  'CHANGI',
  'THE STONE CASA',
  'JAIPUR RUGS',
  'LEGRAND',
  'POLIFORM',
  'MINOTTI',
  'B&B ITALIA',
  'FLOS'
];

export default function BrandsSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#050505] border-b border-white/10 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Main Section Header */}
        <ScrollReveal staggerChildren={0.08} className="text-center max-w-3xl mb-14 sm:mb-16">
          
          <RevealItem variants={fadeUp}>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#dcb45e] tracking-tight leading-[1.06] uppercase">
              THE COMPANY<br />WE KEEP.
            </h2>
          </RevealItem>

          {/* Golden Line Divider with Star Icon */}
          <RevealItem variants={scaleIn}>
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="w-16 sm:w-24 h-px bg-[#dcb45e]/30" />
              <span className="text-xs text-[#dcb45e] select-none">★</span>
              <div className="w-16 sm:w-24 h-px bg-[#dcb45e]/30" />
            </div>
          </RevealItem>

          {/* Gold Italic Subtitle 1 */}
          <RevealItem variants={fadeUp}>
            <p className="font-serif editorial-italic text-lg sm:text-2xl text-[#dcb45e] font-normal tracking-wide leading-relaxed">
              A legacy built with brands that shape the spaces we live in.
            </p>
          </RevealItem>

          {/* Small Subtitle 2 */}
          <RevealItem variants={fadeUp}>
            <p className="text-[11px] sm:text-xs font-mono text-[#a09e97] tracking-wider mt-3">
              A selection of brands that have partnered with Archinet™ across thirteen editions.
            </p>
          </RevealItem>

        </ScrollReveal>

      </div>

      {/* Dual Row Continuous Infinite Marquee Ticker */}
      <div className="w-full bg-[#050505] py-7 sm:py-9 border-y border-white/10 relative overflow-hidden flex flex-col gap-6 sm:gap-8">
        
        {/* Left & Right Gradient Fade Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 z-20 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

        {/* Row 1: Very Slow Leftward Infinite Marquee */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex shrink-0 items-center gap-8 sm:gap-11 pr-8 sm:pr-11"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 120,
            }}
          >
            {[...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, idx) => (
              <span
                key={`row1-${brand}-${idx}`}
                className="font-serif text-base sm:text-lg md:text-xl text-[#dcb45e]/80 hover:text-[#dcb45e] tracking-[0.24em] font-light uppercase transition-colors cursor-pointer select-none"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Very Slow Rightward Infinite Marquee */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <motion.div
            className="flex shrink-0 items-center gap-8 sm:gap-11 pr-8 sm:pr-11"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 130,
            }}
          >
            {[...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, idx) => (
              <span
                key={`row2-${brand}-${idx}`}
                className="font-serif text-base sm:text-lg md:text-xl text-[#dcb45e]/80 hover:text-[#dcb45e] tracking-[0.24em] font-light uppercase transition-colors cursor-pointer select-none"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
