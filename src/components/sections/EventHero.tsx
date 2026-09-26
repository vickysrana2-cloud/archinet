'use client';

import React, { useState } from 'react';
import { EVENT_DATA } from '../../data';
import { useCountdown } from '../../hooks/useCountdown';
import { ScrollReveal, RevealItem, RevealGroup } from '../animations/ScrollReveal';
import { fadeLeft, fadeRight, fadeUp, imageReveal, cardReveal } from '../animations/motionVariants';

const EVENT_VIDEOS = [
  {
    id: 'video-1',
    videoId: 'NSAOrGb9orM',
    label: 'VIDEO 01',
    title: 'ArchiNet 14th Edition Highlight Reel 1',
  },
  {
    id: 'video-2',
    videoId: '9iDXWx7GtZQ',
    label: 'VIDEO 02',
    title: 'ArchiNet 14th Edition Highlight Reel 2',
  },
];

export default function EventHero() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATA.targetDateISO);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const currentVid = EVENT_VIDEOS[activeVideoIndex];
  const iframeSrc = `https://www.youtube.com/embed/${currentVid.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentVid.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1`;

  return (
    <section 
      id="edition-14" 
      className="relative w-full bg-[#050505] text-[#f4f0e8] overflow-hidden border-b border-white/10 scroll-mt-16"
    >
      {/* Target anchor for #14th-edition as well */}
      <div id="14th-edition" className="absolute top-0 left-0" />
      <div className="w-full min-h-[620px] lg:min-h-[700px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* =========================================================
            LEFT COLUMN: FULL-PANEL COVER AUTOPLAYING YOUTUBE VIDEO
        ========================================================= */}
        <ScrollReveal 
          variants={imageReveal}
          className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full w-full overflow-hidden bg-black flex flex-col justify-end p-4 sm:p-6"
        >
          {/* Cover-Fit Autoplay YouTube iFrame (Hides controls & channel info) */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <iframe
              key={currentVid.videoId}
              src={iframeSrc}
              title={currentVid.title}
              className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none object-cover"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Floating Video Switcher Bar at Bottom */}
          <div className="relative z-20 flex items-center justify-start gap-2 bg-[#050505]/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10 w-fit max-w-full shadow-2xl">
            <span className="text-[10px] font-mono tracking-widest text-[#dcb45e] uppercase px-1 hidden sm:inline">
              VIDEOS:
            </span>
            {EVENT_VIDEOS.map((vid, idx) => (
              <button
                key={vid.id}
                type="button"
                onClick={() => setActiveVideoIndex(idx)}
                className={`px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-lg border transition-all duration-300 ${
                  activeVideoIndex === idx
                    ? 'border-[#dcb45e] bg-[#dcb45e] text-black font-bold shadow-md'
                    : 'border-white/20 bg-black/60 text-white/80 hover:border-white/50 hover:text-white'
                }`}
              >
                {vid.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* =========================================================
            RIGHT COLUMN: EVENT CONTENT, COUNTDOWN & CTAs
        ========================================================= */}
        <div className="lg:col-span-6 relative flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 bg-[#050505]">
          
          {/* Giant Faint "14" Watermark in Background */}
          <span 
            className="absolute right-4 bottom-2 sm:bottom-4 font-serif text-[240px] sm:text-[340px] font-extrabold text-white/[0.03] select-none pointer-events-none leading-none z-0"
            aria-hidden="true"
          >
            14
          </span>

          <ScrollReveal 
            staggerChildren={0.08}
            className="relative z-10 flex flex-col gap-7 max-w-xl"
          >
            
            {/* Eyebrow */}
            <RevealItem variants={fadeRight}>
              <span className="text-xs font-mono tracking-[0.35em] text-[#dcb45e] font-medium uppercase">
                {EVENT_DATA.eyebrow || 'THE REFINED CHAPTER'}
              </span>
            </RevealItem>

            {/* Main Title */}
            <RevealItem variants={fadeRight}>
              <h2 className="font-serif text-5xl sm:text-7xl font-normal text-[#f4f0e8] tracking-tight leading-none">
                14th Edition
              </h2>
            </RevealItem>

            {/* Event Meta Line */}
            <RevealItem variants={fadeRight}>
              <p className="text-[11px] sm:text-xs font-mono text-[#dcb45e] tracking-[0.18em] uppercase leading-relaxed">
                20 FEBRUARY 2027 <span className="mx-2 text-[#dcb45e]/60">•</span> THE ST. REGIS, MUMBAI <span className="mx-2 text-[#dcb45e]/60">•</span> BY INVITATION ONLY
              </p>
            </RevealItem>

            {/* Circular Countdown Timers */}
            <RevealGroup staggerChildren={0.08} className="grid grid-cols-4 gap-3 sm:gap-5 py-4">
              
              {/* DAYS */}
              <RevealItem variants={cardReveal} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  DAYS
                </span>
              </RevealItem>

              {/* HRS */}
              <RevealItem variants={cardReveal} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  HRS
                </span>
              </RevealItem>

              {/* MINS */}
              <RevealItem variants={cardReveal} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  MINS
                </span>
              </RevealItem>

              {/* SECS */}
              <RevealItem variants={cardReveal} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-[#dcb45e]/35 bg-black/40 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:border-[#dcb45e]">
                <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-none">
                  {String(seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-[#dcb45e] tracking-widest uppercase mt-1">
                  SECS
                </span>
              </RevealItem>

            </RevealGroup>

            {/* Action Buttons */}
            <RevealItem variants={fadeRight}>
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
            </RevealItem>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}


