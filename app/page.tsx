import ThemeGrid from "@/components/theme-grid"
import { themes } from "@/lib/themes"
import { Github } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-full mx-auto relative">
        <a
          href="https://github.com/boilcy/cherrycss"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1 top-1 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <Github className="w-6 h-6" />
          <span className="hidden sm:inline">See on GitHub</span>
        </a>

        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cherry Studio Theme Gallery</h1>
          <p className="text-gray-600">选择并复制你喜欢的主题</p>
        </header>

        <ThemeGrid themes={themes} />
      </div>
    </main>
  )
}

