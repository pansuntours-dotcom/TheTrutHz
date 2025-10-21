"use client";

import { MotionSection } from "@/components/MotionDiv";

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
        Have questions or need assistance? Fill out the form below or reach out
        via email. We’ll get back to you as soon as possible.
      </p>

      <form className="w-full max-w-lg flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>
    </MotionSection>
  );
}
