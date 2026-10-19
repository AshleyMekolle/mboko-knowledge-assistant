export type Role = "user" | "assistant";

/** A reference to a document that supported an answer. Only rendered when the backend supplies one. */
export interface Source {
  title: string;
  url?: string;
}

export interface ChatMessage {
  id: string;
  role: Role;
  content: string;
  sources?: Source[];
}

export type ChatStatus = "idle" | "loading" | "error";
export type ConnectionState = "checking" | "online" | "offline";

/** Request body accepted by POST /api/chat. */
export interface ChatRequest {
  sessionId: string;
  message: string;
}

/** Successful response body of POST /api/chat. */
export interface ChatResponse {
  answer: string;
  sources?: Source[];
}

export interface ApiError {
  error: string;
}
