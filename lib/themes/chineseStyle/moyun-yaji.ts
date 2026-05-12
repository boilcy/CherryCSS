import type { Theme } from '@/lib/types'

export const moyunYaji: Theme = {
  id: 'moyun-yaji',
  name: '墨韵-雅集',
  description: 'Light theme inspired by traditional Chinese calligraphy',
  lightPreviewUrl: '/moyun-yaji.png',
  darkPreviewUrl: '/moyun-yaji.png',
  css: `/* ═══════════════════════════════════════════════════════════════
   ▌  墨韵·雅集  — 古朴儒雅东方主题
   ▌  Mò Yùn · Yǎ Jí  — Ink Charm · Elegant Gathering
   ▌
   ▌  色彩体系基于中国传统色：
   ▌    水墨 / 宣纸 / 竹青 / 黛蓝 / 赭石 / 琥珀
   ▌    藕荷 / 松花 / 玉色 / 铅白 / 鸦青 / 古铜 / 朱砂
   ═══════════════════════════════════════════════════════════════ */

/* ── 字体导入 ── */

@import url("https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap");
@import url("https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Fira+Code:wght@400;500&display=swap");


/* ── 关键帧动画 ── */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-12px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes gentlePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

@keyframes breathe {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

@keyframes inkGlow {
  0%, 100% {
    box-shadow: 0 0 4px rgba(var(--ochre-rgb), 0.3),
                0 0 8px rgba(var(--ochre-rgb), 0.15),
                inset 0 0 0 1px rgba(var(--ochre-rgb), 0.2);
  }
  50% {
    box-shadow: 0 0 8px rgba(var(--ochre-rgb), 0.5),
                0 0 16px rgba(var(--ochre-rgb), 0.25),
                0 0 24px rgba(var(--amber-rgb), 0.1),
                inset 0 0 0 1px rgba(var(--ochre-rgb), 0.35);
  }
}


/* ── 全局变量 ── */
:root {
  --font-primary: "LXGW WenKai Screen", "Noto Serif SC", "EB Garamond", serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  --corner-s: 6px;
  --corner-m: 10px;
  --corner-l: 14px;
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-bold: 600;
  --stroke-w: 1px;
  --trans-lift: translateY(-2px);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-ink: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --trans-interactive: transform 0.3s var(--ease-smooth), box-shadow 0.3s var(--ease-smooth), background-color 0.3s var(--ease-smooth), border-color 0.3s var(--ease-smooth), color 0.3s var(--ease-smooth);
  --trans-interactive-fast: transform 0.25s var(--ease-smooth), box-shadow 0.25s var(--ease-smooth), background-color 0.25s var(--ease-smooth), border-color 0.25s var(--ease-smooth), color 0.25s var(--ease-smooth);
  --trans-interactive-slow: transform 0.35s var(--ease-smooth), box-shadow 0.35s var(--ease-smooth), background-color 0.35s var(--ease-smooth), border-color 0.35s var(--ease-smooth), color 0.35s var(--ease-smooth), opacity 0.35s var(--ease-smooth);
  --trans-color:      background-color 0.3s var(--ease-smooth), border-color 0.3s var(--ease-smooth), color 0.3s var(--ease-smooth);
  --trans-color-fast: background-color 0.25s var(--ease-smooth), border-color 0.25s var(--ease-smooth), color 0.25s var(--ease-smooth);

  --color-list-item:        rgba(var(--ochre-rgb), 0.35) !important;
  --color-list-item-hover:  var(--xuan-ivory) !important;
  --color-list-item-active: rgba(var(--ochre-rgb), 0.35) !important;
}

/* ═══════════════════════════════════════════════════════
   ▌ GPU 渲染优化
   ▌ 仅对触发 transform/opacity 动画的元素声明 will-change
   ═══════════════════════════════════════════════════════ */

.ant-badge-count,
.cm-cursor {
  will-change: transform, opacity;
}

.bubble:not(.multi-select-mode) .message-content-container,
.ant-collapse-item,
.ant-notification-notice,
.ant-alert {
  will-change: transform, opacity;
}

.bubble:not(.multi-select-mode) .message-content-container {
  animation: fadeIn 0.4s var(--ease-ink) forwards;
}

.ant-card,
.ant-back-top,
.markdown img {
  will-change: transform;
}

/* ═══════════════════════════════════════════════════════
   ▌ 日间模式 · 晴窗映墨
   ▌ 主基调：温润宣纸底色 + 水墨深灰文字 + 竹青黛蓝点缀
   ═══════════════════════════════════════════════════════ */
body[theme-mode="light"] {
  --ink-dark:        rgb(45, 40, 36);
  --ink-dark-rgb:    45, 40, 36;
  --ink-medium:      rgb(85, 78, 72);
  --ink-medium-rgb:  85, 78, 72;
  --ink-light:       rgb(145, 135, 125);
  --ink-light-rgb:   145, 135, 125;

  --xuan-paper:      rgb(250, 248, 244);
  --xuan-paper-rgb:  250, 248, 244;
  --xuan-warm:       rgb(245, 240, 232);
  --xuan-warm-rgb:   245, 240, 232;
  --xuan-ivory:      rgb(238, 232, 220);
  --xuan-ivory-rgb:  238, 232, 220;

  --bamboo-deep:      rgb(78, 128, 80);
  --bamboo-deep-rgb: 78, 128, 80;
  --bamboo:          rgb(106, 160, 104);
  --bamboo-rgb:      106, 160, 104;
  --bamboo-light:    rgb(162, 200, 150);
  --bamboo-light-rgb:162, 200, 150;

  --indigo-deep:     rgb(58, 84, 108);
  --indigo-deep-rgb: 58, 84, 108;
  --indigo:          rgb(82, 115, 142);
  --indigo-rgb:      82, 115, 142;
  --indigo-light:    rgb(140, 168, 190);
  --indigo-light-rgb:140, 168, 190;

  --ochre-deep:      rgb(158, 118, 72);
  --ochre-deep-rgb:  158, 118, 72;
  --ochre:           rgb(192, 155, 105);
  --ochre-rgb:       192, 155, 105;
  --ochre-light:     rgb(222, 198, 160);
  --ochre-light-rgb: 222, 198, 160;

  --amber:           rgb(180, 140, 60);
  --amber-rgb:       180, 140, 60;
  --amber-light:     rgb(216, 185, 110);
  --amber-light-rgb: 216, 185, 110;

  --cinnabar:        rgb(198, 65, 55);
  --cinnabar-rgb:    198, 65, 55;

  --lotus:           rgb(160, 135, 155);
  --lotus-rgb:       160, 135, 155;
  --lotus-light:     rgb(200, 180, 190);
  --lotus-light-rgb: 200, 180, 190;

  /* ── 语义映射 ── */
  --color-black:          var(--ink-dark);
  --color-black-rgb:      var(--ink-dark-rgb);
  --color-white:          var(--xuan-paper);
  --color-white-rgb:      var(--xuan-paper-rgb);
  --color-text-1:         var(--ink-dark);
  --color-text-2:         var(--ink-medium);
  --color-line-subtle:    var(--ink-light);
  --color-collapse:       var(--xuan-warm);
  --color-background:     transparent;

  --navbar-background:    var(--xuan-warm);
  --chat-background:      var(--ochre);
  --chat-background-user: var(--amber);
  --chat-background-assistant: var(--xuan-ivory);
  --chat-text-user:       var(--xuan-paper);
  --chat-customize-codeHeader: var(--ink-medium);
  --chat-customize-collapse-background: rgba(var(--ochre-light-rgb), 0.3);
  --antd-arrow-background-color: rgba(var(--xuan-warm-rgb), 0.98);

  --chat-customize-box-shadow:  0 1px 4px rgba(var(--ink-dark-rgb), 0.08);
  --chat-customize-box-shadow2: 0 2px 6px rgba(var(--ink-dark-rgb), 0.06);
  --chat-customize-box-shadow3: 0 1px 3px rgba(var(--ink-dark-rgb), 0.06);
  --chat-customize-box-shadow4: 0 1px 2px rgba(var(--ink-dark-rgb), 0.05);

  /* ── 层级背景 ── */
  --display-1: #faf8f4;
  --display-2: #f0ece4;
  --display-3: #e8e2d8;
  --display-4: #f5f0e8;
  background-color: var(--display-4) !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 夜间模式 · 夜墨映月
   ▌ 主基调：深黛底色 + 冷月银灰文字 + 暗琥珀点缀
   ═══════════════════════════════════════════════════════ */
body[theme-mode="dark"] {
  /* ── 深色主色 ── */
  --ink-dark:        rgb(215, 210, 202);
  --ink-dark-rgb:    215, 210, 202;
  --ink-medium:      rgb(170, 162, 152);
  --ink-medium-rgb:  170, 162, 152;
  --ink-light:       rgb(110, 104, 96);
  --ink-light-rgb:   110, 104, 96;

  --xuan-paper:      rgb(38, 35, 32);
  --xuan-paper-rgb:  38, 35, 32;
  --xuan-warm:       rgb(45, 41, 37);
  --xuan-warm-rgb:   45, 41, 37;
  --xuan-ivory:      rgb(52, 47, 42);
  --xuan-ivory-rgb:  52, 47, 42;

  --bamboo-deep:     rgb(82, 138, 90);
  --bamboo-deep-rgb: 82, 138, 90;
  --bamboo:          rgb(62, 108, 68);
  --bamboo-rgb:      62, 108, 68;
  --bamboo-light:    rgb(88, 130, 90);
  --bamboo-light-rgb:88, 130, 90;

  --indigo-deep:     rgb(115, 148, 175);
  --indigo-deep-rgb: 115, 148, 175;
  --indigo:          rgb(68, 98, 125);
  --indigo-rgb:      68, 98, 125;
  --indigo-light:    rgb(88, 115, 140);
  --indigo-light-rgb:88, 115, 140;

  --ochre-deep:      rgb(170, 135, 90);
  --ochre-deep-rgb:  170, 135, 90;
  --ochre:           rgb(138, 108, 72);
  --ochre-rgb:       138, 108, 72;
  --ochre-light:     rgb(155, 130, 95);
  --ochre-light-rgb: 155, 130, 95;

  --amber:           rgb(185, 155, 85);
  --amber-rgb:       185, 155, 85;
  --amber-light:     rgb(150, 128, 75);
  --amber-light-rgb: 150, 128, 75;

  --cinnabar:        rgb(210, 80, 70);
  --cinnabar-rgb:    210, 80, 70;

  --lotus:           rgb(150, 128, 148);
  --lotus-rgb:       150, 128, 148;
  --lotus-light:     rgb(118, 100, 115);
  --lotus-light-rgb: 118, 100, 115;

  /* ── 语义映射 ── */
  --color-black:          var(--ink-dark);
  --color-black-rgb:      var(--ink-dark-rgb);
  --color-white:          var(--xuan-paper);
  --color-white-rgb:      var(--xuan-paper-rgb);
  --color-text-1:         var(--ink-dark);
  --color-text-2:         var(--ink-medium);
  --color-line-subtle:    var(--ink-light);
  --color-collapse:       var(--xuan-ivory);
  --color-background:     transparent;

  --navbar-background:    var(--xuan-warm);
  --chat-background:      var(--ochre);
  --chat-background-user: var(--amber);
  --chat-background-assistant: var(--xuan-ivory);
  --chat-text-user:       var(--xuan-paper);
  --chat-customize-codeHeader: var(--ink-medium);
  --chat-customize-collapse-background: rgba(var(--ochre-rgb), 0.2);
  --antd-arrow-background-color: rgba(var(--xuan-warm-rgb), 0.98);

  --chat-customize-box-shadow:  0 1px 4px rgba(0, 0, 0, 0.15);
  --chat-customize-box-shadow2: 0 2px 6px rgba(0, 0, 0, 0.12);
  --chat-customize-box-shadow3: 0 1px 3px rgba(0, 0, 0, 0.10);
  --chat-customize-box-shadow4: 0 1px 2px rgba(0, 0, 0, 0.08);

  /* ── 层级背景 ── */
  --display-1: #2a2622;
  --display-2: #33302b;
  --display-3: #2d2a25;
  --display-4: #302c27;
  background-color: var(--display-4) !important;
}


/* ── 全局基础 ── */
body {
  font-family: var(--font-primary) !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div[class^="EmojiBackground-"] {
  background: var(--color-white);
  mix-blend-mode: screen;
}


/* ═══════════════════════════════════════════════════════
   ▌ 布局组件
   ═══════════════════════════════════════════════════════ */

#app-sidebar {
  border-right: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.3) !important;
  background-color: var(--display-2) !important;
}

#content-container {
  border-radius: 0 !important;
}

[class^="Main-ujGUI"] {
  border-left: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-right: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  background-color: var(--display-1) !important;
}

.home-navbar,
div[class^="NavbarContainer-"] {
  border-bottom: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.25) !important;
  background-color: var(--navbar-background) !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 消息气泡 — 如宣纸题字
   ═══════════════════════════════════════════════════════ */

.bubble:not(.multi-select-mode) .message-content-container,
.bubble:not(.multi-select-mode) .message-assistant .message-content-container {
  border-radius: var(--corner-m);
  padding: 12px 18px;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  color: var(--color-black);
  box-shadow: var(--chat-customize-box-shadow);
  transition: var(--trans-interactive-slow);
}

.bubble:not(.multi-select-mode) .message-assistant .MessageFooter {
  margin: 3px 0;
}

/* ── 用户消息 ── */
.bubble:not(.multi-select-mode) .message-user .message-content-container {
  background-color: var(--chat-background-user);
  color: var(--chat-text-user);
}

/* ── AI 消息 ── */
.bubble:not(.multi-select-mode) .message-assistant .message-content-container {
  background-color: var(--chat-background-assistant);
  color: var(--color-text-1);
}

/* ── 消息时间戳 ── */
div[class^="MessageTime-"] {
  color: var(--ink-medium);
  padding: 0 0 2px;
  font-size: 0.88em;
  opacity: 0.7;
}

/* ── 消息头部标签 ── */
div[class^="Container-"] .message-header {
  border-radius: var(--corner-m);
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.25) !important;
  box-shadow: var(--chat-customize-box-shadow2);
  background-color: var(--amber);
  color: var(--color-white) !important;
  padding: 2px 0 0;
  font-size: 1.05em;
}


/* ═══════════════════════════════════════════════════════
   ▌ 输入框 — 砚台研墨
   ═══════════════════════════════════════════════════════ */

.ant-input-outlined {
  border-radius: var(--corner-m) !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.25);
}

#inputbar.inputbar-container {
  background: linear-gradient(
    135deg,
    rgba(var(--ochre-light-rgb), 0.18),
    rgba(var(--xuan-warm-rgb), 0.95) 40%,
    rgba(var(--ochre-light-rgb), 0.12)
  );
  border: var(--stroke-w) solid rgba(var(--ochre-rgb), 0.2);
  padding: 10px;
  box-shadow:
    var(--chat-customize-box-shadow2),
    inset 0 1px 0 rgba(var(--xuan-paper-rgb), 0.5),
    inset 0 -1px 0 rgba(var(--ink-light-rgb), 0.06);
  margin-top: 6px;
  border-radius: var(--corner-m);
  backdrop-filter: blur(4px);
}

input,
textarea {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-m) !important;
  font-family: var(--font-primary) !important;
  transition: var(--trans-interactive-slow);
  background-color: rgba(var(--xuan-paper-rgb), 0.6);
  color: var(--color-text-1);
}

input:focus,
textarea:focus {
  border-color: var(--amber) !important;
  box-shadow: 0 0 0 3px rgba(var(--amber-rgb), 0.15);
  background-color: rgba(var(--xuan-paper-rgb), 0.9);
}

div[class^="Tag-"] {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  color: var(--ink-dark);
  border-radius: var(--corner-s);
  margin-bottom: 3px;
  background: rgba(var(--ochre-light-rgb), 0.15);
}


/* ═══════════════════════════════════════════════════════
   ▌ 话题列表 — 竹简铺陈
   ═══════════════════════════════════════════════════════ */

/* ── 话题列表项基础样式 ── */
.draggable-item div.ant-dropdown-trigger {
  position: relative;
  overflow: visible !important;
  margin: 5px 3px !important;
  padding: 8px 12px !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m) !important;
  background: rgba(var(--xuan-paper-rgb), 0.3) !important;
  color: var(--color-text-2) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-normal) !important;
  transition: all 0.3s var(--ease-ink);
}

/* ── 悬停 ── */
.draggable-item div.ant-dropdown-trigger:hover {
  background: var(--xuan-ivory) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--ochre-rgb), 0.2),
              0 0 8px rgba(var(--amber-rgb), 0.1);
  border-color: rgba(var(--ochre-rgb), 0.3) !important;
}

/* ── 选中 ── */
.draggable-item div.ant-dropdown-trigger.active {
  background: rgba(var(--ochre-rgb), 0.35) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  border: 2px solid var(--ochre) !important;
  box-shadow: 0 0 6px rgba(var(--ochre-rgb), 0.25),
              0 0 12px rgba(var(--ochre-rgb), 0.1),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.15);
  transform: translateX(3px);
}

/* ── 选中 + 悬停 ── */
.draggable-item div.ant-dropdown-trigger.active:hover {
  background: rgba(var(--ochre-rgb), 0.45) !important;
  box-shadow: 0 0 10px rgba(var(--ochre-rgb), 0.35),
              0 0 20px rgba(var(--amber-rgb), 0.15),
              0 4px 16px rgba(var(--ochre-rgb), 0.2),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.25);
  transform: translateX(3px) translateY(-2px);
}

/* ── 话题标题文字 ── */
.draggable-item div.ant-dropdown-trigger div[title] {
  font-family: var(--font-primary) !important;
}

/* ── 话题时间戳 ── */
.draggable-item div.ant-dropdown-trigger div.time {
  color: var(--ink-light) !important;
  font-size: 0.85em !important;
  opacity: 0.7;
}

/* ── 补充背景色 ── */
div[class^="ImagePlaceholder-"],
div[class^="Canvas-"],
div[class^="OutputContainer-"],
div[class^="EditorWrapper-"],
div[class^="AddButton"],
div[class^="NewPaintingButton-"],
div[class^="SettingContent-"] {
  background-color: rgba(var(--xuan-warm-rgb), 0.4);
}

div[class^="AddTopicButton-"],
div[class^="AssistantAddItem-"] {
  border: var(--stroke-w) dashed rgba(var(--ink-light-rgb), 0.35);
  border-radius: var(--corner-m);
  transition: var(--trans-color);
}

div[class^="AddTopicButton-"]:hover,
div[class^="AssistantAddItem-"]:hover {
  border-color: var(--amber);
  background: rgba(var(--amber-light-rgb), 0.1);
}

.topics-count {
  font-size: 1em;
}


/* ═══════════════════════════════════════════════════════
   ▌ 侧边栏图标 — 印章点朱
   ═══════════════════════════════════════════════════════ */

#app-sidebar [class^="Icon-"] {
  background: transparent !important;
  color: var(--ink-medium);
  margin: 4px 4px 2px;
  position: relative;
  border-radius: var(--corner-s);
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  transition: var(--trans-interactive-slow);
}

#app-sidebar [class^="Icon-"].active {
  box-shadow: 0 2px 8px rgba(var(--ochre-rgb), 0.15) !important;
  background: rgba(var(--ochre-rgb), 0.3) !important;
  color: var(--ochre-deep) !important;
  border-color: rgba(var(--ochre-rgb), 0.4) !important;
}

#app-sidebar [class^="Icon-"]:hover {
  box-shadow: 0 2px 8px rgba(var(--ink-dark-rgb), 0.1) !important;
  background: rgba(var(--amber-light-rgb), 0.25) !important;
  color: var(--amber) !important;
  border-color: rgba(var(--amber-rgb), 0.3) !important;
  transform: var(--trans-lift);
}

#app-sidebar [class^="Icon-"]:hover svg,
#app-sidebar [class^="Icon-"].active svg {
  color: inherit !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 导航栏
   ═══════════════════════════════════════════════════════ */

/* ── 底部图标 ── */
div[class^="NavbarIcon-"],
div[class*="sc-dhTHNW"],
div[class*="sc-hDLGov"] {
  position: relative;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s);
  background: transparent;
  transition: var(--trans-interactive-slow);
  cursor: pointer;
}

div[class^="NavbarIcon-"]:hover,
div[class*="sc-dhTHNW"]:hover,
div[class*="sc-hDLGov"]:hover {
  background: rgba(var(--ochre-light-rgb), 0.15);
  border-color: rgba(var(--ochre-rgb), 0.25) !important;
  transform: var(--trans-lift);
  box-shadow: 0 2px 6px rgba(var(--ink-dark-rgb), 0.06);
}

div[class^="NavbarIcon-"]:hover svg,
div[class*="sc-dhTHNW"]:hover svg,
div[class*="sc-hDLGov"]:hover svg {
  color: var(--ochre-deep) !important;
}

/* ── 导航项 ── */
div[class*="sc-idJDOs"] {
  position: relative;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12) !important;
  border-radius: var(--corner-m);
  background: rgba(var(--xuan-paper-rgb), 0.3);
  transition: all 0.3s var(--ease-ink);
  cursor: pointer;
}

div[class*="sc-idJDOs"] span[class*="sc-efcRga"] {
  font-family: var(--font-primary) !important;
  transition: all 0.3s var(--ease-ink);
}

div[class*="sc-idJDOs"] svg {
  transition: all 0.3s var(--ease-ink);
}

/* ── 悬停 ── */
div[class*="sc-idJDOs"]:hover {
  background: var(--xuan-ivory) !important;
  border-color: rgba(var(--ochre-rgb), 0.25) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--ochre-rgb), 0.15),
              0 0 0 1px rgba(var(--ochre-rgb), 0.1);
}

div[class*="sc-idJDOs"]:hover span[class*="sc-efcRga"] {
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
}

div[class*="sc-idJDOs"]:hover svg {
  color: var(--ochre-deep) !important;
}

/* ── 选中 ── */
div[class*="sc-idJDOs"].active,
div[class*="sc-idJDOs"][class*="bg-"] {
  background: rgba(var(--ochre-rgb), 0.35) !important;
  border: 2px solid var(--ochre) !important;
  box-shadow: 0 0 6px rgba(var(--ochre-rgb), 0.25),
              0 0 12px rgba(var(--ochre-rgb), 0.1),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.15);
  transform: translateX(3px);
}

div[class*="sc-idJDOs"].active span[class*="sc-efcRga"],
div[class*="sc-idJDOs"][class*="bg-"] span[class*="sc-efcRga"] {
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
}

div[class*="sc-idJDOs"].active svg,
div[class*="sc-idJDOs"][class*="bg-"] svg {
  color: var(--ochre-deep) !important;
}

/* ── 选中 + 悬停 ── */
div[class*="sc-idJDOs"].active:hover,
div[class*="sc-idJDOs"][class*="bg-"]:hover {
  background: rgba(var(--ochre-rgb), 0.45) !important;
  box-shadow: 0 0 10px rgba(var(--ochre-rgb), 0.35),
              0 0 20px rgba(var(--amber-rgb), 0.15),
              0 4px 16px rgba(var(--ochre-rgb), 0.2),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.25);
  transform: translateX(3px) translateY(-2px);
}


/* ═══════════════════════════════════════════════════════
   ▌ 按钮通用 — 琴键轻触
   ═══════════════════════════════════════════════════════ */

button,
.message-action-button,
.ant-btn.ant-btn-circle.ant-btn {
  position: relative;
  transition: var(--trans-interactive-slow);
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s);
  background: rgba(var(--xuan-paper-rgb), 0.6);
  color: var(--color-text-1);
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
  margin-top: 4px;
}

button:hover,
.message-action-button:hover,
.ant-btn.ant-btn-circle.ant-btn:hover {
  background: rgba(var(--amber-light-rgb), 0.2) !important;
  border-color: rgba(var(--amber-rgb), 0.3) !important;
  color: var(--amber) !important;
  transform: var(--trans-lift);
  box-shadow: 0 2px 8px rgba(var(--ink-dark-rgb), 0.08) !important;
}

button:active {
  transform: translateY(0);
  box-shadow: none !important;
}

div[class^="VisibleTools-"],
.menubar.show {
  overflow: visible;
}


/* ═══════════════════════════════════════════════════════
   ▌ 折叠面板 — 卷轴舒展
   ═══════════════════════════════════════════════════════ */

.ant-collapse {
  background: transparent !important;
  border: none !important;
}

.ant-collapse-item {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m) !important;
  margin-bottom: 10px;
  overflow: visible !important;
  transition: all 0.3s var(--ease-ink);
  background: var(--color-white);
}

.ant-collapse-item:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(var(--ochre-rgb), 0.08),
              0 0 0 1px rgba(var(--ochre-rgb), 0.1);
  border-color: rgba(var(--ochre-rgb), 0.2) !important;
}

.ant-collapse-item:has(.ant-collapse-content-active) {
  border-color: rgba(var(--ochre-rgb), 0.25) !important;
  box-shadow: 0 1px 4px rgba(var(--ochre-rgb), 0.06),
              0 0 0 1px rgba(var(--ochre-rgb), 0.08);
}

.ant-collapse-item:has(.ant-collapse-content-active):hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 10px rgba(var(--ochre-rgb), 0.12),
              0 0 0 1px rgba(var(--ochre-rgb), 0.18);
  border-color: rgba(var(--ochre-rgb), 0.3) !important;
}

.ant-collapse-header {
  background: rgba(var(--ochre-rgb), 0.12) !important;
  color: var(--color-text-1) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
  border-bottom: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.1) !important;
  border-radius: var(--corner-m) var(--corner-m) 0 0 !important;
  transition: background 0.3s var(--ease-ink);
}

.ant-collapse-item:hover .ant-collapse-header {
  background: rgba(var(--ochre-rgb), 0.18) !important;
}

.ant-collapse-item:has(.ant-collapse-content-active) .ant-collapse-header {
  background: rgba(var(--ochre-rgb), 0.15) !important;
  border-bottom-color: rgba(var(--ochre-rgb), 0.15) !important;
}

.ant-collapse-content {
  background: var(--color-collapse) !important;
  border-top: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.1) !important;
  border-radius: 0 0 var(--corner-m) var(--corner-m) !important;
}

/* 展开时水墨扩散效果 */
.ant-collapse-content-active .ant-collapse-content-box {
  animation: inkDiffuse 0.8s var(--ease-ink) forwards;
}

.ant-collapse-content-box {
  padding: 12px 16px !important;
  /* 宣纸纹理 */
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 4px,
      rgba(var(--ink-light-rgb), 0.01) 4px,
      rgba(var(--ink-light-rgb), 0.01) 8px
    );
}


/* ═══════════════════════════════════════════════════════
   ▌ 装饰动画 — 卷轴 · 墨韵 · 祥云 · 印章
   ═══════════════════════════════════════════════════════ */

/* ── 卷轴展开入场动画 ── */
@keyframes scrollUnroll {
  0% {
    transform: scaleX(0) translateY(8px);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scaleX(1) translateY(0);
    opacity: 1;
  }
}

/* ── 墨迹晕染文字 ── */
@keyframes inkBleed {
  0% {
    text-shadow: 0 0 0 transparent;
  }
  100% {
    text-shadow:
      0 0 3px rgba(var(--ink-dark-rgb), 0.08),
      0 0 6px rgba(var(--ink-dark-rgb), 0.04),
      1px 1px 0 rgba(var(--ink-dark-rgb), 0.02);
  }
}

/* ── 祥云漂浮 ── */
@keyframes cloudFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.05; }
  25%      { transform: translateY(-3px) translateX(2px); opacity: 0.08; }
  50%      { transform: translateY(-1px) translateX(-1px); opacity: 0.05; }
  75%      { transform: translateY(-4px) translateX(1px); opacity: 0.09; }
}

/* ── 印章盖印 ── */
@keyframes sealStamp {
  0%   { transform: translateY(-50%) scale(1.8) rotate(-20deg); opacity: 0; }
  50%  { transform: translateY(-50%) scale(0.9) rotate(-3deg); opacity: 0.9; }
  100% { transform: translateY(-50%) scale(1) rotate(-5deg); opacity: 0.65; }
}

/* ── 水墨扩散（折叠面板展开）── */
@keyframes inkDiffuse {
  0% {
    background: radial-gradient(circle at 50% 0%, rgba(var(--ochre-rgb), 0.15) 0%, transparent 0%);
  }
  100% {
    background: radial-gradient(circle at 50% 0%, rgba(var(--ochre-rgb), 0.08) 0%, transparent 70%);
  }
}


/* ═══════════════════════════════════════════════════════
   ▌ H1 标题 — 卷轴展开 · 墨韵书法
   ═══════════════════════════════════════════════════════ */

.markdown h1,
.bubble .message-content-container h1 {
  font-family: var(--font-primary) !important;
  font-size: 1.7em;
  font-weight: var(--fw-bold);
  color: var(--color-text-1);

  /* 宣纸纹理 + 渐变底色 */
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(var(--ink-light-rgb), 0.015) 3px,
      rgba(var(--ink-light-rgb), 0.015) 6px
    ),
    linear-gradient(135deg,
      rgba(var(--ochre-rgb), 0.12) 0%,
      rgba(var(--amber-light-rgb), 0.08) 50%,
      rgba(var(--ochre-rgb), 0.10) 100%
    );

  /* 渐变边框（兼容圆角）*/
  background-clip: padding-box;
  border: 2px solid transparent;
  position: relative;
  border-radius: var(--corner-l);
  padding: 16px 40px 16px 44px;
  margin: 24px 0 18px;
  overflow: visible !important;
  transform-origin: left center;

  /* 入场动画：卷轴从左向右展开 */
  animation:
    scrollUnroll 0.7s var(--ease-ink) forwards,
    inkBleed 1.5s var(--ease-ink) 0.4s forwards;

  will-change: transform, opacity, box-shadow;
  transition: all 0.4s var(--ease-ink);
}

/* 渐变边框伪元素层 */
.markdown h1::before,
.bubble .message-content-container h1::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: calc(var(--corner-l) + 2px);
  background: linear-gradient(135deg,
    var(--ochre) 0%,
    var(--amber) 30%,
    var(--ochre-deep) 60%,
    var(--ochre) 100%
  );
  z-index: -1;
  opacity: 0.3;
  transition: opacity 0.4s var(--ease-ink);
}

/* 祥云纹样 — 左上角水印 */
.markdown h1::after,
.bubble .message-content-container h1::after {
  content: "";
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23c09b69' stroke-width='1.2' stroke-linecap='round'%3E%3Cpath d='M6 16c-1.1 0-2-.9-2-2 0-.7.4-1.4 1-1.7C4.4 11.5 4 10.3 4 9c0-2.2 1.8-4 4-4 .8 0 1.5.2 2.1.6C10.8 4.5 11.8 4 13 4c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2 .6.3 1 .9 1 1.6 0 1.1-.9 2-2 2H6z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  animation: cloudFloat 7s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
}

/* 悬停：墨韵重燃 */
.markdown h1:hover,
.bubble .message-content-container h1:hover {
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(var(--ink-light-rgb), 0.02) 3px,
      rgba(var(--ink-light-rgb), 0.02) 6px
    ),
    linear-gradient(135deg,
      rgba(var(--ochre-rgb), 0.2) 0%,
      rgba(var(--amber-light-rgb), 0.15) 50%,
      rgba(var(--ochre-rgb), 0.18) 100%
    );
  transform: translateY(-2px);
  box-shadow:
    0 6px 20px rgba(var(--ochre-rgb), 0.18),
    0 0 0 1px rgba(var(--ochre-rgb), 0.12),
    inset 0 0 30px rgba(var(--ochre-rgb), 0.04);
}

.markdown h1:hover::before,
.bubble .message-content-container h1:hover::before {
  opacity: 0.5;
}

.markdown h2,
.bubble .message-content-container h2 {
  font-family: var(--font-primary) !important;
  font-size: 1.4em;
  font-weight: var(--fw-bold);
  color: var(--color-text-1);
  background: rgba(var(--ochre-rgb), 0.08);
  border-left: 4px solid var(--ochre);
  border-radius: 0 var(--corner-s) var(--corner-s) 0;
  padding: 12px 20px 12px 16px;
  margin: 20px 0 14px;
  position: relative;
  transition: var(--trans-interactive-slow);
}

.markdown h2::after,
.bubble .message-content-container h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, var(--ochre), transparent);
  opacity: 0.3;
  transition: opacity 0.35s var(--ease-smooth), height 0.35s var(--ease-smooth);
}

/* ── 标题悬停动效 ── */
.markdown h2:hover,
.bubble .message-content-container h2:hover {
  background: rgba(var(--ochre-rgb), 0.15);
  border-left-color: var(--amber);
}

.markdown h2:hover::after,
.bubble .message-content-container h2:hover::after {
  opacity: 0.8;
  height: 2px;
}

.markdown h3,
.bubble .message-content-container h3 {
  font-family: var(--font-primary) !important;
  font-size: 1.25em;
  font-weight: var(--fw-bold);
  color: var(--color-text-1);
  background: rgba(var(--amber-rgb), 0.08);
  border-left: 3px solid var(--amber);
  border-radius: 0 var(--corner-s) var(--corner-s) 0;
  padding: 10px 18px 10px 14px;
  margin: 18px 0 12px;
  transition: var(--trans-interactive-slow);
}

.markdown h3:hover,
.bubble .message-content-container h3:hover {
  background: rgba(var(--amber-rgb), 0.15);
  transform: translateX(4px) scale(1.01);
}

.markdown h4,
.bubble .message-content-container h4 {
  font-family: var(--font-primary) !important;
  font-size: 1.12em;
  font-weight: var(--fw-medium);
  color: var(--color-text-1);
  border-bottom: 1px solid rgba(var(--ink-light-rgb), 0.2);
  padding: 8px 0;
  margin: 14px 0 10px;
  transition: var(--trans-interactive-slow);
}

.markdown h4:hover,
.bubble .message-content-container h4:hover {
  color: var(--ochre-deep);
  border-bottom-color: var(--ochre);
  transform: translateX(2px);
}

.markdown p {
  font-family: var(--font-primary) !important;
  line-height: 1.9;
  margin: 10px 0;
  color: var(--color-text-1);
}


/* ═══════════════════════════════════════════════════════
   ▌ 表格 — 阅卷览表
   ═══════════════════════════════════════════════════════ */

.markdown table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  margin: 16px 0;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  border-radius: var(--corner-m);
  overflow: hidden;
  transition: var(--trans-interactive-slow);
}

.markdown table:hover {
  border-color: var(--ochre);
  box-shadow: 0 4px 16px rgba(var(--ochre-rgb), 0.12);
  transform: translateY(-2px);
}

.markdown th {
  background: rgba(var(--ochre-rgb), 0.1) !important;
  color: var(--color-text-1) !important;
  padding: 12px 16px !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-bold) !important;
  font-size: 0.98em;
  text-align: center;
}

.markdown td {
  padding: 11px 16px !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12) !important;
  color: var(--color-text-1);
  font-family: var(--font-primary) !important;
  text-align: center;
  background: rgba(var(--xuan-paper-rgb), 0.4);
  transition: var(--trans-color-fast);
}

.markdown tr:nth-child(even) td {
  background: rgba(var(--xuan-warm-rgb), 0.3) !important;
}

.markdown tr:hover td {
  background: rgba(var(--amber-light-rgb), 0.15) !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 代码块 — 碑帖刻字
   ═══════════════════════════════════════════════════════ */

.markdown pre {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  border-radius: var(--corner-m);
  overflow: hidden;
  margin: 16px 0;
  box-shadow: var(--chat-customize-box-shadow2);
  transition: var(--trans-interactive-slow);
}

.markdown pre:hover {
  border-color: var(--ochre);
  box-shadow: 0 4px 16px rgba(var(--ochre-rgb), 0.15);
  transform: translateY(-2px);
}

.markdown pre [class^="CodeHeader-"] {
  background: rgba(var(--ink-medium-rgb), 0.08) !important;
  border-bottom: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  padding: 8px 16px;
  font-family: "EB Garamond", "LXGW WenKai Screen", serif !important;
  font-weight: var(--fw-medium);
  color: var(--ink-medium);
  font-size: 0.88em;
  letter-spacing: 0.03em;
}

.markdown code:not(pre code) {
  background: rgba(var(--ochre-light-rgb), 0.2) !important;
  color: var(--ochre-deep) !important;
  padding: 2px 7px;
  border-radius: 4px;
  border: var(--stroke-w) solid rgba(var(--ochre-rgb), 0.2);
  font-family: var(--font-mono) !important;
  font-size: 0.88em;
  font-weight: var(--fw-medium);
  transition: var(--trans-interactive-slow);
  display: inline-block;
}

.markdown code:not(pre code):hover {
  background: rgba(var(--ochre-rgb), 0.3) !important;
  border-color: var(--ochre);
  transform: scale(1.04);
}


/* ═══════════════════════════════════════════════════════
   ▌ 引用块 — 古籍旁注
   ═══════════════════════════════════════════════════════ */

.markdown blockquote {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-left: 3px solid var(--ochre);
  background: rgba(var(--ochre-light-rgb), 0.08) !important;
  padding: 12px 16px 12px 14px;
  margin: 16px 0;
  border-radius: 0 var(--corner-s) var(--corner-s) 0;
  box-shadow: var(--chat-customize-box-shadow3);
  font-family: var(--font-primary) !important;
  color: var(--ink-medium);
  transition: var(--trans-interactive-slow);
}

.markdown blockquote:hover {
  border-left-color: var(--amber);
  box-shadow: 0 3px 12px rgba(var(--amber-rgb), 0.15);
  transform: translateX(4px);
  background: rgba(var(--ochre-light-rgb), 0.12) !important;
}

.markdown blockquote p {
  color: var(--ink-medium);
  font-style: italic;
}


/* ═══════════════════════════════════════════════════════
   ▌ 列表 — 条目陈列
   ═══════════════════════════════════════════════════════ */

.markdown ul li::marker {
  color: var(--cinnabar);
  font-size: 1.2em;
}

.markdown ol li::marker {
  color: var(--cinnabar);
  font-weight: var(--fw-bold);
  font-size: 1.05em;
}

.markdown li {
  margin: 8px 0;
  padding: 6px 12px;
  border-radius: var(--corner-s);
  transition: var(--trans-interactive-slow);
  font-family: var(--font-primary) !important;
}

.markdown li:hover {
  transform: translateX(4px);
  background: rgba(var(--amber-light-rgb), 0.25);
  font-weight: var(--fw-bold);
  box-shadow: 0 2px 6px rgba(var(--amber-rgb), 0.15);
}


/* ═══════════════════════════════════════════════════════
   ▌ 链接和强调文本 — 朱批眉批
   ═══════════════════════════════════════════════════════ */

a {
  color: var(--ochre);
  font-weight: var(--fw-medium);
  text-decoration: none;
  border-bottom: 1px solid rgba(var(--ochre-rgb), 0.3);
  transition: var(--trans-interactive-slow);
  display: inline-block;
}

a:hover {
  color: var(--amber);
  border-bottom-color: var(--amber);
  transform: translateY(-1px);
}

.markdown strong,
.markdown b {
  font-weight: var(--fw-bold) !important;
  color: var(--ink-dark);
  background: rgba(var(--ochre-light-rgb), 0.15);
  padding: 1px 6px;
  border-radius: 3px;
  font-family: var(--font-primary) !important;
  transition: var(--trans-interactive-slow);
  display: inline-block;
}

.markdown strong:hover,
.markdown b:hover {
  background: rgba(var(--ochre-rgb), 0.25);
  transform: scale(1.02) translateY(-1px);
}

.markdown em,
.markdown i {
  font-style: italic;
  color: var(--ochre-deep);
  font-weight: var(--fw-medium);
  font-family: var(--font-primary) !important;
  transition: var(--trans-interactive-slow);
  display: inline-block;
}

.markdown em:hover,
.markdown i:hover {
  color: var(--amber);
  transform: translateY(-1px);
}


/* ═══════════════════════════════════════════════════════
   ▌ 分割线 — 一笔画墨
   ═══════════════════════════════════════════════════════ */

.markdown hr {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(var(--ink-light-rgb), 0.4),
    transparent
  );
  margin: 24px 0;
}


/* ═══════════════════════════════════════════════════════
   ▌ 图片 — 画轴展开
   ═══════════════════════════════════════════════════════ */

.markdown img {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  border-radius: var(--corner-m);
  box-shadow: var(--chat-customize-box-shadow2);
  transition: var(--trans-interactive-slow);
  will-change: transform;
}

.markdown img:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(var(--ochre-rgb), 0.12);
}


/* ═══════════════════════════════════════════════════════
   ▌ Ant Design 组件样式
   ═══════════════════════════════════════════════════════ */

/* ── 头像 ── */
.ant-avatar,
.ant-avatar-css-var,
.ant-avatar > img {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  transition: var(--trans-interactive-slow);
  background: transparent;
  border-radius: 100%;
  box-shadow: var(--chat-customize-box-shadow3);
}

.ant-avatar:hover {
  transform: scale(1.06);
  box-shadow: 0 3px 10px rgba(var(--ochre-rgb), 0.12);
}

/* ── 分段控制器 ── */
.ant-segmented-thumb-motion-appear-active {
  display: none !important;
}

.and-segmented,
.ant-segmented.ant-segmented-shape-round {
  border-radius: var(--corner-m);
  background: transparent;
  border: var(--stroke-w) solid transparent;
}

.ant-segmented-group .ant-segmented-item-label {
  position: relative;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-s) !important;
  transition: var(--trans-interactive-slow);
  background: rgba(var(--xuan-paper-rgb), 0.5);
  color: var(--ink-medium);
}

.ant-segmented-group .ant-segmented-item-label .anticon,
.ant-segmented-group .ant-segmented-item-label .iconfont {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12) !important;
  border-radius: var(--corner-s);
  padding: 4px 12px;
  font-family: "LXGW WenKai Screen", "EB Garamond", serif !important;
  font-weight: var(--fw-normal);
  transition: var(--trans-interactive-slow);
  background: rgba(var(--xuan-warm-rgb), 0.4) !important;
  color: var(--ink-medium);
}

.ant-segmented-group .ant-segmented-item-label[aria-selected="true"],
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"] .anticon,
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"] .iconfont {
  border: var(--stroke-w) solid rgba(var(--ochre-rgb), 0.3);
  border-radius: var(--corner-s);
  background: rgba(var(--ochre-rgb), 0.2);
  box-shadow: 0 1px 4px rgba(var(--ochre-rgb), 0.1) !important;
  color: var(--ochre-deep);
}

.ant-segmented-group .ant-segmented-item-label:hover[aria-selected="true"],
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"]:hover .anticon,
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"]:hover .iconfont {
  transform: var(--trans-lift) !important;
  box-shadow: 0 2px 6px rgba(var(--ochre-rgb), 0.15) !important;
  background: rgba(var(--ochre-rgb), 0.25);
  color: var(--ochre-deep);
}

.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]),
.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]) .anticon,
.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]) .iconfont {
  transform: var(--trans-lift) !important;
  box-shadow: 0 2px 6px rgba(var(--ink-dark-rgb), 0.06) !important;
  background: rgba(var(--ochre-light-rgb), 0.15);
  color: var(--ochre-deep);
}

/* ── 标签 ── */
.ant-tag {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-s);
  padding: 3px 10px;
  font-family: "LXGW WenKai Screen", "EB Garamond", serif !important;
  font-weight: var(--fw-medium);
  transition: var(--trans-interactive-slow);
  background: rgba(var(--xuan-warm-rgb), 0.5);
  color: var(--ink-medium);
}

.ant-tag:hover {
  transform: scale(1.04);
  box-shadow: 0 1px 4px rgba(var(--ink-dark-rgb), 0.06);
  background: rgba(var(--amber-light-rgb), 0.15);
  border-color: rgba(var(--amber-rgb), 0.2) !important;
  color: var(--amber);
}

/* ── 徽章 ── */
.ant-badge-count {
  background: var(--ochre) !important;
  border: var(--stroke-w) solid rgba(var(--ochre-deep-rgb), 0.3);
  box-shadow: 0 1px 4px rgba(var(--ink-dark-rgb), 0.1);
  font-family: "EB Garamond", serif !important;
  font-weight: var(--fw-bold);
  animation: gentlePulse 3s ease-in-out infinite;
}

/* ── 模态框 ── */
.ant-modal-root .ant-modal-centered .ant-modal,
.ant-modal:not(.ant-modal-confirm) .ant-modal-content {
  border-radius: var(--corner-l) !important;
  box-shadow: 0 8px 32px rgba(var(--ink-dark-rgb), 0.12) !important;
  background: var(--color-white);
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
}

.ant-modal .ant-modal-close {
  background-color: transparent;
  border-radius: var(--corner-s);
  color: var(--ink-medium);
  transition: var(--trans-color-fast);
}

.ant-modal .ant-modal-close:hover {
  color: var(--ochre-deep);
  background: rgba(var(--ochre-light-rgb), 0.15);
}

.ant-modal-header {
  background: rgba(var(--ochre-rgb), 0.06);
  border-bottom: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-l) var(--corner-l) 0 0;
}

.ant-modal-title {
  color: var(--color-text-1) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-bold);
  font-size: 1.2em;
}

/* ── 通知 ── */
.ant-notification-notice {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m);
  box-shadow: 0 4px 16px rgba(var(--ink-dark-rgb), 0.1) !important;
  background: var(--color-white);
}

/* ── 警告框 ── */
.ant-alert {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m);
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
  box-shadow: var(--chat-customize-box-shadow3);
}

.ant-alert-success {
  background: rgba(var(--bamboo-rgb), 0.1) !important;
  color: var(--bamboo-deep);
  border-color: rgba(var(--bamboo-rgb), 0.2) !important;
}

.ant-alert-info {
  background: rgba(var(--ochre-rgb), 0.08) !important;
  color: var(--ochre-deep);
  border-color: rgba(var(--ochre-rgb), 0.15) !important;
}

.ant-alert-warning {
  background: rgba(var(--ochre-light-rgb), 0.15) !important;
  color: var(--ochre-deep);
  border-color: rgba(var(--ochre-rgb), 0.2) !important;
}

.ant-alert-error {
  background: rgba(var(--lotus-rgb), 0.1) !important;
  color: var(--lotus);
  border-color: rgba(var(--lotus-rgb), 0.2) !important;
}

/* ── 标签页 ── */
.ant-tabs-tab {
  border: var(--stroke-w) solid transparent !important;
  border-radius: var(--corner-s) var(--corner-s) 0 0;
  margin-right: 2px;
  background: transparent;
  transition: var(--trans-color);
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
  color: var(--ink-medium);
}

.ant-tabs-tab:hover {
  color: var(--amber) !important;
  border-bottom-color: rgba(var(--amber-rgb), 0.3) !important;
}

.ant-tabs-tab-active {
  color: var(--ochre-deep) !important;
  font-weight: var(--fw-bold);
}

.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--ochre-deep) !important;
}

.ant-tabs-ink-bar {
  background: var(--ochre) !important;
  height: 2px;
}

/* ── 卡片 ── */
.ant-card {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m);
  box-shadow: var(--chat-customize-box-shadow);
  transition: var(--trans-interactive-slow);
  background: var(--color-white);
}

.ant-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(var(--ochre-rgb), 0.1);
}

/* ── 进度条 ── */
.ant-progress-outer {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: var(--corner-s);
  overflow: hidden;
}

.ant-progress-bg {
  background: linear-gradient(to right, var(--amber), var(--ochre)) !important;
}

/* ── 开关 ── */
.ant-switch {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  background: rgba(var(--ink-light-rgb), 0.25) !important;
  transition: var(--trans-interactive-slow);
}

.ant-switch-checked {
  background: var(--amber) !important;
  border-color: rgba(var(--amber-rgb), 0.4) !important;
}

.ant-switch-handle {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: 100% !important;
  box-shadow: 0 1px 3px rgba(var(--ink-dark-rgb), 0.1);
}

/* ── 滑块 ── */
.ant-slider-rail {
  background: rgba(var(--ink-light-rgb), 0.15);
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.1);
  height: 6px;
  border-radius: 3px;
}

.ant-slider-track {
  background: var(--amber) !important;
  border: var(--stroke-w) solid rgba(var(--amber-rgb), 0.2);
  height: 6px;
  border-radius: 3px;
}

.ant-slider-handle:hover,
.ant-slider-handle:focus {
  box-shadow: 0 2px 8px rgba(var(--amber-rgb), 0.2) !important;
  transform: scale(1.15);
}

.ant-slider .ant-slider-handle::after {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2);
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(var(--ink-dark-rgb), 0.1);
}

/* ── 复选框 ── */
.ant-checkbox-wrapper {
  font-family: var(--font-primary) !important;
}

.ant-checkbox-inner {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.3) !important;
  border-radius: 3px;
  background: rgba(var(--xuan-paper-rgb), 0.6);
  transition: var(--trans-color-fast);
}

.ant-checkbox-checked .ant-checkbox-inner {
  background: var(--amber) !important;
  border-color: var(--amber) !important;
}

.ant-checkbox-checked .ant-checkbox-inner::after {
  border-color: var(--xuan-paper) !important;
  border-width: 2px;
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner {
  border-color: var(--amber) !important;
}

/* ── 单选框 ── */
.ant-radio-wrapper {
  font-family: var(--font-primary) !important;
}

.ant-radio-inner {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.3) !important;
  background: rgba(var(--xuan-paper-rgb), 0.6);
  transition: var(--trans-color-fast);
}

.ant-radio-wrapper:hover .ant-radio-inner {
  border-color: var(--amber) !important;
}

.ant-radio-checked .ant-radio-inner {
  border-color: var(--amber) !important;
}

.ant-radio-inner::after {
  background: var(--amber) !important;
}

/* ── 选择器 ── */
.ant-select-selector {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s) !important;
  font-family: var(--font-primary) !important;
  background: rgba(var(--xuan-paper-rgb), 0.5) !important;
  transition: var(--trans-interactive-slow);
}

.ant-select-focused .ant-select-selector {
  border-color: var(--amber) !important;
  box-shadow: 0 0 0 3px rgba(var(--amber-rgb), 0.1) !important;
}

.ant-select-dropdown {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: var(--corner-m);
  box-shadow: 0 4px 16px rgba(var(--ink-dark-rgb), 0.1);
  background: var(--color-white);
}

.ant-select-item-option-selected {
  background: rgba(var(--ochre-rgb), 0.15) !important;
  font-weight: var(--fw-medium);
  color: var(--ochre-deep) !important;
}

.ant-select-item-option:hover {
  background: rgba(var(--ochre-light-rgb), 0.15) !important;
  color: var(--ochre-deep) !important;
}

/* ── 日期选择器 ── */
.ant-picker {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s);
  font-family: var(--font-primary) !important;
  background: rgba(var(--xuan-paper-rgb), 0.5) !important;
  transition: var(--trans-interactive-slow);
}

.ant-picker-focused {
  border-color: var(--ochre) !important;
  box-shadow: 0 0 0 3px rgba(var(--ochre-rgb), 0.1) !important;
}

.ant-picker-dropdown {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: var(--corner-m);
  box-shadow: 0 4px 16px rgba(var(--ink-dark-rgb), 0.1);
}

.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
  background: var(--ochre) !important;
  border: var(--stroke-w) solid rgba(var(--ochre-rgb), 0.3);
}

.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
  border: 2px solid var(--ochre);
}

/* ── 下拉菜单 ── */
.ant-dropdown-menu {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: var(--corner-m);
  box-shadow: 0 4px 16px rgba(var(--ink-dark-rgb), 0.1);
  background: var(--color-white);
  padding: 4px;
}

.ant-dropdown-menu-item {
  font-family: var(--font-primary) !important;
  border-radius: var(--corner-s);
  transition: var(--trans-color-fast);
}

.ant-dropdown-menu-item:hover {
  background: rgba(var(--amber-light-rgb), 0.15) !important;
  color: var(--amber) !important;
}

/* ── 菜单 ── */
.ant-menu {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12);
  border-radius: var(--corner-m);
  background: var(--color-white);
}

.ant-menu-item {
  font-family: var(--font-primary) !important;
  border-radius: var(--corner-s);
  transition: var(--trans-color-fast);
}

.ant-menu-item-selected {
  background: rgba(var(--ochre-rgb), 0.15) !important;
  color: var(--ochre-deep) !important;
}

.ant-menu-item:hover {
  background: rgba(var(--ochre-light-rgb), 0.15) !important;
}

/* ── 工具提示 ── */
.ant-tooltip-inner {
  background: var(--ink-dark) !important;
  color: var(--xuan-paper) !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.1);
  border-radius: var(--corner-s);
  box-shadow: 0 2px 8px rgba(var(--ink-dark-rgb), 0.15);
  font-family: "LXGW WenKai Screen", "EB Garamond", serif !important;
  font-weight: var(--fw-medium);
  font-size: 0.88em;
  letter-spacing: 0.02em;
}

.ant-tooltip-arrow-content {
  background: var(--ink-dark) !important;
}

/* ── 弹出确认框 ── */
.ant-popconfirm-inner {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15);
  border-radius: var(--corner-m);
  box-shadow: 0 4px 16px rgba(var(--ink-dark-rgb), 0.1);
}

.ant-popconfirm-message-title {
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
}

div[role^="dialog"],
.ant-dropdown .ant-dropdown-menu,
.ant-dropdown-menu-submenu {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12);
  border-radius: var(--corner-m);
}

/* ── 抽屉 ── */
.ant-drawer-content {
  background: var(--color-white) !important;
}

.ant-drawer-header {
  background: rgba(var(--ochre-rgb), 0.05);
  border-bottom: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-bold);
  color: var(--color-text-1);
}

.ant-drawer-title {
  color: var(--color-text-1) !important;
  font-family: var(--font-primary) !important;
}

/* ── 步骤条 ── */
.ant-steps-item-finish .ant-steps-item-icon {
  background: rgba(var(--ochre-rgb), 0.15) !important;
  border: var(--stroke-w) solid var(--ochre) !important;
  color: var(--ochre-deep);
}

.ant-steps-item-process .ant-steps-item-icon {
  background: var(--amber) !important;
  border: var(--stroke-w) solid var(--amber) !important;
  color: var(--xuan-paper);
}

.ant-steps-item-wait .ant-steps-item-icon {
  background: rgba(var(--xuan-paper-rgb), 0.5) !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.25) !important;
  color: var(--ink-light);
}

.ant-steps-item-tail::after {
  background: rgba(var(--ink-light-rgb), 0.2) !important;
  height: 1px;
}

/* ── 时间轴 ── */
.ant-timeline-item-head {
  background: var(--amber) !important;
  border: var(--stroke-w) solid rgba(var(--amber-rgb), 0.3) !important;
  width: 12px;
  height: 12px;
}

.ant-timeline-item-tail {
  border-left: 1px solid rgba(var(--ink-light-rgb), 0.25) !important;
}

/* ── 面包屑 ── */
.ant-breadcrumb {
  font-family: var(--font-primary) !important;
}

.ant-breadcrumb-link {
  color: var(--ochre);
  font-weight: var(--fw-medium);
  transition: color 0.35s var(--ease-smooth);
}

.ant-breadcrumb-link:hover {
  color: var(--amber) !important;
}

.ant-breadcrumb-separator {
  color: var(--ink-light) !important;
}

/* ── 分页 ── */
.ant-pagination-item {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s);
  font-family: "EB Garamond", serif !important;
  font-weight: var(--fw-medium);
  background: rgba(var(--xuan-paper-rgb), 0.5);
  transition: var(--trans-interactive-slow);
  will-change: transform;
}

.ant-pagination-item-active {
  background: rgba(var(--ochre-rgb), 0.15) !important;
  border-color: rgba(var(--ochre-rgb), 0.3) !important;
  box-shadow: 0 1px 4px rgba(var(--ochre-rgb), 0.1);
}

.ant-pagination-item-active a {
  color: var(--ochre-deep) !important;
}

.ant-pagination-item:hover {
  background: rgba(var(--amber-light-rgb), 0.15) !important;
  border-color: rgba(var(--amber-rgb), 0.2) !important;
  transform: translateY(-1px);
}

.ant-pagination-prev,
.ant-pagination-next {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.2) !important;
  border-radius: var(--corner-s);
  background: rgba(var(--xuan-paper-rgb), 0.5);
  transition: var(--trans-interactive-slow);
}

.ant-pagination-prev:hover,
.ant-pagination-next:hover {
  background: rgba(var(--amber-light-rgb), 0.15) !important;
  color: var(--amber) !important;
}

/* ── 上传 ── */
.ant-upload-drag {
  border: 1px dashed rgba(var(--ink-light-rgb), 0.35) !important;
  border-radius: var(--corner-m);
  background: rgba(var(--xuan-warm-rgb), 0.3);
  transition: var(--trans-color);
}

.ant-upload-drag:hover {
  border-color: var(--amber) !important;
  background: rgba(var(--amber-light-rgb), 0.06) !important;
}

.ant-upload-list-item {
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-s);
  margin-top: 8px;
  background: rgba(var(--xuan-paper-rgb), 0.5);
  transition: var(--trans-color-fast);
}

.ant-upload-list-item:hover {
  background: rgba(var(--ochre-light-rgb), 0.12) !important;
}

/* ── 评分 ── */
.ant-rate-star {
  font-size: 24px;
  transition: transform 0.35s var(--ease-smooth);
}

.ant-rate-star:hover {
  transform: scale(1.15);
}

.ant-rate-star-full {
  color: var(--amber) !important;
  filter: drop-shadow(0 1px 2px rgba(var(--amber-rgb), 0.3));
}

.ant-rate-star-half .ant-rate-star-first {
  color: var(--amber) !important;
}

/* ── 骨架屏 ── */
.ant-skeleton-element {
  background: rgba(var(--ink-light-rgb), 0.06);
  border-radius: var(--corner-s);
}

/* ── 空状态 ── */
.ant-empty-description {
  font-family: var(--font-primary) !important;
  color: var(--ink-light);
  font-weight: var(--fw-medium);
}

/* ── 结果页 ── */
.ant-result-title {
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-bold);
  color: var(--color-text-1);
}

.ant-result-subtitle {
  font-family: var(--font-primary) !important;
  color: var(--ink-medium);
}

/* ── 统计数值 ── */
.ant-statistic-title {
  font-family: var(--font-primary) !important;
  color: var(--ink-medium);
  font-weight: var(--fw-medium);
  font-size: 0.9em;
}

.ant-statistic-content {
  font-family: "EB Garamond", "LXGW WenKai Screen", serif !important;
  font-weight: var(--fw-bold);
  color: var(--ochre-deep) !important;
}

/* ── 描述列表 ── */
.ant-descriptions-item-label {
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-medium);
  color: var(--ink-medium);
}

.ant-descriptions-item-content {
  font-family: var(--font-primary) !important;
  color: var(--color-text-1);
}

/* ── 回到顶部 ── */
.ant-back-top {
  background: var(--ochre) !important;
  border: var(--stroke-w) solid rgba(var(--ochre-rgb), 0.3);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(var(--ink-dark-rgb), 0.1);
  transition: var(--trans-interactive-slow);
  will-change: transform;
}

.ant-back-top:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(var(--ink-dark-rgb), 0.12);
  background: var(--amber) !important;
}

/* ── 锚点 ── */
.ant-anchor-link-active > .ant-anchor-link-title {
  color: var(--ochre) !important;
  font-weight: var(--fw-medium);
}

.ant-anchor-ink::before {
  background: var(--ochre) !important;
  width: 2px;
}


/* ═══════════════════════════════════════════════════════
   ▌ 滚动条 — 竹节纤细
   ═══════════════════════════════════════════════════════ */

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--xuan-warm-rgb), 0.3);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: rgba(var(--ink-light-rgb), 0.25) !important;
  border-radius: 5px;
  border: 2px solid transparent;
  background-clip: content-box;
  transition: background-color 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--ochre-rgb), 0.35) !important;
  border: 2px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-corner {
  background: transparent;
}


/* ═══════════════════════════════════════════════════════
   ▌ 代码编辑器配色 — 碑文拓片
   ═══════════════════════════════════════════════════════ */

body[theme-mode="light"] .cm-line,
body[theme-mode="dark"] .cm-line {
  background: transparent !important;
  color: var(--color-text-1) !important;
}

body[theme-mode="light"] .cm-content span,
body[theme-mode="dark"] .cm-content span {
  background-color: transparent !important;
}

/* ── 关键字 ── 赭石 */
body[theme-mode="light"] .cm-content .ͼph {
  color: var(--ochre-deep) !important;
  font-weight: var(--fw-bold);
}

body[theme-mode="dark"] .cm-content .ͼph {
  color: var(--ochre-light) !important;
  font-weight: var(--fw-bold);
}

/* ── 字符串 ── 琥珀 */
body[theme-mode="light"] .cm-content .ͼpq {
  color: var(--amber) !important;
}

body[theme-mode="dark"] .cm-content .ͼpq {
  color: var(--amber-light) !important;
}

/* ── 变量 ── 赭石 */
body[theme-mode="light"] .cm-content .ͼpd {
  color: var(--ochre-deep) !important;
}

body[theme-mode="dark"] .cm-content .ͼpd {
  color: var(--ochre) !important;
}

/* ── 函数名 ── */
body[theme-mode="light"] .cm-content .ͼp9 {
  color: var(--ochre) !important;
  font-weight: var(--fw-medium);
}

body[theme-mode="dark"] .cm-content .ͼp9 {
  color: var(--ochre-deep) !important;
  font-weight: var(--fw-medium);
}

/* ── 数字 ── 琥珀 */
body[theme-mode="light"] .cm-content .ͼpf {
  color: var(--amber) !important;
}

body[theme-mode="dark"] .cm-content .ͼpf {
  color: var(--amber-light) !important;
}

/* ── 操作符 ── 水墨 */
body[theme-mode="light"] .cm-content .ͼpg,
body[theme-mode="light"] .cm-content .ͼpi {
  color: var(--ink-dark) !important;
  font-weight: var(--fw-medium);
}

body[theme-mode="dark"] .cm-content .ͼpg,
body[theme-mode="dark"] .cm-content .ͼpi {
  color: var(--ink-dark) !important;
  font-weight: var(--fw-medium);
}

/* ── 注释 ── */
body[theme-mode="light"] .cm-content .ͼpc {
  color: var(--ink-light) !important;
  font-style: italic !important;
}

body[theme-mode="dark"] .cm-content .ͼpc {
  color: rgba(var(--ink-medium-rgb), 0.6) !important;
  font-style: italic !important;
}

/* ── 属性名 ── 藕荷 */
body[theme-mode="light"] .cm-content .ͼpj,
body[theme-mode="light"] .cm-content .ͼpk {
  color: var(--lotus) !important;
}

body[theme-mode="dark"] .cm-content .ͼpj,
body[theme-mode="dark"] .cm-content .ͼpk {
  color: var(--lotus-light) !important;
}

/* ── 标签 ── 琥珀 */
body[theme-mode="light"] .cm-content .ͼpl,
body[theme-mode="light"] .cm-content .ͼpm {
  color: var(--amber) !important;
}

body[theme-mode="dark"] .cm-content .ͼpl,
body[theme-mode="dark"] .cm-content .ͼpm {
  color: var(--amber-light) !important;
}

/* ── 类名 ── 赭石 */
body[theme-mode="light"] .cm-content .ͼpn,
body[theme-mode="light"] .cm-content .ͼpo {
  color: var(--ochre-deep) !important;
}

body[theme-mode="dark"] .cm-content .ͼpn,
body[theme-mode="dark"] .cm-content .ͼpo {
  color: var(--ochre-light) !important;
}

/* ── 行号 ── */
body[theme-mode="light"] .cm-gutters {
  background: rgba(var(--xuan-warm-rgb), 0.6) !important;
}

body[theme-mode="dark"] .cm-gutters {
  background: rgba(var(--xuan-paper-rgb), 0.6) !important;
}

body[theme-mode="light"] .cm-gutters,
body[theme-mode="dark"] .cm-gutters {
  border-right: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
}

/* ── 行号颜色 ── */
body[theme-mode="light"] .cm-lineNumbers .cm-gutterElement {
  color: rgba(var(--ink-light-rgb), 0.6) !important;
}

body[theme-mode="dark"] .cm-lineNumbers .cm-gutterElement {
  color: rgba(var(--ink-medium-rgb), 0.4) !important;
}

body[theme-mode="light"] .cm-lineNumbers .cm-gutterElement,
body[theme-mode="dark"] .cm-lineNumbers .cm-gutterElement {
  font-weight: var(--fw-normal);
  font-size: 0.9em;
}

/* ── 光标 ── */
body[theme-mode="light"] .cm-cursor,
body[theme-mode="dark"] .cm-cursor {
  border-left: 2px solid var(--ochre) !important;
  animation: breathe 2s ease-in-out infinite;
}

/* ── 选中背景 ── */
body[theme-mode="light"] .cm-selectionBackground,
body[theme-mode="dark"] .cm-selectionBackground {
  background: rgba(var(--ochre-rgb), 0.15) !important;
}

/* ── 激活行 ── */
body[theme-mode="light"] .cm-activeLine {
  background: rgba(var(--ochre-light-rgb), 0.08) !important;
}

body[theme-mode="dark"] .cm-activeLine {
  background: rgba(var(--ochre-rgb), 0.06) !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 全局样式
   ═══════════════════════════════════════════════════════ */

/* ── 文本选中 ── */
::selection,
::-moz-selection {
  background: rgba(var(--ochre-rgb), 0.25);
  color: var(--ink-dark);
}

/* ── 焦点轮廓 ── */
*:focus-visible {
  outline: 2px solid rgba(var(--ochre-rgb), 0.4);
  outline-offset: 2px;
}

/* ── 全局过渡 ── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}


/* ═══════════════════════════════════════════════════════
   ▌ 响应式
   ═══════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .markdown h2,
  .bubble .message-content-container h2 {
    font-size: 1.25em;
  }

  .markdown h3,
  .bubble .message-content-container h3 {
    font-size: 1.15em;
  }

  .markdown h4,
  .bubble .message-content-container h4 {
    font-size: 1.08em;
  }

  button {
    font-size: 0.92em;
  }

  .markdown p {
    line-height: 1.8;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
}


/* ═══════════════════════════════════════════════════════
   ▌ 打印样式 — 白纸黑字
   ═══════════════════════════════════════════════════════ */

@media print {
  body {
    background: white !important;
  }

  * {
    border-color: #ccc !important;
    box-shadow: none !important;
  }

  .markdown * {
    color: black !important;
    background: white !important;
  }
}


/* ═══════════════════════════════════════════════════════
   ▌ Bug 修复 & 兼容补丁
   ═══════════════════════════════════════════════════════ */

.bubble .message-user .message-action-button:hover {
  background-color: rgba(var(--xuan-warm-rgb), 0.6);
}

/* ── 消息操作按钮微调 ── */
.message-action-button {
  opacity: 0.5;
  transition: opacity 0.35s var(--ease-smooth);
}

.message-action-button:hover {
  opacity: 1;
}

/* ── 侧边栏滚动区域 ── */
#app-sidebar {
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--ink-light-rgb), 0.2) transparent;
}

/* ── 导航栏标题字体 ── */
.home-navbar *,
div[class^="NavbarContainer-"] * {
  font-family: var(--font-primary) !important;
}

/* ── 输入框占位文字 ── */
input::placeholder,
textarea::placeholder {
  color: var(--ink-light) !important;
  font-family: var(--font-primary) !important;
  opacity: 0.6;
}

/* ── Ant Design 通用过渡 ── */
.ant-switch,
.ant-checkbox-inner,
.ant-radio-inner,
.ant-tag,
.ant-btn,
.ant-pagination-item {
  transition: var(--trans-interactive-slow) !important;
}

/* ── 深色模式弹层背景 ── */
body[theme-mode="dark"] .ant-modal-content,
body[theme-mode="dark"] .ant-dropdown-menu,
body[theme-mode="dark"] .ant-select-dropdown,
body[theme-mode="dark"] .ant-notification-notice,
body[theme-mode="dark"] .ant-popconfirm-inner,
body[theme-mode="dark"] .ant-card,
body[theme-mode="dark"] .ant-collapse-item,
body[theme-mode="dark"] .ant-picker-dropdown {
  background: var(--xuan-warm) !important;
}

body[theme-mode="dark"] .ant-tooltip-inner {
  background: var(--ink-medium) !important;
  color: var(--xuan-paper) !important;
}

/* ── 浅色模式弹层背景 ── */
body[theme-mode="light"] .ant-modal-content,
body[theme-mode="light"] .ant-dropdown-menu,
body[theme-mode="light"] .ant-select-dropdown,
body[theme-mode="light"] .ant-notification-notice,
body[theme-mode="light"] .ant-card,
body[theme-mode="light"] .ant-collapse-item {
  background: var(--xuan-paper) !important;
}

/* ── 列表项背景修正 ── */
.ant-select-item,
.ant-dropdown-menu-item {
  background: transparent !important;
}

/* ── 抽屉深层背景 ── */
body[theme-mode="dark"] .ant-drawer-content {
  background: var(--xuan-warm) !important;
}

body[theme-mode="light"] .ant-drawer-content {
  background: var(--xuan-paper) !important;
}

body[theme-mode="dark"] .ant-drawer-body {
  background: var(--xuan-warm);
}

body[theme-mode="light"] .ant-drawer-body {
  background: var(--xuan-paper);
}


/* ═══════════════════════════════════════════════════════
   ▌ 设置页菜单 — 竹简铺陈
   ═══════════════════════════════════════════════════════ */

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"] {
  position: relative;
  overflow: visible !important;
  margin: 4px 2px !important;
  padding: 8px 12px !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.12) !important;
  border-radius: var(--corner-m) !important;
  background: rgba(var(--xuan-paper-rgb), 0.3) !important;
  color: var(--color-text-2) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-normal) !important;
  transition: all 0.3s var(--ease-ink);
  list-style: none !important;
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"]:hover {
  background: var(--xuan-ivory) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--ochre-rgb), 0.15),
              0 0 0 1px rgba(var(--ochre-rgb), 0.1);
  border-color: rgba(var(--ochre-rgb), 0.25) !important;
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"].active {
  background: rgba(var(--ochre-rgb), 0.3) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  border: 2px solid var(--ochre) !important;
  box-shadow: 0 0 6px rgba(var(--ochre-rgb), 0.2),
              0 0 12px rgba(var(--ochre-rgb), 0.08),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.12);
  transform: translateX(3px);
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"].active:hover {
  background: rgba(var(--ochre-rgb), 0.4) !important;
  box-shadow: 0 0 10px rgba(var(--ochre-rgb), 0.3),
              0 0 18px rgba(var(--amber-rgb), 0.1),
              0 4px 14px rgba(var(--ochre-rgb), 0.15),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.2);
  transform: translateX(3px) translateY(-2px);
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"] svg {
  transition: all 0.3s var(--ease-ink);
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"]:hover svg {
  color: var(--ochre-deep) !important;
}

a[class^="sc-cIoBRt"] li[class^="sc-bPybNG"].active svg {
  color: var(--ochre-deep) !important;
}


/* ═══════════════════════════════════════════════════════
   ▌ 助手栏列表 — 竹简铺陈
   ═══════════════════════════════════════════════════════ */

/* ── 助手列表项基础样式 ── */
div[class*="assistants-width"].ant-dropdown-trigger {
  position: relative;
  overflow: visible !important;
  margin: 4px 2px !important;
  padding: 8px 12px !important;
  border: var(--stroke-w) solid rgba(var(--ink-light-rgb), 0.15) !important;
  border-radius: var(--corner-m) !important;
  background: rgba(var(--xuan-paper-rgb), 0.3) !important;
  color: var(--color-text-2) !important;
  font-family: var(--font-primary) !important;
  font-weight: var(--fw-normal) !important;
  transition: all 0.3s var(--ease-ink);
}

/* ── 悬停 ── */
div[class*="assistants-width"].ant-dropdown-trigger:hover {
  background: var(--xuan-ivory) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(var(--ochre-rgb), 0.2),
              0 0 8px rgba(var(--amber-rgb), 0.1);
  border-color: rgba(var(--ochre-rgb), 0.3) !important;
}

/* ── 选中 ── */
div[class*="assistants-width"][class*="bg-(--color-list-item)"].ant-dropdown-trigger {
  background: rgba(var(--ochre-rgb), 0.35) !important;
  color: var(--ink-dark) !important;
  font-weight: var(--fw-bold) !important;
  border: 2px solid var(--ochre) !important;
  box-shadow: 0 0 6px rgba(var(--ochre-rgb), 0.25),
              0 0 12px rgba(var(--ochre-rgb), 0.1),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.15);
  transform: translateX(3px);
}

/* ── 选中 + 悬停 ── */
div[class*="assistants-width"][class*="bg-(--color-list-item)"].ant-dropdown-trigger:hover {
  background: rgba(var(--ochre-rgb), 0.45) !important;
  box-shadow: 0 0 10px rgba(var(--ochre-rgb), 0.35),
              0 0 20px rgba(var(--amber-rgb), 0.15),
              0 4px 16px rgba(var(--ochre-rgb), 0.2),
              inset 0 0 0 1px rgba(var(--ochre-rgb), 0.25);
  transform: translateX(3px) translateY(-2px);
}

/* ── 助手名称文字 ── */
div[class*="assistants-width"].ant-dropdown-trigger div.name,
div[class*="assistants-width"].ant-dropdown-trigger div[title] {
  font-family: var(--font-primary) !important;
  transition: all 0.3s var(--ease-ink);
}

/* ── 助手栏内 SVG 图标过渡 ── */
div[class*="assistants-width"].ant-dropdown-trigger svg {
  transition: all 0.3s var(--ease-ink);
}

div[class*="assistants-width"].ant-dropdown-trigger:hover svg {
  color: var(--ochre-deep) !important;
}


/* ── 工具栏图标按钮 ── */
div[class*="sc-dua-dxq"],
div[class*="sc-dWYTzI"] {
  position: relative;
  border: var(--stroke-w) solid transparent;
  border-radius: var(--corner-s);
  background: transparent;
  transition: var(--trans-interactive-slow);
  cursor: pointer;
}

div[class*="sc-dua-dxq"]:hover,
div[class*="sc-dWYTzI"]:hover {
  background: rgba(var(--ochre-light-rgb), 0.2);
  border-color: rgba(var(--ochre-rgb), 0.25) !important;
  transform: var(--trans-lift);
  box-shadow: 0 2px 6px rgba(var(--ink-dark-rgb), 0.08);
}

div[class*="sc-dua-dxq"]:active,
div[class*="sc-dWYTzI"]:active {
  transform: translateY(0);
  background: rgba(var(--ochre-rgb), 0.3);
  box-shadow: 0 1px 3px rgba(var(--ink-dark-rgb), 0.06);
}

div[class*="sc-dua-dxq"] svg,
div[class*="sc-dWYTzI"] svg {
  transition: all 0.3s var(--ease-ink);
}

div[class*="sc-dua-dxq"]:hover svg,
div[class*="sc-dWYTzI"]:hover svg {
  color: var(--ochre-deep) !important;
}


/* ── 图标字体保护 ── */
i.iconfont,
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal !important;
  font-weight: normal !important;
  speak: none;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ═══════════════════════════════════════════════════════
   ▌ 完 ─  墨韵·雅集
   ═══════════════════════════════════════════════════════ */`,
}
