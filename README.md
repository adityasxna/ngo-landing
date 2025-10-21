# Stray Paws India — NGO Landing

Simple Next.js app (App Router) with TailwindCSS and Prisma + PostgreSQL to collect contact, volunteer, and donation entries.

Setup (Windows PowerShell):

1. copy .env.example to .env and set DATABASE_URL
2. npm install
3. npx prisma migrate dev --name init
4. npm run dev

Note: This project uses a mock donation form (no payment integration).
