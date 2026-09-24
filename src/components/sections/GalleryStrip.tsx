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
            className="w-72 sm:w-96 aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] group"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${imgUrl}')`,
                filter: 'grayscale(100%) contrast(110%) brightness(75%)'
              }}
            />
          </div>
        ))}
        {GALLERY_IMAGES.map((imgUrl, idx) => (
          <div
            key={`dup-${idx}`}
            className="w-72 sm:w-96 aspect-[16/10] shrink-0 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] group"
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${imgUrl}')`,
                filter: 'grayscale(100%) contrast(110%) brightness(75%)'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
