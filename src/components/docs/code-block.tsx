"use client";

import { useState } from "react";

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
}: {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className="code-block"
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        marginTop: 24,
        marginBottom: 24,
      }}
    >
      {/* Header bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontFamily: "var(--font-mono), monospace",
            color: "#525252",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            fontFamily: "inherit",
            fontWeight: 500,
            color: copied ? "#16a34a" : "#a3a3a3",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 8px",
            borderRadius: 8,
            transition: "color 0.15s ease",
          }}
        >
          {copied ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code body */}
      <pre
        style={{
          margin: 0,
          padding: "40px 20px 20px",
          background: "#0a0a0a",
          overflowX: "auto",
        }}
      >
        <code
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 13,
            lineHeight: 1.7,
            color: "#e5e5e5",
          }}
        >
          {showLineNumbers
            ? lines.map((line, i) => (
                <span key={i} style={{ display: "block" }}>
                  <span className="line-number">{i + 1}</span>
                  {line}
                </span>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
}
