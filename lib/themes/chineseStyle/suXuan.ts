import type { Theme } from "@/lib/types"

export const suXuan: Theme = {
    id: "su-xuan",
    name: "素宣",
    description: "Light theme inspired by white and traditional paper",
    lightPreviewUrl: "/su-xuan.png",
    darkPreviewUrl: "/su-xuan.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1F2428;
  --color-background-soft: #353B41;
  --color-background-mute: #242A2E;
  --navbar-background: #1F2428;
  --chat-background: #1F2428;
  --chat-background-user: #272D32;
  --chat-background-assistant: #2A3035;
  --chat-text-user: rgba(230, 240, 242, 0.95);
}
body[theme-mode="dark"] #content-container {
  background-color: #272D32 !important;
}
:root {
  --color-black-soft: #1F2428;
}
body[theme-mode="light"] {
  --color-background: #FCF9F5;
  --color-background-soft: #F5EFE8;
  --color-background-mute: #F0E9E1;
  --navbar-background: #F8F4EE;
  --chat-background: #FFFAF5;
  --chat-background-user: #FCF9F5;
  --chat-background-assistant: #F5EFE8;
  --color-white: #FFFAF5;
}
body[theme-mode="light"] #content-container {
  background-color: #FFFAF5 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #E8DFD2;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #EFE7DD;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #414950;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #353B41;
}`,
}