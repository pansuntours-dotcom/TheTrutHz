"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

// Fully typed motion div that allows className, style, children, and motion props
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
