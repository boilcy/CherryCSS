import type { Theme } from "@/lib/types"

export const naiCha: Theme = {
    id: "nai-cha",
    name: "奶茶",
    description: "Light theme inspired by brown and traditional pottery",
    lightPreviewUrl: "/nai-cha.png",
    darkPreviewUrl: "/nai-cha.png",
    css: `/* 
========================
奶茶 (Nai-cha)
========================
Theme inspired by traditional Chinese milk tea, featuring rich, warm browns
and creamy tones that evoke the layered colors of perfectly brewed tea
with milk. The aesthetic reflects both the translucent amber of tea and
the soft, creamy swirls of milk.
*/

/* Root variables */
:root {
    --color-white-soft: #FFF8F2;
    --color-black-soft: #382720;  /* Deep tea brown */

    /* Primary color - rich milk tea brown */
    --color-primary: #A67B5B;     /* Classic milk tea color */
    --color-primary-soft: rgba(166, 123, 91, 0.6);
    --color-primary-mute: rgba(166, 123, 91, 0.2);
}

/* Dark mode - deep tea colors */
body[theme-mode="dark"] {
    --color-background: #382720;       /* Deep tea brown */
    --color-background-mute: #463229;  /* Rich brown */
    --color-background-soft: #6B5044;  /* Warm brown */

    --navbar-background-mac: rgba(56, 39, 32, 0.85);
    --navbar-background: #382720;
    --chat-background: #463229;
    --chat-background-user: #624B41;   /* Warmer brown */
    --chat-background-assistant: #5D443A;

    --chat-text-user: #F5E6D3;
    --color-text: #F5E6D3;

    --color-hover: #735649;
    --color-active: #846557;

    --color-border: rgba(245, 230, 211, 0.15);
    --color-border-soft: rgba(245, 230, 211, 0.08);
}

/* Light mode - creamy milk tea colors */
body[theme-mode="light"] {
    --color-background: #F5E6D3;       /* Creamy base */
    --color-background-mute: #DEC5AA;  /* Deeper cream */
    --color-background-soft: #E8D4BE;  /* Warm cream */

    --navbar-background: #F2E2CF;
    --chat-background: #FBF7F2;
    --chat-background-user: #F5E6D3;
    --chat-background-assistant: #E8D4BE;

    --color-text: #382720;

    --color-hover: #F7EBD9;
    --color-active: #F0DEC5;

    --color-border: rgba(56, 39, 32, 0.12);
    --color-border-soft: rgba(56, 39, 32, 0.06);

    --color-white: #FBF7F2;
}`
  }