"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;

export default function MotionDiv({ children, ...rest }: MotionDivProps) {
  return <motion.div {...rest}>{children}</motion.div>;
}
