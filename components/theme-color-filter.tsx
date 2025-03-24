"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

// Define color options
const colorOptions = [
  { name: "Red", value: "red", bgColor: "#FF3B30" },
  { name: "Orange", value: "orange", bgColor: "#FF9500" },
  { name: "Brown", value: "brown", bgColor: "#8B572A" },
  { name: "Yellow", value: "yellow", bgColor: "#FFCC00" },
  { name: "Green", value: "green", bgColor: "#34C759" },
  { name: "Turquoise", value: "turquoise", bgColor: "#5AC8FA" },
  { name: "Blue", value: "blue", bgColor: "#007AFF" },
  { name: "Violet", value: "violet", bgColor: "#AF52DE" },
  { name: "Pink", value: "pink", bgColor: "#FF2D55" },
  { name: "Gray", value: "gray", bgColor: "#8E8E93" },
  { name: "Black", value: "black", bgColor: "#000000" },
  { name: "White", value: "white", bgColor: "#FFFFFF" }
]

interface ThemeColorFilterProps {
  selectedColors: string[]
  onChange: (colors: string[]) => void
}

export function ThemeColorFilter({ selectedColors, onChange }: ThemeColorFilterProps) {
  const t = useTranslations();
  
  const toggleColor = (colorValue: string) => {
    if (selectedColors.includes(colorValue)) {
      onChange(selectedColors.filter(c => c !== colorValue));
    } else {
      onChange([...selectedColors, colorValue]);
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">{t('filters.colors')}</h2>
      <div className="flex flex-wrap gap-2">
        {colorOptions.map((color) => (
          <button
            type="button"
            key={color.value}
            onClick={() => toggleColor(color.value)}
            className={`flex items-center px-3 py-2 rounded-full border transition-colors ${
              selectedColors.includes(color.value)
                ? "bg-primary border-primary text-white"
                : "bg-white border-gray-200 hover:border-gray-300"
            }`}
            aria-pressed={selectedColors.includes(color.value)}
          >
            <span 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: color.bgColor, 
                      border: color.value === "white" ? "1px solid #e5e5e5" : "none" 
                    }}
            />
            {color.name}
          </button>
        ))}
      </div>
    </div>
  )
} 