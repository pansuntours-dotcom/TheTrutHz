"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";
import Link from "next/link";

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      {/* Hero / Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white">
          The TrutHz Admin
        </h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Control your content, oversee engagement, and keep your truth in sync.
        </p>
      </MotionDiv>

      {/* Dashboard Cards */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
      >
        <div className="p-6 bg-gradient-to-br from-[#111] to-[#1c1c1c] border border-gray-800 rounded-xl text-center hover:border-[#ff0055] transition-all">
          <h2 className="text-2xl font-semibold text-white">Posts</h2>
          <p className="text-gray-400 mt-1">
            Create, edit, and publish articles to your platform.
          </p>
          <Link
            href="/admin/posts"
            className="inline-block mt-5 bg-[#ff0055] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#ff2266] transition"
          >
            Manage Posts
          </Link>
        </div>

        <div className="p-6 bg-gradient-to-br from-[#111] to-[#1c1c1c] border border-gray-800 rounded-xl text-center hover:border-[#00c6ff] transition-all">
          <h2 className="text-2xl font-semibold text-white">Users</h2>
          <p className="text-gray-400 mt-1">
            Monitor user activity and community engagement.
          </p>
          <Link
            href="/admin/users"
            className="inline-block mt-5 bg-[#00c6ff] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#33d3ff] transition"
          >
            View Users
          </Link>
        </div>

        <div className="p-6 bg-gradient-to-br from-[#111] to-[#1c1c1c] border border-gray-800 rounded-xl text-center hover:border-[#ffaa00] transition-all">
          <h2 className="text-2xl font-semibold text-white">Settings</h2>
          <p className="text-gray-400 mt-1">
            Update branding, pricing, and legal policies.
          </p>
          <Link
            href="/admin/settings"
            className="inline-block mt-5 bg-[#ffaa00] text-black px-5 py-2 rounded-lg font-medium hover:bg-[#ffbb33] transition"
          >
            Configure
          </Link>
        </div>
      </MotionDiv>

      {/* Recent Activity */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-[#101010] to-[#151515] border border-gray-800 rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-white mb-6">
          Recent Activity
        </h2>
        <ul className="space-y-4 text-gray-300">
          <li>✅ New post <strong>“The Future of Truth”</strong> published.</li>
          <li>🧠 User <strong>Paul</strong> updated pricing in Settings.</li>
          <li>⚙️ System sync completed successfully at 09:45 AM.</li>
        </ul>
      </MotionDiv>
    </div>
  );
};

export default AdminPage;
