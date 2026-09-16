import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";

jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});
const chats = [
  {
    id: "1",
    title: "Learn React",
    messages: [],
  },
  {
    id: "2",
    title: "Debug my code",
    messages: [],
  },
];

test("sidebar content should be rendered", () => {
  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  expect(screen.getByText("Lumina AI")).toBeInTheDocument();
  expect(screen.getByText("AI Programming Mentor")).toBeInTheDocument();
  expect(screen.getByText("Recent Chats")).toBeInTheDocument();
  expect(screen.getByText("Ayesha")).toBeInTheDocument();
  expect(screen.getByText("AI Explorer")).toBeInTheDocument();
});

test("chat titles should be rendered", () => {
  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  expect(screen.getByText("💬 Learn React")).toBeInTheDocument();
  expect(screen.getByText("💬 Debug my code")).toBeInTheDocument();
});

test("multiple chats should be rendered", () => {
  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  const chatButtons = screen.getAllByRole("button");

  expect(chatButtons).toHaveLength(4);
});

test("clicking a chat should call onSelectChat with the chat id", async () => {
  const user = userEvent.setup();
  const onSelectChat = jest.fn();

  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={onSelectChat}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  const chatButton = screen.getByRole("button", {
    name: "💬 Debug my code",
  });

  await user.click(chatButton);

  expect(onSelectChat).toHaveBeenCalledWith("2");
});

test("New Chat button should call onNewChat", async () => {
  const user = userEvent.setup();
  const onNewChat = jest.fn();

  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={onNewChat}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  const newChatButton = screen.getByRole("button", {
    name: "+ New Chat",
  });

  await user.click(newChatButton);

  expect(onNewChat).toHaveBeenCalled();
});

test("close button should call setIsSidebarOpen with false", async () => {
  const user = userEvent.setup();
  const setIsSidebarOpen = jest.fn();

  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={setIsSidebarOpen}
    />,
  );

  const closeButton = screen.getByRole("button", {
    name: "Close sidebar",
  });

  await user.click(closeButton);

  expect(setIsSidebarOpen).toHaveBeenCalledWith(false);
});

test("sidebar should be open when isSidebarOpen is true", () => {
  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={true}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  const sidebar = document.querySelector(".translate-x-0");

  expect(sidebar).toBeInTheDocument();
});

test("sidebar should be closed when isSidebarOpen is false", () => {
  render(
    <Sidebar
      chats={chats}
      currentChatId="1"
      onSelectChat={jest.fn()}
      onNewChat={jest.fn()}
      isSidebarOpen={false}
      setIsSidebarOpen={jest.fn()}
    />,
  );

  const sidebar = document.querySelector(".-translate-x-full");

  expect(sidebar).toBeInTheDocument();
});
