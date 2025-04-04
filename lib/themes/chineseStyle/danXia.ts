import type { Theme } from '@/lib/types'

export const danXia: Theme = {
  id: 'dan-xia',
  name: '丹霞',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/dan-xia.png',
  darkPreviewUrl: '/dan-xia.png',
  css: `/* 
========================
丹霞 (Dan-xia)
========================
Theme inspired by the glowing red clouds at sunset and
the cinnabar red commonly used in traditional Chinese art.
The colors capture both the intensity of sunset clouds and
the rich vermillion of classical Chinese paintings.
*/

/* Root variables */
:root {
    --color-white-soft: #FFF7F7;
    --color-black-soft: #4A1C1C;  /* Deep cinnabar */

    /* Primary color (accent color) and variants */
    --color-primary: #A03C3C;     /* Rich cinnabar red */
    --color-primary-soft: rgba(160, 60, 60, 0.6);
    --color-primary-mute: rgba(160, 60, 60, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #4A1C1C;       /* Deep cinnabar */
    --color-background-mute: #8B3434;  /* Rich cinnabar */
    --color-background-soft: #A03C3C;  /* Medium cinnabar */

    --navbar-background-mac: rgba(74, 28, 28, 0.85);
    --navbar-background: #4A1C1C;
    --chat-background: #4A1C1C;
    --chat-background-user: #642424;
    --chat-background-assistant: #8B3434;

    --chat-text-user: #FFE6E6;
    --color-text: #FFE6E6;

    --color-hover: #B54545;
    --color-active: #C85151;

    --color-border: rgba(255, 230, 230, 0.15);
    --color-border-soft: rgba(255, 230, 230, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #A03C3C;     /* Rich cinnabar red */
    --color-primary-soft: rgba(160, 60, 60, 0.6);
    --color-primary-mute: rgba(160, 60, 60, 0.2);

    --color-background: #FFF7F7;       /* Soft cinnabar white */
    --color-background-mute: #FFD4D4;  /* Light cinnabar */
    --color-background-soft: #FFE4E4;  /* Medium light cinnabar */

    --navbar-background: #FFF0F0;
    --chat-background: #FFFAFA;
    --chat-background-user: #FFE4E4;
    --chat-background-assistant: #FFF0F0;

    --color-text: #4A1C1C;

    --color-hover: #FFE8E8;
    --color-active: #FFDADA;

    --color-border: rgba(74, 28, 28, 0.12);
    --color-border-soft: rgba(74, 28, 28, 0.06);

    --color-white: #FFFAFA;
}`,
}
