"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
};

export const MotionDiv: React.FC<MotionDivProps> = (props) => {
  return <motion.div {...props} />;
};
