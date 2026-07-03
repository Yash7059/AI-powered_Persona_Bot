// src/components/Hero.tsx
export default function Hero() {
  return (
    <div className="text-center mb-10 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <span className="text-gray-100">Meet Your </span>
        <span className="text-orange-500">AI Mentor</span>
      </h1>
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
        Choose from AI mentors inspired by different teaching styles and start
        learning through personalized conversations.
      </p>
    </div>
  );
}