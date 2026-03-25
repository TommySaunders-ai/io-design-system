"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Tag component                                     */
/* -------------------------------------------------- */

type TagColor = "primary" | "info" | "success" | "warning" | "danger" | "neutral";

const TAG_COLORS: Record<TagColor, { bg: string; fg: string; border: string }> = {
  primary: { bg: "#ede9fe", fg: "#7c3aed", border: "#7c3aed" },
  info:    { bg: "#dbeafe", fg: "#2563eb", border: "#2563eb" },
  success: { bg: "#dcfce7", fg: "#16a34a", border: "#16a34a" },
  warning: { bg: "#fef3c7", fg: "#d97706", border: "#d97706" },
  danger:  { bg: "#fee2e2", fg: "#dc2626", border: "#dc2626" },
  neutral: { bg: "#f5f5f5", fg: "#525252", border: "#d4d4d4" },
};

function Tag({
  label,
  color = "primary",
  selected = false,
  onToggle,
}: {
  label: string;
  color?: TagColor;
  selected?: boolean;
  onToggle?: () => void;
}) {
  const c = TAG_COLORS[color];
  return (
    <button
      onClick={onToggle}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        fontSize: 13,
        fontWeight: 500,
        fontFamily: "inherit",
        borderRadius: 9999,
        border: selected ? `1.5px solid ${c.border}` : "1.5px solid #e5e5e5",
        background: selected ? c.bg : "#ffffff",
        color: selected ? c.fg : "#525252",
        cursor: "pointer",
        transition: "all 0.15s ease",
        lineHeight: 1,
      }}
    >
      {selected && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.fg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
      {label}
    </button>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

const TOPICS = ["AI", "Design", "Engineering", "Product", "Marketing", "Data Science", "DevOps"];

export default function TagPage() {
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set(["AI", "Design"]));
  const [colorDemo, setColorDemo] = useState<Set<string>>(new Set(["Primary"]));

  const toggleTopic = (t: string) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  const toggleColorDemo = (t: string) => {
    setColorDemo((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  return (
    <>
      <PageHeader
        title="Tag"
        description="Selectable chip tags for filtering, categorization, and multi-select. Each includes a check icon when selected."
      />

      {/* -- Selectable tags -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Selectable Tags</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click tags to toggle selection. Selected tags show a checkmark and colored background.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TOPICS.map((t) => (
            <Tag
              key={t}
              label={t}
              selected={selectedTopics.has(t)}
              onToggle={() => toggleTopic(t)}
            />
          ))}
        </div>
        <div style={{ marginTop: 16, fontSize: 13, color: "#a3a3a3" }}>
          Selected: {selectedTopics.size > 0 ? Array.from(selectedTopics).join(", ") : "none"}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`const [selected, setSelected] = useState(new Set(["AI"]));

<Tag
  label="AI"
  selected={selected.has("AI")}
  onToggle={() => toggle("AI")}
/>`}
      />

      {/* -- Color variants -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Color Variants</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {(["primary", "info", "success", "warning", "danger", "neutral"] as TagColor[]).map((c) => {
            const label = c.charAt(0).toUpperCase() + c.slice(1);
            return (
              <Tag
                key={c}
                label={label}
                color={c}
                selected={colorDemo.has(label)}
                onToggle={() => toggleColorDemo(label)}
              />
            );
          })}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Tag label="Primary" color="primary" selected />
<Tag label="Success" color="success" selected />
<Tag label="Danger" color="danger" />`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: "-", description: "Tag display text" },
          { name: "color", type: '"primary" | "info" | "success" | "warning" | "danger" | "neutral"', default: '"primary"', description: "Color scheme" },
          { name: "selected", type: "boolean", default: "false", description: "Whether the tag is selected" },
          { name: "onToggle", type: "() => void", default: "-", description: "Callback when tag is clicked" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use tags for multi-select filtering, topic categorization, or skill lists.</li>
        <li>Group related tags together and limit visible options to avoid overwhelm.</li>
        <li>The check icon provides visual confirmation of selection state.</li>
        <li>Use color variants to distinguish between tag categories.</li>
      </ul>
    </>
  );
}
