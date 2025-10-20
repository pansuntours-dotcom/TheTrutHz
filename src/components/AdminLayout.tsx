"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const sidebarVariants = {
  open: { x: 0, transition: { type: "spring", stiffness: 300 } },
  closed: { x: -250, transition: { type: "spring", stiffness: 300 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <motion.nav
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <h2 className="text-xl font-bold mb-8">Admin Menu</h2>
        <ul className="space-y-4">
          {["Dashboard", "Users", "Posts", "Settings"].map((item, i) => (
            <li key={i} className="hover:text-[#00c6ff] transition cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mt-12 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
      </motion.nav>

      {/* Main content */}
      <div className={`flex-1 ml-64 p-8`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()} // change this key per route
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
