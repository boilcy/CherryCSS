"use client"

import { useState } from "react"
import type { Theme } from "@/lib/types"
import { ThemeCard } from "@/components/theme-preview-card"
import { toast } from "sonner"
import { useTranslations } from "next-intl"
interface ThemeGridProps {
  themes: Theme[]
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  const [copiedTheme, setCopiedTheme] = useState<string | null>(null)
  const t = useTranslations();

  const copyToClipboard = async (css: string, themeId: string) => {
    try {
      await navigator.clipboard.writeText(css)
      setCopiedTheme(themeId)
      toast.success(t('toast.copy-success', { themeName: t(`themes.${themeId}.name`) }))
      setTimeout(() => setCopiedTheme(null), 1000)
    } catch (err) {
      console.error("Failed to copy: ", err)
      toast.error(t('toast.copy-error'))
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

