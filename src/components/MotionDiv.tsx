"use client";

import { motion, MotionProps } from "framer-motion";
import React, { HTMLAttributes } from "react";

// ✅ Allow className and all normal HTML props
type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;

const MotionDiv: React.FC<MotionDivProps> = ({ children, ...rest }) => {
  return <motion.div {...rest}>{children}</motion.div>;
};

export default MotionDiv;
