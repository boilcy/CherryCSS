import type { Theme } from '@/lib/types'

export const codex: Theme = {
  id: 'codex',
  name: 'Codex',
  description: 'A focused engineering theme inspired by the official Codex terminal interface',
  lightPreviewUrl: '/codex.png',
  darkPreviewUrl: '/codex.png',
  colors: ['black', 'turquoise', 'violet'],
  css: `/*
========================
Codex
========================
A terminal-native workspace with cyan controls, magenta identity accents,
and user-message surfaces blended from the active background.
*/

:root {
  --codex-cyan: #00d7d7;
  --codex-magenta: #d75fd7;
  --codex-green: #5fd75f;
  --codex-red: #ff5f5f;
  --codex-radius: 10px;
  --codex-transition: 150ms ease-out;
  --color-primary: #00afaf;
  --color-primary-soft: rgba(0, 175, 175, 0.2);
  --color-primary-mute: rgba(0, 175, 175, 0.1);
}

body[theme-mode="dark"] {
  --codex-accent: #00d7d7;
  --codex-brand: #d75fd7;
  --color-primary: #00d7d7;
  --color-primary-soft: rgba(0, 215, 215, 0.2);
  --color-primary-mute: rgba(0, 215, 215, 0.1);
  --color-background: #0d1117;
  --color-background-soft: #161b22;
  --color-background-mute: #21262d;
  --navbar-background: #0d1117;
  --navbar-background-mac: rgba(13, 17, 23, 0.9);
  --chat-background: #0d1117;
  --chat-background-user: #2a2e34;
  --chat-background-assistant: #0d1117;
  --color-text: #e6edf3;
  --color-text-1: #e6edf3;
  --color-text-2: #9da7b3;
  --color-text-3: #6e7681;
  --chat-text-user: #f0f3f6;
  --color-border: #30363d;
  --color-border-soft: #21262d;
  --color-hover: #1b222b;
  --color-active: #252d37;
  --color-code-background: #161b22;
  --color-list-item: #161b22;
  --color-list-item-hover: #21262d;
}

body[theme-mode="light"] {
  --codex-accent: #005f87;
  --codex-brand: #875f87;
  --color-primary: #005f87;
  --color-primary-soft: rgba(0, 95, 135, 0.16);
  --color-primary-mute: rgba(0, 95, 135, 0.08);
  --color-background: #f7f7f5;
  --color-background-soft: #ffffff;
  --color-background-mute: #e8e8e5;
  --navbar-background: #f7f7f5;
  --navbar-background-mac: rgba(247, 247, 245, 0.9);
  --chat-background: #f7f7f5;
  --chat-background-user: #ededeb;
  --chat-background-assistant: #f7f7f5;
  --color-text: #1f2328;
  --color-text-1: #1f2328;
  --color-text-2: #59636e;
  --color-text-3: #7d8590;
  --chat-text-user: #1f2328;
  --color-border: #d0d7de;
  --color-border-soft: #e1e5e9;
  --color-hover: #eceeec;
  --color-active: #e1e5e9;
  --color-code-background: #ffffff;
  --color-list-item: #ffffff;
  --color-list-item-hover: #eceeec;
}

body,
button,
input,
textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

code,
pre,
kbd {
  font-family: "SFMono-Regular", "Cascadia Code", Consolas, monospace;
}

body[theme-mode] #content-container {
  background: var(--chat-background) !important;
}

body[theme-mode] #inputbar {
  background: var(--color-background-soft) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: var(--codex-radius) !important;
  box-shadow: none !important;
  transition: border-color var(--codex-transition), box-shadow var(--codex-transition) !important;
}

body[theme-mode] #inputbar:focus-within {
  border-color: var(--codex-accent) !important;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--codex-accent) 18%, transparent) !important;
}

body[theme-mode] .message-user .message-content-container,
body[theme-mode] .chat-item.user .message-content-container {
  background: var(--chat-background-user) !important;
  border: 1px solid var(--color-border-soft) !important;
  border-radius: var(--codex-radius) !important;
}

body[theme-mode] .message-assistant .message-content-container,
body[theme-mode] .chat-item.assistant .message-content-container {
  background: transparent !important;
  border-left: 2px solid var(--codex-brand) !important;
  border-radius: 2px !important;
}

body[theme-mode] .message-content-container {
  transition: border-color var(--codex-transition), background-color var(--codex-transition);
}

body[theme-mode] .message-content-container:hover {
  border-color: var(--codex-accent) !important;
}

body[theme-mode] .ant-collapse,
body[theme-mode] .ant-collapse-content,
body[theme-mode] pre {
  background: var(--color-code-background) !important;
  border-color: var(--color-border) !important;
  border-radius: 6px !important;
}

body[theme-mode] a {
  color: var(--codex-accent) !important;
  text-underline-offset: 3px;
}

body[theme-mode] button {
  transition: background-color var(--codex-transition), color var(--codex-transition), transform var(--codex-transition) !important;
}

body[theme-mode] button:active {
  transform: translateY(1px);
}

body[theme-mode] ::selection {
  background: color-mix(in srgb, var(--codex-accent) 28%, transparent);
}
`,
}
