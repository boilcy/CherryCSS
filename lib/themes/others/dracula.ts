import type { Theme } from '@/lib/types'

export const dracula: Theme = {
  id: 'dracula',
  name: 'Dracula',
  description: 'Light theme inspired by Dracula Theme',
  lightPreviewUrl: '/dracula.png',
  darkPreviewUrl: '/dracula.png',
  css: `/* Dracula主题 */
:root {
    /* 基础色板 */
    --color-white: #F8F8F2;       /* Dracula Foreground */
    --color-white-soft: rgba(248, 248, 242, 0.8);
    --color-white-mute: rgba(248, 248, 242, 0.6);
    --color-black: #282A36;      /* Dracula Background */
    --color-black-soft: #343746;  /* 稍暗背景 */
    --color-black-mute: #44475A;  /* Dracula Current Line */
    
    /* 灰度阶梯 */
    --color-gray-1: #6272A4;      /* Dracula Comment */
    --color-gray-2: #44475A;      /* Current Line */
    --color-gray-3: #343746;      /* 深灰 */
    
    /* 文本色阶 */
    --color-text-1: #F8F8F2;      /* Foreground */
    --color-text-2: rgba(248, 248, 242, 0.7);
    --color-text-3: rgba(248, 248, 242, 0.5);
    
    /* 背景系统 */
    --color-background: var(--color-black);
    --color-background-soft: var(--color-black-soft);
    --color-background-mute: var(--color-black-mute);
    --color-background-opacity: rgba(40, 42, 54, 0.9);  /* Dracula背景+透明度 */
    
    /* 主色系统 */
    --color-primary: #BD93F9;      /* Dracula Purple */
    --color-primary-soft: #BD93F999;
    --color-primary-mute: #BD93F933;
    
    /* 图标与边框 */
    --color-icon: rgba(248, 248, 242, 0.6);
    --color-icon-white: #F8F8F2;
    --color-border: rgba(248, 248, 242, 0.1);
    --color-border-soft: rgba(248, 248, 242, 0.08);
    --color-border-mute: rgba(248, 248, 242, 0.05);
    
    /* 功能色 */
    --color-error: #FF5555;        /* Dracula Red */
    --color-link: #8BE9FD;         /* Dracula Cyan */
    --color-code-background: #343746;
    
    /* 交互状态 */
    --color-hover: rgba(68, 71, 90, 0.5);  /* Current Line 50%透明度 */
    --color-active: rgba(68, 71, 90, 0.8); 
    
    /* 组件特定 */
    --color-frame-border: #6272A4;        /* Comment颜色 */
    --color-group-background: var(--color-black-soft);
    --color-reference: #44475A;
    --color-reference-text: #F8F8F2;
    --color-reference-background: #282A36;
    
    /* 导航栏与聊天 */
    --navbar-background-mac: rgba(40, 42, 54, 0.8);
    --navbar-background: #282A36;
    --chat-background: #282A36;
    --chat-background-user: #44475A;       /* Current Line */
    --chat-background-assistant: #343746;  /* 深灰 */
    --chat-text-user: #F8F8F2;
}`,
}
