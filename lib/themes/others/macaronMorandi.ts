import type { Theme } from '@/lib/types'

export const macMdi: Theme = {
  id: 'mac-mdi',
  name: '马莫交织',
  description: 'mint',
  lightPreviewUrl: '/macMdi.png',
  darkPreviewUrl: '/macMdi.png',
  css: `/*
========================
马卡龙与莫兰迪 (Macaron & Morandi)
========================
主题灵感源于白天马卡龙般的明亮活泼与夜晚莫兰迪色系的清新典雅。
白天模式采用柔和、甜美的马卡龙色系，带来轻松愉悦的感受。
夜晚模式则转换至低饱和度的莫兰迪色系，营造宁静、高级的氛围。
*/

/* Root variables (global across light/dark modes) */
:root {
    /* 基础颜色 - 在两种模式下都可能被引用但具体值不同 */
    --color-white-soft: #FFFFFF;
    --color-black-soft: #38423F; /* 深色，可能在边框或次要元素中出现 */

    /* 主色（强调色）及其变体 */
    --color-primary: #87CEEB; /* 浅天蓝色，作为主强调色，在两种模式下可能调整饱和度或亮度 */
    --color-primary-soft: rgba(135, 206, 235, 0.6); /* 柔和版主色 */
    --color-primary-mute: rgba(135, 206, 235, 0.2); /* 静音版主色 */
}

/* ===== 白天模式变量 (Light Mode Variables - 马卡龙色系) ===== */
body[theme-mode="light"] {
    /* 主背景色 - 从最浅到中等 */
    --color-background: #F0F8FF;       /* 淡蓝色，如马卡龙般清爽的背景 */
    --color-background-mute: #E8F5FF;  /* 略深一点的淡蓝色 */
    --color-background-soft: #DFF0FF;  /* 中等淡蓝色 */

    /* 聊天界面颜色 */
    --navbar-background-mac: rgba(240, 248, 255, 0.9); /* 半透明导航栏 */
    --navbar-background: #F0F8FF;      /* 导航栏背景 */
    --chat-background: #F8FFFF;        /* 主要聊天区域背景 - 最亮的色调 */
    --chat-background-user: #FFF5EE;   /* 用户消息气泡 - 柔和的藕粉色 */
    --chat-background-assistant: #E0FFFF; /* 助手消息气泡 - 浅青色，像薄荷马卡龙 */

    /* 文本颜色 */
    --color-text: #465A68;             /* 深蓝色系，确保可读性 */
    --chat-text-user: #465A68;         /* 用户消息文本 */

    /* 互动状态 */
    --color-hover: #E6F3F9;            /* 悬停状态 - 细微的浅色高亮 */
    --color-active: #D9ECF4;           /* 激活/选中状态 */

    /* 边框颜色 */
    --color-border: rgba(70, 90, 104, 0.1);     /* 柔和的边框 */
    --color-border-soft: rgba(70, 90, 104, 0.05); /* 更柔和的边框 */

    /* 通用白色变量（常用作背景） */
    --color-white: #F8FFFF;            /* 最亮的背景色 */

    /* 调整白天模式下的主强调色 */
    --color-primary: #F7CAC9;         /* 柔和的珊瑚粉色，马卡龙色系强调 */
    --color-primary-soft: rgba(247, 202, 201, 0.6);
    --color-primary-mute: rgba(247, 202, 201, 0.2);
}

/* 白天模式下内容容器背景 - 重要！ */
body[theme-mode="light"] #content-container {
    background-color: var(--chat-background) !important;
}

/* 白天模式下可折叠组件样式 */
body[theme-mode="light"] .ant-collapse {
    background-color: #F8F0F3; /* 浅粉色，与马卡龙色系协调 */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: var(--color-background-soft);
}

/* ===== DARK MODE VARIABLES (Morandi Palette) ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #3A4151;       /* Deep Morandi blue-gray */
    --color-background-mute: #434A59;  /* Slightly lighter blue-gray */
    --color-background-soft: #4E5565;  /* Medium muted blue-gray */

    /* Chat interface colors */
    --navbar-background-mac: rgba(58, 65, 81, 0.8); /* Semi-transparent navbar */
    --navbar-background: #3A4151;      /* Navigation bar background */
    --chat-background: #3A4151;        /* Main chat area background */
    --chat-background-user: #5C4B51;   /* User message bubble - Muted dusty rose */
    --chat-background-assistant: #4E544F; /* Assistant message - Muted sage green */

    /* Text colors */
    --chat-text-user: #EAE6F0;         /* Soft, elegant off-white text */
    --color-text: #EAE6F0;             /* General text color */

    /* Interactive states */
    --color-hover: #4A5160;             /* Hover state - subtle highlight */
    --color-active: #565E6E;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(234, 230, 240, 0.15);      /* Visible but subtle border */
    --color-border-soft: rgba(234, 230, 240, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #434A59 !important; /* Matches background-mute */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #4E5565; /* Darker Morandi tone */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #434A59; /* Matches background-mute */
}

/* Bug fixes (保持不变或根据需要调整) */
.bubble .message-user .message-action-button:hover {
  background-color: var(--color-background-mute);
}
body[theme-mode="dark"]{
    --color-list-item: var(--color-background-soft) !important;
    --color-list-item-hover: var(--color-background-soft) !important;
}
body[theme-mode="light"]{
    --color-list-item: var(--color-background-soft) !important;
    --color-list-item-hover: var(--color-background-soft) !important;
}`
}
