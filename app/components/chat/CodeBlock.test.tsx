import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CodeBlock from "./CodeBlock";

jest.mock("react-syntax-highlighter", () => ({
  Prism: ({
    children,
  }: {
    children: React.ReactNode;
  }) => <pre>{children}</pre>,
}));

jest.mock("react-syntax-highlighter/dist/esm/styles/prism", () => ({
  oneDark: {},
}));

test("language should be displayed", () => {
  render(
    <CodeBlock
      language="javascript"
      code="console.log('Hello');"
    />
  );

  expect(screen.getByText("javascript")).toBeInTheDocument();
});

test("code should be displayed", () => {
  render(
    <CodeBlock
      language="javascript"
      code="console.log('Hello');"
    />
  );

  expect(
    screen.getByText("console.log('Hello');")
  ).toBeInTheDocument();
});

test("copy button should be displayed", () => {
  render(
    <CodeBlock
      language="javascript"
      code="console.log('Hello');"
    />
  );

  expect(
    screen.getByRole("button", { name: "📋 Copy" })
  ).toBeInTheDocument();
});

test("code should be copied when copy button is clicked", async () => {
  const user = userEvent.setup();

  const writeText = jest.fn();
Object.defineProperty(navigator, "clipboard", {
  configurable: true,
  value: {
    writeText,
  },
});
  render(
    <CodeBlock
      language="javascript"
      code="console.log('Hello');"
    />
  );

  const copyButton = screen.getByRole("button", {
    name: "📋 Copy",
  });

  await user.click(copyButton);

  expect(writeText).toHaveBeenCalledWith(
    "console.log('Hello');"
  );
});

test("button should show copied state after clicking copy", async () => {
  const user = userEvent.setup();
  
Object.defineProperty(navigator, "clipboard", {
  configurable: true,
  value: {
    writeText: jest.fn(),
  },
});
  render(
    <CodeBlock
      language="javascript"
      code="console.log('Hello');"
    />
  );

  const copyButton = screen.getByRole("button", {
    name: "📋 Copy",
  });

  await user.click(copyButton);

  expect(
    screen.getByRole("button", { name: "✅ Copied!" })
  ).toBeInTheDocument();
});