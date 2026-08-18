'use client'

import Image from 'next/image'

interface UserMessageProps {
  content: string
  timestamp?: string
  username?: string
  avatar?: string
}

export function UserMessage({
  content,
  timestamp = '03/31 16:48',
  username = '用户',
  avatar = '/avatar.png',
}: UserMessageProps) {
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
                alignItems: 'end',
              }}
            >
              <div className="message-header">
                <div className="flex flex-row-reverse items-center gap-[10px] text-right">
                  <span className="h-[35px] w-[35px] cursor-pointer rounded-[25%] text-[18px]">
                    <Image
                      src={avatar}
                      width={35}
                      height={35}
                      alt="user avatar"
                      className="h-full w-full object-cover"
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
                      {username}
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
                className="my-[5px] flex flex-1 flex-col justify-between rounded-lg bg-[var(--chat-user,var(--card))] px-[15px] py-[10px] text-sm text-[var(--foreground)]"
                style={{
                  overflowY: 'visible',
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
