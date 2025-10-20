"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Hero Section */}
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your content, analytics, and platform settings.
        </p>
      </MotionDiv>

      {/* Analytics Cards */}
      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {[
          { label: "Users", value: "1,248" },
          { label: "Posts", value: "236" },
          { label: "Revenue", value: "$4,720" },
          { label: "Growth", value: "+12%" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-800 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </MotionDiv>
    </main>
  );
}
