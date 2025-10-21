"use client";

import React from "react";
import { motion } from "framer-motion";

interface AdminLayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  sidebarVariants: any;
}

export default function AdminLayout({ children, sidebarOpen, sidebarVariants }: AdminLayoutProps) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <motion.nav
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
      >
        {/* Sidebar content */}
        <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      </motion.nav>

      {/* Main content */}
      <div className="flex-1 ml-64 p-6">
        {children}
      </div>
    </div>
  );
}
