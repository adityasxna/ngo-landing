import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request){
  const body = await req.json()
  const { name, email, phone, city, age, availability, motivation } = body
  await prisma.volunteer.create({ data: { name, email, phone, city, age: age ? parseInt(age) : null, availability, motivation } })
  return NextResponse.json({ ok: true })
}
