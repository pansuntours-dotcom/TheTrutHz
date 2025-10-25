'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="min-h-screen flex flex-col bg-gray-50 p-6"
    >
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </header>
      <main className="flex-1">{children}</main>
    </motion.div>
  );
}
