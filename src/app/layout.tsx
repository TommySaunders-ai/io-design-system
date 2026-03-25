import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/docs/sidebar";
import { TopBar } from "@/components/docs/top-bar";

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

export const metadata: Metadata = {
  title: "IO Design System",
  description:
    "Personal AI Operating System -- design tokens, components, and patterns for IntelligentOperations.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        style={{
          margin: 0,
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <TopBar />
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            paddingTop: "var(--topbar-height)",
          }}
        >
          <Sidebar />
          <main
            style={{
              flex: 1,
              marginLeft: "var(--sidebar-width)",
              padding: "var(--space-9) var(--space-10)",
              maxWidth: "860px",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
