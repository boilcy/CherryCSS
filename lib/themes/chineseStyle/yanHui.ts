import type { Theme } from '@/lib/types'

export const yanHui: Theme = {
  id: 'yan-hui',
  name: '雁灰',
  description: 'Light theme inspired by gray and traditional pottery',
  lightPreviewUrl: '/yan-hui.png',
  darkPreviewUrl: '/yan-hui.png',
  css: `/* 
========================
雁灰 (Yan-hui)
========================
Theme inspired by the striking contrast of wild geese plumage,
featuring the interplay between light silver-grey breast feathers
and darker slate-grey wing feathers. The design captures the
dramatic transitions seen in traditional Chinese paintings of geese.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F9FAFB;
    --color-black-soft: #1F2937;  /* Deep charcoal of wing feathers */

    /* Primary color (accent color) and variants */
    --color-primary: #4B5563;     /* Rich grey of primary wing feathers */
    --color-primary-soft: rgba(75, 85, 99, 0.6);
    --color-primary-mute: rgba(75, 85, 99, 0.2);
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - with strong contrast */
    --color-background: #1F2937;       /* Deep charcoal like wing feathers */
    --color-background-mute: #374151;  /* Mid-tone grey */
    --color-background-soft: #4B5563;  /* Lighter slate grey */

    /* Chat interface colors - emphasizing contrast */
    --navbar-background-mac: rgba(31, 41, 55, 0.85);
    --navbar-background: #1F2937;
    --chat-background: #1F2937;
    --chat-background-user: #2C3B4E;   /* Deeper blue-grey */
    --chat-background-assistant: #404E67; /* Contrasting slate */

    /* Text colors */
    --chat-text-user: #E5E7EB;         /* Clear, bright grey */
    --color-text: #E5E7EB;

    /* Interactive states - more pronounced */
    --color-hover: #465469;            /* Noticeable hover state */
    --color-active: #536380;           /* Distinct active state */

    /* Border colors */
    --color-border: rgba(229, 231, 235, 0.18);
    --color-border-soft: rgba(229, 231, 235, 0.09);
}

/* Content container background */
body[theme-mode="dark"] #content-container {
    background-color: #2C3B4E !important;
}

/* Collapsible components with enhanced contrast */
body[theme-mode="dark"] .ant-collapse {
    background-color: #4B5875;
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4B5563;
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - with clear distinction */
    --color-background: #F3F4F6;       /* Bright silver like breast feathers */
    --color-background-mute: #D1D5DB;  /* Medium silver-grey */
    --color-background-soft: #E5E7EB;  /* Soft grey */

    /* Chat interface colors - maintaining contrast */
    --navbar-background: #E5E7EB;
    --chat-background: #F9FAFB;        /* Brightest silver */
    --chat-background-user: #F3F4F6;   /* Clear silver */
    --chat-background-assistant: #E5E7EB; /* Distinct contrast */

    /* Text colors */
    --color-text: #1F2937;             /* Strong contrast for readability */

    /* Interactive states */
    --color-hover: #E9EDF3;            /* Subtle but noticeable */
    --color-active: #DFE4EC;           /* Clear state change */

    /* Border colors */
    --color-border: rgba(31, 41, 55, 0.15);
    --color-border-soft: rgba(31, 41, 55, 0.08);

    /* White variable */
    --color-white: #F9FAFB;
}

/* Content container background */
body[theme-mode="light"] #content-container {
    background-color: #F9FAFB !important;
}

/* Collapsible components with clear distinction */
body[theme-mode="light"] .ant-collapse {
    background-color: #B9BEC7;    /* Distinctly darker */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #CDD1D9;    /* Clear mid-tone */
}`,
}
