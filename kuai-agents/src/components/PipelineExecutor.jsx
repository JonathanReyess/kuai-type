import React from "react";
import { AGENT_CONFIGS } from "../constants/agentPrompts.js";
import { getStatusIcon, getStatusColor } from "../utils/uiHelpers.jsx";

export default function PipelineExecutor({
  agentStatuses,
  isProcessing,
  currentAgent,
  onRunPipeline,
}) {
  return (
    <div
      className="ds-card"
      style={{
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          fontSize: "0.95rem",
          color: "#e4e4e7",
          fontWeight: "500",
          margin: "0 0 1rem 0",
        }}
      >
        Pipeline Execution
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          flexGrow: 1,
        }}
      >
        {AGENT_CONFIGS.map((agent) => (
          <div
            key={agent.key}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.875rem",
              backgroundColor:
                agentStatuses[agent.key] === "running"
                  ? "#1e1e20"
                  : "transparent",
              border: "1px solid",
              borderColor:
                agentStatuses[agent.key] === "running"
                  ? "#3f3f46"
                  : "transparent",
              borderRadius: "8px",
              transition: "all 0.2s",
            }}
          >
            <div
              style={{
                color: getStatusColor(agentStatuses[agent.key]),
                display: "flex",
                alignItems: "center",
                marginRight: "1rem",
              }}
            >
              {getStatusIcon(agentStatuses[agent.key])}
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#f4f4f5",
                }}
              >
                {agent.label}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#71717a",
                  marginTop: "0.125rem",
                }}
              >
                {agent.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        {isProcessing && (
          <div
            style={{
              fontSize: "0.8rem",
              color: "#a1a1aa",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Running: {currentAgent}
          </div>
        )}
        <button
          className="ds-button"
          onClick={onRunPipeline}
          disabled={isProcessing}
          style={{
            width: "100%",
            padding: "0.75rem",
            fontSize: "0.9rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {isProcessing ? "Processing..." : "Run Pipeline"}
        </button>
      </div>
    </div>
  );
}
