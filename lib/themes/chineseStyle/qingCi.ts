import type { Theme } from '@/lib/types'

export const qingCi: Theme = {
  id: 'qing-ci',
  name: '青瓷',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/qing-ci.png',
  darkPreviewUrl: '/qing-ci.png',
  css: `/* 
========================
青瓷 (Qing-ci)
========================
Theme inspired by classical Chinese celadon pottery, featuring the
distinctive blue-green glazes that made this porcelain famous.
The colors reflect both the subtle variations in celadon glazes
and the refined elegance of Song Dynasty ceramics.
*/

/* Root variables */
:root {
    --color-white-soft: #F4F8F6;
    --color-black-soft: #2C3635;  /* Deep celadon */

    /* Primary color - classic celadon */
    --color-primary: #7BA898;     /* Traditional celadon green */
    --color-primary-soft: rgba(123, 168, 152, 0.6);
    --color-primary-mute: rgba(123, 168, 152, 0.2);
}

/* Dark mode - deep celadon tones */
body[theme-mode="dark"] {
    --color-background: #2C3635;       /* Deep celadon */
    --color-background-mute: #445352;  /* Rich celadon */
    --color-background-soft: #4A5755;  /* Medium celadon */

    --navbar-background-mac: rgba(44, 54, 53, 0.85);
    --navbar-background: #2C3635;
    --chat-background: #2C3635;
    --chat-background-user: #3A4745;
    --chat-background-assistant: #445352;

    --chat-text-user: #E6EFEC;
    --color-text: #E6EFEC;

    --color-hover: #506462;
    --color-active: #5B706E;

    --color-border: rgba(230, 239, 236, 0.15);
    --color-border-soft: rgba(230, 239, 236, 0.08);
}

/* Light mode - subtle celadon tints */
body[theme-mode="light"] {
    --color-primary: #7BA898;     /* Traditional celadon green */
    --color-primary-soft: rgba(123, 168, 152, 0.6);
    --color-primary-mute: rgba(123, 168, 152, 0.2);

    --color-background: #F0F5F3;       /* Pale celadon */
    --color-background-mute: #D2DEDA;  /* Soft celadon */
    --color-background-soft: #E1EAE7;  /* Medium celadon */

    --navbar-background: #E8EFEC;
    --chat-background: #F5F9F7;
    --chat-background-user: #E1EAE7;
    --chat-background-assistant: #E8EFEC;

    --color-text: #2C3635;

    --color-hover: #EAF2EF;
    --color-active: #E2EBE8;

    --color-border: rgba(44, 54, 53, 0.12);
    --color-border-soft: rgba(44, 54, 53, 0.06);

    --color-white: #F5F9F7;
}`,
}
