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
      id="content-container"
      className="flex max-h-full flex-1"
      style={{
        backgroundColor: 'var(--color-background)',
        borderTop: '0.5px solid var(--color-border)',
        borderTopLeftRadius: '10px',
        borderLeft: '0.5px solid var(--color-border)',
      }}
    >
      {/* Home Tab */}
      {!sidebarCollapsed && (
        <div
          className="home-tabs flex max-w-[256px] flex-1 flex-col overflow-hidden border-r bg-[var(--color-background)]"
          style={{
            borderRight: '0.5px solid var(--color-border)',
          }}
        >
          <RadioGroup />
          <TabContent />
        </div>
      )}

      {/* Chat Container */}
      <div id="chat" className="bubble flex flex-1 flex-col justify-between">
        <div
          id="chat-main"
          className="m-0 flex flex-col items-stretch justify-between overflow-auto p-0"
          style={{
            flex: '1 1 0%',
            backgroundColor: 'var(--chat-background)',
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
