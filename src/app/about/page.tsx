"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  const features = [
    {
      title: "Our Mission",
      description:
        "The TrutHz empowers individuals to uncover truth through community, creativity, and transparency. We believe in using technology to amplify authenticity and purpose.",
    },
    {
      title: "Our Vision",
      description:
        "To build a global platform where truth is shared freely, stories connect us, and knowledge shapes a more transparent and equitable future.",
    },
    {
      title: "Our Values",
      description:
        "Integrity, innovation, and inclusion guide everything we do. We aim to provide clarity, connection, and creative empowerment.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-secondary via-gray-900 to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white">About The TrutHz</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are redefining digital connection — inspiring authentic voices,
            real conversations, and meaningful collaboration.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="relative w-full h-64 md:h-96 mb-20 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/about-hero.jpg"
            alt="About The TrutHz"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h2>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Built for a Transparent Future
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The TrutHz isn’t just a platform — it’s a movement. We’re creating
            tools that help individuals and communities discover and share truth
            meaningfully.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
