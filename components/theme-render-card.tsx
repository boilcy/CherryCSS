'use client'

import { useDarkPreview } from '@/hooks/useDarkPreview'
import type { Theme } from '@/lib/types'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import ThemeRenderer from './render/theme-renderer'
import { ThemePalette } from './theme-palette'

interface ThemeRenderCardProps {
  theme: Theme
  copiedTheme: string | null
  onCopy: (css: string, themeId: string) => void
  showColors?: boolean
  originThemeClassName: string
}

function ThemeRenderCardBase({
  theme,
  copiedTheme,
  onCopy,
  showColors = false,
  originThemeClassName,
}: ThemeRenderCardProps) {
  const { isDarkPreview } = useDarkPreview()
  const t = useTranslations('themes')

  return (
    <div
      onClick={() => onCopy(theme.css, theme.id)}
      className="mx-auto h-auto w-full cursor-pointer overflow-hidden rounded-lg bg-white text-left shadow-md transition-all duration-300 hover:shadow-lg lg:max-w-full"
      aria-label={`Copy ${t(`${theme.id}.name`)} theme`}
    >
      <ThemeRenderer theme={theme} originThemeClassName={originThemeClassName} />

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex flex-1 items-center gap-2">
            <h3 className="text-lg font-medium">{t(`${theme.id}.name`)}</h3>
            <ThemePalette theme={theme} isDarkMode={isDarkPreview} />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onCopy(theme.css, theme.id)
            }}
            className="bg-primary hover:bg-primary/90 flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors"
            aria-label={`Copy ${t(`${theme.id}.name`)} CSS`}
          >
            {copiedTheme === theme.id ? (
              <Icon icon="mdi:check-bold" className="h-4 w-4" />
            ) : (
              <Icon icon="mdi:content-copy" className="h-4 w-4" />
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500">{t(`${theme.id}.description`)}</p>

        {showColors && theme.colors && theme.colors.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {theme.colors.map((color) => (
              <span key={color} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
                {color}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Custom comparison function to only re-render when necessary
function arePropsEqual(prevProps: ThemeRenderCardProps, nextProps: ThemeRenderCardProps) {
  return (
    prevProps.theme.id === nextProps.theme.id &&
    prevProps.theme.css === nextProps.theme.css &&
    prevProps.copiedTheme === nextProps.copiedTheme &&
    prevProps.showColors === nextProps.showColors &&
    prevProps.originThemeClassName === nextProps.originThemeClassName
  )
}

export const ThemeRenderCard = React.memo(ThemeRenderCardBase, arePropsEqual)
