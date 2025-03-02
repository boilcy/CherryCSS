"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Copy } from "lucide-react"
import type { Theme } from "@/lib/types"

interface ThemeGridProps {
  themes: Theme[]
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  const [copiedTheme, setCopiedTheme] = useState<string | null>(null)

  const copyToClipboard = async (css: string, themeId: string) => {
    try {
      await navigator.clipboard.writeText(css)
      setCopiedTheme(themeId)
      setTimeout(() => setCopiedTheme(null), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {themes.map((theme) => (
        <div
          key={theme.id}
          onClick={() => copyToClipboard(theme.css, theme.id)}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-full max-w-[540px] lg:max-w-full h-auto cursor-pointer"
        >
          <div className="relative overflow-hidden">
            <Image
              src={theme.previewUrl || "/placeholder.svg"}
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
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard(theme.css, theme.id);
                }}
                className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label={`Copy ${theme.name} CSS`}
              >
                {copiedTheme === theme.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <p className="text-sm text-gray-500">{theme.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

