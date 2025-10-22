"use client";

import { MotionDiv } from "@/components/Motion";

export default function PrivacyPolicyPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy</h1>

      <p className="text-lg text-gray-400 max-w-3xl mb-6 leading-relaxed">
        At The TrutHz, your privacy is our priority. We are committed to protecting your
        personal information and maintaining transparency about how we use it.
      </p>

      <div className="max-w-3xl text-gray-400 text-left space-y-4">
        <p>
          <strong>1. Information We Collect:</strong>  
          We collect only the data necessary to provide you with a seamless and personalized
          experience — such as account details and preferences.
        </p>

        <p>
          <strong>2. How We Use Your Data:</strong>  
          Your information is used solely to improve your user experience, ensure security,
          and communicate updates about The TrutHz.
        </p>

        <p>
          <strong>3. Your Rights:</strong>  
          You have full control over your data. You may request updates, corrections, or
          deletion at any time.
        </p>

        <p>
          <strong>4. Contact Us:</strong>  
          If you have privacy concerns or requests, please reach out via our{" "}
          <a href="/Contact" className="text-primary hover:underline">Contact page</a>.
        </p>
      </div>
    </MotionDiv>
  );
}
