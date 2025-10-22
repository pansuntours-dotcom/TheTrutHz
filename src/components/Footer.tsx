"use client";

import { MotionDiv } from "./Motion";
import Link from "next/link";

export default function Footer() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-primary font-semibold">The TrutHz</span>.  
          All rights reserved.
        </p>

        {/* Right: Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <Link href="/privacy" className="hover:text-primary transition">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition">Terms</Link>
          <Link href="/Contact" className="hover:text-primary transition">Contact</Link>
        </div>
      </div>
    </MotionDiv>
  );
}
