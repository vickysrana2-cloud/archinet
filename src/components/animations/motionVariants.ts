import { Variants } from 'framer-motion';

/**
 * Ultra-smooth cubic-bezier easing curve for fluid, timely scroll reveals.
 * Provides immediate response with a soft, natural deceleration.
 */
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Default viewport configuration for scroll triggers.
 * Optimized with low threshold (0.08) so reveal starts immediately when section enters viewport.
 */
export const defaultViewport = {
  once: false,
  amount: 0.08,
  margin: '-20px 0px -20px 0px',
};

/**
 * Stagger container variant for general content sequences.
 */
export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Stagger container variant for card grids and galleries.
 */
export const staggerGrid = (staggerChildren = 0.08, delayChildren = 0.02): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Standard rise from below reveal.
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Drop from above reveal.
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Enter from the left reveal (for left-column elements).
 */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Enter from the right reveal (for right-column elements).
 */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 36,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Subtle scale-in reveal.
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Image reveal combining scale, opacity, and subtle vertical motion.
 */
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 24,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Card reveal combining y movement with subtle scale effect.
 */
export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: PREMIUM_EASE,
    },
  },
};

/**
 * Fallback variant for accessibility (prefers-reduced-motion).
 */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};
