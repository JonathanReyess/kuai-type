export interface VocabItem {
    simplified: string;
    pinyin: string;
    definition: string;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    vocabulary: VocabItem[];
}

export interface GameToken {
    char: string;
    pinyin: string;
    definition?: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export type AppState = 'landing' | 'selection' | 'loading' | 'game' | 'result';

export interface GameStats {
    wpm: number;
    accuracy: number;
    score: number;
    totalChars: number;
    mistakes: number;
    missedTokens: GameToken[];
}