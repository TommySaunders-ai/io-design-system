"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Tabs component                                    */
/* -------------------------------------------------- */

interface TabItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: TabItem[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #e5e5e5",
        gap: 0,
        position: "relative",
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 20px",
              fontSize: 14,
              fontWeight: isActive ? 600 : 400,
              fontFamily: "inherit",
              color: isActive ? "#7c3aed" : "#525252",
              background: "transparent",
              border: "none",
              borderBottom: isActive ? "2px solid #7c3aed" : "2px solid transparent",
              cursor: "pointer",
              transition: "all 0.15s ease",
              marginBottom: -1,
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function TabsPage() {
  const [basic, setBasic] = useState("overview");
  const [withIcons, setWithIcons] = useState("sources");

  const basicTabs: TabItem[] = [
    { label: "Overview", value: "overview" },
    { label: "Analytics", value: "analytics" },
    { label: "Settings", value: "settings" },
  ];

  const iconTabs: TabItem[] = [
    {
      label: "Sources",
      value: "sources",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
    },
    {
      label: "Content",
      value: "content",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
    },
    {
      label: "Schedule",
      value: "schedule",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  const CONTENT: Record<string, string> = {
    overview: "This is the overview panel. It shows a high-level summary of your project.",
    analytics: "Analytics panel with charts and metrics. Track performance here.",
    settings: "Configure your project settings, integrations, and preferences.",
    sources: "Manage your content sources: RSS feeds, APIs, and manual imports.",
    content: "Create and manage content pieces, drafts, and published items.",
    schedule: "Schedule your content to be published at the right time.",
  };

  return (
    <>
      <PageHeader
        title="Tabs"
        description="Horizontal tabs organize content into switchable panels. They support an active indicator and optional icons."
      />

      {/* -- Basic -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Basic Tabs</h2>
      <PreviewBox>
        <Tabs tabs={basicTabs} active={basic} onChange={setBasic} />
        <div style={{ padding: "24px 0", fontSize: 14, color: "#525252" }}>
          {CONTENT[basic]}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`const [active, setActive] = useState("overview");

<Tabs
  tabs={[
    { label: "Overview", value: "overview" },
    { label: "Analytics", value: "analytics" },
    { label: "Settings", value: "settings" },
  ]}
  active={active}
  onChange={setActive}
/>`}
      />

      {/* -- With icons -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>With Icons</h2>
      <PreviewBox>
        <Tabs tabs={iconTabs} active={withIcons} onChange={setWithIcons} />
        <div style={{ padding: "24px 0", fontSize: 14, color: "#525252" }}>
          {CONTENT[withIcons]}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Tabs
  tabs={[
    { label: "Sources", value: "sources", icon: <DownloadIcon /> },
    { label: "Content", value: "content", icon: <EditIcon /> },
  ]}
  active={active}
  onChange={setActive}
/>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "tabs", type: "Array<{ label, value, icon? }>", default: "-", description: "List of tab definitions" },
          { name: "active", type: "string", default: "-", description: "Currently active tab value" },
          { name: "onChange", type: "(value: string) => void", default: "-", description: "Callback when a tab is clicked" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use tabs for content that belongs to the same context but needs separation.</li>
        <li>Keep tab labels short (1-2 words) for scannability.</li>
        <li>Icons reinforce meaning but are optional. Do not use icons alone without labels.</li>
        <li>Do not nest tabs within tabs. Use a different navigation pattern if needed.</li>
      </ul>
    </>
  );
}
