import { CodeBlock } from "@/components/docs/code-block";

const features = [
  {
    title: "Foundations",
    description:
      "Design tokens for colors, typography, spacing, radius, and shadows. A consistent visual language across every surface.",
    href: "/colors",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Components",
    description:
      "Button, Badge, Card, Input, Modal, Tabs, and more. Built with accessibility and composability in mind.",
    href: "/button",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </svg>
    ),
  },
  {
    title: "Patterns",
    description:
      "Dot grids, frosted glass, gradient actions, hover lift, glow focus. Reusable visual patterns for every layout.",
    href: "/dot-background",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
  },
];

const quickStartCode = `pnpm create next-app io-app --typescript
cd io-app
pnpm add @io/design-system`;

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ marginBottom: 64 }}>
        <h1
          style={{
            fontSize: 48,
            fontWeight: 300,
            letterSpacing: "-1.2px",
            color: "#0a0a0a",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          <span className="gradient-text" style={{ fontWeight: 600 }}>
            IO
          </span>{" "}
          Design System
        </h1>
        <p
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "#525252",
            marginTop: 12,
            marginBottom: 8,
          }}
        >
          Personal AI Operating System
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#a3a3a3",
            lineHeight: 1.6,
            maxWidth: 520,
            marginTop: 0,
          }}
        >
          Design tokens, components, and patterns for building
          IntelligentOperations.ai. A gradient-first, frosted-glass system with
          no emoji, ever.
        </p>

        <div style={{ marginTop: 32 }}>
          <a href="/quick-start" className="gradient-btn">
            Get Started
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* Quick start snippet */}
      <section style={{ marginBottom: 64 }}>
        <h2
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 4,
          }}
        >
          Quick Start
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            marginBottom: 0,
          }}
        >
          Get up and running in under a minute.
        </p>
        <CodeBlock code={quickStartCode} language="bash" />
      </section>

      {/* Feature cards */}
      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="hover-lift"
              style={{
                display: "block",
                padding: 24,
                background: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: 16,
                textDecoration: "none",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background:
                    "linear-gradient(135deg, #ede9fe, #dbeafe)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7c3aed",
                  marginBottom: 16,
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#0a0a0a",
                  margin: "0 0 8px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#525252",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
