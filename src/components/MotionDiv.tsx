"use client";

import { motion, MotionProps } from "framer-motion";
import React, { HTMLAttributes } from "react";

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default MotionDiv;
