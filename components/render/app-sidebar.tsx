'use client'

import { Icon } from '@iconify/react'
import { useMemo } from 'react'

const randomAvatarPool = [
  'noto-v1:hear-no-evil-monkey',
  'noto-v1:hatching-chick',
  'noto-v1:boxing-glove',
  'noto-v1:avocado',
  'noto-v1:dragon-face',
  'noto-v1:ewe',
  'noto-v1:goblin',
  'noto-v1:goat',
  'noto:artist-palette',
  'noto:cat-face',
  'noto:gorilla',
  'noto:horse-face',
  'noto:koala',
  'noto:lemon',
  'noto:mango',
  'noto:alien',
  'noto:dove',
  'noto:first-quarter-moon-face',
  'noto:loudly-crying-face',
  'noto:moai',
  'noto:partying-face',
]

interface AppSidebarProps {
  themeMode: 'light' | 'dark'
  setThemeMode: (mode: 'light' | 'dark') => void
}

export function AppSidebar({ themeMode, setThemeMode }: AppSidebarProps) {
  // Use useMemo to ensure avatar is only selected once on mount
  const randomAvatar = useMemo(() => {
    return randomAvatarPool[Math.floor(Math.random() * randomAvatarPool.length)]
  }, [])

  return (
    <div
      data-ui="app.sidebar"
      className="mt-[32px] flex w-[36px] min-w-[36px] flex-col items-center border-r bg-[var(--sidebar,var(--background))] py-2 pb-3 text-[var(--sidebar-foreground,var(--foreground))]"
      style={{ borderColor: 'var(--sidebar-border, var(--border))' }}
    >
      {/* Avatar */}
      <div className="mb-3 flex h-[30px] w-[30px] items-center justify-center rounded-full">
        <Icon icon={randomAvatar} className="h-6 w-6" />
      </div>

      {/* MainMenusContainer */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Menus */}
        <div className="flex flex-col items-center gap-1">
          {/* chat */}
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
            <Icon icon="lucide:message-circle" className="h-4 w-4" />
          </div>
          {/* paint */}
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
            <Icon icon="lucide:image" className="h-4 w-4" />
          </div>
          {/* translate */}
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
            <Icon icon="lucide:languages" className="h-4 w-4" />
          </div>
          {/* knowledge base */}
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
            <Icon icon="lucide:file-search" className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4">
        {/* about */}
        <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
          <Icon icon="lucide:circle-help" className="h-4 w-4" />
        </div>
        {/* theme */}
        <div
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]"
          onClick={(e) => {
            e.stopPropagation()
            setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
          }}
        >
          {themeMode === 'dark' ? (
            <Icon icon="lucide:moon" className="h-4 w-4" />
          ) : (
            <Icon icon="lucide:sun" className="h-4 w-4" />
          )}
        </div>
        {/* setting */}
        <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-transparent hover:opacity-80 active:border-[var(--sidebar-border,var(--border))]">
          <Icon icon="lucide:settings" className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}
