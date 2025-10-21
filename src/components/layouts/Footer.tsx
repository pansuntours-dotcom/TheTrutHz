"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Logo + Description */}
        <motion.div
          {...({} as React.HTMLAttributes<HTMLDivElement>)} // ✅ Fix TypeScript
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-lg font-semibold text-white">The TrutHz</span>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          {...({} as React.HTMLAttributes<HTMLDivElement>)} // ✅ Fix TypeScript
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/docs" className="hover:text-white">Docs</a></li>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-white">Terms</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Social</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          {...({} as React.HTMLAttributes<HTMLDivElement>)} // ✅ Fix TypeScript
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6"
        >
          <p>© {new Date().getFullYear()} The TrutHz. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
