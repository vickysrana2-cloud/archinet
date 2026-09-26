'use client';

import React, { useState, useEffect } from 'react';
import { LEADERS_DATA } from '../../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal, RevealItem, RevealGroup } from '../animations/ScrollReveal';
import { fadeLeft, fadeRight, cardReveal } from '../animations/motionVariants';
import { motion, AnimatePresence } from 'framer-motion';

export default function LeadersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds in a loop on mobile view
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % LEADERS_DATA.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? LEADERS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === LEADERS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getIndices = () => {
    const len = LEADERS_DATA.length;
    const prev = (activeIndex - 1 + len) % len;
    const next = (activeIndex + 1) % len;
    return { prev, active: activeIndex, next };
  };

  const { prev, active, next } = getIndices();

  return (
    <section id="leaders" className="w-full py-24 lg:py-36 px-6 lg:px-12 bg-[#050505] border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal staggerChildren={0.1} className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6 text-center lg:text-left">
          <RevealItem variants={fadeLeft}>
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[var(--accent-gold)] uppercase block mb-3">
                KEYNOTE VISIONARIES
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-white font-light tracking-tight">
                Our Industry <span className="editorial-italic">Leaders.</span>
              </h2>
            </div>
          </RevealItem>

          <RevealItem variants={fadeRight}>
            <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider max-w-xs uppercase mx-auto lg:mx-0">
              DISTINGUISHED PRINCIPALS & CREATIVE DIRECTORS SHAPING GLOBAL SKYLINE DESIGN
            </p>
          </RevealItem>
        </ScrollReveal>

        {/* Mobile View: Smooth Coverflow Carousel with Left & Right Side Cards Peek & Arrows */}
        <div className="block lg:hidden w-full overflow-hidden relative">
          <div className="relative w-full flex items-center justify-center h-[460px] py-2">
            
            {/* Left Floating Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-1.5 top-[43%] -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-[#dcb45e]/50 hover:border-[#dcb45e] bg-black/80 backdrop-blur-md text-[#dcb45e] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-xl"
              aria-label="Previous leader"
            >
              <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Right Floating Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-1.5 top-[43%] -translate-y-1/2 z-30 w-9 h-9 rounded-full border border-[#dcb45e]/50 hover:border-[#dcb45e] bg-black/80 backdrop-blur-md text-[#dcb45e] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-xl"
              aria-label="Next leader"
            >
              <ChevronRight className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Perfect Dead-Centered Cards Container */}
            <div className="relative w-full h-full overflow-hidden">
              {LEADERS_DATA.map((leader, idx) => {
                let offset = idx - activeIndex;
                if (offset > LEADERS_DATA.length / 2) offset -= LEADERS_DATA.length;
                if (offset < -LEADERS_DATA.length / 2) offset += LEADERS_DATA.length;

                const isActive = offset === 0;

                return (
                  <motion.div
                    key={leader.id}
                    initial={false}
                    animate={{
                      x: `calc(-50% + ${offset * 270}px)`,
                      scale: isActive ? 1 : 0.84,
                      opacity: isActive ? 1 : 0.35,
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setActiveIndex(idx)}
                    className={`
                      absolute
                      top-1
                      left-1/2
                      w-[250px]
                      sm:w-[270px]
                      rounded-2xl
                      bg-[#0a0a0a]
                      p-3.5
                      cursor-pointer
                      select-none
                      overflow-hidden
                      ${
                        isActive
                          ? 'border-2 border-[#dcb45e] shadow-[0_0_35px_rgba(220,180,94,0.18)] z-20'
                          : 'border border-white/10 z-10'
                      }
                    `}
                  >
                    {/* Card Image */}
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-black/60 mb-3.5">
                      <div
                        className="w-full h-full bg-cover bg-center grayscale contrast-110 brightness-95"
                        style={{ backgroundImage: `url('${leader.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    </div>

                    {/* Leader Information */}
                    <div className="px-1 pb-1 text-left">
                      <h3 className="font-serif text-lg text-white font-medium truncate">
                        {leader.name}
                      </h3>
                      <p className="text-[11px] font-mono text-[var(--accent-gold)] font-medium mt-0.5 uppercase tracking-wider truncate">
                        {leader.role}
                      </p>
                      <p className="text-[10px] font-mono text-[var(--text-muted)] truncate">
                        {leader.company}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Indicator Pagination Capsular Dots */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {LEADERS_DATA.map((leader, idx) => (
              <button
                key={leader.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === idx ? 'w-6 bg-[#dcb45e]' : 'w-1.5 bg-white/20'
                }`}
                aria-label={`Go to ${leader.name}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Full 5-Column Grid */}
        <RevealGroup 
          staggerChildren={0.08} 
          className="hidden lg:grid lg:grid-cols-5 gap-6"
        >
          {LEADERS_DATA.map((leader) => (
            <RevealItem
              key={leader.id}
              variants={cardReveal}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--accent-gold)] transition-colors duration-500 shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-110 group-hover:contrast-100 brightness-85 group-hover:brightness-100"
                  style={{
                    backgroundImage: `url('${leader.image}')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              <h3 className="font-serif text-xl text-white font-medium group-hover:text-[var(--accent-gold)] transition-colors">
                {leader.name}
              </h3>
              <p className="text-xs font-mono text-[var(--accent-gold)] font-medium mt-0.5">{leader.role}</p>
              <p className="text-xs font-mono text-[var(--text-muted)]">{leader.company}</p>
            </RevealItem>
          ))}
        </RevealGroup>

      </div>

    </section>
  );
}




