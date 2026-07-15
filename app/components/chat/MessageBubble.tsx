import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

type MessageBubbleProps = {
  content: string;
  role: "user" | "assistant";
};

export default function MessageBubble({ content, role }: MessageBubbleProps) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        role === "user"
          ? "ml-auto max-w-xl bg-indigo-600 text-white"
          : "mr-auto max-w-3xl bg-zinc-800 text-gray-100"
      }`}
    >
      <ReactMarkdown
        components={{
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");

            if (match) {
              return <CodeBlock code={String(children)} language={match[1]} />;
            }

            return (
              <code className="rounded bg-zinc-700 px-1 py-0.5 text-sm">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>{" "}
    </div>
  );
}
