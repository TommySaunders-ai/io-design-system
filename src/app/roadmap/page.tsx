"use client";

import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";

const roadmapItems = [
  {
    quarter: "Q2 2026",
    status: "In Progress",
    statusColor: "#2563eb",
    statusBg: "#eff6ff",
    statusBorder: "#bfdbfe",
    items: [
      { title: "Dark Mode", desc: "Full dark mode support across all components, patterns, and layouts. Automatic detection with manual override.", priority: "high" },
      { title: "Additional Components", desc: "Modal, Toast, Dropdown, Tooltip, Tabs, and Accordion components with full documentation.", priority: "high" },
      { title: "Accessibility Audit", desc: "WCAG 2.1 AA compliance audit and fixes across all components. Screen reader testing.", priority: "high" },
    ],
  },
  {
    quarter: "Q3 2026",
    status: "Planned",
    statusColor: "#7c3aed",
    statusBg: "#faf5ff",
    statusBorder: "#ddd6fe",
    items: [
      { title: "Figma Kit", desc: "Complete Figma component library mirroring all design system components. Auto-sync with code via tokens.", priority: "high" },
      { title: "npm Package", desc: "Publish the component library as an npm package for easy installation and version management.", priority: "high" },
      { title: "Animation Library", desc: "Standardized entrance, exit, and transition animations using CSS keyframes. Spring-based motion curves.", priority: "medium" },
      { title: "Color Palette Generator", desc: "Interactive tool to generate accessible color palettes from a seed color, following the design token structure.", priority: "medium" },
    ],
  },
  {
    quarter: "Q4 2026",
    status: "Exploring",
    statusColor: "#a3a3a3",
    statusBg: "#f5f5f5",
    statusBorder: "#e5e5e5",
    items: [
      { title: "Theme Builder", desc: "Visual tool to customize design tokens (colors, spacing, radii) and export as a theme file.", priority: "medium" },
      { title: "Storybook Integration", desc: "Interactive component playground with props controls, viewport testing, and visual regression.", priority: "low" },
      { title: "CLI Tool", desc: "Command-line tool to scaffold new components, pages, and patterns following design system conventions.", priority: "low" },
      { title: "Multi-brand Theming", desc: "Support for multiple brand themes sharing the same component architecture with different token sets.", priority: "low" },
    ],
  },
];

const priorityConfig: Record<string, { color: string; bg: string; border: string; label: string }> = {
  high: { color: "#dc2626", bg: "#fef2f2", border: "#fecaca", label: "High" },
  medium: { color: "#f59e0b", bg: "#fffbeb", border: "#fde68a", label: "Medium" },
  low: { color: "#525252", bg: "#f5f5f5", border: "#e5e5e5", label: "Low" },
};

export default function RoadmapPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Roadmap"
        description="Planned features and improvements for the IO Design System. Priorities and timelines are subject to change based on community feedback."
      />

      {/* Timeline */}
      {roadmapItems.map((quarter, qi) => (
        <div key={quarter.quarter} style={{ marginTop: qi === 0 ? 48 : 56 }}>
          {/* Quarter Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#0a0a0a", margin: 0 }}>
              {quarter.quarter}
            </h2>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                color: quarter.statusColor,
                background: quarter.statusBg,
                border: `1px solid ${quarter.statusBorder}`,
              }}
            >
              {quarter.status}
            </span>
          </div>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {quarter.items.map((item) => {
              const pr = priorityConfig[item.priority];
              return (
                <PreviewBox key={item.title}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <circle cx="9" cy="9" r="8" stroke={quarter.statusColor} strokeWidth="1.5" fill="none" />
                          {quarter.status === "In Progress" && (
                            <path d="M9 5v4l3 2" stroke={quarter.statusColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          )}
                          {quarter.status === "Planned" && (
                            <circle cx="9" cy="9" r="3" fill={quarter.statusColor} />
                          )}
                        </svg>
                        <span style={{ fontSize: 16, fontWeight: 600, color: "#0a0a0a" }}>
                          {item.title}
                        </span>
                      </div>
                      <p style={{ fontSize: 14, color: "#525252", lineHeight: 1.6, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 11,
                        fontWeight: 600,
                        color: pr.color,
                        background: pr.bg,
                        border: `1px solid ${pr.border}`,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {pr.label}
                    </span>
                  </div>
                </PreviewBox>
              );
            })}
          </div>
        </div>
      ))}

      {/* Feedback Section */}
      <div
        style={{
          marginTop: 64,
          padding: 32,
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(37, 99, 235, 0.05))",
          border: "1px solid rgba(124, 58, 237, 0.15)",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", margin: "0 0 8px" }}>
          Have a feature request?
        </h3>
        <p style={{ fontSize: 14, color: "#525252", lineHeight: 1.6, margin: "0 0 20px", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          We prioritize based on community needs. If there is something you would like to see in the design system, open an issue on GitHub or reach out to the team.
        </p>
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
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            Open an Issue
          </span>
        </button>
      </div>
    </div>
  );
}
