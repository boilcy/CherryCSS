import type { Theme } from '@/lib/types'

export const pulseInteractive: Theme = {
  id: 'pulse-interactive',
  name: 'Pulse Interactive Theme',
  description: 'A theme that improves the interactive experience by adding animations and enhancing the overall look and feel of the interface.',
  lightPreviewUrl: '/pulse-interactive.gif',
  darkPreviewUrl: '/pulse-interactive.gif',
  css: `
/* Pulse Interactive User Style v4.0.0 */

/*  Font */
* {
  font-family: Product Sans, Noto Sans SC, Maple Mono NF CN Medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-feature-settings: 'calt', 'cv07', 'cv40', 'ss03', 'ss07', 'ss08', 'ss09', 'ss10', 'ss11';
}

[class^="CodeBlockWrapper"],
[class^="cm"] {
  * {
    font-family: Maple Mono NF CN Medium, monospace !important;
  }
}

code,
.ant-input,
.ant-modal-confirm-content {
  font-family: Maple Mono NF CN Medium !important;
}

/*  Animation*/
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

/*  Color*/
:root {
  --background-light-aero: rgba(255, 255, 255, 0.1);
  --background-dark-aero: rgba(36, 36, 36, 0.1);
  --chat-background-user-light: #5698c3;
  --chat-background-user-dark: #2b73af;
  --button-hover-light: #2983bb;
  --button-hover-dark: #15559a;
  --input-bg-light: #e6e6e6;
  --input-bg-dark: #202020;
  --button-border-radius: 12px;
  --button-border-radius-hover: 8px;
  --button-border-radius-active: 12px;
  --background-light-new: #f3f3f3;
  --background-dark-new: #242424;
  --background-assistant-light-new: #e3e3e3;
  --animation: cubic-bezier(0.56, -0.37, 0.46, 1.58);
  --short-timer: 0.2s;
  --long-timer: 0.5s;
  --background-light-aero: rgba(243, 243, 243, 0.15);
  --background-dark-aero: rgba(36, 36, 36, 0.1);
}

/* v1.2.8 */
[class^="Menus"] {
  [class^="Icon"]:active {
    border-radius: var(--button-border-radius-active) !important;
    transition: border-radius var(--short-timer) var(--animation);
    animation: clickAnimation var(--long-timer) var(--animation);
  }
}

/* v1.4.0 */

[theme-mode="light"] .message-content-container-user {
  background-color: var(--chat-background-user-light) !important;
}

[theme-mode="dark"] .message-content-container-user {
  background-color: var(--chat-background-user-dark) !important;
}

/* v1.4.2-ui-preview */
[class^="MainMenuItem"]:active,
.rc-virtual-list-holder-inner .ant-dropdown-trigger:active,
[class^="ListItemContainer"]:active,
[class^="AgentCardContainer"]:active {
  border-radius: var(--button-border-radius-active) !important;
  transition: border-radius var(--short-timer) var(--animation);
  animation: clickAnimation var(--long-timer) var(--animation);
}

/* v1.5.11 */
[class^="AboutHeader"] {
  span.ant-avatar-css-var {
    width: 50px !important;
    height: 50px !important;
    min-width: 50px !important;
    min-height: 50px !important;
  }
}

[theme-mode="light"] [class^="PageContainer"],
[theme-mode="light"] [class^="MainMenu"],
[theme-mode="light"] [class^="UserMenu"],
[theme-mode="light"] [class^="ScrollContainer"],
[theme-mode="light"] [class^="NavbarContainer"],
[theme-mode="light"] [class^="MainMenusContainer"],
[theme-mode="light"] [class^="ContentContainer"],
[theme-mode="light"] .home-tabs,
/* [theme-mode="light"] .inputbar, */
[theme-mode="light"] .bubble,
[theme-mode="light"] #chat,
[theme-mode="light"] #messages,
[theme-mode="light"] [class^="SettingContainer"] {
  background-color: var(--background-light-aero) !important;
  backdrop-filter: blur(16px) saturate(180%);
}

[theme-mode="dark"] [class^="PageContainer"],
[theme-mode="dark"] [class^="MainMenu"],
[theme-mode="dark"] [class^="UserMenu"],
[theme-mode="dark"] [class^="ScrollContainer"],
[theme-mode="dark"] [class^="NavbarContainer"],
[theme-mode="dark"] [class^="MainMenusContainer"],
[theme-mode="dark"] [class^="ContentContainer"],
[theme-mode="dark"] .home-tabs,
/* [theme-mode="dark"] .inputbar, */
[theme-mode="dark"] .bubble,
[theme-mode="dark"] #chat,
[theme-mode="dark"] #messages,
[theme-mode="dark"] [class^="SettingContainer"] {
  background-color: var(--background-dark-aero) !important;
  backdrop-filter: blur(16px) saturate(180%);
}

[theme-mode="light"] [class~="ant-dropdown-trigger"],
[theme-mode="light"] [class^="IconItem"],
[theme-mode="light"] [class^="TopicListItem"],
[theme-mode="light"] [class^="ProviderListItem"] {
  background-color: var(--background-light-aero) !important;
  backdrop-filter: blur(16px);
}

[theme-mode="dark"] [class~="ant-dropdown-trigger"],
[theme-mode="dark"] [class^="IconItem"],
[theme-mode="dark"] [class^="TopicListItem"],
[theme-mode="dark"] [class^="ProviderListItem"] {
  background-color: var(--background-dark-aero) !important;
  backdrop-filter: blur(16px);
}

/* Fix some paddings and background colors */
[class^="MainMenusContainer"] {
  padding: 2px;
}

[class^="ContentContainer"] {
  margin: 5px;
  max-height: calc(100vh - var(--navbar-height) - 15px) !important;
  max-width: calc(100vw - var(--sidebar-width) - 15px) !important;
}

.inputbar {
  margin: 1.5em 0;
  background-color: transparent !important;
}

#chat {
  margin: 1em;
}

#messages {
  margin-left: 1.5em !important; /* Adjust margin to prevent overlap with input bar */
}

[class^="SettingGroup"] {
  padding: 1em;
}

[class^="SettingContainer"],
[class^="ProviderListContainer"] {
  height: 100% !important; /* Ensure it matches the height of the parent element */
}

[theme-mode=light].bubble #messages,
[theme-mode=light] #chat{
  background-color: var(--background-light-aero) !important;
}
[theme-mode=dark].bubble #messages,
[theme-mode=dark] #chat {
  background-color: var(--background-dark-aero) !important;
}

/*  v1.5.2 */
[theme-mode="light"] [class^="Tab-"]:hover,
[theme-mode="light"] [class^="AddTabButton"]:hover,
[theme-mode="light"] [class^="ThemeButton"]:hover,
[theme-mode="light"] [class^="SettingsButton"]:hover {
  backdrop-filter: blur(16px);
  border-radius: var(--button-border-radius-hover);
  background: var(--background-assistant-light-new) !important;
}

[theme-mode="light"] [class^="Tab-"],
[theme-mode="light"] [class^="AddTabButton"],
[theme-mode="light"] [class^="ThemeButton"],
[theme-mode="light"] [class^="SettingsButton"] {
  backdrop-filter: blur(16px);
  border-radius: var(--button-border-radius);
  background: var(--background-light-aero) !important;
}

[theme-mode="dark"] [class^="Tab-"]:hover,
[theme-mode="dark"] [class^="AddTabButton"]:hover,
[theme-mode="dark"] [class^="ThemeButton"]:hover,
[theme-mode="dark"] [class^="SettingsButton"]:hover {
  backdrop-filter: blur(16px);
  border-radius: var(--button-border-radius-hover);
  background: var(--background-dark-aero) !important;
}

[class^="Tab-"]:active,
[class^="AddTabButton"]:active,
[class^="ThemeButton"]:active,
[class^="SettingsButton"]:active {
  border-radius: var(--button-border-radius-active);
  animation: clickAnimation var(--long-timer) var(--animation);
}

/*  MAIN */
[class^="MessageLineContainer"] {
  background: var(--chat-background);
  border-radius: var(--button-border-radius);

  [class^="MessageItem"]:active {
    animation: clickAnimation var(--long-timer) var(--animation);
  }
}

[class^="TitleContainer"] {
  background: var(--chat-background-assistant) !important;
}

[theme-mode="dark"][id~="inputbar"] {
  background: var(input-bg-dark);
}

[class^="SettingHelpTextRow"] {
  display: inline-block;
}

[class^="Icon"],
[class^="ant"],
[class^="ActionButton"],
[class^="TopicListItem"],
[class^="ProviderListItem"],
[class^="Main"],
[class^="MenuItem"],
[class^="MenuButton"],
[class^="EmojiBackground"],
[class^="MainMenusContainer"],
[class^="ContentContainer"],
[class^="SettingContainer"],
[class^="ProviderListContainer"],
#chat,
.home-tabs {
  border-radius: var(--button-border-radius) !important;
}

[class^="ant-switch"] {
  border-radius: 100px !important;
}

[theme-mode="light"] #inputbar,
[theme-mode="light"] [class^="InputContainer"] {
  background: var(--input-bg-light);
}

[theme-mode="dark"] #inputbar,
[theme-mode="dark"] [class^="InputContainer"] {
  background: var(--input-bg-dark);
}

body[theme-mode="light"] {
  background-color: var(--background-light-new);
}

body[theme-mode="dark"] {
  background-color: var(--background-dark-new) !important;
}

[theme-mode="light"] button.ant-btn:hover,
[theme-mode="dark"] button.ant-btn:hover {
  border-radius: var(--button-border-radius) !important;
}

[theme-mode="light"] [class^="ant-input"],
[theme-mode="light"] button.ant-btn-variant-outlined {
  background-color: var(--input-bg-light) !important;
}

[theme-mode="dark"] [class^="ant-input"],
[theme-mode="dark"] button.ant-btn-variant-outlined {
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
[class^="AgentsListContainer"],
[class^="SettingContainer"],
[class^="ProviderListContainer"],
[class^="SideNav"],
[class^="MainContainer-"],
[class^="Main"],
[class~="message-assistant"] {
  animation: page-popup-right var(--short-timer) var(--animation);
}

[class~="message-user"] {
  animation: page-popup-left var(--short-timer) var(--animation);
}

[class^="ant"]:hover,
[class^="ActionButton"]:hover,
[class^="TopicListItem"]:hover,
[class^="IconItem"]:hover,
[class^="ProviderListItem"]:hover,
[class^="MenuItem"]:hover,
[class^="MenuButton"]:hover,
[class^="EmojiBackground"]:hover {
  border-radius: var(--button-border-radius-hover) !important;
  transition: border-radius var(--short-timer) var(--animation);
}

[class^="ant-avatar"]:active,
[class^="ant-btn"]:active,
[class^="ant-segmented-item"]:active,
[class^="anticon"]:active,
[class^="ant-upload"]:active,
[class^="ant-divider"]:active,
[class^="ant-tooltip"]:active,
[class^="ant-message"]:active,
[class^="ActionButton"]:active,
[class^="TopicListItem"]:active,
[class^="IconItem"]:active,
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
  `
  }
