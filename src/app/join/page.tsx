'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function JoinPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Join TheTrutHz</h1>
      <p className="text-lg max-w-xl text-center mb-4">
        Become a member to access exclusive resonance content, AR experiences,
        and community insights.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md mt-4">
        Join Now
      </button>
    </motion.div>
  );
}
