'use client'

import { useTranslations } from 'next-intl'

export function TabContent() {
  const t = useTranslations('render')
  const assistants = [
    ['⭐️', t('assistant-default')],
    ['🏠', t('assistant-tour-guide')],
    ['📕', t('assistant-english-teacher')],
    ['👨‍🏫', t('assistant-math-teacher')],
  ]

  return (
    <div className="flex min-w-[180px] flex-1 flex-col overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col gap-2 overflow-y-auto p-[10px]">
        {assistants.map(([icon, label], index) => (
          <div
            key={label}
            className="relative flex cursor-pointer items-center justify-between rounded-2xl px-2.5 py-2 text-[13px]"
            style={{
              background: index === 0 ? 'var(--secondary)' : undefined,
              border: index === 0 ? '0.5px solid var(--border)' : undefined,
              color: index === 0 ? 'var(--secondary-foreground, var(--foreground))' : undefined,
            }}
          >
            <span className="overflow-hidden text-ellipsis">
              {icon} {label}
            </span>
            {index === 0 && (
              <span
                className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-1 text-[10px]"
                style={{
                  background: 'var(--background)',
                  border: '0.5px solid var(--border)',
                  color: 'var(--foreground)',
                }}
              >
                1
              </span>
            )}
          </div>
        ))}
        <button
          type="button"
          className="rounded-2xl px-3 py-2 text-left text-sm hover:bg-[var(--accent)] hover:text-[var(--accent-foreground,var(--foreground))]"
        >
          + {t('add-assistant')}
        </button>
      </div>
    </div>
  )
}
