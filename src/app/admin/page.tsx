"use client";

import React, { useState } from "react";
import MotionDiv from "@/components/MotionDiv";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: "Users", value: "1,248" },
    { label: "Posts", value: "236" },
    { label: "Revenue", value: "$4,720" },
    { label: "Growth", value: "+12%" },
  ];

  const menuItems = ["Dashboard", "Users", "Posts", "Settings"];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <MotionDiv
        className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20"
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-xl font-bold mb-8">Admin Menu</h2>
        <ul className="space-y-4">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="hover:text-[#00c6ff] transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mt-12 px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
        >
          {sidebarOpen ? "Collapse" : "Expand"}
        </button>
      </MotionDiv>

      {/* Main content */}
      <main className={`flex-1 ml-64 p-8`}>
        {/* Page header */}
        <MotionDiv
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage content, analytics, and platform settings.
          </p>
        </MotionDiv>

        {/* Stats cards */}
        <MotionDiv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {stats.map((stat, i) => (
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
    </div>
  );
}
