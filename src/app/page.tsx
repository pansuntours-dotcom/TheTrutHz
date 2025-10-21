"use client";

import React from "react";
import { MotionSection } from "@/components/MotionDiv";

export default function HomePage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to The TrutHz</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        Your platform for reliable insights and data transparency.
      </p>
      {/* Add CTA buttons or components here */}
    </MotionSection>
  );
}
