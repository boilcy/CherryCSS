import type { Theme } from '@/lib/types'

export const yangPiZhi: Theme = {
  id: 'yang-pi-zhi',
  name: '羊皮纸',
  description: 'Light theme inspired by ancient parchment',
  lightPreviewUrl: '/yang-pi-zhi.png',
  darkPreviewUrl: '/yang-pi-zhi.png',
  css: `/* 
========================
羊皮纸 (Yang-pi-zhi)
========================
Theme inspired by ancient parchment manuscripts, featuring warm amber tones
and rich browns that evoke the texture and appearance of traditional
animal skin parchment used in historical documents
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #32281A;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #A3682C;     /* Rich amber - inspired by ancient ink on parchment */
    --color-primary-soft: rgba(163, 104, 44, 0.6);  /* Softer amber */
    --color-primary-mute: rgba(163, 104, 44, 0.2);  /* Subtle amber */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #32281A;       /* Deep aged parchment brown */
    --color-background-mute: #3D2E1F;  /* Slightly lighter aged brown */
    --color-background-soft: #594633;  /* Medium brown tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(50, 40, 26, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #32281A;      /* Navigation bar background */
    --chat-background: #32281A;        /* Main chat area background */
    --chat-background-user: #403020;   /* User message bubble - warmer brown */
    --chat-background-assistant: #463524; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F8F7F2;         /* Slightly aged paper color for text */
    --color-text: #F8F7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #4A3625;            /* Hover state - subtle highlight */
    --color-active: #5B442F;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 247, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 247, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #403020 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #6C5742; /* Darker brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #594633; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F4E4BE;       /* Light parchment color */
    --color-background-mute: #E2CCA0;  /* Slightly darker parchment */
    --color-background-soft: #E8D5AB;  /* Medium parchment */

    /* Chat interface colors */
    --navbar-background: #F0DEB5;      /* Warm cream navbar */
    --chat-background: #F7EAC9;        /* Main chat area - bright parchment */
    --chat-background-user: #F4E4BE;   /* User message - standard parchment */
    --chat-background-assistant: #E8D5AB; /* Assistant message - slightly darker */

    /* Text colors */
    --color-text: #5F4B32;             /* Rich sepia ink color */

    /* Interactive states */
    --color-hover: #F2E1B8;            /* Hover state - subtle highlight */
    --color-active: #EBDAAC;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(95, 75, 50, 0.15);       /* Subtle ink border */
    --color-border-soft: rgba(95, 75, 50, 0.08);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F7EAC9;            /* Lightest parchment tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F7EAC9 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8C095; /* Darker parchment */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E0CAA0; /* Between ant-collapse and background-soft */
}`,
}
