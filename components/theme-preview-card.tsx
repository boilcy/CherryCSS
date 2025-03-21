"use client"

import { useState } from "react"
import Image from "next/image"
import type { Theme } from "@/lib/types"
import { Icon } from "@iconify/react"

interface ThemeCardProps {
  theme: Theme
  isDarkPreview: boolean
  copiedTheme: string | null
  onCopy: (css: string, themeId: string, themeName: string) => void
}

export function ThemeCard({ theme, isDarkPreview, copiedTheme, onCopy }: ThemeCardProps) {
  return (
    <div
      onClick={() => onCopy(theme.css, theme.id, theme.name)}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-full max-w-[540px] lg:max-w-full h-auto cursor-pointer text-left"
      aria-label={`Copy ${theme.name} theme`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={isDarkPreview ? `/dark/${theme.darkPreviewUrl}` : `/light/${theme.lightPreviewUrl}` || "/placeholder.svg"}
          alt={`${theme.name} theme preview`}
          width={540}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-lg">{theme.name}</h3>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onCopy(theme.css, theme.id, theme.name);
            }}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            aria-label={`Copy ${theme.name} CSS`}
          >
            {copiedTheme === theme.id ? <Icon icon="mdi:check-bold" className="w-4 h-4" /> : <Icon icon="mdi:content-copy" className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-500">{theme.description}</p>
      </div>
    </div>
  )
} 