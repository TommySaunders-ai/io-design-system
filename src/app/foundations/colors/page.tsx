"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";

interface ColorToken {
  name: string;
  hex: string;
  description?: string;
}

interface ColorSection {
  title: string;
  colors: ColorToken[];
}

const colorSections: ColorSection[] = [
  {
    title: "Page Colors",
    colors: [
      { name: "Page Background", hex: "#fafafa", description: "Main page background" },
      { name: "Surface", hex: "#ffffff", description: "Card and panel surfaces" },
      { name: "Alt Background", hex: "#f5f5f5", description: "Alternate section background" },
      { name: "Hover Background", hex: "#ebebeb", description: "Interactive hover state" },
    ],
  },
  {
    title: "Primary",
    colors: [
      { name: "Primary Solid", hex: "#7c3aed", description: "Primary brand color" },
      { name: "Primary Blue", hex: "#2563eb", description: "Gradient endpoint" },
      { name: "Primary Light", hex: "#ede9fe", description: "Primary tinted background" },
    ],
  },
  {
    title: "Status Colors",
    colors: [
      { name: "Success", hex: "#16a34a", description: "Success foreground" },
      { name: "Success Light", hex: "#dcfce7", description: "Success background" },
      { name: "Warning", hex: "#d97706", description: "Warning foreground" },
      { name: "Warning Light", hex: "#fef3c7", description: "Warning background" },
      { name: "Danger", hex: "#dc2626", description: "Danger foreground" },
      { name: "Danger Light", hex: "#fee2e2", description: "Danger background" },
      { name: "Info", hex: "#2563eb", description: "Info foreground" },
      { name: "Info Light", hex: "#dbeafe", description: "Info background" },
    ],
  },
  {
    title: "Text Colors",
    colors: [
      { name: "Text Primary", hex: "#0a0a0a", description: "Headlines and body" },
      { name: "Text Secondary", hex: "#525252", description: "Descriptions and labels" },
      { name: "Text Tertiary", hex: "#a3a3a3", description: "Placeholders and hints" },
    ],
  },
  {
    title: "Border Colors",
    colors: [
      { name: "Border Default", hex: "#e5e5e5", description: "Default border" },
      { name: "Border Active", hex: "#d4d4d4", description: "Active / focused border" },
    ],
  },
];

function ColorSwatch({ color }: { color: ColorToken }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isLight =
    color.hex === "#ffffff" ||
    color.hex === "#fafafa" ||
    color.hex === "#f5f5f5" ||
    color.hex === "#ebebeb" ||
    color.hex === "#ede9fe" ||
    color.hex === "#dcfce7" ||
    color.hex === "#fef3c7" ||
    color.hex === "#fee2e2" ||
    color.hex === "#dbeafe" ||
    color.hex === "#e5e5e5" ||
    color.hex === "#d4d4d4";

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
        transition: "box-shadow 0.15s, transform 0.15s",
        width: "100%",
        textAlign: "left",
        padding: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div
        style={{
          height: 48,
          background: color.hex,
          borderBottom: isLight ? "1px solid #e5e5e5" : "none",
          position: "relative",
        }}
      >
        {copied && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.5)",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              borderRadius: 0,
            }}
          >
            Copied!
          </div>
        )}
      </div>
      <div style={{ padding: "12px 16px" }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#0a0a0a",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {color.name}
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 400,
            color: "#a3a3a3",
            fontFamily: "'JetBrains Mono', monospace",
            marginTop: 4,
          }}
        >
          {color.hex}
        </div>
      </div>
    </button>
  );
}

export default function ColorsPage() {
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
          title="Colors"
          description="The complete color token reference for the design system. Click any swatch to copy its hex value to your clipboard."
        />

        {colorSections.map((section) => (
          <div key={section.title} style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#0a0a0a",
                marginBottom: 20,
              }}
            >
              {section.title}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 16,
              }}
            >
              {section.colors.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#0a0a0a",
              marginBottom: 20,
            }}
          >
            Primary Gradient
          </h2>
          <div
            style={{
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              marginBottom: 12,
            }}
          />
          <p
            style={{
              fontSize: 14,
              color: "#525252",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            linear-gradient(135deg, #7c3aed, #2563eb)
          </p>
        </div>

        <CodeBlock
          language="css"
          code={`/* Color Tokens */
--color-page-bg: #fafafa;
--color-surface: #ffffff;
--color-alt-bg: #f5f5f5;
--color-hover-bg: #ebebeb;

--color-primary: #7c3aed;
--color-primary-blue: #2563eb;
--color-primary-light: #ede9fe;
--color-primary-gradient: linear-gradient(135deg, #7c3aed, #2563eb);

--color-success: #16a34a;
--color-success-light: #dcfce7;
--color-warning: #d97706;
--color-warning-light: #fef3c7;
--color-danger: #dc2626;
--color-danger-light: #fee2e2;
--color-info: #2563eb;
--color-info-light: #dbeafe;

--color-text-primary: #0a0a0a;
--color-text-secondary: #525252;
--color-text-tertiary: #a3a3a3;

--color-border: #e5e5e5;
--color-border-active: #d4d4d4;`}
        />
      </div>
    </div>
  );
}
