"use client";

import { useState } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Modal component                                   */
/* -------------------------------------------------- */

function Modal({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          borderRadius: 16,
          boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
          width: "100%",
          maxWidth: 480,
          overflow: "hidden",
          animation: "modalIn 0.2s ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#0a0a0a" }}>{title}</h3>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              border: "none",
              background: "#f5f5f5",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ebebeb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f5f5")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 24 }}>{children}</div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 10,
              padding: "16px 24px",
              borderTop: "1px solid #e5e5e5",
              background: "#fafafa",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function ModalPage() {
  const [basic, setBasic] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [form, setForm] = useState(false);

  const btnStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
    borderRadius: 8,
    cursor: "pointer",
    lineHeight: 1,
  };

  return (
    <>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <PageHeader
        title="Modal"
        description="Modals display focused content in an overlay with backdrop blur. They support headers, body content, footer actions, and close on backdrop click."
      />

      {/* -- Basic -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Basic Modal</h2>
      <PreviewBox>
        <button
          onClick={() => setBasic(true)}
          style={{
            ...btnStyle,
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            color: "#fff",
            border: "none",
          }}
        >
          Open Basic Modal
        </button>
      </PreviewBox>
      <Modal open={basic} onClose={() => setBasic(false)} title="Basic Modal">
        <p style={{ margin: 0, fontSize: 14, color: "#525252", lineHeight: 1.6 }}>
          This is a simple modal with just a header and body. Click the backdrop or the close button to dismiss.
        </p>
      </Modal>
      <CodeBlock
        language="tsx"
        code={`<Modal open={open} onClose={() => setOpen(false)} title="Basic Modal">
  <p>Modal body content goes here.</p>
</Modal>`}
      />

      {/* -- Confirm -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Confirmation Modal</h2>
      <PreviewBox>
        <button
          onClick={() => setConfirm(true)}
          style={{
            ...btnStyle,
            background: "#dc2626",
            color: "#fff",
            border: "none",
          }}
        >
          Delete Item
        </button>
      </PreviewBox>
      <Modal
        open={confirm}
        onClose={() => setConfirm(false)}
        title="Delete Item"
        footer={
          <>
            <button
              onClick={() => setConfirm(false)}
              style={{
                ...btnStyle,
                background: "#fff",
                color: "#525252",
                border: "1.5px solid #e5e5e5",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => setConfirm(false)}
              style={{
                ...btnStyle,
                background: "#dc2626",
                color: "#fff",
                border: "none",
              }}
            >
              Delete
            </button>
          </>
        }
      >
        <p style={{ margin: 0, fontSize: 14, color: "#525252", lineHeight: 1.6 }}>
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
      </Modal>
      <CodeBlock
        language="tsx"
        code={`<Modal
  open={open}
  onClose={close}
  title="Delete Item"
  footer={
    <>
      <Button variant="secondary" onClick={close}>Cancel</Button>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>Are you sure? This cannot be undone.</p>
</Modal>`}
      />

      {/* -- Form modal -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Form Modal</h2>
      <PreviewBox>
        <button
          onClick={() => setForm(true)}
          style={{
            ...btnStyle,
            background: "#fff",
            color: "#0a0a0a",
            border: "1.5px solid #e5e5e5",
          }}
        >
          New Project
        </button>
      </PreviewBox>
      <Modal
        open={form}
        onClose={() => setForm(false)}
        title="Create Project"
        footer={
          <>
            <button
              onClick={() => setForm(false)}
              style={{
                ...btnStyle,
                background: "#fff",
                color: "#525252",
                border: "1.5px solid #e5e5e5",
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => setForm(false)}
              style={{
                ...btnStyle,
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                color: "#fff",
                border: "none",
              }}
            >
              Create
            </button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a" }}>Project Name</label>
            <input
              placeholder="My Project"
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "1.5px solid #e5e5e5",
                fontSize: 14,
                fontFamily: "inherit",
                outline: "none",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#0a0a0a" }}>Description</label>
            <textarea
              placeholder="Describe your project..."
              rows={3}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "1.5px solid #e5e5e5",
                fontSize: 14,
                fontFamily: "inherit",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>
        </div>
      </Modal>

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "open", type: "boolean", default: "false", description: "Controls modal visibility" },
          { name: "onClose", type: "() => void", default: "-", description: "Called when backdrop or close button is clicked" },
          { name: "title", type: "string", default: "-", description: "Modal header title" },
          { name: "children", type: "ReactNode", default: "-", description: "Modal body content" },
          { name: "footer", type: "ReactNode", default: "-", description: "Action buttons rendered in the footer" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use modals for focused tasks that require user attention.</li>
        <li>Always provide a way to close (backdrop click + close button).</li>
        <li>Place primary actions on the right side of the footer.</li>
        <li>Use confirmation modals for destructive actions.</li>
        <li>Keep modal content concise; use full pages for complex flows.</li>
      </ul>
    </>
  );
}
