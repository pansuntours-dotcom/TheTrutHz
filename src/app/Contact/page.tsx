'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ✅ Define MotionDiv properly
const MotionDiv = motion.div;

export default function ContactPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-white"
    >
      <h1 className="text-4xl font-bold mb-4">Contact The TrutHz</h1>
      <p className="text-lg text-gray-400 max-w-xl text-center mb-8">
        Reach out for collaborations, inquiries, or resonance partnerships.
      </p>

      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
        />
        <button
          type="submit"
          className="w-full p-3 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </MotionDiv>
  );
}
