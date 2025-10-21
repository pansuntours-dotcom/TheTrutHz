"use client";

import MotionDiv from "@/components/MotionDiv";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 text-gray-900 px-6 py-20">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <span className="text-lg text-primary font-medium tracking-wider uppercase">
          The Future of Content Creation
        </span>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl font-bold mb-4 holographic-text">The TrutHz</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering truth, creativity, and connection through technology.
        </p>
      </MotionDiv>
    </main>
  );
}
