import type { Theme } from '@/lib/types'

export const pulseinteractive: Theme = {
  id: 'pulse-interactive',
  name: 'Pulse Interactive Theme',
  description: 'A theme that improves the interactive experience by adding animations and enhancing the overall look and feel of the interface.',
  lightPreviewUrl: '/pulse-interactive.gif',
  darkPreviewUrl: '/pulse-interactive.gif',
  css: `

  @keyframes clickAnimation {
    0% {
      transform: scale(1); /* 开始时大小为 1 */
    }
    30% {
      transform: scale(0.9);
    }
    60% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1); /* 最后恢复到原始大小 */
    }
  }
  
  @keyframes page-popup-right {
      from {
          transform: translateX(-2em);
          opacity: 0%;
      }
      to {
          transform: translateX(0);
          opacity: 100%;
      }
  }
  
  @keyframes page-popup-left {
      from {
          transform: translateX(2em);
          opacity: 0%;
      }
      to {
          transform: translateX(0);
          opacity: 100%;
      }
  }
  
  :root {
    --button-hover-light: #79BF55;
    --button-hover-dark: #009A39;
    --input-bg-light: #E6E6E6;
    --input-bg-dark: #202020;
    --button-border-radius: 12px;
    --button-border-radius-hover: 8px;
    --button-border-radius-active: 12px;
    --background-light-new: #F3F3F3;
    --background-dark-new: #242424;
    --background-assistant-light-new: #E3E3E3;
    --animation: cubic-bezier(.56, -0.37, .46, 1.58);
    --short-timer: 0.2s;
    --long-timer: 0.5s;
  }
  
  [class^="MessageLineContainer"] {
    background: var(--chat-background);
    border-radius: var(--button-border-radius);

    [class^="MessageItem"]:active {
    animation: clickAnimation var(--long-timer) var(--animation);
    }
  }

  [class^="SettingHelpTextRow"] {
    display: inline-block;
  }
  
  [class^="Icon"]:hover,
  [class^="ant"]:hover,
  [class^="ActionButton"]:hover,
  [class^="TopicListItem"]:hover,
  [class^="ProviderListItem"]:hover,
  [class^="MenuItem"]:hover,
  [class^="MenuButton"]:hover,
  [class^="EmojiBackground"]:hover {
    border-radius: var(--button-border-radius-hover) !important;
    transition: border-radius var(--short-timer) var(--animation);
  }
  
  [class^="Icon"]:active,
  [class^="ant-avatar"]:active,
  [class^="ant-btn"]:active,
  [class^="ant-segmented-item"]:active,
  [class^="anticon"]:active,
  [class^="ant-flex"]:active,
  [class^="ant-collapse"]:active,
  [class^="ant-upload"]:active,
  [class^="ant-divider"]:active,
  [class^="ant-tooltip"]:active,
  [class^="ant-message"]:active,
  [class^="ActionButton"]:active,
  [class^="TopicListItem"]:active,
  [class^="ProviderListItem"]:active,
  [class^="MenuItem"]:active,
  [class^="MenuButton"]:active,
  [class^="EmojiBackground"]:active,
  [class~="ant-dropdown-menu-item"]:active,
  [class~="ant-dropdown-menu-submenu-title"]:active,
  [class~="ant-select-selector"]:active,
  [class~="ant-select-item"]:active {
    border-radius: var(--button-border-radius-active) !important;
    transition: border-radius var(--short-timer) var(--animation);
    animation: clickAnimation var(--long-timer) var(--animation);
  }
  
  [class^="Icon"],
  [class^="ant"],
  [class^="ActionButton"],
  [class^="TopicListItem"],
  [class^="ProviderListItem"],
  [class^="MenuItem"],
  [class^="MenuButton"],
  [class^="EmojiBackground"] {
      border-radius: var(--button-border-radius) !important;
  }
  
  [class^="ant-switch"] {
    border-radius: 100px !important;
  
  }
  
  body[theme-mode=light] {
    background-color: var(--background-light-new);
  }
  
  body[theme-mode=dark] {
    background-color: var(--background-dark-new) !important;
  }
  
  [theme-mode=light] .bubble .message-user .message-action-button:hover {
    background-color: var(--button-hover-light) !important;
  }
  
  [theme-mode=dark] .bubble .message-user .message-action-button:hover {
    background-color: var(--button-hover-dark) !important;
  }
  
  [theme-mode=light] button.ant-btn:hover,
  [theme-mode=dark] button.ant-btn:hover {
    border-radius: var(--button-border-radius) !important;
  }
  
  [theme-mode=light] [class^="ant-input"],
  [theme-mode=light] button.ant-btn-variant-outlined {
    background-color: var(--input-bg-light) !important;
  }
  
  [theme-mode=dark] [class^="ant-input"],
  [theme-mode=dark] button.ant-btn-variant-outlined {
    background-color: var(--input-bg-dark) !important;
  }
  
  [class$="-tabs-content"],
  [class$="-tab"],
  [id^="content-container"],
  [class^="MessageContainer"],
  [class^="SettingContent"],
  [class^="SettingContainer"],
  [class^="SettingGroup"],
  [class^="MenuList"],
  [class^="ProviderList"],
  [class^="Main"],
  [class~="message-assistant"] {
    animation: page-popup-right var(--short-timer) var(--animation);
  }
  
  [class~="message-user"] {
    animation: page-popup-left var(--short-timer) var(--animation);
  }  
  `
  }