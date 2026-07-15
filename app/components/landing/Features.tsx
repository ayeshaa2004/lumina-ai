import Container from "../ui/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🐛",
    title: "Smart Debugging",
    description:
      "Find bugs quickly with clear explanations instead of confusing error messages.",
  },
  {
    icon: "📚",
    title: "Learn While You Code",
    description:
      "Understand why your code works with beginner-friendly explanations.",
  },
  {
    icon: "💡",
    title: "Honest Code Reviews",
    description:
      "Receive practical feedback to improve readability, performance, and best practices.",
  },
  {
    icon: "⚡",
    title: "AI Study Assistant",
    description:
      "Learn concepts faster with examples, summaries, and personalized guidance.",
  },
  {
    icon: "🛠",
    title: "Multi-Language Support",
    description:
      "Get help with JavaScript, React, Next.js, Python, Java, C++, and more.",
  },
  {
    icon: "🎯",
    title: "Personalized Guidance",
    description:
      "Whether you're a student or professional, Lumina adapts to your learning journey.",
  },
];

export default function Features() {
  return (
    <section className="py-24" id="features">
      <Container>
        <h2 className="text-5xl w-fit max-w-3xl font-bold text-white   mx-auto text-center">
          Everything You Need to Learn, Build & Debug Faster
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-400">
          Whether you are learning your first programming language, building
          real-world projects, or fixing complex bugs, Lumina AI helps you code
          with confidence.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
