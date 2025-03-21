"use client"

import { useDarkPreview } from "@/hooks/useDarkPreview"
import { Switch } from "@/components/ui/switch"
import { Icon } from "@iconify/react"

export function ThemePreviewSwitch() {
  const { isDarkPreview, toggleDarkPreview } = useDarkPreview()

  return (
    <div className="flex items-center space-x-2 p-4">
      <Icon icon="solar:sun-bold" className="w-6 h-6" />
      <Switch 
        checked={isDarkPreview} 
        onCheckedChange={toggleDarkPreview} 
        aria-label="Toggle theme preview" 
      />
      <Icon icon="solar:moon-fog-bold" className="w-6 h-6" />
    </div>
  )
}

