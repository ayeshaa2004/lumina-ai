"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FaqItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:border-indigo-500/40">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        {/* Chevron */}
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="leading-7 text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
}
