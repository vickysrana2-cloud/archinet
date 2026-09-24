'use client';

import React from 'react';
import { EVENT_DATA } from '../../data';
import { motion } from 'framer-motion';

export default function IntroStatement() {
  return (
    <section className="w-full py-24 sm:py-36 px-6 lg:px-12 bg-[#070707] flex items-center justify-center text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[var(--accent-gold)] uppercase block mb-6">
            OUR PURPOSE // VISION STATEMENT
          </span>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-light leading-relaxed tracking-tight uppercase">
            &ldquo;{EVENT_DATA.introStatement}&rdquo;
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
