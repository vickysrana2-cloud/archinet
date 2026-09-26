'use client';

import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';

export interface FixedBackgroundSectionProps {
  image: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  minHeight?: string;
}

export default function FixedBackgroundSection({
  image,
  children,
  className = '',
  overlay = true,
  overlayOpacity = 0.15,
  minHeight = '120vh',
}: FixedBackgroundSectionProps) {
  return (
    <section
      className={`relative w-full overflow-clip bg-[#050505] ${className}`}
      style={{ minHeight }}
    >
      {/* 
        Desktop / Modern CSS Fixed Background Layer (background-attachment: fixed)
        Hidden on touch devices to prevent mobile Safari viewport clipping
      */}
      <div 
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0 pointer-events-none"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* 
        Mobile / Touch Sticky Visual Layer Fallback
        Provides smooth stationary background behavior on iOS & Android
      */}
      <div className="md:hidden sticky top-0 left-0 w-full h-[100svh] overflow-hidden z-0 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>

      {/* Configurable Dark Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black z-[1] pointer-events-none transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Foreground Content Layer */}
      <ScrollReveal className="relative z-10 w-full min-h-full flex flex-col justify-center items-center md:pt-0 -mt-[100svh] md:mt-0">
        {children}
      </ScrollReveal>
    </section>
  );
}

