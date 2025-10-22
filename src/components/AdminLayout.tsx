"use client";

import React, { ReactNode } from "react";
import MotionDiv from "@/components/Motion";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="min-h-screen bg-gray-900 text-gray-100"
    >
      <header className="p-6 bg-gray-800 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </header>

      <main className="container mx-auto p-6">{children}</main>
    </MotionDiv>
  );
}
