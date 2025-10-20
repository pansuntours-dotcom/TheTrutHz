"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * A reusable motion wrapper with correct typing for className and props.
 */
const MotionDiv = motion.div;

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Hero / Header Section */}
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Manage your content, analytics, and platform settings.
            </p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            + New Entry
          </button>
        </div>
      </MotionDiv>

      {/* Analytics Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
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

      {/* Content Management Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white rounded-xl shadow p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Recent Activity
        </h2>
        <ul className="divide-y divide-gray-200">
          {[
            { title: "New user registered", time: "2 hours ago" },
            { title: "Post ‘AI and Truth’ updated", time: "Yesterday" },
            { title: "Subscription payment received", time: "2 days ago" },
            { title: "Email campaign sent", time: "3 days ago" },
          ].map((item, i) => (
            <li key={i} className="py-4 flex justify-between items-center">
              <span className="text-gray-700">{item.title}</span>
              <span className="text-sm text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </main>
  );
}
