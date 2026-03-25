"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

const stages = [
  {
    label: "Connect",
    desc: "OAuth integration with data sources (Notion, etc.)",
    color: "#7c3aed",
    bg: "#faf5ff",
    border: "#ddd6fe",
  },
  {
    label: "Source",
    desc: "Fetch and display content in a masonry feed",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    label: "Creative",
    desc: "Edit, preview, and refine content for publishing",
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    label: "Publish",
    desc: "Queue and distribute to connected platforms",
    color: "#dc2626",
    bg: "#fef2f2",
    border: "#fecaca",
  },
];

function PipelineArrow() {
  return (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" style={{ flexShrink: 0 }}>
      <line x1="0" y1="12" x2="38" y2="12" stroke="#a3a3a3" strokeWidth="2" />
      <polyline points="34,6 42,12 34,18" fill="none" stroke="#a3a3a3" strokeWidth="2" />
    </svg>
  );
}

export default function FeedBuilderOverviewPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Feed Builder Overview"
        description="Architecture overview of the four-stage content pipeline: Connect, Source, Creative, and Publish."
      />

      {/* Pipeline Diagram */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Four-Stage Pipeline
      </h2>
      <PreviewBox>
        <div style={{ overflowX: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 700 }}>
            {stages.map((stage, i) => (
              <div key={stage.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    padding: "20px 24px",
                    borderRadius: 12,
                    background: stage.bg,
                    border: `2px solid ${stage.border}`,
                    minWidth: 130,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 16, fontWeight: 700, color: stage.color, marginBottom: 4 }}>
                    {stage.label}
                  </div>
                  <div style={{ fontSize: 11, color: "#525252", lineHeight: 1.4 }}>
                    {stage.desc}
                  </div>
                </div>
                {i < stages.length - 1 && <PipelineArrow />}
              </div>
            ))}
          </div>
        </div>
      </PreviewBox>

      {/* Data Flow */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Data Flow
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Content flows through the pipeline in one direction. Each stage transforms data and passes it forward.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { from: "Connect", to: "Source", data: "Database credentials, selected pages/databases" },
            { from: "Source", to: "Creative", data: "Raw content objects with properties and blocks" },
            { from: "Creative", to: "Publish", data: "Finalized content with formatted text, media, and metadata" },
          ].map((flow) => (
            <div
              key={flow.from}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: 16,
                borderRadius: 10,
                border: "1px solid #e5e5e5",
                background: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#7c3aed" }}>{flow.from}</span>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <line x1="0" y1="6" x2="14" y2="6" stroke="#a3a3a3" strokeWidth="1.5" />
                  <polyline points="12,2 17,6 12,10" fill="none" stroke="#a3a3a3" strokeWidth="1.5" />
                </svg>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#2563eb" }}>{flow.to}</span>
              </div>
              <span style={{ fontSize: 13, color: "#525252" }}>{flow.data}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Detailed Stage Descriptions */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Stage Details
      </h2>
      {stages.map((stage) => (
        <div
          key={stage.label}
          style={{
            padding: 24,
            borderRadius: 12,
            border: `1px solid ${stage.border}`,
            background: stage.bg,
            marginBottom: 16,
          }}
        >
          <h3 style={{ fontSize: 18, fontWeight: 600, color: stage.color, margin: "0 0 8px" }}>
            {stage.label}
          </h3>
          <p style={{ fontSize: 14, color: "#525252", lineHeight: 1.6, margin: 0 }}>
            {stage.desc}
          </p>
        </div>
      ))}

      {/* Architecture Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Type Definitions
      </h2>
      <CodeBlock
        language="ts"
        code={`// Pipeline stage types
type PipelineStage = "connect" | "source" | "creative" | "publish";

interface ContentItem {
  id: string;
  stage: PipelineStage;
  sourceId: string;       // ID from the connected platform
  title: string;
  body: string;
  media: MediaAsset[];
  properties: Record<string, unknown>;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

interface PipelineConfig {
  connection: {
    provider: "notion";
    databaseId: string;
    accessToken: string;
  };
  source: {
    fetchInterval: number;   // ms
    filters: Record<string, unknown>;
  };
  creative: {
    defaultTemplate: string;
    enablePreview: boolean;
  };
  publish: {
    destinations: string[];
    schedule: "immediate" | "queued";
  };
}`}
      />

      {/* Navigation Links */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Explore Each Stage
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
        {[
          { label: "Notion Connect", href: "/feed-builder/notion-connect", color: "#7c3aed" },
          { label: "Source Feed", href: "/feed-builder/source-feed", color: "#2563eb" },
          { label: "Creative Feed", href: "/feed-builder/creative-feed", color: "#059669" },
          { label: "Publish", href: "/feed-builder/publish", color: "#dc2626" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              display: "block",
              padding: 20,
              borderRadius: 12,
              border: "1px solid #e5e5e5",
              background: "#ffffff",
              textDecoration: "none",
              color: link.color,
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {link.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: 6, verticalAlign: "middle" }}>
              <path d="M6 3l5 5-5 5" stroke={link.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
