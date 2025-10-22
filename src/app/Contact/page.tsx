"use client";

import { MotionDiv } from "@/components/Motion";

export default function ContactPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        We’d love to hear from you. Whether you have a question about features,
        pricing, or anything else — our team is ready to help.
      </p>

      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg space-y-4 shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </MotionDiv>
  );
}
