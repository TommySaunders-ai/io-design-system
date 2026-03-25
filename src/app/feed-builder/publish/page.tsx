"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

const queueItems = [
  { title: "Q1 Marketing Plan", dest: "LinkedIn", time: "Today, 2:00 PM", status: "scheduled" },
  { title: "Blog: AI Trends 2026", dest: "Blog", time: "Today, 4:00 PM", status: "scheduled" },
  { title: "Newsletter #42", dest: "Email", time: "Tomorrow, 9:00 AM", status: "queued" },
  { title: "Product Launch Brief", dest: "Twitter", time: "Mar 28, 10:00 AM", status: "queued" },
];

const integrations = [
  { name: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z", connected: true },
  { name: "Twitter / X", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", connected: true },
  { name: "Blog (CMS)", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", connected: true },
  { name: "Email (Resend)", icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6", connected: false },
];

export default function PublishPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Publish"
        description="The publishing queue and distribution integrations. Content arrives from the Creative stage and is scheduled or immediately published to connected platforms."
      />

      {/* Publishing Queue */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Publishing Queue
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The queue shows all content ready for distribution, sorted by scheduled time. Each item displays the destination platform, scheduled time, and current queue status.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 100px", gap: 16, padding: "10px 16px", borderBottom: "1px solid #e5e5e5", background: "#fafafa", borderRadius: "12px 12px 0 0" }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.05em" }}>Content</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.05em" }}>Destination</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.05em" }}>Scheduled</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.05em" }}>Status</span>
          </div>
          {queueItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 100px",
                gap: 16,
                padding: "14px 16px",
                borderBottom: i < queueItems.length - 1 ? "1px solid #f5f5f5" : "none",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500, color: "#0a0a0a" }}>{item.title}</span>
              <span style={{ fontSize: 13, color: "#525252" }}>{item.dest}</span>
              <span style={{ fontSize: 13, color: "#525252" }}>{item.time}</span>
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                  color: item.status === "scheduled" ? "#7c3aed" : "#2563eb",
                  background: item.status === "scheduled" ? "#faf5ff" : "#eff6ff",
                  border: `1px solid ${item.status === "scheduled" ? "#ddd6fe" : "#bfdbfe"}`,
                  textAlign: "center",
                }}
              >
                {item.status === "scheduled" ? "Scheduled" : "Queued"}
              </span>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Distribution Integrations */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Distribution Integrations
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Connect to publishing platforms. Each integration shows its connection status and can be toggled on or off per content item.
      </p>
      <PreviewBox>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {integrations.map((intg) => (
            <div
              key={intg.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px",
                borderRadius: 12,
                border: intg.connected ? "1px solid #bbf7d0" : "1px solid #e5e5e5",
                background: intg.connected ? "#f0fdf4" : "#ffffff",
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={intg.icon} />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>{intg.name}</div>
                <div style={{ fontSize: 12, color: intg.connected ? "#059669" : "#a3a3a3" }}>
                  {intg.connected ? "Connected" : "Not connected"}
                </div>
              </div>
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: intg.connected ? "#16a34a" : "#e5e5e5",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Queue Component Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Queue Component
      </h2>
      <CodeBlock
        language="tsx"
        code={`interface QueueItem {
  id: string;
  title: string;
  destination: string;
  scheduledAt: string;
  status: "queued" | "scheduled" | "publishing" | "published" | "failed";
}

function PublishQueue({ items }: { items: QueueItem[] }) {
  return (
    <div style={{ borderRadius: 12, border: "1px solid #e5e5e5", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 100px", padding: "10px 16px", background: "#fafafa" }}>
        <span>Content</span>
        <span>Destination</span>
        <span>Scheduled</span>
        <span>Status</span>
      </div>
      {items.map((item) => (
        <div key={item.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 100px", padding: "14px 16px", borderTop: "1px solid #f5f5f5" }}>
          <span>{item.title}</span>
          <span>{item.destination}</span>
          <span>{new Date(item.scheduledAt).toLocaleString()}</span>
          <StatusBadge status={item.status} />
        </div>
      ))}
    </div>
  );
}`}
      />

      {/* Publishing API */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Publishing API
      </h2>
      <CodeBlock
        language="ts"
        code={`async function publishItem(item: QueueItem) {
  // Update status to "publishing"
  await updateQueueStatus(item.id, "publishing");

  try {
    // Dispatch to the correct integration
    switch (item.destination) {
      case "linkedin":
        await publishToLinkedIn(item);
        break;
      case "twitter":
        await publishToTwitter(item);
        break;
      case "blog":
        await publishToBlog(item);
        break;
      case "email":
        await publishToEmail(item);
        break;
    }
    await updateQueueStatus(item.id, "published");
  } catch (error) {
    await updateQueueStatus(item.id, "failed");
    throw error;
  }
}`}
      />

      {/* Props */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Queue Status Reference
      </h2>
      <PropsTable
        rows={[
          { name: "queued", type: "status", default: "#2563eb", description: "Item is in the queue but not yet scheduled" },
          { name: "scheduled", type: "status", default: "#7c3aed", description: "Item has a confirmed publish date/time" },
          { name: "publishing", type: "status", default: "#f59e0b", description: "Currently being sent to the destination" },
          { name: "published", type: "status", default: "#059669", description: "Successfully published" },
          { name: "failed", type: "status", default: "#dc2626", description: "Publishing failed, requires retry" },
        ]}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Sort the queue by scheduled time (nearest first).</li>
        <li>Allow drag-and-drop reordering of queued (not yet scheduled) items.</li>
        <li>Show real-time status updates as items move through publishing.</li>
        <li>Failed items should display the error message and offer a retry action.</li>
        <li>Provide a "Publish Now" override for any queued item.</li>
      </ul>
    </div>
  );
}
