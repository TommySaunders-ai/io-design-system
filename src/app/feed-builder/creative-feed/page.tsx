"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

export default function CreativeFeedPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Creative Feed"
        description="The workshop stage where content is edited, previewed, and refined before publishing. Covers card layout, Edit/Preview toolbar, and the action bar."
      />

      {/* Workshop Card Layout */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Workshop Card Layout
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Each creative item is displayed as a card with a toolbar at the top (Edit/Preview toggle), the content area in the center, and an action bar at the bottom.
      </p>
      <PreviewBox>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          {/* Card */}
          <div style={{ borderRadius: 12, border: "1px solid #e5e5e5", background: "#ffffff", overflow: "hidden" }}>
            {/* Toolbar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: "1px solid #e5e5e5", background: "#fafafa" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {(["edit", "preview"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 8,
                      border: "none",
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                      background: activeTab === tab ? "#ffffff" : "transparent",
                      color: activeTab === tab ? "#0a0a0a" : "#a3a3a3",
                      boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    {tab === "edit" ? (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </span>
                    ) : (
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        Preview
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#2563eb", padding: "4px 10px", borderRadius: 999, background: "#eff6ff", border: "1px solid #bfdbfe" }}>
                In Review
              </span>
            </div>

            {/* Content Area */}
            <div style={{ padding: 24, minHeight: 200 }}>
              {activeTab === "edit" ? (
                <div>
                  <input
                    defaultValue="Q1 Marketing Plan"
                    style={{
                      width: "100%",
                      border: "none",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0a0a0a",
                      outline: "none",
                      marginBottom: 12,
                      fontFamily: "Inter, sans-serif",
                      padding: 0,
                      boxSizing: "border-box",
                    }}
                  />
                  <textarea
                    defaultValue={"Our Q1 marketing plan focuses on three core pillars:\n\n1. Content marketing expansion\n2. Social media engagement\n3. Email newsletter optimization"}
                    style={{
                      width: "100%",
                      border: "1px solid #e5e5e5",
                      borderRadius: 10,
                      padding: "12px 14px",
                      fontSize: 14,
                      color: "#525252",
                      lineHeight: 1.7,
                      resize: "vertical",
                      minHeight: 120,
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0a0a0a", marginTop: 0, marginBottom: 12 }}>
                    Q1 Marketing Plan
                  </h3>
                  <p style={{ fontSize: 14, color: "#525252", lineHeight: 1.7, margin: 0 }}>
                    Our Q1 marketing plan focuses on three core pillars:
                  </p>
                  <ol style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20, margin: "8px 0 0" }}>
                    <li>Content marketing expansion</li>
                    <li>Social media engagement</li>
                    <li>Email newsletter optimization</li>
                  </ol>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: "1px solid #e5e5e5", background: "#fafafa" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 8, border: "1px solid #e5e5e5", background: "#ffffff", fontSize: 12, fontWeight: 500, color: "#525252", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" />
                    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
                  </svg>
                  Revert
                </button>
                <button style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 8, border: "1px solid #e5e5e5", background: "#ffffff", fontSize: 12, fontWeight: 500, color: "#dc2626", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                  Discard
                </button>
              </div>
              <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 20px", borderRadius: 8, border: "none", background: "linear-gradient(135deg, #7c3aed, #2563eb)", color: "#ffffff", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(124, 58, 237, 0.3)", fontFamily: "Inter, sans-serif" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send to Publish
              </button>
            </div>
          </div>
        </div>
      </PreviewBox>

      {/* Toolbar Docs */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Edit/Preview Toolbar
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The toolbar uses a segmented control pattern. The active tab has a white background with a subtle shadow; inactive tabs are transparent.
      </p>
      <CodeBlock
        language="tsx"
        code={`function Toolbar({
  activeTab,
  onTabChange,
}: {
  activeTab: "edit" | "preview";
  onTabChange: (tab: "edit" | "preview") => void;
}) {
  return (
    <div style={{
      display: "flex",
      gap: 4,
      padding: "12px 16px",
      borderBottom: "1px solid #e5e5e5",
      background: "#fafafa",
    }}>
      {(["edit", "preview"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          style={{
            padding: "6px 16px",
            borderRadius: 8,
            border: "none",
            fontSize: 13,
            fontWeight: 600,
            background: activeTab === tab ? "#ffffff" : "transparent",
            color: activeTab === tab ? "#0a0a0a" : "#a3a3a3",
            boxShadow: activeTab === tab
              ? "0 1px 3px rgba(0,0,0,0.06)"
              : "none",
            cursor: "pointer",
          }}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
}`}
      />

      {/* Action Bar Docs */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Action Bar
      </h2>
      <PropsTable
        rows={[
          { name: "Revert", type: "secondary", description: "Resets content to the last saved/source state" },
          { name: "Discard", type: "destructive", description: "Removes the item from the creative feed entirely" },
          { name: "Send to Publish", type: "primary (gradient)", description: "Advances the item to the publish queue" },
        ]}
      />

      {/* Card Component Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Creative Card Component
      </h2>
      <CodeBlock
        language="tsx"
        code={`interface CreativeCardProps {
  item: CreativeItem;
  onRevert: () => void;
  onDiscard: () => void;
  onPublish: () => void;
}

function CreativeCard({ item, onRevert, onDiscard, onPublish }: CreativeCardProps) {
  const [tab, setTab] = useState<"edit" | "preview">("edit");

  return (
    <div style={{
      borderRadius: 12,
      border: "1px solid #e5e5e5",
      overflow: "hidden",
    }}>
      <Toolbar activeTab={tab} onTabChange={setTab} />

      <div style={{ padding: 24, minHeight: 200 }}>
        {tab === "edit" ? (
          <EditView item={item} />
        ) : (
          <PreviewView item={item} />
        )}
      </div>

      <ActionBar
        onRevert={onRevert}
        onDiscard={onDiscard}
        onPublish={onPublish}
      />
    </div>
  );
}`}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Only one creative card should be expanded for editing at a time.</li>
        <li>Auto-save edits with a debounce (500ms) to avoid data loss.</li>
        <li>The Preview tab should render content exactly as it will appear when published.</li>
        <li>Destructive actions (Discard) should require a confirmation dialog.</li>
        <li>"Send to Publish" is the primary gradient action -- one per card.</li>
      </ul>
    </div>
  );
}
