// src/app/admin/page.tsx
"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-700">
          Manage users, content, and platform settings from here.
        </p>
      </MotionDiv>

      <MotionDiv
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">User Management</h2>
            <p className="text-gray-600">Add, edit, or remove platform users.</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="text-gray-600">Configure platform preferences and features.</p>
          </div>
        </div>
      </MotionDiv>
    </main>
  );
}
