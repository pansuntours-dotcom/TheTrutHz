'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionMain = motion.main;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeInView - a reusable animation wrapper for fade-in entrance effects
 */
export const FadeInView: React.FC<FadeInProps> = ({
  children,
  delay = 0.1,
  duration = 0.6,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
