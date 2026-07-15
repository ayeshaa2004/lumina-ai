import FAQItem from "./FAQItem";

 const faqs = [
  {
    question: "What is Lumina AI?",
    answer:
      "Lumina AI is an AI-powered programming mentor that helps you understand coding concepts, debug errors, and learn web development through interactive conversations.",
  },
  {
    question: "Is Lumina AI free to use?",
    answer:
      "Yes! Lumina AI is currently free while we continue improving the platform.",
  },
  {
    question: "Does Lumina AI save my chat history?",
    answer:
      "Yes. Chats are stored locally in your browser, allowing you to continue your learning sessions anytime.",
  },
  {
    question: "Can beginners use Lumina AI?",
    answer:
      "Absolutely! Lumina AI is designed for learners of all skill levels.",
  },
  {
    question: "Which programming languages does Lumina AI support?",
    answer:
      "Lumina AI supports JavaScript, TypeScript, React, Next.js, HTML, CSS, Python, C++, Java, SQL, and more.",
  },
  {
    question: "Does Lumina AI replace coding practice?",
    answer:
      "No. Lumina AI is a mentor that guides your learning, but regular coding practice is essential for growth.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-gray-400">
          Everything you need to know about learning with Lumina AI.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.answer}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}