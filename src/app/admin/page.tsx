"use client";

import AdminLayout from "@/components/AdminLayout";
import { MotionDiv } from "@/components/Motion";

export default function AdminPage() {
  return (
    <AdminLayout>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 bg-gray-800 rounded-lg shadow-lg text-gray-100"
      >
        <h1 className="text-3xl font-bold mb-4 text-primary">Admin Panel</h1>
        <p>Welcome to your admin dashboard. Manage site content and settings here.</p>
      </MotionDiv>
    </AdminLayout>
  );
}
