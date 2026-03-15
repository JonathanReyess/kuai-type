import { useState } from "react";

/**
 * Custom hook for managing agent execution status
 */
export function useAgentStatus() {
  const [agentStatuses, setAgentStatuses] = useState({
    vocab: "idle",
    easy: "idle",
    medium: "idle",
    hard: "idle",
  });

  const updateAgentStatus = (agent, status) => {
    setAgentStatuses((prev) => ({ ...prev, [agent]: status }));
  };

  const resetAgentStatuses = () => {
    setAgentStatuses({
      vocab: "idle",
      easy: "idle",
      medium: "idle",
      hard: "idle",
    });
  };

  return { agentStatuses, updateAgentStatus, resetAgentStatuses };
}
