import type { Theme } from "@/lib/types"

export const ruYaoLan: Theme = {
    id: "ru-yao-lan",
    name: "汝窑蓝",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/ru-yao-lan.png",
    darkPreviewUrl: "/ru-yao-lan.png",
    css: `/* 
========================
汝窑蓝 (Ru-yao-lan)
========================
Theme inspired by the legendary Ru kiln ceramics of the Song Dynasty,
featuring their distinctive sky-blue glaze. The colors capture the
subtle variations in this most precious of Chinese ceramic glazes.
*/

/* Root variables */
:root {
    --color-white-soft: #E8F0F2;
    --color-black-soft: #1A2C3D;  /* Deep Ru glaze blue */

    /* Primary color (accent color) and variants */
    --color-primary: #4A7B96;     /* Classic Ru glaze blue */
    --color-primary-soft: rgba(74, 123, 150, 0.6);
    --color-primary-mute: rgba(74, 123, 150, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #1A2C3D;       /* Deep Ru blue */
    --color-background-mute: #2D5475;  /* Rich glaze blue */
    --color-background-soft: #355D80;  /* Medium glaze blue */

    --navbar-background-mac: rgba(26, 44, 61, 0.85);
    --navbar-background: #1A2C3D;
    --chat-background: #1A2C3D;
    --chat-background-user: #234863;
    --chat-background-assistant: #2D5475;

    --chat-text-user: #E6EEF2;
    --color-text: #E6EEF2;

    --color-hover: #3E678B;
    --color-active: #487AA3;

    --color-border: rgba(230, 238, 242, 0.15);
    --color-border-soft: rgba(230, 238, 242, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #4A7B96;     /* Classic Ru glaze blue */
    --color-primary-soft: rgba(74, 123, 150, 0.6);
    --color-primary-mute: rgba(74, 123, 150, 0.2);

    --color-background: #E8F0F2;       /* Sky blue white */
    --color-background-mute: #A5C6CC;  /* Soft glaze blue */
    --color-background-soft: #BED3D7;  /* Medium light blue */

    --navbar-background: #D9E6E9;
    --chat-background: #F2F7F8;
    --chat-background-user: #BED3D7;
    --chat-background-assistant: #D9E6E9;

    --color-text: #1A2C3D;

    --color-hover: #DDE8EB;
    --color-active: #D2E1E5;

    --color-border: rgba(26, 44, 61, 0.12);
    --color-border-soft: rgba(26, 44, 61, 0.06);

    --color-white: #F2F7F8;
}`
  }