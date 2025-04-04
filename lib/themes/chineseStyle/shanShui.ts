import type { Theme } from '@/lib/types'

export const shanShui: Theme = {
  id: 'shan-shui',
  name: '山水',
  description: 'Light theme inspired by misty rain landscapes',
  lightPreviewUrl: '/shan-shui.png',
  darkPreviewUrl: '/shan-shui.png',
  css: `/* 
========================
山水 (Shan-shui)
========================
Theme inspired by Tang Dynasty landscape paintings, featuring deep teal and ink tones
that evoke the majesty of mountains and waters in traditional Chinese art.
The colors reflect the timeless elegance of brush and ink capturing nature's essence.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F2F5F6;
    --color-black-soft: #1A3038;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #2F545D;     /* Deep teal - like ink wash of distant mountains */
    --color-primary-soft: rgba(47, 84, 93, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(47, 84, 93, 0.2);  /* Subtle teal */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #1A3038;       /* Deep teal-black like night mountains */
    --color-background-mute: #223940;  /* Slightly lighter dark teal */
    --color-background-soft: #2A454D;  /* Medium dark teal */

    /* Chat interface colors */
    --navbar-background-mac: rgba(26, 48, 56, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #1A3038;      /* Navigation bar background */
    --chat-background: #1A3038;        /* Main chat area background */
    --chat-background-user: #243942;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #2C4A52; /* Assistant message - medium teal */

    /* Text colors */
    --chat-text-user: #E6EDEF;         /* Soft white with slight blue tint */
    --color-text: #E6EDEF;             /* General text color */

    /* Interactive states */
    --color-hover: #2D4B53;            /* Hover state - subtle highlight */
    --color-active: #355960;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(230, 237, 239, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(230, 237, 239, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #243942 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #345A63; /* Darker teal */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #2A454D; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E6EDEF;       /* Soft blue-white like mountain mist */
    --color-background-mute: #D5E0E3;  /* Slightly deeper blue-white */
    --color-background-soft: #DCE6E9;  /* Medium light blue-white */

    /* Chat interface colors */
    --navbar-background: #E0EAED;      /* Soft teal navbar */
    --chat-background: #ECF2F4;        /* Main chat area - bright teal-white */
    --chat-background-user: #E6EDEF;   /* User message - standard teal-white */
    --chat-background-assistant: #DCE6E9; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #2F545D;             /* Deep teal text color */

    /* Interactive states */
    --color-hover: #DEE8EB;            /* Hover state - subtle highlight */
    --color-active: #D3E0E4;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(47, 84, 93, 0.12);       /* Subtle border */
    --color-border-soft: rgba(47, 84, 93, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #ECF2F4;            /* Lightest blue-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #ECF2F4 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #BED0D5; /* Darker blue-white */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #CEDBE0; /* Between ant-collapse and background-soft */
}`,
}
