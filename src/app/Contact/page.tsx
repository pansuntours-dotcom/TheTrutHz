"use client";

import React from "react";
import { MotionSection } from "@/components/MotionDiv";

export default function ContactPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        We'd love to hear from you! Fill out the form below and we'll get back to you.
      </p>
      {/* Contact form component here */}
    </MotionSection>
  );
}
