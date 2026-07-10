"use client";

import { useState } from "react";
import ChatHeader from "@/app/components/chat/ChatHeader";
import ChatMessages from "@/app/components/chat/ChatMessage";
import ChatInput from "@/app/components/chat/ChatInput";
import Sidebar from "@/app/components/chat/Sidebar";
import { Message } from "../types/chat";
import { typeText } from "../lib/typeText";

export default function ChatPage() {
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
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
  ]);

  async function handleSend(content: string) {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content,
      },
    ]);

    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: content,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "",
        },
      ]);

      await typeText(data.reply, (currentText) => {
        setMessages((prev) => {
          const updated = [...prev];

          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: currentText,
          };

          return updated;
        });
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }
  return (
    <div>
      <div className="flex h-screen bg-black">
        <Sidebar />

        <main className="flex flex-1 flex-col">
          <ChatHeader />

          <ChatMessages messages={messages} isTyping={isTyping} />

          <ChatInput handleSend={handleSend} />
        </main>
      </div>
    </div>
  );
}
