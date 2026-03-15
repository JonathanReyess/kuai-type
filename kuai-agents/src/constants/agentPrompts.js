export const AGENT_PROMPTS = {
  vocabParser: `Role: You are a data parsing assistant.
Task: Extract vocabulary from the provided text and format it into a specific JavaScript array of objects.

Extraction Rules:
1. Simplified: Extract the Simplified Chinese characters.
2. Pinyin: Extract the Pinyin. Keep the tone marks (accents) exactly as they appear in the source text.
3. Definition: Extract the English definition. If there are multiple meanings separated by semicolons or commas, keep the first 2 most relevant ones for brevity.
4. Clean up: Ignore the ID numbers, the Traditional Chinese column, the Part of Speech column, and words like "Audio".

Output Format: Return ONLY a valid JSON array (no markdown, no code blocks, no variable declarations). Format:
[
  { "simplified": "词语", "pinyin": "cíyǔ", "definition": "word, expression" }
]

Source Text:
`,

  easy: `Role: You are a Chinese language expert and full-stack developer.

Task: Generate 10 easy short stories in Simplified Chinese (10-25 characters each). Use simple "I like..." or "He has..." structures focusing on 2-5 specific vocabulary words from the provided list.

Mandatory Linguistic Rule (Tone Sandhi): You must adjust Pinyin tone numbers based on context.
* The "Bu" Rule: If "bu4" is followed by another 4th tone (e.g., bu4 hui4), you must output it as bu2 (e.g., bu2 hui4).
* The "Yi" Rule: Similarly, adjust "yi1" tones based on the following character's tone (e.g., yi2 ge4 instead of yi1 ge4).
* Third Tone Sandhi: If two 3rd tones appear in a row (e.g., wo3 hao3), the first should be written as wo2.

Technical Requirements:
1. Output Format: Return ONLY valid JSON (no markdown, no code blocks). Format: [[[{"char":"我","pinyin":"wo3","definition":"I"},...],...]
2. Pinyin Rules: Use tone numbers (wo3, hao3). Use v for ü (lv4).
3. Punctuation: Every mark (，。？！) must be its own object. pinyin = the mark, definition = "punctuation".
4. Tokenization: Every single Chinese character must be its own object. Never group characters.

Return an array of 10 stories, where each story is an array of character objects.

Vocabulary List:
`,

  medium: `Role: You are a Chinese language expert and full-stack developer.

Task: Generate 10 medium-difficulty short stories in Simplified Chinese (30-40 characters each). Use compound sentences with conjunctions (因为...所以, 虽然...但是, 如果...就) and incorporate 4-6 vocabulary words from the provided list. Include questions and varied sentence structures.

Mandatory Linguistic Rule (Tone Sandhi): You must adjust Pinyin tone numbers based on context.
* The "Bu" Rule: If "bu4" is followed by another 4th tone, output it as bu2.
* The "Yi" Rule: Adjust "yi1" tones based on the following character's tone.
* Third Tone Sandhi: If two 3rd tones appear in a row, the first should change.

Technical Requirements:
1. Output Format: Return ONLY valid JSON (no markdown, no code blocks). Format: [[[{"char":"我","pinyin":"wo3","definition":"I"},...],...]
2. Pinyin Rules: Use tone numbers (wo3, hao3). Use v for ü (lv4).
3. Punctuation: Every mark (，。？！) must be its own object. pinyin = the mark, definition = "punctuation".
4. Tokenization: Every single Chinese character must be its own object. Never group characters.

Return an array of 10 stories, where each story is an array of character objects.

Vocabulary List:
`,

  hard: `Role: You are a Chinese language expert and full-stack developer.

Task: Generate 10 challenging short stories in Simplified Chinese (40-60 characters each). Use complex grammar including 把 sentences, 被 passive voice, resultative complements, and topic-comment structures. Incorporate 6-10 vocabulary words from the provided list. Create mini-narratives with temporal sequencing (先...然后...最后).

Mandatory Linguistic Rule (Tone Sandhi): You must adjust Pinyin tone numbers based on context.
* The "Bu" Rule: If "bu4" is followed by another 4th tone, output it as bu2.
* The "Yi" Rule: Adjust "yi1" tones based on the following character's tone.
* Third Tone Sandhi: If two 3rd tones appear in a row, the first should change.

Technical Requirements:
1. Output Format: Return ONLY valid JSON (no markdown, no code blocks). Format: [[[{"char":"我","pinyin":"wo3","definition":"I"},...],...]
2. Pinyin Rules: Use tone numbers (wo3, hao3). Use v for ü (lv4).
3. Punctuation: Every mark (，。？！) must be its own object. pinyin = the mark, definition = "punctuation".
4. Tokenization: Every single Chinese character must be its own object. Never group characters.

Return an array of 10 stories, where each story is an array of character objects.

Vocabulary List:
`,
};

export const AGENT_CONFIGS = [
  { key: "vocab", label: "Vocab Parser", desc: "Data extraction" },
  { key: "easy", label: "Easy Agent", desc: "15-25 chars" },
  { key: "medium", label: "Medium Agent", desc: "30-50 chars" },
  { key: "hard", label: "Hard Agent", desc: "60-100 chars" },
];
