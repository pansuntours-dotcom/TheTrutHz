"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 px-6 sm:px-12 lg:px-24 py-20">
      {/* Hero Section */}
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-bold text-white tracking-tight">
          The TrutHz
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Uniting creativity, technology, and truth — the pulse of the modern
          digital experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/signup"
            className="bg-[#ff0055] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff2266] transition"
          >
            Join the Movement
          </a>
          <a
            href="/about"
            className="border border-gray-700 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-[#00c6ff] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </MotionDiv>

      {/* Mission / Statement */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-24"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">
          The Future of Authentic Media
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          The TrutHz is redefining the way ideas flow across the internet. Our
          mission is to empower voices with tools built for truth, creativity,
          and collaboration — not censorship and noise.
        </p>
      </MotionDiv>

      {/* Feature Blocks */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10"
      >
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#ff0055] transition">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Creator Freedom
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Publish, speak, and innovate without algorithmic restriction.
            You own your narrative — we just amplify your voice.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#00c6ff] transition">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Smart Technology
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Built with AI-driven discovery and decentralization in mind, The
            TrutHz gives creators data ownership and integrity.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#ffaa00] transition">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Global Community
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            From artists to analysts — connect with truth-seekers worldwide
            building the new internet of ideas.
          </p>
        </div>
      </MotionDiv>

      {/* CTA / Footer */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-32"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">
          Start Creating on The TrutHz
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join our community and build your truth into the collective rhythm of
          tomorrow.
        </p>
        <a
          href="/signup"
          className="inline-block bg-[#00c6ff] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#33d1ff] transition"
        >
          Get Started
        </a>
      </MotionDiv>
    </div>
  );
};

export default HomePage;
