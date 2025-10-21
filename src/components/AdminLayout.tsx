// src/components/AdminLayout.tsx

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Props for AdminLayout
type AdminLayoutProps = {
  children: ReactNode;      // Main content or sidebar content
  sidebarOpen: boolean;     // True if sidebar is open
};

// Framer Motion animation variants for sidebar
const sidebarVariants = {
  open: {
    x: 0,                    // Sidebar slides in from left
    transition: { type: "spring", stiffness: 300 },
  },
  closed: {
    x: -300,                 // Sidebar slides out to left
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function AdminLayout({ children, sidebarOpen }: AdminLayoutProps) {
  return (
    <div className="flex">
      
      {/* ===================== SIDEBAR ===================== */}
      <motion.nav
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        animate={sidebarOpen ? "open" : "closed"}  // Control open/closed state
        variants={sidebarVariants}                  // Apply motion variants
      >
        {/* Sidebar content goes here */}
        {children}
      </motion.nav>
      
      {/* ===================== MAIN CONTENT ===================== */}
      <div className="flex-1 ml-64 p-6">
        {/* Your main page content goes here */}
        {/* Example: <Dashboard /> or <AdminPanel /> */}
      </div>
    </div>
  );
}
