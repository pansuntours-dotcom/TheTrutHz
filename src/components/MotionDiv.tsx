"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
  className?: string;
};

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div ref={ref} className={className} {...props}>
      {children}
    </motion.div>
  )
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
