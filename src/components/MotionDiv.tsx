"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// ✅ Fully typed motion wrappers to allow className and other HTML props
export const MotionDiv: React.FC<HTMLMotionProps<"div">> = (props) => (
  <motion.div {...props} />
);

export const MotionSection: React.FC<HTMLMotionProps<"section">> = (props) => (
  <motion.section {...props} />
);

export const MotionMain: React.FC<HTMLMotionProps<"main">> = (props) => (
  <motion.main {...props} />
);
