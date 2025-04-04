import type { Theme } from '@/lib/types'

export const moNai: Theme = {
  id: 'mo-nai',
  name: '莫奈',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/mo-nai.png',
  darkPreviewUrl: '/mo-nai.png',
  css: `/* 
========================
莫奈 (Mo-nai)
========================
Theme inspired by the impressionistic blues of water lilies,
featuring soft, luminous tones that capture the interplay of
light and water. The colors reflect the ethereal quality of
traditional Chinese water-ink paintings merged with impressionism.
*/

/* Root variables */
:root {
    --color-white-soft: #F4FAFB;
    --color-black-soft: #4C7686;  /* Deep water blue */

    /* Primary color (accent color) and variants */
    --color-primary: #689AAF;     /* Water lily blue */
    --color-primary-soft: rgba(104, 154, 175, 0.6);
    --color-primary-mute: rgba(104, 154, 175, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #4C7686;       /* Deep water blue */
    --color-background-mute: #5A8296;  /* Rich water blue */
    --color-background-soft: #689AAF;  /* Medium water blue */

    --navbar-background-mac: rgba(76, 118, 134, 0.85);
    --navbar-background: #4C7686;
    --chat-background: #4C7686;
    --chat-background-user: #689AAF;
    --chat-background-assistant: #3D6170;

    --chat-text-user: #E6F3F7;
    --color-text: #E6F3F7;

    --color-hover: #5E8EA2;
    --color-active: #7AABC1;

    --color-border: rgba(230, 243, 247, 0.15);
    --color-border-soft: rgba(230, 243, 247, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #689AAF;     /* Water lily blue */
    --color-primary-soft: rgba(104, 154, 175, 0.6);
    --color-primary-mute: rgba(104, 154, 175, 0.2);

    --color-background: #E6F3F7;       /* Soft water blue */
    --color-background-mute: #B3DAE8;  /* Light water blue */
    --color-background-soft: #CCE6F0;  /* Medium light blue */

    --navbar-background: #F0F7F9;
    --chat-background: #F4FAFB;
    --chat-background-user: #E6F3F7;
    --chat-background-assistant: #CCE6F0;

    --color-text: #4C7686;

    --color-hover: #EAF5F8;
    --color-active: #DFF0F5;

    --color-border: rgba(76, 118, 134, 0.12);
    --color-border-soft: rgba(76, 118, 134, 0.06);

    --color-white: #F4FAFB;
}`,
}
