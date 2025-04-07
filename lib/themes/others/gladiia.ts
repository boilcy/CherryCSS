import type { Theme } from '@/lib/types'

export const gladiia: Theme = {
  id: 'gladiia',
  name: '歌蕾蒂娅-返航',
  description: '歌蕾蒂娅-返航 主题',
  lightPreviewUrl: '/gladiia.png',
  darkPreviewUrl: '/gladiia.png',
  css: `/*** 歌蕾蒂娅-返航 ***/
:root {
  --chat-background-white: #fff;
  --color-border: rgba(120,120,120,0.08) !important;
}

.message-content-container {
  background: var(--chat-background-white) !important;
  box-shadow: 0 4px 16px -8px rgba(0,0,0,0.04) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: 18px !important;
  margin: 8px 0 !important;
  padding: 10px 10px 0 10px !important;
  transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
}

.message-user .message-content-container {
  background: #fbfcfc !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.03) !important;
}

#inputbar {
  margin: 0px 10px 10px 10px;
  background: rgba(255,255,255,0.96) !important;
  border: 2px solid var(--color-border) !important;
  border-radius: 20px !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.03) !important;
  backdrop-filter: blur(8px) !important;
}

* {
  font-family: 'MiSans Normal', system-ui !important;
  line-height: 1.7 !important;
  letter-spacing: 0.018em !important;
}

body[theme-mode='light'] {
  --color-primary: #df3649;
  --color-primary-soft: #b5242b;
  --color-primary-mute: #6b171b;
}

body[theme-mode='dark'] {
  --color-primary: #df3649;
  --color-primary-soft: #b5242b;
  --color-primary-mute: #6b171b;
  --color-border: rgba(255,255,255,0.1);
  --chat-background-white: #212225;
  --chat-text-user: #EDEEF0;
  --color-text: #EDEEF0;
}

body[theme-mode='dark'] .message-content-container {
  background: var(--chat-background-white) !important;
  box-shadow: 0 4px 16px -8px rgba(0,0,0,0.4) !important;
  border: 1px solid var(--color-border) !important;
}

body[theme-mode='dark'] .message-user .message-content-container {
  background: #2a2a2a !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.3) !important;
  border: 1px solid var(--color-border) !important;
}

body[theme-mode='dark'] #inputbar {
  background: rgba(34,34,34,0.96) !important;
  border: 1px solid var(--color-border) !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.3) !important;
  backdrop-filter: blur(8px) !important;
}

* {
  font-family: "LXGW WenKai" !important;
  font-weight: 800;
}`,
}
