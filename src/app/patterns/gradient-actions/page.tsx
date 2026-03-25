"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

export default function GradientActionsPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Gradient Actions"
        description="When to use gradient, secondary, and ghost button styles. Includes glow shadow effects for primary actions."
      />

      {/* Button Hierarchy */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Button Hierarchy
      </h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          {/* Gradient / Primary */}
          <button
            style={{
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Primary Action
          </button>
          {/* Secondary */}
          <button
            style={{
              background: "#ffffff",
              color: "#0a0a0a",
              border: "1px solid #e5e5e5",
              borderRadius: 10,
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Secondary
          </button>
          {/* Ghost */}
          <button
            style={{
              background: "transparent",
              color: "#525252",
              border: "none",
              borderRadius: 10,
              padding: "12px 28px",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Ghost
          </button>
        </div>
      </PreviewBox>

      {/* When to Use */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        When to Use Each Style
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Gradient", desc: "One per page/section. The most important action: Submit, Save, Create, Publish.", color: "#7c3aed" },
          { label: "Secondary", desc: "Supporting actions: Cancel, Back, Edit. Can appear multiple times.", color: "#525252" },
          { label: "Ghost", desc: "Tertiary actions: Learn more, View all, minor navigation links.", color: "#a3a3a3" },
        ].map((item) => (
          <div key={item.label} style={{ padding: 20, borderRadius: 12, border: "1px solid #e5e5e5", background: "#ffffff" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: item.color, marginBottom: 8 }}>{item.label}</div>
            <p style={{ fontSize: 14, color: "#525252", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Glow Shadow */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Glow Shadow Effect
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The primary gradient button uses a colored box-shadow that matches the gradient to create a "glow" effect, increasing visual prominence.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", gap: 32, alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "#ffffff",
                border: "none",
                borderRadius: 10,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              No Glow
            </button>
            <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 8 }}>Without shadow</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "#ffffff",
                border: "none",
                borderRadius: 10,
                padding: "12px 28px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              With Glow
            </button>
            <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 8 }}>With glow shadow</div>
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`/* Gradient primary button */
.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.35);
  cursor: pointer;
}

/* Secondary button */
.btn-secondary {
  background: #ffffff;
  color: #0a0a0a;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 12px 28px;
  font-weight: 600;
  cursor: pointer;
}

/* Ghost button */
.btn-ghost {
  background: transparent;
  color: #525252;
  border: none;
  border-radius: 10px;
  padding: 12px 28px;
  font-weight: 500;
  cursor: pointer;
}`}
      />

      {/* Props Reference */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Token Reference
      </h2>
      <PropsTable
        rows={[
          { name: "gradient", type: "CSS gradient", default: "linear-gradient(135deg, #7c3aed, #2563eb)", description: "Primary action gradient" },
          { name: "glow-shadow", type: "box-shadow", default: "0 4px 20px rgba(124,58,237,0.35)", description: "Glow effect for gradient buttons" },
          { name: "border-color", type: "color", default: "#e5e5e5", description: "Border for secondary buttons" },
          { name: "border-radius", type: "px", default: "10px", description: "Button corner rounding" },
        ]}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Limit gradient buttons to one per visible section to maintain hierarchy.</li>
        <li>Always pair a primary action with a secondary (e.g., "Save" + "Cancel").</li>
        <li>Glow shadow should only appear on gradient buttons, never on secondary or ghost.</li>
        <li>On hover, slightly increase the glow spread for a responsive feel.</li>
        <li>Disabled states should reduce opacity to 0.5 and remove the glow shadow.</li>
      </ul>
    </div>
  );
}
