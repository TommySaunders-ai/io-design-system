"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Status config                                     */
/* -------------------------------------------------- */

type Status =
  | "empty"
  | "generated"
  | "in_review"
  | "approved"
  | "scheduled"
  | "published"
  | "rejected"
  | "archived";

const STATUS_MAP: Record<Status, { label: string; bg: string; fg: string; dot: string }> = {
  empty:     { label: "Empty",      bg: "#f5f5f5",  fg: "#525252",  dot: "#a3a3a3" },
  generated: { label: "Generated",  bg: "#ede9fe",  fg: "#7c3aed",  dot: "#7c3aed" },
  in_review: { label: "In Review",  bg: "#fef3c7",  fg: "#d97706",  dot: "#d97706" },
  approved:  { label: "Approved",   bg: "#dcfce7",  fg: "#16a34a",  dot: "#16a34a" },
  scheduled: { label: "Scheduled",  bg: "#dbeafe",  fg: "#2563eb",  dot: "#2563eb" },
  published: { label: "Published",  bg: "#dcfce7",  fg: "#16a34a",  dot: "#16a34a" },
  rejected:  { label: "Rejected",   bg: "#fee2e2",  fg: "#dc2626",  dot: "#dc2626" },
  archived:  { label: "Archived",   bg: "#f5f5f5",  fg: "#a3a3a3",  dot: "#a3a3a3" },
};

const ALL_STATUSES: Status[] = [
  "empty", "generated", "in_review", "approved",
  "scheduled", "published", "rejected", "archived",
];

/* -------------------------------------------------- */
/*  Badge component                                   */
/* -------------------------------------------------- */

function Badge({ status }: { status: Status }) {
  const cfg = STATUS_MAP[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 12px",
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 9999,
        background: cfg.bg,
        color: cfg.fg,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: cfg.dot,
          flexShrink: 0,
        }}
      />
      {cfg.label}
    </span>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function BadgePage() {
  const [active, setActive] = useState<Status>("empty");

  return (
    <>
      <PageHeader
        title="Badge"
        description="Status badges communicate the current lifecycle state of content items. Each status has a unique color and label."
      />

      {/* -- All statuses -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>All Statuses</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {ALL_STATUSES.map((s) => (
            <Badge key={s} status={s} />
          ))}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Badge status="empty" />
<Badge status="generated" />
<Badge status="in_review" />
<Badge status="approved" />
<Badge status="scheduled" />
<Badge status="published" />
<Badge status="rejected" />
<Badge status="archived" />`}
      />

      {/* -- Interactive demo -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Interactive Demo</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click a status below to cycle through the content lifecycle.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <Badge status={active} />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
            {ALL_STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                style={{
                  padding: "6px 14px",
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  borderRadius: 8,
                  border: active === s ? "1.5px solid #7c3aed" : "1.5px solid #e5e5e5",
                  background: active === s ? "#ede9fe" : "#ffffff",
                  color: active === s ? "#7c3aed" : "#525252",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {STATUS_MAP[s].label}
              </button>
            ))}
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`const [status, setStatus] = useState<Status>("empty");

<Badge status={status} />

<button onClick={() => setStatus("approved")}>
  Approve
</button>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          {
            name: "status",
            type: '"empty" | "generated" | "in_review" | "approved" | "scheduled" | "published" | "rejected" | "archived"',
            default: "-",
            description: "Current lifecycle status to display",
          },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Each content item should display exactly one badge at a time.</li>
        <li>Use the color-coded dot to reinforce status at a glance.</li>
        <li>Badges are read-only indicators; do not use them as buttons.</li>
        <li>When listing content, badges should be right-aligned in table rows for scannability.</li>
      </ul>
    </>
  );
}
