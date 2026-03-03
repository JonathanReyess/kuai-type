import {
  RoomState,
  PlayerState,
  GameToken,
  Difficulty,
  ServerEvent,
} from "./types";

const rooms = new Map<string, RoomState>();
const ROOM_TTL_MS = 10 * 60 * 1000;

export function generateCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++)
    code += chars[Math.floor(Math.random() * chars.length)];
  return rooms.has(code) ? generateCode() : code;
}

export function createRoom(
  code: string,
  lessonId: string,
  difficulty: Difficulty,
  tokens: GameToken[],
): RoomState {
  const room: RoomState = {
    code,
    lessonId,
    difficulty,
    tokens,
    players: new Map(),
    sockets: new Map(),
    createdAt: Date.now(),
  };
  rooms.set(code, room);
  setTimeout(() => {
    if (rooms.has(code)) {
      broadcast(code, { type: "ERROR", message: "Room expired." });
      rooms.delete(code);
    }
  }, ROOM_TTL_MS);
  return room;
}

export function getRoom(code: string): RoomState | undefined {
  return rooms.get(code);
}

export function getRoomForPlayer(playerId: string): RoomState | undefined {
  for (const room of rooms.values()) {
    if (room.players.has(playerId)) return room;
  }
}

export function upsertPlayer(
  code: string,
  playerId: string,
  playerName: string,
  socket: any,
): RoomState | null {
  const room = rooms.get(code);
  if (!room) return null;

  // Preserve existing state if this is a reconnect/handoff
  let existingState: Partial<PlayerState> = {};

  for (const [id, p] of room.players.entries()) {
    if (p.name === playerName && id !== playerId) {
      existingState = p;
      room.players.delete(id);
      room.sockets.delete(id);
    }
  }

  room.players.set(playerId, {
    id: playerId,
    name: playerName,
    // Safely fallback to 0 if this is a genuinely new player
    currentIndex: existingState.currentIndex ?? 0,
    wpm: existingState.wpm ?? 0,
    score: existingState.score ?? 0,
    finished: existingState.finished ?? false,
    missedTokens: existingState.missedTokens,
    wantsRematch: existingState.wantsRematch,
    finishedAt: existingState.finishedAt,
  });

  room.sockets.set(playerId, socket);
  return room;
}

export function removePlayer(playerId: string): void {
  const room = getRoomForPlayer(playerId);
  if (!room) return;
  room.players.delete(playerId);
  room.sockets.delete(playerId);
  if (room.players.size === 0) rooms.delete(room.code);
}

export function updateProgress(
  code: string,
  playerId: string,
  currentIndex: number,
  wpm: number,
  score?: number,
): PlayerState | null {
  const room = rooms.get(code);
  if (!room) return null;
  const player = room.players.get(playerId);
  if (!player) return null;
  player.currentIndex = currentIndex;
  player.wpm = wpm;
  if (score !== undefined) player.score = score;
  return player;
}

export function setFinished(
  code: string,
  playerId: string,
  wpm: number,
  finalScore?: number,
): { room: RoomState; player: PlayerState; allDone: boolean } | null {
  const room = rooms.get(code);
  if (!room) return null;
  const player = room.players.get(playerId);
  if (!player) return null;
  player.finished = true;
  player.wpm = wpm;
  player.finishedAt = Date.now();
  if (finalScore !== undefined) player.score = finalScore;
  const allDone = [...room.players.values()].every((p) => p.finished);
  return { room, player, allDone };
}

// Reset room for a rematch — new tokens, all player progress cleared
export function resetRoom(
  code: string,
  newTokens: GameToken[],
): RoomState | null {
  const room = rooms.get(code);
  if (!room) return null;
  room.tokens = newTokens;
  room.startedAt = undefined;
  for (const player of room.players.values()) {
    player.currentIndex = 0;
    player.wpm = 0;
    player.score = 0;
    player.finished = false;
    player.finishedAt = undefined;
    player.wantsRematch = false;
    player.missedTokens = []; // Purge missed tokens from the previous game
  }
  return room;
}

export function broadcast(
  code: string,
  event: ServerEvent,
  excludeId?: string,
): void {
  const room = rooms.get(code);
  if (!room) return;
  const payload = JSON.stringify(event);
  for (const [id, ws] of room.sockets.entries()) {
    if (id !== excludeId && ws?.readyState === 1) ws.send(payload);
  }
}

export function sendToPlayer(
  code: string,
  playerId: string,
  event: ServerEvent,
): void {
  const room = rooms.get(code);
  if (!room) return;
  const ws = room.sockets.get(playerId);
  if (ws?.readyState === 1) ws.send(JSON.stringify(event));
}
