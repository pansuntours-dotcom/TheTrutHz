"use client";

import React from "react";
import MotionDiv from "@/components/MotionDiv";

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-gray-100 px-6 sm:px-12 lg:px-24 py-20">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Legal Center
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Transparency and accountability are core to The TrutHz. Review our
          terms, policies, and disclaimers below.
        </p>
      </MotionDiv>

      {/* Terms of Service */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold text-[#ff0055] mb-4">
          Terms of Service
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          By accessing or using The TrutHz platform, you agree to comply with
          our terms and community guidelines. The TrutHz reserves the right to
          update, modify, or suspend content and services at any time without
          prior notice.
        </p>
        <p className="text-gray-400 leading-relaxed">
          You agree not to use the platform for any unlawful purpose, to
          infringe on intellectual property rights, or to disrupt the
          experience of others. Violation of these terms may result in
          suspension or termination of access.
        </p>
      </MotionDiv>

      {/* Privacy Policy */}
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mb-16 bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold text-[#00c6ff] mb-4">
          Privacy Policy
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          We respect your privacy. The TrutHz collects minimal personal data,
          primarily used to improve user experience and maintain platform
          security. We never sell or trade your information with third parties.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Data may be processed by trusted partners to enable payments,
          analytics, or authentication. Users can request data deletion or
          updates by contacting{" "}
          <a
            href="mailto:privacy@thetruthz.live"
            className="text-[#00c6ff] hover:underline"
          >
            privacy@thetruthz.live
          </a>
          .
        </p>
      </MotionDiv>

      {/* Disclaimers */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold text-[#ffaa00] mb-4">
          Disclaimers
        </h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          All information and opinions shared on The TrutHz are provided for
          informational and educational purposes only. Nothing on this platform
          constitutes professional, legal, medical, or financial advice.
        </p>
        <p className="text-gray-400 leading-relaxed">
          The TrutHz makes no guarantees regarding accuracy, completeness, or
          reliability of content. Users assume full responsibility for how they
          interpret and act upon the information provided.
        </p>
      </MotionDiv>

      {/* Footer */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-24"
      >
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} The TrutHz. All rights reserved.{" "}
          <a
            href="/contact"
            className="text-[#00c6ff] hover:underline ml-1"
          >
            Contact Us
          </a>
        </p>
      </MotionDiv>
    </div>
  );
};

export default LegalPage;
