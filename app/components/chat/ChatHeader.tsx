type ChatHeaderProps = {
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export default function ChatHeader({ setIsSidebarOpen }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-black px-8 py-5">
      <div className="flex gap-6">
        <button
          className="block lg:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">New Conversation</h1>

          <p className="mt-1 text-sm text-gray-400">
            Ask me anything about programming.
          </p>
        </div>
      </div>

      <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white">
        Clear Chat
      </button>
    </header>
  );
}
