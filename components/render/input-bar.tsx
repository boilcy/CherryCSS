'use client'

import { Paperclip, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function InputBar() {
  const t = useTranslations('render')
  return (
    <div className="inputbar flex flex-col">
      <div
        id="inputbar"
        className="inputbar-container"
        style={{
          border: '0.5px solid var(--color-border)',
          transition: 'all 0.3s ease',
          position: 'relative',
          margin: '14px 20px',
          marginTop: '12px',
          borderRadius: '15px',
          paddingTop: '6px',
          backgroundColor: 'var(--color-background)',
        }}
      >
        <div
          style={{
            display: 'none',
            padding: '10px 15px 0',
            margin: 0,
          }}
        ></div>
        <textarea
          placeholder={t('input-placeholder')}
          contextMenu="true"
          spellCheck="false"
          rows={2}
          className="border-none outline-none focus:border-none focus:outline-none"
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
            borderRadius: 0,
            display: 'flex',
            flex: 1,
            resize: 'none',
            overflow: 'auto',
            boxSizing: 'border-box',
            position: 'relative',
            userSelect: 'text',
            background: 'transparent',
            listStyle: 'none',
            color: 'var(--color-text)',
          }}
        ></textarea>
        {/* Remove Drag Handler */}
        <div
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
    </div>
  )
}
