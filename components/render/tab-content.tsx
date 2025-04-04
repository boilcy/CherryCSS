'use client'

import { useTranslations } from 'next-intl'

export function TabContent() {
  const t = useTranslations('render')

  return (
    <div className="home-tabs-content flex min-w-[180px] flex-1 flex-col overflow-x-hidden overflow-y-auto">
      <div className="assistant-tab flex flex-col overflow-y-auto p-[10px]">
        <div className="pb-0">
          <div className="rc-virtual-list relative">
            <div className="rc-virtual-list-holder">
              <div>
                <div className="rc-virtual-list-holder-inner flex flex-col">
                  <div className="mb-[8px] cursor-grab">
                    <div
                      className="ant-dropdown-trigger active flex max-w-[232px] flex-row items-center justify-between rounded bg-[var(--color-background-soft)] px-[10px] py-[7px]"
                      style={{
                        border: '0.5px solid var(--color-border)',
                        borderRadius: '16px',
                      }}
                    >
                      <div className="name flex flex-row items-center gap-[5px] text-[13px] break-words whitespace-normal">
                        <div
                          className=""
                          style={{
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                          }}
                        >
                          ⭐️ {t('assistant-default')}
                        </div>
                      </div>
                      <div
                        className="absolute top-[6px] right-[9px] flex h-[22px] max-h-[22px] min-h-[22px] min-w-[22px] flex-row items-center justify-center rounded-full bg-[var(--color-background)] px-[5px]"
                        style={{
                          border: '0.5px solid var(--color-border)',
                        }}
                      >
                        <div
                          style={{
                            color: 'var(--color-text)',
                            fontSize: '10px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            lineHeight: 1.55,
                          }}
                        >
                          1
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-[8px] cursor-grab">
                    <div
                      className="ant-dropdown-trigger flex flex-row items-center justify-between rounded px-[10px] py-[7px] hover:bg-[var(--color-background-soft)]"
                      style={{
                        borderRadius: '16px',
                      }}
                    >
                      <div className="name flex flex-row items-center gap-[5px] text-[13px] break-words whitespace-normal">
                        <div
                          className=""
                          style={{
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                          }}
                        >
                          🏠 {t('assistant-tour-guide')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-[8px] cursor-grab">
                    <div
                      className="ant-dropdown-trigger flex flex-row items-center justify-between rounded px-[10px] py-[7px] hover:bg-[var(--color-background-soft)]"
                      style={{
                        borderRadius: '16px',
                      }}
                    >
                      <div className="name flex flex-row items-center gap-[5px] text-[13px] break-words whitespace-normal">
                        <div
                          className=""
                          style={{
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                          }}
                        >
                          📕 {t('assistant-english-teacher')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-[8px] cursor-grab">
                    <div
                      className="ant-dropdown-trigger flex flex-row items-center justify-between rounded px-[10px] py-[7px] hover:bg-[var(--color-background-soft)]"
                      style={{
                        borderRadius: '16px',
                      }}
                    >
                      <div className="name flex flex-row items-center gap-[5px] text-[13px] break-words whitespace-normal">
                        <div
                          className=""
                          style={{
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            overflow: 'hidden',
                          }}
                        >
                          👨‍🏫 {t('assistant-math-teacher')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-[0.5px solid transparent] relative flex cursor-pointer flex-row justify-between rounded-[16px] px-[12px] py-[7px] pr-[35px]">
          <div className="overflow-hidden text-[13px]">
            <span className="text-sm">+ {t('add-assistant')}</span>
          </div>
        </div>
        <div style={{ minHeight: '10px' }}></div>
      </div>
    </div>
  )
}
