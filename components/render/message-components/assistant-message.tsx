'use client'

import { Copy, RotateCcw } from 'lucide-react'
import Image from 'next/image'

interface AssistantMessageProps {
  content: string
  timestamp?: string
  assistantName?: string
  avatar?: string
}

export function AssistantMessage({
  content,
  timestamp = '03/31 16:48',
  assistantName = 'DeepSeek Chat | 深度求索',
  avatar = '/deepseek.png',
}: AssistantMessageProps) {
  return (
    <div className="pt-0">
      <div className="grid gap-0 overflow-y-visible">
        <div className="overflow-y-visible rounded-[6px]">
          <div className="flex flex-col gap-4">
            <div
              data-ui="chat.message"
              className="relative flex flex-col items-center pt-[15px]"
              style={{
                transition: 'background-color 0.3s ease',
                padding: '0 20px',
                transform: 'translateZ(0)',
                willChange: 'transform',
                paddingTop: '15px',
                alignItems: 'start',
              }}
            >
              <div className="message-header">
                <div className="flex flex-row items-center gap-[10px] text-left">
                  <span className="h-[35px] w-[35px] cursor-pointer rounded-[25%] text-[18px]">
                    <Image
                      src={avatar}
                      width={35}
                      height={35}
                      alt="assistant avatar"
                      className="h-full rounded-lg object-cover"
                    />
                  </span>
                  <div className="flex flex-col justify-between">
                    <div
                      className="text-[14px] font-[600]"
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--foreground)',
                      }}
                    >
                      {assistantName}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: 'var(--foreground-tertiary, var(--muted-foreground))',
                      }}
                    >
                      {timestamp}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-ui="part:message-content"
                className="my-[5px] flex flex-1 flex-col justify-between rounded-lg bg-[var(--card,var(--background))] px-[15px] py-[10px] text-sm text-[var(--card-foreground,var(--foreground))]"
                style={{
                  overflowY: 'visible',
                }}
              >
                <div className="mb-[10px] hidden gap-[8px]"></div>
                <p className="mb-[5px] whitespace-pre-wrap">{content}</p>
                <pre
                  data-ui="part:code-block"
                  className="mt-1 overflow-hidden rounded-md p-2 text-xs"
                  style={{ background: 'var(--code-block, var(--muted))' }}
                >
                  <code>{"const theme = 'v2'"}</code>
                </pre>
              </div>
              <div
                data-ui="part:message-actions"
                className="mt-1 flex items-center gap-1 text-[var(--muted-foreground,var(--foreground))]"
              >
                <button type="button" className="rounded p-1 hover:bg-[var(--accent)]">
                  <Copy size={12} />
                </button>
                <button type="button" className="rounded p-1 hover:bg-[var(--accent)]">
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
