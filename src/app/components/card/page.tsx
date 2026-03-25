"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Card component                                    */
/* -------------------------------------------------- */

function Card({
  title,
  description,
  highlighted = false,
  disabled = false,
  imageSrc,
  children,
}: {
  title?: string;
  description?: string;
  highlighted?: boolean;
  disabled?: boolean;
  imageSrc?: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: disabled ? "#f5f5f5" : "#ffffff",
        borderRadius: 16,
        border: highlighted ? "1.5px solid #7c3aed" : "1px solid #e5e5e5",
        boxShadow: highlighted
          ? "0 4px 20px rgba(124,58,237,0.3)"
          : hovered && !disabled
          ? "0 4px 12px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.08)",
        transform: hovered && !disabled ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
        overflow: "hidden",
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "not-allowed" : "default",
        width: "100%",
        maxWidth: 320,
      }}
    >
      {imageSrc && (
        <div
          style={{
            height: 160,
            background: `linear-gradient(135deg, #7c3aed22, #2563eb22)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      )}
      <div style={{ padding: 24 }}>
        {title && (
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: "#0a0a0a" }}>
            {title}
          </h3>
        )}
        {description && (
          <p style={{ margin: "8px 0 0", fontSize: 14, color: "#525252", lineHeight: 1.5 }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function CardPage() {
  return (
    <>
      <PageHeader
        title="Card"
        description="Cards group related information into contained surfaces. They support images, highlights, disabled states, and hover-lift animations."
      />

      {/* -- Default -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Default</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Card
            title="Content Card"
            description="A standard card with a title and description. Hover to see the lift effect."
          />
          <Card title="With Image" description="Cards can include a header image area." imageSrc="placeholder" />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Card title="Content Card" description="A standard card." />
<Card title="With Image" imageSrc="/hero.png" />`}
      />

      {/* -- Highlighted -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Highlighted</h2>
      <PreviewBox>
        <Card
          title="Featured Content"
          description="Highlighted cards use the primary border and glow shadow to draw attention."
          highlighted
        />
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Card highlighted title="Featured" description="..." />`} />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <Card
          title="Archived Content"
          description="This card is disabled. It cannot be interacted with."
          disabled
        />
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Card disabled title="Archived" description="..." />`} />

      {/* -- Hover-lift demo -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Hover-Lift Demo</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Hover each card to see the lift animation. The highlighted card also shows a glow shadow.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Card title="Standard" description="Hover me to lift up." />
          <Card title="Featured" description="Glow on hover." highlighted />
          <Card title="Disabled" description="No hover effect." disabled />
        </div>
      </PreviewBox>

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "title", type: "string", default: "-", description: "Card heading text" },
          { name: "description", type: "string", default: "-", description: "Card body text" },
          { name: "highlighted", type: "boolean", default: "false", description: "Apply primary border and glow shadow" },
          { name: "disabled", type: "boolean", default: "false", description: "Dim the card and disable interactions" },
          { name: "imageSrc", type: "string", default: "-", description: "URL for the header image" },
          { name: "children", type: "ReactNode", default: "-", description: "Custom content inside the card body" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use cards to group related content into scannable, interactive surfaces.</li>
        <li>Only one card per view should be <strong>highlighted</strong> to avoid diluting emphasis.</li>
        <li>Use the <strong>disabled</strong> state for archived or unavailable items.</li>
        <li>Keep card content concise -- cards are entry points, not full pages.</li>
      </ul>
    </>
  );
}
