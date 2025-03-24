"use client"

import { useState } from "react"
import Image from "next/image"
import type { Theme } from "@/lib/types"
import { Icon } from "@iconify/react"
import { useDarkPreview } from "@/hooks/useDarkPreview"
import { useTranslations } from 'next-intl'

interface ThemeCardProps {
  theme: Theme
  copiedTheme: string | null
  onCopy: (css: string, themeId: string) => void
}

export function ThemeCard({ theme, copiedTheme, onCopy }: ThemeCardProps) {
  const { isDarkPreview } = useDarkPreview()
  const t = useTranslations('themes');
  const lightSrc = `/light/${theme.lightPreviewUrl}` || "/placeholder.svg";
  const darkSrc = `/dark/${theme.darkPreviewUrl}` || "/placeholder.svg";
  return (
    <div
      onClick={() => onCopy(theme.css, theme.id)}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-full max-w-[540px] lg:max-w-full h-auto cursor-pointer text-left"
      aria-label={`Copy ${t(`${theme.id}.name`)} theme`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={isDarkPreview ? darkSrc : lightSrc}
          alt={`${t(`${theme.id}.name`)} theme preview`}
          width={540}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-lg">{t(`${theme.id}.name`)}</h3>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCopy(theme.css, theme.id);
            }}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            aria-label={`Copy ${t(`${theme.id}.name`)} CSS`}
          >
            {copiedTheme === theme.id ? <Icon icon="mdi:check-bold" className="w-4 h-4" /> : <Icon icon="mdi:content-copy" className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500">{t(`${theme.id}.description`)}</p>
      </div>
    </div>
  )
} 