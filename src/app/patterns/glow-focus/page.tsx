"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

export default function GlowFocusPage() {
  const [inputFocused, setInputFocused] = useState(false);
  const [cardFocused, setCardFocused] = useState(false);
  const [btnFocused, setBtnFocused] = useState(false);

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Glow Focus"
        description="A purple glow ring applied to focus states on inputs, cards, and buttons. Provides clear, accessible focus indication using the primary color."
      />

      {/* Input Focus */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Input Focus
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Click or tab into the input below to see the glow focus ring.
      </p>
      <PreviewBox>
        <div style={{ maxWidth: 400 }}>
          <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#0a0a0a", marginBottom: 8 }}>
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: 15,
              borderRadius: 10,
              border: inputFocused ? "1px solid #7c3aed" : "1px solid #e5e5e5",
              outline: "none",
              boxShadow: inputFocused ? "0 0 0 3px rgba(124, 58, 237, 0.15)" : "none",
              transition: "border-color 0.15s ease, box-shadow 0.15s ease",
              fontFamily: "Inter, sans-serif",
              boxSizing: "border-box",
            }}
          />
        </div>
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`input:focus {
  border-color: #7c3aed;
  outline: none;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}`}
      />

      {/* Card Focus */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Card Focus
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        For keyboard-navigable cards, apply the glow on <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>:focus-visible</code> to avoid showing it on mouse clicks.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <div
            tabIndex={0}
            onFocus={() => setCardFocused(true)}
            onBlur={() => setCardFocused(false)}
            style={{
              width: 200,
              padding: 24,
              borderRadius: 12,
              border: cardFocused ? "1px solid #7c3aed" : "1px solid #e5e5e5",
              background: "#ffffff",
              cursor: "pointer",
              outline: "none",
              boxShadow: cardFocused ? "0 0 0 3px rgba(124, 58, 237, 0.15)" : "0 1px 3px rgba(0,0,0,0.06)",
              transition: "border-color 0.15s ease, box-shadow 0.15s ease",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>Focusable Card</div>
            <div style={{ fontSize: 13, color: "#525252", marginTop: 8, lineHeight: 1.5 }}>
              Tab to this card to see the glow ring appear.
            </div>
          </div>
          <div
            style={{
              width: 200,
              padding: 24,
              borderRadius: 12,
              border: "1px solid #e5e5e5",
              background: "#ffffff",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>Static Card</div>
            <div style={{ fontSize: 13, color: "#525252", marginTop: 8, lineHeight: 1.5 }}>
              Not focusable, no glow.
            </div>
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`.card:focus-visible {
  border-color: #7c3aed;
  outline: none;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}`}
      />

      {/* Button Focus */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Button Focus
      </h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <button
            onFocus={() => setBtnFocused(true)}
            onBlur={() => setBtnFocused(false)}
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              outline: "none",
              boxShadow: btnFocused
                ? "0 4px 20px rgba(124, 58, 237, 0.35), 0 0 0 3px rgba(124, 58, 237, 0.25)"
                : "0 4px 20px rgba(124, 58, 237, 0.35)",
              transition: "box-shadow 0.15s ease",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Tab to Focus
          </button>
          <span style={{ fontSize: 13, color: "#a3a3a3" }}>
            Press Tab to see the combined glow + focus ring
          </span>
        </div>
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`/* Gradient button already has a glow shadow;
   add an outer focus ring on top */
.btn-primary:focus-visible {
  box-shadow:
    0 4px 20px rgba(124, 58, 237, 0.35),
    0 0 0 3px rgba(124, 58, 237, 0.25);
}`}
      />

      {/* Token Summary */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Focus Token Values
      </h2>
      <div style={{ borderRadius: 12, border: "1px solid #e5e5e5", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>Property</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>Value</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Border color", "#7c3aed"],
              ["Ring shadow", "0 0 0 3px rgba(124, 58, 237, 0.15)"],
              ["Transition", "border-color 0.15s ease, box-shadow 0.15s ease"],
            ].map(([prop, val]) => (
              <tr key={prop}>
                <td style={{ padding: "10px 16px", color: "#525252", borderBottom: "1px solid #e5e5e5" }}>{prop}</td>
                <td style={{ padding: "10px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c3aed", borderBottom: "1px solid #e5e5e5" }}>{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Never remove focus outlines without providing a visible alternative.</li>
        <li>Use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>:focus-visible</code> over <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>:focus</code> when possible to avoid glow on mouse clicks.</li>
        <li>The glow ring must have sufficient contrast against the background.</li>
        <li>Keep the ring width consistent at 3px across all components.</li>
        <li>For elements with existing box-shadows, layer the focus ring on top with a comma-separated value.</li>
      </ul>
    </div>
  );
}
