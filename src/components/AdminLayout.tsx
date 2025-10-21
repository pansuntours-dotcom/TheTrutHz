"use client";

import React from "react";
import { MotionNav, MotionMain } from "@/components/Motion";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <MotionNav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-gray-800 p-4 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
      </MotionNav>

      <MotionMain
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-6"
      >
        {children}
      </MotionMain>
    </div>
  );
}
