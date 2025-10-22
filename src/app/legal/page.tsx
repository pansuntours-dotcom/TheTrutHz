"use client";

import React from "react";
import MotionDiv from "@/components/Motion";

export default function LegalPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Legal</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        All legal information, disclaimers, and privacy policies.
      </p>
      {/* Legal content here */}
    </MotionDiv>
  );
}
