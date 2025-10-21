"use client";

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Pricing Plans</h1>
      <p className="text-lg text-gray-400 max-w-2xl text-center mb-10">
        Choose a plan that fits your goals. Whether you're just starting out or
        scaling your creative business, we’ve got you covered.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">
        {[
          {
            title: "Starter",
            price: "$9/mo",
            features: [
              "Access to core features",
              "Basic analytics",
              "Email support",
            ],
          },
          {
            title: "Pro",
            price: "$29/mo",
            features: [
              "All Starter features",
              "Advanced tools",
              "Priority support",
            ],
          },
          {
            title: "Enterprise",
            price: "Custom",
            features: [
              "Full suite access",
              "Dedicated success manager",
              "Custom integrations",
            ],
          },
        ].map((plan) => (
          <motion.div
            key={plan.title}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-2xl font-semibold mb-3 text-primary">
              {plan.title}
            </h2>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
