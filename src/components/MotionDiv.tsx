// src/components/MotionDiv.tsx
"use client"; // Important! This makes it a client-side component

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

// Type the props so it accepts all motion.div props + className, children, etc.
type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv: React.FC<MotionDivProps> = (props) => <motion.div {...props} />;

export default MotionDiv;
