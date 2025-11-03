// src/app/Pricing/page.tsx
"use client";

import { MotionSection } from "@/components/MotionDiv";

export default function PricingPage() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Pricing</h1>
      {/* Your pricing content */}
    </MotionSection>
  );
}
