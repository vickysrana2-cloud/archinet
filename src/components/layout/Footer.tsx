'use client';

import React from 'react';
import { ScrollReveal, RevealGroup, RevealItem } from '../animations/ScrollReveal';
import { fadeUp, cardReveal } from '../animations/motionVariants';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-[var(--text-secondary)] py-16 px-6 lg:px-12 border-t border-[rgba(197,168,128,0.2)]">
      <RevealGroup
        staggerChildren={0.1}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-[rgba(255,255,255,0.08)]"
      >
        
        {/* Brand Column */}
        <RevealItem variants={cardReveal} className="lg:col-span-2 flex flex-col gap-4">
          <a href="#" className="font-serif text-3xl font-bold tracking-tight text-white">
            archinet<span className="text-[var(--accent-gold)]">™</span>
          </a>
          <p className="text-xs font-mono text-[var(--accent-gold)] tracking-widest uppercase font-semibold">
            WE BRIDGE THE GAP.
          </p>
          <p className="text-xs font-sans text-[var(--text-secondary)] max-w-sm leading-relaxed">
            The premier invitation-only architectural matrix connecting visionary global principals with world-class luxury interior & structural innovators.
          </p>
        </RevealItem>

        {/* Explore Links */}
        <RevealItem variants={cardReveal} className="flex flex-col gap-3 font-mono text-xs">
          <span className="text-white font-bold tracking-widest uppercase mb-1">EXPLORE</span>
          <a href="#about" className="hover:text-[var(--accent-gold)] transition-colors">About Summit</a>
          <a href="#edition-14" className="hover:text-[var(--accent-gold)] transition-colors">14th Edition Mumbai</a>
          <a href="#editions" className="hover:text-[var(--accent-gold)] transition-colors">Past Editions</a>
          <a href="#leaders" className="hover:text-[var(--accent-gold)] transition-colors">Industry Leaders</a>
          <a href="#testimonials" className="hover:text-[var(--accent-gold)] transition-colors">Attendee Words</a>
        </RevealItem>

        {/* Contact Info */}
        <RevealItem variants={cardReveal} className="flex flex-col gap-3 font-mono text-xs">
          <span className="text-white font-bold tracking-widest uppercase mb-1">CONTACT</span>
          <span>Mumbai: +91 (022) 4890 1200</span>
          <span>invitations@archinet.ai.studio</span>
          <span>The St. Regis, Lower Parel</span>
          <span>Mumbai, MH 400013, India</span>
        </RevealItem>

        {/* Legal Info */}
        <RevealItem variants={cardReveal} className="flex flex-col gap-3 font-mono text-xs">
          <span className="text-white font-bold tracking-widest uppercase mb-1">LEGAL</span>
          <a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Cookie Preferences</a>
          <a href="#" className="hover:text-[var(--accent-gold)] transition-colors">Curatorial Standards</a>
        </RevealItem>

      </RevealGroup>

      <ScrollReveal variants={fadeUp} className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[var(--text-muted)] gap-4">
        <span>© 2026 Riverstone Networking Services. All rights reserved.</span>
        <span className="tracking-widest uppercase text-[var(--accent-gold)] font-medium">DESIGNED FOR CONNECTION</span>
      </ScrollReveal>
    </footer>
  );
}

