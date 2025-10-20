"use client";

import React from "react";
import AdminLayout from "@/components/AdminLayout";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default function AdminPage() {
  return (
    <AdminLayout>
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">Manage content, analytics, and settings.</p>
      </MotionDiv>

      {/* Example content cards */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
          <p className="text-sm text-gray-500">Users</p>
          <p className="text-2xl font-semibold text-gray-800 mt-2">1,248</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition">
          <p className="text-sm text-gray-500">Posts</p>
          <p className="text-2xl font-semibold text-gray-800 mt-2">236</p>
        </div>
      </MotionDiv>
    </AdminLayout>
  );
}
