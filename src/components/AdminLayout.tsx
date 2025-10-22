"use client";

import { ReactNode } from "react";
import { MotionDiv } from "./Motion";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-gray-900 text-gray-100"
    >
      <header className="p-4 bg-gray-800 text-center text-lg font-semibold">
        Admin Dashboard
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} The TrutHz
      </footer>
    </MotionDiv>
  );
}
