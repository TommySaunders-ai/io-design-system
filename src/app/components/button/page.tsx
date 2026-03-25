"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Inline Button component                           */
/* -------------------------------------------------- */

type ButtonVariant = "gradient" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

function Button({
  children,
  variant = "gradient",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  onClick,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  const sizes: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: "6px 14px", fontSize: 13, borderRadius: 8 },
    md: { padding: "10px 20px", fontSize: 14, borderRadius: 8 },
    lg: { padding: "14px 28px", fontSize: 16, borderRadius: 12 },
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    gradient: {
      background: "linear-gradient(135deg, #7c3aed, #2563eb)",
      color: "#ffffff",
      border: "none",
    },
    secondary: {
      background: "transparent",
      color: "#0a0a0a",
      border: "1.5px solid #e5e5e5",
    },
    ghost: {
      background: "transparent",
      color: "#525252",
      border: "1.5px solid transparent",
    },
    danger: {
      background: "#dc2626",
      color: "#ffffff",
      border: "none",
    },
  };

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      style={{
        ...sizes[size],
        ...variants[variant],
        fontWeight: 600,
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "inherit",
        transition: "all 0.15s ease",
        lineHeight: 1,
      }}
    >
      {loading && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ animation: "spin 1s linear infinite" }}
        >
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="28"
            strokeDashoffset="8"
            strokeLinecap="round"
          />
        </svg>
      )}
      {!loading && icon}
      {children}
    </button>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <PageHeader
        title="Button"
        description="Buttons trigger actions. Use variant and size props to match the hierarchy of each action in your interface."
      />

      {/* -- Variants -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Variants</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="gradient">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Button variant="gradient">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>`}
      />

      {/* -- Sizes -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Sizes</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
      />

      {/* -- With icons -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>With Icons</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Button
            variant="gradient"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            }
          >
            Add Item
          </Button>
          <Button
            variant="secondary"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            }
          >
            New Project
          </Button>
          <Button
            variant="danger"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14H7L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
              </svg>
            }
          >
            Delete
          </Button>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Button variant="gradient" icon={<PlusIcon />}>
  Add Item
</Button>`}
      />

      {/* -- Disabled -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Disabled</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="gradient" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="danger" disabled>Danger</Button>
        </div>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Button disabled>Primary</Button>`} />

      {/* -- Loading -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Loading</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button variant="gradient" loading={loading} onClick={handleLoadingClick}>
            {loading ? "Saving..." : "Click to Save"}
          </Button>
          <span style={{ fontSize: 13, color: "#a3a3a3" }}>Click to see the spinner</span>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Button loading={isLoading} onClick={handleSave}>
  {isLoading ? "Saving..." : "Save"}
</Button>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "variant", type: '"gradient" | "secondary" | "ghost" | "danger"', default: '"gradient"', description: "Visual style of the button" },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls padding and font size" },
          { name: "disabled", type: "boolean", default: "false", description: "Disables interaction and dims the button" },
          { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and disables the button" },
          { name: "icon", type: "ReactNode", default: "-", description: "Icon element rendered before the label" },
          { name: "onClick", type: "() => void", default: "-", description: "Click handler" },
          { name: "children", type: "ReactNode", default: "-", description: "Button label content" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use <strong>gradient</strong> for the single primary action on a page.</li>
        <li>Use <strong>secondary</strong> for supporting actions alongside a primary button.</li>
        <li>Use <strong>ghost</strong> for low-emphasis or navigation-style actions.</li>
        <li>Use <strong>danger</strong> for destructive actions like delete or remove.</li>
        <li>Always provide a loading state for async operations.</li>
        <li>Pair icons with text labels for clarity, do not use icon-only buttons without a tooltip.</li>
      </ul>
    </>
  );
}
