'use client'

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
              className="message message-assistant relative flex flex-col items-center pt-[15px]"
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
                        color: 'var(--color-text)',
                      }}
                    >
                      {assistantName}
                    </div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: 'var(--color-text-3)',
                      }}
                    >
                      {timestamp}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="message-content-container flex flex-1 flex-col justify-between"
                style={{
                  fontFamily: `Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
                  fontSize: '14px',
                  overflowY: 'visible',
                  margin: '5px 0',
                  borderRadius: '8px',
                  padding: '10px 15px 10px 15px',
                  background: 'var(--chat-background-assistant)',
                }}
              >
                <div className="mb-[10px] hidden gap-[8px]"></div>
                <p className="mb-[5px] whitespace-pre-wrap">{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
