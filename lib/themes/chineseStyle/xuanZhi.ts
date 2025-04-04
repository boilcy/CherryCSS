import type { Theme } from '@/lib/types'

export const xuanZhi: Theme = {
  id: 'xuan-zhi',
  name: '宣纸',
  description: 'Light theme inspired by traditional Chinese paper',
  lightPreviewUrl: '/xuan-zhi.png',
  darkPreviewUrl: '/xuan-zhi.png',
  css: `/* 
========================
宣纸 (Xuan-zhi)
========================
Theme inspired by traditional Chinese Xuan paper, renowned for its soft texture,
distinctive warm tones, and lasting quality. Xuan paper has been used for 
calligraphy and painting since the Tang Dynasty, valued for its perfect
balance of ink absorption and durability.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #2C2C2C;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #7C6E58;     /* Ink stone gray-brown - used in traditional calligraphy */
    --color-primary-soft: rgba(124, 110, 88, 0.6);  /* Softer ink tone */
    --color-primary-mute: rgba(124, 110, 88, 0.2);  /* Subtle ink wash */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C2C2C;       /* Deep charcoal - like ink stone */
    --color-background-mute: #333333;  /* Slightly lighter tone */
    --color-background-soft: #515151;  /* Medium tone for contrast */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 44, 44, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2C2C2C;      /* Navigation bar background */
    --chat-background: #2C2C2C;        /* Main chat area background */
    --chat-background-user: #383838;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #404040; /* Assistant message - medium tone */

    /* Text colors */
    --chat-text-user: #F8F8F2;         /* Clear, legible text color */
    --color-text: #F8F8F2;             /* General text color */

    /* Interactive states */
    --color-hover: #454545;            /* Hover state - subtle highlight */
    --color-active: #595959;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 248, 242, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 248, 242, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #383838 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #636363; /* Darker gray */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #515151; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F5F2E9;       /* Natural Xuan paper tone */
    --color-background-mute: #E5DFD1;  /* Slightly darker paper */
    --color-background-soft: #EBE6D9;  /* Medium paper tone */

    /* Chat interface colors */
    --navbar-background: #F2EEE3;      /* Soft cream navbar */
    --chat-background: #F9F6ED;        /* Main chat area - pristine paper */
    --chat-background-user: #F5F2E9;   /* User message - standard paper */
    --chat-background-assistant: #EBE6D9; /* Assistant message - subtle cream */

    /* Text colors */
    --color-text: #3C3A36;             /* Rich ink color on paper */

    /* Interactive states */
    --color-hover: #EEEAE0;            /* Hover state - subtle highlight */
    --color-active: #E2DCC9;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(60, 58, 54, 0.12);       /* Subtle ink border */
    --color-border-soft: rgba(60, 58, 54, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F9F6ED;            /* Lightest paper tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F9F6ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8D2C6; /* Darker paper tone */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E2DCD0; /* Between ant-collapse and background-soft */
}`,
}
