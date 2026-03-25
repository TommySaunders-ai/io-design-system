"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Skeleton component                                */
/* -------------------------------------------------- */

function Skeleton({
  width,
  height,
  borderRadius = 8,
  style: extraStyle,
}: {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: React.CSSProperties;
}) {
  return (
    <>
      <div
        className="io-skeleton"
        style={{
          width: width ?? "100%",
          height: height ?? 16,
          borderRadius,
          background: "linear-gradient(90deg, #f5f5f5 25%, #ebebeb 50%, #f5f5f5 75%)",
          backgroundSize: "200% 100%",
          ...extraStyle,
        }}
      />
    </>
  );
}

/* -------------------------------------------------- */
/*  Composite skeletons                               */
/* -------------------------------------------------- */

function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={14}
          width={i === lines - 1 ? "60%" : "100%"}
        />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div
      style={{
        borderRadius: 16,
        border: "1px solid #e5e5e5",
        overflow: "hidden",
        width: "100%",
        maxWidth: 300,
      }}
    >
      <Skeleton height={160} borderRadius={0} />
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Skeleton height={18} width="70%" />
        <SkeletonText lines={2} />
        <Skeleton height={36} borderRadius={8} width={120} />
      </div>
    </div>
  );
}

function SkeletonAvatar({ size = 48 }: { size?: number }) {
  return <Skeleton width={size} height={size} borderRadius={9999} />;
}

function SkeletonRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <SkeletonAvatar size={40} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        <Skeleton height={14} width="40%" />
        <Skeleton height={12} width="65%" />
      </div>
      <Skeleton height={28} width={80} borderRadius={8} />
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function SkeletonPage() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .io-skeleton {
          animation: shimmer 1.8s ease-in-out infinite;
        }
      `}</style>

      <PageHeader
        title="Skeleton"
        description="Skeleton placeholders provide visual feedback while content is loading. They use a pulse/shimmer animation to indicate activity."
      />

      {/* -- Text -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Text Placeholder</h2>
      <PreviewBox>
        <div style={{ maxWidth: 400 }}>
          <SkeletonText lines={4} />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Skeleton height={14} width="100%" />
<Skeleton height={14} width="100%" />
<Skeleton height={14} width="60%" />`}
      />

      {/* -- Card -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Card Placeholder</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<div style={{ borderRadius: 16, border: "1px solid #e5e5e5", overflow: "hidden" }}>
  <Skeleton height={160} borderRadius={0} />
  <div style={{ padding: 20 }}>
    <Skeleton height={18} width="70%" />
    <Skeleton height={14} width="100%" />
    <Skeleton height={36} width={120} borderRadius={8} />
  </div>
</div>`}
      />

      {/* -- Image -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Image Placeholder</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Skeleton width={200} height={200} borderRadius={16} />
          <Skeleton width={200} height={200} borderRadius={9999} />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Skeleton width={200} height={200} borderRadius={16} />
<Skeleton width={200} height={200} borderRadius={9999} />`}
      />

      {/* -- List rows -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>List Rows</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 480 }}>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<div style={{ display: "flex", alignItems: "center", gap: 14 }}>
  <Skeleton width={40} height={40} borderRadius={9999} />
  <div style={{ flex: 1 }}>
    <Skeleton height={14} width="40%" />
    <Skeleton height={12} width="65%" />
  </div>
  <Skeleton height={28} width={80} borderRadius={8} />
</div>`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "width", type: "number | string", default: '"100%"', description: "Element width" },
          { name: "height", type: "number | string", default: "16", description: "Element height" },
          { name: "borderRadius", type: "number", default: "8", description: "Corner radius in pixels" },
          { name: "style", type: "CSSProperties", default: "-", description: "Additional inline styles" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use skeleton loaders instead of spinners for content-heavy pages.</li>
        <li>Match skeleton shapes to the actual content layout for a smooth transition.</li>
        <li>Use rounded skeletons for avatars and square for images.</li>
        <li>Combine multiple <code>Skeleton</code> elements to create composite loading states.</li>
      </ul>
    </>
  );
}
