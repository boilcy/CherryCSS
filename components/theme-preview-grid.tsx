'use client'

import { ThemeColorFilter } from '@/components/theme-color-filter'
import { ThemeCard } from '@/components/theme-preview-card'
import { ThemeStyleFilter } from '@/components/theme-style-filter'
import type { Theme } from '@/lib/types'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { toast } from 'sonner'

interface ThemeGridProps {
  themes: Theme[]
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  const [copiedTheme, setCopiedTheme] = useState<string | null>(null)
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)
  const [showDebug, setShowDebug] = useState(false)
  const t = useTranslations()

  const copyToClipboard = async (css: string, themeId: string) => {
    try {
      await navigator.clipboard.writeText(css)
      setCopiedTheme(themeId)
      toast.success(t('toast.copy-success', { themeName: t(`themes.${themeId}.name`) }))
      setTimeout(() => setCopiedTheme(null), 1000)
    } catch (err) {
      console.error('Failed to copy: ', err)
      toast.error(t('toast.copy-error'))
    }
  }

  // Count themes with colors for debugging
  const themesWithColors = themes.filter((theme) => theme.colors && theme.colors.length > 0).length

  // Filter themes based on selected colors and styles
  const filteredThemes = themes.filter((theme) => {
    // If no filters are selected, show all themes
    if (selectedColors.length === 0 && !selectedStyle) {
      return true
    }

    // Check for color match if colors are selected
    const colorMatch =
      selectedColors.length === 0 || theme.colors?.some((color) => selectedColors.includes(color))

    // Check theme style based on the style property
    const styleMatch = !selectedStyle || theme.style === selectedStyle

    // Theme must match both color AND style filters if both are applied
    return colorMatch && styleMatch
  })

  return (
    <>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-16">
        <ThemeColorFilter selectedColors={selectedColors} onChange={setSelectedColors} />

        <ThemeStyleFilter selectedStyle={selectedStyle} onChange={setSelectedStyle} />
      </div>

      {/* <div className="flex justify-between items-center mb-2">
        <div className="text-xs text-gray-500">
          {themesWithColors} / {themes.length} themes with colors detected
        </div>
        <button 
          type="button" 
          onClick={() => setShowDebug(!showDebug)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          {showDebug ? "Hide colors" : "Show detected colors"}
        </button>
      </div> */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredThemes.map((theme) => (
          <ThemeCard
            key={theme.id}
            theme={theme}
            copiedTheme={copiedTheme}
            onCopy={copyToClipboard}
            showColors={showDebug}
          />
        ))}
      </div>

      {(selectedColors.length > 0 || selectedStyle) && filteredThemes.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-gray-500">{t('filters.no-results')}</p>
        </div>
      )}
    </>
  )
}
