"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

export default function FrostedGlassPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Frosted Glass"
        description="A translucent panel effect using backdrop-filter blur. Ideal for overlays, navigation bars, and floating cards."
      />

      {/* Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo
      </h2>
      <PreviewBox>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 320,
            borderRadius: 12,
            overflow: "hidden",
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
          }}
        >
          {/* Decorative shapes behind the glass */}
          <div style={{ position: "absolute", top: 40, left: 60, width: 100, height: 100, borderRadius: 999, background: "#f59e0b", opacity: 0.8 }} />
          <div style={{ position: "absolute", top: 80, right: 80, width: 140, height: 80, borderRadius: 12, background: "#10b981", opacity: 0.7 }} />
          <div style={{ position: "absolute", bottom: 40, left: "30%", width: 120, height: 120, borderRadius: 999, background: "#ef4444", opacity: 0.6 }} />

          {/* Frosted glass panel */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              padding: "32px",
              borderRadius: 16,
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#ffffff" }}>
              Frosted Glass Panel
            </h3>
            <p style={{ margin: "8px 0 0", fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
              Content is readable while the background shows through with a soft blur.
            </p>
          </div>
        </div>
      </PreviewBox>

      {/* CSS Implementation */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        CSS Implementation
      </h2>
      <CodeBlock
        language="css"
        code={`.frosted-glass {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
}`}
      />

      {/* Light Surface Variant */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Light Surface Variant
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        For use on light backgrounds, increase the white opacity and reduce blur slightly.
      </p>
      <PreviewBox>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 240,
            borderRadius: 12,
            overflow: "hidden",
            background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <div style={{ position: "absolute", top: 20, left: 40, width: 160, height: 80, borderRadius: 12, background: "linear-gradient(135deg, #7c3aed, #2563eb)", opacity: 0.5 }} />
          <div style={{ position: "absolute", bottom: 30, right: 60, width: 120, height: 120, borderRadius: 999, background: "#7c3aed", opacity: 0.3 }} />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              padding: "24px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: "#0a0a0a" }}>
              Light frosted panel
            </span>
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="css"
        code={`.frosted-glass-light {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
}`}
      />

      {/* Props / Tokens */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Configurable Tokens
      </h2>
      <PropsTable
        rows={[
          { name: "background", type: "color", default: "rgba(255,255,255,0.15)", description: "Panel background with alpha transparency" },
          { name: "blur", type: "px", default: "16px", description: "Blur radius for the backdrop-filter" },
          { name: "border", type: "color", default: "rgba(255,255,255,0.25)", description: "Semi-transparent border for edge definition" },
          { name: "border-radius", type: "px", default: "16px", description: "Corner rounding (min 8px per system rules)" },
        ]}
      />

      {/* Usage Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Usage Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always include the <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>-webkit-backdrop-filter</code> prefix for Safari support.</li>
        <li>The effect requires a visually rich background behind the panel to be noticeable.</li>
        <li>Pair with semi-transparent borders for edge definition.</li>
        <li>Use on navigation bars, modal overlays, and floating toolbars.</li>
        <li>Avoid excessive blur values (&gt;24px) -- they reduce performance on lower-end devices.</li>
      </ul>
    </div>
  );
}
