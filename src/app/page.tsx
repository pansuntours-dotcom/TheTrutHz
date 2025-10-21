"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function HomePage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-5xl font-extrabold mb-6 text-primary text-center">
        Welcome to The TrutHz
      </h1>

      <p className="text-lg text-gray-400 max-w-3xl text-center mb-10">
        Your go-to platform for clarity, insights, and transparent information.
        Explore our tools, services, and resources designed to help you make
        better decisions every day.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="/About"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded transition text-center"
        >
          Learn More
        </a>

        <a
          href="/Services"
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded transition text-center"
        >
          Our Services
        </a>

        <a
          href="/Contact"
          className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded transition text-center"
        >
          Contact Us
        </a>
      </div>
    </MotionSection>
  );
}
