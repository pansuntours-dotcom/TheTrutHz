"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      {/* Hero Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">About The TrutHz</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is transparency, integrity, and providing a platform
          where truth matters most.
        </p>
      </MotionDiv>

      {/* Our Story Section */}
      <MotionDiv
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          The TrutHz was founded to empower users with reliable and
          transparent information. We believe in open dialogue and fact-based
          discussion.
        </p>
      </MotionDiv>

      {/* Our Values Section */}
      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {[
          { title: "Transparency", desc: "Clear, honest, and open." },
          { title: "Integrity", desc: "Doing the right thing always." },
          { title: "Innovation", desc: "Pushing boundaries responsibly." },
        ].map((value, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.desc}</p>
          </div>
        ))}
      </MotionDiv>
    </main>
  );
}
