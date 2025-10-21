"use client";

import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function Footer() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-700 bg-gray-900 text-gray-300 py-10 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-gray-300 font-semibold text-lg">The TrutHz</span>
        </MotionDiv>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} The TrutHz. All rights reserved.
        </p>
      </div>
    </MotionDiv>
  );
}
