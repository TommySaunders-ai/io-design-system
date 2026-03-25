"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

const demoItems = [
  { h: 120, label: "Short card" },
  { h: 200, label: "Tall card" },
  { h: 150, label: "Medium card" },
  { h: 100, label: "Compact card" },
  { h: 180, label: "Feature card" },
  { h: 130, label: "Info card" },
  { h: 160, label: "Detail card" },
  { h: 110, label: "Stat card" },
  { h: 190, label: "Hero card" },
];

export default function MasonryGridPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Masonry Grid"
        description="A CSS column-count based masonry layout for variable-height content. Responsive breakpoints adjust column count for different screen sizes."
      />

      {/* Live Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Live Demo (3 Columns)
      </h2>
      <PreviewBox>
        <div
          style={{
            columnCount: 3,
            columnGap: 16,
          }}
        >
          {demoItems.map((item, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                padding: 20,
                height: item.h,
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "#525252" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Basic Implementation */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Basic Implementation
      </h2>
      <CodeBlock
        language="css"
        code={`.masonry {
  column-count: 3;
  column-gap: 16px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 12px;
}`}
      />

      {/* Responsive Breakpoints */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Responsive Breakpoints
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Use media queries to reduce column count on smaller screens.
      </p>

      {/* 2-column demo */}
      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a", marginTop: 32, marginBottom: 12 }}>
        2 Columns (Tablet)
      </h3>
      <PreviewBox>
        <div style={{ columnCount: 2, columnGap: 16 }}>
          {demoItems.slice(0, 6).map((item, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                padding: 20,
                height: item.h,
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "#525252" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* 1-column demo */}
      <h3 style={{ fontSize: 18, fontWeight: 600, color: "#0a0a0a", marginTop: 32, marginBottom: 12 }}>
        1 Column (Mobile)
      </h3>
      <PreviewBox>
        <div style={{ columnCount: 1, columnGap: 16, maxWidth: 320 }}>
          {demoItems.slice(0, 3).map((item, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: 16,
                padding: 20,
                height: item.h,
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "#525252" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      <CodeBlock
        language="css"
        code={`.masonry {
  column-count: 3;
  column-gap: 16px;
}

/* Tablet: 768px - 1024px */
@media (max-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}

/* Mobile: below 768px */
@media (max-width: 768px) {
  .masonry {
    column-count: 1;
  }
}`}
      />

      {/* Breakpoint Reference */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Breakpoint Reference
      </h2>
      <PropsTable
        rows={[
          { name: "desktop", type: ">= 1024px", default: "3", description: "Three-column layout for wide screens" },
          { name: "tablet", type: "768px - 1023px", default: "2", description: "Two-column layout for medium screens" },
          { name: "mobile", type: "< 768px", default: "1", description: "Single-column stack for small screens" },
          { name: "column-gap", type: "px", default: "16px", description: "Horizontal space between columns" },
          { name: "item-gap", type: "px (margin-bottom)", default: "16px", description: "Vertical space between items" },
        ]}
      />

      {/* React Component */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        React Component
      </h2>
      <CodeBlock
        language="tsx"
        code={`function MasonryGrid({
  children,
  columns = 3,
  gap = 16,
}: {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}) {
  return (
    <div style={{ columnCount: columns, columnGap: gap }}>
      {children}
    </div>
  );
}

function MasonryItem({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: 16 }}>
      {children}
    </div>
  );
}`}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always set <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, background: "#f5f5f5", padding: "2px 6px", borderRadius: 8 }}>break-inside: avoid</code> on child items to prevent splitting across columns.</li>
        <li>CSS columns fill top-to-bottom, then left-to-right. Keep this in mind for reading order.</li>
        <li>Use consistent item border-radius (min 8px) and spacing.</li>
        <li>For very long lists, consider virtualizing with a library.</li>
      </ul>
    </div>
  );
}
