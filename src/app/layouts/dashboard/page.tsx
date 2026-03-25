"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

const sidebarItems = [
  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4", label: "Dashboard" },
  { icon: "M4 6h16M4 10h16M4 14h16M4 18h16", label: "Feed" },
  { icon: "M12 6v6m0 0v6m0-6h6m-6 0H6", label: "Create" },
  { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", label: "Settings" },
];

export default function DashboardLayoutPage() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Dashboard Layout"
        description="A sidebar-plus-main-content layout for application dashboards. Includes responsive behavior for collapsing on smaller screens."
      />

      {/* Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo
      </h2>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            height: 400,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #e5e5e5",
            display: "flex",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              width: 220,
              background: "#ffffff",
              borderRight: "1px solid #e5e5e5",
              padding: "20px 12px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
              flexShrink: 0,
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", marginBottom: 16 }}>
              <div style={{ width: 24, height: 24, borderRadius: 8, background: "linear-gradient(135deg, #7c3aed, #2563eb)" }} />
              <span style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a" }}>IO Platform</span>
            </div>
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                  background: activeItem === item.label ? "#f5f5f5" : "transparent",
                  fontWeight: activeItem === item.label ? 600 : 400,
                  color: activeItem === item.label ? "#0a0a0a" : "#525252",
                  fontSize: 14,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div
            style={{
              flex: 1,
              background: "#fafafa",
              padding: 24,
              overflowY: "auto",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a", marginBottom: 20 }}>{activeItem}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {["Revenue", "Users", "Posts", "Engagement"].map((stat) => (
                <div
                  key={stat}
                  style={{
                    background: "#ffffff",
                    borderRadius: 12,
                    border: "1px solid #e5e5e5",
                    padding: 20,
                  }}
                >
                  <div style={{ fontSize: 12, color: "#a3a3a3", fontWeight: 500, marginBottom: 4 }}>{stat}</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0a" }}>--</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PreviewBox>

      {/* Responsive: Collapsed Sidebar */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Collapsed Sidebar (Mobile)
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        On screens below 768px, the sidebar collapses to icon-only mode (56px wide). Labels are hidden and shown via tooltip on hover.
      </p>
      <PreviewBox>
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            height: 300,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #e5e5e5",
            display: "flex",
          }}
        >
          {/* Collapsed sidebar */}
          <div
            style={{
              width: 56,
              background: "#ffffff",
              borderRight: "1px solid #e5e5e5",
              padding: "20px 8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
            }}
          >
            <div style={{ width: 24, height: 24, borderRadius: 8, background: "linear-gradient(135deg, #7c3aed, #2563eb)", marginBottom: 16 }} />
            {sidebarItems.map((item, i) => (
              <div
                key={item.label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: i === 0 ? "#f5f5f5" : "transparent",
                  cursor: "pointer",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? "#0a0a0a" : "#525252"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
            ))}
          </div>

          {/* Main */}
          <div style={{ flex: 1, background: "#fafafa", padding: 20 }}>
            <div style={{ width: 100, height: 12, borderRadius: 8, background: "#e5e5e5", marginBottom: 16 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              {["A", "B", "C"].map((s) => (
                <div key={s} style={{ height: 48, borderRadius: 10, background: "#ffffff", border: "1px solid #e5e5e5" }} />
              ))}
            </div>
          </div>
        </div>
      </PreviewBox>

      {/* Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Implementation
      </h2>
      <CodeBlock
        language="tsx"
        code={`function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: "#ffffff",
        borderRight: "1px solid #e5e5e5",
        padding: "20px 12px",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
      }}>
        {/* Logo + Nav items */}
      </aside>

      {/* Main content */}
      <main style={{
        flex: 1,
        background: "#fafafa",
        padding: 24,
        minWidth: 0,
      }}>
        {children}
      </main>
    </div>
  );
}

/* Responsive: collapse sidebar below 768px */
/* Use CSS media query or a state toggle */
@media (max-width: 768px) {
  aside { width: 56px; }
  .sidebar-label { display: none; }
}`}
      />

      {/* Tokens */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Layout Tokens
      </h2>
      <PropsTable
        rows={[
          { name: "sidebar-width", type: "px", default: "220px", description: "Expanded sidebar width" },
          { name: "sidebar-collapsed", type: "px", default: "56px", description: "Collapsed sidebar width (mobile)" },
          { name: "sidebar-bg", type: "color", default: "#ffffff", description: "Sidebar background" },
          { name: "main-bg", type: "color", default: "#fafafa", description: "Main content area background" },
          { name: "main-padding", type: "px", default: "24px", description: "Padding inside main area" },
          { name: "nav-item-radius", type: "px", default: "8px", description: "Navigation item border-radius" },
        ]}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Keep the sidebar sticky so navigation is always accessible.</li>
        <li>Highlight the active nav item with a subtle background change.</li>
        <li>On mobile, collapse to icon-only or use a hamburger menu overlay.</li>
        <li>The main content area should have a slightly different background to create visual separation.</li>
        <li>Set <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>minWidth: 0</code> on the flex child to prevent overflow issues.</li>
      </ul>
    </div>
  );
}
