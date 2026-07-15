import Container from "../ui/Container";
import FeatureCard from "./FeatureCard";

const benefits = [
  {
    icon: "📖",
    title: "Step-by-Step Explanations",
    description:
      "Learn every concept with simple explanations instead of memorizing code.",
  },
  {
    icon: "🐛",
    title: "Smart Debugging",
    description:
      "Understand why your code failed and learn how to fix it confidently.",
  },
  {
    icon: "💡",
    title: "Honest Feedback",
    description:
      "Receive practical suggestions that improve your coding skills over time.",
  },
  {
    icon: "🎯",
    title: "Personalized Learning",
    description:
      "Whether you're a beginner or experienced developer, Lumina adapts to your pace.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24" id="why-lumina">
      <Container>
        <h2 className="text-5xl w-fit max-w-3xl font-bold text-white   mx-auto text-center">
          Why Students Love Learning with Lumina AI{" "}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-7 text-gray-400">
          Learn with confidence through personalized guidance, clear
          explanations, and practical coding support every step of the way.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          {benefits.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
