import GradientText from "@/components/GradientText"
import { Toaster } from "@/components/ui/sonner"
import ThemeGrid from "@/components/theme-preview-grid"
import { ThemePreviewSwitch } from "@/components/theme-preview-switch"
import { themes } from "@/lib/themes"
import { Icon } from "@iconify/react"
import { useTranslations } from 'next-intl';
import LocaleSelect from "@/components/locale-select"

export default function Home() {
  const t = useTranslations();
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-full mx-auto relative">
        <div className="flex items-center justify-center lg:justify-end gap-4 sticky top-8 z-50 backdrop-blur bg-white/50">
          <LocaleSelect />
          <a
            href="https://github.com/boilcy/cherrycss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon icon="mdi:github" className="w-6 h-6" />
            <span className="hidden sm:inline">{t('navigation.github')}</span>
          </a>
          <ThemePreviewSwitch />
        </div>

        <header className="mb-8 text-center">
          <GradientText
            colors={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"]}
            animationSpeed={2}
            showBorder={false}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {t('home.title')}
          </GradientText>
          <p className="text-gray-600">{t('home.description')}</p>
        </header>

        <ThemeGrid themes={themes} />
        <Toaster />
      </div>
    </main>
  )
}

