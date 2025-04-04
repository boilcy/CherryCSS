import type { Theme } from '@/lib/types'

export const dopamine: Theme = {
  id: 'dopamine',
  name: 'Dopamine',
  description: 'A vibrant and energetic theme with high-contrast colors',
  lightPreviewUrl: '/dopamine.png',
  darkPreviewUrl: '/dopamine.png',
  css: `/* 
========================
Dopamine
========================
Theme inspired by colorful dopamine color palette with vibrant yellows, blues,
greens, pinks, and reds. The design aims to create a visually stimulating environment
with high-contrast energetic colors that evoke the pleasure and reward
systems of the brain.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FFFEF0;
    --color-black-soft: #2A2720;  /* Deep background */

    /* Primary color (accent color) and variants */
    --color-primary: #FFDE30;     /* Vibrant yellow - main dopamine color */
    --color-primary-soft: rgba(255, 222, 48, 0.6);  /* Softer yellow */
    --color-primary-mute: rgba(255, 222, 48, 0.2);  /* Subtle yellow */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2A2720;       /* Deep background */
    --color-background-mute: #333227;  /* Slightly lighter background */
    --color-background-soft: #3D3B2E;  /* Medium background */

    /* Chat interface colors */
    --navbar-background-mac: rgba(42, 39, 32, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #2A2720;      /* Navigation bar background */
    --chat-background: #2A2720;        /* Main chat area background */
    --chat-background-user: #3D3B2E;   /* User message bubble - warmer tone */
    --chat-background-assistant: #333227; /* Assistant message - deeper tone */

    /* Text colors */
    --chat-text-user: #FFFEF0;         /* Light text */
    --color-text: #FFFEF0;             /* General text color */

    /* Interactive states */
    --color-hover: #4A4736;            /* Hover state - energetic tone */
    --color-active: #5C593F;           /* Active/selected state - brighter tone */

    /* Border colors */
    --color-border: rgba(255, 254, 240, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(255, 254, 240, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #3D3B2E !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #4F4C3A; /* Richer tone */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #3D3B2E; /* Matches background-soft */
}

/* Additional styling for dark mode - code elements */
body[theme-mode="dark"] code {
    background-color: #3A391C; /* Slightly brighter background for code */
    color: #3474FB; /* Bright blue for code text - from image */
}

body[theme-mode="dark"] pre code {
    background-color: #333227; /* Darker background for code blocks */
    color: #FFFEF0; /* Light text for code blocks */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #FFFEF0;       /* Light background */
    --color-background-mute: #F7F5E4;  /* Slightly deeper */
    --color-background-soft: #FBF9E9;  /* Medium light */

    /* Chat interface colors */
    --navbar-background: #FFFEF5;      /* Soft navbar */
    --chat-background: #FFFEFA;        /* Main chat area - bright white-yellow */
    --chat-background-user: #FFFEF0;   /* User message */
    --chat-background-assistant: #FBF9E9; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #2A2720;             /* Deep text color */

    /* Interactive states */
    --color-hover: #FFF8D6;            /* Hover state - subtle highlight */
    --color-active: #FFF2C4;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(42, 39, 32, 0.12);       /* Subtle border */
    --color-border-soft: rgba(42, 39, 32, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FFFEFA;            /* Lightest tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FFFEFA !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #F0EACB; /* Deeper tone */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #F7F5E4; /* Between ant-collapse and background-soft */
}

/* Additional styling for light mode - code elements */
body[theme-mode="light"] code {
    background-color: #F7F5E4; /* Slightly deeper background for code */
    color: #E0243E; /* Bright red for code text - from image */
}

body[theme-mode="light"] pre code {
    background-color: #FBF9E9; /* Medium light background for code blocks */
    color: #2A2720; /* Deep text for code blocks */
}

/* Special highlight accents - both modes */
.message-content a {
    color: #3474FB !important; /* Bright blue for links in dark mode - from image */
    transition: color 0.2s ease;
}

body[theme-mode="light"] .message-content a {
    color: #E0243E !important; /* Bright red for links in light mode - from image */
}

/* Buttons and interactive elements - colorful highlight on hover */
button:hover, .ant-btn:hover {
    box-shadow: 0 0 8px #FFDE30, 0 0 12px #FF439A !important; /* Yellow glow + pink glow - from image */
    transition: box-shadow 0.3s ease;
}

/* Selection highlight */
::selection {
    background-color: rgba(255, 222, 48, 0.3) !important;
    color: inherit;
}

/* Special dopamine color accents */
.message-content strong, .message-content b {
    color: #FF439A; /* Pink from image for emphasis */
}

.message-content h1, .message-content h2, .message-content h3 {
    color: #1FB95A; /* Green from image for headings */
}

.message-content em, .message-content i {
    color: #FF6B3D; /* Orange from image for italics */
}`,
}
