'use client';

import React, { useEffect, useRef, useState } from 'react';
import { STATISTICS_DATA } from '../../data';
import { RevealGroup, RevealItem } from '../animations/ScrollReveal';
import { cardReveal } from '../animations/motionVariants';
import { useInView, animate } from 'framer-motion';

function CountNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  // Extract number and suffix, e.g. "2500+" -> number: 2500, suffix: "+"
  const match = value.match(/(\d+)/);
  const targetNumber = match ? parseInt(match[0], 10) : 0;
  const suffix = match ? value.replace(match[0], '') : '';

  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCurrentNumber(0);
      return;
    }

    const controls = animate(0, targetNumber, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setCurrentNumber(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, targetNumber]);

  return (
    <span ref={ref} className="font-serif text-5xl sm:text-7xl font-light text-[var(--accent-gold)] leading-none mb-3 inline-block tracking-tight">
      {currentNumber}
      {suffix}
    </span>
  );
}

export default function StatisticsSection() {
  return (
    <section className="w-full py-20 bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealGroup
          staggerChildren={0.1}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(197,168,128,0.2)]"
        >
          {STATISTICS_DATA.map((stat, idx) => (
            <RevealItem
              key={stat.label}
              variants={cardReveal}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}
            >
              <CountNumber value={stat.value} />
              <span className="text-[11px] font-mono text-[var(--text-secondary)] tracking-[0.2em] uppercase max-w-[180px]">
                {stat.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}


