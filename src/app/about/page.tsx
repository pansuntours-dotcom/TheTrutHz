"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4">About The TrutHz</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering people with knowledge, truth, and tools for independent thinking.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          The TrutHz is a modern platform dedicated to transparency, education, and digital empowerment.
          We aim to simplify complex topics, promote authenticity, and connect people through truth.
        </p>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "Transparency",
            text: "We believe in open and honest information without distortion.",
          },
          {
            title: "Innovation",
            text: "Using cutting-edge technology to empower communities through knowledge.",
          },
          {
            title: "Integrity",
            text: "Truth is our foundation — we value honesty above all else.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
