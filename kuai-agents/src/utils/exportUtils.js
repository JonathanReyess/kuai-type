/**
 * Utility functions for exporting results to clipboard
 */

export function exportVocabToClipboard(results, topicName, addLog) {
  if (results?.vocab) {
    const output = `export const vocab${topicName} = ${JSON.stringify(results.vocab, null, 2)};`;
    navigator.clipboard.writeText(output);
    addLog("info", "System", "Vocab export copied to clipboard.");
  }
}

export function exportStoriesToClipboard(results, topicName, addLog) {
  if (results) {
    const output = `${topicName}: {\n  easy: ${JSON.stringify(results.easy, null, 2)},\n  medium: ${JSON.stringify(results.medium, null, 2)},\n  hard: ${JSON.stringify(results.hard, null, 2)}\n}`;
    navigator.clipboard.writeText(output);
    addLog("info", "System", "Stories object copied to clipboard.");
  }
}

export function exportLogsToClipboard(logs, addLog) {
  if (logs.length > 0) {
    const logText = logs
      .map((l) => {
        let text = `[${l.timestamp}] [${l.agent}] ${l.level.toUpperCase()}: ${l.message}`;
        if (l.payload) {
          text += `\nPayload:\n${
            typeof l.payload === "string"
              ? l.payload
              : JSON.stringify(l.payload, null, 2)
          }`;
        }
        return text;
      })
      .join("\n\n");
    navigator.clipboard.writeText(logText);
    addLog("info", "System", "Terminal logs copied to clipboard.");
  }
}
