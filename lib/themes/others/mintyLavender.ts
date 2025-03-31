import type { Theme } from "@/lib/types"

export const mint: Theme = {
    id: "mint",
    name: "Mint",
    description: "Refreshing theme with teal-mint tones",
    lightPreviewUrl: "/mint.png",
    darkPreviewUrl: "/mint.png",
    css: `/* 
  ========================
  Mint
  ========================
  A refreshing theme featuring teal-mint greens (#519D9E, #58C9B9, #9DC8C8)
  with light purple (#D1B6E1) accents for decoration
  */
  
  /* Root variables (global across light/dark modes) */
  :root {
      --color-white-soft: #F8F8F8;
      --color-black-soft: #263238;  /* Dark background color, visible in some UI elements */
  
      /* Primary color (accent color) and variants */
      --color-primary: #D1B6E1;     /* Light purple for decoration/accents */
      --color-primary-soft: rgba(209, 182, 225, 0.6);  /* Softer lavender */
      --color-primary-mute: rgba(209, 182, 225, 0.2);  /* Subtle lavender */
  }
  
  /* ===== DARK MODE VARIABLES ===== */
  body[theme-mode="dark"] {
      /* Main background colors - from darkest to lightest */
      --color-background: #263238;       /* Dark teal-gray base */
      --color-background-mute: #2D3B41;  /* Slightly lighter teal-gray */
      --color-background-soft: #37474F;  /* Medium teal-gray */
  
      /* Chat interface colors */
      --navbar-background-mac: rgba(38, 50, 56, 0.8);  /* Semi-transparent navbar */
      --navbar-background: #263238;      /* Navigation bar background */
      --chat-background: #263238;        /* Main chat area background */
      --chat-background-user: #304a4b;   /* User message bubble - dark teal */
      --chat-background-assistant: #385d5e; /* Assistant message - medium teal */
  
      /* Text colors */
      --chat-text-user: #F8F8F8;         /* Light text on dark background */
      --color-text: #F8F8F8;             /* General text color */
  
      /* Interactive states */
      --color-hover: #3a6566;            /* Hover state - teal highlight */
      --color-active: #519D9E;           /* Active/selected state - main teal color */
  
      /* Border colors */
      --color-border: rgba(248, 248, 248, 0.12);     /* Visible but subtle border */
      --color-border-soft: rgba(248, 248, 248, 0.06); /* Very subtle border */
  }
  
  /* Content container background - important! */
  body[theme-mode="dark"] #content-container {
      background-color: #304a4b !important; /* Matches chat-background-user */
  }
  
  /* Collapsible components styling */
  body[theme-mode="dark"] .ant-collapse {
      background-color: #41777a; /* Darker teal component background */
  }
  
  body[theme-mode="dark"] .ant-collapse-content {
      background-color: #37474F; /* Matches background-soft */
  }
  
  /* ===== LIGHT MODE VARIABLES ===== */
  body[theme-mode="light"] {
      /* Main background colors - from lightest to medium */
      --color-background: #e6f4f4;       /* Very light mint */
      --color-background-mute: #d5eded;  /* Slightly darker mint */
      --color-background-soft: #c2e5e5;  /* Medium mint */
  
      /* Chat interface colors */
      --navbar-background: #9DC8C8;      /* Light teal navbar */
      --chat-background: #e6f4f4;        /* Main chat area - very light mint */
      --chat-background-user: #c2e5e5;   /* User message - light teal */
      --chat-background-assistant: #b0dedc; /* Assistant message - medium teal */
  
      /* Text colors */
      --color-text: #2a4b4c;             /* Dark teal text color */
  
      /* Interactive states */
      --color-hover: #58C9B9;            /* Hover state - brighter teal highlight */
      --color-active: #519D9E;           /* Active/selected state - main teal color */
  
      /* Border colors */
      --color-border: rgba(42, 75, 76, 0.12);       /* Subtle teal border */
      --color-border-soft: rgba(42, 75, 76, 0.06);  /* Very subtle border */
  
      /* White variable (often used for backgrounds) */
      --color-white: #f5fafa;            /* Lightest mint tone */
  }
  
  /* Content container background - important! */
  body[theme-mode="light"] #content-container {
      background-color: #e6f4f4 !important; /* Matches chat-background */
  }
  
  /* Collapsible components styling */
  body[theme-mode="light"] .ant-collapse {
      background-color: #9DC8C8; /* Light teal component background */
  }
  
  body[theme-mode="light"] .ant-collapse-content {
      background-color: #b0dedc; /* Between ant-collapse and background-soft */
  }`
} 