import type { Theme } from '@/lib/types'

export const qingHua: Theme = {
  id: 'qing-hua',
  name: '青花',
  description: 'Light theme inspired by blue and traditional pottery',
  lightPreviewUrl: '/qing-hua.png',
  darkPreviewUrl: '/qing-hua.png',
  css: `/* 
========================
青花 (Qing-hua)
========================
Theme inspired by traditional blue and white porcelain,
featuring the distinctive cobalt blue designs on pristine
white backgrounds that characterize this iconic style of
Chinese ceramics.
*/

/* Root variables */
:root {
    --color-white-soft: #F7FBFF;
    --color-black-soft: #102349;  /* Deep cobalt blue */

    /* Primary color (accent color) and variants */
    --color-primary: #1E3F66;     /* Classic cobalt blue */
    --color-primary-soft: rgba(30, 63, 102, 0.6);
    --color-primary-mute: rgba(30, 63, 102, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #102349;       /* Deep cobalt */
    --color-background-mute: #1B4B77;  /* Rich cobalt */
    --color-background-soft: #275983;  /* Medium cobalt */

    --navbar-background-mac: rgba(16, 35, 73, 0.85);
    --navbar-background: #102349;
    --chat-background: #102349;
    --chat-background-user: #1E3F66;
    --chat-background-assistant: #1B4B77;

    --chat-text-user: #F2F7FF;
    --color-text: #F2F7FF;

    --color-hover: #336790;
    --color-active: #3D7BAD;

    --color-border: rgba(242, 247, 255, 0.15);
    --color-border-soft: rgba(242, 247, 255, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    --color-background: #F2F7FF;       /* Porcelain white */
    --color-background-mute: #B9D7FF;  /* Soft blue */
    --color-background-soft: #D4E5FF;  /* Medium light blue */

    --navbar-background: #E6F0FF;
    --chat-background: #F7FBFF;
    --chat-background-user: #D4E5FF;
    --chat-background-assistant: #E6F0FF;

    --color-text: #102349;

    --color-hover: #EBF3FF;
    --color-active: #E0ECFF;

    --color-border: rgba(16, 35, 73, 0.12);
    --color-border-soft: rgba(16, 35, 73, 0.06);

    --color-white: #F7FBFF;
}`,
}
