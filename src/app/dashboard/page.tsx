"use client";

import React from "react";
import MotionDiv from "@/components/Motion";

export default function DashboardPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 p-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Dashboard</h1>
      {/* Dashboard content goes here */}
    </MotionDiv>
  );
}
