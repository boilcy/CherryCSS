import type { Theme } from '@/lib/types'

export const vercel: Theme = {
  id: 'vercel',
  name: 'Vercel',
  description: 'A precise monochrome theme inspired by the Vercel Geist design system',
  lightPreviewUrl: '/vercel.png',
  darkPreviewUrl: '/vercel.png',
  colors: ['black', 'white', 'gray'],
  css: `/*
========================
Vercel
========================
Monochrome surfaces, crisp hierarchy, and restrained blue interaction states.
Palette derived from the Vercel Geist design tokens published on GitHub.
*/

:root {
  --vercel-blue: #0070f3;
  --vercel-blue-hover: #0060d1;
  --vercel-radius: 8px;
  --vercel-transition: 160ms ease;
  --color-primary: #0070f3;
  --color-primary-soft: rgba(0, 112, 243, 0.18);
  --color-primary-mute: rgba(0, 112, 243, 0.1);
}

body[theme-mode="dark"] {
  --color-background: #000000;
  --color-background-soft: #1a1a1a;
  --color-background-mute: #262626;
  --navbar-background: #000000;
  --navbar-background-mac: rgba(0, 0, 0, 0.88);
  --chat-background: #000000;
  --chat-background-user: #1f1f1f;
  --chat-background-assistant: #0a0a0a;
  --color-text: #ededed;
  --color-text-1: #ededed;
  --color-text-2: #a1a1a1;
  --color-text-3: #888888;
  --chat-text-user: #ededed;
  --color-border: #333333;
  --color-border-soft: #262626;
  --color-hover: #1a1a1a;
  --color-active: #262626;
  --color-code-background: #111111;
  --color-list-item: #111111;
  --color-list-item-hover: #1a1a1a;
}

body[theme-mode="light"] {
  --color-background: #ffffff;
  --color-background-soft: #fafafa;
  --color-background-mute: #f2f2f2;
  --navbar-background: #ffffff;
  --navbar-background-mac: rgba(255, 255, 255, 0.88);
  --chat-background: #ffffff;
  --chat-background-user: #f2f2f2;
  --chat-background-assistant: #fafafa;
  --color-text: #171717;
  --color-text-1: #171717;
  --color-text-2: #666666;
  --color-text-3: #8f8f8f;
  --chat-text-user: #171717;
  --color-border: #e6e6e6;
  --color-border-soft: #ebebeb;
  --color-hover: #f2f2f2;
  --color-active: #ebebeb;
  --color-code-background: #fafafa;
  --color-list-item: #fafafa;
  --color-list-item-hover: #f2f2f2;
}

body,
button,
input,
textarea {
  font-family: "Geist Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

code,
pre,
kbd {
  font-family: "Geist Mono", "SFMono-Regular", Consolas, monospace;
}

body[theme-mode] #content-container {
  background: var(--chat-background) !important;
}

body[theme-mode] #inputbar {
  background: var(--color-background-soft) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: var(--vercel-radius) !important;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;
  transition: border-color var(--vercel-transition), box-shadow var(--vercel-transition) !important;
}

body[theme-mode] #inputbar:focus-within {
  border-color: var(--vercel-blue) !important;
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.14) !important;
}

body[theme-mode] .message-content-container {
  border: 1px solid var(--color-border-soft);
  border-radius: var(--vercel-radius) !important;
  box-shadow: none !important;
  transition: border-color var(--vercel-transition), background-color var(--vercel-transition);
}

body[theme-mode] .message-content-container:hover {
  border-color: var(--color-border);
}

body[theme-mode] .ant-collapse,
body[theme-mode] .ant-collapse-content,
body[theme-mode] pre {
  background: var(--color-code-background) !important;
  border-color: var(--color-border) !important;
  border-radius: var(--vercel-radius) !important;
}

body[theme-mode] a {
  color: var(--vercel-blue) !important;
  text-decoration-color: rgba(0, 112, 243, 0.35);
  text-underline-offset: 3px;
}

body[theme-mode] button {
  transition: background-color var(--vercel-transition), border-color var(--vercel-transition), transform var(--vercel-transition) !important;
}

body[theme-mode] button:active {
  transform: scale(0.98);
}

body[theme-mode] ::selection {
  background: rgba(0, 112, 243, 0.28);
}
`,
}
