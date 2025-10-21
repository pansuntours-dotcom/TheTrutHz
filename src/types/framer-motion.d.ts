// src/types/framer-motion.d.ts
import * as React from "react";
import { MotionProps } from "framer-motion";

declare module "framer-motion" {
  // Merge standard JSX props with MotionProps
  export type HTMLMotionProps<T extends keyof JSX.IntrinsicElements> =
    JSX.IntrinsicElements[T] & MotionProps;

  // Allow motion.div, motion.section, etc. to accept HTML props like className
  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ComponentType<HTMLMotionProps<K>>;
  };
}
