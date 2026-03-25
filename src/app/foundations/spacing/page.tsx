"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";
import { CodeBlock } from "@/components/docs/code-block";

const spacingScale = [
  { value: 4, usage: "Tight inline spacing, icon gaps" },
  { value: 8, usage: "Small padding, compact element gaps" },
  { value: 12, usage: "Input padding, tight card padding" },
  { value: 16, usage: "Default padding, list item spacing" },
  { value: 20, usage: "Medium padding, form group gaps" },
  { value: 24, usage: "Card padding, section gaps" },
  { value: 28, usage: "Comfortable card padding" },
  { value: 32, usage: "Large card padding, section margins" },
  { value: 40, usage: "Section spacing, page header margin" },
  { value: 48, usage: "Large section gaps" },
  { value: 56, usage: "Page section separators" },
  { value: 64, usage: "Page-level vertical rhythm" },
];

export default function SpacingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        padding: "48px 48px 96px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <PageHeader
          title="Spacing"
          description="A consistent spacing scale for padding, margin, and gap values across the design system."
        />

        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 20,
          }}
        >
          Spacing Scale
        </h2>
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {spacingScale.map((s) => (
              <div
                key={s.value}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 60px 1fr 240px",
                  alignItems: "center",
                  gap: 16,
                  padding: "12px 0",
                  borderBottom: "1px solid #f5f5f5",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0a0a0a",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#a3a3a3",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {s.value}px
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: s.value * 4,
                      maxWidth: "100%",
                      height: 24,
                      borderRadius: 8,
                      background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                      opacity: 0.8,
                      transition: "opacity 0.15s",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#525252",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {s.usage}
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        {/* Guidelines */}
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 48,
            marginBottom: 20,
          }}
        >
          Guidelines
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Padding",
                desc: "Use 12-32px for component internal padding. Cards typically use 24px, inputs use 12px.",
                values: "12 / 16 / 20 / 24 / 32",
              },
              {
                title: "Margin",
                desc: "Use 16-64px for spacing between components and sections. Larger values for page-level rhythm.",
                values: "16 / 24 / 32 / 40 / 48 / 64",
              },
              {
                title: "Gap",
                desc: "Use 4-24px for flex and grid gaps. Smaller values for inline items, larger for layout grids.",
                values: "4 / 8 / 12 / 16 / 20 / 24",
              },
            ].map((g) => (
              <div
                key={g.title}
                style={{
                  padding: 20,
                  background: "#f5f5f5",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0a0a0a",
                    marginBottom: 8,
                  }}
                >
                  {g.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#525252",
                    lineHeight: 1.5,
                    marginBottom: 12,
                  }}
                >
                  {g.desc}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#7c3aed",
                  }}
                >
                  {g.values}
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        <CodeBlock
          language="css"
          code={`/* Spacing Tokens */
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-7: 28px;
--spacing-8: 32px;
--spacing-10: 40px;
--spacing-12: 48px;
--spacing-14: 56px;
--spacing-16: 64px;

/* Usage */
padding: var(--spacing-6);      /* 24px card padding */
gap: var(--spacing-4);           /* 16px grid gap */
margin-bottom: var(--spacing-10); /* 40px section spacing */`}
        />
      </div>
    </div>
  );
}
