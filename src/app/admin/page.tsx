"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/AdminLayout";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300 } },
    closed: { x: -300, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <AdminLayout sidebarOpen={sidebarOpen} sidebarVariants={sidebarVariants}>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-primary">Admin Dashboard</h1>
        <p className="text-gray-400 mb-6">
          Manage users, content, and settings from here.
        </p>
        {/* Add admin controls/components here */}
      </div>
    </AdminLayout>
  );
}
