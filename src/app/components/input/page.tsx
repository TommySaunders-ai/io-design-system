"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Input component                                   */
/* -------------------------------------------------- */

function Input({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  icon,
  value,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? "#dc2626"
    : focused
    ? "#7c3aed"
    : "#e5e5e5";

  const shadowStyle = focused && !error
    ? "0 4px 20px rgba(124,58,237,0.3)"
    : error
    ? "0 0 0 3px rgba(220,38,38,0.15)"
    : "none";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", maxWidth: 340 }}>
      {label && (
        <label
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#0a0a0a",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderRadius: 8,
          border: `1.5px solid ${borderColor}`,
          background: disabled ? "#f5f5f5" : "#ffffff",
          boxShadow: shadowStyle,
          transition: "all 0.15s ease",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        {icon && <span style={{ color: "#a3a3a3", display: "flex", flexShrink: 0 }}>{icon}</span>}
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            fontSize: 14,
            color: "#0a0a0a",
            width: "100%",
            fontFamily: "inherit",
          }}
        />
      </div>
      {(helperText || error) && (
        <span style={{ fontSize: 12, color: error ? "#dc2626" : "#a3a3a3" }}>
          {error || helperText}
        </span>
      )}
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function InputPage() {
  const [val, setVal] = useState("");

  return (
    <>
      <PageHeader
        title="Input"
        description="Text inputs collect user data. They support labels, helper text, error validation, icons, and disabled states."
      />

      {/* -- Default -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Default</h2>
      <PreviewBox>
        <Input label="Email" placeholder="you@example.com" helperText="We will never share your email." />
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Input
  label="Email"
  placeholder="you@example.com"
  helperText="We will never share your email."
/>`}
      />

      {/* -- Focused -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Focused</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click the input below to see the focus glow effect.
      </p>
      <PreviewBox>
        <Input label="Project Name" placeholder="My awesome project" value={val} onChange={setVal} />
      </PreviewBox>

      {/* -- Error -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Error</h2>
      <PreviewBox>
        <Input
          label="Username"
          placeholder="Enter username"
          error="Username is already taken."
          value="virgil"
        />
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Input
  label="Username"
  error="Username is already taken."
  value="virgil"
/>`}
      />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <Input label="API Key" placeholder="Locked" disabled value="sk-***********" />
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Input label="API Key" disabled value="sk-***" />`} />

      {/* -- With icon -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>With Icon Prefix</h2>
      <PreviewBox>
        <Input
          label="Search"
          placeholder="Search components..."
          icon={
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          }
        />
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Input
  label="Search"
  placeholder="Search components..."
  icon={<SearchIcon />}
/>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "label", type: "string", default: "-", description: "Label displayed above the input" },
          { name: "placeholder", type: "string", default: "-", description: "Placeholder text" },
          { name: "helperText", type: "string", default: "-", description: "Helper text below the input" },
          { name: "error", type: "string", default: "-", description: "Error message; applies red styling" },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
          { name: "icon", type: "ReactNode", default: "-", description: "Icon rendered inside the input, before text" },
          { name: "value", type: "string", default: "-", description: "Controlled input value" },
          { name: "onChange", type: "(value: string) => void", default: "-", description: "Change handler" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Always provide a visible label for accessibility.</li>
        <li>Use helper text for formatting hints (e.g., "Must be at least 8 characters").</li>
        <li>Display error messages inline, directly below the input.</li>
        <li>Use the icon prefix for semantic hints like search or email fields.</li>
      </ul>
    </>
  );
}
