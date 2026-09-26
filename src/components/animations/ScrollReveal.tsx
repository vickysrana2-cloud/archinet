'use client';

import React from 'react';
import { motion, useReducedMotion, Variants, HTMLMotionProps } from 'framer-motion';
import {
  fadeUp,
  staggerContainer,
  staggerGrid,
  defaultViewport,
  reducedMotionVariants,
} from './motionVariants';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variants?: Variants;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  margin?: string;
  className?: string;
}

/**
 * Reusable container that triggers smooth, timely scroll-reveals for its children when entering the viewport.
 */
export function ScrollReveal({
  children,
  variants,
  staggerChildren,
  delayChildren,
  once = false,
  amount = 0.08,
  margin = '-20px 0px -20px 0px',
  className = '',
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = React.useMemo(() => {
    if (shouldReduceMotion) {
      return reducedMotionVariants;
    }

    if (staggerChildren !== undefined || delayChildren !== undefined) {
      return staggerContainer(staggerChildren ?? 0.06, delayChildren ?? 0);
    }

    if (variants) {
      return variants;
    }

    return staggerContainer(0.06, 0);
  }, [shouldReduceMotion, staggerChildren, delayChildren, variants]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export interface RevealItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
}

/**
 * Child item component that animates according to specified variants when parent enters viewport.
 */
export function RevealItem({
  children,
  variants = fadeUp,
  className = '',
  ...props
}: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeVariants = shouldReduceMotion ? reducedMotionVariants : variants;

  return (
    <motion.div className={className} variants={activeVariants} {...props}>
      {children}
    </motion.div>
  );
}

export interface RevealGroupProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
  margin?: string;
  className?: string;
}

/**
 * Convenience grid/list group container with staggered reveal logic.
 */
export function RevealGroup({
  children,
  staggerChildren = 0.08,
  delayChildren = 0.02,
  once = false,
  amount = 0.08,
  margin = '-20px 0px -20px 0px',
  className = '',
  ...props
}: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  const groupVariants = shouldReduceMotion
    ? reducedMotionVariants
    : staggerGrid(staggerChildren, delayChildren);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={groupVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
