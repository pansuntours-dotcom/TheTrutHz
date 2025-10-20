"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React, { PropsWithChildren } from "react";

// Correctly typed MotionDiv that allows all div props including className
type MotionDivProps = PropsWithChildren<HTMLMotionProps<"div">>;

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
