'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="text-lg max-w-xl text-center">
        Welcome to your dashboard. Manage your data, track your resonance, and
        explore your analytics here.
      </p>
    </motion.div>
  );
}
