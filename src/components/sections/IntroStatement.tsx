'use client';

import React, { useRef, useEffect, useState } from 'react';
import { EVENT_DATA } from '../../data';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  isReducedMotion: boolean;
}

function Word({ word, index, total, progress, isReducedMotion }: WordProps) {
  // Map index across 75% of total scroll progress window with a 25% overlap for a smooth brightness gradient
  const start = (index / total) * 0.75;
  const end = start + 0.25;
  
  const opacity = useTransform(progress, [start, end], [0.14, 1]);

  if (isReducedMotion) {
    return (
      <span className="inline-block mx-[0.15em] text-white">
        {word}
      </span>
    );
  }

  return (
    <motion.span 
      style={{ opacity }} 
      className="inline-block mx-[0.15em] text-white transition-opacity duration-150 select-none"
    >
      {word}
    </motion.span>
  );
}

export default function IntroStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 35%'],
  });

  const words = EVENT_DATA.introStatement.split(' ');

  return (
    <section 
      ref={containerRef}
      className="w-full py-32 sm:py-48 px-6 lg:px-12 bg-[#050505] flex flex-col items-center justify-center text-center overflow-hidden border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Purpose Eyebrow Tag */}
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono tracking-[0.35em] text-[#dcb45e] uppercase block mb-10 font-medium text-center"
        >
          OUR PURPOSE // VISION STATEMENT
        </motion.span>

        {/* Scroll-Driven Text Brightness Reveal Statement */}
        <h2 className="font-serif text-xl sm:text-3xl lg:text-4xl text-white font-light leading-relaxed sm:leading-relaxed lg:leading-relaxed tracking-tight uppercase max-w-4xl mx-auto text-center flex flex-wrap justify-center items-center">
          <span className="text-[#dcb45e]/50 mr-1.5 font-normal">&ldquo;</span>
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              progress={scrollYProgress}
              isReducedMotion={isReducedMotion}
            />
          ))}
          <span className="text-[#dcb45e]/50 ml-1 font-normal">&rdquo;</span>
        </h2>

      </div>
    </section>
  );
}
