"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">About The TrutHz</h1>
      <p className="text-lg text-gray-400 max-w-3xl text-center mb-6">
        The TrutHz is a digital platform designed to empower creators, thinkers,
        and changemakers by providing tools to share authentic perspectives with
        the world.
      </p>
      <p className="text-lg text-gray-400 max-w-3xl text-center">
        Our mission is to amplify truth, creativity, and community — blending
        storytelling, innovation, and purpose-driven content.
      </p>
    </motion.section>
  );
}
