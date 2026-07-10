"use client";

import { useState } from "react";

type ChatInputProps = {
  handleSend: (content: string) => void;
};
export default function ChatInput({
  handleSend,
}: ChatInputProps) {
  
  const [input, setInput] = useState("");

  function onSend() {
    if (input.trim() === "") return;

    handleSend(input);
    setInput("");
  }
  return (
    <div className="border-t border-white/10 bg-black p-6">
      <div className="mx-auto flex max-w-4xl items-center gap-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-5 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-indigo-500"
        />
        <button
          onClick={onSend}
          disabled={input.trim() === ""}
          className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}
