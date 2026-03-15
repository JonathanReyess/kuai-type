import React from "react";

export default function ConfigurationPanel({
  apiKey,
  setApiKey,
  topicName,
  setTopicName,
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
      }}
    >
      <div className="ds-card" style={{ padding: "1.25rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#a1a1aa",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          API Configuration
        </label>
        <input
          type="password"
          className="ds-input"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter Gemini API key"
          style={{
            width: "100%",
            padding: "0.625rem 0.875rem",
            fontSize: "0.875rem",
          }}
        />
      </div>
      <div className="ds-card" style={{ padding: "1.25rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            color: "#a1a1aa",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          Output Identifier
        </label>
        <input
          type="text"
          className="ds-input"
          value={topicName}
          onChange={(e) => setTopicName(e.target.value)}
          placeholder="e.g., Lesson1"
          style={{
            width: "100%",
            padding: "0.625rem 0.875rem",
            fontSize: "0.875rem",
          }}
        />
      </div>
    </div>
  );
}
