import type { Theme } from "@/lib/types"

export const claude: Theme = {
    id: "claude",
    name: "Claude",
    description: "Theme inspired by Claude",
    lightPreviewUrl: "/claude.png",
    darkPreviewUrl: "/claude.png",
    css: `/* 
========================
Claude
========================
Theme inspired by Claude's distinctive aesthetic with soft whites and neutral grays
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #2A2B2A;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #EA928A;     /* Soft reddish accent, based on Claude's code colors */
    --color-primary-soft: rgba(234, 146, 138, 0.6);  /* Softer version */
    --color-primary-mute: rgba(234, 146, 138, 0.2);  /* Subtle version */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #30302e;       /* Main background color */
    --color-background-mute: #282C34;  /* Slightly lighter background */
    --color-background-soft: #303030;  /* Even lighter background for contrast elements */

    /* Chat interface colors */
    --navbar-background-mac: rgba(42, 43, 42, 0.8);  /* macOS-style navbar background */
    --navbar-background: var(--color-black-soft);     /* Navigation bar background */
    --chat-background: #30302e;        /* Main chat area background */
    --chat-background-user: #323332;   /* User message bubble background */
    --chat-background-assistant: #3b3b39; /* Assistant message bubble background */

    /* Text colors */
    --chat-text-user: var(--color-white-soft);  /* User message text color */
    --color-text: var(--color-white-soft);      /* General text color */

    /* Interactive states */
    --color-hover: #3D3D3A;            /* Hover state background color */
    --color-active: #444442;           /* Active/selected state color */

    /* Border colors */
    --color-border: #5E5D5940;         /* Standard border color */
    --color-border-soft: #5E5D5920;    /* Subtle border color */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: var(--chat-background-assistant) !important;
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #3F3F3D;  /* Darker than background-soft */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #353533;  /* Usually matches background-soft */
}

/* Additional dark mode specific styles */
body[theme-mode="dark"] #content-container #messages {
    background-color: #30302e;
}

body[theme-mode="dark"] .inputbar-container {
    background-color: #3D3D3A;
    border: 1px solid #5E5D5940;
    border-radius: 8px;
}

body[theme-mode="dark"] .bubble #inputbar {
    background-color: #3d3d3a;
}

/* Code styling */
body[theme-mode="dark"] code {
    background-color: #E5E5E20D;
    color: #EA928A;
}

body[theme-mode="dark"] pre code {
    color: #ABB2BF;
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #EBE8E2;       /* Main background color */
    --color-background-mute: #E4E1D7;  /* Slightly darker background */
    --color-background-soft: #CBC7BE;  /* Medium background for contrast elements */

    /* Chat interface colors */
    --navbar-background: var(--color-white-soft);  /* Navigation bar background */
    --chat-background: #EBE8E2;        /* Main chat area background */
    --chat-background-user: #e8e6dc;   /* User message bubble background */
    --chat-background-assistant: #fefefd; /* Assistant message bubble background */

    /* Text colors */
    --color-text: #2A2B2A;             /* General text color */

    /* Interactive states */
    --color-hover: #f0ede7;            /* Hover state background color */
    --color-active: #e4e1d9;           /* Active/selected state color */

    /* Border colors */
    --color-border: #87867F40;         /* Standard border color */
    --color-border-soft: #87867F20;    /* Subtle border color */

    /* White variable (often used for backgrounds) */
    --color-white: #FFFFFF;            /* Pure white for some backgrounds */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EBE8E2 !important;
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8D5CD;  /* Darker than background-soft */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E2DFD7;  /* Between ant-collapse and background-soft */
}

/* Additional light mode specific styles */
body[theme-mode="light"] #content-container #messages {
    background-color: #EBE8E2;
}

body[theme-mode="light"] .inputbar-container {
    background-color: #FFFFFF;
    border: 1px solid #87867F40;
    border-radius: 8px;
}

body[theme-mode="light"] .bubble #inputbar {
    background-color: #ffffff;
}

/* Code styling */
body[theme-mode="light"] code {
    background-color: #3D39290D;
    color: #7C1B13;
}

body[theme-mode="light"] pre code {
    color: #000000;
}`
}