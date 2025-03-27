import type { Theme } from "@/lib/types"

export const piPa: Theme = {
    id: "pi-pa",
    name: "琵琶",
    description: "Light theme inspired by bamboo and traditional instruments",
    lightPreviewUrl: "/pi-pa.png",
    darkPreviewUrl: "/pi-pa.png",
    css: `/* 
========================
琵琶 (Pi-pa)
========================
Theme inspired by traditional Chinese musical instruments, particularly the pipa lute,
featuring warm golden-brown tones reminiscent of aged wood and bamboo used in
traditional instruments, with delicate accents suggesting instrument strings and curves
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F2ED;
    --color-black-soft: #2F2816;  /* Dark background color, aligned with new main color */

    /* Primary color (accent color) and variants */
    --color-primary: #615020;     /* Rich golden-brown - like aged bamboo or antique wood */
    --color-primary-soft: rgba(97, 80, 32, 0.6);  /* Softer golden-brown */
    --color-primary-mute: rgba(97, 80, 32, 0.2);  /* Subtle golden-brown */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2F2816;       /* Deep golden-brown background */
    --color-background-mute: #3A321D;  /* Slightly lighter tone */
    --color-background-soft: #4E4328;  /* Medium golden-brown tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(47, 40, 22, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2F2816;      /* Navigation bar background */
    --chat-background: #2F2816;        /* Main chat area background */
    --chat-background-user: #403522;   /* User message bubble - warmer brown */
    --chat-background-assistant: #4A3E2B; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F5EFDF;         /* Warm cream text color with golden undertone */
    --color-text: #F5EFDF;             /* General text color */

    /* Interactive states */
    --color-hover: #524530;            /* Hover state - subtle highlight */
    --color-active: #615337;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(245, 239, 223, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(245, 239, 223, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #403522 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #5D5030; /* Darker golden-brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4E4328; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F5EDE7;       /* Soft peachy cream */
    --color-background-mute: #E9DCD1;  /* Slightly darker cream */
    --color-background-soft: #EFE4DB;  /* Medium warm cream */

    /* Chat interface colors */
    --navbar-background: #F2E9E2;      /* Warm cream navbar */
    --chat-background: #F8F2ED;        /* Main chat area - bright cream */
    --chat-background-user: #F5EDE7;   /* User message - standard cream */
    --chat-background-assistant: #EFE4DB; /* Assistant message - warmer cream */

    /* Text colors */
    --color-text: #413520;             /* Rich golden-brown text color to match new theme */

    /* Interactive states */
    --color-hover: #F1E7E1;            /* Hover state - subtle highlight */
    --color-active: #E9DDD5;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(65, 53, 32, 0.12);       /* Subtle border */
    --color-border-soft: rgba(65, 53, 32, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F8F2ED;            /* Lightest cream tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F8F2ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D9C4B5; /* Darker cream */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E5D6CA; /* Between ant-collapse and background-soft */
}`,
  }