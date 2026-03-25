"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";

const versions = [
  {
    version: "v1.0.0",
    date: "March 25, 2026",
    label: "Initial Release",
    labelColor: "#16a34a",
    labelBg: "#f0fdf4",
    labelBorder: "#bbf7d0",
    changes: [
      { category: "Patterns", items: [
        "Dot Background -- CSS radial-gradient page background pattern",
        "Frosted Glass -- backdrop-filter blur panel effect",
        "Gradient Actions -- Primary, secondary, and ghost button hierarchy with glow shadow",
        "Hover Lift -- translateY + shadow micro-interaction",
        "Glow Focus -- Purple focus ring for inputs, cards, and buttons",
        "Masonry Grid -- CSS column-count responsive layout",
        "Status Lifecycle -- Full status enum with colors and state machine",
      ]},
      { category: "Layouts", items: [
        "Page Layout -- Standard header + content + dot background",
        "Dashboard Layout -- Sidebar + main content with responsive collapse",
        "Form Layout -- Stacked and two-column form patterns",
      ]},
      { category: "Feed Builder", items: [
        "Overview -- Four-stage pipeline architecture (Connect, Source, Creative, Publish)",
        "Notion Connect -- OAuth flow, database/page selection",
        "Source Feed -- Masonry grid with property fetching and Send to Creative workflow",
        "Creative Feed -- Workshop cards with Edit/Preview toolbar and action bar",
        "Publish -- Publishing queue and distribution integrations",
      ]},
      { category: "Documentation Components", items: [
        "PageHeader -- Title and description component",
        "CodeBlock -- Syntax-highlighted code with copy button",
        "PreviewBox -- Live demo wrapper",
        "PropsTable -- Property/token reference table",
      ]},
      { category: "Design Tokens", items: [
        "Primary gradient: linear-gradient(135deg, #7c3aed, #2563eb)",
        "Surface: #ffffff",
        "Border: #e5e5e5",
        "Text hierarchy: #0a0a0a / #525252 / #a3a3a3",
        "Minimum border-radius: 8px",
      ]},
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Changelog"
        description="Version history and release notes for the IO Design System."
      />

      {versions.map((ver) => (
        <div key={ver.version} style={{ marginTop: 48 }}>
          {/* Version Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
              {ver.version}
            </h2>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: ver.labelColor,
                background: ver.labelBg,
                border: `1px solid ${ver.labelBorder}`,
              }}
            >
              {ver.label}
            </span>
            <span style={{ fontSize: 14, color: "#a3a3a3" }}>{ver.date}</span>
          </div>

          {/* Changes by Category */}
          {ver.changes.map((section) => (
            <div key={section.category} style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="14" height="14" rx="3" stroke="#7c3aed" strokeWidth="1.5" />
                  <polyline points="4,8 7,11 12,5" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                {section.category}
              </h3>
              <PreviewBox>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: 14,
                        color: "#525252",
                        lineHeight: 2,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </PreviewBox>
            </div>
          ))}
        </div>
      ))}

      {/* Previous versions placeholder */}
      <div style={{ marginTop: 48, padding: 24, borderRadius: 12, border: "1px dashed #e5e5e5", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#a3a3a3", margin: 0 }}>
          No previous versions. This is the initial release.
        </p>
      </div>
    </div>
  );
}
