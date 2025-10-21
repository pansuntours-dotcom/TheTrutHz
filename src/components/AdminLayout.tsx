"use client";

import React from "react";
import { MotionNav } from "@/components/MotionDiv";

interface AdminLayoutProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  sidebarVariants: any;
}

export default function AdminLayout({ children, sidebarOpen, sidebarVariants }: AdminLayoutProps) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <MotionNav
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        animate={sidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {/* Sidebar content goes here */}
      </MotionNav>

      {/* Main content */}
      <main className="flex-1 ml-64">{children}</main>
    </div>
  );
}
