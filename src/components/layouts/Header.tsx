"use client";

import React from "react";
import { MotionSection } from "../MotionDiv";

export default function Header() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-gray-100 w-full py-4 px-6 fixed top-0 z-30 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">The TrutHz</h1>
        {/* Add navigation links here */}
      </div>
    </MotionSection>
  );
}
