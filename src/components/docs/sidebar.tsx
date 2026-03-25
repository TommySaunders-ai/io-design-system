"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Home", href: "/" },
      { label: "Quick Start", href: "/quick-start" },
      { label: "Design Principles", href: "/design-principles" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { label: "Colors", href: "/colors" },
      { label: "Typography", href: "/typography" },
      { label: "Spacing", href: "/spacing" },
      { label: "Radius", href: "/radius" },
      { label: "Shadows", href: "/shadows" },
      { label: "Icons", href: "/icons" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Badge", href: "/components/badge" },
      { label: "Card", href: "/components/card" },
      { label: "Input", href: "/components/input" },
      { label: "Select", href: "/components/select" },
      { label: "Toggle", href: "/components/toggle" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Icon", href: "/components/icon" },
      { label: "Tag", href: "/components/tag" },
      { label: "Tooltip", href: "/components/tooltip" },
      { label: "Modal", href: "/components/modal" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Table", href: "/components/table" },
      { label: "Alert", href: "/components/alert" },
      { label: "Skeleton", href: "/components/skeleton" },
      { label: "Progress", href: "/components/progress" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { label: "Dot Background", href: "/dot-background" },
      { label: "Frosted Glass", href: "/frosted-glass" },
      { label: "Gradient Actions", href: "/gradient-actions" },
      { label: "Hover Lift", href: "/hover-lift" },
      { label: "Glow Focus", href: "/glow-focus" },
      { label: "Masonry Grid", href: "/masonry-grid" },
      { label: "Status Lifecycle", href: "/status-lifecycle" },
    ],
  },
  {
    title: "Layouts",
    items: [
      { label: "Page", href: "/layout-page" },
      { label: "Dashboard", href: "/layout-dashboard" },
      { label: "Form", href: "/layout-form" },
    ],
  },
  {
    title: "Feed Builder",
    items: [
      { label: "Overview", href: "/feed-overview" },
      { label: "Notion Connect", href: "/notion-connect" },
      { label: "Source Feed", href: "/source-feed" },
      { label: "Creative Feed", href: "/creative-feed" },
      { label: "Publish", href: "/publish" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Changelog", href: "/changelog" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="var(--text-tertiary)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.15s ease",
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <polyline points="4,2 8,6 4,10" />
    </svg>
  );
}

function SidebarSection({
  section,
  pathname,
}: {
  section: NavSection;
  pathname: string;
}) {
  const hasActivePage = section.items.some((item) => item.href === pathname);
  const [open, setOpen] = useState(
    hasActivePage || section.title === "Getting Started"
  );

  return (
    <div style={{ marginBottom: "var(--space-2)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-2)",
          width: "100%",
          padding: "var(--space-2) var(--space-3)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "var(--text-tertiary)",
          fontFamily: "inherit",
          borderRadius: "var(--radius-sm)",
        }}
      >
        <ChevronIcon open={open} />
        {section.title}
      </button>
      {open && (
        <div
          style={{
            paddingLeft: "var(--space-4)",
            marginTop: "var(--space-1)",
          }}
        >
          {section.items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: "block",
                  padding: "var(--space-2) var(--space-3)",
                  fontSize: "13px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive
                    ? "var(--primary-solid)"
                    : "var(--text-secondary)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  borderLeft: isActive
                    ? "2px solid var(--primary-solid)"
                    : "2px solid transparent",
                  background: isActive ? "var(--primary-light)" : "transparent",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--bg-alt)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleToggle(e: Event) {
      const detail = (e as CustomEvent).detail;
      setMobileOpen(detail);
    }
    window.addEventListener("toggle-sidebar", handleToggle);
    return () => window.removeEventListener("toggle-sidebar", handleToggle);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <aside
        className={mobileOpen ? "sidebar-open" : "sidebar-nav"}
        style={{
          position: "fixed",
          top: "var(--topbar-height)",
          left: 0,
          bottom: 0,
          width: "var(--sidebar-width)",
          background: "var(--bg-surface)",
          borderRight: "1px solid var(--border)",
          overflowY: "auto",
          padding: "var(--space-4) var(--space-3)",
          zIndex: 90,
        }}
      >
        {navigation.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            pathname={pathname}
          />
        ))}
      </aside>

      {mobileOpen && (
        <div
          onClick={() => {
            setMobileOpen(false);
            window.dispatchEvent(
              new CustomEvent("toggle-sidebar", { detail: false })
            );
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 89,
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .sidebar-nav {
            transform: translateX(-100%);
            transition: transform 0.2s ease;
          }
          .sidebar-open {
            transform: translateX(0);
            transition: transform 0.2s ease;
          }
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
