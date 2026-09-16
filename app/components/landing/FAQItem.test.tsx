import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqItem from "./FAQItem";

const question = "What is Lumina AI?";
const answer = "Lumina AI is an AI programming mentor.";

test("FAQ question should be rendered", () => {
  render(<FaqItem question={question} answer={answer} />);

  expect(screen.getByRole("button", { name: question })).toBeInTheDocument();
});

test("FAQ answer should not be visible initially", () => {
  render(<FaqItem question={question} answer={answer} />);

  expect(screen.queryByText(answer)).not.toBeInTheDocument();
});

test("clicking the question should show the answer", async () => {
  const user = userEvent.setup();

  render(<FaqItem question={question} answer={answer} />);

  const questionButton = screen.getByRole("button", {
    name: question,
  });

  await user.click(questionButton);

  expect(screen.getByText(answer)).toBeInTheDocument();
});

test("clicking the question again should hide the answer", async () => {
  const user = userEvent.setup();

  render(<FaqItem question={question} answer={answer} />);

  const questionButton = screen.getByRole("button", {
    name: question,
  });

  await user.click(questionButton);
  expect(screen.getByText(answer)).toBeInTheDocument();

  await user.click(questionButton);

  expect(screen.queryByText(answer)).not.toBeInTheDocument();
});

test("question should remain visible when answer is open", async () => {
  const user = userEvent.setup();

  render(<FaqItem question={question} answer={answer} />);

  const questionButton = screen.getByRole("button", {
    name: question,
  });

  await user.click(questionButton);

  expect(questionButton).toBeInTheDocument();
});
