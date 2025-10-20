"use client";

import * as React from "react";
import { motion, MotionProps } from "framer-motion";

// ✅ This ensures MotionDiv accepts all normal <div> props like className
type MotionDivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...rest }) => {
  return <motion.div {...rest}>{children}</motion.div>;
};

export default MotionDiv;
