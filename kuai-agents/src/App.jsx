import React, { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import ConfigurationPanel from "./components/ConfigurationPanel.jsx";
import VocabularyInput from "./components/VocabularyInput.jsx";
import PipelineExecutor from "./components/PipelineExecutor.jsx";
import DebugTerminal from "./components/DebugTerminal.jsx";
import ErrorDisplay from "./components/ErrorDisplay.jsx";
import ResultsPanel from "./components/ResultsPanel.jsx";
import { useLogger } from "./hooks/useLogger.js";
import { useAgentStatus } from "./hooks/useAgentStatus.js";
import { runAgentPipeline } from "./services/pipelineService.js";
import {
  exportVocabToClipboard,
  exportStoriesToClipboard,
  exportLogsToClipboard,
} from "./utils/exportUtils.js";
import { GLOBAL_STYLES, COLORS } from "./constants/styles.js";

export default function ChineseVocabAgentSystem() {
  const [apiKey, setApiKey] = useState("");
  const [textbookText, setTextbookText] = useState("");
  const [topicName, setTopicName] = useState("Lesson1");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentAgent, setCurrentAgent] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");

  const { logs, addLog, clearLogs, logsEndRef } = useLogger();
  const { agentStatuses, updateAgentStatus, resetAgentStatuses } =
    useAgentStatus();

  const handleRunPipeline = useCallback(async () => {
    if (!apiKey.trim()) {
      setError("Please enter your Gemini API key");
      return;
    }
    if (!textbookText.trim()) {
      setError("Please enter textbook text to process");
      return;
    }

    setIsProcessing(true);
    setError("");
    setResults(null);
    clearLogs();
    resetAgentStatuses();

    try {
      const finalOutput = await runAgentPipeline(
        apiKey,
        textbookText,
        addLog,
        updateAgentStatus,
        setCurrentAgent,
      );
      setResults(finalOutput);
    } catch (err) {
      setError(`Pipeline failed: ${err.message}`);
      addLog(
        "error",
        "System",
        "Pipeline halted due to fatal error.",
        err.message,
      );
    } finally {
      setIsProcessing(false);
    }
  }, [
    apiKey,
    textbookText,
    addLog,
    clearLogs,
    resetAgentStatuses,
    updateAgentStatus,
  ]);

  const handleCopyVocab = () =>
    exportVocabToClipboard(results, topicName, addLog);
  const handleCopyStories = () =>
    exportStoriesToClipboard(results, topicName, addLog);
  const handleCopyLogs = () => exportLogsToClipboard(logs, addLog);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.background,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        color: COLORS.text.secondary,
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <style>{GLOBAL_STYLES}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Header />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
        >
          <ConfigurationPanel
            apiKey={apiKey}
            setApiKey={setApiKey}
            topicName={topicName}
            setTopicName={setTopicName}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "1.5rem",
            }}
          >
            <VocabularyInput
              textbookText={textbookText}
              setTextbookText={setTextbookText}
            />

            <PipelineExecutor
              agentStatuses={agentStatuses}
              isProcessing={isProcessing}
              currentAgent={currentAgent}
              onRunPipeline={handleRunPipeline}
            />
          </div>

          <DebugTerminal
            logs={logs}
            logsEndRef={logsEndRef}
            onCopyLogs={handleCopyLogs}
          />

          <ErrorDisplay error={error} />

          <ResultsPanel
            results={results}
            onCopyVocab={handleCopyVocab}
            onCopyStories={handleCopyStories}
          />
        </div>
      </div>
    </div>
  );
}
