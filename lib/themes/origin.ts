const originCss = `
:root {
  --color-white: #ffffff;
  --color-white-soft: rgba(255, 255, 255, 0.8);
  --color-white-mute: rgba(255, 255, 255, 0.94);

  --color-black: #181818;
  --color-black-soft: #222222;
  --color-black-mute: #333333;

  --color-gray-1: #515c67;
  --color-gray-2: #414853;
  --color-gray-3: #32363f;

  --color-text-1: rgba(255, 255, 245, 0.86);
  --color-text-2: rgba(235, 235, 245, 0.6);
  --color-text-3: rgba(235, 235, 245, 0.38);

  --color-background: var(--color-black);
  --color-background-soft: var(--color-black-soft);
  --color-background-mute: var(--color-black-mute);
  --color-background-opacity: rgba(34, 34, 34, 0.7);
  --inner-glow-opacity: 0.3; // For the glassmorphism effect in the dropdown menu

  --color-primary: #00b96b;
  --color-primary-soft: #00b96b99;
  --color-primary-mute: #00b96b33;

  --color-text: var(--color-text-1);
  --color-icon: #ffffff99;
  --color-icon-white: #ffffff;
  --color-border: #ffffff15;
  --color-border-soft: #ffffff10;
  --color-border-mute: #ffffff05;
  --color-error: #f44336;
  --color-link: #1677ff;
  --color-code-background: #323232;
  --color-hover: rgba(40, 40, 40, 1);
  --color-active: rgba(55, 55, 55, 1);
  --color-frame-border: #333;
  --color-group-background: var(--color-background-soft);

  --color-reference: #404040;
  --color-reference-text: #ffffff;
  --color-reference-background: #0b0e12;

  --navbar-background-mac: rgba(20, 20, 20, 0.55);
  --navbar-background: #1f1f1f;

  --navbar-height: 40px;
  --sidebar-width: 50px;
  --status-bar-height: 40px;
  --input-bar-height: 100px;

  --assistants-width: 275px;
  --topic-list-width: 275px;
  --settings-width: 250px;

  --chat-background: #111111;
  --chat-background-user: #28b561;
  --chat-background-assistant: #2c2c2c;
  --chat-text-user: var(--color-black);

  --list-item-border-radius: 16px;
}

body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body[theme-mode='light'] {
  --color-white: #ffffff;
  --color-white-soft: #f2f2f2;
  --color-white-mute: #eee;

  --color-black: #1b1b1f;
  --color-black-soft: #262626;
  --color-black-mute: #363636;

  --color-gray-1: #8e8e93;
  --color-gray-2: #aeaeb2;
  --color-gray-3: #c7c7cc;

  --color-text-1: rgba(0, 0, 0, 1);
  --color-text-2: rgba(0, 0, 0, 0.6);
  --color-text-3: rgba(0, 0, 0, 0.38);

  --color-background: var(--color-white);
  --color-background-soft: var(--color-white-soft);
  --color-background-mute: var(--color-white-mute);
  --color-background-opacity: rgba(235, 235, 235, 0.7);
  --inner-glow-opacity: 0.1;

  --color-primary: #00b96b;
  --color-primary-soft: #00b96b99;
  --color-primary-mute: #00b96b33;

  --color-text: var(--color-text-1);
  --color-icon: #00000099;
  --color-icon-white: #000000;
  --color-border: #00000015;
  --color-border-soft: #00000010;
  --color-border-mute: #00000005;
  --color-error: #f44336;
  --color-link: #1677ff;
  --color-code-background: #e3e3e3;
  --color-hover: var(--color-white-mute);
  --color-active: var(--color-white-soft);
  --color-frame-border: #ddd;
  --color-group-background: var(--color-white);

  --color-reference: #cfe1ff;
  --color-reference-text: #000000;
  --color-reference-background: #f1f7ff;

  --navbar-background-mac: rgba(255, 255, 255, 0.55);
  --navbar-background: rgba(244, 244, 244);

  --chat-background: #f3f3f3;
  --chat-background-user: #95ec69;
  --chat-background-assistant: #ffffff;
  --chat-text-user: var(--color-text);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-weight: normal;
}

*:focus {
  outline: none;
}

* {
  -webkit-tap-highlight-color: transparent;
}

ul {
  list-style: none;
}

input,
textarea,
[contenteditable='true'],
.markdown,
#messages,
.selectable,
pre,
code {
  -webkit-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  user-select: text !important;
}

a {
  -webkit-user-drag: none;
}

.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #000;
  box-shadow:
    32px 0 #000,
    -32px 0 #000;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

.drag {
  -webkit-app-region: drag;
}

.nodrag {
  -webkit-app-region: no-drag;
}

.text-nowrap {
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
}

.bubble {
  background-color: var(--chat-background);
  #chat-main {
    background-color: var(--chat-background);
  }
  #messages {
    background-color: var(--chat-background);
  }
  #inputbar {
    margin: -5px 15px 15px 15px;
    background: var(--color-background);
  }
  .system-prompt {
    background-color: var(--chat-background-assistant);
  }
  .message-content-container {
    margin: 5px 0;
    border-radius: 8px;
    padding: 10px 15px 0 15px;
  }
  .message-thought-container {
    margin-top: 8px;
  }
  .message-user {
    color: var(--chat-text-user);
    .markdown,
    .anticon,
    .iconfont,
    .message-tokens {
      color: var(--chat-text-user) !important;
    }
    .message-action-button:hover {
      background-color: var(--color-white-soft);
    }
  }
  .group-message-wrapper {
    background-color: var(--color-background);
    .message-content-container {
      width: 100%;
      border: 1px solid var(--color-background-mute);
    }
  }
  .group-menu-bar {
    background-color: var(--color-background);
  }
  code {
    color: var(--color-text);
  }
}

.markdown {
  color: var(--color-text);
  line-height: 1.6;
  user-select: text;
  word-break: break-word;

  h1:first-child,
  h2:first-child,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1em 0 1em 0;
    font-weight: 800;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  h1 {
    font-size: 2em;
    border-bottom: 0.5px solid var(--color-border);
    padding-bottom: 0.3em;
  }

  h2 {
    font-size: 1.5em;
    border-bottom: 0.5px solid var(--color-border);
    padding-bottom: 0.3em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.9em;
  }

  h6 {
    font-size: 0.8em;
  }

  p {
    margin: 1em 0;
    white-space: pre-wrap;

    &:last-child {
      margin-bottom: 5px;
    }

    &:first-child {
      margin-top: 0;
    }

    &:has(+ ul) {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: initial;
  }

  ul,
  ol {
    padding-left: 1.5em;
    margin: 1em 0;
  }

  li {
    margin-bottom: 0.5em;
    pre {
      margin: 1.5em 0;
    }
    &::marker {
      color: var(--color-text-3);
    }
  }

  li > ul,
  li > ol {
    margin: 0.5em 0;
  }

  hr {
    border: none;
    border-top: 0.5px solid var(--color-border);
    margin: 20px 0;
    background-color: var(--color-border);
  }

  span {
    white-space: pre;
  }

  p code,
  li code {
    background: var(--color-background-mute);
    padding: 3px 5px;
    border-radius: 5px;
    word-break: keep-all;
    white-space: pre;
  }

  code {
    font-family: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
  }

  pre {
    border-radius: 5px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    background-color: var(--color-background-mute);
    &:has(> .mermaid) {
      background-color: transparent;
    }
    &:not(pre pre) {
      > code:not(pre pre > code) {
        padding: 15px;
        display: block;
      }
    }
    pre {
      margin: 0 !important;
      code {
        background: none;
        padding: 0;
        border-radius: 0;
      }
    }
  }

  pre + pre {
    margin-top: 10px;
  }

  blockquote {
    margin: 1em 0;
    padding-left: 1em;
    color: var(--color-text-light);
    border-left: 4px solid var(--color-border);
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  table {
    border-collapse: collapse;
    margin: 1em 0;
    width: 100%;
  }

  th,
  td {
    border: 0.5px solid var(--color-border);
    padding: 0.5em;
  }

  th {
    background-color: var(--color-background-mute);
    font-weight: bold;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a,
  .link {
    color: var(--color-link);
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  sup,
  sub {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
    border-radius: 50%;
    background-color: var(--color-reference);
    color: var(--color-reference-text);
    padding: 2px 5px;
    zoom: 0.8;
    & > span.link {
      color: var(--color-reference-text);
    }
  }

  sub {
    bottom: -0.25em;
  }

  .footnote-ref {
    font-size: 0.8em;
    vertical-align: super;
    line-height: 0;
    margin: 0 2px;
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.footnotes {
  margin-top: 1em;
  margin-bottom: 1em;
  padding-top: 1em;

  background-color: var(--color-reference-background);
  border-radius: 8px;
  padding: 8px 12px;

  h4 {
    margin-bottom: 5px;
    font-size: 12px;
  }

  a {
    color: var(--color-link);
  }

  ol {
    padding-left: 1em;
    margin: 0;
    li:last-child {
      margin-bottom: 0;
    }
  }

  li {
    font-size: 0.9em;
    margin-bottom: 0.5em;
    color: var(--color-text-light);

    p {
      display: inline;
      margin: 0;
    }
  }

  .footnote-backref {
    font-size: 0.8em;
    vertical-align: super;
    line-height: 0;
    margin-left: 5px;
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

emoji-picker {
  --border-size: 0;
}

#content-container {
  background-color: var(--color-background);
  border-top: 0.5px solid var(--color-border);
  border-top-left-radius: 10px;
  border-left: 0.5px solid var(--color-border);
}

#inputbar {
  resize: none;
}

.ant-image-preview-switch-left {
  -webkit-app-region: no-drag;
}

.ant-btn:not(:disabled):focus-visible {
  outline: none;
}

.ant-tabs-tabpane:focus-visible {
  outline: none;
}

.ant-segmented-group {
  gap: 4px;
}

.minapp-drawer {
  max-width: calc(100vw - var(--sidebar-width));
  .ant-drawer-content-wrapper {
    box-shadow: none;
  }
  .ant-drawer-header {
    position: absolute;
    -webkit-app-region: drag;
    min-height: calc(var(--navbar-height) + 0.5px);
    width: calc(100vw - var(--sidebar-width));
    margin-top: -0.5px;
    border-bottom: none;
  }
  .ant-drawer-body {
    padding: 0;
    margin-top: var(--navbar-height);
    overflow: hidden;
    @extend #content-container;
  }
  .minapp-mask {
    background-color: transparent !important;
  }
}

.ant-drawer-header {
  -webkit-app-region: no-drag;
}

.message-attachments {
  .ant-upload-list-item:hover {
    background-color: initial !important;
  }
}

.mention-models-dropdown {
  &.ant-dropdown {
    background: rgba(var(--color-base-rgb), 0.65) !important;
    backdrop-filter: blur(35px) saturate(150%) !important;
    animation-duration: 0.15s !important;
  }

  /* 移动其他样式到 mention-models-dropdown 类下 */
  .ant-slide-up-enter .ant-dropdown-menu,
  .ant-slide-up-appear .ant-dropdown-menu,
  .ant-slide-up-leave .ant-dropdown-menu,
  .ant-slide-up-enter-active .ant-dropdown-menu,
  .ant-slide-up-appear-active .ant-dropdown-menu,
  .ant-slide-up-leave-active .ant-dropdown-menu {
    background: rgba(var(--color-base-rgb), 0.65) !important;
    backdrop-filter: blur(35px) saturate(150%) !important;
  }

  .ant-dropdown-menu {
    /* 保持原有的下拉菜单样式，但限定在 mention-models-dropdown 类下 */
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 4px 12px;
    position: relative;
    background: rgba(var(--color-base-rgb), 0.65) !important;
    backdrop-filter: blur(35px) saturate(150%) !important;
    border: 0.5px solid rgba(var(--color-border-rgb), 0.3);
    border-radius: 10px;
    box-shadow:
      0 0 0 0.5px rgba(0, 0, 0, 0.15),
      0 4px 16px rgba(0, 0, 0, 0.15),
      0 2px 8px rgba(0, 0, 0, 0.12),
      inset 0 0 0 0.5px rgba(255, 255, 255, var(--inner-glow-opacity, 0.1));
    transform-origin: top;
    will-change: transform, opacity;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 0;

    &.no-scrollbar {
      padding-right: 12px;
    }

    &.has-scrollbar {
      padding-right: 2px;
    }

    // Scrollbar styles
    &::-webkit-scrollbar {
      width: 14px;
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border: 4px solid transparent;
      background-clip: padding-box;
      border-radius: 7px;
      background-color: var(--color-scrollbar-thumb);
      min-height: 50px;
      transition: all 0.2s;
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: var(--color-scrollbar-thumb);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-scrollbar-thumb-hover);
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: var(--color-scrollbar-thumb-hover);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 7px;
    }
  }

  .ant-dropdown-menu-item-group {
    margin-bottom: 4px;

    &:not(:first-child) {
      margin-top: 4px;
    }

    .ant-dropdown-menu-item-group-title {
      padding: 5px 12px;
      color: var(--color-text-3);
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      opacity: 0.7;
    }
  }

  // Handle no-results case margin
  .no-results {
    padding: 8px 12px;
    color: var(--color-text-3);
    cursor: default;
    font-size: 13px;
    opacity: 0.8;
    margin-bottom: 40px;

    &:hover {
      background: none;
    }
  }

  .ant-dropdown-menu-item {
    padding: 5px 12px;
    margin: 0 -12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 6px;
    font-size: 13px;

    &:hover {
      background: rgba(var(--color-hover-rgb), 0.5);
    }

    &.ant-dropdown-menu-item-selected {
      background-color: rgba(var(--color-primary-rgb), 0.12);
      color: var(--color-primary);
    }

    .ant-dropdown-menu-item-icon {
      margin-right: 0;
      opacity: 0.9;
    }
  }
}
:root {
  --color-scrollbar-thumb: rgba(255, 255, 255, 0.15);
  --color-scrollbar-thumb-hover: rgba(255, 255, 255, 0.2);
  --color-scrollbar-thumb-right: rgba(255, 255, 255, 0.18);
  --color-scrollbar-thumb-right-hover: rgba(255, 255, 255, 0.25);
}

body[theme-mode='light'] {
  --color-scrollbar-thumb: rgba(0, 0, 0, 0.15);
  --color-scrollbar-thumb-hover: rgba(0, 0, 0, 0.2);
  --color-scrollbar-thumb-right: rgba(0, 0, 0, 0.18);
  --color-scrollbar-thumb-right-hover: rgba(0, 0, 0, 0.25);
}

/* 全局初始化滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--color-scrollbar-thumb);
  &:hover {
    background: var(--color-scrollbar-thumb-hover);
  }
}

pre::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: rgba(0, 0, 0, 0.08);
  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
}

`

export default originCss
