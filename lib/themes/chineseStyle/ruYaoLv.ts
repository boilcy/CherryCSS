import type { Theme } from "@/lib/types"

export const ruYaoLv: Theme = {
    id: "ru-yao-lv",
    name: "汝窑绿",
    description: "Light theme inspired by green and traditional pottery",
    lightPreviewUrl: "/ru-yao-lv.png",
    darkPreviewUrl: "/ru-yao-lv.png",
    css: `/* 
========================
汝窑绿 (Ru-yao-lv)
========================
Theme inspired by the green variations of Ru kiln glazes, featuring
the subtle jade-like green tones achieved in Song Dynasty ceramics.
The colors reflect the precious emerald-tinted glazes that were
highly prized by the imperial court.
*/

/* Root variables */
:root {
    --color-white-soft: #F2F7F6;
    --color-black-soft: #1A3937;  /* Deep Ru green */

    /* Primary color (accent color) and variants */
    --color-primary: #388E70;     /* Classic Ru glaze green */
    --color-primary-soft: rgba(56, 142, 112, 0.6);
    --color-primary-mute: rgba(56, 142, 112, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #1A3937;       /* Deep Ru green */
    --color-background-mute: #315F5C;  /* Rich glaze green */
    --color-background-soft: #3A706C;  /* Medium glaze green */

    --navbar-background-mac: rgba(26, 57, 55, 0.85);
    --navbar-background: #1A3937;
    --chat-background: #1A3937;
    --chat-background-user: #264D4A;
    --chat-background-assistant: #315F5C;

    --chat-text-user: #E6F0EF;
    --color-text: #E6F0EF;

    --color-hover: #3E7874;
    --color-active: #488E89;

    --color-border: rgba(230, 240, 239, 0.15);
    --color-border-soft: rgba(230, 240, 239, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    --color-background: #E8F0F0;       /* Pale Ru green */
    --color-background-mute: #B5D5D3;  /* Soft glaze green */
    --color-background-soft: #CEE3E2;  /* Medium light green */

    --navbar-background: #DCE8E7;
    --chat-background: #F0F6F6;
    --chat-background-user: #CEE3E2;
    --chat-background-assistant: #DCE8E7;

    --color-text: #1A3937;

    --color-hover: #DDE8E7;
    --color-active: #D2E2E1;

    --color-border: rgba(26, 57, 55, 0.12);
    --color-border-soft: rgba(26, 57, 55, 0.06);

    --color-white: #F0F6F6;
}`
  }