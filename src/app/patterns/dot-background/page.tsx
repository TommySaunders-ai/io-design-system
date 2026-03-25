"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

export default function DotBackgroundPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Dot Background"
        description="A subtle radial-gradient dot pattern used as a page background. Creates visual texture without distracting from content."
      />

      {/* Section: Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo
      </h2>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            height: 280,
            borderRadius: 12,
            background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: 12,
              padding: "32px 48px",
              border: "1px solid #e5e5e5",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0a0a0a" }}>
              Content floats above the dot grid
            </span>
          </div>
        </div>
      </PreviewBox>

      {/* Section: Basic Implementation */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Basic Implementation
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The dot background uses a CSS <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>radial-gradient</code> repeated across the element. Each dot is a 1px circle placed on a 24px grid.
      </p>
      <CodeBlock
        language="css"
        code={`.dot-background {
  background: radial-gradient(circle, #e5e5e5 1px, transparent 1px);
  background-size: 24px 24px;
}`}
      />

      {/* Section: Variant -- Denser Grid */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Denser Grid Variant
      </h2>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            height: 200,
            borderRadius: 12,
            background: "radial-gradient(circle, #d4d4d4 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`.dot-background-dense {
  background: radial-gradient(circle, #d4d4d4 1px, transparent 1px);
  background-size: 16px 16px;
}`}
      />

      {/* Section: With Fade Overlay */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        With Fade Overlay
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Layer a radial white-to-transparent gradient on top to fade the dots toward the center, drawing focus to the main content area.
      </p>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            height: 240,
            borderRadius: 12,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500, color: "#0a0a0a" }}>
              Dots fade toward center
            </span>
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<div style={{ position: "relative" }}>
  {/* Dot layer */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
    backgroundSize: "24px 24px",
  }} />
  {/* Fade overlay */}
  <div style={{
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, transparent 70%)",
  }} />
  {/* Content */}
  <div style={{ position: "relative" }}>
    Your content here
  </div>
</div>`}
      />

      {/* Section: Usage Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Usage Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Use as a full-page background behind content cards and sections.</li>
        <li>Keep dot color subtle (use <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>#e5e5e5</code> or lighter).</li>
        <li>Pair with white card surfaces for contrast.</li>
        <li>Use the fade overlay when content needs maximum readability.</li>
        <li>Avoid combining with other busy background patterns.</li>
      </ul>
    </div>
  );
}
