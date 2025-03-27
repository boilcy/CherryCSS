import type { Theme } from "@/lib/types"

export const chunMei: Theme = {
    id: "chun-mei",
    name: "春梅",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/chun-mei.png",
    darkPreviewUrl: "/chun-mei.png",
    css: `/* 
========================
春梅 (Chun-mei)
========================
Theme inspired by plum blossoms in early spring, featuring
delicate pink tones that capture the first blooms against
winter snow. The colors reflect both the subtle and vibrant
hues of plum blossoms, a symbol of resilience in Chinese art.
*/

/* Root variables */
:root {
    --color-white-soft: #FFF8F8;
    --color-black-soft: #8C4356;  /* Deep plum red */

    /* Primary color (accent color) and variants */
    --color-primary: #E4707C;     /* Plum blossom pink */
    --color-primary-soft: rgba(228, 112, 124, 0.6);
    --color-primary-mute: rgba(228, 112, 124, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #8C4356;       /* Deep plum */
    --color-background-mute: #94505F;  /* Rich plum */
    --color-background-soft: #B4657A;  /* Medium plum */

    --navbar-background-mac: rgba(140, 67, 86, 0.85);
    --navbar-background: #8C4356;
    --chat-background: #8C4356;
    --chat-background-user: #A25768;
    --chat-background-assistant: #763848;

    --chat-text-user: #FFE6EC;
    --color-text: #FFE6EC;

    --color-hover: #B4657A;
    --color-active: #C67688;

    --color-border: rgba(255, 230, 236, 0.15);
    --color-border-soft: rgba(255, 230, 236, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    --color-background: #FFEEF2;       /* Soft plum white */
    --color-background-mute: #FFDEE6;  /* Light plum */
    --color-background-soft: #FFE6EC;  /* Medium light plum */

    --navbar-background: #FFF1F5;
    --chat-background: #FFF6F9;
    --chat-background-user: #FFEEF2;
    --chat-background-assistant: #FFE6EC;

    --color-text: #8C4356;

    --color-hover: #FFE8EA;
    --color-active: #FFDEE2;

    --color-border: rgba(140, 67, 86, 0.12);
    --color-border-soft: rgba(140, 67, 86, 0.06);

    --color-white: #FFF6F9;
}`
}