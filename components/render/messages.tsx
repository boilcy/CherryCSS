'use client'

import { useTranslations } from 'next-intl'
import { AssistantMessage, SystemMessage, UserMessage } from './message-components'

export function Messages() {
  const t = useTranslations('render')

  return (
    <div
      data-ui="chat.message-list"
      className="flex flex-col overflow-y-auto"
      style={{
        padding: '10px 0 20px',
        overflow: 'hidden',
        backgroundColor: 'var(--background)',
      }}
    >
      {/* System message */}
      <SystemMessage message={t('assistant-default-prompt')} />

      {/* Fake Scroll container */}
      <div data-ui="chat.message.group" className="flex flex-col">
        {/* User message */}
        <UserMessage content={t('user-message')} username={t('user-name')} />

        {/* Assistant message */}
        <AssistantMessage content={t('model-message')} assistantName={t('model-name')} />
      </div>
    </div>
  )
}
