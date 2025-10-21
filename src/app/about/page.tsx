"use client";

import React from "react";
import { MotionDiv } from "@/components/MotionDiv";

export default function AboutPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">About Us</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center">
        The TrutHz is a platform designed to amplify authentic voices and connect truth-driven creators with their audiences. Our mission is to inspire clarity, curiosity, and meaningful dialogue through technology and design.
      </p>
    </MotionDiv>
  );
}
