import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(req: Request){
  const body = await req.json()
  const { name, email, amount } = body
  await prisma.donation.create({ data: { name, email, amount: parseFloat(amount) } })
  return NextResponse.json({ ok: true })
}
