import ThemeRenderer from "@/components/theme-render"
import { changAn } from "@/lib/themes/chineseStyle/changAn"
import { chunMei } from "@/lib/themes/chineseStyle/chunMei"

export default function RenderPage() {
  return (
    <div className="w-full h-screen p-4">
      <ThemeRenderer theme={chunMei} />
    </div>
  )
}
