// src/components/AdminLayout.tsx

import { ReactNode, useState } from "react";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* ===================== SIDEBAR ===================== */}
      {sidebarOpen && (
        <div className="bg-gray-900 text-gray-100 w-64 p-6 fixed h-full z-20">
          {/* Sidebar content */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-4 px-4 py-2 bg-gray-700 rounded"
          >
            Toggle Sidebar
          </button>
          <ul>
            <li className="py-2">Dashboard</li>
            <li className="py-2">Settings</li>
            <li className="py-2">Profile</li>
          </ul>
        </div>
      )}

      {/* ===================== MAIN CONTENT ===================== */}
      <div className={`flex-1 p-6 ${sidebarOpen ? "ml-64" : ""}`}>
        {children}
      </div>
    </div>
  );
}
