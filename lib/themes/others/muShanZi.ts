import type { Theme } from '@/lib/types'

export const muShanZi: Theme = {
  id: 'mu-shan-zi',
  name: '暮山紫',
  description: 'Light theme inspired by traditional Chinese aesthetics',
  lightPreviewUrl: '/mu-shan-zi.png',
  darkPreviewUrl: '/mu-shan-zi.png',
  css: `/* 
========================
暮山紫 (Mu-Shan-Zi)
========================
暮山紫 主题灵感源自晚霞浸染的远山，
以朦胧、渐变的紫黛色调，描绘暮色中光影的交织。
色彩晕染如烟似雾，既蕴含宋代山水画的留白意境，
又融入了西方浪漫主义的瑰丽笔触，
在虚实之间勾勒出东方诗性与西方色彩的和鸣。
*/

/* Root variables */
:root {
    --color-white-soft: #f4f7fb;
    --color-black-soft: #4c5d86;  

    /* Primary color (accent color) and variants */
    --color-primary: #6887af;     
    --color-primary-soft: rgba(104, 125, 175, 0.6);
    --color-primary-mute: rgba(104, 130, 175, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #4c6486;       
    --color-background-mute: #5a6f96;  
    --color-background-soft: #688baf;  

    --navbar-background-mac: rgba(76, 100, 134, 0.85);
    --navbar-background: #4c6286;
    --chat-background: #4c6386;
    --chat-background-user: #6886af;
    --chat-background-assistant: #3d5770;

    --chat-text-user: #e6ebf7;
    --color-text: #e6edf7;

    --color-hover: #5e79a2;
    --color-active: #7a98c1;

    --color-border: rgba(230, 235, 247, 0.15);
    --color-border-soft: rgba(230, 235, 247, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #687eaf;     
    --color-primary-soft: rgba(104, 120, 175, 0.6);
    --color-primary-mute: rgba(104, 134, 175, 0.2);

    --color-background: #e6ecf7;       
    --color-background-mute: #b3c8e8; 
    --color-background-soft: #ccdaf0;  

    --navbar-background: #f0f3f9;
    --chat-background: #f4f6fb;
    --chat-background-user: #e6ecf7;
    --chat-background-assistant: #ccd7f0;

    --color-text: #4c5e86;

    --color-hover: #eaf0f8;
    --color-active: #dfe5f5;

    --color-border: rgba(76, 92, 134, 0.12);
    --color-border-soft: rgba(76, 95, 134, 0.06);

    --color-white: #f4f6fb;
}

/* Bug fixes */
.bubble .message-user .message-action-button:hover {
  background-color: var(--color-background-mute);
}`,
}
