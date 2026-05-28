# Learn Sphere

A full-stack learning management system (LMS) combining real-time collaboration, AI-powered assessments, and course management into a single platform. Built for teachers who create courses and students who engage with them — with live document editing, AI quiz generation, a community forum, and Stripe-powered enrollments.

🔗 **Live demo**: https://learn-sphere-pink.vercel.app

---

## Features

- **Course management** — teachers create and publish multimedia courses with chapter-based structure, file attachments, and video content
- **Real-time collaboration** — live document editing with presence indicators and in-context comments powered by Liveblocks
- **AI quiz generation** — bilingual (English & Arabic) quiz creation with MCQ, true/false, and short answer types; AI-generated quizzes completed 40% faster than manual ones
- **AI chatbot** — student assistant for course guidance and instant help
- **Community forum** — Q&A forum with nested replies, likes, and search
- **Progress tracking** — per-chapter completion tracking with analytics dashboards for teachers and students
- **Payments & enrollment** — Stripe-powered course purchases with webhook-verified automatic enrollment
- **Role-based access** — separate dashboards and permissions for students, teachers, and admins

---

## Tech stack

**Frontend**
Next.js 14 · React 18 · TypeScript · Tailwind CSS · Radix UI · Framer Motion · Lexical · Liveblocks · Zustand

**Backend**
Next.js API Routes · Prisma · MongoDB Atlas · Zod · UploadThing

**AI & real-time**
Groq AI SDK · Liveblocks · WebSockets

**Auth & payments**
Clerk · Stripe + Webhooks

**Infrastructure**
Docker · Vercel · Sentry · CI/CD pipelines

---

## Performance

- ~150ms average API response time via Prisma connection pooling and database indexing
- 40% payload reduction through optimized queries and selective field fetching
- 30% faster initial page load via lazy loading, dynamic imports, and Next.js Image optimization
- 92% backend and 85% frontend unit test coverage

---

## Getting started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)
- Clerk account
- Groq API key
- Stripe account
- Liveblocks account

### Installation

```bash
git clone https://github.com/bahaa-aldein/Learn-Sphere.git
cd Learn-Sphere
npm install
```

### Environment variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Groq AI
GROQ_API_KEY=

# Liveblocks
LIVEBLOCKS_SECRET_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# UploadThing
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000
