'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { scaleIn } from '../animations/motionVariants';

export default function HeroVideo() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
        '*'
      );
      setIsPlaying(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
        '*'
      );
      setIsPlaying(true);
    }
  };

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
      
      {/* Background YouTube Video (20 Seconds Loop) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          ref={iframeRef}
          src="https://www.youtube.com/embed/yg8snqiv1o0?autoplay=1&mute=1&controls=0&start=0&end=20&loop=1&playlist=yg8snqiv1o0&rel=0&disablekb=1&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1"
          title="ArchiNet Showcase Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 w-[300%] h-[300%] min-w-[100vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            filter: 'grayscale(100%) contrast(120%) brightness(38%)'
          }}
        />
      </div>

      {/* Dark Vignette & Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-black/30 to-[#070707] pointer-events-none" />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Centered Circular STAY TUNED / PLAY-PAUSE Badge */}
      <div className="relative z-20 flex items-center justify-center text-center">
        
        <ScrollReveal
          variants={scaleIn}
          className="relative group cursor-pointer"
        >
          {/* Interactive Badge Button */}
          <button
            type="button"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 focus:outline-none"
          >
            
            {/* SVG Scalloped Border + Rotating Circular Text */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200">
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
                <text className="text-[12.5px] font-mono tracking-[0.27em] fill-[#dcb45e] font-bold uppercase">
                  <textPath href="#circleTextPath" startOffset="0%">
                    STAY TUNED • STAY TUNED • STAY TUNED •
                  </textPath>
                </text>
              </g>
            </svg>

            {/* Inner Center Solid Dark Circle with Gold Play/Pause Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050505] border border-[#dcb45e]/40 flex items-center justify-center shadow-2xl group-hover:border-[#dcb45e] transition-colors duration-300 z-10">
              {isPlaying ? (
                <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-[#dcb45e] text-[#dcb45e] group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#dcb45e] text-[#dcb45e] ml-0.5 group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>

          </button>
        </ScrollReveal>

      </div>

    </section>
  );
}

