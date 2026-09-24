'use client';

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIdx];

  return (
    <section id="testimonials" className="w-full py-24 lg:py-36 px-6 lg:px-12 bg-[#070707] border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop')`,
              filter: 'grayscale(100%) contrast(110%) brightness(55%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <Quote className="w-12 h-12 text-[var(--accent-gold)] opacity-80 mb-2" />
            <p className="font-serif text-2xl text-white font-light italic">
              &ldquo;The benchmark for luxury design assemblies.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Right Testimonial Card Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--accent-gold)] uppercase font-semibold">
              WHAT OUR ATTENDEES SAY
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[var(--accent-gold)] text-white hover:text-[var(--accent-gold)] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[rgba(255,255,255,0.15)] hover:border-[var(--accent-gold)] text-white hover:text-[var(--accent-gold)] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Quote Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#0d0d0d] border border-[rgba(197,168,128,0.2)] shadow-2xl relative">
            
            <div className="flex items-center gap-1 mb-6 text-[var(--accent-gold)]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[var(--accent-gold)]" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="font-serif text-xl sm:text-2xl text-white font-light leading-relaxed mb-8"
              >
                &ldquo;{current.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-4">
              <div 
                className="w-12 h-12 rounded-full bg-cover bg-center border border-[var(--accent-gold)]"
                style={{ backgroundImage: `url('${current.avatar}')`, filter: 'grayscale(100%)' }}
              />
              <div>
                <h4 className="font-serif text-lg text-white font-medium">{current.author}</h4>
                <p className="text-xs font-mono text-[var(--accent-gold)]">{current.title}</p>
                <p className="text-xs font-mono text-[var(--text-muted)]">{current.company}</p>
              </div>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
