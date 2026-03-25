"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";
import { CodeBlock } from "@/components/docs/code-block";

const radii = [
  { name: "sm", value: 8, label: "Small" },
  { name: "md", value: 12, label: "Medium" },
  { name: "lg", value: 16, label: "Large" },
  { name: "xl", value: 20, label: "Extra Large" },
  { name: "full", value: 9999, label: "Full / Pill" },
];

export default function RadiusPage() {
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
          title="Border Radius"
          description="Border radius tokens control the roundness of components. All interactive elements use a minimum of 8px radius."
        />

        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 20,
          }}
        >
          Radius Scale
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {radii.map((r) => (
              <div
                key={r.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 80,
                    border: "2px solid #7c3aed",
                    borderRadius: r.value,
                    background: "#ede9fe",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#7c3aed",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {r.value}px
                  </span>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0a0a0a",
                    }}
                  >
                    {r.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#a3a3a3",
                      fontFamily: "'JetBrains Mono', monospace",
                      marginTop: 2,
                    }}
                  >
                    radius-{r.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 48,
            marginBottom: 20,
          }}
        >
          Applied Examples
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {[
              { name: "Button", radius: 8, token: "sm" },
              { name: "Card", radius: 12, token: "md" },
              { name: "Modal", radius: 16, token: "lg" },
              { name: "Panel", radius: 20, token: "xl" },
              { name: "Badge / Pill", radius: 9999, token: "full" },
            ].map((ex) => (
              <div
                key={ex.name}
                style={{
                  padding: 16,
                  background: "#f5f5f5",
                  borderRadius: ex.radius,
                  border: "1px solid #e5e5e5",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#0a0a0a",
                    marginBottom: 4,
                  }}
                >
                  {ex.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#7c3aed",
                  }}
                >
                  {ex.radius}px ({ex.token})
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        <CodeBlock
          language="css"
          code={`/* Border Radius Tokens */
--radius-sm: 8px;      /* Buttons, inputs, badges */
--radius-md: 12px;     /* Cards, dropdowns */
--radius-lg: 16px;     /* Modals, preview boxes */
--radius-xl: 20px;     /* Large panels, hero cards */
--radius-full: 9999px; /* Pills, avatars, circular elements */

/* Usage */
border-radius: var(--radius-sm);   /* 8px  */
border-radius: var(--radius-md);   /* 12px */
border-radius: var(--radius-lg);   /* 16px */
border-radius: var(--radius-xl);   /* 20px */
border-radius: var(--radius-full); /* 9999px */`}
        />
      </div>
    </div>
  );
}
