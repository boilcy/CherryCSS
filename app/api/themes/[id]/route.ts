import { themes } from '@/lib/themes'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const theme = themes.find((t) => t.id === id)

    if (!theme) {
      return NextResponse.json({ error: 'Theme not found' }, { status: 404 })
    }

    return NextResponse.json({ theme })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch theme' }, { status: 500 })
  }
}
