import { useState, useCallback, useRef, useEffect } from "react";

/**
 * Custom hook for managing debug logs
 */
export function useLogger() {
  const [logs, setLogs] = useState([]);
  const logsEndRef = useRef(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const addLog = useCallback((level, agent, message, payload = null) => {
    const timestamp = new Date().toISOString().split("T")[1].slice(0, 12);
    setLogs((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        timestamp,
        level,
        agent,
        message,
        payload,
      },
    ]);

    const consoleMsg = `[${timestamp}] [${agent}] ${message}`;
    if (level === "error") console.error(consoleMsg, payload || "");
    else if (level === "warn") console.warn(consoleMsg, payload || "");
    else console.log(consoleMsg, payload || "");
  }, []);

  const clearLogs = useCallback(() => {
    setLogs([]);
  }, []);

  return { logs, addLog, clearLogs, logsEndRef };
}
