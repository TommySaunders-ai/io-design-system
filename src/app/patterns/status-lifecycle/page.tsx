"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

const statuses = [
  { key: "draft", label: "Draft", bg: "#f5f5f5", color: "#525252", border: "#e5e5e5" },
  { key: "in_review", label: "In Review", bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" },
  { key: "approved", label: "Approved", bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" },
  { key: "scheduled", label: "Scheduled", bg: "#faf5ff", color: "#7c3aed", border: "#ddd6fe" },
  { key: "published", label: "Published", bg: "#ecfdf5", color: "#059669", border: "#a7f3d0" },
  { key: "rejected", label: "Rejected", bg: "#fef2f2", color: "#dc2626", border: "#fecaca" },
  { key: "archived", label: "Archived", bg: "#f5f5f5", color: "#a3a3a3", border: "#e5e5e5" },
];

const transitions = [
  { from: "Draft", to: "In Review" },
  { from: "In Review", to: "Approved" },
  { from: "In Review", to: "Rejected" },
  { from: "Approved", to: "Scheduled" },
  { from: "Scheduled", to: "Published" },
  { from: "Published", to: "Archived" },
  { from: "Rejected", to: "Draft" },
];

function ArrowSvg() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ flexShrink: 0 }}>
      <line x1="0" y1="8" x2="24" y2="8" stroke="#a3a3a3" strokeWidth="2" />
      <polyline points="20,3 27,8 20,13" fill="none" stroke="#a3a3a3" strokeWidth="2" />
    </svg>
  );
}

export default function StatusLifecyclePage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Status Lifecycle"
        description="A complete status enum with associated colors, a state machine diagram, and usage guidelines for the content pipeline."
      />

      {/* Status Badges */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Status Badges
      </h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {statuses.map((s) => (
            <span
              key={s.key}
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                color: s.color,
                background: s.bg,
                border: `1px solid ${s.border}`,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </PreviewBox>

      {/* State Machine Diagram */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        State Machine Diagram
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Content moves through these states in the pipeline. The diagram below shows valid transitions.
      </p>
      <PreviewBox>
        <div style={{ overflowX: "auto" }}>
          {/* Main flow */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "nowrap", marginBottom: 32 }}>
            {["Draft", "In Review", "Approved", "Scheduled", "Published", "Archived"].map((label, i, arr) => {
              const s = statuses.find((st) => st.label === label)!;
              return (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      padding: "10px 18px",
                      borderRadius: 10,
                      background: s.bg,
                      border: `2px solid ${s.border}`,
                      fontSize: 13,
                      fontWeight: 600,
                      color: s.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </div>
                  {i < arr.length - 1 && <ArrowSvg />}
                </div>
              );
            })}
          </div>

          {/* Rejection branch */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 0 }}>
            <div style={{ fontSize: 13, color: "#a3a3a3", fontStyle: "italic", marginRight: 8, whiteSpace: "nowrap" }}>
              Rejection path:
            </div>
            <div style={{ padding: "10px 18px", borderRadius: 10, background: "#eff6ff", border: "2px solid #bfdbfe", fontSize: 13, fontWeight: 600, color: "#2563eb", whiteSpace: "nowrap" }}>
              In Review
            </div>
            <ArrowSvg />
            <div style={{ padding: "10px 18px", borderRadius: 10, background: "#fef2f2", border: "2px solid #fecaca", fontSize: 13, fontWeight: 600, color: "#dc2626", whiteSpace: "nowrap" }}>
              Rejected
            </div>
            <ArrowSvg />
            <div style={{ padding: "10px 18px", borderRadius: 10, background: "#f5f5f5", border: "2px solid #e5e5e5", fontSize: 13, fontWeight: 600, color: "#525252", whiteSpace: "nowrap" }}>
              Draft
            </div>
            <span style={{ fontSize: 12, color: "#a3a3a3", marginLeft: 8 }}>(revision cycle)</span>
          </div>
        </div>
      </PreviewBox>

      {/* Transition Table */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Valid Transitions
      </h2>
      <div style={{ borderRadius: 12, border: "1px solid #e5e5e5", overflow: "hidden", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>From</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>To</th>
            </tr>
          </thead>
          <tbody>
            {transitions.map((t, i) => (
              <tr key={i}>
                <td style={{ padding: "10px 16px", color: "#525252", borderBottom: "1px solid #e5e5e5" }}>{t.from}</td>
                <td style={{ padding: "10px 16px", color: "#525252", borderBottom: "1px solid #e5e5e5" }}>{t.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Color Reference */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Color Reference
      </h2>
      <PropsTable
        rows={statuses.map((s) => ({
          name: s.key,
          type: "status",
          default: s.color,
          description: `Background: ${s.bg}, Border: ${s.border}, Text: ${s.color}`,
        }))}
      />

      {/* TypeScript Enum */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        TypeScript Enum
      </h2>
      <CodeBlock
        language="ts"
        code={`enum ContentStatus {
  Draft = "draft",
  InReview = "in_review",
  Approved = "approved",
  Scheduled = "scheduled",
  Published = "published",
  Rejected = "rejected",
  Archived = "archived",
}

const STATUS_CONFIG: Record<ContentStatus, {
  label: string;
  bg: string;
  color: string;
  border: string;
}> = {
  [ContentStatus.Draft]: {
    label: "Draft",
    bg: "#f5f5f5",
    color: "#525252",
    border: "#e5e5e5",
  },
  [ContentStatus.InReview]: {
    label: "In Review",
    bg: "#eff6ff",
    color: "#2563eb",
    border: "#bfdbfe",
  },
  [ContentStatus.Approved]: {
    label: "Approved",
    bg: "#f0fdf4",
    color: "#16a34a",
    border: "#bbf7d0",
  },
  [ContentStatus.Scheduled]: {
    label: "Scheduled",
    bg: "#faf5ff",
    color: "#7c3aed",
    border: "#ddd6fe",
  },
  [ContentStatus.Published]: {
    label: "Published",
    bg: "#ecfdf5",
    color: "#059669",
    border: "#a7f3d0",
  },
  [ContentStatus.Rejected]: {
    label: "Rejected",
    bg: "#fef2f2",
    color: "#dc2626",
    border: "#fecaca",
  },
  [ContentStatus.Archived]: {
    label: "Archived",
    bg: "#f5f5f5",
    color: "#a3a3a3",
    border: "#e5e5e5",
  },
};`}
      />

      {/* Usage in Pipeline */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Usage in Content Pipeline
      </h2>
      <CodeBlock
        language="tsx"
        code={`function StatusBadge({ status }: { status: ContentStatus }) {
  const config = STATUS_CONFIG[status];
  return (
    <span style={{
      padding: "6px 14px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      color: config.color,
      background: config.bg,
      border: \`1px solid \${config.border}\`,
    }}>
      {config.label}
    </span>
  );
}`}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always use the STATUS_CONFIG lookup for consistent colors across the app.</li>
        <li>Only allow transitions defined in the state machine -- validate server-side.</li>
        <li>Rejected content should return to Draft for revision, not skip to Approved.</li>
        <li>Archived is a terminal state -- content cannot be un-archived.</li>
        <li>Use pill-shaped badges (border-radius: 999) for status indicators.</li>
      </ul>
    </div>
  );
}
