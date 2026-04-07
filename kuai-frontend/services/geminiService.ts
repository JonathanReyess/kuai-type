import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GameToken, Lesson, Difficulty } from "../types";

export const generateGameContent = async (
  lesson: Lesson,
  difficulty: Difficulty,
  reviewTokens: GameToken[] = [],
): Promise<GameToken[]> => {
  // ---------------------------------------------------------
  // SCENARIO 1: STANDARD PLAY (Use Pre-generated Data)
  // ---------------------------------------------------------
  if (reviewTokens.length === 0) {
    // Dynamically import storyData so it's excluded from the initial bundle
    // (~400 KB deferred until the user actually starts a game)
    const { PRE_GENERATED_STORIES } = await import("../storyData");

    // Convert "Easy" -> "easy" to match your storyData.ts keys
    const diffKey = difficulty.toLowerCase() as Lowercase<Difficulty>;
    const lessonStories = PRE_GENERATED_STORIES[lesson.id]?.[diffKey];

    if (lessonStories && lessonStories.length > 0) {
      const randomIndex = Math.floor(Math.random() * lessonStories.length);
      return lessonStories[randomIndex];
    } else {
      console.warn(
        `No pre-generated stories found for ${lesson.id} - ${difficulty}. Falling back to AI.`,
      );
      // If empty, we fall through to the AI logic below as a failsafe
    }
  }

  // ---------------------------------------------------------
  // SCENARIO 2: PREMIUM REVIEW (Use AI Generation)
  // ---------------------------------------------------------

  // Check API Key only if we actually need AI
  if (!process.env.API_KEY) {
    console.error("API Key missing");
    return mockFallback(lesson.id);
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const vocabList = lesson.vocabulary
    .map((v) => `${v.simplified} (${v.pinyin})`)
    .join(", ");

  let reviewPrompt = "";

  // This part is specific to the "Review Mode"
  if (reviewTokens.length > 0) {
    const uniqueChars = Array.from(
      new Set(reviewTokens.map((t) => t.char)),
    ).join(" ");
    reviewPrompt = `\nIMPORTANT: The user struggled with these characters previously: [${uniqueChars}]. You MUST include as many of these specific characters as possible in the paragraph context naturally.`;
  }

  const prompt = `
### ROLE
You are an expert Simplified Chinese educator. Your task is to write a paragraph for a student based on the following parameters:
- **Topic:** ${lesson.title}
- **Difficulty:** ${difficulty}
- **Target Vocabulary:** Use at least 5 words from this list: [${vocabList}]
- **Additional Context:** ${reviewPrompt}

### DIFFICULTY SPECIFICATIONS
Adhere strictly to these length and complexity constraints:
- **Easy:** 10-15 characters. Use basic SVO (Subject-Verb-Object) structures.
- **Medium:** 20-30 characters. Include basic conjunctions or descriptive particles (de/de/de).
- **Hard:** 30-40 characters. Use complex structures (e.g., "not only... but also"), 成语 (idioms), or formal vocabulary.

### TONE SANDHI RULES
The Pinyin provided MUST reflect actual spoken pronunciation (Tone Sandhi) rather than static dictionary tones:
1. **3-3 Sandhi:** When two 3rd tones are consecutive, the first character must be marked as 2nd tone (e.g., "你好" should be "ni2 hao3").
2. **"一" (yī) and "不" (bù):** Adjust tones based on the following syllable (e.g., "一样" as "yi4 yang4", "不好" as "bu4 hao3", "不是" as "bu2 shi4").
3. **Neutral Tones:** Use '0' or '5' for characters that lose their tone in natural speech (e.g., "妈妈" as "ma1 ma0").

### OUTPUT REQUIREMENTS
1. **Content:** Create one coherent, engaging paragraph. 
2. **Format:** Output ONLY a valid JSON array of objects. No introductory or concluding text.
3. **Object Mapping:** Every single character and punctuation mark must be its own object.
   - "char": The single Hanzi character or punctuation mark.
   - "pinyin": The Pinyin with **sandhi-adjusted** tone numbers. Punctuation marks should have the mark itself as the pinyin.
   - "definition": A brief English definition of that character's specific meaning in this context.

### EXAMPLE FORMAT
Topic: "Greetings"
[
  {"char": "你", "pinyin": "ni2", "definition": "you (tone changed to 2nd due to sandhi)"},
  {"char": "好", "pinyin": "hao3", "definition": "good"},
  {"char": "吗", "pinyin": "ma0", "definition": "question particle"},
  {"char": "？", "pinyin": "？", "definition": "punctuation"}
]

### CRITICAL RULES
- Do NOT exceed the character count for the selected difficulty.
- Do NOT include spaces between characters in the JSON.
- Ensure the JSON is syntactically perfect.
`;

  const schema: Schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        char: { type: Type.STRING },
        pinyin: { type: Type.STRING },
        definition: { type: Type.STRING },
      },
      required: ["char", "pinyin"],
    },
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No text returned from Gemini");

    const data = JSON.parse(text) as GameToken[];

    // Critical: Sanitize data to prevent "broken" game due to whitespace
    return data
      .map((token) => ({
        char: token.char ? token.char.trim() : "",
        pinyin: token.pinyin ? token.pinyin.trim().replace(/\s+/g, "") : "",
        definition: token.definition ? token.definition.trim() : "",
      }))
      .filter((t) => t.char && t.pinyin); // Filter out potentially malformed empty tokens
  } catch (error) {
    console.error("Gemini generation failed:", error);
    return mockFallback(lesson.id);
  }
};

const mockFallback = (lessonId: string): GameToken[] => {
  const common = [
    { char: "这", pinyin: "zhe4", definition: "this" },
    { char: "是", pinyin: "shi4", definition: "is" },
    { char: "一", pinyin: "yi1", definition: "one" },
    { char: "个", pinyin: "ge4", definition: "measure word" },
    { char: "测", pinyin: "ce4", definition: "test" },
    { char: "试", pinyin: "shi4", definition: "test" },
    { char: "。", pinyin: "。", definition: "punctuation" },
  ];
  return common;
};
