"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      {/* Hero Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">Legal & Disclaimers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please read the following carefully to understand your rights and
          responsibilities when using The TrutHz platform.
        </p>
      </MotionDiv>

      {/* Terms of Service */}
      <MotionDiv
        className="mb-16 bg-white rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By using The TrutHz, you agree to comply with all applicable laws and
          regulations. You must not use the platform for illegal purposes or
          to distribute harmful content.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to suspend or terminate accounts that violate
          these terms without prior notice.
        </p>
      </MotionDiv>

      {/* Privacy Policy */}
      <MotionDiv
        className="mb-16 bg-white rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We respect your privacy. Any personal information collected is
          stored securely and is never sold to third parties. You may request
          access or deletion of your data at any time.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Cookies are used to improve user experience. You can control
          cookies via your browser settings.
        </p>
      </MotionDiv>

      {/* Disclaimer */}
      <MotionDiv
        className="mb-16 bg-white rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          The TrutHz platform provides information for general purposes only.
          We do not guarantee the accuracy or completeness of any content and
          are not liable for any errors, omissions, or outcomes resulting from
          use of the platform.
        </p>
      </MotionDiv>
    </main>
  );
}
