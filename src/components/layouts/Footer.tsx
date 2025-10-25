'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-900 text-white py-6 mt-auto text-center"
    >
      <p className="text-sm">
        © {new Date().getFullYear()} TheTrutHz — All rights reserved.
      </p>
    </motion.div>
  );
}
