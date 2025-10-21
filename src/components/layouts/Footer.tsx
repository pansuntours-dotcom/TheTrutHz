"use client";

import React from "react";
import { MotionDiv } from "../MotionDiv";

const Footer: React.FC = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-700 bg-gray-900 text-gray-300 py-10 mt-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <h2 className="text-xl font-semibold text-white">The TrutHz</h2>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The TrutHz is a platform dedicated to authentic, unfiltered media
              that inspires real conversations and change.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-indigo-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="hover:text-indigo-400 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-indigo-400 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6"
        >
          © {new Date().getFullYear()} The TrutHz. All rights reserved.
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Footer;
