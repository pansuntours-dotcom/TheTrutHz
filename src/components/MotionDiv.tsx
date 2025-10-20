"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// Fully typed motion div wrapper
const MotionDiv: React.FC<HTMLMotionProps<"div">> = (props) => {
  return <motion.div {...props} />;
};

export default MotionDiv;
