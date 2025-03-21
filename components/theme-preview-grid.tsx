"use client"

import { useState } from "react"
import type { Theme } from "@/lib/types"
import { ThemeCard } from "@/components/theme-preview-card"
import { toast } from "sonner"
interface ThemeGridProps {
  themes: Theme[]
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  const [copiedTheme, setCopiedTheme] = useState<string | null>(null)

  const copyToClipboard = async (css: string, themeId: string, themeName: string) => {
    try {
      await navigator.clipboard.writeText(css)
      setCopiedTheme(themeId)
      toast.success(`${themeName} 主题已复制到剪贴板!`)
      setTimeout(() => setCopiedTheme(null), 1000)
    } catch (err) {
      console.error("Failed to copy: ", err)
      toast.error("复制失败，请手动复制!")
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {themes.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          copiedTheme={copiedTheme}
          onCopy={copyToClipboard}
        />
      ))}
    </div>
  )
}

