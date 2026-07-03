// src/app/api/chat/route.ts
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { PERSONAS, PersonaKey } from "@/lib/personas";

export async function POST(req: NextRequest) {
  try {
    const { messages, persona, conversationId } = await req.json();

    if (!PERSONAS[persona as PersonaKey]) {
      return Response.json({ error: "Invalid persona" }, { status: 400 });
    }

    const systemPrompt = PERSONAS[persona as PersonaKey].systemPrompt;

    // OpenAI expects system message inside the messages array
    const openaiMessages = [
      { role: "system", content: systemPrompt },
      ...messages,
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // or "gpt-4o" for better quality
        max_tokens: 1024,
        messages: openaiMessages,
      }),
    });

    const data = await response.json();
    const assistantReply =
      data.choices?.[0]?.message?.content ?? "Kuch gadbad ho gayi, try again.";

    // Persist conversation
    let convoId = conversationId;
    if (!convoId) {
      const convo = await prisma.conversation.create({
        data: { persona, title: messages[0]?.content?.slice(0, 50) },
      });
      convoId = convo.id;
    }

    const lastUserMsg = messages[messages.length - 1];
    await prisma.message.createMany({
      data: [
        { conversationId: convoId, role: "user", content: lastUserMsg.content },
        { conversationId: convoId, role: "assistant", content: assistantReply },
      ],
    });

    return Response.json({ reply: assistantReply, conversationId: convoId });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}