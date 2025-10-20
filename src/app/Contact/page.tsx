"use client";

import React, { useState } from "react";
import MotionDiv from "@/components/MotionDiv";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace with your own API endpoint later (e.g., /api/contact)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("sent");
    } catch {
      setStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 px-6 sm:px-12 lg:px-24 py-20">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Have questions, ideas, or partnership inquiries? Let’s connect and
          build the next phase of The TrutHz together.
        </p>
      </MotionDiv>

      {/* Contact Form */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00c6ff] transition"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ff0055] transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black border border-gray-700 text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#ffaa00] transition resize-none"
              placeholder="Tell us how we can help..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
              status === "sent"
                ? "bg-[#00c6ff] text-black"
                : "bg-[#ff0055] hover:bg-[#ff2266] text-white"
            }`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent!"
              : "Send Message"}
          </button>
        </form>
      </MotionDiv>

      {/* Contact Info / Footer */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-24"
      >
        <p className="text-gray-500 text-sm">
          For partnerships or media inquiries:{" "}
          <a
            href="mailto:connect@thetruthz.live"
            className="text-[#00c6ff] hover:underline"
          >
            connect@thetruthz.live
          </a>
        </p>
      </MotionDiv>
    </div>
  );
};

export default ContactPage;
