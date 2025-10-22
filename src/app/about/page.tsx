"use client";

import { MotionDiv } from "@/components/Motion";

export default function AboutPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">About The TrutHz</h1>

      <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
        The TrutHz is a platform dedicated to uncovering and amplifying truth through
        innovation, media, and meaningful collaboration. We empower creators, thinkers,
        and communities to share their voices with transparency and impact.
      </p>

      <p className="text-gray-400 max-w-2xl leading-relaxed">
        Our mission is to blend technology and integrity — to build digital ecosystems
        that respect truth, creativity, and human connection. We believe in open dialogue,
        verified information, and the power of collective awareness.
      </p>
    </MotionDiv>
  );
}
