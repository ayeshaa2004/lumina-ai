import ChatHeader from "@/app/components/chat/ChatHeader";
import ChatMessages from "@/app/components/chat/ChatMessage";
import ChatInput from "@/app/components/chat/ChatInput";
import Container from "@/app/components/ui/Container";
import Sidebar from "@/app/components/chat/Sidebar";

export default function ChatPage() {
  return (
    <div>
      <div className="flex h-screen bg-black">
        <Sidebar />

        <main className="flex flex-1 flex-col">
          <ChatHeader />

          <ChatMessages />

          <ChatInput />
        </main>
      </div>
    </div>
  );
}
