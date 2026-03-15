import React from "react";

export default function VocabularyInput({ textbookText, setTextbookText }) {
  return (
    <div
      className="ds-card"
      style={{
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "0.75rem",
          color: "#e4e4e7",
          fontSize: "0.95rem",
          fontWeight: "500",
        }}
      >
        Source Vocabulary
      </label>
      <textarea
        className="ds-input ds-scrollbar"
        value={textbookText}
        onChange={(e) => setTextbookText(e.target.value)}
        placeholder="Paste raw vocabulary text here..."
        style={{
          width: "100%",
          flexGrow: 1,
          minHeight: "300px",
          padding: "1rem",
          fontSize: "0.875rem",
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          resize: "vertical",
          lineHeight: "1.5",
        }}
      />
    </div>
  );
}
