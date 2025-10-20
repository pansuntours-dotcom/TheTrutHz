"use client";

import { motion, MotionProps } from "framer-motion";
import React from "react";

// Forward ref to motion.div to satisfy TS and Next.js 14
type MotionDivProps = MotionProps & React.HTMLAttributes<HTMLDivElement>;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, ...props }, ref) => {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

MotionDiv.displayName = "MotionDiv";

export default MotionDiv;
