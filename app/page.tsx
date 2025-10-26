import { MotionDiv } from "../components/Motion";

export default function HomePage() {
  return (
    <MotionDiv
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to The TrutHz</h1>
      <p className="text-lg text-gray-700">Your Next.js + Tailwind + Framer Motion setup is ready!</p>
    </MotionDiv>
  );
}
