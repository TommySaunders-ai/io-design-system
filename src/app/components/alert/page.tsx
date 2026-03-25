"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Alert component                                   */
/* -------------------------------------------------- */

type AlertVariant = "success" | "warning" | "danger" | "info";

const ALERT_CONFIG: Record<
  AlertVariant,
  { bg: string; border: string; fg: string; icon: React.ReactNode }
> = {
  success: {
    bg: "#dcfce7",
    border: "#16a34a",
    fg: "#16a34a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  warning: {
    bg: "#fef3c7",
    border: "#d97706",
    fg: "#d97706",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  danger: {
    bg: "#fee2e2",
    border: "#dc2626",
    fg: "#dc2626",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  info: {
    bg: "#dbeafe",
    border: "#2563eb",
    fg: "#2563eb",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
};

function Alert({
  variant = "info",
  title,
  children,
  closable = false,
  showIcon = true,
  onClose,
}: {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: () => void;
}) {
  const cfg = ALERT_CONFIG[variant];

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 16,
        borderRadius: 12,
        background: cfg.bg,
        borderLeft: `4px solid ${cfg.border}`,
      }}
    >
      {showIcon && <div style={{ flexShrink: 0, marginTop: 1 }}>{cfg.icon}</div>}
      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>
            {title}
          </div>
        )}
        <div style={{ fontSize: 14, color: "#525252", lineHeight: 1.5 }}>{children}</div>
      </div>
      {closable && (
        <button
          onClick={onClose}
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: 8,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cfg.fg} strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function AlertPage() {
  const [showSuccess, setShowSuccess] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);
  const [showInfo, setShowInfo] = useState(true);

  const resetAll = () => {
    setShowSuccess(true);
    setShowWarning(true);
    setShowDanger(true);
    setShowInfo(true);
  };

  return (
    <>
      <PageHeader
        title="Alert"
        description="Alerts communicate important messages to users. They come in four semantic variants with optional icons and close buttons."
      />

      {/* -- All variants -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Variants</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Alert variant="success" title="Success">
            Your changes have been saved successfully.
          </Alert>
          <Alert variant="warning" title="Warning">
            Your API key will expire in 3 days. Renew it to avoid disruption.
          </Alert>
          <Alert variant="danger" title="Error">
            Failed to publish content. Please check your connection and try again.
          </Alert>
          <Alert variant="info" title="Info">
            A new version of the design system is available. Update when ready.
          </Alert>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Alert variant="success" title="Success">
  Your changes have been saved.
</Alert>

<Alert variant="danger" title="Error">
  Failed to publish content.
</Alert>`}
      />

      {/* -- Closable -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>With Close Button</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click the X to dismiss each alert. Click "Reset" to bring them back.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {showSuccess && (
            <Alert variant="success" closable onClose={() => setShowSuccess(false)}>
              Deployment successful.
            </Alert>
          )}
          {showWarning && (
            <Alert variant="warning" closable onClose={() => setShowWarning(false)}>
              Rate limit approaching.
            </Alert>
          )}
          {showDanger && (
            <Alert variant="danger" closable onClose={() => setShowDanger(false)}>
              Build failed on main branch.
            </Alert>
          )}
          {showInfo && (
            <Alert variant="info" closable onClose={() => setShowInfo(false)}>
              Scheduled maintenance tonight at 11 PM.
            </Alert>
          )}
          {(!showSuccess || !showWarning || !showDanger || !showInfo) && (
            <button
              onClick={resetAll}
              style={{
                alignSelf: "flex-start",
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "inherit",
                borderRadius: 8,
                border: "1.5px solid #e5e5e5",
                background: "#fff",
                cursor: "pointer",
                color: "#525252",
              }}
            >
              Reset all alerts
            </button>
          )}
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Alert variant="warning" closable onClose={() => setShow(false)}>
  Rate limit approaching.
</Alert>`}
      />

      {/* -- Without icon -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Without Icon</h2>
      <PreviewBox>
        <Alert variant="info" showIcon={false}>
          This alert has no icon, using only color and text to communicate.
        </Alert>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Alert variant="info" showIcon={false}>No icon alert.</Alert>`} />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "variant", type: '"success" | "warning" | "danger" | "info"', default: '"info"', description: "Semantic color scheme" },
          { name: "title", type: "string", default: "-", description: "Bold heading text" },
          { name: "children", type: "ReactNode", default: "-", description: "Alert message body" },
          { name: "closable", type: "boolean", default: "false", description: "Show a close button" },
          { name: "showIcon", type: "boolean", default: "true", description: "Show the variant icon" },
          { name: "onClose", type: "() => void", default: "-", description: "Callback when close button is clicked" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use <strong>success</strong> to confirm completed actions.</li>
        <li>Use <strong>warning</strong> for non-blocking issues that need attention.</li>
        <li>Use <strong>danger</strong> for errors that prevent the user from continuing.</li>
        <li>Use <strong>info</strong> for neutral announcements or tips.</li>
        <li>Make alerts closable if they are non-critical. Critical errors should persist.</li>
      </ul>
    </>
  );
}
