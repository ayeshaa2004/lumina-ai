"use client";
import { dummyChats } from "@/app/data/dummyChats";
import { useState, useEffect } from "react";
import ChatHeader from "@/app/components/chat/ChatHeader";
import ChatMessages from "@/app/components/chat/ChatMessage";
import ChatInput from "@/app/components/chat/ChatInput";
import Sidebar from "@/app/components/chat/Sidebar";
import { Chat } from "../types/chat";
import { typeText } from "../lib/typeText";

export default function ChatPage() {
  const [isTyping, setIsTyping] = useState(false);
const [chats, setChats] = useState<Chat[]>(() => {
  if (typeof window === "undefined") {
    return dummyChats;
  }

  const savedChats = localStorage.getItem("lumina-chats");
  return savedChats ? JSON.parse(savedChats) : dummyChats;
});
  const [currentChatId, setCurrentChatId] = useState(dummyChats[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentChat = chats.find((chat) => chat.id === currentChatId);

  

  useEffect(() => {
    localStorage.setItem("lumina-chats", JSON.stringify(chats));
  }, [chats]);

  function handleNewChat() {
    const newChat = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [],
    };

    setChats((prev) => [...prev, newChat]);

    setCurrentChatId(newChat.id);
  }

  async function handleSend(content: string) {
    setChats((prev) =>
      prev.map((chat) => {
        if (currentChatId === chat.id) {
          return {
            ...chat,

            title:
              chat.title === "New Chat" ? content.slice(0, 30) : chat.title,

            messages: [
              ...chat.messages,
              {
                role: "user",
                content,
              },
            ],
          };
        }

        return chat;
      }),
    );

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

      setChats((prev) =>
        prev.map((chat) => {
          if (currentChatId === chat.id) {
            return {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  role: "assistant",
                  content: "",
                },
              ],
            };
          }

          return chat;
        }),
      );
      await typeText(data.reply, (currentText) => {
        setChats((prev) =>
          prev.map((chat) => {
            if (chat.id === currentChatId) {
              return {
                ...chat,

                messages: chat.messages.map((message, index) => {
                  if (index === chat.messages.length - 1) {
                    return {
                      ...message,
                      content: currentText,
                    };
                  }

                  return message;
                }),
              };
            }

            return chat;
          }),
        );
      });
    } catch {
      setChats(
        chats.map((chat) => {
          if (currentChatId === chat.id) {
            return {
              ...chat,
              messages: [
                ...chat.messages,
                {
                  role: "assistant",
                  content: "something went wrong",
                },
              ],
            };
          }

          return chat;
        }),
      );
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div>
      <div className="flex h-screen bg-black">
        <Sidebar
          chats={chats}
          currentChatId={currentChatId}
          onSelectChat={setCurrentChatId}
          onNewChat={handleNewChat}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex flex-1 flex-col">
          <ChatHeader setIsSidebarOpen={setIsSidebarOpen} />

          <ChatMessages
            messages={currentChat?.messages ?? []}
            isTyping={isTyping}
          />

          <ChatInput handleSend={handleSend} />
        </main>
      </div>
    </div>
  );
}
