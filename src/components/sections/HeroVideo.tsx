'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Scalloped / serrated badge border SVG path generator
  const createScallopPath = (cx: number, cy: number, r1: number, r2: number, numPoints: number) => {
    let d = '';
    const step = (Math.PI * 2) / (numPoints * 2);
    for (let i = 0; i < numPoints * 2; i++) {
      const r = i % 2 === 0 ? r1 : r2;
      const angle = i * step - Math.PI / 2;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      d += (i === 0 ? 'M' : 'L') + ` ${x.toFixed(2)},${y.toFixed(2)}`;
    }
    return d + ' Z';
  };

  const scallopPathD = createScallopPath(100, 100, 95, 89, 36);

  return (
    <section className="relative w-full h-[70vh] min-h-[480px] sm:min-h-[540px] flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Monochrome Audience Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('/images/audience-hero.jpg')`,
          filter: 'grayscale(100%) contrast(120%) brightness(38%)'
        }}
      />

      {/* Dark Vignette & Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/30 to-[#070707]" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Circular STAY TUNED / PLAY Badge */}
      <div className="relative z-20 flex items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {/* Badge Container */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            
            {/* SVG Scalloped Border + Rotating Circular Text */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              {/* Scalloped Gold Outer Border */}
              <path
                d={scallopPathD}
                fill="none"
                stroke="#dcb45e"
                strokeWidth="1.2"
                className="opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Text Path Circle */}
              <path
                id="circleTextPath"
                d="M 100, 100 m -67, 0 a 67,67 0 1,1 134,0 a 67,67 0 1,1 -134,0"
                fill="none"
              />

              {/* Rotating "STAY TUNED • STAY TUNED • STAY TUNED •" Text */}
              <g className="animate-[spin_25s_linear_infinite] origin-center">
                <text className="text-[9.5px] font-mono tracking-[0.34em] fill-[#dcb45e] font-semibold uppercase">
                  <textPath href="#circleTextPath" startOffset="0%">
                    STAY TUNED • STAY TUNED • STAY TUNED •
                  </textPath>
                </text>
              </g>
            </svg>

            {/* Inner Center Solid Dark Circle with Gold Play Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050505] border border-[#dcb45e]/40 flex items-center justify-center shadow-2xl group-hover:border-[#dcb45e] transition-colors duration-300">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#dcb45e] text-[#dcb45e] ml-0.5 group-hover:scale-110 transition-transform duration-300" />
            </div>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
