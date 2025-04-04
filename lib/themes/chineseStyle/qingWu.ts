import type { Theme } from '@/lib/types'

export const qingWu: Theme = {
  id: 'qing-wu',
  name: '青雾',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/qing-wu.png',
  darkPreviewUrl: '/qing-wu.png',
  css: `/* 
========================
青雾 (Qing-wu)
========================
Theme inspired by the ethereal blue mist that shrouds Tang Dynasty
landscape paintings. The cyan-blue tones and transparent effects
evoke the delicate veil of morning fog over mountains and waters,
capturing the poetic atmosphere of classical Chinese nature scenes.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F4F8F8;
    --color-black-soft: #29424A;  /* Deep cyan-blue, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #4C8C99;     /* Soft cyan-blue - like mist over water */
    --color-primary-soft: rgba(76, 140, 153, 0.6);  /* Softer cyan */
    --color-primary-mute: rgba(76, 140, 153, 0.2);  /* Subtle cyan */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: rgba(41, 66, 74, 0.95);       /* Semi-transparent deep cyan-blue */
    --color-background-mute: rgba(50, 75, 82, 0.95);  /* Slightly lighter cyan-blue */
    --color-background-soft: rgba(61, 90, 99, 0.95);  /* Medium cyan-blue */

    /* Chat interface colors */
    --navbar-background-mac: rgba(41, 66, 74, 0.75);  /* More transparent navbar */
    --navbar-background: rgba(41, 66, 74, 0.9);      /* Semi-transparent navigation bar */
    --chat-background: rgba(41, 66, 74, 0.95);        /* Semi-transparent chat area */
    --chat-background-user: rgba(52, 80, 86, 0.85);   /* More transparent user messages */
    --chat-background-assistant: rgba(60, 90, 100, 0.85); /* More transparent assistant messages */

    /* Text colors */
    --chat-text-user: rgba(230, 240, 242, 0.95);      /* Slightly transparent text */
    --color-text: rgba(230, 240, 242, 0.95);          /* Slightly transparent text */

    /* Interactive states */
    --color-hover: rgba(62, 97, 107, 0.7);            /* Transparent hover state */
    --color-active: rgba(74, 113, 124, 0.8);          /* Transparent active state */

    /* Border colors */
    --color-border: rgba(230, 240, 242, 0.15);        /* Visible but subtle border */
    --color-border-soft: rgba(230, 240, 242, 0.08);   /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: rgba(52, 80, 86, 0.9) !important; /* More transparent background */
    backdrop-filter: blur(10px) !important;             /* Frosted glass effect */
    -webkit-backdrop-filter: blur(10px) !important;     /* For Safari */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: rgba(71, 119, 133, 0.8); /* More transparent deeper cyan-blue */
    backdrop-filter: blur(5px);                /* Light frosted effect */
    -webkit-backdrop-filter: blur(5px);
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: rgba(61, 90, 99, 0.85); /* More transparent medium blue */
    backdrop-filter: blur(3px);               /* Light frosted effect */
    -webkit-backdrop-filter: blur(3px);
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: rgba(230, 240, 242, 0.9);      /* Semi-transparent cyan-white */
    --color-background-mute: rgba(214, 230, 233, 0.9); /* Slightly deeper transparent cyan */
    --color-background-soft: rgba(222, 234, 237, 0.9); /* Medium light transparent blue */

    /* Chat interface colors */
    --navbar-background: rgba(224, 236, 240, 0.85);    /* Semi-transparent navbar */
    --chat-background: rgba(237, 245, 247, 0.85);      /* Semi-transparent chat area */
    --chat-background-user: rgba(230, 240, 242, 0.8);  /* More transparent user messages */
    --chat-background-assistant: rgba(222, 234, 237, 0.8); /* More transparent assistant messages */

    /* Text colors */
    --color-text: rgba(41, 66, 74, 0.9);               /* Slightly transparent text */

    /* Interactive states */
    --color-hover: rgba(219, 235, 239, 0.7);           /* Transparent hover state */
    --color-active: rgba(208, 227, 231, 0.8);          /* Transparent active state */

    /* Border colors */
    --color-border: rgba(41, 66, 74, 0.12);            /* Subtle border */
    --color-border-soft: rgba(41, 66, 74, 0.06);       /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: rgba(237, 245, 247, 0.9);           /* Semi-transparent lightest cyan-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: rgba(237, 245, 247, 0.85) !important; /* More transparent background */
    backdrop-filter: blur(8px) !important;                  /* Frosted glass effect */
    -webkit-backdrop-filter: blur(8px) !important;          /* For Safari */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: rgba(184, 209, 215, 0.8); /* More transparent deeper cyan-white */
    backdrop-filter: blur(4px);                 /* Light frosted effect */
    -webkit-backdrop-filter: blur(4px);
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: rgba(205, 222, 226, 0.8); /* More transparent medium blue */
    backdrop-filter: blur(3px);                 /* Light frosted effect */
    -webkit-backdrop-filter: blur(3px);
}`,
}
