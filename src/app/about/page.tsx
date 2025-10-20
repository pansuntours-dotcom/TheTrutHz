// src/app/about/page.tsx
"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">About The TrutHz</h1>
        <p className="text-lg text-gray-700">
          We provide the most reliable truth verification platform.
        </p>
      </MotionDiv>

      <MotionDiv
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>
          Our mission is to empower users with verified information in real time.
        </p>
        <p>
          Transparency, accuracy, and integrity guide everything we do.
        </p>
      </MotionDiv>
    </main>
  );
}
