"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

export default function PageLayoutPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Page Layout"
        description="The standard page layout used across the design system: a header area, max-width content container, and dot background."
      />

      {/* Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo
      </h2>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            minHeight: 400,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #e5e5e5",
            position: "relative",
            background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderBottom: "1px solid #e5e5e5",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg, #7c3aed, #2563eb)" }} />
              <span style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a" }}>App Name</span>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {["Home", "Feed", "Settings"].map((link) => (
                <span key={link} style={{ fontSize: 13, color: "#525252", cursor: "pointer" }}>{link}</span>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 24px" }}>
            <div style={{ background: "#ffffff", borderRadius: 12, border: "1px solid #e5e5e5", padding: 32 }}>
              <div style={{ width: 120, height: 14, borderRadius: 8, background: "#e5e5e5", marginBottom: 12 }} />
              <div style={{ width: "80%", height: 10, borderRadius: 8, background: "#f5f5f5", marginBottom: 8 }} />
              <div style={{ width: "60%", height: 10, borderRadius: 8, background: "#f5f5f5", marginBottom: 24 }} />
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ width: "50%", height: 80, borderRadius: 10, background: "#f5f5f5" }} />
                <div style={{ width: "50%", height: 80, borderRadius: 10, background: "#f5f5f5" }} />
              </div>
            </div>
          </div>
        </div>
      </PreviewBox>

      {/* Structure */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Structure
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The page layout consists of three layers: a dot background that fills the viewport, a frosted-glass header pinned to the top, and a centered content container with a max-width.
      </p>

      {/* Anatomy Diagram */}
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { label: "Header (frosted glass, sticky)", h: 48, bg: "rgba(124, 58, 237, 0.08)", border: "#7c3aed" },
            { label: "Dot Background (full width)", h: 32, bg: "#f5f5f5", border: "#e5e5e5" },
            { label: "Content Container (max-width: 960px, centered)", h: 120, bg: "#ffffff", border: "#2563eb" },
            { label: "Dot Background (continues below content)", h: 32, bg: "#f5f5f5", border: "#e5e5e5" },
          ].map((row) => (
            <div
              key={row.label}
              style={{
                height: row.h,
                borderRadius: 10,
                border: `2px dashed ${row.border}`,
                background: row.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 16px",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "#525252" }}>{row.label}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Implementation
      </h2>
      <CodeBlock
        language="tsx"
        code={`function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle, #e5e5e5 1px, transparent 1px)",
      backgroundSize: "24px 24px",
    }}>
      {/* Sticky header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e5e5",
        padding: "16px 24px",
      }}>
        <nav style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Navigation content */}
        </nav>
      </header>

      {/* Centered content */}
      <main style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "48px 24px",
      }}>
        {children}
      </main>
    </div>
  );
}`}
      />

      {/* Props */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Layout Tokens
      </h2>
      <PropsTable
        rows={[
          { name: "max-width", type: "px", default: "960px", description: "Content container max width" },
          { name: "padding-x", type: "px", default: "24px", description: "Horizontal padding on content" },
          { name: "padding-top", type: "px", default: "48px", description: "Top padding below header" },
          { name: "header-height", type: "px", default: "~56px", description: "Header row height" },
          { name: "dot-size", type: "px", default: "24px", description: "Dot grid background-size" },
        ]}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>The header should use frosted glass so the dot background shows through on scroll.</li>
        <li>Content cards sit on white surfaces above the dot grid.</li>
        <li>Keep max-width at 960px for documentation pages, 1200px for dashboards.</li>
        <li>Use consistent horizontal padding (24px) that compresses on mobile.</li>
      </ul>
    </div>
  );
}
