import type { Theme } from '@/lib/types'

export const chanZong: Theme = {
  id: 'chan-zong',
  name: '禅棕',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/chan-zong.png',
  darkPreviewUrl: '/chan-zong.png',
  css: `/* 
========================
禅棕 (Chan-zong)
========================
Theme inspired by Zen Buddhist aesthetics, featuring warm browns
reminiscent of wooden temple architecture and meditation halls.
The colors reflect the natural materials and serene atmosphere
of traditional Chan Buddhist spaces.
*/

/* Root variables */
:root {
    --color-white-soft: #FAF8F7;
    --color-black-soft: #5D4037;  /* Deep meditation wood brown */

    /* Primary color (accent color) and variants */
    --color-primary: #795548;     /* Rich temple wood brown */
    --color-primary-soft: rgba(121, 85, 72, 0.6);
    --color-primary-mute: rgba(121, 85, 72, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #5D4037;       /* Deep wood brown */
    --color-background-mute: #6D4C41;  /* Rich wood brown */
    --color-background-soft: #8A665F;  /* Medium wood brown */

    --navbar-background-mac: rgba(93, 64, 55, 0.85);
    --navbar-background: #5D4037;
    --chat-background: #5D4037;
    --chat-background-user: #795548;
    --chat-background-assistant: #795650;

    --chat-text-user: #EFEBE9;
    --color-text: #EFEBE9;

    --color-hover: #8D6E63;
    --color-active: #A1887F;

    --color-border: rgba(239, 235, 233, 0.15);
    --color-border-soft: rgba(239, 235, 233, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #795548;     /* Rich temple wood brown */
    --color-primary-soft: rgba(121, 85, 72, 0.6);
    --color-primary-mute: rgba(121, 85, 72, 0.2);

    --color-background: #EFEBE9;       /* Light temple wood */
    --color-background-mute: #BCAAA4;  /* Soft wood brown */
    --color-background-soft: #D7CCC8;  /* Medium light brown */

    --navbar-background: #EFEBE9;
    --chat-background: #FAF8F7;
    --chat-background-user: #EFEBE9;
    --chat-background-assistant: #D7CCC8;

    --color-text: #5D4037;

    --color-hover: #F5F0EE;
    --color-active: #EBE3E0;

    --color-border: rgba(93, 64, 55, 0.12);
    --color-border-soft: rgba(93, 64, 55, 0.06);

    --color-white: #FAF8F7;
}`,
}
