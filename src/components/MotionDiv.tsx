"use client";

import { motion } from "framer-motion";
import React from "react";

type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
};

export default function MotionDiv({
  children,
  ...rest
}: MotionDivProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
