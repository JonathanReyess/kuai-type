import { GoogleGenAI, Type, Schema } from "@google/genai";
import { GameToken, Lesson, Difficulty } from "../types";
import { PRE_GENERATED_STORIES } from "../storyData"; // Import your new data

export const generateGameContent = async (
  lesson: Lesson,
  difficulty: Difficulty,
  reviewTokens: GameToken[] = [],
): Promise<GameToken[]> => {
  // ---------------------------------------------------------
  // SCENARIO 1: STANDARD PLAY (Use Pre-generated Data)
  // ---------------------------------------------------------
  if (reviewTokens.length === 0) {
    console.log("Fetching pre-generated story...");

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
    Create a coherent, engaging paragraph in Simplified Chinese based on the topic: "${lesson.title}".
    
    Difficulty Level: ${difficulty}.
    - Easy: Simple sentence structures, high frequency of provided vocabulary. 30-50 characters.
    - Medium: Moderate sentence structures. 50-80 characters.
    - Hard: Complex structures, sophisticated usage. 80-120 characters.

    You MUST use at least 5 words from this vocabulary list: [${vocabList}].
    ${reviewPrompt}

    CRITICAL: The output must be a strict JSON array of objects. Each object represents ONE Chinese character (Hanzi), its corresponding Pinyin with tone numbers (e.g., 'wo3', 'ni3', 'de0'), and a short English definition of that character in this specific context.
    
    For punctuation (，。？！”“), set the pinyin field to the punctuation mark itself and definition to 'punctuation'.
    
    Example format:
    [
      {"char": "我", "pinyin": "wo3", "definition": "I"},
      {"char": "爱", "pinyin": "ai4", "definition": "love"},
      {"char": "，", "pinyin": "，", "definition": "punctuation"}
    ]
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
      model: "gemini-3-flash-preview",
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
