// src/components/layouts/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionDiv = motion.div;
const MotionFooter = motion.footer;

export default function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-700 bg-gray-900 text-gray-300 py-10 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h2 className="text-xl font-bold text-white">The TrutHz</h2>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-white mb-3">About</h3>
            <p className="text-sm text-gray-400">
              The TrutHz is a next-gen platform for authentic conversations and meaningful connections.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} The TrutHz. All rights reserved.
        </p>
      </div>
    </MotionFooter>
  );
}
