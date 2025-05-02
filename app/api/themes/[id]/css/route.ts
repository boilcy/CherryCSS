import { themes } from '@/lib/themes'
import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const theme = themes.find((t) => t.id === id)

    if (!theme) {
      return NextResponse.json({ error: 'Theme not found' }, { status: 404 })
    }

    // Return only the CSS content as text/css with UTF-8 encoding
    return new NextResponse(theme.css, {
      headers: {
        'Content-Type': 'text/css; charset=utf-8',
      },
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch CSS' }, { status: 500 })
  }
}
