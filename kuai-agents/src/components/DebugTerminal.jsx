import React from "react";
import { getLogColor } from "../utils/uiHelpers.jsx";

export default function DebugTerminal({ logs, logsEndRef, onCopyLogs }) {
  return (
    <div
      className="ds-card"
      style={{
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #3f3f46",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h3
            style={{
              fontSize: "0.95rem",
              color: "#e4e4e7",
              fontWeight: "500",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
            Debug Terminal
          </h3>
          <span style={{ fontSize: "0.75rem", color: "#71717a" }}>
            {logs.length} Events Logged
          </span>
        </div>

        <button
          className="ds-button-secondary"
          onClick={onCopyLogs}
          disabled={logs.length === 0}
          style={{
            padding: "0.25rem 0.75rem",
            fontSize: "0.75rem",
            opacity: logs.length === 0 ? 0.5 : 1,
          }}
        >
          Copy Logs
        </button>
      </div>

      <div
        className="ds-scrollbar"
        style={{
          backgroundColor: "#09090b",
          borderRadius: "6px",
          border: "1px solid #27272a",
          height: "300px",
          overflowY: "auto",
          padding: "1rem",
          fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
          fontSize: "0.8rem",
        }}
      >
        {logs.length === 0 ? (
          <div
            style={{
              color: "#52525b",
              textAlign: "center",
              marginTop: "5rem",
            }}
          >
            System ready. Awaiting execution.
          </div>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              style={{ marginBottom: "0.75rem", lineHeight: "1.4" }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "#71717a" }}>[{log.timestamp}]</span>
                <span style={{ color: "#c084fc", minWidth: "90px" }}>
                  [{log.agent}]
                </span>
                <span style={{ color: getLogColor(log.level) }}>
                  {log.message}
                </span>
              </div>
              {log.payload && (
                <details
                  style={{
                    marginLeft: "140px",
                    marginTop: "0.25rem",
                    outline: "none",
                  }}
                >
                  <summary
                    style={{
                      color: "#52525b",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    Inspect Payload Data
                  </summary>
                  <pre
                    className="ds-scrollbar"
                    style={{
                      backgroundColor: "#18181b",
                      padding: "0.5rem",
                      borderRadius: "4px",
                      border: "1px solid #27272a",
                      marginTop: "0.5rem",
                      maxHeight: "150px",
                      overflowY: "auto",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-all",
                      color: "#a1a1aa",
                    }}
                  >
                    {typeof log.payload === "string"
                      ? log.payload
                      : JSON.stringify(log.payload, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          ))
        )}
        <div ref={logsEndRef} />
      </div>
    </div>
  );
}
