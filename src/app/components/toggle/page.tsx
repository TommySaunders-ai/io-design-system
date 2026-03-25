"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Toggle component                                  */
/* -------------------------------------------------- */

function Toggle({
  checked,
  onChange,
  size = "md",
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  size?: "sm" | "md";
  disabled?: boolean;
  label?: string;
}) {
  const dims = size === "sm" ? { w: 36, h: 20, dot: 14, pad: 3 } : { w: 48, h: 28, dot: 20, pad: 4 };
  const offset = checked ? dims.w - dims.dot - dims.pad * 2 : 0;

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: dims.w,
          height: dims.h,
          borderRadius: 9999,
          background: checked ? "linear-gradient(135deg, #7c3aed, #2563eb)" : "#e5e5e5",
          padding: dims.pad,
          transition: "background 0.25s ease",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: dims.dot,
            height: dims.dot,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            transform: `translateX(${offset}px)`,
            transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      {label && <span style={{ fontSize: size === "sm" ? 13 : 14, color: "#0a0a0a" }}>{label}</span>}
    </label>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function TogglePage() {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  const [c, setC] = useState(true);
  const [d, setD] = useState(false);

  return (
    <>
      <PageHeader
        title="Toggle"
        description="Toggles switch between two states (on/off). They use a gradient animation when active and come in two sizes."
      />

      {/* -- On/Off -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>On / Off</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Toggle checked={a} onChange={setA} label="Notifications" />
          <Toggle checked={b} onChange={setB} label="Dark Mode" />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Toggle checked={enabled} onChange={setEnabled} label="Notifications" />`}
      />

      {/* -- Sizes -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Sizes</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Toggle checked={c} onChange={setC} size="sm" label="Small toggle" />
          <Toggle checked={d} onChange={setD} size="md" label="Medium toggle (default)" />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Toggle size="sm" checked={val} onChange={setVal} />
<Toggle size="md" checked={val} onChange={setVal} />`}
      />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Toggle checked={true} onChange={() => {}} disabled label="Locked on" />
          <Toggle checked={false} onChange={() => {}} disabled label="Locked off" />
        </div>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Toggle disabled checked={true} onChange={() => {}} />`} />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "checked", type: "boolean", default: "-", description: "Current toggle state" },
          { name: "onChange", type: "(value: boolean) => void", default: "-", description: "Callback when toggled" },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Toggle size" },
          { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction" },
          { name: "label", type: "string", default: "-", description: "Text label next to the toggle" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use toggles for binary settings that take effect immediately.</li>
        <li>Always pair with a text label describing what the toggle controls.</li>
        <li>Use the <strong>sm</strong> size in compact UIs like table rows or settings lists.</li>
        <li>Do not use toggles in forms that require explicit submission; use checkboxes instead.</li>
      </ul>
    </>
  );
}
