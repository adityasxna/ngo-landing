import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request){
  const body = await req.json()
  const { email, phone, message } = body
  await prisma.contact.create({ data: { email, phone, message } })
  return NextResponse.json({ ok: true })
}
