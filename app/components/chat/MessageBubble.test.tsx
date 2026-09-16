
import React from "react";
import { render, screen } from "@testing-library/react";
import MessageBubble from "./MessageBubble";
jest.mock("react-markdown", () => {
  return function MockReactMarkdown({
    children,
    components,
  }: {
    children: React.ReactNode;
    components?: {
      code?: (props: {
        className?: string;
        children?: React.ReactNode;
      }) => React.ReactNode;
    };
  }) {
    const content = String(children);

    if (content.startsWith("```")) {
      const match = /```(\w+)\n([\s\S]*?)```/.exec(content);

      if (match && components?.code) {
        return components.code({
          className: `language-${match[1]}`,
          children: match[2],
        });
      }
    }

    return <div>{children}</div>;
  };
});

jest.mock("./CodeBlock", () => {
  return function MockCodeBlock() {
    return <div>Code Block</div>;
  };
});

test("message content should be rendered", () => {
  render(
    <MessageBubble
      content="Hello Lumina"
      role="user"
    />
  );

  expect(screen.getByText("Hello Lumina")).toBeInTheDocument();
});

test("user message should have user styling", () => {
  render(
    <MessageBubble
      content="Hello Lumina"
      role="user"
    />
  );

  const message = screen.getByText("Hello Lumina");
  const bubble = message.parentElement;

  expect(bubble).toHaveClass("bg-indigo-600");
  expect(bubble).toHaveClass("text-white");
});

test("assistant message should have assistant styling", () => {
  render(
    <MessageBubble
      content="Hi! How can I help you?"
      role="assistant"
    />
  );

  const message = screen.getByText("Hi! How can I help you?");
  const bubble = message.parentElement;

  expect(bubble).toHaveClass("bg-zinc-800");
  expect(bubble).toHaveClass("text-gray-100");
});

test("markdown content should be rendered", () => {
  render(
    <MessageBubble
      content="**Hello Lumina**"
      role="assistant"
    />
  );

  expect(screen.getByText("**Hello Lumina**")).toBeInTheDocument();
});

test("code block should be rendered for code content", () => {
  render(
    <MessageBubble
      content={"```javascript\nconsole.log('Hello');\n```"}
      role="assistant"
    />
  );

  expect(screen.getByText("Code Block")).toBeInTheDocument();
});