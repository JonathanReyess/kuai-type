import React from "react";

export default function ErrorDisplay({ error }) {
  if (!error) return null;

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.2)",
        borderRadius: "8px",
        color: "#f87171",
        fontSize: "0.875rem",
      }}
    >
      <span style={{ fontWeight: "600", marginRight: "0.5rem" }}>
        Execution Error:
      </span>
      {error}
    </div>
  );
}
