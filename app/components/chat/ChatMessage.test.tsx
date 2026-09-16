import { render, screen } from "@testing-library/react";
import ChatMessages from "./ChatMessage";

jest.mock("./MessageBubble", () => {
  return function MockMessageBubble({ content }: { content: string }) {
    return <div>{content}</div>;
  };
});
test("messages should be rendered", () => {
  const messages = [
    {
      content: "Hello Lumina",
      role: "user" as const,
    },
  ];

  render(<ChatMessages messages={messages} isTyping={false} />);

  expect(screen.getByText("Hello Lumina")).toBeInTheDocument();
});

test("multiple messages should be rendered", () => {
  const messages = [
    {
      content: "Hello Lumina",
      role: "user" as const,
    },
    {
      content: "Hi! How can I help you?",
      role: "assistant" as const,
    },
  ];

  render(<ChatMessages messages={messages} isTyping={false} />);

  expect(screen.getByText("Hello Lumina")).toBeInTheDocument();
  expect(screen.getByText("Hi! How can I help you?")).toBeInTheDocument();
});

test("typing indicator should be displayed when Lumina is typing", () => {
  const messages = [
    {
      content: "Hello",
      role: "user" as const,
    },
  ];

  render(<ChatMessages messages={messages} isTyping={true} />);

  expect(screen.getByText("Lumina is typing...")).toBeInTheDocument();
});

test("typing indicator should not be displayed when Lumina is not typing", () => {
  const messages = [
    {
      content: "Hello",
      role: "user" as const,
    },
  ];

  render(<ChatMessages messages={messages} isTyping={false} />);

  expect(screen.queryByText("Lumina is typing...")).not.toBeInTheDocument();
});

test("should render correctly when there are no messages", () => {
  render(<ChatMessages messages={[]} isTyping={false} />);

  expect(screen.queryByText("Lumina is typing...")).not.toBeInTheDocument();
});
