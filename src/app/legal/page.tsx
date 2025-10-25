'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
      <p className="text-lg max-w-2xl text-center mb-4">
        All content on TheTrutHz is for informational purposes only. By accessing
        this platform, you agree to our terms and conditions and privacy policies.
      </p>
      <ul className="text-left max-w-2xl list-disc list-inside">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
      </ul>
    </motion.div>
  );
}
