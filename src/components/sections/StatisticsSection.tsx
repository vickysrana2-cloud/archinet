'use client';

import React from 'react';
import { STATISTICS_DATA } from '../../data';
import { motion } from 'framer-motion';

export default function StatisticsSection() {
  return (
    <section className="w-full py-20 bg-[#070707] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(197,168,128,0.2)]">
          {STATISTICS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}
            >
              <span className="font-serif text-5xl sm:text-7xl font-light text-[var(--accent-gold)] leading-none mb-3">
                {stat.value}
              </span>
              <span className="text-[11px] font-mono text-[var(--text-secondary)] tracking-[0.2em] uppercase max-w-[180px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
