const messages = [
  {
    role: "assistant",
    content: "Hi! I'm Lumina AI. How can I help you today?",
  },
  {
    role: "user",
    content: "Can you explain React Context API?",
  },
  {
    role: "assistant",
    content:
      "Of course! React Context API lets you share data between components without passing props through every level.",
  },
];

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-2xl p-5 ${
              message.role === "user"
                ? "ml-auto max-w-xl bg-indigo-600 text-white"
                : "mr-auto max-w-3xl bg-zinc-800 text-gray-100"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}
