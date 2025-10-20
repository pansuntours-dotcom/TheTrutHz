"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// This allows passing normal HTML props (like className) safely
type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
};

export default function MotionDiv({ children, ...rest }: MotionDivProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
