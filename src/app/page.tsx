// src/app/page.tsx
"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import PersonaSelector from "@/components/PersonaSelector";
import ChatWindow from "@/components/ChatWindow";
import { PersonaKey } from "@/lib/personas";

export default function Home() {
  const [persona, setPersona] = useState<PersonaKey>("hitesh");

  return (
    <main className="min-h-screen bg-[#1a1a1a] py-16 px-4">
      <Hero />
      <div className="mb-8">
        <PersonaSelector selected={persona} onSelect={setPersona} />
      </div>
      <ChatWindow key={persona} persona={persona} />
    </main>
  );
}