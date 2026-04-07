#!/usr/bin/env node
/**
 * Headless CLI for the kuai-agents multi-agent pipeline.
 *
 * Usage:
 *   node cli/run-pipeline.mjs <vocab.txt> [options]
 *   node cli/run-pipeline.mjs --text "raw vocab text" [options]
 *   cat vocab.txt | node cli/run-pipeline.mjs [options]
 *
 * Options:
 *   --text <string>       Raw vocabulary text (alternative to file/stdin)
 *   --output <file.json>  Write output to file instead of stdout
 *   --pretty              Pretty-print JSON output
 *   --api-key <key>       Gemini API key (overrides GEMINI_API_KEY env var)
 *   --quiet               Suppress progress logs (stderr)
 */

import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import { runAgentPipeline } from "../src/services/pipelineService.js";

// ── Argument parsing ──────────────────────────────────────────────────────────

const args = process.argv.slice(2);

function getFlag(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

function hasFlag(flag) {
  return args.includes(flag);
}

const apiKey = getFlag("--api-key") ?? process.env.GEMINI_API_KEY;
const outputFile = getFlag("--output");
const pretty = hasFlag("--pretty");
const quiet = hasFlag("--quiet");
const inlineText = getFlag("--text");

// Positional arg: first non-flag argument
const positionalArg = args.find((a) => !a.startsWith("--") && a !== getFlag("--api-key") && a !== getFlag("--output") && a !== getFlag("--text"));

// ── Usage ─────────────────────────────────────────────────────────────────────

function printUsage() {
  process.stderr.write(`
kuai-agents pipeline CLI

Usage:
  node cli/run-pipeline.mjs <vocab.txt> [options]
  node cli/run-pipeline.mjs --text "vocabulary text" [options]
  cat vocab.txt | node cli/run-pipeline.mjs [options]

Options:
  --api-key <key>       Gemini API key (or set GEMINI_API_KEY env var)
  --text <string>       Inline vocabulary text
  --output <file.json>  Write output to file instead of stdout
  --pretty              Pretty-print JSON output
  --quiet               Suppress progress logs on stderr

Output shape:
  {
    "vocab":  [ { "simplified": "...", "pinyin": "...", "definition": "..." }, ... ],
    "stories": {
      "easy":   [ [ { "char": "...", "pinyin": "...", "definition": "..." }, ... ], ... ],
      "medium": [ ... ],
      "hard":   [ ... ]
    }
  }

Example:
  GEMINI_API_KEY=your_key node cli/run-pipeline.mjs vocab.txt --pretty --output out.json
  GEMINI_API_KEY=your_key node cli/run-pipeline.mjs --text "节日 jiérì holiday"
`.trimStart());
}

// ── Logger (writes to stderr so stdout stays clean JSON) ─────────────────────

function addLog(level, agent, message) {
  if (quiet) return;
  const prefix = {
    info:    "  •",
    success: "  ✓",
    warn:    "  ⚠",
    error:   "  ✗",
  }[level] ?? "  ·";
  process.stderr.write(`${prefix} [${agent}] ${message}\n`);
}

function updateAgentStatus(agentKey, status) {
  if (quiet) return;
  const icons = { running: "⟳", complete: "✓", error: "✗" };
  process.stderr.write(`  ${icons[status] ?? "·"} ${agentKey}: ${status}\n`);
}

function setCurrentAgent(name) {
  if (quiet || !name) return;
  process.stderr.write(`\n▶ Running: ${name}\n`);
}

// ── Input resolution ──────────────────────────────────────────────────────────

async function readStdin() {
  return new Promise((resolve, reject) => {
    const rl = createInterface({ input: process.stdin });
    const lines = [];
    rl.on("line", (line) => lines.push(line));
    rl.on("close", () => resolve(lines.join("\n")));
    rl.on("error", reject);
  });
}

async function resolveInput() {
  if (inlineText) return inlineText;

  if (positionalArg) {
    try {
      return readFileSync(positionalArg, "utf8");
    } catch (err) {
      process.stderr.write(`Error: could not read file "${positionalArg}": ${err.message}\n`);
      process.exit(1);
    }
  }

  // Fall back to stdin if it's being piped
  if (!process.stdin.isTTY) {
    return readStdin();
  }

  return null;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!apiKey) {
    process.stderr.write("Error: Gemini API key is required.\n");
    process.stderr.write("Set GEMINI_API_KEY env var or pass --api-key <key>\n\n");
    printUsage();
    process.exit(1);
  }

  const vocabText = await resolveInput();

  if (!vocabText || !vocabText.trim()) {
    process.stderr.write("Error: no vocabulary input provided.\n\n");
    printUsage();
    process.exit(1);
  }

  if (!quiet) {
    process.stderr.write("kuai-agents pipeline starting...\n");
  }

  let result;
  try {
    result = await runAgentPipeline(
      apiKey,
      vocabText.trim(),
      addLog,
      updateAgentStatus,
      setCurrentAgent,
    );
  } catch (err) {
    process.stderr.write(`\nPipeline failed: ${err.message}\n`);
    process.exit(1);
  }

  // Reshape to the documented output format
  const output = {
    vocab: result.vocab,
    stories: {
      easy:   result.easy,
      medium: result.medium,
      hard:   result.hard,
    },
  };

  const json = pretty
    ? JSON.stringify(output, null, 2)
    : JSON.stringify(output);

  if (outputFile) {
    try {
      writeFileSync(outputFile, json, "utf8");
      if (!quiet) {
        process.stderr.write(`\nOutput written to ${outputFile}\n`);
      }
    } catch (err) {
      process.stderr.write(`Error: could not write to "${outputFile}": ${err.message}\n`);
      process.exit(1);
    }
  } else {
    process.stdout.write(json + "\n");
  }
}

main();
