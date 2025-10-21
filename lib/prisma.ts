import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// Only create Prisma client if DATABASE_URL exists
const client = process.env.DATABASE_URL 
  ? (globalThis.prisma ?? new PrismaClient())
  : null

if (process.env.NODE_ENV !== 'production' && client) {
  globalThis.prisma = client
}

export const prisma = client as PrismaClient