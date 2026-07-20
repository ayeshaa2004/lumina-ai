"use client";

import { Message } from "@/app/types/chat";
import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";

type ChatMessagesProps = {
  messages: Message[];
  isTyping: boolean;
};
export default function ChatMessages({
  messages,
  isTyping,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 sm:p-8 pb-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            content={message.content}
            role={message.role}
          />
        ))}
        {isTyping && (
          <div className="text-gray-400 italic">Lumina is typing...</div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
