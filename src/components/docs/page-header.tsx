export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h1
        style={{
          fontSize: 36,
          fontWeight: 300,
          letterSpacing: "-0.8px",
          color: "#0a0a0a",
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 14,
          color: "#525252",
          fontWeight: 400,
          marginTop: 12,
          lineHeight: 1.6,
          maxWidth: 640,
        }}
      >
        {description}
      </p>
    </div>
  );
}
