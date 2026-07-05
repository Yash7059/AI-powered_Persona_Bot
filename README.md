# AI Mentor — Persona-Based Coding Chatbot

Chat with AI mentors inspired by the teaching styles of Hitesh Choudhary and Piyush Garg. Ask coding, career, or project questions and get answers in a mentor's signature tone.

## Features

- 🎓 Two selectable AI mentor personas with distinct teaching styles
- 💬 Real-time chat interface with persona-specific greetings and tone
- 🗂️ Conversation history persisted to a database
- 🌙 Dark-themed, responsive UI
- ⚡ Built on Next.js App Router with serverless API routes

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL (Neon) |
| ORM | Prisma |
| AI | Claude API (Anthropic) |
| Deployment | Vercel |

## Project Structure

```
persona-chat/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ChatHeader.tsx
│   │   ├── ChatWindow.tsx
│   │   ├── Hero.tsx
│   │   ├── MessageBubble.tsx
│   │   └── PersonaSelector.tsx
│   ├── lib/
│   │   ├── personas.ts
│   │   └── prisma.ts
│   └── types/
│       └── chat.ts
└── public/
    └── avatars/
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Yash7059/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root:

```env
DATABASE_URL="your_neon_postgres_connection_string"
ANTHROPIC_API_KEY="your_claude_api_key"
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Deployment

This project is deployed on [Vercel](https://vercel.com):

1. Push code to GitHub
2. Import the repo into Vercel
3. Add `DATABASE_URL` and `ANTHROPIC_API_KEY` under Project Settings → Environment Variables
4. Deploy

Vercel auto-redeploys on every push to `main`.

## Roadmap

- [ ] Streaming responses (word-by-word like ChatGPT)
- [ ] Auth with Better Auth (Google/GitHub OAuth)
- [ ] Conversation history sidebar
- [ ] Additional mentor personas

## Author

Built by **Yash Vandra**
- GitHub: [@Yash7059](https://github.com/Yash7059)
- Email: yashvandra03@gmail.com

## License

This project is for educational and portfolio purposes only.