"use client";
import { useState } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  language: string;
  code: string;
};

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div>
      <div className="flex justify-between items-center bg-zinc-700 px-4 py-2 rounded-t-lg">
        <span>{language}</span>

        <button onClick={handleCopy}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>{" "}
      <SyntaxHighlighter style={oneDark} language={language}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
