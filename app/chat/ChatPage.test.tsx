import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatPage from "./page";

jest.mock("../components/chat/Sidebar", () => {
  return function MockSidebar({
    chats,
    onSelectChat,
    onNewChat,
    setIsSidebarOpen,
  }: {
    chats: { id: string; title: string }[];
    onSelectChat: (id: string) => void;
    onNewChat: () => void;
    setIsSidebarOpen: (open: boolean) => void;
  }) {
    return (
      <div>
        <div>Sidebar</div>

        {chats.map((chat) => (
          <button key={chat.id} onClick={() => onSelectChat(chat.id)}>
            {chat.title}
          </button>
        ))}

        <button onClick={onNewChat}>New Chat</button>

        <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
      </div>
    );
  };
});

jest.mock("../components/chat/ChatHeader", () => {
  return function MockChatHeader({
    setIsSidebarOpen,
  }: {
    setIsSidebarOpen: (open: boolean) => void;
  }) {
    return (
      <div>
        <div>Chat Header</div>

        <button onClick={() => setIsSidebarOpen(true)}>Open Sidebar</button>
      </div>
    );
  };
});

jest.mock("../components/chat/ChatMessage", () => {
  return function MockChatMessages({
    messages,
    isTyping,
  }: {
    messages: { role: string; content: string }[];
    isTyping: boolean;
  }) {
    return (
      <div>
        <div>Chat Messages</div>

        {messages.map((message, index) => (
          <div key={index}>{message.content}</div>
        ))}

        {isTyping && <div>Lumina is typing...</div>}
      </div>
    );
  };
});

jest.mock("../components/chat/ChatInput", () => {
  return function MockChatInput({
    handleSend,
  }: {
    handleSend: (content: string) => void;
  }) {
    return (
      <button onClick={() => handleSend("Explain React")}>Send Message</button>
    );
  };
});

jest.mock("../lib/typeText", () => ({
  typeText: jest.fn(
    async (text: string, callback: (currentText: string) => void) => {
      callback(text);
    },
  ),
}));

jest.mock("@/app/data/dummyChats", () => ({
  dummyChats: [
    {
      id: "1",
      title: "Learn React",
      messages: [
        {
          role: "user",
          content: "What is React?",
        },
      ],
    },
    {
      id: "2",
      title: "Debug my code",
      messages: [
        {
          role: "user",
          content: "Help me debug this.",
        },
      ],
    },
  ],
}));
beforeEach(() => {
  localStorage.clear();

  jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

  jest.spyOn(Storage.prototype, "setItem");

  global.fetch = jest.fn();
});
afterEach(() => {
  jest.restoreAllMocks();
});
test("chat page should render the main components", () => {
  render(<ChatPage />);

  expect(screen.getByText("Sidebar")).toBeInTheDocument();
  expect(screen.getByText("Chat Header")).toBeInTheDocument();
  expect(screen.getByText("Chat Messages")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Send Message" }),
  ).toBeInTheDocument();
});

test("current chat messages should be displayed", () => {
  render(<ChatPage />);
  expect(screen.getByText("What is React?")).toBeInTheDocument();
});
test("new chat should be created when New Chat is clicked", async () => {
  const user = userEvent.setup();

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "New Chat" }));

  expect(screen.getAllByRole("button", { name: "New Chat" })).toHaveLength(2);
});
test("selecting a chat should display that chat's messages", async () => {
  const user = userEvent.setup();

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Debug my code" }));

  expect(screen.getByText("Help me debug this.")).toBeInTheDocument();
});

test("sidebar should open when Open Sidebar is clicked", async () => {
  const user = userEvent.setup();

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Open Sidebar" }));

  expect(screen.getByText("Close Sidebar")).toBeInTheDocument();
});
test("sending a message should display the user's message", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockResolvedValue({
    json: async () => ({
      reply: "Here is the answer.",
    }),
  });

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  expect(screen.getByText("Explain React")).toBeInTheDocument();
});

test("typing indicator should be displayed while waiting for the response", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockImplementation(
    () =>
      new Promise(() => {
        // Keep request pending
      }),
  );

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  expect(screen.getByText("Lumina is typing...")).toBeInTheDocument();
});

test("assistant response should be displayed after successful API response", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockResolvedValue({
    json: async () => ({
      reply: "React is a JavaScript library for building user interfaces.",
    }),
  });

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  await waitFor(() => {
    expect(
      screen.getByText(
        "React is a JavaScript library for building user interfaces.",
      ),
    ).toBeInTheDocument();
  });
});

test("API should be called with the user's message", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockResolvedValue({
    json: async () => ({
      reply: "Here is the answer.",
    }),
  });

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith(
      "/api/chat",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          message: "Explain React",
        }),
      }),
    );
  });
});

test("typing indicator should disappear after successful response", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockResolvedValue({
    json: async () => ({
      reply: "Here is the answer.",
    }),
  });

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  await waitFor(() => {
    expect(screen.queryByText("Lumina is typing...")).not.toBeInTheDocument();
  });
});

test("error message should be displayed when API request fails", async () => {
  const user = userEvent.setup();

  (fetch as jest.Mock).mockRejectedValue(new Error("API error"));

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  await waitFor(() => {
    expect(screen.getByText("something went wrong")).toBeInTheDocument();
  });
});

test("chats should be saved to localStorage", async () => {
  const user = userEvent.setup();

  render(<ChatPage />);

  await user.click(screen.getByRole("button", { name: "Send Message" }));

  await waitFor(() => {
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lumina-chats",
      expect.any(String),
    );
  });
});
