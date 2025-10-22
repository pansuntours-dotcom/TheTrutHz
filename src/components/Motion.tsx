"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";

type MotionDivProps = MotionProps & HTMLAttributes<HTMLDivElement>;
type MotionSectionProps = MotionProps & HTMLAttributes<HTMLElement>;

export const MotionDiv = motion.div as React.FC<MotionDivProps>;
export const MotionSection = motion.section as React.FC<MotionSectionProps>;
