"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { FC } from "react";

// Generic typed motion components
export const MotionDiv: FC<HTMLMotionProps<"div">> = motion.div;
export const MotionSection: FC<HTMLMotionProps<"section">> = motion.section;
export const MotionNav: FC<HTMLMotionProps<"nav">> = motion.nav;
export const MotionHeader: FC<HTMLMotionProps<"header">> = motion.header;
export const MotionFooter: FC<HTMLMotionProps<"footer">> = motion.footer;
export const MotionMain: FC<HTMLMotionProps<"main">> = motion.main;
