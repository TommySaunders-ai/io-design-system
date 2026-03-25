"use client";

import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";

const oauthSteps = [
  { num: "1", label: "Initiate", desc: "User clicks 'Connect Notion'. App redirects to Notion OAuth URL." },
  { num: "2", label: "Authorize", desc: "User selects workspace and grants access to pages/databases." },
  { num: "3", label: "Callback", desc: "Notion redirects back with an authorization code." },
  { num: "4", label: "Token Exchange", desc: "Server exchanges code for an access token. Stored securely." },
  { num: "5", label: "Ready", desc: "Connection established. User selects databases/pages to sync." },
];

export default function NotionConnectPage() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <PageHeader
        title="Notion Connect"
        description="OAuth integration flow for connecting Notion workspaces. Covers the authentication steps, database selection UI, and page selection."
      />

      {/* OAuth Flow Diagram */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        OAuth Flow Steps
      </h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {oauthSteps.map((step, i) => (
            <div key={step.num} style={{ display: "flex", gap: 16 }}>
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 36, flexShrink: 0 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                {i < oauthSteps.length - 1 && (
                  <div style={{ width: 2, flex: 1, background: "#e5e5e5", minHeight: 24 }} />
                )}
              </div>
              {/* Content */}
              <div style={{ paddingBottom: i < oauthSteps.length - 1 ? 24 : 0 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0a0a0a", marginBottom: 4 }}>
                  {step.label}
                </div>
                <div style={{ fontSize: 14, color: "#525252", lineHeight: 1.6 }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </PreviewBox>

      {/* OAuth Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        OAuth Initiation
      </h2>
      <CodeBlock
        language="ts"
        code={`// Step 1: Build the Notion OAuth URL
const NOTION_AUTH_URL = "https://api.notion.com/v1/oauth/authorize";

function getNotionAuthUrl(clientId: string, redirectUri: string, state: string) {
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    owner: "user",
    state, // CSRF protection
  });
  return \`\${NOTION_AUTH_URL}?\${params.toString()}\`;
}`}
      />

      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Token Exchange
      </h2>
      <CodeBlock
        language="ts"
        code={`// Step 4: Exchange the code for an access token
async function exchangeCodeForToken(code: string) {
  const response = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: \`Basic \${btoa(\`\${CLIENT_ID}:\${CLIENT_SECRET}\`)}\`,
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });
  return response.json();
  // Returns: { access_token, workspace_id, workspace_name, ... }
}`}
      />

      {/* Database Selection UI */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Database Selection UI
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        After OAuth completes, the user selects which Notion databases to sync. Each database shows its title, icon, and property count.
      </p>
      <PreviewBox>
        <div style={{ maxWidth: 480 }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#0a0a0a", marginBottom: 16 }}>
            Select Databases
          </div>
          {[
            { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", name: "Content Calendar", props: 8, selected: true },
            { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", name: "Blog Posts", props: 12, selected: false },
            { icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", name: "Media Library", props: 5, selected: false },
          ].map((db) => (
            <div
              key={db.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                borderRadius: 10,
                border: db.selected ? "2px solid #7c3aed" : "1px solid #e5e5e5",
                background: db.selected ? "#faf5ff" : "#ffffff",
                marginBottom: 8,
                cursor: "pointer",
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={db.icon} />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#0a0a0a" }}>{db.name}</div>
                <div style={{ fontSize: 12, color: "#a3a3a3" }}>{db.props} properties</div>
              </div>
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 999,
                  border: db.selected ? "none" : "2px solid #e5e5e5",
                  background: db.selected ? "linear-gradient(135deg, #7c3aed, #2563eb)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {db.selected && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <polyline points="2,6 5,9 10,3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
          ))}
          <button
            style={{
              marginTop: 16,
              width: "100%",
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: "#ffffff",
              border: "none",
              borderRadius: 10,
              padding: "12px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.35)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Connect Selected
          </button>
        </div>
      </PreviewBox>

      {/* Fetch Databases Code */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Fetching Available Databases
      </h2>
      <CodeBlock
        language="ts"
        code={`// Step 5: List databases the user granted access to
async function listDatabases(accessToken: string) {
  const response = await fetch("https://api.notion.com/v1/search", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${accessToken}\`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      filter: { value: "database", property: "object" },
    }),
  });
  const data = await response.json();
  return data.results.map((db: any) => ({
    id: db.id,
    title: db.title?.[0]?.plain_text ?? "Untitled",
    icon: db.icon,
    propertyCount: Object.keys(db.properties).length,
  }));
}`}
      />

      {/* Page Selection */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Page Selection
      </h2>
      <p style={{ fontSize: 15, color: "#525252", lineHeight: 1.7, marginBottom: 16 }}>
        After selecting a database, users can optionally filter which pages to sync based on Notion properties (status, tags, dates).
      </p>
      <CodeBlock
        language="ts"
        code={`// Query pages from a specific database with filters
async function queryDatabasePages(
  accessToken: string,
  databaseId: string,
  filter?: Record<string, unknown>
) {
  const response = await fetch(
    \`https://api.notion.com/v1/databases/\${databaseId}/query\`,
    {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${accessToken}\`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filter }),
    }
  );
  return response.json();
}`}
      />

      {/* Guidelines */}
      <h2 style={{ fontSize: 24, fontWeight: 600, color: "#0a0a0a", marginTop: 48, marginBottom: 16 }}>
        Guidelines
      </h2>
      <ul style={{ fontSize: 15, color: "#525252", lineHeight: 2, paddingLeft: 24 }}>
        <li>Always include a CSRF state parameter in the OAuth URL.</li>
        <li>Store access tokens server-side only, never in the browser.</li>
        <li>Show a clear success/error state after the OAuth callback.</li>
        <li>Allow users to disconnect and reconnect at any time.</li>
        <li>Display the workspace name after connection so users know which account is linked.</li>
      </ul>
    </div>
  );
}
