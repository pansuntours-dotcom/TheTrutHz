"use client";

import { MotionDiv } from "@/components/Motion";

export default function TermsOfServicePage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Terms of Service</h1>

      <p className="text-lg text-gray-400 max-w-3xl mb-6 leading-relaxed">
        Welcome to <strong>The TrutHz</strong>. By accessing or using our platform, you
        agree to the following terms and conditions. Please read them carefully.
      </p>

      <div className="max-w-3xl text-gray-400 text-left space-y-4">
        <p>
          <strong>1. Acceptance of Terms:</strong>  
          By using The TrutHz, you confirm that you are at least 18 years old and agree
          to comply with all applicable laws and regulations.
        </p>

        <p>
          <strong>2. Use of Platform:</strong>  
          You agree not to misuse or exploit the platform for unlawful, harmful, or
          misleading purposes. We reserve the right to restrict or terminate access
          for violations.
        </p>

        <p>
          <strong>3. Content Ownership:</strong>  
          All original materials, including design, branding, and technology, are
          owned by The TrutHz. Users retain ownership of their own submitted content
          but grant us permission to display it within the platform.
        </p>

        <p>
          <strong>4. Limitation of Liability:</strong>  
          The TrutHz is provided “as is.” We make no guarantees about uptime, accuracy,
          or performance and are not liable for damages arising from use of the site.
        </p>

        <p>
          <strong>5. Changes to Terms:</strong>  
          We may update these Terms of Service from time to time. Continued use of the
          platform indicates acceptance of the latest version.
        </p>

        <p>
          <strong>6. Contact:</strong>  
          Questions about these terms? Reach us via our{" "}
          <a href="/Contact" className="text-primary hover:underline">Contact page</a>.
        </p>
      </div>
    </MotionDiv>
  );
}
