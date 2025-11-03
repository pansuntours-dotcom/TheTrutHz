// Example: src/app/Pricing/page.tsx
"use client";

import { MotionSection, fadeInUp } from "@/components/MotionDiv";

export default function PricingPage() {
  return (
    <MotionSection {...fadeInUp}>
      <h1>Pricing</h1>
      {/* Other content */}
    </MotionSection>
  );
}
