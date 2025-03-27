import type { Theme } from "@/lib/types"

export const changAn: Theme = {
  id: "chang-an",
  name: "长安",
  description: "Light theme inspired by traditional Chinese aesthetics",
  lightPreviewUrl: "/chang-an.png",
  darkPreviewUrl: "/chang-an.png",
  css: `/* 
========================
长安 (Chang'an)
========================
Theme inspired by Tang Dynasty aesthetics and the ancient capital Chang'an,
featuring warm earth tones reminiscent of traditional Chinese architecture, 
calligraphy, and silk paintings
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #2C2420;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #9E2B25;     /* Cinnabar red - commonly used in Tang Dynasty art */
    --color-primary-soft: rgba(158, 43, 37, 0.6);  /* Softer cinnabar */
    --color-primary-mute: rgba(158, 43, 37, 0.2);  /* Subtle cinnabar */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C2420;       /* Rich walnut wood color */
    --color-background-mute: #332A24;  /* Slightly lighter wood tone */
    --color-background-soft: #4A3D34;  /* Medium wood tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 36, 32, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2C2420;      /* Navigation bar background */
    --chat-background: #2C2420;        /* Main chat area background */
    --chat-background-user: #362D26;   /* User message bubble - dark lacquered wood */
    --chat-background-assistant: #3D312A; /* Assistant message - medium lacquered wood */

    /* Text colors */
    --chat-text-user: #F8F7F2;         /* Antiqued parchment color */
    --color-text: #F8F7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #413529;            /* Hover state - subtle highlight */
    --color-active: #524436;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 248, 242, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 248, 242, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #362D26 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #574839; /* Dark bamboo color */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4A3D34; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F2E6D5;       /* Light rice paper color */
    --color-background-mute: #DFCBB3;  /* Slightly darker rice paper */
    --color-background-soft: #E6D5C0;  /* Medium rice paper */

    /* Chat interface colors */
    --navbar-background: #EDE0CC;      /* Ivory tone navbar */
    --chat-background: #F6EBDC;        /* Main chat area - light ivory */
    --chat-background-user: #F2E6D5;   /* User message - rice paper */
    --chat-background-assistant: #E6D5C0; /* Assistant message - subtle tan */

    /* Text colors */
    --color-text: #2C2420;             /* Rich walnut ink color */

    /* Interactive states */
    --color-hover: #EEDDC0;            /* Hover state - subtle highlight */
    --color-active: #E8D0A9;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(44, 36, 32, 0.12);       /* Subtle ink border */
    --color-border-soft: rgba(44, 36, 32, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F6EBDC;            /* Lightest ivory tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F6EBDC !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #CDB9A2; /* Bamboo color */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #D9C7B1; /* Between ant-collapse and background-soft */
}`
} 