import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";

const installCode = `pnpm create next-app io-app --typescript --tailwind --app
cd io-app`;

const addDepsCode = `pnpm add @io/design-system`;

const setupCode = `// src/app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={\`\${inter.variable} \${jetbrainsMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`;

const tokensCode = `/* src/app/globals.css */
@import "tailwindcss";

:root {
  --bg-page: #fafafa;
  --bg-surface: #ffffff;
  --bg-alt: #f5f5f5;
  --primary-gradient: linear-gradient(135deg, #7c3aed, #2563eb);
  --primary-solid: #7c3aed;
  --text-primary: #0a0a0a;
  --text-secondary: #525252;
  --border: #e5e5e5;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-glow: 0 4px 20px rgba(124,58,237,0.3);
}`;

const envCode = `# .env.local
NEXT_PUBLIC_SITE_NAME="IO Design System"
NEXT_PUBLIC_SITE_URL="https://io.design"`;

export default function QuickStartPage() {
  return (
    <div>
      <PageHeader
        title="Quick Start"
        description="Get the IO Design System running in your project in under five minutes. This guide covers installation, font setup, design token configuration, and environment variables."
      />

      {/* Step 1 */}
      <section style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 8,
          }}
        >
          1. Create a new project
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Scaffold a Next.js App Router project with TypeScript and Tailwind CSS.
        </p>
        <CodeBlock code={installCode} language="bash" />
      </section>

      {/* Step 2 */}
      <section style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 8,
          }}
        >
          2. Install dependencies
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Add the design system package.
        </p>
        <CodeBlock code={addDepsCode} language="bash" />
      </section>

      {/* Step 3 */}
      <section style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 8,
          }}
        >
          3. Configure fonts
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Self-host Inter (300--700) and JetBrains Mono (400--500) via{" "}
          <code>next/font/google</code>. Set CSS variables on the html element
          so design tokens can reference them.
        </p>
        <CodeBlock code={setupCode} language="tsx" showLineNumbers />
      </section>

      {/* Step 4 */}
      <section style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 8,
          }}
        >
          4. Add design tokens
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Define the full set of CSS custom properties in your global stylesheet.
          These tokens drive every component and pattern in the system.
        </p>
        <CodeBlock code={tokensCode} language="css" showLineNumbers />
      </section>

      {/* Step 5 */}
      <section style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#0a0a0a",
            marginBottom: 8,
          }}
        >
          5. Environment configuration
        </h2>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          Create a <code>.env.local</code> file with your site metadata.
        </p>
        <CodeBlock code={envCode} language="bash" />
      </section>

      {/* Next steps */}
      <section
        style={{
          padding: 24,
          background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
          borderRadius: 16,
          marginBottom: 48,
        }}
      >
        <h3
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#0a0a0a",
            margin: "0 0 8px",
          }}
        >
          Next steps
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "#525252",
            margin: "0 0 16px",
            lineHeight: 1.6,
          }}
        >
          Now that your project is configured, explore the design philosophy
          that guides every decision in the system.
        </p>
        <a
          href="/design-principles"
          className="gradient-btn"
          style={{ display: "inline-flex" }}
        >
          Design Principles
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
      </section>
    </div>
  );
}
