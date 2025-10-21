"use client";

import React from "react";
import { MotionSection } from "../../components/Motion";

export default function ContactPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        Have a question, partnership idea, or media inquiry? Reach out to The TrutHz
        team and we’ll get back to you as soon as possible.
      </p>

      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 rounded hover:bg-primary-dark transition"
        >
          Send Message
        </button>
      </form>
    </MotionSection>
  );
}
