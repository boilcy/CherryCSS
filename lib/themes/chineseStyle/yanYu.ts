import type { Theme } from '@/lib/types'

export const yanYu: Theme = {
  id: 'yan-yu',
  name: '烟雨',
  description: 'Light theme inspired by misty rain landscapes',
  lightPreviewUrl: '/yan-yu.png',
  darkPreviewUrl: '/yan-yu.png',
  css: `/* 
========================
烟雨 (Yan-yu)
========================
Theme inspired by traditional Chinese misty rain landscapes, featuring
soft blue-gray tones that evoke the tranquil beauty of mountains
shrouded in mist and rain, capturing the poetic essence of classical
Chinese landscape painting
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #EFF5F7;
    --color-black-soft: #283339;  /* Deep blue-gray like distant mountains */

    /* Primary color (accent color) and variants */
    --color-primary: #6E99A4;     /* Muted teal - like water viewed through mist */
    --color-primary-soft: rgba(110, 153, 164, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(110, 153, 164, 0.2);  /* Subtle teal mist */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #283339;       /* Deep blue-gray like distant mountains */
    --color-background-mute: #2F3B43;  /* Slightly lighter misty tone */
    --color-background-soft: #465761;  /* Medium blue-gray like hazy clouds */

    /* Chat interface colors */
    --navbar-background-mac: rgba(40, 51, 57, 0.85);  /* Semi-transparent misty navbar */
    --navbar-background: #283339;      /* Navigation bar background */
    --chat-background: #283339;        /* Main chat area background */
    --chat-background-user: #313E47;   /* User message bubble - deep mist */
    --chat-background-assistant: #364550; /* Assistant message - richer blue-gray */

    /* Text colors */
    --chat-text-user: #EFF5F7;         /* Soft white like emerging light */
    --color-text: #EFF5F7;             /* General text color */

    /* Interactive states */
    --color-hover: #394A54;            /* Hover state - subtle highlight */
    --color-active: #455863;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(239, 245, 247, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(239, 245, 247, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #313E47 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #566873; /* Deeper misty blue */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #465761; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E8F0F2;       /* Soft blue-white like morning mist */
    --color-background-mute: #D1E0E5;  /* Slightly deeper mist */
    --color-background-soft: #DBE7EB;  /* Medium misty blue */

    /* Chat interface colors */
    --navbar-background: #E3EDF0;      /* Soft blue navbar */
    --chat-background: #EDF4F6;        /* Main chat area - like clearing mist */
    --chat-background-user: #E8F0F2;   /* User message - gentle mist */
    --chat-background-assistant: #DBE7EB; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #2D3E45;             /* Deep blue-gray for text */

    /* Interactive states */
    --color-hover: #DEE9ED;            /* Hover state - subtle highlight */
    --color-active: #D4E3E8;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(45, 62, 69, 0.12);       /* Subtle border */
    --color-border-soft: rgba(45, 62, 69, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EDF4F6;            /* Lightest misty blue-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EDF4F6 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B7C8CE; /* Deeper misty blue */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C9D9DE; /* Between ant-collapse and background-soft */
}`,
}
