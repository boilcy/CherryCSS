import type { Theme } from '@/lib/types'

export const yuShi: Theme = {
  id: 'yu-shi',
  name: '玉石',
  description: 'Light theme inspired by jade and traditional ornaments',
  lightPreviewUrl: '/yu-shi.png',
  darkPreviewUrl: '/yu-shi.png',
  css: `/* 
========================
玉石 (Yu-shi)
========================
Theme inspired by classical Chinese jade artifacts, featuring rich
emerald and celadon greens that capture the distinctive color and
translucent quality of fine jade. The aesthetic reflects the intricate
carvings and smooth polished surfaces of traditional jade ornaments.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #163229;  /* Deep jade green, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #388E70;     /* Vibrant jade green - inspired by high-quality specimens */
    --color-primary-soft: rgba(56, 142, 112, 0.6);  /* Softer jade green */
    --color-primary-mute: rgba(56, 142, 112, 0.2);  /* Subtle jade green */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #163229;       /* Deep forest jade green */
    --color-background-mute: #1E3E33;  /* Slightly lighter green */
    --color-background-soft: #2A5245;  /* Medium dark green */

    /* Chat interface colors */
    --navbar-background-mac: rgba(22, 50, 41, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #163229;      /* Navigation bar background */
    --chat-background: #163229;        /* Main chat area background */
    --chat-background-user: #1F3F35;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #26493D; /* Assistant message - medium green */

    /* Text colors */
    --chat-text-user: #E8F2EE;         /* Soft white with slight green tint */
    --color-text: #E8F2EE;             /* General text color */

    /* Interactive states */
    --color-hover: #2E5A4B;            /* Hover state - subtle highlight */
    --color-active: #356B59;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(232, 242, 238, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(232, 242, 238, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #1F3F35 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #347764; /* Richer jade green */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #2A5245; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E8F4EE;       /* Soft mint green like pale jade */
    --color-background-mute: #D5EAE0;  /* Slightly deeper mint */
    --color-background-soft: #DCEEE5;  /* Medium light green */

    /* Chat interface colors */
    --navbar-background: #E0F2E8;      /* Soft green navbar */
    --chat-background: #EEF8F3;        /* Main chat area - bright mint */
    --chat-background-user: #E8F4EE;   /* User message - standard mint */
    --chat-background-assistant: #DCEEE5; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #1D4A3C;             /* Deep jade green text color */

    /* Interactive states */
    --color-hover: #DDEFE5;            /* Hover state - subtle highlight */
    --color-active: #D0E8DC;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(29, 74, 60, 0.12);       /* Subtle border */
    --color-border-soft: rgba(29, 74, 60, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EEF8F3;            /* Lightest mint green */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EEF8F3 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B6D9C8; /* Deeper celadon green */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C7E5D6; /* Between ant-collapse and background-soft */
}`,
}
