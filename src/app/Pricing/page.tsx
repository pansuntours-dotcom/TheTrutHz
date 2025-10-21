"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function PricingPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Pricing Plans</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        Choose a plan that fits your needs. All plans give you full access to
        The TrutHz platform with transparent pricing and no hidden fees.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Basic</h2>
          <p className="text-gray-400 mb-4">$9 / month</p>
          <p className="text-gray-400 mb-6">Essential tools for individuals</p>
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded">
            Choose
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Pro</h2>
          <p className="text-gray-400 mb-4">$29 / month</p>
          <p className="text-gray-400 mb-6">Advanced features for professionals</p>
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded">
            Choose
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Enterprise</h2>
          <p className="text-gray-400 mb-4">Custom pricing</p>
          <p className="text-gray-400 mb-6">Full solutions for organizations</p>
          <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </MotionSection>
  );
}
