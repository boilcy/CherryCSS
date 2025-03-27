import type { Theme } from "@/lib/types"

export const yanZhi: Theme = {
    id: "yan-zhi",
    name: "胭脂",
    description: "Light theme inspired by red and traditional pottery",
    lightPreviewUrl: "/yan-zhi.png",
    darkPreviewUrl: "/yan-zhi.png",
    css: `/* 
========================
胭脂 (Yan-zhi)
========================
Theme inspired by traditional Chinese rouge (胭脂), featuring the 
elegant red hues used in classical cosmetics and paintings. The colors
reflect the subtle gradations of rouge made from safflower and other
natural pigments prized during the Tang Dynasty.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FFF8F8;
    --color-black-soft: #3D2A2E;  /* Deep rouge, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #E4707C;     /* Classic rouge red - inspired by traditional safflower dye */
    --color-primary-soft: rgba(228, 112, 124, 0.6);  /* Softer rouge */
    --color-primary-mute: rgba(228, 112, 124, 0.2);  /* Subtle rouge */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #3D2A2E;       /* Deep rouge like aged rouge powder */
    --color-background-mute: #463236;  /* Slightly lighter rouge */
    --color-background-soft: #543E42;  /* Medium dark rouge */

    /* Chat interface colors */
    --navbar-background-mac: rgba(61, 42, 46, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #3D2A2E;      /* Navigation bar background */
    --chat-background: #3D2A2E;        /* Main chat area background */
    --chat-background-user: #4A3438;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #513B3F; /* Assistant message - medium rouge */

    /* Text colors */
    --chat-text-user: #FFE6E8;         /* Soft white with slight pink tint */
    --color-text: #FFE6E8;             /* General text color */

    /* Interactive states */
    --color-hover: #5C454A;            /* Hover state - subtle highlight */
    --color-active: #694E53;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(255, 230, 232, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(255, 230, 232, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #4A3438 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #614A4E; /* Deeper rouge */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #543E42; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #FFF0F2;       /* Soft pink like fresh rouge powder */
    --color-background-mute: #FFE6E8;  /* Slightly deeper pink */
    --color-background-soft: #FFEAEC;  /* Medium light pink */

    /* Chat interface colors */
    --navbar-background: #FFF2F4;      /* Soft pink navbar */
    --chat-background: #FFF6F8;        /* Main chat area - bright pink-white */
    --chat-background-user: #FFF0F2;   /* User message - standard pink */
    --chat-background-assistant: #FFEAEC; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #8C4851;             /* Deep rouge text color */

    /* Interactive states */
    --color-hover: #FFE8EA;            /* Hover state - subtle highlight */
    --color-active: #FFDEE2;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(140, 72, 81, 0.12);       /* Subtle border */
    --color-border-soft: rgba(140, 72, 81, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FFF6F8;            /* Lightest pink-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FFF6F8 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #FFD6DA; /* Deeper pink */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #FFE0E4; /* Between ant-collapse and background-soft */
}`,
  }