// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with Tailwind Merge + clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
