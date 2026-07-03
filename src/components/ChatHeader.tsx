// src/components/ChatHeader.tsx
import { PERSONAS, PersonaKey } from "@/lib/personas";
import Image from "next/image";

export default function ChatHeader({ persona }: { persona: PersonaKey }) {
  const p = PERSONAS[persona];

  return (
     <div className="flex items-center justify-between px-5 py-4 bg-gray-100 rounded-t-xl">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <Image src={p.avatarImg} alt={p.name} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-semibold text-sm text-gray-900">
            Chat with {p.name}
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Online
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-gray-600 border border-gray-300 rounded-full px-3 py-1.5 bg-white">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        Session Active
      </div>
    </div>
  );
}