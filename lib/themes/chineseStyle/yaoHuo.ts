import type { Theme } from "@/lib/types"

export const yaoHuo: Theme = {
    id: "yao-huo",
    name: "窑火",
    description: "Light theme inspired by brown and traditional pottery",
    lightPreviewUrl: "/yao-huo.png",
    darkPreviewUrl: "/yao-huo.png",
    css: `/* 
========================
窑火 (Yao-huo)
========================
Theme inspired by the rich colors of traditional Chinese kilns,
featuring the warm browns and amber tones created by wood-firing.
The palette captures both the intense heat of the kiln fire and
the resulting earthen glazes of Tang Dynasty ceramics.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FAF0DD;
    --color-black-soft: #2C1810;  /* Deep ember brown */

    /* Primary color (accent color) and variants */
    --color-primary: #C85F3C;     /* Kiln fire red-orange */
    --color-primary-soft: rgba(200, 95, 60, 0.6);  /* Softer ember */
    --color-primary-mute: rgba(200, 95, 60, 0.2);  /* Subtle ember */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C1810;       /* Deep ember brown like kiln shadows */
    --color-background-mute: #443026;  /* Slightly lighter ember */
    --color-background-soft: #6B4636;  /* Medium fired clay */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 24, 16, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #2C1810;      /* Navigation bar background */
    --chat-background: #2C1810;        /* Main chat area background */
    --chat-background-user: #5C392C;   /* User message bubble - warm ember */
    --chat-background-assistant: #443026; /* Assistant message - rich clay */

    /* Text colors */
    --chat-text-user: #F8E3C4;         /* Warm light like kiln glow */
    --color-text: #F8E3C4;             /* General text color */

    /* Interactive states */
    --color-hover: #6D4234;            /* Hover state - glowing ember */
    --color-active: #7D4C3D;           /* Active/selected state - hot ember */

    /* Border colors */
    --color-border: rgba(248, 227, 196, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 227, 196, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #5C392C !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #664A3A; /* Rich fired clay */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #553C30; /* Deep clay tone */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F8E3C4;       /* Light clay color */
    --color-background-mute: #D4B176;  /* Slightly darker clay */
    --color-background-soft: #E6C89B;  /* Medium clay tone */

    /* Chat interface colors */
    --navbar-background: #F1D6AE;      /* Warm clay navbar */
    --chat-background: #FAF0DD;        /* Main chat area - bright clay */
    --chat-background-user: #E6C89B;   /* User message - standard clay */
    --chat-background-assistant: #F1D6AE; /* Assistant message - warm clay */

    /* Text colors */
    --color-text: #2C1810;             /* Deep ember text color */

    /* Interactive states */
    --color-hover: #F3DDB8;            /* Hover state - warm highlight */
    --color-active: #EBCD9E;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(44, 24, 16, 0.12);       /* Subtle border */
    --color-border-soft: rgba(44, 24, 16, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FAF0DD;            /* Lightest clay tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FAF0DD !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #DEB57E; /* Deeper clay */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E8C696; /* Rich clay tone */
}`,
  }