export function PreviewBox({
  children,
  label = true,
}: {
  children: React.ReactNode;
  label?: boolean;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid #e5e5e5",
        marginTop: 24,
        marginBottom: 24,
        overflow: "hidden",
      }}
    >
      {label && (
        <div
          style={{
            padding: "8px 24px",
            borderBottom: "1px solid #e5e5e5",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "#a3a3a3",
          }}
        >
          Preview
        </div>
      )}
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  );
}
