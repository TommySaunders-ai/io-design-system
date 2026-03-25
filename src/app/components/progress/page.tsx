"use client";

import { useState, useEffect, useRef } from "react";
import { PageHeader } from "@/components/docs/page-header";
import { CodeBlock } from "@/components/docs/code-block";
import { PreviewBox } from "@/components/docs/preview-box";
import { PropsTable } from "@/components/docs/props-table";

/* -------------------------------------------------- */
/*  Progress component                                */
/* -------------------------------------------------- */

function Progress({
  value,
  max = 100,
  showLabel = false,
  height = 8,
  color,
}: {
  value: number;
  max?: number;
  showLabel?: boolean;
  height?: number;
  color?: string;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div style={{ width: "100%" }}>
      {showLabel && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 6,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#525252" }}>Progress</span>
          <span style={{ color: "#0a0a0a" }}>{Math.round(pct)}%</span>
        </div>
      )}
      <div
        style={{
          width: "100%",
          height,
          borderRadius: 9999,
          background: "#e5e5e5",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            borderRadius: 9999,
            background: color ?? "linear-gradient(135deg, #7c3aed, #2563eb)",
            transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------- */
/*  Page                                              */
/* -------------------------------------------------- */

export default function ProgressPage() {
  const [animVal, setAnimVal] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAnimation = () => {
    setAnimVal(0);
    setRunning(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setAnimVal((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setRunning(false);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Progress"
        description="Linear progress bars visualize task completion. They support percentage labels, custom colors, and animated transitions."
      />

      {/* -- Basic -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Basic</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />`}
      />

      {/* -- With label -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>With Percentage Label</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 400 }}>
          <Progress value={33} showLabel />
          <Progress value={67} showLabel />
          <Progress value={100} showLabel />
        </div>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Progress value={67} showLabel />`} />

      {/* -- Colors -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Color Variants</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#525252", marginBottom: 4, display: "block" }}>Default (gradient)</span>
            <Progress value={70} />
          </div>
          <div>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#525252", marginBottom: 4, display: "block" }}>Success</span>
            <Progress value={85} color="#16a34a" />
          </div>
          <div>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#525252", marginBottom: 4, display: "block" }}>Warning</span>
            <Progress value={45} color="#d97706" />
          </div>
          <div>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#525252", marginBottom: 4, display: "block" }}>Danger</span>
            <Progress value={15} color="#dc2626" />
          </div>
          <div>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#525252", marginBottom: 4, display: "block" }}>Info</span>
            <Progress value={60} color="#2563eb" />
          </div>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`<Progress value={85} color="#16a34a" />
<Progress value={45} color="#d97706" />
<Progress value={15} color="#dc2626" />`}
      />

      {/* -- Heights -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Custom Heights</h2>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <span style={{ fontSize: 12, color: "#a3a3a3", marginBottom: 4, display: "block" }}>4px (thin)</span>
            <Progress value={60} height={4} />
          </div>
          <div>
            <span style={{ fontSize: 12, color: "#a3a3a3", marginBottom: 4, display: "block" }}>8px (default)</span>
            <Progress value={60} height={8} />
          </div>
          <div>
            <span style={{ fontSize: 12, color: "#a3a3a3", marginBottom: 4, display: "block" }}>16px (large)</span>
            <Progress value={60} height={16} />
          </div>
        </div>
      </PreviewBox>
      <CodeBlock language="tsx" code={`<Progress value={60} height={4} />\n<Progress value={60} height={16} />`} />

      {/* -- Animated demo -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Animated Demo</h2>
      <p style={{ fontSize: 14, color: "#525252", marginBottom: 16 }}>
        Click the button to see the progress bar animate from 0 to 100%.
      </p>
      <PreviewBox>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 400 }}>
          <Progress value={animVal} showLabel />
          <button
            onClick={startAnimation}
            disabled={running}
            style={{
              alignSelf: "flex-start",
              padding: "10px 20px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "inherit",
              borderRadius: 8,
              border: "none",
              background: running
                ? "#e5e5e5"
                : "linear-gradient(135deg, #7c3aed, #2563eb)",
              color: running ? "#a3a3a3" : "#fff",
              cursor: running ? "not-allowed" : "pointer",
            }}
          >
            {running ? "Running..." : animVal >= 100 ? "Run Again" : "Start"}
          </button>
        </div>
      </PreviewBox>
      <CodeBlock
        language="tsx"
        code={`const [value, setValue] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setValue(prev => Math.min(prev + 2, 100));
  }, 60);
  return () => clearInterval(interval);
}, []);

<Progress value={value} showLabel />`}
      />

      {/* -- Props -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Props</h2>
      <PropsTable
        rows={[
          { name: "value", type: "number", default: "-", description: "Current progress value" },
          { name: "max", type: "number", default: "100", description: "Maximum value" },
          { name: "showLabel", type: "boolean", default: "false", description: "Show percentage text above the bar" },
          { name: "height", type: "number", default: "8", description: "Bar height in pixels" },
          { name: "color", type: "string", default: "primary gradient", description: "Fill color or CSS gradient" },
        ]}
      />

      {/* -- Guidelines -- */}
      <h2 style={{ fontSize: 20, fontWeight: 600, color: "#0a0a0a", marginTop: 40 }}>Usage Guidelines</h2>
      <ul style={{ fontSize: 14, color: "#525252", lineHeight: 2, paddingLeft: 20 }}>
        <li>Use progress bars when the completion percentage is known. For indeterminate loading, use skeletons.</li>
        <li>Show the percentage label for long-running tasks to set user expectations.</li>
        <li>Use semantic colors to indicate status: green for healthy, red for critical, etc.</li>
        <li>The thin (4px) variant works well inside table rows or compact UIs.</li>
      </ul>
    </>
  );
}
