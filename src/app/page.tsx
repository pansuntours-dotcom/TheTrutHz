"use client";

import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function HomePage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-5xl font-extrabold text-primary mb-6">Welcome to The TrutHz</h1>
      <p className="text-xl text-gray-400 text-center max-w-3xl">
        Empowering creators, communities, and clarity through open dialogue and creative innovation.
      </p>
    </MotionDiv>
  );
}
