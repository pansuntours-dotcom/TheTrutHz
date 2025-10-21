"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function AboutPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        We build The TrutHz to give you the best experience possible.
      </p>
    </MotionSection>
  );
}
