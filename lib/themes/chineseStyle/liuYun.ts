import type { Theme } from '@/lib/types'

export const liuYun: Theme = {
  id: 'liu-yun',
  name: '流云',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/liu-yun.png',
  darkPreviewUrl: '/liu-yun.png',
  css: `/* 
========================
流云 (Liu-yun)
========================
Theme inspired by flowing clouds in traditional Chinese paintings,
featuring ethereal blue tones that capture the dynamic movement
of clouds across mountain landscapes. The colors reflect the
various states of clouds from dawn to dusk.
*/

/* Root variables */
:root {
    --color-white-soft: #F3F6FA;
    --color-black-soft: #152944;  /* Deep cloud-shadow blue */

    /* Primary color (accent color) and variants */
    --color-primary: #4B7AB2;     /* Classic cloud blue */
    --color-primary-soft: rgba(75, 122, 178, 0.6);
    --color-primary-mute: rgba(75, 122, 178, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #152944;       /* Deep night cloud */
    --color-background-mute: #1D3557;  /* Twilight blue */
    --color-background-soft: #23496B;  /* Evening cloud */

    --navbar-background-mac: rgba(21, 41, 68, 0.85);
    --navbar-background: #152944;
    --chat-background: #152944;
    --chat-background-user: #234875;
    --chat-background-assistant: #1D405F;

    --chat-text-user: #E6EEF7;
    --color-text: #E6EEF7;

    --color-hover: #2A5377;
    --color-active: #315F89;

    --color-border: rgba(230, 238, 247, 0.15);
    --color-border-soft: rgba(230, 238, 247, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #4B7AB2;     /* Classic cloud blue */
    --color-primary-soft: rgba(75, 122, 178, 0.6);
    --color-primary-mute: rgba(75, 122, 178, 0.2);

    --color-background: #F3F6FA;       /* Morning cloud white */
    --color-background-mute: #DCE6F2;  /* Soft cloud blue */
    --color-background-soft: #E8EEF5;  /* Daylight cloud */

    --navbar-background: #F0F4F9;
    --chat-background: #F7FAFD;
    --chat-background-user: #E8EEF5;
    --chat-background-assistant: #F3F6FA;

    --color-text: #152944;

    --color-hover: #EBF1F8;
    --color-active: #E2EAF4;

    --color-border: rgba(21, 41, 68, 0.12);
    --color-border-soft: rgba(21, 41, 68, 0.06);

    --color-white: #F7FAFD;
}`,
}
