"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

function LiftCard({ label, lift, shadow }: { label: string; lift: number; shadow: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 200,
        padding: 24,
        borderRadius: 12,
        border: "1px solid #e5e5e5",
        background: "#ffffff",
        textAlign: "center",
        cursor: "pointer",
        transform: hovered ? `translateY(-${lift}px)` : "translateY(0)",
        boxShadow: hovered ? shadow : "0 1px 3px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>{label}</div>
      <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 4 }}>Hover me</div>
    </div>
  );
}

export default function HoverLiftPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Hover Lift"
        description="A micro-interaction pattern that lifts elements on hover using translateY and an enhanced shadow, providing tactile feedback."
      />

      {/* Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo
      </h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <LiftCard label="Subtle (2px)" lift={2} shadow="0 4px 12px rgba(0,0,0,0.08)" />
          <LiftCard label="Default (4px)" lift={4} shadow="0 8px 24px rgba(0,0,0,0.1)" />
          <LiftCard label="Dramatic (8px)" lift={8} shadow="0 16px 40px rgba(0,0,0,0.12)" />
        </div>
      </PreviewBox>

      {/* Implementation */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        CSS Implementation
      </h2>
      <CodeBlock
        language="css"
        code={`.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}`}
      />

      {/* React Implementation */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        React Implementation
      </h2>
      <CodeBlock
        language="tsx"
        code={`const [hovered, setHovered] = useState(false);

<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  style={{
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered
      ? "0 8px 24px rgba(0,0,0,0.1)"
      : "0 1px 3px rgba(0,0,0,0.06)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    borderRadius: 12,
  }}
>
  Card content
</div>`}
      />

      {/* Variants Table */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Lift Variants
      </h2>
      <PropsTable
        rows={[
          { name: "subtle", type: "2px lift", default: "0 4px 12px rgba(0,0,0,0.08)", description: "For list items and small interactive elements" },
          { name: "default", type: "4px lift", default: "0 8px 24px rgba(0,0,0,0.1)", description: "Standard card hover effect" },
          { name: "dramatic", type: "8px lift", default: "0 16px 40px rgba(0,0,0,0.12)", description: "For hero cards or feature highlights" },
        ]}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always pair translateY with an increased box-shadow for a realistic lift.</li>
        <li>Keep transition duration between 150ms-250ms for responsive feel.</li>
        <li>Use ease or ease-out timing functions, never linear.</li>
        <li>Apply only to interactive elements (cards, buttons, links).</li>
        <li>Use the "subtle" variant for dense lists to avoid excessive motion.</li>
      </ul>
    </div>
  );
}
