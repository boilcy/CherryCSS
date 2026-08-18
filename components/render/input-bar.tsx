'use client'

import { Paperclip, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function InputBar() {
  const t = useTranslations('render')
  return (
    <div
      data-ui="chat.composer"
      className="relative mx-5 mt-3 mb-3 flex flex-col rounded-[15px] border border-[var(--input,var(--border))] bg-[var(--card,var(--background))] pt-1.5 transition-all duration-300"
    >
      <textarea
        data-ui="part:composer-input"
        placeholder={t('input-placeholder')}
        contextMenu="true"
        spellCheck="false"
        rows={2}
        className="rounded-none border-none outline-none focus:border-none focus:outline-none"
        style={{
          padding: '4px 15px 8px',
          fontSize: '14px',
          height: '36px',
          lineHeight: 1.4,
          textOverflow: 'ellipsis',
          maxWidth: '100%',
          width: '100%',
          minHeight: '32px',
          verticalAlign: 'bottom',
          display: 'flex',
          flex: 1,
          resize: 'none',
          overflow: 'auto',
          boxSizing: 'border-box',
          position: 'relative',
          userSelect: 'text',
          background: 'transparent',
          listStyle: 'none',
          color: 'var(--foreground)',
        }}
      ></textarea>
      {/* Remove Drag Handler */}
      <div
        data-ui="part:composer-actions"
        className="flex flex-row justify-between"
        style={{
          padding: '0 8px',
          paddingBottom: 0,
          marginBottom: '4px',
          height: '34px',
        }}
      >
        <div className="flex flex-row items-center gap-[6px]">
          <button type="button" className="hover:bg-opacity-20 rounded p-1.5">
            <Paperclip size={16} />
          </button>
        </div>
        <div className="flex flex-row items-center gap-[6px]">
          <button type="button" className="ml-2 rounded-full p-1.5">
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
