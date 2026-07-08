export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-black px-8 py-5">
      <div>
        <h1 className="text-2xl font-bold text-white">New Conversation</h1>

        <p className="mt-1 text-sm text-gray-400">
          Ask me anything about programming.
        </p>
      </div>

      <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white">
        Clear Chat
      </button>
    </header>
  );
}
