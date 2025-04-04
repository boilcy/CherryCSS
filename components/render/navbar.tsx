'use client'

import { useRTL } from '@/hooks/useRTL'
import { Theme } from '@/lib/types'
import { Icon } from '@iconify/react'
import { useTranslations } from 'next-intl'

interface NavbarProps {
  theme: Theme
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
}

export function Navbar({ theme, sidebarCollapsed, setSidebarCollapsed }: NavbarProps) {
  const t = useTranslations()
  const { isRtl } = useRTL()
  return (
    <div
      className={`wrap-break-word ${!isRtl ? 'ml-[-42px]' : 'mr-[-42px]'} flex h-[32px] items-center justify-between overflow-visible bg-[var(--navbar-background)] px-4 py-3`}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div
          className="rounded-full p-1.5"
          onClick={(e) => {
            e.stopPropagation()
            setSidebarCollapsed(!sidebarCollapsed)
          }}
        >
          {sidebarCollapsed ? (
            <Icon
              icon={isRtl ? 'mynaui:panel-right-open' : 'mynaui:panel-left-open'}
              className="h-4 w-4"
            />
          ) : (
            <Icon
              icon={isRtl ? 'mynaui:panel-right-close' : 'mynaui:panel-left-close'}
              className="h-4 w-4"
            />
          )}
        </div>
        <span className="ml-2 text-sm font-medium">{t('render.title')}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">{t(`themes.${theme.id}.name`)}</span>
      </div>
    </div>
  )
}
