"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function ServicesPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Our Services</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        From cutting-edge analytics to intuitive UX design, The TrutHz delivers
        solutions that empower our users to make informed decisions.
      </p>
    </MotionSection>
  );
}
