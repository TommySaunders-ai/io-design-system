"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Icon registry                                     */
/* -------------------------------------------------- */

const ICONS: Record<string, (p: { size: number; color: string }) => React.ReactNode> = {
  plus: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  check: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  x: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  search: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  chevronDown: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  chevronRight: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  settings: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  bell: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  trash: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14H7L5 6" /><path d="M10 11v6" /><path d="M14 11v6" />
    </svg>
  ),
  edit: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  copy: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  eye: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  heart: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  star: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  info: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  alertTriangle: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  upload: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
    </svg>
  ),
  download: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  arrowRight: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  externalLink: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  menu: ({ size, color }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
};

const ICON_NAMES = Object.keys(ICONS);

/* -------------------------------------------------- */
/*  Icon component                                    */
/* -------------------------------------------------- */

function Icon({
  name,
  size = 24,
  color = "#0a0a0a",
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const render = ICONS[name];
  if (!render) return null;
  return <>{render({ size, color })}</>;
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function IconPage() {
  const [selectedSize, setSelectedSize] = useState(24);
  const [selectedColor, setSelectedColor] = useState("#7c3aed");
  const [filter, setFilter] = useState("");

  const filtered = ICON_NAMES.filter((n) => n.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <PageHeader
        title="Icon"
        description="SVG icon set with configurable size and color props. All icons are stroke-based for consistent rendering."
      />

      {/* -- Full reference -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Icon Reference</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        {ICON_NAMES.length} icons available. Filter by name below.
      </p>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter icons..."
          style={{
            padding: "8px 14px",
            border: "1.5px solid #e5e5e5",
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "inherit",
            width: "100%",
            maxWidth: 300,
            outline: "none",
          }}
        />
      </div>

      <PreviewBox>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 16 }}>
          {filtered.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                padding: 12,
                borderRadius: 12,
                border: "1px solid #e5e5e5",
                background: "#fafafa",
              }}
            >
              <Icon name={name} size={selectedSize} color={selectedColor} />
              <span style={{ fontSize: 11, color: "#a3a3a3", textAlign: "center" }}>{name}</span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* -- Size and color controls -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Size / Color</h2>
      <PreviewBox>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#525252" }}>Size: {selectedSize}px</label>
            <div style={{ display: "flex", gap: 8 }}>
              {[16, 20, 24, 32, 40].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  style={{
                    padding: "4px 10px",
                    fontSize: 12,
                    borderRadius: 8,
                    border: selectedSize === s ? "1.5px solid #7c3aed" : "1.5px solid #e5e5e5",
                    background: selectedSize === s ? "#ede9fe" : "#fff",
                    color: selectedSize === s ? "#7c3aed" : "#525252",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#525252" }}>Color</label>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { c: "#0a0a0a", l: "Default" },
                { c: "#7c3aed", l: "Primary" },
                { c: "#2563eb", l: "Info" },
                { c: "#16a34a", l: "Success" },
                { c: "#dc2626", l: "Danger" },
                { c: "#a3a3a3", l: "Muted" },
              ].map(({ c, l }) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  title={l}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: c,
                    border: selectedColor === c ? "2px solid #0a0a0a" : "2px solid transparent",
                    cursor: "pointer",
                    outline: selectedColor === c ? "2px solid #ede9fe" : "none",
                    outlineOffset: 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Icon name="heart" size={selectedSize} color={selectedColor} />
          <Icon name="star" size={selectedSize} color={selectedColor} />
          <Icon name="bell" size={selectedSize} color={selectedColor} />
          <Icon name="settings" size={selectedSize} color={selectedColor} />
          <Icon name="search" size={selectedSize} color={selectedColor} />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Icon name="heart" size={24} color="#7c3aed" />
<Icon name="star" size={32} color="#d97706" />
<Icon name="bell" size={16} color="#0a0a0a" />`}
      />

      {/* -- All icon names -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Available Icons</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {ICON_NAMES.map((name) => (
          <code
            key={name}
            style={{
              fontSize: 12,
              padding: "3px 8px",
              borderRadius: 8,
              background: "#f5f5f5",
              border: "1px solid #e5e5e5",
              color: "#7c3aed",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {name}
          </code>
        ))}
      </div>

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "name", type: "string", default: "-", description: "Icon name from the registry" },
          { name: "size", type: "number", default: "24", description: "Width and height in pixels" },
          { name: "color", type: "string", default: '"#0a0a0a"', description: "Stroke color" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use 16px icons inside buttons and inputs, 20-24px for standalone use.</li>
        <li>Match icon color to text color for visual harmony.</li>
        <li>Always pair icons with text labels or tooltips for accessibility.</li>
        <li>Use <code>currentColor</code> for icons that should inherit their parent color.</li>
      </ul>
    </>
  );
}
