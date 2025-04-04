'use client'

import { useTranslations } from 'next-intl'

export function RadioGroup() {
  const t = useTranslations('render')
  return (
    <div
      className="rounded-0 ant-segmented ant-segmented-block gap-[2px] pt-[10px] pb-[10px]"
      style={{ borderBottom: '0.5px solid var(--color-border)', margin: '0 10px' }}
    >
      <div className="ant-segmented-group relative flex w-full flex-row items-stretch justify-items-start gap-[4px]">
        <div className="ant-segmented-item h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] border-[0.5px] border-[var(--color-border)] bg-[var(--color-background-soft)] text-center text-[14px] leading-[34px] transition-none">
          {t('tab-assistant')}
        </div>
        <div className="ant-segmented-item h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] text-center text-[14px] leading-[34px] transition-none">
          {t('tab-topic')}
        </div>
        <div className="ant-segmented-item h-[34px] flex-1 cursor-pointer overflow-hidden rounded-[16px] text-center text-[14px] leading-[34px] transition-none">
          {t('tab-settings')}
        </div>
      </div>
    </div>
  )
}
