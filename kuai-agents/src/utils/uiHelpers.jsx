import { COLORS } from "../constants/styles.js";
import React from "react";

/**
 * Get status icon component based on status
 */
export function getStatusIcon(status) {
  switch (status) {
    case "running":
      return (
        <svg
          className="animate-spin h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="0.75"></path>
        </svg>
      );
    case "complete":
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      );
    case "error":
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      );
    default:
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.5"></circle>
        </svg>
      );
  }
}

/**
 * Get status color based on status
 */
export function getStatusColor(status) {
  return COLORS.status[status] || COLORS.status.idle;
}

/**
 * Get log level color
 */
export function getLogColor(level) {
  return COLORS.log[level] || COLORS.log.default;
}
