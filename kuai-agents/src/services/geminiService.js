/**
 * Service for interacting with the Gemini API
 */

export async function callGeminiAgent(apiKey, prompt, content, agentName, log) {
  const startTime = performance.now();
  log("info", agentName, "Initiating API request...");

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt + content }] }],
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      log("error", agentName, `API HTTP Error: ${response.status}`, errorData);
      throw new Error(errorData.error?.message || "API request failed");
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const duration = ((performance.now() - startTime) / 1000).toFixed(2);

    log("success", agentName, `Received raw response in ${duration}s`, text);

    return cleanGeminiResponse(text);
  } catch (error) {
    log("error", agentName, `Exception caught during fetch: ${error.message}`);
    throw error;
  }
}

/**
 * Clean up Gemini API response by removing markdown code blocks and variable declarations
 */
function cleanGeminiResponse(text) {
  let cleaned = text.trim();
  cleaned = cleaned.replace(/^```(?:json|javascript|js)?\n?/i, "");
  cleaned = cleaned.replace(/\n?```$/i, "");
  cleaned = cleaned.replace(/^const\s+vocab\w*\s*=\s*/i, "");
  cleaned = cleaned.replace(/;?\s*$/, "");
  return cleaned;
}
