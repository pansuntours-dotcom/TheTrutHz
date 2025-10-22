"use client";

import React from "react";
import MotionDiv from "@/components/Motion";

export default function DashboardPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 min-h-screen bg-gray-900 text-gray-100"
    >
      <h1 className="text-3xl font-bold mb-4 text-primary">Dashboard</h1>
      <p className="text-gray-400">Welcome to your dashboard!</p>
    </MotionDiv>
  );
}
