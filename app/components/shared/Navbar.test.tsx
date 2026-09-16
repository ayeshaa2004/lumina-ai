import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

jest.mock("@clerk/nextjs", () => ({
  Show: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  UserButton: () => <button>User</button>,
}));

test("navbar should render", () => {
  render(<Navbar />);

  expect(screen.getAllByText("Features")).toHaveLength(2);
});

test("navigation links should be rendered", () => {
  render(<Navbar />);

  expect(screen.getAllByText("Features")).toHaveLength(2);
  expect(screen.getAllByText("Why Lumina")).toHaveLength(2);
  expect(screen.getAllByText("FAQs")).toHaveLength(2);
});

test("Lumina AI logo should be rendered", () => {
  render(<Navbar />);

  expect(screen.getAllByText("✨ Lumina AI")).toHaveLength(2);
});

test("Sign In buttons should be rendered", () => {
  render(<Navbar />);

  expect(screen.getAllByRole("button", { name: "Sign In" })).toHaveLength(2);
});

test("Get Started buttons should be rendered", () => {
  render(<Navbar />);

  expect(screen.getAllByRole("button", { name: "Get Started" })).toHaveLength(
    2,
  );
});
test("mobile menu should be closed initially", () => {
  render(<Navbar />);

  const menuPanel = document.querySelector(".translate-x-full");

  expect(menuPanel).toBeInTheDocument();
});
test("mobile menu should open when menu button is clicked", async () => {
  const user = userEvent.setup();

  render(<Navbar />);

  const menuButton = screen.getByRole("button", { name: "" });

  await user.click(menuButton);

  const menuPanel = document.querySelector(".translate-x-0");

  expect(menuPanel).toBeInTheDocument();
});
test("mobile menu should close when a navigation link is clicked", async () => {
  const user = userEvent.setup();

  render(<Navbar />);

  const menuButton = screen.getByRole("button", { name: "" });

  await user.click(menuButton);

  const featuresLinks = screen.getAllByText("Features");

  await user.click(featuresLinks[0]);

  const menuPanel = document.querySelector(".translate-x-full");

  expect(menuPanel).toBeInTheDocument();
});
test("mobile menu should close when overlay is clicked", async () => {
  const user = userEvent.setup();

  render(<Navbar />);

  const menuButton = screen.getByRole("button", { name: "" });

  await user.click(menuButton);

  const overlay = document.querySelector(".bg-black\\/900");

  expect(overlay).toBeInTheDocument();

  await user.click(overlay!);

  const menuPanel = document.querySelector(".translate-x-full");

  expect(menuPanel).toBeInTheDocument();
});
