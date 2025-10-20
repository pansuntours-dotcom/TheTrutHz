"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv"; // <-- uses the reusable motion wrapper

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">About The TrutHz</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The TrutHz is a platform dedicated to transparency, authenticity, and community-driven discovery.
          We believe in giving creators and audiences a place where truth and creativity align.
        </p>
      </MotionDiv>

      {/* Mission Section */}
      <MotionDiv
        className="max-w-3xl text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to empower creators and thinkers to share real perspectives in a digital world
          often clouded by noise. We aim to build technology that amplifies authenticity and helps users
          discover meaning, not just content.
        </p>
      </MotionDiv>

      {/* Team Section */}
      <MotionDiv
        className="max-w-4xl text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          We’re a small but passionate group of developers, designers, and dreamers driven by the same vision:
          to redefine the digital narrative through truth and creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Paul Nyamweya", role: "Founder & Visionary" },
            { name: "Alex Rivera", role: "Lead Developer" },
            { name: "Jamie Chen", role: "Creative Director" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </MotionDiv>

      {/* Closing Section */}
      <MotionDiv
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
        <p className="text-gray-600">
          Whether you’re a creator, thinker, or supporter — The TrutHz welcomes you to be part of
          something bigger. Together, we can shift the digital frequency toward truth.
        </p>
      </MotionDiv>
    </div>
  );
}
