// src/app/dashboard/page.tsx
"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-700">
          Overview of your activity and analytics.
        </p>
      </MotionDiv>

      <MotionDiv
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Recent Activity</h2>
            <p className="text-gray-600">Track your recent actions on the platform.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Statistics</h2>
            <p className="text-gray-600">See your engagement and results over time.</p>
          </div>
        </div>
      </MotionDiv>
    </main>
  );
}
