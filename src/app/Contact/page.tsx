"use client";

import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        We’d love to hear from you. Fill out the form below or reach out via email.
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100"
        />
        <button
          type="submit"
          className="w-full py-3 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </MotionDiv>
  );
}
