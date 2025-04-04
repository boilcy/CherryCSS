'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Theme } from '@/lib/types'
import { Icon } from '@iconify/react'
import { useDarkPreview } from '@/hooks/useDarkPreview'
import { useTranslations } from 'next-intl'
import { ThemePalette } from './theme-palette'

interface ThemeCardProps {
  theme: Theme
  copiedTheme: string | null
  onCopy: (css: string, themeId: string) => void
  showColors?: boolean
}

export function ThemeCard({ theme, copiedTheme, onCopy, showColors = false }: ThemeCardProps) {
  const { isDarkPreview } = useDarkPreview()
  const t = useTranslations('themes')
  const lightSrc = `/light/${theme.lightPreviewUrl}` || '/placeholder.svg'
  const darkSrc = `/dark/${theme.darkPreviewUrl}` || '/placeholder.svg'
  return (
    <div
      onClick={() => onCopy(theme.css, theme.id)}
      className="mx-auto h-auto w-full max-w-[540px] cursor-pointer overflow-hidden rounded-lg bg-white text-left shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg lg:max-w-full"
      aria-label={`Copy ${t(`${theme.id}.name`)} theme`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={isDarkPreview ? darkSrc : lightSrc}
          alt={`${t(`${theme.id}.name`)} theme preview`}
          width={540}
          height={300}
          className="-m-[1px] h-auto w-full scale-[1.01]"
        />
      </div>

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
