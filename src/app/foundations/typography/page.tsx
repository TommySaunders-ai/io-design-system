"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";
import { CodeBlock } from "@/components/docs/code-block";

const weights = [
  { value: 300, label: "Light" },
  { value: 400, label: "Regular" },
  { value: 500, label: "Medium" },
  { value: 600, label: "Semibold" },
  { value: 700, label: "Bold" },
];

const sizes = [12, 13, 14, 15, 16, 18, 20, 24, 28, 32, 40, 48];

const lineHeights = [
  { size: 14, lh: 1.2, label: "Tight (1.2)" },
  { size: 14, lh: 1.4, label: "Normal (1.4)" },
  { size: 14, lh: 1.6, label: "Relaxed (1.6)" },
  { size: 14, lh: 1.8, label: "Loose (1.8)" },
];

export default function TypographyPage() {
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
          title="Typography"
          description="Font families, weights, sizes, and line heights used throughout the design system."
        />

        {/* Font Families */}
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 20,
          }}
        >
          Font Families
        </h2>
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#a3a3a3",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Body / UI
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: "#0a0a0a",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Inter
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: "#525252",
                  fontFamily: "Inter, sans-serif",
                  marginTop: 8,
                }}
              >
                The quick brown fox jumps over the lazy dog. 0123456789
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid #e5e5e5",
                paddingTop: 32,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#a3a3a3",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 8,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Code
              </div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 400,
                  color: "#0a0a0a",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                JetBrains Mono
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: "#525252",
                  fontFamily: "'JetBrains Mono', monospace",
                  marginTop: 8,
                }}
              >
                {"const greeting = 'Hello, World!'; // 0123456789"}
              </div>
            </div>
          </div>
        </PreviewBox>

        {/* Weight Scale */}
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 48,
            marginBottom: 20,
          }}
        >
          Weight Scale
        </h2>
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {weights.map((w) => (
              <div
                key={w.value}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  borderBottom: "1px solid #f5f5f5",
                  paddingBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 120,
                    flexShrink: 0,
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#a3a3a3",
                  }}
                >
                  {w.value} {w.label}
                </div>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: w.value,
                    color: "#0a0a0a",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        {/* Size Scale */}
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 48,
            marginBottom: 20,
          }}
        >
          Size Scale
        </h2>
        <PreviewBox>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {sizes.map((s) => (
              <div
                key={s}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 24,
                  borderBottom: "1px solid #f5f5f5",
                  paddingBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 64,
                    flexShrink: 0,
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#a3a3a3",
                    textAlign: "right",
                  }}
                >
                  {s}px
                </div>
                <div
                  style={{
                    fontSize: s,
                    fontWeight: 400,
                    color: "#0a0a0a",
                    fontFamily: "Inter, sans-serif",
                    lineHeight: 1.4,
                  }}
                >
                  Design System
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        {/* Line Heights */}
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "#0a0a0a",
            marginTop: 48,
            marginBottom: 20,
          }}
        >
          Line Heights
        </h2>
        <PreviewBox>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {lineHeights.map((lh) => (
              <div
                key={lh.label}
                style={{
                  padding: 16,
                  background: "#f5f5f5",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#7c3aed",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: 8,
                  }}
                >
                  {lh.label}
                </div>
                <div
                  style={{
                    fontSize: lh.size,
                    lineHeight: lh.lh,
                    color: "#0a0a0a",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  The quick brown fox jumps over the lazy dog. This is a longer
                  sample to demonstrate line height differences across multiple
                  lines of text.
                </div>
              </div>
            ))}
          </div>
        </PreviewBox>

        <CodeBlock
          language="css"
          code={`/* Font Families */
font-family: 'Inter', sans-serif;          /* Body & UI */
font-family: 'JetBrains Mono', monospace;  /* Code */

/* Font Weights */
font-weight: 300;  /* Light */
font-weight: 400;  /* Regular */
font-weight: 500;  /* Medium */
font-weight: 600;  /* Semibold */
font-weight: 700;  /* Bold */

/* Import (Next.js) */
import { Inter } from 'next/font/google';
import { JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
});`}
        />
      </div>
    </div>
  );
}
