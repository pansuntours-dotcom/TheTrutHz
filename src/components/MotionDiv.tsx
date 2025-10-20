"use client";

import { motion } from "framer-motion";
import React from "react";

// ✅ Correctly extend motion.div props so className and others work
type MotionDivProps = React.ComponentProps<typeof motion.div>;

export default function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props} />;
}
