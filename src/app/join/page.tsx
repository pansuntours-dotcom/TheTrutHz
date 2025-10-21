"use client";

import Link from "next/link";
import MotionDiv from "@/components/MotionDiv";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 sm:px-12 lg:px-24 py-20">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text">
          JOIN THE
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-accent">
          TRUTHZ MOVEMENT
        </h2>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12"
      >
        <p className="mb-6">
          The TrutHz is more than a platform — it’s a community of creators,
          thinkers, and changemakers who value authenticity, truth, and
          innovation. By joining us, you become part of a movement shaping the
          future of open expression and creative freedom.
        </p>
        <p>
          Whether you’re an artist, journalist, builder, or simply someone who
          values transparency and depth — there’s a place for you here.
        </p>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        <Link
          href="/signup"
          className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Become a Member
        </Link>

        <div className="mt-8 text-gray-600 text-sm">
          Already part of the movement?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Log in here
          </Link>
        </div>
      </MotionDiv>
    </main>
  );
}
