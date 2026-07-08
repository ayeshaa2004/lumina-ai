const chats = [
  "React Context API",
  "Next.js Routing",
  "TypeScript Basics",
  "Tailwind CSS",
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-zinc-900">
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-white">✨ Lumina AI</h2>

          <p className="mt-1 text-sm text-gray-400">AI Programming Mentor</p>
          <div className="p-4">
            <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500">
              + New Chat
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Recent Chats
            </h3>
          </div>
          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                💬 {chat}
              </button>
            ))}
          </div>
          <div className="border-t border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                A
              </div>

              <div>
                <p className="font-medium text-white">Ayesha</p>
                <p className="text-sm text-gray-400">AI Explorer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
