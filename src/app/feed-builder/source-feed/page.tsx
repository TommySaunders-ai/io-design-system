"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

const sourceCards = [
  { title: "Q1 Marketing Plan", status: "Draft", tags: ["marketing"], h: 140 },
  { title: "Product Launch Brief", status: "In Review", tags: ["product", "launch"], h: 180 },
  { title: "Blog: AI Trends 2026", status: "Approved", tags: ["blog", "ai"], h: 120 },
  { title: "Social Media Calendar", status: "Draft", tags: ["social"], h: 160 },
  { title: "Newsletter #42", status: "Approved", tags: ["email"], h: 130 },
  { title: "Case Study: Acme Corp", status: "In Review", tags: ["case-study"], h: 190 },
];

const statusColors: Record<string, { color: string; bg: string; border: string }> = {
  Draft: { color: "#525252", bg: "#f5f5f5", border: "#e5e5e5" },
  "In Review": { color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
  Approved: { color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0" },
};

export default function SourceFeedPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Source Feed"
        description="The masonry grid that displays content fetched from connected sources. Covers the property/content fetching loop and the 'Send to Creative' workflow."
      />

      {/* Masonry Feed Demo */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Source Feed -- Masonry Grid
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        Content from connected Notion databases is displayed in a masonry grid. Each card shows the title, status badge, tags, and a "Send to Creative" action.
      </p>
      <PreviewBox>
        <div style={{ columnCount: 3, columnGap: 16 }}>
          {sourceCards.map((card, i) => {
            const sc = statusColors[card.status];
            return (
              <div
                key={i}
                style={{
                  breakInside: "avoid",
                  marginBottom: 16,
                  padding: 20,
                  borderRadius: 12,
                  border: "1px solid #e5e5e5",
                  background: "#ffffff",
                }}
              >
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", marginBottom: 8 }}>
                  {card.title}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 600,
                    color: sc.color,
                    background: sc.bg,
                    border: `1px solid ${sc.border}`,
                    marginBottom: 10,
                  }}
                >
                  {card.status}
                </span>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 8,
                        background: "#f5f5f5",
                        color: "#525252",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: 8,
                    padding: "8px 0",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Send to Creative
                </button>
              </div>
            );
          })}
        </div>
      </PreviewBox>

      {/* Fetching Loop Diagram */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Property/Content Fetching Loop
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        The source feed fetches data in two passes: first the database properties (titles, statuses, tags), then the full page content (blocks) on demand.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {[
            { step: "1", label: "Query Database", desc: "Fetch all pages with properties (title, status, tags, dates)" },
            { step: "2", label: "Render Cards", desc: "Display masonry grid with property data. Content body is lazy." },
            { step: "3", label: "Fetch Page Blocks", desc: "On card expand or 'Send to Creative', fetch full page content (blocks)" },
            { step: "4", label: "Poll for Updates", desc: "Re-query on interval or manual refresh to sync new/changed pages" },
          ].map((item, i, arr) => (
            <div key={item.step} style={{ display: "flex", gap: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 36, flexShrink: 0 }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: "#eff6ff", border: "2px solid #bfdbfe", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {item.step}
                </div>
                {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: "#e5e5e5", minHeight: 20 }} />}
              </div>
              <div style={{ paddingBottom: i < arr.length - 1 ? 20 : 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a", marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#525252", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* Code: Fetching */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Fetching Code
      </h2>
      <CodeBlock
        language="ts"
        code={`// Pass 1: Fetch pages with properties
async function fetchSourceFeed(databaseId: string) {
  const pages = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Last Edited", direction: "descending" }],
  });
  return pages.results.map((page) => ({
    id: page.id,
    title: getTitle(page),
    status: getSelectProperty(page, "Status"),
    tags: getMultiSelectProperty(page, "Tags"),
    lastEdited: page.last_edited_time,
  }));
}

// Pass 2: Fetch full page content (on demand)
async function fetchPageContent(pageId: string) {
  const blocks = await notion.blocks.children.list({
    block_id: pageId,
  });
  return blocks.results;
}`}
      />

      {/* Send to Creative Workflow */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        "Send to Creative" Workflow
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        When a user clicks "Send to Creative", the system fetches the full page content, creates a creative item, and transitions the content status to "In Review".
      </p>
      <CodeBlock
        language="ts"
        code={`async function sendToCreative(sourceItem: SourceItem) {
  // 1. Fetch full page content if not already loaded
  const blocks = await fetchPageContent(sourceItem.id);

  // 2. Create a creative item from the source data
  const creativeItem: CreativeItem = {
    sourceId: sourceItem.id,
    title: sourceItem.title,
    body: blocksToMarkdown(blocks),
    media: extractMedia(blocks),
    status: "in_review",
    template: "default",
  };

  // 3. Save to creative feed
  await saveCreativeItem(creativeItem);

  // 4. Update source status
  await updateSourceStatus(sourceItem.id, "in_review");
}`}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Use lazy loading for page content blocks to keep the initial feed load fast.</li>
        <li>Display status badges using the status-lifecycle color tokens.</li>
        <li>The masonry grid should follow the responsive breakpoints (3/2/1 columns).</li>
        <li>Show a loading skeleton while fetching content blocks.</li>
        <li>The "Send to Creative" button should be the primary gradient action on each card.</li>
      </ul>
    </div>
  );
}
