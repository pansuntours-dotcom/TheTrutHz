"use client";

import { motion } from "framer-motion";

// Basic motion exports
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionSection = motion.section;

// Optional: reusable animation presets
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};
