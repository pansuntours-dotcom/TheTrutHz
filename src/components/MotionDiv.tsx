"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// This combines motion props and normal div props correctly for Next.js 14 + TS
type MotionDivProps = HTMLMotionProps<"div"> & { children?: React.ReactNode };

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
