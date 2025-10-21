"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

// Div wrapper
export const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);

// Section wrapper
export const MotionSection = forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  (props, ref) => <motion.section ref={ref} {...props} />
);

// Nav wrapper (for Admin sidebar)
export const MotionNav = forwardRef<HTMLElement, HTMLMotionProps<"nav">>(
  (props, ref) => <motion.nav ref={ref} {...props} />
);
