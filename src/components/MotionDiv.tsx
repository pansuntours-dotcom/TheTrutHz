"use client";

import { motion, MotionProps, HTMLMotionProps } from "framer-motion";
import React from "react";

// Combines all normal div props, motion props, and ref attributes
type MotionDivProps = HTMLMotionProps<"div"> & MotionProps & { children?: React.ReactNode };

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
