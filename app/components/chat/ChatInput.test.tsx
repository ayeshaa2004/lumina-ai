import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatInput from "./ChatInput";

test("chat input should be rendered", () => {
  render(<ChatInput handleSend={() => {}} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);

  expect(inputEl).toBeInTheDocument();
});

test("send button should be rendered", () => {
  render(<ChatInput handleSend={() => {}} />);

  const buttonEl = screen.getByRole("button", { name: /send/i });

  expect(buttonEl).toBeInTheDocument();
});

test("input should initially be empty", () => {
  render(<ChatInput handleSend={() => {}} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);

  expect(inputEl).toHaveValue("");
});

test("send button should initially be disabled", () => {
  render(<ChatInput handleSend={() => {}} />);

  const buttonEl = screen.getByRole("button", { name: /send/i });

  expect(buttonEl).toBeDisabled();
});

test("user should be able to type a message", async () => {
  const user = userEvent.setup();

  render(<ChatInput handleSend={() => {}} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);

  const testValue = "Explain useState";

  await user.type(inputEl, testValue);

  expect(inputEl).toHaveValue(testValue);
});

test("send button should be enabled when message is entered", async () => {
  const user = userEvent.setup();

  render(<ChatInput handleSend={() => {}} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);
  const buttonEl = screen.getByRole("button", { name: /send/i });

  await user.type(inputEl, "Hello Lumina");

  expect(buttonEl).not.toBeDisabled();
});

test("handleSend should be called with the entered message", async () => {
  const user = userEvent.setup();
  const handleSend = jest.fn();

  render(<ChatInput handleSend={handleSend} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);
  const buttonEl = screen.getByRole("button", { name: /send/i });

  const testValue = "Explain useState";

  await user.type(inputEl, testValue);
  await user.click(buttonEl);

  expect(handleSend).toHaveBeenCalledWith(testValue);
});

test("input should be cleared after sending", async () => {
  const user = userEvent.setup();
  const handleSend = jest.fn();

  render(<ChatInput handleSend={handleSend} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);
  const buttonEl = screen.getByRole("button", { name: /send/i });

  await user.type(inputEl, "Hello Lumina");
  await user.click(buttonEl);

  expect(inputEl).toHaveValue("");
});

test("should not send an empty message", () => {
  const handleSend = jest.fn();

  render(<ChatInput handleSend={handleSend} />);

  const buttonEl = screen.getByRole("button", { name: /send/i });

  expect(buttonEl).toBeDisabled();
  expect(handleSend).not.toHaveBeenCalled();
});

test("should not send a whitespace-only message", async () => {
  const user = userEvent.setup();
  const handleSend = jest.fn();

  render(<ChatInput handleSend={handleSend} />);

  const inputEl = screen.getByPlaceholderText(/type your message.../i);
  const buttonEl = screen.getByRole("button", { name: /send/i });

  await user.type(inputEl, "   ");

  expect(buttonEl).toBeDisabled();
  expect(handleSend).not.toHaveBeenCalled();
});