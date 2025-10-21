"use client";

import React from "react";
import { MotionNav } from "@/components/MotionDiv";

interface AdminLayoutProps {
  sidebarOpen: boolean;
  sidebarVariants: any; // Replace with your actual variants type
  children: React.ReactNode;
}

export default function AdminLayout({
  sidebarOpen,
  sidebarVariants,
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex">
      {/* ===================== SIDEBAR ===================== */}
      <MotionNav
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {/* Sidebar content */}
      </MotionNav>

      {/* ===================== MAIN CONTENT ===================== */}
      <main className="flex-1 ml-64 p-6">{children}</main>
    </div>
  );
}
