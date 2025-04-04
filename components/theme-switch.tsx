'use client'

import { useDarkPreview } from '@/hooks/useDarkPreview'
import { Icon } from '@iconify/react'

export function ThemePreviewSwitch() {
  const { isDarkPreview, toggleDarkPreview } = useDarkPreview()

  return (
    <div
      className="flex cursor-pointer items-center space-x-2 p-4"
      onClick={(e) => {
        e.stopPropagation()
        toggleDarkPreview(!isDarkPreview)
      }}
    >
      {isDarkPreview ? (
        <Icon icon="solar:moon-fog-bold" className="h-6 w-6" />
      ) : (
        <Icon icon="solar:sun-bold" className="h-6 w-6" />
      )}
    </div>
  )
}
