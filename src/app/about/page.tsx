"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      {/* Hero / Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white">
          About The TrutHz
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Amplifying truth. Empowering voices. Shaping the new digital discourse.
        </p>
      </MotionDiv>

      {/* Mission */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20 text-center"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          The TrutHz is a next-generation media and knowledge platform built for
          authenticity, creative freedom, and community-driven evolution. We
          believe in empowering people to speak boldly, connect deeply, and
          share insight responsibly.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Every article, every video, every connection on The TrutHz is part of
          a collective rhythm — one that challenges the noise and champions
          meaningful truth in every form.
        </p>
      </MotionDiv>

      {/* Values */}
      <MotionDiv
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10"
      >
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#ff0055] transition">
          <h3 className="text-2xl font-semibold text-white mb-2">Truth</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We exist to restore trust in information by empowering creators to
            publish transparently and thoughtfully.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#00c6ff] transition">
          <h3 className="text-2xl font-semibold text-white mb-2">Innovation</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The TrutHz merges AI tools and human creativity to create a smarter,
            fairer ecosystem for knowledge exchange.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#ffaa00] transition">
          <h3 className="text-2xl font-semibold text-white mb-2">Community</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We cultivate respectful dialogue and global collaboration around
            ideas that move humanity forward.
          </p>
        </div>
      </MotionDiv>

      {/* Call to Action */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-24"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">
          Be Part of the Frequency.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join the movement redefining truth in the digital age. Whether you’re
          a creator, thinker, or innovator — your voice matters here.
        </p>
        <a
          href="/signup"
          className="inline-block bg-[#ff0055] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff2266] transition"
        >
          Join The TrutHz
        </a>
      </MotionDiv>
    </div>
  );
};

export default AboutPage;
