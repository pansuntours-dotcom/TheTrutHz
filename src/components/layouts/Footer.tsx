"use client";

import { MotionSection, MotionDiv } from "@/components/MotionDiv";

export default function Footer() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-700 bg-gray-900 text-gray-300 py-10 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Logo / Branding */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="font-semibold text-lg text-white">The TrutHz</span>
        </MotionDiv>

        {/* Footer Links */}
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-6 text-gray-400 mb-6"
        >
          <a href="/About" className="hover:text-white transition">About</a>
          <a href="/Services" className="hover:text-white transition">Services</a>
          <a href="/Pricing" className="hover:text-white transition">Pricing</a>
          <a href="/Contact" className="hover:text-white transition">Contact</a>
        </MotionDiv>

        {/* Copyright */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 text-sm"
        >
          &copy; {new Date().getFullYear()} The TrutHz. All rights reserved.
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
