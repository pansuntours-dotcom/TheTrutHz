"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Our Services</h1>
      <p className="text-lg text-gray-400 max-w-3xl text-center mb-10">
        We offer innovative digital solutions and creative strategies to help
        brands and creators tell their stories with impact.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Content Creation
          </h2>
          <p className="text-gray-400">
            Professional writing, video production, and media design crafted to
            inspire and engage.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Brand Strategy
          </h2>
          <p className="text-gray-400">
            Build an identity that aligns with your purpose and connects with
            your audience.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3 text-primary">
            Digital Marketing
          </h2>
          <p className="text-gray-400">
            Data-driven campaigns and content distribution that boost reach and
            engagement.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
