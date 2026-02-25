// Shared types (mirrors your frontend types.ts)
export interface GameToken {
  char: string;
  pinyin: string;
  definition?: string;
}

export type Difficulty = "easy" | "medium" | "hard";

export interface PlayerState {
  id: string;
  name: string;
  currentIndex: number;
  wpm: number;
  score: number;
  finished: boolean;
  finishedAt?: number;
}

export interface RoomState {
  code: string;
  lessonId: string;
  difficulty: Difficulty;
  tokens: GameToken[];
  players: Map<string, PlayerState>; // playerId -> state
  sockets: Map<string, any>; // playerId -> WebSocket
  createdAt: number;
  startedAt?: number;
  hostId?: string; // track who is allowed to start the game
}

// Client -> Server events
export type ClientEvent =
  | { type: "CREATE_ROOM"; code: string; playerName: string }
  | { type: "JOIN_ROOM"; code: string; playerName: string }
  | { type: "RESYNC"; code: string; playerName: string }
  | { type: "START_GAME"; code: string } // host-only: kick off countdown
  | { type: "PROGRESS"; currentIndex: number; wpm: number }
  | { type: "FINISHED"; wpm: number; accuracy: number; score: number };

// Server -> Client events
export type ServerEvent =
  | { type: "COUNTDOWN"; count: number }
  | {
      type: "ROOM_CREATED";
      code: string;
      lessonId: string;
      difficulty: Difficulty;
      tokens: GameToken[];
    }
  | { type: "WAITING" }
  | { type: "OPPONENT_JOINED"; opponent: PlayerState }
  | {
      type: "GAME_START";
      tokens: GameToken[];
      lessonId: string;
      difficulty: Difficulty;
      startsAt: number;
    }
  | { type: "OPPONENT_PROGRESS"; opponent: PlayerState }
  | { type: "OPPONENT_FINISHED"; opponent: PlayerState }
  | { type: "GAME_OVER"; winner: string; players: PlayerState[] }
  | { type: "ERROR"; message: string };
