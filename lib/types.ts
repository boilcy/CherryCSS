export interface Theme {
  id: string
  name: string
  description: string
  lightPreviewUrl: string
  darkPreviewUrl: string
  css: string
  colors?: string[] // Array of color names that represent this theme
}

