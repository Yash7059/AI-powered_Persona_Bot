// src/types/chat.ts
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}