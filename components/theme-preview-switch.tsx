"use client"

import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface ThemePreviewSwitchProps {
  onToggle: (isDark: boolean) => void
}

export function ThemePreviewSwitch({ onToggle }: ThemePreviewSwitchProps) {
  const [isDark, setIsDark] = useState(false)

  const handleToggle = () => {
    setIsDark(!isDark)
    onToggle(!isDark)
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-gray-500" />
      <Switch checked={isDark} onCheckedChange={handleToggle} aria-label="Toggle theme preview" />
      <Moon className="h-4 w-4 text-gray-500" />
    </div>
  )
}

