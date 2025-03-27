import type { Theme } from "@/lib/types"

export const hanBaiYu: Theme = {
    id: "han-bai-yu",
    name: "汉白玉",
    description: "Light theme inspired by white and traditional pottery",
    lightPreviewUrl: "/han-bai-yu.png",
    darkPreviewUrl: "/han-bai-yu.png",
    css: `/* 
========================
汉白玉 (Han-bai-yu)
========================
Theme inspired by the pristine white marble used in classical Chinese
architecture. The colors capture the subtle variations in white jade,
from pure snow-white to warm cream tones, reflecting the material's
natural elegance and cultural significance.
*/

/* Root variables */
:root {
    --color-white-soft: #F7F6F2;
    --color-black-soft: #2B2926;  /* Deep stone grey */

    /* Primary color (accent color) and variants */
    --color-primary: #9A958E;     /* Refined marble grey */
    --color-primary-soft: rgba(154, 149, 142, 0.6);
    --color-primary-mute: rgba(154, 149, 142, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #2B2926;       /* Deep stone */
    --color-background-mute: #2B2926;  /* Rich stone */
    --color-background-soft: #4A4845;  /* Medium stone */

    --navbar-background-mac: rgba(43, 41, 38, 0.85);
    --navbar-background: #2B2926;
    --chat-background: #2B2926;
    --chat-background-user: #3D3A36;
    --chat-background-assistant: #353331;

    --chat-text-user: #F7F6F2;
    --color-text: #F7F6F2;

    --color-hover: #454340;
    --color-active: #524F4B;

    --color-border: rgba(247, 246, 242, 0.15);
    --color-border-soft: rgba(247, 246, 242, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #9A958E;     /* Refined marble grey */
    --color-primary-soft: rgba(154, 149, 142, 0.6);
    --color-primary-mute: rgba(154, 149, 142, 0.2);

    --color-background: #F7F6F2;       /* Pure white jade */
    --color-background-mute: #EAE8E3;  /* Soft white jade */
    --color-background-soft: #F2F0EB;  /* Medium white jade */

    --navbar-background: #F5F3EF;
    --chat-background: #FFFFFF;
    --chat-background-user: #F7F6F2;
    --chat-background-assistant: #F2F0EB;

    --color-text: #2B2926;

    --color-hover: #F5F3EF;
    --color-active: #EFEDE9;

    --color-border: rgba(43, 41, 38, 0.12);
    --color-border-soft: rgba(43, 41, 38, 0.06);

    --color-white: #FFFFFF;
}`
  }