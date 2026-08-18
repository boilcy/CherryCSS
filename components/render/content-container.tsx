'use client'

import { InputBar } from './input-bar'
import { Messages } from './messages'
import { RadioGroup } from './radio-group'
import { TabContent } from './tab-content'

interface ContentContainerProps {
  sidebarCollapsed: boolean
}

export function ContentContainer({ sidebarCollapsed }: ContentContainerProps) {
  return (
    <div
      data-ui="app.content"
      className="flex max-h-full flex-1"
      style={{
        backgroundColor: 'var(--background)',
        borderTop: '0.5px solid var(--border)',
        borderTopLeftRadius: '10px',
        borderLeft: '0.5px solid var(--border)',
      }}
    >
      {/* Home Tab */}
      {!sidebarCollapsed && (
        <div
          className="flex max-w-[256px] flex-1 flex-col overflow-hidden border-r bg-[var(--background)]"
          style={{
            borderRight: '0.5px solid var(--border)',
          }}
        >
          <RadioGroup />
          <TabContent />
        </div>
      )}

      {/* Chat Container */}
      <div data-ui="chat.view" className="flex flex-1 flex-col justify-between">
        <div
          data-ui="part:conversation-main"
          className="m-0 flex flex-col items-stretch justify-between overflow-auto p-0"
          style={{
            flex: '1 1 0%',
            backgroundColor: 'var(--background)',
          }}
        >
          {/* Messages */}
          <Messages />

          {/* Input area */}
          <InputBar />
        </div>
      </div>
    </div>
  )
}
