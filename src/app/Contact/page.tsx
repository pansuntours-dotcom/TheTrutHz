'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg max-w-xl text-center">
        Have a question or feedback about The TrutHz?  
        Reach out anytime and we’ll get back to you soon.
      </p>

      <form className="mt-8 flex flex-col w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="py-3 bg-indigo-600 rounded font-semibold hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
