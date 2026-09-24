'use client';

import React from 'react';
import { GALLERY_IMAGES } from '../../data';

export default function GalleryStrip() {
  return (
    <section className="w-full py-12 bg-[#050505] overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      <div className="flex gap-4 animate-marquee whitespace-nowrap">
        {GALLERY_IMAGES.map((imgUrl, idx) => (
          <div
            key={idx}
            className="w-72 sm:w-96 aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] group hover:border-[var(--accent-gold)] transition-colors duration-500"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-110 group-hover:contrast-100 brightness-75 group-hover:brightness-100"
              style={{
                backgroundImage: `url('${imgUrl}')`
              }}
            />
          </div>
        ))}
        {GALLERY_IMAGES.map((imgUrl, idx) => (
          <div
            key={`dup-${idx}`}
            className="w-72 sm:w-96 aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] group hover:border-[var(--accent-gold)] transition-colors duration-500"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-110 group-hover:contrast-100 brightness-75 group-hover:brightness-100"
              style={{
                backgroundImage: `url('${imgUrl}')`
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
