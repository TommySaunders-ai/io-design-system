"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Table component                                   */
/* -------------------------------------------------- */

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
}

function Table({
  columns,
  data,
  sortKey,
  sortDir,
  onSort,
}: {
  columns: Column[];
  data: Record<string, string | number>[];
  sortKey?: string;
  sortDir?: "asc" | "desc";
  onSort?: (key: string) => void;
}) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #e5e5e5",
        overflow: "hidden",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => col.sortable && onSort?.(col.key)}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontWeight: 600,
                  color: "#0a0a0a",
                  borderBottom: "1px solid #e5e5e5",
                  cursor: col.sortable ? "pointer" : "default",
                  userSelect: "none",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {col.label}
                  {col.sortable && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={sortKey === col.key ? "#7c3aed" : "#a3a3a3"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transition: "transform 0.15s ease",
                        transform:
                          sortKey === col.key && sortDir === "desc"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                background:
                  hoveredRow === i
                    ? "#f5f5f5"
                    : i % 2 === 1
                    ? "#fafafa"
                    : "#ffffff",
                transition: "background 0.1s ease",
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{
                    padding: "12px 16px",
                    color: "#525252",
                    borderBottom: "1px solid #e5e5e5",
                  }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

const COLUMNS: Column[] = [
  { key: "name", label: "Name", sortable: true },
  { key: "status", label: "Status" },
  { key: "views", label: "Views", sortable: true },
  { key: "date", label: "Date", sortable: true },
];

const RAW_DATA = [
  { name: "Getting Started with AI", status: "Published", views: 12400, date: "2026-03-20" },
  { name: "Design Token Guide", status: "Draft", views: 0, date: "2026-03-22" },
  { name: "Component Architecture", status: "In Review", views: 3200, date: "2026-03-18" },
  { name: "Building a Feed System", status: "Published", views: 8900, date: "2026-03-15" },
  { name: "Notion Integration", status: "Scheduled", views: 0, date: "2026-03-25" },
  { name: "Performance Monitoring", status: "Published", views: 5600, date: "2026-03-10" },
];

export default function TablePage() {
  const [sortKey, setSortKey] = useState<string>("views");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...RAW_DATA].sort((a, b) => {
    const av = a[sortKey as keyof typeof a];
    const bv = b[sortKey as keyof typeof b];
    const cmp = typeof av === "number" ? (av as number) - (bv as number) : String(av).localeCompare(String(bv));
    return sortDir === "asc" ? cmp : -cmp;
  });

  return (
    <>
      <PageHeader
        title="Table"
        description="Data tables display structured information in rows and columns. They support sortable headers, alternating row backgrounds, and row hover highlights."
      />

      {/* -- Default -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Sortable Table</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click the Name, Views, or Date column headers to sort. The arrow indicates direction.
      </p>
      <PreviewBox>
        <Table
          columns={COLUMNS}
          data={sorted}
          sortKey={sortKey}
          sortDir={sortDir}
          onSort={handleSort}
        />
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    { key: "status", label: "Status" },
    { key: "views", label: "Views", sortable: true },
  ]}
  data={data}
  sortKey={sortKey}
  sortDir={sortDir}
  onSort={handleSort}
/>`}
      />

      {/* -- Row hover -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Row Hover</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Hover over any row to see the highlight effect. Alternating backgrounds improve scannability.
      </p>
      <PreviewBox>
        <Table
          columns={[
            { key: "component", label: "Component" },
            { key: "props", label: "Props" },
            { key: "status", label: "Status" },
          ]}
          data={[
            { component: "Button", props: "7", status: "Stable" },
            { component: "Badge", props: "1", status: "Stable" },
            { component: "Card", props: "6", status: "Stable" },
            { component: "Modal", props: "5", status: "Beta" },
          ]}
        />
      </PreviewBox>

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "columns", type: "Array<{ key, label, sortable? }>", default: "-", description: "Column definitions" },
          { name: "data", type: "Array<Record<string, any>>", default: "-", description: "Row data keyed by column key" },
          { name: "sortKey", type: "string", default: "-", description: "Currently sorted column key" },
          { name: "sortDir", type: '"asc" | "desc"', default: "-", description: "Sort direction" },
          { name: "onSort", type: "(key: string) => void", default: "-", description: "Callback when a sortable header is clicked" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use tables for data sets where comparison across rows is important.</li>
        <li>Mark only columns with meaningful sort order as <code>sortable</code>.</li>
        <li>Alternating row colors and hover highlights improve readability for large data sets.</li>
        <li>Right-align numeric columns for better visual scanning.</li>
      </ul>
    </>
  );
}
