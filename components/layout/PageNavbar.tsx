import LocaleSelect from '@/components/locale-select'
import { ThemePreviewSwitch } from '@/components/theme-switch'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface PageNavbarProps {
  backLink?: {
    href: string
    textKey: string
  }
  forwardLink?: {
    href: string
    textKey: string
  }
}

export default function PageNavbar({ backLink, forwardLink }: PageNavbarProps) {
  const t = useTranslations()

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-white/50 backdrop-blur">
      <div className="flex items-center gap-2">
        {backLink && (
          <Link
            href={backLink.href}
            className="flex flex-row items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900"
          >
            <Icon icon="noto:left-arrow" className="h-4 w-4" />
            <span>{t(`navigation.${backLink.textKey}`)}</span>
          </Link>
        )}

        {forwardLink && (
          <Link
            href={forwardLink.href}
            className="flex flex-row items-center gap-1 px-2 py-1 text-gray-600 hover:text-gray-900"
          >
            <span>{t(`navigation.${forwardLink.textKey}`)}</span>
            <Icon icon="noto:right-arrow" className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="flex items-center gap-4">
        <LocaleSelect />
        <a
          href="https://github.com/boilcy/cherrycss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
        >
          <Icon icon="mdi:github" className="h-6 w-6" />
          <span className="hidden sm:inline">{t('navigation.github')}</span>
        </a>
        <ThemePreviewSwitch />
      </div>
    </div>
  )
}
