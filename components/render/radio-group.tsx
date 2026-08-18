'use client'

import { useTranslations } from 'next-intl'

export function RadioGroup() {
  const t = useTranslations('render')
  return (
    <div
      data-ui="chat.topic-list"
      className="gap-[2px] pt-[10px] pb-[10px]"
      style={{ borderBottom: '0.5px solid var(--border)', margin: '0 10px' }}
    >
      <div className="relative flex w-full flex-row items-stretch justify-items-start gap-[4px]">
        <div className="h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] border-[0.5px] border-[var(--border)] bg-[var(--secondary)] text-center text-[14px] leading-[34px] text-[var(--secondary-foreground,var(--foreground))] transition-none">
          {t('tab-assistant')}
        </div>
        <div className="h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] text-center text-[14px] leading-[34px] transition-none">
          {t('tab-topic')}
        </div>
        <div className="h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] text-center text-[14px] leading-[34px] transition-none">
          {t('tab-settings')}
        </div>
      </div>
    </div>
  )
}
