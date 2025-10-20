"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      {/* Hero Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Contact The TrutHz</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Reach out with questions, feedback, or
          collaboration inquiries.
        </p>
      </MotionDiv>

      {/* Contact Form Section */}
      <MotionDiv
        className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Your message"
              className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </MotionDiv>

      {/* Contact Info Section */}
      <MotionDiv
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="text-gray-600 mb-2">
          Email:{" "}
          <a
            href="mailto:support@thetruthz.live"
            className="text-indigo-600 hover:underline"
          >
            support@thetruthz.live
          </a>
        </p>
        <p className="text-gray-600">
          Twitter:{" "}
          <a
            href="https://twitter.com/thetruthz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            @TheTrutHz
          </a>
        </p>
      </MotionDiv>
    </main>
  );
}
