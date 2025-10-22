"use client";

import { MotionDiv } from "@/components/Motion";

export default function DisclaimerPage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-100 px-6 text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-primary">Disclaimer</h1>

      <p className="text-lg text-gray-400 max-w-3xl mb-6 leading-relaxed">
        The TrutHz platform provides information and opinions intended for educational
        and informational purposes only. We do not guarantee the accuracy, completeness,
        or reliability of any content.
      </p>

      <div className="max-w-3xl text-gray-400 text-left space-y-4">
        <p>
          <strong>1. No Professional Advice:</strong>  
          Content shared on The TrutHz should not be taken as professional, financial,
          medical, or legal advice. Users should consult qualified professionals for
          specific guidance.
        </p>

        <p>
          <strong>2. Opinions and Views:</strong>  
          Views expressed by contributors, users, or partners do not necessarily reflect
          those of The TrutHz or its team.
        </p>

        <p>
          <strong>3. External Links:</strong>  
          The TrutHz may contain links to third-party websites. We are not responsible
          for their content, accuracy, or policies.
        </p>

        <p>
          <strong>4. Limitation of Liability:</strong>  
          The TrutHz shall not be held liable for any losses or damages resulting from
          reliance on platform content or user-generated materials.
        </p>

        <p>
          <strong>5. Updates:</strong>  
          This disclaimer may be updated periodically. Continued use of the platform
          implies acceptance of the current disclaimer.
        </p>
      </div>
    </MotionDiv>
  );
}
