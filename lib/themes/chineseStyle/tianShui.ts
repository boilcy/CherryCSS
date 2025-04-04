import type { Theme } from '@/lib/types'

export const tianShui: Theme = {
  id: 'tian-shui',
  name: '天水',
  description: 'Light theme inspired by misty rain landscapes',
  lightPreviewUrl: '/tian-shui.png',
  darkPreviewUrl: '/tian-shui.png',
  css: `/* 
========================
天水 (Tian-shui)
========================
Theme inspired by Tang Dynasty aquatic aesthetics, featuring the interplay 
between sky and water. The teal-blue tones evoke the serenity of ancient 
Chinese gardens and the glazed pottery that captured the essence of water.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #1D4E5A;  /* Deep teal, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #5AA4AD;     /* Celadon teal - reminiscent of Tang ceramics */
    --color-primary-soft: rgba(90, 164, 173, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(90, 164, 173, 0.2);  /* Subtle teal */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #1D4E5A;       /* Deep teal-blue like night water */
    --color-background-mute: #235864;  /* Slightly lighter teal */
    --color-background-soft: #316F7D;  /* Medium teal-blue */

    /* Chat interface colors */
    --navbar-background-mac: rgba(29, 78, 90, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #1D4E5A;      /* Navigation bar background */
    --chat-background: #1D4E5A;        /* Main chat area background */
    --chat-background-user: #265E6B;   /* User message bubble - mid teal */
    --chat-background-assistant: #2D6875; /* Assistant message - richer teal */

    /* Text colors */
    --chat-text-user: #E8F1F2;         /* Soft white with slight blue tint */
    --color-text: #E8F1F2;             /* General text color */

    /* Interactive states */
    --color-hover: #2E687A;            /* Hover state - subtle highlight */
    --color-active: #367889;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(232, 241, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(232, 241, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #265E6B !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #387D8C; /* Deeper teal */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #316F7D; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E4F1F2;       /* Soft teal-white like shallow water */
    --color-background-mute: #D0E4E6;  /* Slightly deeper teal */
    --color-background-soft: #DBE9EB;  /* Medium light teal */

    /* Chat interface colors */
    --navbar-background: #DFF2F4;      /* Soft teal navbar */
    --chat-background: #EAF5F6;        /* Main chat area - bright teal-white */
    --chat-background-user: #E4F1F2;   /* User message - standard teal-white */
    --chat-background-assistant: #D8EAEC; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #1D4E5A;             /* Deep teal text color */

    /* Interactive states */
    --color-hover: #D5EAEC;            /* Hover state - subtle highlight */
    --color-active: #C9E3E5;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(29, 78, 90, 0.12);       /* Subtle border */
    --color-border-soft: rgba(29, 78, 90, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EAF5F6;            /* Lightest teal-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EAF5F6 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B4D4D7; /* Darker teal */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C6E0E2; /* Between ant-collapse and background-soft */
}`,
}
