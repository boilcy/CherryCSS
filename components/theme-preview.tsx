import Image from "next/image"
import type { Theme } from "@/lib/types"

interface ThemePreviewProps {
  theme: Theme
}

export default function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={theme.previewUrl || "/placeholder.svg"}
        alt={`${theme.name} theme preview`}
        width={540}
        height={300}
        className="w-full h-auto"
      />
    </div>
  )
}

