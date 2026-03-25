"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Checkbox component                                */
/* -------------------------------------------------- */

type CheckState = "checked" | "unchecked" | "indeterminate";

function Checkbox({
  state = "unchecked",
  onChange,
  label,
  disabled = false,
}: {
  state?: CheckState;
  onChange?: (s: CheckState) => void;
  label?: string;
  disabled?: boolean;
}) {
  const isChecked = state === "checked";
  const isIndeterminate = state === "indeterminate";
  const active = isChecked || isIndeterminate;

  const handleClick = () => {
    if (disabled) return;
    if (state === "checked") onChange?.("unchecked");
    else onChange?.("checked");
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontSize: 14,
        color: "#0a0a0a",
      }}
    >
      <div
        onClick={handleClick}
        style={{
          width: 20,
          height: 20,
          borderRadius: 6,
          border: active ? "none" : "1.5px solid #d4d4d4",
          background: active ? "linear-gradient(135deg, #7c3aed, #2563eb)" : "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.15s ease",
          flexShrink: 0,
        }}
      >
        {isChecked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
        {isIndeterminate && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
            <line x1="6" y1="12" x2="18" y2="12" />
          </svg>
        )}
      </div>
      {label && <span>{label}</span>}
    </label>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function CheckboxPage() {
  const [items, setItems] = useState<Record<string, boolean>>({
    design: true,
    develop: false,
    test: false,
    deploy: true,
  });

  const allChecked = Object.values(items).every(Boolean);
  const noneChecked = Object.values(items).every((v) => !v);
  const parentState: CheckState = allChecked ? "checked" : noneChecked ? "unchecked" : "indeterminate";

  const toggleAll = () => {
    const next = !allChecked;
    setItems(Object.fromEntries(Object.keys(items).map((k) => [k, next])));
  };

  return (
    <>
      <PageHeader
        title="Checkbox"
        description="Checkboxes allow selecting one or more options. They support checked, unchecked, and indeterminate states with the primary accent gradient."
      />

      {/* -- States -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>States</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          <Checkbox state="unchecked" label="Unchecked" />
          <Checkbox state="checked" label="Checked" />
          <Checkbox state="indeterminate" label="Indeterminate" />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Checkbox state="unchecked" label="Unchecked" />
<Checkbox state="checked" label="Checked" />
<Checkbox state="indeterminate" label="Indeterminate" />`}
      />

      {/* -- Interactive indeterminate -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>
        Indeterminate (Select All)
      </h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        The parent checkbox shows an indeterminate state when some but not all children are selected.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Checkbox
            state={parentState}
            label="Select All Tasks"
            onChange={toggleAll}
          />
          <div style={{ paddingLeft: 30, display: "flex", flexDirection: "column", gap: 10 }}>
            {Object.entries(items).map(([key, val]) => (
              <Checkbox
                key={key}
                state={val ? "checked" : "unchecked"}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                onChange={() => setItems((prev) => ({ ...prev, [key]: !prev[key] }))}
              />
            ))}
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`const allChecked = items.every(Boolean);
const noneChecked = items.every(v => !v);
const parentState = allChecked ? "checked" : noneChecked ? "unchecked" : "indeterminate";

<Checkbox state={parentState} onChange={toggleAll} label="Select All" />
{items.map(item => (
  <Checkbox state={item.checked ? "checked" : "unchecked"} ... />
))}`}
      />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 32 }}>
          <Checkbox state="checked" disabled label="Locked on" />
          <Checkbox state="unchecked" disabled label="Locked off" />
        </div>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Checkbox disabled state="checked" label="Locked" />`} />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "state", type: '"checked" | "unchecked" | "indeterminate"', default: '"unchecked"', description: "Current visual state" },
          { name: "onChange", type: "(state: CheckState) => void", default: "-", description: "Callback on toggle" },
          { name: "label", type: "string", default: "-", description: "Text label" },
          { name: "disabled", type: "boolean", default: "false", description: "Prevent interaction" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use checkboxes when users can select multiple items from a list.</li>
        <li>Use the indeterminate state for "select all" controls with partial selection.</li>
        <li>Always provide a visible label. Do not rely on the checkbox alone for meaning.</li>
        <li>In forms, use checkboxes rather than toggles since forms require explicit submission.</li>
      </ul>
    </>
  );
}
