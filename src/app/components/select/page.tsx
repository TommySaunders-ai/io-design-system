"use client";

import { useState, useRef, useEffect } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Select component                                  */
/* -------------------------------------------------- */

function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
}: {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", maxWidth: 340 }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a" }}>{label}</label>
      )}
      <div ref={ref} style={{ position: "relative" }}>
        <button
          onClick={() => !disabled && setOpen(!open)}
          disabled={disabled}
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: 8,
            border: open ? "1.5px solid #7c3aed" : "1.5px solid #e5e5e5",
            background: disabled ? "#f5f5f5" : "#ffffff",
            boxShadow: open ? "0 4px 20px rgba(124,58,237,0.3)" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.6 : 1,
            fontSize: 14,
            fontFamily: "inherit",
            color: selected ? "#0a0a0a" : "#a3a3a3",
            transition: "all 0.15s ease",
          }}
        >
          <span>{selected ? selected.label : placeholder}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#7c3aed" : "#a3a3a3"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 0.2s ease",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {open && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              background: "#ffffff",
              border: "1px solid #e5e5e5",
              borderRadius: 12,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              zIndex: 10,
              overflow: "hidden",
              padding: 4,
            }}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                style={{
                  padding: "10px 14px",
                  fontSize: 14,
                  cursor: "pointer",
                  borderRadius: 8,
                  color: opt.value === value ? "#7c3aed" : "#0a0a0a",
                  fontWeight: opt.value === value ? 600 : 400,
                  background: opt.value === value ? "#ede9fe" : "transparent",
                  transition: "background 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  if (opt.value !== value)
                    e.currentTarget.style.background = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  if (opt.value !== value)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

const FRUIT_OPTIONS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "dragonfruit", label: "Dragon Fruit" },
  { value: "elderberry", label: "Elderberry" },
];

export default function SelectPage() {
  const [fruit, setFruit] = useState<string>("");
  const [role, setRole] = useState<string>("editor");

  return (
    <>
      <PageHeader
        title="Select"
        description="A custom dropdown select with keyboard-friendly interactions, custom arrow icon, and open/selected states."
      />

      {/* -- Default -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Default</h2>
      <PreviewBox>
        <Select
          label="Favorite Fruit"
          options={FRUIT_OPTIONS}
          value={fruit}
          onChange={setFruit}
          placeholder="Pick a fruit..."
        />
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Select
  label="Favorite Fruit"
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ]}
  value={fruit}
  onChange={setFruit}
/>`}
      />

      {/* -- Pre-selected -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Pre-selected</h2>
      <PreviewBox>
        <Select
          label="Role"
          options={[
            { value: "viewer", label: "Viewer" },
            { value: "editor", label: "Editor" },
            { value: "admin", label: "Admin" },
          ]}
          value={role}
          onChange={setRole}
        />
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Select label="Role" value="editor" options={roles} onChange={setRole} />`} />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <Select label="Plan" options={[{ value: "pro", label: "Pro" }]} value="pro" disabled />
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Select disabled label="Plan" value="pro" options={plans} />`} />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: "-", description: "Label above the select" },
          { name: "options", type: "Array<{ value, label }>", default: "-", description: "List of selectable options" },
          { name: "value", type: "string", default: "-", description: "Currently selected value" },
          { name: "onChange", type: "(value: string) => void", default: "-", description: "Callback when selection changes" },
          { name: "placeholder", type: "string", default: '"Select an option"', description: "Text shown when no value is selected" },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the select" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use Select when there are 4+ options. For 2-3, consider radio buttons or toggle.</li>
        <li>Always provide a descriptive placeholder when no default is selected.</li>
        <li>The dropdown closes on outside click for a clean experience.</li>
        <li>Custom arrow rotates to indicate open/closed state.</li>
      </ul>
    </>
  );
}
