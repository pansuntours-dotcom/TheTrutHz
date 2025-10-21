"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>

      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        Have questions, suggestions, or collaboration ideas? We’d love to hear
        from you. Fill out the form below or reach out through our social
        platforms.
      </p>

      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}
