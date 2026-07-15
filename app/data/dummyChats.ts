import { Chat } from "../types/chat";

export const dummyChats: Chat[] = [
  {
    id: crypto.randomUUID(),
    title: "React",
    messages: [
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
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "javascript",
    messages: [
      {
        role: "assistant",
        content: "Hi! I'm Lumina AI. How can I help you today?",
      },
      {
        role: "user",
        content: "give a js function to change the background to dark mode",
      },
      {
        role: "assistant",
        content: "Of course! ",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Python",
    messages: [
      {
        role: "assistant",
        content: "Hi! I'm Lumina AI. How can I help you today?",
      },
      {
        role: "user",
        content: "give a function to add sum of two numbers",
      },
      {
        role: "assistant",
        content: "Of course! ",
      },
    ],
  },
];
