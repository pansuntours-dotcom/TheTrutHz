// src/components/AdminLayout.tsx

import { ReactNode, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type AdminLayoutProps = {
  children: ReactNode;      // Main page content
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  // State to control sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Framer Motion variants for sidebar animation
  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300 } },
    closed: { x: -300, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="flex">
      {/* ===================== SIDEBAR ===================== */}
      <motion.nav
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        {...({} as HTMLMotionProps<HTMLElement>)} // Fixes TypeScript error
      >
        {/* Sidebar content */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-4 px-4 py-2 bg-gray-700 rounded"
        >
          Toggle Sidebar
        </button>
        <ul>
          <li className="py-2">Dashboard</li>
          <li className="py-2">Settings</li>
          <li className="py-2">Profile</li>
        </ul>
      </motion.nav>

      {/* ===================== MAIN CONTENT ===================== */}
      <div className="flex-1 ml-64 p-6">
        {children}
      </div>
    </div>
  );
}
