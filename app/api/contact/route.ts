import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(req: Request){
  try {
    const body = await req.json()
    const { email, phone, message } = body
    await prisma.contact.create({ data: { email, phone, message } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 })
  }
}