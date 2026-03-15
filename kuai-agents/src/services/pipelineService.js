import { callGeminiAgent } from "./geminiService.js";
import { parseJSON } from "../utils/jsonParser.js";
import { AGENT_PROMPTS } from "../constants/agentPrompts.js";

/**
 * Orchestrates the multi-agent pipeline execution
 */
export async function runAgentPipeline(
  apiKey,
  textbookText,
  addLog,
  updateAgentStatus,
  setCurrentAgent,
) {
  addLog("info", "System", "Starting Multi-Agent Pipeline...");

  try {
    // Step 1: Vocab Parser
    setCurrentAgent("Vocab Parser");
    updateAgentStatus("vocab", "running");

    const vocabRaw = await callGeminiAgent(
      apiKey,
      AGENT_PROMPTS.vocabParser,
      textbookText,
      "VocabParser",
      addLog,
    );

    const vocabList = parseJSON(vocabRaw, "VocabParser", addLog);
    updateAgentStatus("vocab", "complete");
    const vocabString = JSON.stringify(vocabList, null, 2);

    // Step 2: Parallel Story Generation
    setCurrentAgent("Parallel Story Generators");
    addLog(
      "info",
      "System",
      "Dispatching Easy, Medium, and Hard agents simultaneously...",
    );
    updateAgentStatus("easy", "running");
    updateAgentStatus("medium", "running");
    updateAgentStatus("hard", "running");

    const generateStory = async (prompt, agentKey, agentName) => {
      try {
        const raw = await callGeminiAgent(
          apiKey,
          prompt,
          vocabString,
          agentName,
          addLog,
        );
        const parsed = parseJSON(raw, agentName, addLog);
        updateAgentStatus(agentKey, "complete");
        return parsed;
      } catch (err) {
        updateAgentStatus(agentKey, "error");
        addLog("error", agentName, `Agent failed: ${err.message}`);
        throw err;
      }
    };

    const [easyStories, mediumStories, hardStories] = await Promise.all([
      generateStory(AGENT_PROMPTS.easy, "easy", "EasyAgent"),
      generateStory(AGENT_PROMPTS.medium, "medium", "MediumAgent"),
      generateStory(AGENT_PROMPTS.hard, "hard", "HardAgent"),
    ]);

    const finalOutput = {
      vocab: vocabList,
      easy: easyStories,
      medium: mediumStories,
      hard: hardStories,
    };

    addLog("success", "System", "Pipeline execution completed successfully.");
    setCurrentAgent("");

    return finalOutput;
  } catch (err) {
    setCurrentAgent("");
    throw err;
  }
}
