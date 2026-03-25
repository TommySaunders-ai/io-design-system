"use client";

import { useState } from "react";

export function TopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="frosted-glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--topbar-height)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 var(--space-6)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          {/* Mobile hamburger */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              window.dispatchEvent(
                new CustomEvent("toggle-sidebar", { detail: !mobileOpen })
              );
            }}
            aria-label="Toggle navigation"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              borderRadius: "var(--radius-sm)",
              color: "var(--text-primary)",
            }}
            className="mobile-menu-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </>
              )}
            </svg>
          </button>

          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
            }}
          >
            <span
              className="gradient-text"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
              }}
            >
              IO
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "var(--text-secondary)",
              }}
            >
              Design System
            </span>
          </a>
        </div>

        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            background: "var(--bg-alt)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)",
            padding: "var(--space-2) var(--space-3)",
            cursor: "pointer",
            minWidth: "200px",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--text-tertiary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span
            style={{
              fontSize: "13px",
              color: "var(--text-tertiary)",
              flex: 1,
            }}
          >
            Search...
          </span>
          <kbd
            style={{
              fontSize: "11px",
              color: "var(--text-tertiary)",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1px 5px",
              fontFamily: "inherit",
            }}
          >
            Cmd+K
          </kbd>
        </div>
      </header>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
