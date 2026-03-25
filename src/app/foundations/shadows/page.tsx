"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";
import { CodeBlock } from "@/components/docs/code-block";

const shadows = [
  {
    name: "Small",
    token: "sm",
    value: "0 1px 3px rgba(0,0,0,0.08)",
    desc: "Subtle elevation for cards at rest",
  },
  {
    name: "Medium",
    token: "md",
    value: "0 4px 12px rgba(0,0,0,0.1)",
    desc: "Hover states, dropdowns, tooltips",
  },
  {
    name: "Large",
    token: "lg",
    value: "0 8px 30px rgba(0,0,0,0.12)",
    desc: "Modals, popovers, floating panels",
  },
  {
    name: "Glow",
    token: "glow",
    value: "0 4px 20px rgba(124,58,237,0.3)",
    desc: "Primary action emphasis, focus rings",
  },
];

export default function ShadowsPage() {
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
          title="Shadows"
          description="Shadow tokens provide depth and elevation hierarchy. Use them consistently to communicate interactive states and layering."
        />

        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 20,
          }}
        >
          Shadow Scale
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {shadows.map((s) => (
              <div
                key={s.token}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 120,
                    background: "#ffffff",
                    borderRadius: 16,
                    boxShadow: s.value,
                    border:
                      s.token === "glow" ? "none" : "1px solid #e5e5e5",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#0a0a0a",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#7c3aed",
                      marginTop: 4,
                    }}
                  >
                    shadow-{s.token}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#525252",
                      marginTop: 4,
                    }}
                  >
                    {s.desc}
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
          Interactive Example
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            <div
              style={{
                padding: 24,
                background: "#ffffff",
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0a0a0a",
                }}
              >
                Card at rest
              </div>
              <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 4 }}>
                shadow-sm
              </div>
            </div>
            <div
              style={{
                padding: 24,
                background: "#ffffff",
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0a0a0a",
                }}
              >
                Card hovered
              </div>
              <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 4 }}>
                shadow-md
              </div>
            </div>
            <div
              style={{
                padding: 24,
                background: "#ffffff",
                borderRadius: 12,
                boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#0a0a0a",
                }}
              >
                Primary action
              </div>
              <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 4 }}>
                shadow-glow
              </div>
            </div>
          </div>
        </PreviewBox>

        <CodeBlock
          language="css"
          code={`/* Shadow Tokens */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.1);
--shadow-lg: 0 8px 30px rgba(0,0,0,0.12);
--shadow-glow: 0 4px 20px rgba(124,58,237,0.3);

/* Usage */
box-shadow: var(--shadow-sm);   /* Default card */
box-shadow: var(--shadow-md);   /* Hover state */
box-shadow: var(--shadow-lg);   /* Modal / overlay */
box-shadow: var(--shadow-glow); /* Primary CTA focus */`}
        />
      </div>
    </div>
  );
}
