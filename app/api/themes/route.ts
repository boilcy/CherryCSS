import { themes } from '@/lib/themes'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Return a list of all themes with basic info, excluding the full CSS content
    const themesList = themes.map((theme) => ({
      id: theme.id,
      name: theme.name,
      description: theme.description,
      style: theme.style,
      colors: theme.colors,
      lightPreviewUrl: theme.lightPreviewUrl,
      darkPreviewUrl: theme.darkPreviewUrl,
    }))

    return NextResponse.json({ themes: themesList })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch themes' }, { status: 500 })
  }
}
