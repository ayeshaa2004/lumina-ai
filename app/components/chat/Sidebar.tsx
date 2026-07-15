import { Chat } from "@/app/types/chat";
import Link from "next/link";

type SidebarProps = {
  chats: Chat[];
  currentChatId: string;
  onSelectChat: (chatId: string) => void;
  onNewChat: () => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

export default function Sidebar({
  chats,
  onSelectChat,
  currentChatId,
  onNewChat,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarProps) {
  return (
    <aside
      className={`
  w-72
  border-r
  border-white/10
  bg-zinc-900
  transition-transform
  duration-300
  fixed lg:relative
top-0
left-0
h-screen lg:h-auto
z-50
  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0
`}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 p-6">
          <div className="flex  ">
            <div>
              <h2 className="text-xl font-bold text-white">
                ✨ <Link href="/">Lumina AI</Link>
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                AI Programming Mentor
              </p>
            </div>
            <div>
              <button
                className="block lg:hidden absolute right-5 top-5 cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
          </div>
          <div className="p-4">
            <button
              className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500"
              onClick={onNewChat}
            >
              + New Chat
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Recent Chats
          </h3>

          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${currentChatId === chat.id ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"} `}
                onClick={() => onSelectChat(chat.id)}
              >
                💬 {chat.title}
              </button>
            ))}
          </div>
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
    </aside>
  );
}
