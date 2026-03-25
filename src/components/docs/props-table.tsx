export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #e5e5e5",
        overflow: "hidden",
        marginTop: 24,
        marginBottom: 24,
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}
      >
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "12px 16px",
                  fontWeight: 600,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#0a0a0a",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.name}
              style={{
                background: index % 2 === 1 ? "#fafafa" : "#ffffff",
              }}
            >
              <td
                style={{
                  padding: "10px 16px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#7c3aed",
                  borderBottom: "1px solid #e5e5e5",
                  whiteSpace: "nowrap",
                }}
              >
                {row.name}
              </td>
              <td
                style={{
                  padding: "10px 16px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 13,
                  color: "#525252",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                {row.type}
              </td>
              <td
                style={{
                  padding: "10px 16px",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: 13,
                  color: "#a3a3a3",
                  borderBottom: "1px solid #e5e5e5",
                }}
              >
                {row.default || "--"}
              </td>
              <td
                style={{
                  padding: "10px 16px",
                  color: "#525252",
                  borderBottom: "1px solid #e5e5e5",
                  lineHeight: 1.5,
                }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
