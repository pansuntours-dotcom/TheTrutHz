"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Legal & Disclaimers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Understand your rights and responsibilities when using The TrutHz.
        </p>
      </MotionDiv>
    </main>
  );
}
