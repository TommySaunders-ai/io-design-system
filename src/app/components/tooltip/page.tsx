"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Tooltip component                                 */
/* -------------------------------------------------- */

type TooltipPosition = "top" | "bottom" | "left" | "right";

function Tooltip({
  children,
  content,
  position = "top",
}: {
  children: React.ReactNode;
  content: string;
  position?: TooltipPosition;
}) {
  const [show, setShow] = useState(false);

  const posStyles: Record<TooltipPosition, React.CSSProperties> = {
    top:    { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left:   { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right:  { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  };

  const arrowStyles: Record<TooltipPosition, React.CSSProperties> = {
    top:    { bottom: -4, left: "50%", transform: "translateX(-50%) rotate(45deg)" },
    bottom: { top: -4, left: "50%", transform: "translateX(-50%) rotate(45deg)" },
    left:   { right: -4, top: "50%", transform: "translateY(-50%) rotate(45deg)" },
    right:  { left: -4, top: "50%", transform: "translateY(-50%) rotate(45deg)" },
  };

  return (
    <div
      style={{ position: "relative", display: "inline-flex" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          style={{
            position: "absolute",
            ...posStyles[position],
            background: "#0a0a0a",
            color: "#ffffff",
            fontSize: 12,
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            zIndex: 50,
            pointerEvents: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          {content}
          <div
            style={{
              position: "absolute",
              width: 8,
              height: 8,
              background: "#0a0a0a",
              ...arrowStyles[position],
            }}
          />
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------- */
/*  Demo button                                       */
/* -------------------------------------------------- */

function DemoButton({ label }: { label: string }) {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: 14,
        fontWeight: 500,
        fontFamily: "inherit",
        borderRadius: 8,
        border: "1.5px solid #e5e5e5",
        background: "#ffffff",
        color: "#0a0a0a",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function TooltipPage() {
  const [pos, setPos] = useState<TooltipPosition>("top");

  return (
    <>
      <PageHeader
        title="Tooltip"
        description="Tooltips provide additional context on hover. They support four positions and feature a small arrow pointing to the trigger."
      />

      {/* -- Positions -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Positions</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", padding: "40px 0" }}>
          <Tooltip content="I appear on top" position="top">
            <DemoButton label="Top" />
          </Tooltip>
          <Tooltip content="I appear on the bottom" position="bottom">
            <DemoButton label="Bottom" />
          </Tooltip>
          <Tooltip content="I appear on the left" position="left">
            <DemoButton label="Left" />
          </Tooltip>
          <Tooltip content="I appear on the right" position="right">
            <DemoButton label="Right" />
          </Tooltip>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Tooltip content="Edit this item" position="top">
  <button>Edit</button>
</Tooltip>`}
      />

      {/* -- Interactive demo -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Interactive Demo</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Select a position then hover the button to see the tooltip.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {(["top", "bottom", "left", "right"] as TooltipPosition[]).map((p) => (
              <button
                key={p}
                onClick={() => setPos(p)}
                style={{
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  borderRadius: 8,
                  border: pos === p ? "1.5px solid #7c3aed" : "1.5px solid #e5e5e5",
                  background: pos === p ? "#ede9fe" : "#ffffff",
                  color: pos === p ? "#7c3aed" : "#525252",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <div style={{ padding: 40 }}>
            <Tooltip content={`Position: ${pos}`} position={pos}>
              <button
                style={{
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "inherit",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Hover Me
              </button>
            </Tooltip>
          </div>
        </div>
      </PreviewBox>

      {/* -- With icons -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Icon Button with Tooltip</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12 }}>
          <Tooltip content="Edit" position="top">
            <button style={{ width: 40, height: 40, borderRadius: 8, border: "1.5px solid #e5e5e5", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </Tooltip>
          <Tooltip content="Delete" position="top">
            <button style={{ width: 40, height: 40, borderRadius: 8, border: "1.5px solid #e5e5e5", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14H7L5 6" /><path d="M10 11v6" /><path d="M14 11v6" />
              </svg>
            </button>
          </Tooltip>
          <Tooltip content="Copy link" position="top">
            <button style={{ width: 40, height: 40, borderRadius: 8, border: "1.5px solid #e5e5e5", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
          </Tooltip>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Tooltip content="Edit" position="top">
  <IconButton icon={<EditIcon />} />
</Tooltip>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "children", type: "ReactNode", default: "-", description: "Trigger element" },
          { name: "content", type: "string", default: "-", description: "Tooltip text" },
          { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Where the tooltip appears relative to the trigger" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use tooltips for supplementary information, not essential content.</li>
        <li>Always provide tooltips on icon-only buttons for accessibility.</li>
        <li>Keep tooltip text short -- ideally under 5 words.</li>
        <li>Prefer <strong>top</strong> position unless space constraints require otherwise.</li>
      </ul>
    </>
  );
}
