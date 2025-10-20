// src/app/about/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

// Use motion.div directly — no manual casting, avoids Netlify TS errors
const MotionDiv = motion.div;

// Replace with your logo
const logoUrl = "/logo.png";

// Stripe pricing plans (replace priceId with your actual Stripe Price IDs)
const pricingPlans = [
  {
    name: "Basic",
    price: "$9/mo",
    priceId: "price_1ExampleBasic",
    features: ["Access to standard content", "Weekly newsletter"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    priceId: "price_1ExamplePro",
    features: ["Everything in Basic", "Exclusive insights", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    priceId: "price_1ExampleEnterprise",
    features: ["All Pro features", "Custom solutions", "Dedicated account manager"],
  },
];

const AboutPage: React.FC = () => {
  // Stripe checkout handler
  const handleSubscribe = async (priceId: string) => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={logoUrl} alt="The TrutHz Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
        <h1 className="text-4xl font-bold mb-4 text-[#1E40AF]">About The TrutHz</h1>
        <p className="text-lg text-gray-600">
          Welcome to The TrutHz — your trusted platform for accurate and insightful information.
        </p>
      </MotionDiv>

      {/* Mission Section */}
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#F59E0B]">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At The TrutHz, our mission is to provide a transparent, reliable, and innovative platform that empowers users to discover the truth in every context.
        </p>
      </MotionDiv>

      {/* Team Section */}
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold mb-4 text-[#1E40AF]">Meet the Team</h2>
        <p className="text-gray-700 leading-relaxed">
          Our team is composed of passionate individuals from diverse backgrounds, all committed to delivering trustworthy content.
        </p>
      </MotionDiv>

      {/* Legal Disclaimers Section */}
      <MotionDiv
        className="mb-12 p-6 bg-gray-50 rounded border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#F59E0B]">Legal Disclaimers & Disclosures</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          All content provided on The TrutHz is for informational purposes only. The platform does not constitute legal, financial, or professional advice. Users are responsible for verifying information independently. By using this platform, you acknowledge and agree to our terms of service and privacy policy.
        </p>
      </MotionDiv>

      {/* Call to Action Section */}
      <MotionDiv
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#1E40AF]">Join Us</h2>
        <p className="text-gray-700 mb-6">
          Stay informed and be part of the movement toward transparency.
        </p>
        <button className="bg-[#1E40AF] text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </MotionDiv>

      {/* Pricing Section */}
      <MotionDiv
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[#F59E0B]">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <MotionDiv
              key={plan.name}
              className="border rounded-lg p-6 text-center shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 + idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-[#1E40AF]">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6 text-gray-700 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button
                className="bg-[#1E40AF] text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                onClick={() => handleSubscribe(plan.priceId)}
              >
                Subscribe
              </button>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </main>
  );
};

export default AboutPage;
