'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Define color options
const colorOptions = [
  { value: 'red', bgColor: '#FF3B30' },
  { value: 'orange', bgColor: '#FF9500' },
  { value: 'brown', bgColor: '#8B572A' },
  { value: 'yellow', bgColor: '#FFCC00' },
  { value: 'green', bgColor: '#34C759' },
  { value: 'turquoise', bgColor: '#5AC8FA' },
  { value: 'blue', bgColor: '#007AFF' },
  { value: 'violet', bgColor: '#AF52DE' },
  { value: 'pink', bgColor: '#FF2D55' },
  { value: 'gray', bgColor: '#8E8E93' },
  { value: 'black', bgColor: '#000000' },
  { value: 'white', bgColor: '#FFFFFF' },
]

interface ThemeColorFilterProps {
  selectedColors: string[]
  onChange: (colors: string[]) => void
}

export function ThemeColorFilter({ selectedColors, onChange }: ThemeColorFilterProps) {
  const t = useTranslations()

  const toggleColor = (colorValue: string) => {
    if (selectedColors.includes(colorValue)) {
      onChange(selectedColors.filter((c) => c !== colorValue))
    } else {
      onChange([...selectedColors, colorValue])
    }
  }

  return (
    <div className="mb-6">
      <h2 className="mb-3 text-lg font-medium">{t('filters.colors')}</h2>
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            type="button"
            key={color.value}
            onClick={() => toggleColor(color.value)}
            className={`flex items-center rounded-full border px-3 py-2 transition-colors ${
              selectedColors.includes(color.value)
                ? 'bg-primary border-primary text-white'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
            aria-pressed={selectedColors.includes(color.value)}
          >
            <span
              className="mr-2 h-4 w-4 rounded-full"
              style={{
                backgroundColor: color.bgColor,
                border: color.value === 'white' ? '1px solid #e5e5e5' : 'none',
              }}
            />
            {t(`filters.color.${color.value}`)}
          </button>
        ))}
      </div>
    </div>
  )
}
