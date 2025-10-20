// src/app/contact/page.tsx
"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">
          Have questions? Reach out and we’ll get back to you as soon as possible.
        </p>
      </MotionDiv>

      <MotionDiv
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            className="p-3 border border-gray-300 rounded"
            rows={5}
          />
          <button className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </MotionDiv>
    </main>
  );
}
