// src/components/PersonaSelector.tsx
"use client";
import Image from "next/image";
import { PERSONAS, PersonaKey } from "@/lib/personas";

export default function PersonaSelector({
  selected,
  onSelect,
}: {
  selected: PersonaKey;
  onSelect: (p: PersonaKey) => void;
}) {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {Object.values(PERSONAS).map((p) => {
        const isActive = selected === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id as PersonaKey)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all ${
              isActive
                ? "border-orange-500 bg-orange-500/90 shadow-lg shadow-orange-500/20"
                : "border-gray-700 bg-gray-800/60 hover:bg-gray-800"
            }`}
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-black/20">
              <Image src={p.avatarImg} alt={p.name} fill className="object-cover" />
            </div>
            <span
              className={`text-sm font-medium ${
                isActive ? "text-white" : "text-gray-300"
              }`}
            >
              {p.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}