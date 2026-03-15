export const COLORS = {
  background: "#121212",
  cardBg: "#18181b",
  inputBg: "#1e1e20",
  border: "#27272a",
  borderHover: "#3f3f46",
  primary: "#4d6bfe",
  primaryHover: "#3b56db",
  text: {
    primary: "#f4f4f5",
    secondary: "#e4e4e7",
    muted: "#a1a1aa",
    subtle: "#71717a",
    disabled: "#52525b",
  },
  status: {
    running: "#4d6bfe",
    complete: "#10b981",
    error: "#ef4444",
    idle: "#52525b",
  },
  log: {
    info: "#60a5fa",
    success: "#34d399",
    warn: "#fbbf24",
    error: "#f87171",
    default: "#d4d4d8",
  },
  special: {
    purple: "#c084fc",
    terminal: "#09090b",
  },
};

export const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');        
  * { box-sizing: border-box; }
  
  /* Add these lines to ensure black background everywhere */
  html, body {
    margin: 0;
    padding: 0;
    background-color: #121212;
    min-height: 100%;
  }
  
  @keyframes spin { to { transform: rotate(360deg); } }
  .animate-spin { animation: spin 1s linear infinite; }
  .ds-input {
    background-color: ${COLORS.inputBg};
    border: 1px solid ${COLORS.border};
    color: ${COLORS.text.primary};
    border-radius: 8px;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .ds-input:focus { 
    outline: none; 
    border-color: ${COLORS.primary}; 
    box-shadow: 0 0 0 1px ${COLORS.primary}; 
  }
  .ds-button {
    background-color: ${COLORS.primary};
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.15s ease;
    cursor: pointer;
  }
  .ds-button:hover:not(:disabled) { background-color: ${COLORS.primaryHover}; }
  .ds-button:disabled { 
    background-color: ${COLORS.inputBg}; 
    color: ${COLORS.text.disabled}; 
    cursor: not-allowed; 
  }
  .ds-button-secondary {
    background-color: ${COLORS.inputBg};
    color: ${COLORS.text.secondary};
    border: 1px solid ${COLORS.border};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .ds-button-secondary:hover { background-color: ${COLORS.borderHover}; }
  .ds-card { 
    background-color: ${COLORS.cardBg}; 
    border: 1px solid ${COLORS.inputBg}; 
    border-radius: 12px; 
  }
  .ds-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
  .ds-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .ds-scrollbar::-webkit-scrollbar-thumb { 
    background: ${COLORS.borderHover}; 
    border-radius: 4px; 
  }
  .ds-scrollbar::-webkit-scrollbar-thumb:hover { background: ${COLORS.text.disabled}; }
`;
