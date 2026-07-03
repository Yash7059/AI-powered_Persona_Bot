// src/components/MessageBubble.tsx
import Image from "next/image";
import { PersonaKey, PERSONAS } from "@/lib/personas";

export default function MessageBubble({
  role,
  content,
  persona,
}: {
  role: "user" | "assistant";
  content: string;
  persona: PersonaKey;
}) {
  const p = PERSONAS[persona];

  return (
    <div className={`flex items-end gap-2 ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" && (
        <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
          <Image src={p.avatarImg} alt={p.name} fill className="object-cover" />
        </div>
      )}
      <div
        className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed ${
          role === "user"
            ? "bg-orange-500 text-white rounded-2xl rounded-br-md"
            : "bg-gray-800 text-gray-100 rounded-2xl rounded-bl-md"
        }`}
      >
        {content}
      </div>
    </div>
  );
}