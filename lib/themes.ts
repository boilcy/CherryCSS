import type { Theme } from "./types"

// Common CSS bug fixes to be applied to all themes
const bugfixCss = `
/* Bug fixes */
.bubble .message-user .message-action-button:hover {
  background-color: var(--color-background-mute);
}
`

export const themes: Theme[] = [
  {
    id: "chang-an",
    name: "长安",
    description: "Light theme inspired by traditional Chinese aesthetics",
    lightPreviewUrl: "/chang-an.png",
    darkPreviewUrl: "/chang-an.png",
    css: `/* 
========================
长安 (Chang'an)
========================
Theme inspired by Tang Dynasty aesthetics and the ancient capital Chang'an,
featuring warm earth tones reminiscent of traditional Chinese architecture, 
calligraphy, and silk paintings
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #2C2420;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #9E2B25;     /* Cinnabar red - commonly used in Tang Dynasty art */
    --color-primary-soft: rgba(158, 43, 37, 0.6);  /* Softer cinnabar */
    --color-primary-mute: rgba(158, 43, 37, 0.2);  /* Subtle cinnabar */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C2420;       /* Rich walnut wood color */
    --color-background-mute: #332A24;  /* Slightly lighter wood tone */
    --color-background-soft: #4A3D34;  /* Medium wood tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 36, 32, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2C2420;      /* Navigation bar background */
    --chat-background: #2C2420;        /* Main chat area background */
    --chat-background-user: #362D26;   /* User message bubble - dark lacquered wood */
    --chat-background-assistant: #3D312A; /* Assistant message - medium lacquered wood */

    /* Text colors */
    --chat-text-user: #F8F7F2;         /* Antiqued parchment color */
    --color-text: #F8F7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #413529;            /* Hover state - subtle highlight */
    --color-active: #524436;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 248, 242, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 248, 242, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #362D26 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #574839; /* Dark bamboo color */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4A3D34; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F2E6D5;       /* Light rice paper color */
    --color-background-mute: #DFCBB3;  /* Slightly darker rice paper */
    --color-background-soft: #E6D5C0;  /* Medium rice paper */

    /* Chat interface colors */
    --navbar-background: #EDE0CC;      /* Ivory tone navbar */
    --chat-background: #F6EBDC;        /* Main chat area - light ivory */
    --chat-background-user: #F2E6D5;   /* User message - rice paper */
    --chat-background-assistant: #E6D5C0; /* Assistant message - subtle tan */

    /* Text colors */
    --color-text: #2C2420;             /* Rich walnut ink color */

    /* Interactive states */
    --color-hover: #EEDDC0;            /* Hover state - subtle highlight */
    --color-active: #E8D0A9;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(44, 36, 32, 0.12);       /* Subtle ink border */
    --color-border-soft: rgba(44, 36, 32, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F6EBDC;            /* Lightest ivory tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F6EBDC !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #CDB9A2; /* Bamboo color */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #D9C7B1; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "xuan-zhi",
    name: "宣纸",
    description: "Light theme inspired by traditional Chinese paper",
    lightPreviewUrl: "/xuan-zhi.png",
    darkPreviewUrl: "/xuan-zhi.png",
    css: `/* 
========================
宣纸 (Xuan-zhi)
========================
Theme inspired by traditional Chinese Xuan paper, renowned for its soft texture,
distinctive warm tones, and lasting quality. Xuan paper has been used for 
calligraphy and painting since the Tang Dynasty, valued for its perfect
balance of ink absorption and durability.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #2C2C2C;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #7C6E58;     /* Ink stone gray-brown - used in traditional calligraphy */
    --color-primary-soft: rgba(124, 110, 88, 0.6);  /* Softer ink tone */
    --color-primary-mute: rgba(124, 110, 88, 0.2);  /* Subtle ink wash */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C2C2C;       /* Deep charcoal - like ink stone */
    --color-background-mute: #333333;  /* Slightly lighter tone */
    --color-background-soft: #515151;  /* Medium tone for contrast */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 44, 44, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2C2C2C;      /* Navigation bar background */
    --chat-background: #2C2C2C;        /* Main chat area background */
    --chat-background-user: #383838;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #404040; /* Assistant message - medium tone */

    /* Text colors */
    --chat-text-user: #F8F8F2;         /* Clear, legible text color */
    --color-text: #F8F8F2;             /* General text color */

    /* Interactive states */
    --color-hover: #454545;            /* Hover state - subtle highlight */
    --color-active: #595959;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 248, 242, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 248, 242, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #383838 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #636363; /* Darker gray */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #515151; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F5F2E9;       /* Natural Xuan paper tone */
    --color-background-mute: #E5DFD1;  /* Slightly darker paper */
    --color-background-soft: #EBE6D9;  /* Medium paper tone */

    /* Chat interface colors */
    --navbar-background: #F2EEE3;      /* Soft cream navbar */
    --chat-background: #F9F6ED;        /* Main chat area - pristine paper */
    --chat-background-user: #F5F2E9;   /* User message - standard paper */
    --chat-background-assistant: #EBE6D9; /* Assistant message - subtle cream */

    /* Text colors */
    --color-text: #3C3A36;             /* Rich ink color on paper */

    /* Interactive states */
    --color-hover: #EEEAE0;            /* Hover state - subtle highlight */
    --color-active: #E2DCC9;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(60, 58, 54, 0.12);       /* Subtle ink border */
    --color-border-soft: rgba(60, 58, 54, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F9F6ED;            /* Lightest paper tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F9F6ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8D2C6; /* Darker paper tone */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E2DCD0; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "yang-pi-zhi",
    name: "羊皮纸",
    description: "Light theme inspired by ancient parchment",
    lightPreviewUrl: "/yang-pi-zhi.png",
    darkPreviewUrl: "/yang-pi-zhi.png",
    css: `/* 
========================
羊皮纸 (Yang-pi-zhi)
========================
Theme inspired by ancient parchment manuscripts, featuring warm amber tones
and rich browns that evoke the texture and appearance of traditional
animal skin parchment used in historical documents
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F7F2;
    --color-black-soft: #32281A;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #A3682C;     /* Rich amber - inspired by ancient ink on parchment */
    --color-primary-soft: rgba(163, 104, 44, 0.6);  /* Softer amber */
    --color-primary-mute: rgba(163, 104, 44, 0.2);  /* Subtle amber */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #32281A;       /* Deep aged parchment brown */
    --color-background-mute: #3D2E1F;  /* Slightly lighter aged brown */
    --color-background-soft: #594633;  /* Medium brown tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(50, 40, 26, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #32281A;      /* Navigation bar background */
    --chat-background: #32281A;        /* Main chat area background */
    --chat-background-user: #403020;   /* User message bubble - warmer brown */
    --chat-background-assistant: #463524; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F8F7F2;         /* Slightly aged paper color for text */
    --color-text: #F8F7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #4A3625;            /* Hover state - subtle highlight */
    --color-active: #5B442F;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 247, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 247, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #403020 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #6C5742; /* Darker brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #594633; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F4E4BE;       /* Light parchment color */
    --color-background-mute: #E2CCA0;  /* Slightly darker parchment */
    --color-background-soft: #E8D5AB;  /* Medium parchment */

    /* Chat interface colors */
    --navbar-background: #F0DEB5;      /* Warm cream navbar */
    --chat-background: #F7EAC9;        /* Main chat area - bright parchment */
    --chat-background-user: #F4E4BE;   /* User message - standard parchment */
    --chat-background-assistant: #E8D5AB; /* Assistant message - slightly darker */

    /* Text colors */
    --color-text: #5F4B32;             /* Rich sepia ink color */

    /* Interactive states */
    --color-hover: #F2E1B8;            /* Hover state - subtle highlight */
    --color-active: #EBDAAC;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(95, 75, 50, 0.15);       /* Subtle ink border */
    --color-border-soft: rgba(95, 75, 50, 0.08);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F7EAC9;            /* Lightest parchment tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F7EAC9 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D8C095; /* Darker parchment */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E0CAA0; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "jin-xiang-yu",
    name: "金镶玉",
    description: "Light theme inspired by gold and jade ornaments",
    lightPreviewUrl: "/jin-xiang-yu.png",
    darkPreviewUrl: "/jin-xiang-yu.png",
    css: `/* 
========================
金镶玉 (Jin-xiang-yu)
========================
Theme inspired by traditional Chinese gold and jade ornaments,
featuring elegant cream tones and rich browns that evoke the luxurious
combination of precious metals and fine jade seen in imperial craftsmanship
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FBF7ED;
    --color-black-soft: #2A2420;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #C6A75C;     /* Antique gold - inspired by traditional gilding */
    --color-primary-soft: rgba(198, 167, 92, 0.6);  /* Softer gold */
    --color-primary-mute: rgba(198, 167, 92, 0.2);  /* Subtle gold highlight */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2A2420;       /* Deep rosewood color */
    --color-background-mute: #2F2925;  /* Slightly lighter wood tone */
    --color-background-soft: #4A423C;  /* Medium wood tone with subtle warmth */

    /* Chat interface colors */
    --navbar-background-mac: rgba(42, 36, 32, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2A2420;      /* Navigation bar background */
    --chat-background: #2A2420;        /* Main chat area background */
    --chat-background-user: #352E29;   /* User message bubble - warm brown */
    --chat-background-assistant: #3D3631; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F8F3E6;         /* Warm cream text color */
    --color-text: #F8F3E6;             /* General text color */

    /* Interactive states */
    --color-hover: #413A33;            /* Hover state - subtle highlight */
    --color-active: #524A42;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(248, 243, 230, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 243, 230, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #352E29 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #574E47; /* Darker brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4A423C; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F8F3E6;       /* Light cream color */
    --color-background-mute: #EEE5CC;  /* Slightly darker cream */
    --color-background-soft: #F3ECD8;  /* Medium cream with subtle warmth */

    /* Chat interface colors */
    --navbar-background: #F6F0E0;      /* Warm ivory navbar */
    --chat-background: #FBF7ED;        /* Main chat area - bright cream */
    --chat-background-user: #F8F3E6;   /* User message - standard cream */
    --chat-background-assistant: #F3ECD8; /* Assistant message - slightly warmer */

    /* Text colors */
    --color-text: #5A4A38;             /* Rich walnut ink color */

    /* Interactive states */
    --color-hover: #F5EFE0;            /* Hover state - subtle highlight */
    --color-active: #EFEAD0;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(90, 74, 56, 0.12);       /* Subtle border */
    --color-border-soft: rgba(90, 74, 56, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FBF7ED;            /* Lightest cream tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FBF7ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D9CEB1; /* Darker cream */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E8DFC8; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "pi-pa",
    name: "琵琶",
    description: "Light theme inspired by bamboo and traditional instruments",
    lightPreviewUrl: "/pi-pa.png",
    darkPreviewUrl: "/pi-pa.png",
    css: `/* 
========================
琵琶 (Pi-pa)
========================
Theme inspired by traditional Chinese musical instruments, particularly the pipa lute,
featuring warm golden-brown tones reminiscent of aged wood and bamboo used in
traditional instruments, with delicate accents suggesting instrument strings and curves
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F2ED;
    --color-black-soft: #2F2816;  /* Dark background color, aligned with new main color */

    /* Primary color (accent color) and variants */
    --color-primary: #615020;     /* Rich golden-brown - like aged bamboo or antique wood */
    --color-primary-soft: rgba(97, 80, 32, 0.6);  /* Softer golden-brown */
    --color-primary-mute: rgba(97, 80, 32, 0.2);  /* Subtle golden-brown */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2F2816;       /* Deep golden-brown background */
    --color-background-mute: #3A321D;  /* Slightly lighter tone */
    --color-background-soft: #4E4328;  /* Medium golden-brown tone */

    /* Chat interface colors */
    --navbar-background-mac: rgba(47, 40, 22, 0.8);  /* Semi-transparent navbar */
    --navbar-background: #2F2816;      /* Navigation bar background */
    --chat-background: #2F2816;        /* Main chat area background */
    --chat-background-user: #403522;   /* User message bubble - warmer brown */
    --chat-background-assistant: #4A3E2B; /* Assistant message - richer brown */

    /* Text colors */
    --chat-text-user: #F5EFDF;         /* Warm cream text color with golden undertone */
    --color-text: #F5EFDF;             /* General text color */

    /* Interactive states */
    --color-hover: #524530;            /* Hover state - subtle highlight */
    --color-active: #615337;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(245, 239, 223, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(245, 239, 223, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #403522 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #5D5030; /* Darker golden-brown */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #4E4328; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F5EDE7;       /* Soft peachy cream */
    --color-background-mute: #E9DCD1;  /* Slightly darker cream */
    --color-background-soft: #EFE4DB;  /* Medium warm cream */

    /* Chat interface colors */
    --navbar-background: #F2E9E2;      /* Warm cream navbar */
    --chat-background: #F8F2ED;        /* Main chat area - bright cream */
    --chat-background-user: #F5EDE7;   /* User message - standard cream */
    --chat-background-assistant: #EFE4DB; /* Assistant message - warmer cream */

    /* Text colors */
    --color-text: #413520;             /* Rich golden-brown text color to match new theme */

    /* Interactive states */
    --color-hover: #F1E7E1;            /* Hover state - subtle highlight */
    --color-active: #E9DDD5;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(65, 53, 32, 0.12);       /* Subtle border */
    --color-border-soft: rgba(65, 53, 32, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F8F2ED;            /* Lightest cream tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F8F2ED !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #D9C4B5; /* Darker cream */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E5D6CA; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "yan-yu",
    name: "烟雨",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/yan-yu.png",
    darkPreviewUrl: "/yan-yu.png",
    css: `/* 
========================
烟雨 (Yan-yu)
========================
Theme inspired by traditional Chinese misty rain landscapes, featuring
soft blue-gray tones that evoke the tranquil beauty of mountains
shrouded in mist and rain, capturing the poetic essence of classical
Chinese landscape painting
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #EFF5F7;
    --color-black-soft: #283339;  /* Deep blue-gray like distant mountains */

    /* Primary color (accent color) and variants */
    --color-primary: #6E99A4;     /* Muted teal - like water viewed through mist */
    --color-primary-soft: rgba(110, 153, 164, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(110, 153, 164, 0.2);  /* Subtle teal mist */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #283339;       /* Deep blue-gray like distant mountains */
    --color-background-mute: #2F3B43;  /* Slightly lighter misty tone */
    --color-background-soft: #465761;  /* Medium blue-gray like hazy clouds */

    /* Chat interface colors */
    --navbar-background-mac: rgba(40, 51, 57, 0.85);  /* Semi-transparent misty navbar */
    --navbar-background: #283339;      /* Navigation bar background */
    --chat-background: #283339;        /* Main chat area background */
    --chat-background-user: #313E47;   /* User message bubble - deep mist */
    --chat-background-assistant: #364550; /* Assistant message - richer blue-gray */

    /* Text colors */
    --chat-text-user: #EFF5F7;         /* Soft white like emerging light */
    --color-text: #EFF5F7;             /* General text color */

    /* Interactive states */
    --color-hover: #394A54;            /* Hover state - subtle highlight */
    --color-active: #455863;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(239, 245, 247, 0.12);     /* Visible but subtle border */
    --color-border-soft: rgba(239, 245, 247, 0.06); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #313E47 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #566873; /* Deeper misty blue */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #465761; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E8F0F2;       /* Soft blue-white like morning mist */
    --color-background-mute: #D1E0E5;  /* Slightly deeper mist */
    --color-background-soft: #DBE7EB;  /* Medium misty blue */

    /* Chat interface colors */
    --navbar-background: #E3EDF0;      /* Soft blue navbar */
    --chat-background: #EDF4F6;        /* Main chat area - like clearing mist */
    --chat-background-user: #E8F0F2;   /* User message - gentle mist */
    --chat-background-assistant: #DBE7EB; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #2D3E45;             /* Deep blue-gray for text */

    /* Interactive states */
    --color-hover: #DEE9ED;            /* Hover state - subtle highlight */
    --color-active: #D4E3E8;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(45, 62, 69, 0.12);       /* Subtle border */
    --color-border-soft: rgba(45, 62, 69, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EDF4F6;            /* Lightest misty blue-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EDF4F6 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B7C8CE; /* Deeper misty blue */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C9D9DE; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "tian-shui",
    name: "天水",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/tian-shui.png",
    darkPreviewUrl: "/tian-shui.png",
    css: `/* 
========================
天水 (Tian-shui)
========================
Theme inspired by Tang Dynasty aquatic aesthetics, featuring the interplay 
between sky and water. The teal-blue tones evoke the serenity of ancient 
Chinese gardens and the glazed pottery that captured the essence of water.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #1D4E5A;  /* Deep teal, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #5AA4AD;     /* Celadon teal - reminiscent of Tang ceramics */
    --color-primary-soft: rgba(90, 164, 173, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(90, 164, 173, 0.2);  /* Subtle teal */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #1D4E5A;       /* Deep teal-blue like night water */
    --color-background-mute: #235864;  /* Slightly lighter teal */
    --color-background-soft: #316F7D;  /* Medium teal-blue */

    /* Chat interface colors */
    --navbar-background-mac: rgba(29, 78, 90, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #1D4E5A;      /* Navigation bar background */
    --chat-background: #1D4E5A;        /* Main chat area background */
    --chat-background-user: #265E6B;   /* User message bubble - mid teal */
    --chat-background-assistant: #2D6875; /* Assistant message - richer teal */

    /* Text colors */
    --chat-text-user: #E8F1F2;         /* Soft white with slight blue tint */
    --color-text: #E8F1F2;             /* General text color */

    /* Interactive states */
    --color-hover: #2E687A;            /* Hover state - subtle highlight */
    --color-active: #367889;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(232, 241, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(232, 241, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #265E6B !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #387D8C; /* Deeper teal */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #316F7D; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E4F1F2;       /* Soft teal-white like shallow water */
    --color-background-mute: #D0E4E6;  /* Slightly deeper teal */
    --color-background-soft: #DBE9EB;  /* Medium light teal */

    /* Chat interface colors */
    --navbar-background: #DFF2F4;      /* Soft teal navbar */
    --chat-background: #EAF5F6;        /* Main chat area - bright teal-white */
    --chat-background-user: #E4F1F2;   /* User message - standard teal-white */
    --chat-background-assistant: #D8EAEC; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #1D4E5A;             /* Deep teal text color */

    /* Interactive states */
    --color-hover: #D5EAEC;            /* Hover state - subtle highlight */
    --color-active: #C9E3E5;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(29, 78, 90, 0.12);       /* Subtle border */
    --color-border-soft: rgba(29, 78, 90, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EAF5F6;            /* Lightest teal-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EAF5F6 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B4D4D7; /* Darker teal */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C6E0E2; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "shan-shui",
    name: "山水",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/shan-shui.png",
    darkPreviewUrl: "/shan-shui.png",
    css: `/* 
========================
山水 (Shan-shui)
========================
Theme inspired by Tang Dynasty landscape paintings, featuring deep teal and ink tones
that evoke the majesty of mountains and waters in traditional Chinese art.
The colors reflect the timeless elegance of brush and ink capturing nature's essence.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F2F5F6;
    --color-black-soft: #1A3038;  /* Dark background color, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #2F545D;     /* Deep teal - like ink wash of distant mountains */
    --color-primary-soft: rgba(47, 84, 93, 0.6);  /* Softer teal */
    --color-primary-mute: rgba(47, 84, 93, 0.2);  /* Subtle teal */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #1A3038;       /* Deep teal-black like night mountains */
    --color-background-mute: #223940;  /* Slightly lighter dark teal */
    --color-background-soft: #2A454D;  /* Medium dark teal */

    /* Chat interface colors */
    --navbar-background-mac: rgba(26, 48, 56, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #1A3038;      /* Navigation bar background */
    --chat-background: #1A3038;        /* Main chat area background */
    --chat-background-user: #243942;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #2C4A52; /* Assistant message - medium teal */

    /* Text colors */
    --chat-text-user: #E6EDEF;         /* Soft white with slight blue tint */
    --color-text: #E6EDEF;             /* General text color */

    /* Interactive states */
    --color-hover: #2D4B53;            /* Hover state - subtle highlight */
    --color-active: #355960;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(230, 237, 239, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(230, 237, 239, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #243942 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #345A63; /* Darker teal */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #2A454D; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E6EDEF;       /* Soft blue-white like mountain mist */
    --color-background-mute: #D5E0E3;  /* Slightly deeper blue-white */
    --color-background-soft: #DCE6E9;  /* Medium light blue-white */

    /* Chat interface colors */
    --navbar-background: #E0EAED;      /* Soft teal navbar */
    --chat-background: #ECF2F4;        /* Main chat area - bright teal-white */
    --chat-background-user: #E6EDEF;   /* User message - standard teal-white */
    --chat-background-assistant: #DCE6E9; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #2F545D;             /* Deep teal text color */

    /* Interactive states */
    --color-hover: #DEE8EB;            /* Hover state - subtle highlight */
    --color-active: #D3E0E4;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(47, 84, 93, 0.12);       /* Subtle border */
    --color-border-soft: rgba(47, 84, 93, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #ECF2F4;            /* Lightest blue-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #ECF2F4 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #BED0D5; /* Darker blue-white */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #CEDBE0; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "yu-shi",
    name: "玉石",
    description: "Light theme inspired by jade and traditional ornaments",
    lightPreviewUrl: "/yu-shi.png",
    darkPreviewUrl: "/yu-shi.png",
    css: `/* 
========================
玉石 (Yu-shi)
========================
Theme inspired by classical Chinese jade artifacts, featuring rich
emerald and celadon greens that capture the distinctive color and
translucent quality of fine jade. The aesthetic reflects the intricate
carvings and smooth polished surfaces of traditional jade ornaments.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F8F2;
    --color-black-soft: #163229;  /* Deep jade green, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #388E70;     /* Vibrant jade green - inspired by high-quality specimens */
    --color-primary-soft: rgba(56, 142, 112, 0.6);  /* Softer jade green */
    --color-primary-mute: rgba(56, 142, 112, 0.2);  /* Subtle jade green */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #163229;       /* Deep forest jade green */
    --color-background-mute: #1E3E33;  /* Slightly lighter green */
    --color-background-soft: #2A5245;  /* Medium dark green */

    /* Chat interface colors */
    --navbar-background-mac: rgba(22, 50, 41, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #163229;      /* Navigation bar background */
    --chat-background: #163229;        /* Main chat area background */
    --chat-background-user: #1F3F35;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #26493D; /* Assistant message - medium green */

    /* Text colors */
    --chat-text-user: #E8F2EE;         /* Soft white with slight green tint */
    --color-text: #E8F2EE;             /* General text color */

    /* Interactive states */
    --color-hover: #2E5A4B;            /* Hover state - subtle highlight */
    --color-active: #356B59;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(232, 242, 238, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(232, 242, 238, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #1F3F35 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #347764; /* Richer jade green */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #2A5245; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #E8F4EE;       /* Soft mint green like pale jade */
    --color-background-mute: #D5EAE0;  /* Slightly deeper mint */
    --color-background-soft: #DCEEE5;  /* Medium light green */

    /* Chat interface colors */
    --navbar-background: #E0F2E8;      /* Soft green navbar */
    --chat-background: #EEF8F3;        /* Main chat area - bright mint */
    --chat-background-user: #E8F4EE;   /* User message - standard mint */
    --chat-background-assistant: #DCEEE5; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #1D4A3C;             /* Deep jade green text color */

    /* Interactive states */
    --color-hover: #DDEFE5;            /* Hover state - subtle highlight */
    --color-active: #D0E8DC;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(29, 74, 60, 0.12);       /* Subtle border */
    --color-border-soft: rgba(29, 74, 60, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #EEF8F3;            /* Lightest mint green */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #EEF8F3 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #B6D9C8; /* Deeper celadon green */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #C7E5D6; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "zi-tao",
    name: "紫陶",
    description: "Light theme inspired by purple and traditional pottery",
    lightPreviewUrl: "/zi-tao.png",
    darkPreviewUrl: "/zi-tao.png",
    css: `/* 
========================
紫陶 (Zi-tao)
========================
Theme inspired by traditional Chinese purple clay pottery (紫砂壶),
featuring deep aubergine and warm violet tones reminiscent of the
prized Yixing clay teapots and vessels. The colors and textures
evoke the earthy richness and subtle luster of hand-crafted pottery.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F8F5FA;
    --color-black-soft: #3A2A3D;  /* Deep aubergine, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #8C5D91;     /* Rich purple clay - inspired by fine Yixing pottery */
    --color-primary-soft: rgba(140, 93, 145, 0.6);  /* Softer purple */
    --color-primary-mute: rgba(140, 93, 145, 0.2);  /* Subtle purple */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #3A2A3D;       /* Deep aubergine like fired purple clay */
    --color-background-mute: #46344A;  /* Slightly lighter dark purple */
    --color-background-soft: #5B445F;  /* Medium dark purple */

    /* Chat interface colors */
    --navbar-background-mac: rgba(58, 42, 61, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #3A2A3D;      /* Navigation bar background */
    --chat-background: #3A2A3D;        /* Main chat area background */
    --chat-background-user: #4D374F;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #55405A; /* Assistant message - medium purple */

    /* Text colors */
    --chat-text-user: #F0E7F2;         /* Soft white with slight lavender tint */
    --color-text: #F0E7F2;             /* General text color */

    /* Interactive states */
    --color-hover: #634768;            /* Hover state - subtle highlight */
    --color-active: #725379;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(240, 231, 242, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(240, 231, 242, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #4D374F !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #6E5173; /* Richer purple */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #5B445F; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F4EEF5;       /* Soft lavender like pale clay */
    --color-background-mute: #DBCBDE;  /* Slightly deeper lavender */
    --color-background-soft: #E8DCEA;  /* Medium light lavender */

    /* Chat interface colors */
    --navbar-background: #EFE5F0;      /* Soft purple navbar */
    --chat-background: #F9F6FA;        /* Main chat area - bright lavender-white */
    --chat-background-user: #F4EEF5;   /* User message - standard lavender */
    --chat-background-assistant: #E8DCEA; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #442A47;             /* Deep aubergine text color */

    /* Interactive states */
    --color-hover: #EEE4F0;            /* Hover state - subtle highlight */
    --color-active: #E5D9E8;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(68, 42, 71, 0.12);       /* Subtle border */
    --color-border-soft: rgba(68, 42, 71, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #F9F6FA;            /* Lightest lavender-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #F9F6FA !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #C2B0C6; /* Deeper lavender */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #D5C6D8; /* Between ant-collapse and background-soft */
}`
  },
  {
    id: "qing-wu",
    name: "青雾",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-wu.png",
    darkPreviewUrl: "/qing-wu.png",
    css: `/* 
========================
青雾 (Qing-wu)
========================
Theme inspired by the ethereal blue mist that shrouds Tang Dynasty
landscape paintings. The cyan-blue tones and transparent effects
evoke the delicate veil of morning fog over mountains and waters,
capturing the poetic atmosphere of classical Chinese nature scenes.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #F4F8F8;
    --color-black-soft: #29424A;  /* Deep cyan-blue, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #4C8C99;     /* Soft cyan-blue - like mist over water */
    --color-primary-soft: rgba(76, 140, 153, 0.6);  /* Softer cyan */
    --color-primary-mute: rgba(76, 140, 153, 0.2);  /* Subtle cyan */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: rgba(41, 66, 74, 0.95);       /* Semi-transparent deep cyan-blue */
    --color-background-mute: rgba(50, 75, 82, 0.95);  /* Slightly lighter cyan-blue */
    --color-background-soft: rgba(61, 90, 99, 0.95);  /* Medium cyan-blue */

    /* Chat interface colors */
    --navbar-background-mac: rgba(41, 66, 74, 0.75);  /* More transparent navbar */
    --navbar-background: rgba(41, 66, 74, 0.9);      /* Semi-transparent navigation bar */
    --chat-background: rgba(41, 66, 74, 0.95);        /* Semi-transparent chat area */
    --chat-background-user: rgba(52, 80, 86, 0.85);   /* More transparent user messages */
    --chat-background-assistant: rgba(60, 90, 100, 0.85); /* More transparent assistant messages */

    /* Text colors */
    --chat-text-user: rgba(230, 240, 242, 0.95);      /* Slightly transparent text */
    --color-text: rgba(230, 240, 242, 0.95);          /* Slightly transparent text */

    /* Interactive states */
    --color-hover: rgba(62, 97, 107, 0.7);            /* Transparent hover state */
    --color-active: rgba(74, 113, 124, 0.8);          /* Transparent active state */

    /* Border colors */
    --color-border: rgba(230, 240, 242, 0.15);        /* Visible but subtle border */
    --color-border-soft: rgba(230, 240, 242, 0.08);   /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: rgba(52, 80, 86, 0.9) !important; /* More transparent background */
    backdrop-filter: blur(10px) !important;             /* Frosted glass effect */
    -webkit-backdrop-filter: blur(10px) !important;     /* For Safari */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: rgba(71, 119, 133, 0.8); /* More transparent deeper cyan-blue */
    backdrop-filter: blur(5px);                /* Light frosted effect */
    -webkit-backdrop-filter: blur(5px);
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: rgba(61, 90, 99, 0.85); /* More transparent medium blue */
    backdrop-filter: blur(3px);               /* Light frosted effect */
    -webkit-backdrop-filter: blur(3px);
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: rgba(230, 240, 242, 0.9);      /* Semi-transparent cyan-white */
    --color-background-mute: rgba(214, 230, 233, 0.9); /* Slightly deeper transparent cyan */
    --color-background-soft: rgba(222, 234, 237, 0.9); /* Medium light transparent blue */

    /* Chat interface colors */
    --navbar-background: rgba(224, 236, 240, 0.85);    /* Semi-transparent navbar */
    --chat-background: rgba(237, 245, 247, 0.85);      /* Semi-transparent chat area */
    --chat-background-user: rgba(230, 240, 242, 0.8);  /* More transparent user messages */
    --chat-background-assistant: rgba(222, 234, 237, 0.8); /* More transparent assistant messages */

    /* Text colors */
    --color-text: rgba(41, 66, 74, 0.9);               /* Slightly transparent text */

    /* Interactive states */
    --color-hover: rgba(219, 235, 239, 0.7);           /* Transparent hover state */
    --color-active: rgba(208, 227, 231, 0.8);          /* Transparent active state */

    /* Border colors */
    --color-border: rgba(41, 66, 74, 0.12);            /* Subtle border */
    --color-border-soft: rgba(41, 66, 74, 0.06);       /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: rgba(237, 245, 247, 0.9);           /* Semi-transparent lightest cyan-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: rgba(237, 245, 247, 0.85) !important; /* More transparent background */
    backdrop-filter: blur(8px) !important;                  /* Frosted glass effect */
    -webkit-backdrop-filter: blur(8px) !important;          /* For Safari */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: rgba(184, 209, 215, 0.8); /* More transparent deeper cyan-white */
    backdrop-filter: blur(4px);                 /* Light frosted effect */
    -webkit-backdrop-filter: blur(4px);
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: rgba(205, 222, 226, 0.8); /* More transparent medium blue */
    backdrop-filter: blur(3px);                 /* Light frosted effect */
    -webkit-backdrop-filter: blur(3px);
}`,
  },
  {
    id: "su-xuan",
    name: "素宣",
    description: "Light theme inspired by white and traditional paper",
    lightPreviewUrl: "/su-xuan.png",
    darkPreviewUrl: "/su-xuan.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1F2428;
  --color-background-soft: #353B41;
  --color-background-mute: #242A2E;
  --navbar-background: #1F2428;
  --chat-background: #1F2428;
  --chat-background-user: #272D32;
  --chat-background-assistant: #2A3035;
  --chat-text-user: rgba(230, 240, 242, 0.95);
}
body[theme-mode="dark"] #content-container {
  background-color: #272D32 !important;
}
:root {
  --color-black-soft: #1F2428;
}
body[theme-mode="light"] {
  --color-background: #FCF9F5;
  --color-background-soft: #F5EFE8;
  --color-background-mute: #F0E9E1;
  --navbar-background: #F8F4EE;
  --chat-background: #FFFAF5;
  --chat-background-user: #FCF9F5;
  --chat-background-assistant: #F5EFE8;
  --color-white: #FFFAF5;
}
body[theme-mode="light"] #content-container {
  background-color: #FFFAF5 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #E8DFD2;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #EFE7DD;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #414950;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #353B41;
}`,
  },
  {
    id: "yan-zhi",
    name: "胭脂",
    description: "Light theme inspired by red and traditional pottery",
    lightPreviewUrl: "/yan-zhi.png",
    darkPreviewUrl: "/yan-zhi.png",
    css: `/* 
========================
胭脂 (Yan-zhi)
========================
Theme inspired by traditional Chinese rouge (胭脂), featuring the 
elegant red hues used in classical cosmetics and paintings. The colors
reflect the subtle gradations of rouge made from safflower and other
natural pigments prized during the Tang Dynasty.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FFF8F8;
    --color-black-soft: #3D2A2E;  /* Deep rouge, visible in some UI elements */

    /* Primary color (accent color) and variants */
    --color-primary: #E4707C;     /* Classic rouge red - inspired by traditional safflower dye */
    --color-primary-soft: rgba(228, 112, 124, 0.6);  /* Softer rouge */
    --color-primary-mute: rgba(228, 112, 124, 0.2);  /* Subtle rouge */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #3D2A2E;       /* Deep rouge like aged rouge powder */
    --color-background-mute: #463236;  /* Slightly lighter rouge */
    --color-background-soft: #543E42;  /* Medium dark rouge */

    /* Chat interface colors */
    --navbar-background-mac: rgba(61, 42, 46, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #3D2A2E;      /* Navigation bar background */
    --chat-background: #3D2A2E;        /* Main chat area background */
    --chat-background-user: #4A3438;   /* User message bubble - slightly lighter */
    --chat-background-assistant: #513B3F; /* Assistant message - medium rouge */

    /* Text colors */
    --chat-text-user: #FFE6E8;         /* Soft white with slight pink tint */
    --color-text: #FFE6E8;             /* General text color */

    /* Interactive states */
    --color-hover: #5C454A;            /* Hover state - subtle highlight */
    --color-active: #694E53;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(255, 230, 232, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(255, 230, 232, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #4A3438 !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #614A4E; /* Deeper rouge */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #543E42; /* Matches background-soft */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #FFF0F2;       /* Soft pink like fresh rouge powder */
    --color-background-mute: #FFE6E8;  /* Slightly deeper pink */
    --color-background-soft: #FFEAEC;  /* Medium light pink */

    /* Chat interface colors */
    --navbar-background: #FFF2F4;      /* Soft pink navbar */
    --chat-background: #FFF6F8;        /* Main chat area - bright pink-white */
    --chat-background-user: #FFF0F2;   /* User message - standard pink */
    --chat-background-assistant: #FFEAEC; /* Assistant message - slightly deeper */

    /* Text colors */
    --color-text: #8C4851;             /* Deep rouge text color */

    /* Interactive states */
    --color-hover: #FFE8EA;            /* Hover state - subtle highlight */
    --color-active: #FFDEE2;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(140, 72, 81, 0.12);       /* Subtle border */
    --color-border-soft: rgba(140, 72, 81, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FFF6F8;            /* Lightest pink-white */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FFF6F8 !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #FFD6DA; /* Deeper pink */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #FFE0E4; /* Between ant-collapse and background-soft */
}`,
  },
  {
    id: "yan-hui",
    name: "雁灰",
    description: "Light theme inspired by gray and traditional pottery",
    lightPreviewUrl: "/yan-hui.png",
    darkPreviewUrl: "/yan-hui.png",
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
}`},
  {
    id: "yao-huo",
    name: "窑火",
    description: "Light theme inspired by brown and traditional pottery",
    lightPreviewUrl: "/yao-huo.png",
    darkPreviewUrl: "/yao-huo.png",
    css: `/* 
========================
窑火 (Yao-huo)
========================
Theme inspired by the rich colors of traditional Chinese kilns,
featuring the warm browns and amber tones created by wood-firing.
The palette captures both the intense heat of the kiln fire and
the resulting earthen glazes of Tang Dynasty ceramics.
*/

/* Root variables (global across light/dark modes) */
:root {
    --color-white-soft: #FAF0DD;
    --color-black-soft: #2C1810;  /* Deep ember brown */

    /* Primary color (accent color) and variants */
    --color-primary: #C85F3C;     /* Kiln fire red-orange */
    --color-primary-soft: rgba(200, 95, 60, 0.6);  /* Softer ember */
    --color-primary-mute: rgba(200, 95, 60, 0.2);  /* Subtle ember */
}

/* ===== DARK MODE VARIABLES ===== */
body[theme-mode="dark"] {
    /* Main background colors - from darkest to lightest */
    --color-background: #2C1810;       /* Deep ember brown like kiln shadows */
    --color-background-mute: #443026;  /* Slightly lighter ember */
    --color-background-soft: #6B4636;  /* Medium fired clay */

    /* Chat interface colors */
    --navbar-background-mac: rgba(44, 24, 16, 0.85);  /* Semi-transparent navbar */
    --navbar-background: #2C1810;      /* Navigation bar background */
    --chat-background: #2C1810;        /* Main chat area background */
    --chat-background-user: #5C392C;   /* User message bubble - warm ember */
    --chat-background-assistant: #443026; /* Assistant message - rich clay */

    /* Text colors */
    --chat-text-user: #F8E3C4;         /* Warm light like kiln glow */
    --color-text: #F8E3C4;             /* General text color */

    /* Interactive states */
    --color-hover: #6D4234;            /* Hover state - glowing ember */
    --color-active: #7D4C3D;           /* Active/selected state - hot ember */

    /* Border colors */
    --color-border: rgba(248, 227, 196, 0.15);     /* Visible but subtle border */
    --color-border-soft: rgba(248, 227, 196, 0.08); /* Very subtle border */
}

/* Content container background - important! */
body[theme-mode="dark"] #content-container {
    background-color: #5C392C !important; /* Matches chat-background-user */
}

/* Collapsible components styling */
body[theme-mode="dark"] .ant-collapse {
    background-color: #664A3A; /* Rich fired clay */
}

body[theme-mode="dark"] .ant-collapse-content {
    background-color: #553C30; /* Deep clay tone */
}

/* ===== LIGHT MODE VARIABLES ===== */
body[theme-mode="light"] {
    /* Main background colors - from lightest to medium */
    --color-background: #F8E3C4;       /* Light clay color */
    --color-background-mute: #D4B176;  /* Slightly darker clay */
    --color-background-soft: #E6C89B;  /* Medium clay tone */

    /* Chat interface colors */
    --navbar-background: #F1D6AE;      /* Warm clay navbar */
    --chat-background: #FAF0DD;        /* Main chat area - bright clay */
    --chat-background-user: #E6C89B;   /* User message - standard clay */
    --chat-background-assistant: #F1D6AE; /* Assistant message - warm clay */

    /* Text colors */
    --color-text: #2C1810;             /* Deep ember text color */

    /* Interactive states */
    --color-hover: #F3DDB8;            /* Hover state - warm highlight */
    --color-active: #EBCD9E;           /* Active/selected state */

    /* Border colors */
    --color-border: rgba(44, 24, 16, 0.12);       /* Subtle border */
    --color-border-soft: rgba(44, 24, 16, 0.06);  /* Very subtle border */

    /* White variable (often used for backgrounds) */
    --color-white: #FAF0DD;            /* Lightest clay tone */
}

/* Content container background - important! */
body[theme-mode="light"] #content-container {
    background-color: #FAF0DD !important; /* Matches chat-background */
}

/* Collapsible components styling */
body[theme-mode="light"] .ant-collapse {
    background-color: #DEB57E; /* Deeper clay */
}

body[theme-mode="light"] .ant-collapse-content {
    background-color: #E8C696; /* Rich clay tone */
}`,
  },
  {
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
  },
  {
    id: "qing-ci",
    name: "青瓷",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-ci.png",
    darkPreviewUrl: "/qing-ci.png",
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
}`
  },
  {
    id: "liu-yun",
    name: "流云",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/liu-yun.png",
    darkPreviewUrl: "/liu-yun.png",
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
}`
  },
  {
    id: "ru-yao-lan",
    name: "汝窑蓝",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/ru-yao-lan.png",
    darkPreviewUrl: "/ru-yao-lan.png",
    css: `/* 
========================
汝窑蓝 (Ru-yao-lan)
========================
Theme inspired by the legendary Ru kiln ceramics of the Song Dynasty,
featuring their distinctive sky-blue glaze. The colors capture the
subtle variations in this most precious of Chinese ceramic glazes.
*/

/* Root variables */
:root {
    --color-white-soft: #E8F0F2;
    --color-black-soft: #1A2C3D;  /* Deep Ru glaze blue */

    /* Primary color (accent color) and variants */
    --color-primary: #4A7B96;     /* Classic Ru glaze blue */
    --color-primary-soft: rgba(74, 123, 150, 0.6);
    --color-primary-mute: rgba(74, 123, 150, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #1A2C3D;       /* Deep Ru blue */
    --color-background-mute: #2D5475;  /* Rich glaze blue */
    --color-background-soft: #355D80;  /* Medium glaze blue */

    --navbar-background-mac: rgba(26, 44, 61, 0.85);
    --navbar-background: #1A2C3D;
    --chat-background: #1A2C3D;
    --chat-background-user: #234863;
    --chat-background-assistant: #2D5475;

    --chat-text-user: #E6EEF2;
    --color-text: #E6EEF2;

    --color-hover: #3E678B;
    --color-active: #487AA3;

    --color-border: rgba(230, 238, 242, 0.15);
    --color-border-soft: rgba(230, 238, 242, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #4A7B96;     /* Classic Ru glaze blue */
    --color-primary-soft: rgba(74, 123, 150, 0.6);
    --color-primary-mute: rgba(74, 123, 150, 0.2);

    --color-background: #E8F0F2;       /* Sky blue white */
    --color-background-mute: #A5C6CC;  /* Soft glaze blue */
    --color-background-soft: #BED3D7;  /* Medium light blue */

    --navbar-background: #D9E6E9;
    --chat-background: #F2F7F8;
    --chat-background-user: #BED3D7;
    --chat-background-assistant: #D9E6E9;

    --color-text: #1A2C3D;

    --color-hover: #DDE8EB;
    --color-active: #D2E1E5;

    --color-border: rgba(26, 44, 61, 0.12);
    --color-border-soft: rgba(26, 44, 61, 0.06);

    --color-white: #F2F7F8;
}`
  },
  {
    id: "ru-yao-lv",
    name: "汝窑绿",
    description: "Light theme inspired by green and traditional pottery",
    lightPreviewUrl: "/ru-yao-lv.png",
    darkPreviewUrl: "/ru-yao-lv.png",
    css: `/* 
========================
汝窑绿 (Ru-yao-lv)
========================
Theme inspired by the green variations of Ru kiln glazes, featuring
the subtle jade-like green tones achieved in Song Dynasty ceramics.
The colors reflect the precious emerald-tinted glazes that were
highly prized by the imperial court.
*/

/* Root variables */
:root {
    --color-white-soft: #F2F7F6;
    --color-black-soft: #1A3937;  /* Deep Ru green */

    /* Primary color (accent color) and variants */
    --color-primary: #388E70;     /* Classic Ru glaze green */
    --color-primary-soft: rgba(56, 142, 112, 0.6);
    --color-primary-mute: rgba(56, 142, 112, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #1A3937;       /* Deep Ru green */
    --color-background-mute: #315F5C;  /* Rich glaze green */
    --color-background-soft: #3A706C;  /* Medium glaze green */

    --navbar-background-mac: rgba(26, 57, 55, 0.85);
    --navbar-background: #1A3937;
    --chat-background: #1A3937;
    --chat-background-user: #264D4A;
    --chat-background-assistant: #315F5C;

    --chat-text-user: #E6F0EF;
    --color-text: #E6F0EF;

    --color-hover: #3E7874;
    --color-active: #488E89;

    --color-border: rgba(230, 240, 239, 0.15);
    --color-border-soft: rgba(230, 240, 239, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    --color-background: #E8F0F0;       /* Pale Ru green */
    --color-background-mute: #B5D5D3;  /* Soft glaze green */
    --color-background-soft: #CEE3E2;  /* Medium light green */

    --navbar-background: #DCE8E7;
    --chat-background: #F0F6F6;
    --chat-background-user: #CEE3E2;
    --chat-background-assistant: #DCE8E7;

    --color-text: #1A3937;

    --color-hover: #DDE8E7;
    --color-active: #D2E2E1;

    --color-border: rgba(26, 57, 55, 0.12);
    --color-border-soft: rgba(26, 57, 55, 0.06);

    --color-white: #F0F6F6;
}`
  },
  {
    id: "han-bai-yu",
    name: "汉白玉",
    description: "Light theme inspired by white and traditional pottery",
    lightPreviewUrl: "/han-bai-yu.png",
    darkPreviewUrl: "/han-bai-yu.png",
    css: `/* 
========================
汉白玉 (Han-bai-yu)
========================
Theme inspired by the pristine white marble used in classical Chinese
architecture. The colors capture the subtle variations in white jade,
from pure snow-white to warm cream tones, reflecting the material's
natural elegance and cultural significance.
*/

/* Root variables */
:root {
    --color-white-soft: #F7F6F2;
    --color-black-soft: #2B2926;  /* Deep stone grey */

    /* Primary color (accent color) and variants */
    --color-primary: #9A958E;     /* Refined marble grey */
    --color-primary-soft: rgba(154, 149, 142, 0.6);
    --color-primary-mute: rgba(154, 149, 142, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #2B2926;       /* Deep stone */
    --color-background-mute: #2B2926;  /* Rich stone */
    --color-background-soft: #4A4845;  /* Medium stone */

    --navbar-background-mac: rgba(43, 41, 38, 0.85);
    --navbar-background: #2B2926;
    --chat-background: #2B2926;
    --chat-background-user: #3D3A36;
    --chat-background-assistant: #353331;

    --chat-text-user: #F7F6F2;
    --color-text: #F7F6F2;

    --color-hover: #454340;
    --color-active: #524F4B;

    --color-border: rgba(247, 246, 242, 0.15);
    --color-border-soft: rgba(247, 246, 242, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #9A958E;     /* Refined marble grey */
    --color-primary-soft: rgba(154, 149, 142, 0.6);
    --color-primary-mute: rgba(154, 149, 142, 0.2);

    --color-background: #F7F6F2;       /* Pure white jade */
    --color-background-mute: #EAE8E3;  /* Soft white jade */
    --color-background-soft: #F2F0EB;  /* Medium white jade */

    --navbar-background: #F5F3EF;
    --chat-background: #FFFFFF;
    --chat-background-user: #F7F6F2;
    --chat-background-assistant: #F2F0EB;

    --color-text: #2B2926;

    --color-hover: #F5F3EF;
    --color-active: #EFEDE9;

    --color-border: rgba(43, 41, 38, 0.12);
    --color-border-soft: rgba(43, 41, 38, 0.06);

    --color-white: #FFFFFF;
}`
  },
  {
    id: "mo-nai",
    name: "莫奈",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/mo-nai.png",
    darkPreviewUrl: "/mo-nai.png",
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
}`
  },
  {
    id: "hu-guang",
    name: "湖光",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/hu-guang.png",
    darkPreviewUrl: "/hu-guang.png",
    css: `/* 
========================
湖光 (Hu-guang)
========================
Theme inspired by the shimmering light on lake surfaces,
featuring crystalline blue-green tones that capture the
interplay of sunlight and water. The colors evoke the
tranquil beauty of traditional Chinese lake gardens.
*/

/* Root variables */
:root {
    --color-white-soft: #F0F7F8;
    --color-black-soft: #2A5254;  /* Deep lake blue-green */

    /* Primary color (accent color) and variants */
    --color-primary: #3C707A;     /* Lake surface blue-green */
    --color-primary-soft: rgba(60, 112, 122, 0.6);
    --color-primary-mute: rgba(60, 112, 122, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #2A5254;       /* Deep lake color */
    --color-background-mute: #2F616B;  /* Rich lake blue */
    --color-background-soft: #3E7A83;  /* Medium lake blue */

    --navbar-background-mac: rgba(42, 82, 84, 0.85);
    --navbar-background: #2A5254;
    --chat-background: #2A5254;
    --chat-background-user: #3C707A;
    --chat-background-assistant: #1D4247;

    --chat-text-user: #E6F3F4;
    --color-text: #E6F3F4;

    --color-hover: #3E7A83;
    --color-active: #4B8E98;

    --color-border: rgba(230, 243, 244, 0.15);
    --color-border-soft: rgba(230, 243, 244, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    /* Primary color (accent color) and variants */
    --color-primary: #3C707A;     /* Lake surface blue-green */
    --color-primary-soft: rgba(60, 112, 122, 0.6);
    --color-primary-mute: rgba(60, 112, 122, 0.2);

    --color-background: #E6F3F4;       /* Soft lake blue */
    --color-background-mute: #C2E3E4;  /* Light lake blue */
    --color-background-soft: #D4EBEC;  /* Medium light blue */

    --navbar-background: #DAF0F1;
    --chat-background: #F0F7F8;
    --chat-background-user: #E6F3F4;
    --chat-background-assistant: #D4EBEC;

    --color-text: #2A5254;

    --color-hover: #EAF5F6;
    --color-active: #DFF0F1;

    --color-border: rgba(42, 82, 84, 0.12);
    --color-border-soft: rgba(42, 82, 84, 0.06);

    --color-white: #F0F7F8;
}`
  },
  {
    id: "chun-mei",
    name: "春梅",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/chun-mei.png",
    darkPreviewUrl: "/chun-mei.png",
    css: `/* 
========================
春梅 (Chun-mei)
========================
Theme inspired by plum blossoms in early spring, featuring
delicate pink tones that capture the first blooms against
winter snow. The colors reflect both the subtle and vibrant
hues of plum blossoms, a symbol of resilience in Chinese art.
*/

/* Root variables */
:root {
    --color-white-soft: #FFF8F8;
    --color-black-soft: #8C4356;  /* Deep plum red */

    /* Primary color (accent color) and variants */
    --color-primary: #E4707C;     /* Plum blossom pink */
    --color-primary-soft: rgba(228, 112, 124, 0.6);
    --color-primary-mute: rgba(228, 112, 124, 0.2);
}

/* Dark mode */
body[theme-mode="dark"] {
    --color-background: #8C4356;       /* Deep plum */
    --color-background-mute: #94505F;  /* Rich plum */
    --color-background-soft: #B4657A;  /* Medium plum */

    --navbar-background-mac: rgba(140, 67, 86, 0.85);
    --navbar-background: #8C4356;
    --chat-background: #8C4356;
    --chat-background-user: #A25768;
    --chat-background-assistant: #763848;

    --chat-text-user: #FFE6EC;
    --color-text: #FFE6EC;

    --color-hover: #B4657A;
    --color-active: #C67688;

    --color-border: rgba(255, 230, 236, 0.15);
    --color-border-soft: rgba(255, 230, 236, 0.08);
}

/* Light mode */
body[theme-mode="light"] {
    --color-background: #FFEEF2;       /* Soft plum white */
    --color-background-mute: #FFDEE6;  /* Light plum */
    --color-background-soft: #FFE6EC;  /* Medium light plum */

    --navbar-background: #FFF1F5;
    --chat-background: #FFF6F9;
    --chat-background-user: #FFEEF2;
    --chat-background-assistant: #FFE6EC;

    --color-text: #8C4356;

    --color-hover: #FFE8EA;
    --color-active: #FFDEE2;

    --color-border: rgba(140, 67, 86, 0.12);
    --color-border-soft: rgba(140, 67, 86, 0.06);

    --color-white: #FFF6F9;
}`
  },
  {
    id: "dan-xia",
    name: "丹霞",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/dan-xia.png",
    darkPreviewUrl: "/dan-xia.png",
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
}`
  },
  {
    id: "chan-zong",
    name: "禅棕",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/chan-zong.png",
    darkPreviewUrl: "/chan-zong.png",
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
}`
  },
  {
    id: "qing-hua",
    name: "青花",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-hua.png",
    darkPreviewUrl: "/qing-hua.png",
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
}`
  },
  {
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
  },
  {
    id: "gladiia",
    name: "歌蕾蒂娅-返航",
    description: "歌蕾蒂娅-返航 主题",
    lightPreviewUrl: "/gladiia.png",
    darkPreviewUrl: "/gladiia.png",
    css: `/*** 歌蕾蒂娅-返航 ***/
:root {
  --chat-background-white: #fff;
  --color-border: rgba(120,120,120,0.08) !important;
}

.message-content-container {
  background: var(--chat-background-white) !important;
  box-shadow: 0 4px 16px -8px rgba(0,0,0,0.04) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: 18px !important;
  margin: 8px 0 !important;
  padding: 10px 10px 0 10px !important;
  transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
}

.message-user .message-content-container {
  background: #fbfcfc !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.03) !important;
}

#inputbar {
  margin: -15px 10px 15px 0px;
  background: rgba(255,255,255,0.96) !important;
  border: 1px solid var(--color-border) !important;
  border-radius: 20px !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.03) !important;
  backdrop-filter: blur(8px) !important;
}

* {
  font-family: 'MiSans Normal', system-ui !important;
  line-height: 1.7 !important;
  letter-spacing: 0.018em !important;
}

body[theme-mode='light'] {
  --color-primary: #df3649;
  --color-primary-soft: #b5242b;
  --color-primary-mute: #6b171b;
}

body[theme-mode='dark'] {
  --color-primary: #df3649;
  --color-primary-soft: #b5242b;
  --color-primary-mute: #6b171b;
  --color-border: rgba(255,255,255,0.1);
  --chat-background-white: #212225;
  --chat-text-user: #EDEEF0;
  --color-text: #EDEEF0;
}

body[theme-mode='dark'] .message-content-container {
  background: var(--chat-background-white) !important;
  box-shadow: 0 4px 16px -8px rgba(0,0,0,0.4) !important;
  border: 1px solid var(--color-border) !important;
}

body[theme-mode='dark'] .message-user .message-content-container {
  background: #2a2a2a !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.3) !important;
  border: 1px solid var(--color-border) !important;
}

body[theme-mode='dark'] #inputbar {
  background: rgba(34,34,34,0.96) !important;
  border: 1px solid var(--color-border) !important;
  box-shadow: 0 8px 32px -12px rgba(0,0,0,0.3) !important;
  backdrop-filter: blur(8px) !important;
}

* {
  font-family: "LXGW WenKai" !important;
  font-weight: 800;
}`
  },
  {
    id: "dracula",
    name: "Dracula",
    description: "Light theme inspired by Dracula Theme",
    lightPreviewUrl: "/dracula.png",
    darkPreviewUrl: "/dracula.png",
    css: `/* Dracula主题 */
:root {
    /* 基础色板 */
    --color-white: #F8F8F2;       /* Dracula Foreground */
    --color-white-soft: rgba(248, 248, 242, 0.8);
    --color-white-mute: rgba(248, 248, 242, 0.6);
    --color-black: #282A36;      /* Dracula Background */
    --color-black-soft: #343746;  /* 稍暗背景 */
    --color-black-mute: #44475A;  /* Dracula Current Line */
    
    /* 灰度阶梯 */
    --color-gray-1: #6272A4;      /* Dracula Comment */
    --color-gray-2: #44475A;      /* Current Line */
    --color-gray-3: #343746;      /* 深灰 */
    
    /* 文本色阶 */
    --color-text-1: #F8F8F2;      /* Foreground */
    --color-text-2: rgba(248, 248, 242, 0.7);
    --color-text-3: rgba(248, 248, 242, 0.5);
    
    /* 背景系统 */
    --color-background: var(--color-black);
    --color-background-soft: var(--color-black-soft);
    --color-background-mute: var(--color-black-mute);
    --color-background-opacity: rgba(40, 42, 54, 0.9);  /* Dracula背景+透明度 */
    
    /* 主色系统 */
    --color-primary: #BD93F9;      /* Dracula Purple */
    --color-primary-soft: #BD93F999;
    --color-primary-mute: #BD93F933;
    
    /* 图标与边框 */
    --color-icon: rgba(248, 248, 242, 0.6);
    --color-icon-white: #F8F8F2;
    --color-border: rgba(248, 248, 242, 0.1);
    --color-border-soft: rgba(248, 248, 242, 0.08);
    --color-border-mute: rgba(248, 248, 242, 0.05);
    
    /* 功能色 */
    --color-error: #FF5555;        /* Dracula Red */
    --color-link: #8BE9FD;         /* Dracula Cyan */
    --color-code-background: #343746;
    
    /* 交互状态 */
    --color-hover: rgba(68, 71, 90, 0.5);  /* Current Line 50%透明度 */
    --color-active: rgba(68, 71, 90, 0.8); 
    
    /* 组件特定 */
    --color-frame-border: #6272A4;        /* Comment颜色 */
    --color-group-background: var(--color-black-soft);
    --color-reference: #44475A;
    --color-reference-text: #F8F8F2;
    --color-reference-background: #282A36;
    
    /* 导航栏与聊天 */
    --navbar-background-mac: rgba(40, 42, 54, 0.8);
    --navbar-background: #282A36;
    --chat-background: #282A36;
    --chat-background-user: #44475A;       /* Current Line */
    --chat-background-assistant: #343746;  /* 深灰 */
    --chat-text-user: #F8F8F2;
}`
  }
]

// Process themes to include bugfix CSS with each theme
export const themesWithBugfixes = themes.map(theme => ({
  ...theme,
  css: `${theme.css}\n${bugfixCss}`
}))