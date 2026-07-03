// src/components/ChatWindow.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/types/chat";
import { PERSONAS, PersonaKey } from "@/lib/personas";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ persona }: { persona: PersonaKey }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages: ChatMessage[] = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages, persona, conversationId }),
    });
    const data = await res.json();

    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    setConversationId(data.conversationId);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800">
      <ChatHeader persona={persona} />

      <div className="h-[450px] overflow-y-auto p-5 space-y-4 bg-black">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} persona={persona} />
        ))}
        {loading && (
          <div className="flex items-center gap-1 text-xs text-gray-500 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex gap-2 p-3 bg-gray-900 border-t border-gray-800">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Bindaas poocho..."
          className="flex-1 bg-gray-800 text-gray-100 placeholder-gray-500 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500/40"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium disabled:opacity-50 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

function getGreeting(persona: PersonaKey) {
  if (persona === "piyush") {
    return "Heyy! Welcome welcome, kaise ho aap log? Bindaas poocho jo bhi poochna hai — code, career, ya bas timepass, sab chalega yaha!";
  }
  return "Hanji! Chai peeliye aur poochiye jo bhi poochna hai — coding se leke career tak, sab kuch cover karenge!";
}