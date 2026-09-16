import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatHeader from "./ChatHeader";

test("chat header title should be rendered", () => {
  render(<ChatHeader setIsSidebarOpen={jest.fn()} />);

  expect(
    screen.getByRole("heading", { name: "New Conversation" })
  ).toBeInTheDocument();
});

test("chat header description should be rendered", () => {
  render(<ChatHeader setIsSidebarOpen={jest.fn()} />);

  expect(
    screen.getByText("Ask me anything about programming.")
  ).toBeInTheDocument();
});

test("clear chat button should be rendered", () => {
  render(<ChatHeader setIsSidebarOpen={jest.fn()} />);

  expect(
    screen.getByRole("button", { name: "Clear Chat" })
  ).toBeInTheDocument();
});

test("sidebar button should call setIsSidebarOpen with true", async () => {
  const user = userEvent.setup();
  const setIsSidebarOpen = jest.fn();

  render(<ChatHeader setIsSidebarOpen={setIsSidebarOpen} />);

  const sidebarButton = screen.getByRole("button", {
    name: "Open sidebar",
  });

  await user.click(sidebarButton);

  expect(setIsSidebarOpen).toHaveBeenCalledWith(true);
});