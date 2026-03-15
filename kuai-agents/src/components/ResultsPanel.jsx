import React from "react";

export default function ResultsPanel({ results, onCopyVocab, onCopyStories }) {
  if (!results) return null;

  const stats = [
    { label: "Extracted Words", value: results.vocab.length },
    { label: "Easy Stories", value: results.easy?.length || 0 },
    { label: "Medium Stories", value: results.medium?.length || 0 },
    { label: "Hard Stories", value: results.hard?.length || 0 },
  ];

  return (
    <div
      className="ds-card"
      style={{ padding: "1.5rem", animation: "fadeIn 0.3s ease" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: "500",
            margin: 0,
            color: "#f4f4f5",
          }}
        >
          Execution Results
        </h3>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            className="ds-button-secondary"
            onClick={onCopyVocab}
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            Copy Vocab
          </button>
          <button
            className="ds-button-secondary"
            onClick={onCopyStories}
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            Copy Stories
          </button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#1e1e20",
              border: "1px solid #27272a",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#f4f4f5",
                marginBottom: "0.25rem",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: "#a1a1aa",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
