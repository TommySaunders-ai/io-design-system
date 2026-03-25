"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  fontSize: 14,
  borderRadius: 10,
  border: "1px solid #e5e5e5",
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
  outline: "none",
  background: "#ffffff",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  fontWeight: 500,
  color: "#0a0a0a",
  marginBottom: 6,
  fontFamily: "Inter, sans-serif",
};

export default function FormLayoutPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Form Layout"
        description="Standard form layout patterns: stacked (single-column) and two-column forms with consistent spacing, labels, and action placement."
      />

      {/* Stacked Form */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Stacked Form
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The default form layout. Fields stack vertically with consistent 20px spacing. Best for simple forms and mobile views.
      </p>
      <PreviewBox>
        <div style={{ maxWidth: 480 }}>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="Jane Doe" style={inputStyle} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="jane@example.com" style={inputStyle} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Role</label>
            <select style={{ ...inputStyle, cursor: "pointer" }}>
              <option>Select a role...</option>
              <option>Editor</option>
              <option>Viewer</option>
              <option>Admin</option>
            </select>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Bio</label>
            <textarea placeholder="Tell us about yourself..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button style={{ background: "#ffffff", color: "#0a0a0a", border: "1px solid #e5e5e5", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              Cancel
            </button>
            <button style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", color: "#ffffff", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)", fontFamily: "Inter, sans-serif" }}>
              Save
            </button>
          </div>
        </div>
      </PreviewBox>

      <CodeBlock
        language="tsx"
        code={`<form style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 20 }}>
  <div>
    <label style={{ display: "block", fontSize: 14, fontWeight: 500, marginBottom: 6 }}>
      Full Name
    </label>
    <input
      type="text"
      style={{
        width: "100%",
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid #e5e5e5",
      }}
    />
  </div>
  {/* More fields... */}
  <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
    <button className="btn-secondary">Cancel</button>
    <button className="btn-primary">Save</button>
  </div>
</form>`}
      />

      {/* Two-Column Form */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Two-Column Form
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        For longer forms with related fields. Place paired fields side by side. Falls back to stacked on narrow screens.
      </p>
      <PreviewBox>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>First Name</label>
              <input type="text" placeholder="Jane" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input type="text" placeholder="Doe" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="jane@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Phone</label>
              <input type="tel" placeholder="(555) 123-4567" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Street Address</label>
              <input type="text" placeholder="123 Main St" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>ZIP Code</label>
              <input type="text" placeholder="10001" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Notes</label>
            <textarea placeholder="Additional notes..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
            <button style={{ background: "#ffffff", color: "#0a0a0a", border: "1px solid #e5e5e5", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              Cancel
            </button>
            <button style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", color: "#ffffff", border: "none", borderRadius: 10, padding: "10px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)", fontFamily: "Inter, sans-serif" }}>
              Save
            </button>
          </div>
        </div>
      </PreviewBox>

      <CodeBlock
        language="tsx"
        code={`<form>
  {/* Two-column row */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 20,
  }}>
    <div>
      <label>First Name</label>
      <input type="text" />
    </div>
    <div>
      <label>Last Name</label>
      <input type="text" />
    </div>
  </div>

  {/* Unequal columns (2:1 ratio) */}
  <div style={{
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 16,
    marginBottom: 20,
  }}>
    <div>
      <label>Street Address</label>
      <input type="text" />
    </div>
    <div>
      <label>ZIP Code</label>
      <input type="text" />
    </div>
  </div>

  {/* Full-width field */}
  <div style={{ marginBottom: 24 }}>
    <label>Notes</label>
    <textarea rows={3} />
  </div>

  {/* Actions */}
  <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
    <button className="btn-secondary">Cancel</button>
    <button className="btn-primary">Save</button>
  </div>
</form>

/* Responsive: stack on mobile */
@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
}`}
      />

      {/* Form Spacing Reference */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Spacing Reference
      </h2>
      <div style={{ borderRadius: 12, border: "1px solid #e5e5e5", overflow: "hidden", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>Element</th>
              <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 600, color: "#0a0a0a", borderBottom: "1px solid #e5e5e5" }}>Spacing</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Label to input", "6px (margin-bottom)"],
              ["Field to field", "20px (margin-bottom or gap)"],
              ["Column gap", "16px"],
              ["Last field to actions", "24px"],
              ["Action button gap", "12px"],
              ["Input padding", "10px 14px"],
              ["Input border-radius", "10px"],
            ].map(([el, sp]) => (
              <tr key={el}>
                <td style={{ padding: "10px 16px", color: "#525252", borderBottom: "1px solid #e5e5e5" }}>{el}</td>
                <td style={{ padding: "10px 16px", fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c3aed", borderBottom: "1px solid #e5e5e5" }}>{sp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always place labels above inputs, never inline (except toggles/checkboxes).</li>
        <li>Right-align action buttons. Primary action on the right, secondary on the left.</li>
        <li>Use the stacked layout for forms with 4 or fewer fields.</li>
        <li>Group related fields (e.g., first/last name) in the same row for two-column forms.</li>
        <li>Full-width fields (like textarea) should span the entire form width regardless of column layout.</li>
        <li>Apply the glow-focus pattern to all inputs on focus.</li>
      </ul>
    </div>
  );
}
