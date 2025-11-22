import type { Theme } from '@/lib/types'

export const peppa: Theme = {
    id: 'peppa',
    name: 'Peppa',
    description: '',
    lightPreviewUrl: '/peppa.png',
    darkPreviewUrl: '/peppa.png',
    css: `
/* === Peppa Pig 卡通主题 === */

/* 字体导入 - 英文字体 */
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Bubblegum+Sans&display=swap");
/* 中文字体 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap");
@import url("http://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.min.css");
/* 等宽字体（代码） */
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Fira+Code:wght@400;500&display=swap");

/* === 动画效果 === */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes wiggle {

  0%,
  100% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-3deg);
  }

  75% {
    transform: rotate(3deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

/* === CSS 变量 === */
:root {
  --round-corner-1: 10px;
  --round-corner-2: 16px;
  --fw-base: normal;
  --fw-bold: bold;
  --all-stroke: 1.8px;
  --trans-up: translateY(-3px);
  --trans-rotate-r: scale(1.05) rotate(2deg);
  --trans-rotate-l: scale(1.05) rotate(-2deg);
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 日间模式 */
body[theme-mode="light"] {
  /* 主题色 */
  --peppa-red: rgb(253, 141, 141);
  --peppa-red-rgb: 253, 141, 141;
  --peppa-pink: rgb(255, 195, 232);
  --peppa-pink-rgb: 255, 195, 232;
  --george-blue: rgb(165, 207, 255);
  --george-blue-rgb: 165, 207, 255;
  --sun-yellow: #ffd700;
  --sun-yellow-rgb: 255, 215, 0;
  --grass-green: rgb(196, 241, 119);
  --grass-green-rgb: 196, 241, 119;
  --peppa-orange: rgb(253, 187, 110);
  --peppa-orange-rgb: 253, 187, 110;
  --peppa-purple: rgb(177, 151, 252);
  --peppa-purple-rgb: 177, 151, 252;
  --stroke-black: #000;
  --stroke-black-rgb: 45, 45, 45;

  /* 背景色 */
  --color-background: transparent;
  /* --color-background-soft: rgba(230, 245, 255, 0.9);
    --color-background-mute: rgba(255, 250, 245, 0.9);
    --color-background-opacity: rgba(255, 255, 255, 0.8);
    --color-background-rgb: 255, 255, 255; */

  /* 组件背景 */
  --navbar-background: var(--display-3);
  --chat-background: var(--george-blue);
  --chat-background-user: var(--peppa-pink);
  --chat-background-assistant: var(--grass-green);
  --chat-customize-collapse-background: rgba(255, 215, 0, 0.3);

  /* 文字色 */
  --color-text-1: var(--stroke-black);
  --color-text-2: #4a4a4a;
  --chat-text-user: #ffffff;
  --chat-customize-codeHeader: #4a4a4a;

  /* 黑白 */
  --color-white: #ffffff;
  --color-black: var(--stroke-black);
  --color-white-rgb: 255, 255, 255;
  --color-black-rgb: 45, 45, 45;

  /* 阴影/描边 */
  --chat-customize-box-shadow: 0 0 0 2px var(--color-black);
  --chat-customize-box-shadow2: 0 4px 0 0 var(--color-black);
  --chat-customize-box-shadow3: 0 0 0 2px var(--color-black);
  --chat-customize-box-shadow4: 0 0 0 2px var(--color-black);

  /* 其他 */
  --color-line-subtle: var(--stroke-black);
  --antd-arrow-background-color: rgba(255, 250, 245, 0.95);
  --color-collapse: #f4f4f8;


  /* 强调色 */
  --pig-accent: var(--peppa-red);
  --pig-accent-bright: var(--peppa-pink);
  --pig-accent-purple: var(--peppa-purple);
  --pig-accent-secondary: var(--george-blue);
  --pig-accent-secondary-rgb: 77, 166, 255;
  --pig-accent-rgb: 255, 143, 171;
  --pig-accent-purple-rgb: 179, 136, 255;

  /* 渐变背景 */
  --display-1: #f1f3f5;
  --display-2: #b8dffd;
  --display-3: #74c0fc;
  --display-4: #d9e2f5;
  background-color: var(--display-4) !important;
}

/* 夜间模式 */
body[theme-mode="dark"] {
  /* 主题色 */
  --peppa-red: rgb(188, 89, 89);
  --peppa-red-rgb: 197, 97, 97;
  --peppa-pink: rgb(183, 102, 152);
  --peppa-pink-rgb: 183, 102, 152;
  --george-blue: rgb(90, 105, 161);
  --george-blue-rgb: 90, 105, 161;
  --sun-yellow: rgb(194, 170, 49);
  --sun-yellow-rgb: 194, 170, 49;
  --grass-green: rgb(79, 137, 93);
  --grass-green-rgb: 79, 137, 93;
  --peppa-orange: rgb(188, 132, 69);
  --peppa-orange-rgb: 188, 132, 69;
  --peppa-purple: rgb(111, 93, 164);
  --peppa-purple-rgb: 111, 93, 164;
  --stroke-black: rgb(236, 236, 236);
  --stroke-black-rgb: 236, 236, 236;

  /* 背景色 */
  --color-background: transparent;
  /* --color-background-soft: rgba(230, 245, 255, 0.9);
    --color-background-mute: rgba(255, 250, 245, 0.9);
    --color-background-opacity: rgba(255, 255, 255, 0.8);
    --color-background-rgb: 255, 255, 255; */

  /* 组件背景 */
  --navbar-background: var(--display-3);
  --chat-background: var(--george-blue);
  --chat-background-user: var(--peppa-pink);
  --chat-background-assistant: var(--grass-green);
  --chat-customize-collapse-background: rgba(222, 192, 26, 0.3);

  /* 文字色 */
  --color-text-1: var(--stroke-black);
  --color-text-2: rgb(236, 236, 236);
  --chat-text-user: rgb(0, 0, 0);
  --chat-customize-codeHeader: rgb(236, 236, 236);

  /* 黑白 */
  --color-white: rgb(0, 0, 0);
  --color-black: var(--stroke-black);
  --color-white-rgb: 0, 0, 0;
  --color-black-rgb: 241, 243, 245;
  ;

  /* 阴影/描边 */
  --chat-customize-box-shadow: 0 0 0 2px var(--color-black);
  --chat-customize-box-shadow2: 0 4px 0 0 var(--color-black);
  --chat-customize-box-shadow3: 0 0 0 2px var(--color-black);
  --chat-customize-box-shadow4: 0 0 0 2px var(--color-black);

  /* 其他 */
  --color-line-subtle: var(--stroke-black);
  --antd-arrow-background-color: rgba(224, 213, 202, 0.95);
  --color-collapse: #6a6488;

  /* 强调色 */
  --pig-accent: var(--peppa-red);
  --pig-accent-bright: var(--peppa-pink);
  --pig-accent-purple: var(--peppa-purple);
  --pig-accent-secondary: var(--george-blue);
  --pig-accent-secondary-rgb: 77, 166, 255;
  --pig-accent-rgb: 255, 148, 192;
  --pig-accent-purple-rgb: 236, 236, 236;

  /* 渐变背景 */
  --display-1: #304458;
  --display-2: #3b586e;
  --display-3: #1e3444;
  --display-4: #42586e;
  background-color: var(--display-4) !important;
}

/* === 全局字体设置 === */
body {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
}


div[class^="EmojiBackground-"] {
  background: var(--color-white);
  mix-blend-mode: screen;
}

/* === 布局组件 === */
#app-sidebar {
  border-right: var(--all-stroke) solid var(--color-black) !important;
  background-color: var(--display-2) !important;
}

#content-container {
  border-radius: 0 !important;
}

[class^="Main-ujGUI"] {
  border-left: var(--all-stroke) solid var(--color-black) !important;
  border-right: var(--all-stroke) solid var(--color-black) !important;
  background-color: var(--display-1) !important;
}

.home-navbar,
div[class^="NavbarContainer-"] {
  border-bottom: var(--all-stroke) solid var(--color-black) !important;
  background-color: var(--display-3) !important;
}

/* === 消息气泡 === */
.bubble:not(.multi-select-mode) .message-content-container,
.bubble:not(.multi-select-mode) .message-assistant .message-content-container {
  border-radius: var(--round-corner-1);
  padding: 10px 16px;
  border: var(--all-stroke) solid var(--color-black);
  color: var(--color-black);
  box-shadow: 0 4px 0 0 var(--color-black);
}

.bubble:not(.multi-select-mode) .message-assistant .MessageFooter {
  margin: 3px 0;
}

.bubble:not(.multi-select-mode) .message-user .message-content-container {
  background-color: var(--chat-background-user);
}

.bubble:not(.multi-select-mode) .message-assistant .message-content-container {
  background-color: var(--chat-background-assistant);
}

div[class^="MessageTime-"] {
  color: var(--color-white);
  padding: 0 0 2px;
  font-size: 0.9em;
}

div[class^="Container-"] .message-header {
  border-radius: var(--round-corner-1);
  border: var(--all-stroke) solid var(--color-black) !important;
  box-shadow: 0 4px 0 0 var(--color-black);
  background-color: var(--grass-green);
  color: var(--color-white) !important;
  padding: 2px 0 0;
  font-size: 1.1em;
}

/* === 输入框 === */
.ant-input-outlined {
  border-radius: var(--round-corner-1) !important;
  border: var(--all-stroke) solid var(--color-black);
}

#inputbar.inputbar-container {
  background: var(--george-blue);
  border: var(--all-stroke) solid var(--color-black);
  padding: 10px;
  box-shadow: 0 4px 0 0 var(--color-black);
  margin-top: 6px;
}

input,
textarea {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1) !important;
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  transition: all 0.3s var(--easing-bounce);
  background-color: rgba(var(--color-white-rgb), 0.3);
}

input:focus,
textarea:focus {
  border-color: var(--peppa-pink) !important;
  box-shadow: 0 0 0 3px rgba(var(--peppa-pink-rgb), 0.3);
  transform: scale(1.02);
  background-color: rgba(var(--color-white-rgb), 0.5);
}

div[class^="Tag-"] {
  border: var(--all-stroke) solid var(--color-black);
  color: var(--color-white);
  scale: 106%;
  border-radius: var(--round-corner-1);
  margin-bottom: 3px;
}

/* === 列表项通用样式 === */

li[class^="MenuItem-"],
div[class^="Label-"].ant-dropdown-trigger,
div[class^="ProviderListItem-"].ant-dropdown-trigger,
div[class^="Container-"].ant-dropdown-trigger,
div[class^="ListItemContainer-"],
div[class^="AgentCardContainer-"],
div[class^="TreeNodeContainer-"],
div[class*="TopicListItem-"].ant-dropdown-trigger {
  position: relative;
  transition: all 0.3s var(--easing-bounce);
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1) !important;
  margin: 6px 0;
  background: var(--grass-green);
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;

}

li[class^="MenuItem-"]:hover,
div[class^="Label-"].ant-dropdown-trigger:hover,
div[class^="ProviderListItem-"].ant-dropdown-trigger:hover,
div[class^="Container-"].ant-dropdown-trigger:hover,
div[class^="ListItemContainer-"]:hover,
div[class^="AgentCardContainer-"]:hover,
div[class^="TreeNodeContainer-"]:hover,
div[class*="TopicListItem-"].ant-dropdown-trigger:hover,
div[class*="TopicListItem-"].ant-dropdown-trigger:hover:not(.active) {
  background: var(--sun-yellow) !important;
  color: var(--color-black) !important;
  transform: var(--trans-up);
  box-shadow: 0 4px 0 0 var(--color-black);
  font-weight: var(--fw-bold) !important;
  transition: all 0.3s var(--easing-bounce);
}

li[class^="MenuItem-"].active,
div[class^="Label-"].ant-dropdown-trigger.active,
div[class^="ProviderListItem-"].ant-dropdown-trigger.active,
div[class^="Container-"].ant-dropdown-trigger.active,
div[class^="ListItemContainer-"].active,
div[class^="AgentCardContainer-"].active,
div[class^="TreeNodeContainer-"].active,
div[class*="TopicListItem-"].ant-dropdown-trigger.active {
  background: var(--george-blue) !important;
  color: var(--color-black) !important;
  border: var(--all-stroke) solid var(--color-black) !important;
  box-shadow: 0 4px 0 0 var(--color-black);
  font-weight: var(--fw-bold);
}

/* 补充背景色 */
div[class^="ImagePlaceholder-"],
div[class^="Canvas-"],
div[class^="OutputContainer-"],
div[class^="EditorWrapper-"],
div[class^="AddButton"],
div[class^="NewPaintingButton-"],
div[class^="SettingContent-"] {
  background-color: rgba(var(--george-blue-rgb), 0.1);
}

div[class^="AddTopicButton-"],
div[class^="AssistantAddItem-"] {
  border: var(--all-stroke) dashed var(--color-black);
  border-radius: var(--round-corner-1);
}

div[class^="AddTopicButton-"]:hover,
div[class^="AssistantAddItem-"]:hover {
  font-weight: var(--fw-bold);
  scale: 102%;
  transition: all 0.2 var(--easing-standard);
}

.topics-count {
  font-size: 1em;
}

/* === 侧边栏图标 === */
#app-sidebar [class^="Icon-"] {
  background: transparent !important;
  color: var(--color-black);
  margin: 4px 4px 2px;
  position: relative;
  border-radius: var(--round-corner-1);
  border: var(--all-stroke) solid var(--stroke-black) !important;
  scale: 102%;
}

#app-sidebar [class^="Icon-"].active {
  box-shadow: 0 3px 0 0 var(--stroke-black) !important;
  background: var(--george-blue) !important;
  transition: all 0.2s ease;
  color: var(--color-white) !important;
}

#app-sidebar [class^="Icon-"]:hover {
  box-shadow: 0 3px 0 0 var(--stroke-black) !important;
  background: var(--peppa-pink) !important;
  transition: all 0.3s var(--easing-bounce);
  color: var(--color-white) !important;
  transform: var(--trans-rotate-r);
}

#app-sidebar [class^="Icon-"]:hover svg,
#app-sidebar [class^="Icon-"].active svg {
  color: var(--color-white) !important;

}

/* === 导航栏图标 === */
div[class^="NavbarIcon-"] {
  position: relative;
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  background: transparent;
}

div[class^="NavbarIcon-"]:hover {
  background: var(--peppa-orange);
  transform: var(--trans-rotate-l);
  transition: all 0.3s var(--easing-bounce);
  box-shadow: 0 4px 0 0 var(--color-black);
}

/* === 按钮通用样式 === */
button,
.message-action-button,
.ant-btn.ant-btn-circle.ant-btn {
  position: relative;
  transition: all 0.3s var(--easing-bounce);
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  background: rgba(var(--color-white-rgb), 0.5);
  color: var(--color-black);
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  margin-top: 4px;
}

button:hover,
.message-action-button:hover,
.ant-btn.ant-btn-circle.ant-btn:hover {
  background: var(--peppa-orange) !important;
  color: var(--color-white) !important;
  transform: var(--trans-up);
  box-shadow: 0 4px 0 0 var(--color-black) !important;
}

button:active {
  transform: translateY(0);
  box-shadow: 0 0 0 0 var(--color-black) !important;
}

div[class^="VisibleTools-"],
.menubar.show {
  overflow: visible;
}

/* === 折叠面板 === */
.ant-collapse {
  background: transparent !important;
  border: none !important;
}

.ant-collapse-item {
  border: var(--all-stroke) solid var(--stroke-black) !important;
  border-radius: var(--round-corner-1) !important;
  margin-bottom: 10px;
  overflow: hidden;
  transition: all 0.3s var(--easing-bounce);
  animation: fadeIn 0.5s ease-out;
  background: var(--color-white);
}

.ant-collapse-item:hover {
  transform: var(--trans-up);
  box-shadow: 0 4px 0 0 var(--color-black);
}

.ant-collapse-header {
  background: var(--peppa-purple) !important;
  color: var(--color-white) !important;
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  border-bottom: var(--all-stroke) solid var(--stroke-black) !important;
}

.ant-collapse-content {
  background: var(--color-collapse) !important;
  border-top: var(--all-stroke) solid var(--stroke-black) !important;
}

/* === Markdown 样式 === */
.markdown h2,
.bubble .message-content-container h2 {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-size: 1.4em;
  font-weight: var(--fw-bold);
  color: var(--stroke-black);
  background: var(--peppa-pink);
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  padding: 12px 20px;
  margin: 16px 0;
  box-shadow: 0 4px 0 0 var(--stroke-black);
  animation: fadeIn 0.5s ease-out;
  text-align: center;
}

.markdown h2:hover,
.bubble .message-content-container h2:hover {
  animation: wiggle 0.5s ease-in-out;
}

.markdown h3,
.bubble .message-content-container h3 {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-size: 1.3em;
  font-weight: var(--fw-bold);
  color: var(--color-white);
  background: var(--george-blue);
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  padding: 10px 18px;
  margin: 14px 0;
  box-shadow: 0 3px 0 0 var(--stroke-black);
  animation: fadeIn 0.6s ease-out;
}

.markdown h4,
.bubble .message-content-container h4 {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-size: 1.2em;
  font-weight: var(--fw-bold);
  color: var(--stroke-black);
  background: var(--sun-yellow);
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  padding: 8px 16px;
  margin: 12px 0;
  box-shadow: 0 3px 0 0 var(--stroke-black);
}

.markdown p {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  line-height: 1.8;
  margin: 12px 0;
  color: var(--color-text-1);
}

/* === 表格 === */
.markdown table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  margin: 16px 0;
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  overflow: hidden;
  animation: fadeIn 0.5s ease-out;
}

.markdown th {
  background: var(--peppa-pink) !important;
  color: var(--color-white) !important;
  padding: 14px 18px !important;
  border: var(--all-stroke) solid var(--color-black) !important;
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold) !important;
  font-size: 1.1em;
  text-align: center;
}

.markdown td {
  padding: 14px 18px !important;
  border: var(--all-stroke) solid var(--color-black) !important;
  color: var(--color-text-1);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  text-align: center;
  background: var(--george-blue);
  transition: all 0.3s var(--easing-bounce);
}

.markdown tr:nth-child(even) td {
  background: rgba(var(--peppa-pink-rgb), 0.1) !important;
}

.markdown tr:hover td {
  background: var(--sun-yellow) !important;
  transform: scale(1.02);
}

/* === 代码块 === */
.markdown pre {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  overflow: hidden;
  margin: 16px 0;
  animation: fadeIn 0.5s ease-out;
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.markdown pre [class^="CodeHeader-"] {
  background: var(--grass-green) !important;
  border-bottom: 2px solid var(--stroke-black);
  padding: 10px 18px;
  font-family: "Bubblegum Sans", "Comic Neue", sans-serif !important;
  font-weight: var(--fw-bold);
  color: var(--color-white);
}

.markdown code:not(pre code) {
  background: rgba(var(--sun-yellow-rgb), 0.7) !important;
  color: var(--stroke-black) !important;
  padding: 3px 8px;
  border-radius: var(--round-corner-1);
  border: var(--all-stroke) dashed var(--color-black);
  font-family: "JetBrains Mono", "Fira Code", monospace !important;
  font-size: 0.9em;
  font-weight: var(--fw-bold);
}

/* === 引用块 === */
.markdown blockquote {
  border: var(--all-stroke) solid var(--color-black);
  border-left: 6px solid var(--peppa-orange);
  background: rgba(var(--peppa-orange-rgb), 0.2) !important;
  padding: 14px 18px;
  margin: 16px 0;
  border-radius: var(--round-corner-1);
  box-shadow: 0 3px 0 0 var(--stroke-black);
  animation: slideIn 0.5s ease-out;
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

/* === 列表 === */
.markdown ul li::marker {
  color: var(--peppa-red);
  font-size: 1.5em;
  mix-blend-mode: lighten;
}

.markdown ol li::marker {
  color: var(--peppa-purple);
  font-weight: var(--fw-bold);
  font-size: 1.2em;
  mix-blend-mode: lighten;
}

.markdown li {
  margin: 10px 0;
  transition: all 0.3s var(--easing-bounce);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.markdown li:hover {
  transform: translateX(8px);
  font-weight: var(--fw-bold);
}

/* === 链接和强调文本 === */
a {
  color: var(--peppa-orange);
  font-weight: var(--fw-bold);
  text-decoration: none;
  /* border-bottom: 2px solid var(--george-blue); */
  transition: all 0.3s var(--easing-bounce);
  display: inline-block;
}

a:hover {
  color: var(--color-white);

  border-bottom-color: var(--peppa-pink);
  transform: var(--trans-up);
}

.markdown strong,
.markdown b {
  font-weight: var(--fw-bold) !important;
  color: var(--color-black);
  background: rgba(var(--color-white-rgb), 0.4);
  /* border: var(--all-stroke) solid var(--color-black); */
  padding: 2px 8px;
  border-radius: var(--round-corner-1);
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.markdown em,
.markdown i {
  font-style: italic;
  color: var(--peppa-purple);
  font-weight: var(--fw-bold);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

/* === 分割线 === */
.markdown hr {
  border: none;
  height: 4px;
  background: var(--stroke-black);
  margin: 24px 0;
  border-radius: var(--round-corner-1);
}

/* === 图片 === */
.markdown img {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
  transition: all 0.3s var(--easing-bounce);
  animation: fadeIn 0.6s ease-out;
}

.markdown img:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 6px 0 0 var(--stroke-black);
}

/* === Ant Design 组件样式 === */
.ant-avatar,
.ant-avatar-css-var,
.ant-avatar>img {
  border: var(--all-stroke) solid var(--color-black);
  transition: all 0.3s var(--easing-bounce);
  background: transparent;
  border-radius: 100%;
  box-shadow: 0 4px 0 0 var(--color-black);
}

.ant-avatar:hover {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

/* 分段控制器 */
.ant-segmented-thumb-motion-appear-active {
  display: none !important;
}

.and-segmented,
.ant-segmented.ant-segmented-shape-round {
  border-radius: var(--round-corner-1);
  background: transparent;
  border: var(--all-stroke) solid transparent;
}

.ant-segmented-group .ant-segmented-item-label {
  position: relative;
  border: var(--all-stroke) solid var(--stroke-black) !important;
  border-radius: var(--round-corner-1) !important;
  transition: all 0.3s ease;
  background: var(--color-white);
  color: var(--color-black);
}

.ant-segmented-group .ant-segmented-item-label .anticon,
.ant-segmented-group .ant-segmented-item-label .iconfont {
  border: var(--all-stroke) solid var(--stroke-black) !important;
  border-radius: var(--round-corner-1);
  padding: 4px 12px;
  font-family: "Bubblegum Sans", "Comic Neue", sans-serif !important;
  font-weight: var(--fw-base);
  transition: all 0.3s var(--easing-bounce);
  background: var(--grass-green) !important;
  color: white;
}

.ant-segmented-group .ant-segmented-item-label[aria-selected="true"],
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"] .anticon,
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"] .iconfont {
  border: var(--all-stroke) solid var(--stroke-black);
  border-radius: var(--round-corner-1);
  background: var(--peppa-purple);
  box-shadow: 0 3px 0 0 var(--stroke-black) !important;
  color: var(--color-white);
}

.ant-segmented-group .ant-segmented-item-label:hover[aria-selected="true"],
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"]:hover .anticon,
.ant-segmented-group .ant-segmented-item-label[aria-selected="true"]:hover .iconfont {
  transform: var(--trans-up) !important;
  box-shadow: 0 3px 0 0 var(--stroke-black) !important;
  background-color: var(--peppa-purple);
  color: var(--color-white);
}

.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]),
.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]) .anticon,
.ant-segmented-group .ant-segmented-item-label:hover:not([aria-selected="true"]) .iconfont {
  transform: var(--trans-up) !important;
  box-shadow: 0 3px 0 0 var(--stroke-black) !important;
  background-color: var(--sun-yellow);
  color: var(--color-white);
}

/* 标签 */
.ant-tag {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  padding: 4px 12px;
  font-family: "Bubblegum Sans", "Comic Neue", sans-serif !important;
  font-weight: var(--fw-bold);
  transition: all 0.3s var(--easing-bounce);
  background: var(--grass-green);
  color: white;
}

.ant-tag:hover {
  transform: scale(1.1) rotate(-3deg);
  box-shadow: 0 3px 0 0 var(--stroke-black);
}

/* 徽章 */
.ant-badge-count {
  background: var(--peppa-orange) !important;
  border: var(--all-stroke) solid var(--color-black);
  box-shadow: 0 2px 0 0 var(--stroke-black);
  font-family: "Bubblegum Sans", sans-serif !important;
  font-weight: var(--fw-bold);
  animation: bounce 1s ease-in-out infinite;
}

/* 模态框 */
.ant-modal-root .ant-modal-centered .ant-modal,
.ant-modal:not(.ant-modal-confirm) .ant-modal-content

/*.ant-modal .ant-modal-content */
  {
  /* border: var(--all-stroke) solid var(--color-black) !important; */
  border-radius: var(--round-corner-1) !important;
  box-shadow: 0 8px 0 0 var(--stroke-black) !important;
  background: var(--color-white);
}


.ant-modal .ant-modal-close {
  background-color: var(--color-white);
  border-radius: var(--round-corner-1);
}

.ant-modal-header {
  background: var(--peppa-purple);
  border-bottom: 2px solid var(--stroke-black) !important;
  border-radius: var(--round-corner-1) 0 0;
}

.ant-modal-title {
  color: var(--color-white) !important;
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  font-size: 1.3em;
}

/* 通知 */
.ant-notification-notice {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black) !important;
  animation: slideIn 0.4s ease-out;
  background: var(--color-white);
}

/* 警告框 */
.ant-alert {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  animation: fadeIn 0.5s ease-out;
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.ant-alert-success {
  background: var(--grass-green) !important;
  color: white;
}

.ant-alert-info {
  background: var(--george-blue) !important;
  color: white;
}

.ant-alert-warning {
  background: var(--sun-yellow) !important;
  color: var(--stroke-black);
}

.ant-alert-error {
  background: var(--peppa-pink) !important;
  color: white;
}

/* 标签页 */
.ant-tabs-tab {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1) 0 0;
  margin-right: 4px;
  background: var(--color-white);
  transition: all 0.3s var(--easing-bounce);
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
}

.ant-tabs-tab:hover {
  background: var(--sun-yellow) !important;
  transform: translateY(-3px);
}

.ant-tabs-tab-active {
  background: var(--peppa-pink) !important;
  color: var(--color-white) !important;
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.ant-tabs-ink-bar {
  display: none;
}

/* 卡片 */
.ant-card {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
  transition: all 0.3s var(--easing-bounce);
  background: var(--color-white);
}

.ant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 0 0 var(--stroke-black);
}

/* 进度条 */
.ant-progress-outer {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  overflow: hidden;
}

.ant-progress-bg {
  background: var(--grass-green) !important;
  border-right: 2px solid var(--stroke-black);
}

/* 开关 */
.ant-switch {
  border: var(--all-stroke) solid var(--color-black) !important;
  background: var(--color-white) !important;
}

.ant-switch-checked {
  background: var(--grass-green) !important;
}

.ant-switch-handle {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1) !important;
}

/* 滑块 */
.ant-slider-rail {
  background: var(--color-white);
  border: var(--all-stroke) solid var(--color-black);
  height: 8px;
}

.ant-slider-track {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black);
  height: 8px;
}

.ant-slider-handle:hover,
.ant-slider-handle:focus {
  box-shadow: 0 4px 0 0 var(--stroke-black) !important;
  transform: scale(1.2);
}

.ant-slider .ant-slider-handle::after {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
}

/* 复选框 */
.ant-checkbox-wrapper {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-checkbox-inner {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  background: var(--color-white);
}

.ant-checkbox-checked .ant-checkbox-inner {
  background: var(--grass-green) !important;
  border-color: var(--stroke-black) !important;
}

.ant-checkbox-checked .ant-checkbox-inner::after {
  border-color: var(--color-white) !important;
  border-width: 3px;
}

/* 单选框 */
.ant-radio-wrapper {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-radio-inner {
  border: var(--all-stroke) solid var(--color-black) !important;
  background: var(--color-white);
}

.ant-radio-checked .ant-radio-inner {
  border-color: var(--stroke-black) !important;
}

.ant-radio-inner::after {
  background: var(--peppa-pink) !important;
}

/* 选择器 */
.ant-select-selector {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-select-focused .ant-select-selector {
  border-color: var(--peppa-pink) !important;
  box-shadow: 0 0 0 3px rgba(var(--peppa-pink-rgb), 0.3) !important;
}

.ant-select-dropdown {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.ant-select-item-option-selected {
  background: var(--sun-yellow) !important;
  font-weight: var(--fw-bold);
}

.ant-select-item-option:hover {
  background: var(--peppa-pink) !important;
  color: var(--color-white) !important;
}

/* 日期选择器 */
.ant-picker {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-picker-focused {
  border-color: var(--george-blue) !important;
  box-shadow: 0 0 0 3px rgba(var(--george-blue-rgb), 0.3) !important;
}

.ant-picker-dropdown {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black);
}

.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
  border: 2px solid var(--george-blue);
}

/* 下拉菜单 */
.ant-dropdown-menu {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
  background: var(--color-white);
}

.ant-dropdown-menu-item {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-dropdown-menu-item:hover {
  background: var(--grass-green) !important;
  color: var(--color-white) !important;
}

/* 菜单 */
.ant-menu {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  background: var(--color-white);
}

.ant-menu-item {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-menu-item-selected {
  background: var(--peppa-orange) !important;
  color: var(--color-white) !important;
}

.ant-menu-item:hover {
  background: var(--sun-yellow) !important;
}

/* 工具提示 */
.ant-tooltip-inner {
  background: var(--peppa-purple) !important;
  color: var(--color-white) !important;
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 3px 0 0 var(--stroke-black);
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
}

.ant-tooltip-arrow-content {
  background: var(--peppa-purple) !important;
  border: var(--all-stroke) solid var(--color-black);
}

/* 弹出确认框 */
.ant-popconfirm-inner {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  box-shadow: 0 4px 0 0 var(--stroke-black);
}

.ant-popconfirm-message-title {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
}

div[role^="dialog"],
.ant-dropdown .ant-dropdown-menu,
.ant-dropdown-menu-submenu {
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
}

/* 抽屉 */
.ant-drawer-content {
  background: var(--color-white) !important;
  border: var(--all-stroke) solid var(--color-black);
}

.ant-drawer-header {
  background: var(--george-blue);
  border-bottom: 2px solid var(--stroke-black) !important;
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  color: white;
}

/* 步骤条 */
.ant-steps-item-finish .ant-steps-item-icon {
  background: var(--grass-green) !important;
  border: var(--all-stroke) solid var(--color-black) !important;
}

.ant-steps-item-process .ant-steps-item-icon {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black) !important;
}

.ant-steps-item-wait .ant-steps-item-icon {
  background: var(--color-white) !important;
  border: var(--all-stroke) solid var(--color-black) !important;
}

.ant-steps-item-tail::after {
  background: var(--stroke-black) !important;
  height: 2px;
}

/* 时间轴 */
.ant-timeline-item-head {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black) !important;
  width: 14px;
  height: 14px;
}

.ant-timeline-item-tail {
  border-left: 2px solid var(--stroke-black) !important;
}

/* 面包屑 */
.ant-breadcrumb {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

.ant-breadcrumb-link {
  color: var(--george-blue);
  font-weight: var(--fw-bold);
}

.ant-breadcrumb-link:hover {
  color: var(--peppa-pink) !important;
}

.ant-breadcrumb-separator {
  color: var(--stroke-black) !important;
  font-weight: var(--fw-bold);
}

/* 分页 */
.ant-pagination-item {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  font-family: "Bubblegum Sans", sans-serif !important;
  font-weight: var(--fw-bold);
  background: var(--color-white);
}

.ant-pagination-item-active {
  background: var(--peppa-pink) !important;
  border-color: var(--stroke-black) !important;
  box-shadow: 0 3px 0 0 var(--stroke-black);
}

.ant-pagination-item-active a {
  color: var(--color-white) !important;
}

.ant-pagination-item:hover {
  background: var(--sun-yellow) !important;
  transform: scale(1.1);
}

.ant-pagination-prev,
.ant-pagination-next {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  background: var(--color-white);
}

.ant-pagination-prev:hover,
.ant-pagination-next:hover {
  background: var(--grass-green) !important;
  color: var(--color-white) !important;
}

/* 上传 */
.ant-upload-drag {
  border: 2px dashed var(--stroke-black) !important;
  border-radius: var(--round-corner-1);
  background: var(--color-white);
}

.ant-upload-drag:hover {
  border-color: var(--peppa-pink) !important;
  background: rgba(var(--peppa-pink-rgb), 0.1) !important;
}

.ant-upload-list-item {
  border: var(--all-stroke) solid var(--color-black) !important;
  border-radius: var(--round-corner-1);
  margin-top: 8px;
  background: var(--color-white);
}

.ant-upload-list-item:hover {
  background: rgba(var(--sun-yellow-rgb), 0.3) !important;
}

/* 评分 */
.ant-rate-star {
  font-size: 28px;
}

.ant-rate-star-full {
  color: var(--sun-yellow) !important;
  filter: drop-shadow(0 0 2px var(--stroke-black));
}

.ant-rate-star-half .ant-rate-star-first {
  color: var(--sun-yellow) !important;
}

/* 骨架屏 */
.ant-skeleton-element {
  background: var(--color-white);
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
}

/* 空状态 */
.ant-empty-description {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  color: var(--color-text-2);
  font-weight: var(--fw-bold);
}

/* 结果页 */
.ant-result-title {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  color: var(--stroke-black);
}

.ant-result-subtitle {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

/* 统计数值 */
.ant-statistic-title {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
  color: var(--color-text-2);
  font-weight: var(--fw-bold);
}

.ant-statistic-content {
  font-family: "Bubblegum Sans", sans-serif !important;
  font-weight: var(--fw-bold);
  color: var(--peppa-pink) !important;
}

/* 描述列表 */
.ant-descriptions-item-label {
  font-family: "Bubblegum Sans", "Comic Neue", "Noto Sans SC", sans-serif !important;
  font-weight: var(--fw-bold);
  color: var(--george-blue);
}

.ant-descriptions-item-content {
  font-family: "Comic Neue", "Noto Sans SC", sans-serif !important;
}

/* 回到顶部 */
.ant-back-top {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black);
  border-radius: 50%;
  box-shadow: 0 4px 0 0 var(--stroke-black);
  transition: all 0.3s var(--easing-bounce);
}

.ant-back-top:hover {
  transform: scale(1.2) rotate(360deg);
  box-shadow: 0 6px 0 0 var(--stroke-black);
  background: var(--george-blue) !important;
}

/* 锚点 */
.ant-anchor-link-active>.ant-anchor-link-title {
  color: var(--peppa-pink) !important;
  font-weight: var(--fw-bold);
}

.ant-anchor-ink::before {
  background: var(--peppa-pink) !important;
  width: 3px;
}

/* 滚动条 */
::-webkit-scrollbar {
  width: 14px;
  height: 14px;
}

::-webkit-scrollbar-track {
  background: var(--color-white);
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
}

::-webkit-scrollbar-thumb {
  background: var(--peppa-pink) !important;
  border: var(--all-stroke) solid var(--color-black);
  border-radius: var(--round-corner-1);
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--george-blue) !important;
}

/* === 代码编辑器配色 === */
body[theme-mode="light"] .cm-line,
body[theme-mode="dark"] .cm-line {
  background: transparent !important;
  color: var(--color-text-1) !important;
}

body[theme-mode="light"] .cm-content span,
body[theme-mode="dark"] .cm-content span {
  background-color: transparent !important;
}

/* 关键字 */
body[theme-mode="light"] .cm-content .ͼph {
  color: #ff8fab !important;
  font-weight: var(--fw-bold);
}

body[theme-mode="dark"] .cm-content .ͼph {
  color: #ff6b9d !important;
  font-weight: var(--fw-bold);
}

/* 字符串 */
body[theme-mode="light"] .cm-content .ͼpq {
  color: #4da6ff !important;
}

body[theme-mode="dark"] .cm-content .ͼpq {
  color: #3d8ccc !important;
}

/* 变量 */
body[theme-mode="light"] .cm-content .ͼpd {
  color: #b388ff !important;
}

body[theme-mode="dark"] .cm-content .ͼpd {
  color: #9b6fd9 !important;
}

/* 函数名 */
body[theme-mode="light"] .cm-content .ͼp9 {
  color: #2196f3 !important;
  font-weight: var(--fw-bold);
}

body[theme-mode="dark"] .cm-content .ͼp9 {
  color: #5dade2 !important;
  font-weight: var(--fw-bold);
}

/* 数字 */
body[theme-mode="light"] .cm-content .ͼpf {
  color: #ffd700 !important;
}

body[theme-mode="dark"] .cm-content .ͼpf {
  color: #e6c200 !important;
}

/* 操作符 */
body[theme-mode="light"] .cm-content .ͼpg,
body[theme-mode="light"] .cm-content .ͼpi {
  color: #2d2d2d !important;
  font-weight: var(--fw-bold);
}

body[theme-mode="dark"] .cm-content .ͼpg,
body[theme-mode="dark"] .cm-content .ͼpi {
  color: #e0e0e0 !important;
  font-weight: var(--fw-bold);
}

/* 注释 */
body[theme-mode="light"] .cm-content .ͼpc {
  color: #7f8c8d !important;
  font-style: italic !important;
}

body[theme-mode="dark"] .cm-content .ͼpc {
  color: #95a5a6 !important;
  font-style: italic !important;
}

/* 属性名 */
body[theme-mode="light"] .cm-content .ͼpj,
body[theme-mode="light"] .cm-content .ͼpk {
  color: #ff9933 !important;
}

body[theme-mode="dark"] .cm-content .ͼpj,
body[theme-mode="dark"] .cm-content .ͼpk {
  color: #e67e22 !important;
}

/* 标签 */
body[theme-mode="light"] .cm-content .ͼpl,
body[theme-mode="light"] .cm-content .ͼpm {
  color: #7ed957 !important;
}

body[theme-mode="dark"] .cm-content .ͼpl,
body[theme-mode="dark"] .cm-content .ͼpm {
  color: #5fb83d !important;
}

/* 类名 */
body[theme-mode="light"] .cm-content .ͼpn,
body[theme-mode="light"] .cm-content .ͼpo {
  color: #9b59d0 !important;
}

body[theme-mode="dark"] .cm-content .ͼpn,
body[theme-mode="dark"] .cm-content .ͼpo {
  color: #9b6fd9 !important;
}

/* 行号区域 */
body[theme-mode="light"] .cm-gutters {
  background: rgba(255, 255, 255, 0.95) !important;
}

body[theme-mode="dark"] .cm-gutters {
  background: rgba(30, 35, 50, 0.95) !important;
}

body[theme-mode="light"] .cm-gutters,
body[theme-mode="dark"] .cm-gutters {
  border-right: 2px solid var(--stroke-black) !important;
}

/* 行号颜色 */
body[theme-mode="light"] .cm-lineNumbers .cm-gutterElement {
  color: rgba(74, 74, 74, 0.7) !important;
}

body[theme-mode="dark"] .cm-lineNumbers .cm-gutterElement {
  color: rgba(176, 176, 176, 0.7) !important;
}

body[theme-mode="light"] .cm-lineNumbers .cm-gutterElement,
body[theme-mode="dark"] .cm-lineNumbers .cm-gutterElement {
  font-weight: var(--fw-bold);
}

/* 光标 */
body[theme-mode="light"] .cm-cursor,
body[theme-mode="dark"] .cm-cursor {
  border-left: 2px solid var(--peppa-pink) !important;
  animation: pulse 1.5s ease-in-out infinite;
}

/* 选中背景 */
body[theme-mode="light"] .cm-selectionBackground,
body[theme-mode="dark"] .cm-selectionBackground {
  background: rgba(var(--peppa-pink-rgb), 0.3) !important;
}

/* 激活行 */
body[theme-mode="light"] .cm-activeLine {
  background: rgba(var(--sun-yellow-rgb), 0.1) !important;
}

body[theme-mode="dark"] .cm-activeLine {
  background: rgba(var(--george-blue-rgb), 0.1) !important;
}

/* === 全局样式 === */
::selection,
::-moz-selection {
  background: var(--sun-yellow);
  color: var(--stroke-black);
}

*:focus-visible {
  outline: 2px solid var(--peppa-pink);
  outline-offset: 2px;
}

/* === 响应式 === */
@media (max-width: 768px) {

  .markdown h2,
  .bubble .message-content-container h2 {
    font-size: 1.6em;
  }

  .markdown h3,
  .bubble .message-content-container h3 {
    font-size: 1.3em;
  }

  button {
    font-size: 0.95em;
  }
}

/* === 打印样式 === */
@media print {
  body {
    background: var(--color-white) !important;
  }

  * {
    border-color: black !important;
  }

  .markdown * {
    color: black !important;
    background: var(--color-white) !important;
  }
}

/* === Over === */`
}