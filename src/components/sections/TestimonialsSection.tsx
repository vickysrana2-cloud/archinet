'use client';

import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = TESTIMONIALS_DATA.length;

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;

    // Detect carousel direction
    const forwardDistance = (index - activeIndex + total) % total;
    const backwardDistance = (activeIndex - index + total) % total;

    setDirection(forwardDistance <= backwardDistance ? 1 : -1);
    setActiveIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  /**
   * Returns the shortest circular distance from active slide.
   *
   * Example:
   * active = 2
   * index  = 1  => -1
   * index  = 3  => +1
   */
  const getOffset = (index: number) => {
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden border-b border-white/10 bg-[#050505] text-[#f4f0e8]"
    >
      <div className="grid min-h-[700px] w-full grid-cols-1 lg:grid-cols-[40%_60%]">

        {/* =========================================================
            LEFT — 40% IMAGE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            relative
            min-h-[420px]
            w-full
            overflow-hidden
            lg:min-h-[700px]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/images/audience-hero.jpg')",
              filter:
                'grayscale(100%) contrast(120%) brightness(42%)',
            }}
          />

          {/* Desktop gradient to blend image into content */}
          <div
            className="
              absolute
              inset-0
              hidden
              bg-gradient-to-r
              from-transparent
              via-black/10
              to-[#050505]
              lg:block
            "
          />

          {/* Bottom gradient for mobile */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050505]
              via-transparent
              to-transparent
              lg:hidden
            "
          />
        </motion.div>

        {/* =========================================================
            RIGHT — 60% CONTENT
        ========================================================= */}
        <div
          className="
            relative
            flex
            min-w-0
            flex-col
            justify-center
            overflow-hidden
            bg-[#050505]
            px-5
            py-16
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >

          {/* =====================================================
              HEADING — EXACTLY 2 LINES
          ===================================================== */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-30
              mb-10
              font-serif
              text-[42px]
              font-normal
              uppercase
              leading-[0.95]
              tracking-[-0.03em]
              text-white
              sm:text-[50px]
              lg:text-[58px]
              xl:text-[64px]
            "
          >
            WHAT OUR
            <br />
            ATTENDEES SAY
          </motion.h2>

          {/* =====================================================
              CAROUSEL STAGE
          ===================================================== */}
          <div className="relative w-full">

            {/* Card viewport */}
            <div
              className="
                relative
                h-[330px]
                w-full
                overflow-hidden
                sm:h-[350px]
                lg:h-[340px]
                xl:h-[360px]
              "
            >

              {TESTIMONIALS_DATA.map((item, index) => {
                const offset = getOffset(index);

                const isActive = offset === 0;
                const isPrevious = offset === -1;
                const isNext = offset === 1;

                /*
                 * Only render the active card and its immediate
                 * neighbors visually.
                 *
                 * This keeps the carousel clean and prevents
                 * cards from suddenly appearing/disappearing.
                 */
                const isVisible =
                  isActive || isPrevious || isNext;

                if (!isVisible) {
                  return null;
                }

                /*
                 * Card positioning.
                 *
                 * Center:
                 *      0%
                 *
                 * Previous:
                 *      -100% approximately
                 *
                 * Next:
                 *      +100% approximately
                 *
                 * We use percentages instead of hardcoded pixels
                 * so the carousel remains responsive.
                 */
                let xPosition = '0%';

                if (offset === -1) {
                  xPosition = '-105%';
                }

                if (offset === 1) {
                  xPosition = '105%';
                }

                return (
                  <motion.article
                    key={item.id}
                    initial={false}
                    animate={{
                      x: xPosition,
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.35,
                      filter: isActive
                        ? 'blur(0px)'
                        : 'blur(0.3px)',
                    }}
                    transition={{
                      x: {
                        type: 'spring',
                        stiffness: 75,
                        damping: 20,
                        mass: 0.9,
                      },
                      scale: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                      },
                      opacity: {
                        duration: 0.45,
                        ease: 'easeOut',
                      },
                      filter: {
                        duration: 0.4,
                      },
                    }}
                    onClick={() => {
                      if (isPrevious) {
                        goPrevious();
                      } else if (isNext) {
                        goNext();
                      }
                    }}
                    className={`
                      absolute
                      left-0
                      top-0
                      flex
                      h-full
                      w-[82%]
                      max-w-[430px]
                      flex-col
                      justify-between
                      bg-[#090909]
                      p-6
                      sm:p-7
                      lg:w-[76%]
                      xl:w-[72%]
                      ${
                        isActive
                          ? `
                            z-20
                            cursor-default
                            border
                            border-[#dcb45e]
                            shadow-[0_0_35px_rgba(220,180,94,0.15)]
                          `
                          : `
                            z-10
                            cursor-pointer
                            border
                            border-white/10
                          `
                      }
                    `}
                    style={{
                      left: '50%',
                      translateX: '-50%',
                    }}
                  >

                    {/* =========================================
                        QUOTE BADGE
                    ========================================= */}
                    <div
                      className="
                        absolute
                        -top-3
                        left-5
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        bg-[#dcb45e]
                        font-serif
                        text-lg
                        font-bold
                        leading-none
                        text-[#050505]
                        shadow-md
                      "
                    >
                      “
                    </div>

                    {/* =========================================
                        CARD CONTENT
                    ========================================= */}
                    <div className="flex flex-1 flex-col">

                      {/* Stars */}
                      <div className="mb-5 flex items-center justify-center gap-1 text-[11px] text-[#dcb45e]">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>

                      {/* Quote */}
                      <div className="flex flex-1 items-center justify-center">
                        <p
                          className="
                            max-w-[360px]
                            text-center
                            font-sans
                            text-[12px]
                            font-normal
                            leading-[1.8]
                            text-[#e5e2db]
                            sm:text-[13px]
                          "
                        >
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* =========================================
                        AUTHOR
                    ========================================= */}
                    <div
                      className="
                        mt-5
                        border-t
                        border-white/10
                        pt-5
                      "
                    >
                      <div className="flex items-center gap-3.5">

                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="
                            h-10
                            w-10
                            shrink-0
                            rounded-full
                            border
                            border-[#dcb45e]/40
                            object-cover
                          "
                        />

                        <div className="min-w-0">
                          <h4
                            className="
                              truncate
                              font-serif
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wide
                              text-white
                              sm:text-sm
                            "
                          >
                            {item.author}
                          </h4>

                          <p
                            className="
                              mt-0.5
                              truncate
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-[0.14em]
                              text-[#dcb45e]
                            "
                          >
                            {item.title}
                          </p>
                        </div>

                      </div>
                    </div>

                  </motion.article>
                );
              })}

            </div>

            {/* =================================================
                PAGINATION
            ================================================= */}
            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-2.5
                lg:justify-start
                lg:pl-1
              "
            >
              {TESTIMONIALS_DATA.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={
                    activeIndex === index ? 'true' : undefined
                  }
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-500
                    ease-out
                    ${
                      activeIndex === index
                        ? 'w-7 bg-[#dcb45e]'
                        : 'w-2 bg-white/20 hover:bg-white/50'
                    }
                  `}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}