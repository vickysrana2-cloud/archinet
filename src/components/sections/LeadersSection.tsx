'use client';

import React from 'react';
import { LEADERS_DATA } from '../../data';
import { motion } from 'framer-motion';

export default function LeadersSection() {
  return (
    <section id="leaders" className="w-full py-24 lg:py-36 px-6 lg:px-12 bg-[#050505] border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--accent-gold)] uppercase block mb-3">
              KEYNOTE VISIONARIES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white font-light tracking-tight">
              Our Industry <span className="editorial-italic">Leaders.</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider max-w-xs uppercase">
            DISTINGUISHED PRINCIPALS & CREATIVE DIRECTORS SHAPING GLOBAL SKYLINE DESIGN
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {LEADERS_DATA.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[rgba(255,255,255,0.1)] group-hover:border-[var(--accent-gold)] transition-colors duration-500">
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
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
