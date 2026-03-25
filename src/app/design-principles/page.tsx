import { PageHeader } from "@/components/docs/page-header";
import { PreviewBox } from "@/components/docs/preview-box";
import { CodeBlock } from "@/components/docs/code-block";

const principles = [
  {
    title: "No emoji, ever",
    description:
      "The system uses SVG icons exclusively. Emoji introduce inconsistent rendering across platforms and dilute the visual precision of the interface. Every icon is a purpose-built SVG with controlled stroke weight, size, and color.",
    code: `// Use SVG icons, not emoji
<svg width="16" height="16" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" strokeWidth="2">
  <polyline points="20 6 9 17 4 12" />
</svg>`,
    preview: (
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "#dcfce7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#16a34a",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#dc2626",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </div>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "#dbeafe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2563eb",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: "Gradient-first actions",
    description:
      "Primary actions use the system gradient (135deg, #7c3aed to #2563eb). This creates a clear visual hierarchy -- gradient means primary, solid means secondary, ghost means tertiary.",
    code: `.gradient-btn {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
}`,
    preview: (
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button
          style={{
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Primary Action
        </button>
        <button
          style={{
            background: "#ffffff",
            color: "#0a0a0a",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Secondary
        </button>
        <button
          style={{
            background: "transparent",
            color: "#525252",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Tertiary
        </button>
      </div>
    ),
  },
  {
    title: "Dot-grid backgrounds",
    description:
      "Empty surfaces use a subtle dot grid pattern to add texture without distraction. The dots are 1px circles spaced 24px apart, using the border color token.",
    code: `.dot-grid {
  background-image: radial-gradient(
    circle, #e5e5e5 1px, transparent 1px
  );
  background-size: 24px 24px;
}`,
    preview: (
      <div
        className="dot-grid"
        style={{
          height: 120,
          borderRadius: 12,
          border: "1px solid #e5e5e5",
        }}
      />
    ),
  },
  {
    title: "Frosted glass",
    description:
      "Overlays, navigation bars, and modals use a frosted glass effect: 72% white background with a 12px blur and 180% saturation. This creates depth while maintaining readability.",
    code: `.frosted-glass {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid #e5e5e5;
}`,
    preview: (
      <div
        className="dot-grid"
        style={{
          height: 120,
          borderRadius: 12,
          border: "1px solid #e5e5e5",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="frosted-glass"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
            fontSize: 13,
            color: "#525252",
            fontWeight: 500,
          }}
        >
          Frosted navigation bar
        </div>
      </div>
    ),
  },
  {
    title: "Hover lift",
    description:
      "Interactive cards and surfaces lift 2px on hover with an elevated shadow. This provides clear affordance that an element is clickable without changing its layout footprint.",
    code: `.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}`,
    preview: (
      <div style={{ display: "flex", gap: 16 }}>
        <div
          className="hover-lift"
          style={{
            padding: 20,
            background: "#ffffff",
            border: "1px solid #e5e5e5",
            borderRadius: 12,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "#525252" }}>
            Hover over this card
          </span>
        </div>
        <div
          className="hover-lift"
          style={{
            padding: 20,
            background: "#ffffff",
            border: "1px solid #e5e5e5",
            borderRadius: 12,
            boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
            cursor: "pointer",
            flex: 1,
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 13, color: "#525252" }}>
            And this one too
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Glow focus states",
    description:
      "Focusable elements use a purple glow shadow instead of the browser default outline. The glow matches the primary color at 30% opacity, creating a clear but non-intrusive focus ring.",
    code: `.focus-glow:focus {
  outline: none;
  box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
  border-color: #7c3aed;
}`,
    preview: (
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <input
          className="focus-glow"
          type="text"
          placeholder="Click to focus"
          style={{
            padding: "10px 14px",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "inherit",
            outline: "none",
            width: 200,
            background: "#ffffff",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          }}
        />
        <input
          className="focus-glow"
          type="text"
          placeholder="Tab here next"
          style={{
            padding: "10px 14px",
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            fontSize: 14,
            fontFamily: "inherit",
            outline: "none",
            width: 200,
            background: "#ffffff",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease",
          }}
        />
      </div>
    ),
  },
];

export default function DesignPrinciplesPage() {
  return (
    <div>
      <PageHeader
        title="Design Principles"
        description="The IO Design System is opinionated by design. These six principles govern every token, component, and pattern in the system."
      />

      {principles.map((principle, index) => (
        <section
          key={principle.title}
          style={{
            marginBottom: 56,
            paddingBottom: index < principles.length - 1 ? 56 : 0,
            borderBottom:
              index < principles.length - 1
                ? "1px solid #e5e5e5"
                : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background:
                  "linear-gradient(135deg, #ede9fe, #dbeafe)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 600,
                color: "#7c3aed",
                flexShrink: 0,
              }}
            >
              {index + 1}
            </span>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#0a0a0a",
                margin: 0,
              }}
            >
              {principle.title}
            </h2>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#525252",
              lineHeight: 1.6,
              maxWidth: 640,
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            {principle.description}
          </p>
          <PreviewBox>{principle.preview}</PreviewBox>
          <CodeBlock code={principle.code} language="css" />
        </section>
      ))}
    </div>
  );
}
