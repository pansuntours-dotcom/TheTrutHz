"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { forwardRef } from "react";

export const MotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => <motion.div ref={ref} {...props} />
);

export const MotionSection = forwardRef<HTMLElement, HTMLMotionProps<"section">>(
  (props, ref) => <motion.section ref={ref} {...props} />
);

export const MotionNav = forwardRef<HTMLElement, HTMLMotionProps<"nav">>(
  (props, ref) => <motion.nav ref={ref} {...props} />
);

export const MotionHeader = forwardRef<HTMLElement, HTMLMotionProps<"header">>(
  (props, ref) => <motion.header ref={ref} {...props} />
);

export const MotionFooter = forwardRef<HTMLElement, HTMLMotionProps<"footer">>(
  (props, ref) => <motion.footer ref={ref} {...props} />
);

export const MotionMain = forwardRef<HTMLElement, HTMLMotionProps<"main">>(
  (props, ref) => <motion.main ref={ref} {...props} />
);

// For better DevTools readability
MotionDiv.displayName = "MotionDiv";
MotionSection.displayName = "MotionSection";
MotionNav.displayName = "MotionNav";
MotionHeader.displayName = "MotionHeader";
MotionFooter.displayName = "MotionFooter";
MotionMain.displayName = "MotionMain";
