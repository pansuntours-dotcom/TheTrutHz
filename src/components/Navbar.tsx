"use client";

import Link from "next/link";
import { useState } from "react";
import { MotionDiv } from "./Motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-100 shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-primary">
          The TrutHz
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/about" className="hover:text-primary transition">About</Link>
          <Link href="/Contact" className="hover:text-primary transition">Contact</Link>
          <Link href="/admin" className="hover:text-primary transition">Admin</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
        >
          <span className="w-6 h-0.5 bg-gray-100"></span>
          <span className="w-6 h-0.5 bg-gray-100"></span>
          <span className="w-6 h-0.5 bg-gray-100"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-800 flex flex-col items-center space-y-3 py-4"
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary transition">About</Link>
          <Link href="/Contact" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Contact</Link>
          <Link href="/admin" onClick={() => setIsOpen(false)} className="hover:text-primary transition">Admin</Link>
        </MotionDiv>
      )}
    </MotionDiv>
  );
}
