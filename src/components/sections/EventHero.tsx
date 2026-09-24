'use client';

import React from 'react';
import { EVENT_DATA } from '../../data';
import { useCountdown } from '../../hooks/useCountdown';
import { motion } from 'framer-motion';

export default function EventHero() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATA.targetDateISO);

  return (
    <section 
      id="edition-14" 
      className="relative w-full bg-[#050505] text-[#f4f0e8] overflow-hidden border-b border-white/10 scroll-mt-16"
    >
      {/* Target anchor for #14th-edition as well */}
      <div id="14th-edition" className="absolute top-0 left-0" />
      <div className="w-full min-h-[620px] lg:min-h-[700px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Column: Full-Height Dark Monochrome Audience Photo */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative min-h-[350px] sm:min-h-[450px] lg:min-h-full w-full overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url('/images/audience-hero.jpg')`,
              filter: 'grayscale(100%) contrast(120%) brightness(48%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-[#050505] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent lg:hidden" />
        </motion.div>

        {/* Right Column: Event Content, Countdown Circles & CTAs */}
        <div className="lg:col-span-6 relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-[#050505]">
          
          {/* Giant Faint "14" Watermark in Background */}
          <span 
            className="absolute right-4 bottom-2 sm:bottom-4 font-serif text-[240px] sm:text-[340px] font-extrabold text-white/[0.03] select-none pointer-events-none leading-none z-0"
            aria-hidden="true"
          >
            14
          </span>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col gap-7 max-w-xl"
          >
            
            {/* Eyebrow */}
            <span className="text-xs font-mono tracking-[0.35em] text-[#dcb45e] font-medium uppercase">
              {EVENT_DATA.eyebrow || 'THE REFINED CHAPTER'}
            </span>

            {/* Main Title */}
            <h2 className="font-serif text-5xl sm:text-7xl font-normal text-[#f4f0e8] tracking-tight leading-none">
              14th Edition
            </h2>

            {/* Event Meta Line */}
            <p className="text-[11px] sm:text-xs font-mono text-[#dcb45e] tracking-[0.18em] uppercase leading-relaxed">
              20 FEBRUARY 2027 <span className="mx-2 text-[#dcb45e]/60">•</span> THE ST. REGIS, MUMBAI <span className="mx-2 text-[#dcb45e]/60">•</span> BY INVITATION ONLY
            </p>

            {/* Circular Countdown Timers */}
            <div className="grid grid-cols-4 gap-3 sm:gap-5 py-4">
              
              {/* DAYS */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  DAYS
                </span>
              </div>

              {/* HRS */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  HRS
                </span>
              </div>

              {/* MINS */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  MINS
                </span>
              </div>

              {/* SECS */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  SECS
                </span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-[#dfbd75] hover:bg-[#dcb45e] text-black text-xs font-mono font-bold tracking-[0.14em] uppercase transition-colors duration-300 text-center shadow-md"
              >
                REQUEST AN INVITATION
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#dcb45e]/60 hover:bg-[#dcb45e]/10 text-[#dcb45e] hover:text-white text-xs font-mono font-semibold tracking-[0.14em] uppercase transition-colors duration-300 text-center"
              >
                EXHIBIT WITH US
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
