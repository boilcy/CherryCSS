"use client"

import { useTranslations } from "next-intl"

// Define style options
const styleOptions = [
  { value: "chineseStyle" },
  { value: "others" },
]

interface ThemeStyleFilterProps {
  selectedStyle: string | null
  onChange: (style: string | null) => void
}

export function ThemeStyleFilter({ selectedStyle, onChange }: ThemeStyleFilterProps) {
  const t = useTranslations();
  
  const toggleStyle = (styleValue: string) => {
    if (selectedStyle === styleValue) {
      // 如果已选中，则取消选择
      onChange(null);
    } else {
      // 选择新的风格
      onChange(styleValue);
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3">{t('filters.styles')}</h2>
      <div className="flex flex-wrap gap-2">
        {styleOptions.map((style) => (
          <button
            type="button"
            key={style.value}
            onClick={() => toggleStyle(style.value)}
            className={`flex items-center px-3 py-2 rounded-full border transition-colors ${
              selectedStyle === style.value
                ? "bg-primary border-primary text-white"
                : "bg-white border-gray-200 hover:border-gray-300"
            }`}
            aria-pressed={selectedStyle === style.value}
          >
            {t(`filters.style.${style.value}`)}
          </button>
        ))}
      </div>
    </div>
  )
} 