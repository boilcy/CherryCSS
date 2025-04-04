import type { Theme } from '@/lib/types'

export const jinXiangYu: Theme = {
  id: 'jin-xiang-yu',
  name: '金镶玉',
  description: 'Light theme inspired by gold and jade ornaments',
  lightPreviewUrl: '/jin-xiang-yu.png',
  darkPreviewUrl: '/jin-xiang-yu.png',
  css: `/* 
========================
金镶玉 (Jin-xiang-yu)
========================
Theme inspired by traditional Chinese gold and jade ornaments,
featuring elegant cream tones and rich browns that evoke the luxurious
combination of precious metals and fine jade seen in imperial craftsmanship
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FBF7ED;
    --color-black-soft: #2A2420;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #C6A75C;     /* Antique gold - inspired by traditional gilding */
    --color-primary-soft: rgba(198, 167, 92, 0.6);  /* Softer gold */
    --color-primary-mute: rgba(198, 167, 92, 0.2);  /* Subtle gold highlight */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2A2420;       /* Deep rosewood color */
    --color-background-mute: #2F2925;  /* Slightly lighter wood tone */
    --color-background-soft: #4A423C;  /* Medium wood tone with subtle warmth */

    /* Chat interface colors */
    --navbar-background-mac: rgba(42, 36, 32, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2A2420;      /* Navigation bar background */
    --chat-background: #2A2420;        /* Main chat area background */
    --chat-background-user: #352E29;   /* User message bubble - warm brown */
    --chat-background-assistant: #3D3631; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F8F3E6;         /* Warm cream text color */
    --color-text: #F8F3E6;             /* General text color */

    /* Interactive states */
    --color-hover: #413A33;            /* Hover state - subtle highlight */
    --color-active: #524A42;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 243, 230, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 243, 230, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #352E29 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #574E47; /* Darker brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4A423C; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F8F3E6;       /* Light cream color */
    --color-background-mute: #EEE5CC;  /* Slightly darker cream */
    --color-background-soft: #F3ECD8;  /* Medium cream with subtle warmth */

    /* Chat interface colors */
    --navbar-background: #F6F0E0;      /* Warm ivory navbar */
    --chat-background: #FBF7ED;        /* Main chat area - bright cream */
    --chat-background-user: #F8F3E6;   /* User message - standard cream */
    --chat-background-assistant: #F3ECD8; /* Assistant message - slightly warmer */

    /* Text colors */
    --color-text: #5A4A38;             /* Rich walnut ink color */

    /* Interactive states */
    --color-hover: #F5EFE0;            /* Hover state - subtle highlight */
    --color-active: #EFEAD0;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(90, 74, 56, 0.12);       /* Subtle border */
    --color-border-soft: rgba(90, 74, 56, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FBF7ED;            /* Lightest cream tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FBF7ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D9CEB1; /* Darker cream */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E8DFC8; /* Between ant-collapse and background-soft */
}`,
}
