"use client";

import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function PricingPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center px-6"
    >
      <h1 className="text-4xl font-bold text-primary mt-20 mb-10">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div className="border border-gray-700 p-8 rounded-xl bg-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-4">Starter</h2>
          <p className="text-gray-400 mb-6">$9 / month</p>
          <ul className="space-y-2 mb-6 text-gray-400">
            <li>Access to core features</li>
            <li>Basic analytics</li>
            <li>Email support</li>
          </ul>
          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-accent transition">
            Get Started
          </button>
        </div>

        <div className="border border-primary p-8 rounded-xl bg-gray-800 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary">Pro</h2>
          <p className="text-gray-400 mb-6">$29 / month</p>
          <ul className="space-y-2 mb-6 text-gray-400">
            <li>Everything in Starter</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
          </ul>
          <button className="w-full py-3 bg-accent text-white rounded-lg hover:bg-primary transition">
            Upgrade
          </button>
        </div>

        <div className="border border-gray-700 p-8 rounded-xl bg-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
          <p className="text-gray-400 mb-6">Custom</p>
          <ul className="space-y-2 mb-6 text-gray-400">
            <li>Tailored solutions</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-accent transition">
            Contact Us
          </button>
        </div>
      </div>
    </MotionDiv>
  );
}
