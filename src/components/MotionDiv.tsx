"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// This allows all standard div props including className
const MotionDiv: React.FC<HTMLMotionProps<"div">> = (props) => {
  return <motion.div {...props} />;
};

export default MotionDiv;
