/**
 * Utility functions for parsing JSON responses
 */

export function parseJSON(text, agentName, log) {
  try {
    const parsed = JSON.parse(text);
    log("success", agentName, "Successfully parsed JSON structure");
    return parsed;
  } catch (e) {
    log(
      "warn",
      agentName,
      "Standard JSON.parse failed, attempting regex extraction...",
    );
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      try {
        const parsed = JSON.parse(match[0]);
        log(
          "success",
          agentName,
          "Successfully extracted and parsed JSON array via regex",
        );
        return parsed;
      } catch (innerError) {
        log(
          "error",
          agentName,
          "Regex extraction failed to produce valid JSON",
          innerError.message,
        );
        throw new Error(
          `Failed to parse extracted JSON: ${innerError.message}`,
        );
      }
    }
    log("error", agentName, "Complete JSON parsing failure", e.message);
    throw new Error(`Failed to parse JSON: ${e.message}`);
  }
}
