import type { Theme } from "@/lib/types"

export const ziTao: Theme = {
    id: "zi-tao",
    name: "紫陶",
    description: "Light theme inspired by purple and traditional pottery",
    lightPreviewUrl: "/zi-tao.png",
    darkPreviewUrl: "/zi-tao.png",
    css: `/* 
========================
紫陶 (Zi-tao)
========================
Theme inspired by traditional Chinese purple clay pottery (紫砂壶),
featuring deep aubergine and warm violet tones reminiscent of the
prized Yixing clay teapots and vessels. The colors and textures
evoke the earthy richness and subtle luster of hand-crafted pottery.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F5FA;
    --color-black-soft: #3A2A3D;  /* Deep aubergine, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #8C5D91;     /* Rich purple clay - inspired by fine Yixing pottery */
    --color-primary-soft: rgba(140, 93, 145, 0.6);  /* Softer purple */
    --color-primary-mute: rgba(140, 93, 145, 0.2);  /* Subtle purple */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #3A2A3D;       /* Deep aubergine like fired purple clay */
    --color-background-mute: #46344A;  /* Slightly lighter dark purple */
    --color-background-soft: #5B445F;  /* Medium dark purple */

    /* Chat interface colors */
    --navbar-background-mac: rgba(58, 42, 61, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #3A2A3D;      /* Navigation bar background */
    --chat-background: #3A2A3D;        /* Main chat area background */
    --chat-background-user: #4D374F;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #55405A; /* Assistant message - medium purple */

    /* Text colors */
    --chat-text-user: #F0E7F2;         /* Soft white with slight lavender tint */
    --color-text: #F0E7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #634768;            /* Hover state - subtle highlight */
    --color-active: #725379;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(240, 231, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(240, 231, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #4D374F !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #6E5173; /* Richer purple */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #5B445F; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F4EEF5;       /* Soft lavender like pale clay */
    --color-background-mute: #DBCBDE;  /* Slightly deeper lavender */
    --color-background-soft: #E8DCEA;  /* Medium light lavender */

    /* Chat interface colors */
    --navbar-background: #EFE5F0;      /* Soft purple navbar */
    --chat-background: #F9F6FA;        /* Main chat area - bright lavender-white */
    --chat-background-user: #F4EEF5;   /* User message - standard lavender */
    --chat-background-assistant: #E8DCEA; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #442A47;             /* Deep aubergine text color */

    /* Interactive states */
    --color-hover: #EEE4F0;            /* Hover state - subtle highlight */
    --color-active: #E5D9E8;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(68, 42, 71, 0.12);       /* Subtle border */
    --color-border-soft: rgba(68, 42, 71, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F9F6FA;            /* Lightest lavender-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F9F6FA !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #C2B0C6; /* Deeper lavender */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #D5C6D8; /* Between ant-collapse and background-soft */
}`,
  }