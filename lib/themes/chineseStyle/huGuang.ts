import type { Theme } from "@/lib/types"

export const huGuang: Theme = {
    id: "hu-guang",
    name: "湖光",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/hu-guang.png",
    darkPreviewUrl: "/hu-guang.png",
    css: `/* 
========================
湖光 (Hu-guang)
========================
Theme inspired by the shimmering light on lake surfaces,
featuring crystalline blue-green tones that capture the
interplay of sunlight and water. The colors evoke the
tranquil beauty of traditional Chinese lake gardens.
*/

/* Root variables */
:root {
    --color-white-soft: #F0F7F8;
    --color-black-soft: #2A5254;  /* Deep lake blue-green */

    /* Primary color (accent color) and variants */
    --color-primary: #3C707A;     /* Lake surface blue-green */
    --color-primary-soft: rgba(60, 112, 122, 0.6);
    --color-primary-mute: rgba(60, 112, 122, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #2A5254;       /* Deep lake color */
    --color-background-mute: #2F616B;  /* Rich lake blue */
    --color-background-soft: #3E7A83;  /* Medium lake blue */

    --navbar-background-mac: rgba(42, 82, 84, 0.85);
    --navbar-background: #2A5254;
    --chat-background: #2A5254;
    --chat-background-user: #3C707A;
    --chat-background-assistant: #1D4247;

    --chat-text-user: #E6F3F4;
    --color-text: #E6F3F4;

    --color-hover: #3E7A83;
    --color-active: #4B8E98;

    --color-border: rgba(230, 243, 244, 0.15);
    --color-border-soft: rgba(230, 243, 244, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #3C707A;     /* Lake surface blue-green */
    --color-primary-soft: rgba(60, 112, 122, 0.6);
    --color-primary-mute: rgba(60, 112, 122, 0.2);

    --color-background: #E6F3F4;       /* Soft lake blue */
    --color-background-mute: #C2E3E4;  /* Light lake blue */
    --color-background-soft: #D4EBEC;  /* Medium light blue */

    --navbar-background: #DAF0F1;
    --chat-background: #F0F7F8;
    --chat-background-user: #E6F3F4;
    --chat-background-assistant: #D4EBEC;

    --color-text: #2A5254;

    --color-hover: #EAF5F6;
    --color-active: #DFF0F1;

    --color-border: rgba(42, 82, 84, 0.12);
    --color-border-soft: rgba(42, 82, 84, 0.06);

    --color-white: #F0F7F8;
}`
}