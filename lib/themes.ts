import type { Theme } from "./types"

export const themes: Theme[] = [
  {
    id: "chang-an",
    name: "长安",
    description: "Light theme inspired by traditional Chinese aesthetics",
    lightPreviewUrl: "/chang-an.png",
    darkPreviewUrl: "/chang-an.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2C2420;
  --color-background-soft: #4A3D34;
  --color-background-mute: #332A24;
  --navbar-background: #2C2420;
  --chat-background: #2C2420;
  --chat-background-user: #362D26;
  --chat-background-assistant: #3D312A;
}
body[theme-mode="dark"] #content-container {
  background-color: #362D26 !important;
}
:root {
  --color-black-soft: #2C2420;
}
body[theme-mode="light"] {
  --color-background: #F2E6D5;
  --color-background-soft: #E6D5C0;
  --color-background-mute: #DFCBB3;
  --navbar-background: #EDE0CC;
  --chat-background: #F6EBDc;
  --chat-background-user: #F2E6D5;
  --chat-background-assistant: #E6D5C0;
  --color-white: #F6EBDC;
}
body[theme-mode="light"] #content-container {
  background-color: #F6EBDC !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #CDB9A2;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #D9C7B1;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #574839;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4A3D34;
}`,
  },
  {
    id: "xuan-zhi",
    name: "宣纸",
    description: "Light theme inspired by traditional Chinese paper",
    lightPreviewUrl: "/xuan-zhi.png",
    darkPreviewUrl: "/xuan-zhi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2C2C2C;
  --color-background-soft: #515151;
  --color-background-mute: #333333;
  --navbar-background: #2C2C2C;
  --chat-background: #2C2C2C;
  --chat-background-user: #383838;
  --chat-background-assistant: #404040;
}
body[theme-mode="dark"] #content-container {
  background-color: #383838 !important;
}
:root {
  --color-black-soft: #2C2C2C;
}
body[theme-mode="light"] {
  --color-background: #F5F2E9;
  --color-background-soft: #EBE6D9;
  --color-background-mute: #E5DFD1;
  --navbar-background: #F2EEE3;
  --chat-background: #F9F6ED;
  --chat-background-user: #F5F2E9;
  --chat-background-assistant: #EBE6D9;
  --color-white: #F9F6ED;
}
body[theme-mode="light"] #content-container {
  background-color: #F9F6ED !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #D8D2C6;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #E2DCD0;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #636363;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #515151;
}`,
  },
  {
    id: "sheepskin",
    name: "羊皮纸",
    description: "Light theme inspired by ancient parchment",
    lightPreviewUrl: "/yang-pi-zhi.png",
    darkPreviewUrl: "/yang-pi-zhi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #32281A;
  --color-background-soft: #594633;
  --color-background-mute: #3D2E1F;
  --navbar-background: #32281A;
  --chat-background: #32281A;
  --chat-background-user: #403020;
  --chat-background-assistant: #463524;
}
body[theme-mode="dark"] #content-container {
  background-color: #403020 !important;
}
:root {
  --color-black-soft: #32281A;
}
body[theme-mode="light"] {
  --color-background: #F4E4BE;
  --color-background-soft: #E8D5AB;
  --color-background-mute: #E2CCA0;
  --navbar-background: #F0DEB5;
  --chat-background: #F7EAC9;
  --chat-background-user: #F4E4BE;
  --chat-background-assistant: #E8D5AB;
  --color-white: #F7EAC9;
}
body[theme-mode="light"] #content-container {
  background-color: #F7EAC9 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #D8C095;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #E0CAA0;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #6C5742;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #594633;
}`,
  },
  {
    id: "gold-jade",
    name: "金镶玉",
    description: "Light theme inspired by gold and jade ornaments",
    lightPreviewUrl: "/jin-xiang-yu.png",
    darkPreviewUrl: "/jin-xiang-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2A2420;
  --color-background-soft: #4A423C;
  --color-background-mute: #2F2925;
  --navbar-background: #2A2420;
  --chat-background: #2A2420;
  --chat-background-user: #352E29;
  --chat-background-assistant: #3D3631;
}
body[theme-mode="dark"] #content-container {
  background-color: #352E29 !important;
}
:root {
  --color-black-soft: #2A2420;
}
body[theme-mode="light"] {
  --color-background: #F8F3E6;
  --color-background-soft: #F3ECD8;
  --color-background-mute: #EEE5CC;
  --navbar-background: #F6F0E0;
  --chat-background: #FBF7ED;
  --chat-background-user: #F8F3E6;
  --chat-background-assistant: #F3ECD8;
  --color-white: #FBF7ED;
}
body[theme-mode="light"] #content-container {
  background-color: #FBF7ED !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #D9CEB1;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #E8DFC8;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #574E47;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4A423C;
}`,
  },
  {
    id: "bamboo",
    name: "琵琶",
    description: "Light theme inspired by bamboo and traditional instruments",
    lightPreviewUrl: "/pi-pa.png",
    darkPreviewUrl: "/pi-pa.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2B1F1C;
  --color-background-soft: #4A3C37;
  --color-background-mute: #302320;
  --navbar-background: #2B1F1C;
  --chat-background: #2B1F1C;
  --chat-background-user: #362925;
  --chat-background-assistant: #3E312D;
}
body[theme-mode="dark"] #content-container {
  background-color: #362925 !important;
}
:root {
  --color-black-soft: #2B1F1C;
}
body[theme-mode="light"] {
  --color-background: #F5EDE7;
  --color-background-soft: #EFE4DB;
  --color-background-mute: #E9DCD1;
  --navbar-background: #F2E9E2;
  --chat-background: #F8F2ED;
  --chat-background-user: #F5EDE7;
  --chat-background-assistant: #EFE4DB;
  --color-white: #F8F2ED;
}
body[theme-mode="light"] #content-container {
  background-color: #F8F2ED !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #D9C4B5;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #E5D6CA;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #574740;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4A3C37;
}`,
  },
  {
    id: "smoke-rain",
    name: "烟雨",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/yan-yu.png",
    darkPreviewUrl: "/yan-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #283339;
  --color-background-soft: #465761;
  --color-background-mute: #2F3B43;
  --navbar-background: #283339;
  --chat-background: #283339;
  --chat-background-user: #313E47;
  --chat-background-assistant: #364550;
}
body[theme-mode="dark"] #content-container {
  background-color: #313E47 !important;
}
:root {
  --color-black-soft: #283339;
}
body[theme-mode="light"] {
  --color-background: #E8F0F2;
  --color-background-soft: #DBE7EB;
  --color-background-mute: #D1E0E5;
  --navbar-background: #E3EDF0;
  --chat-background: #EDF4F6;
  --chat-background-user: #E8F0F2;
  --chat-background-assistant: #DBE7EB;
  --color-white: #EDF4F6;
}
body[theme-mode="light"] #content-container {
  background-color: #EDF4F6 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #B7C8CE;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #C9D9DE;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #566873;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #465761;
}`,
  },
  {
    id: "tian-shui",
    name: "天水",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/tian-shui.png",
    darkPreviewUrl: "/tian-shui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3059;
  --color-background-soft: #345a96;
  --color-background-mute: #1f3966;
  --navbar-background: #1a3059;
  --chat-background: #1a3059;
  --chat-background-user: #233d6b;
  --chat-background-assistant: #2c4a80;
}
body[theme-mode="dark"] #content-container {
  background-color: #233d6b !important;
}
:root {
  --color-black-soft: #1a3059;
}
body[theme-mode="light"] {
  --color-background: #f3f6fa;
  --color-background-soft: #e8eef6;
  --color-background-mute: #dce5f0;
  --navbar-background: #edf2f8;
  --chat-background: #f7fafd;
  --chat-background-user: #f3f6fa;
  --chat-background-assistant: #e8eef6;
  --color-white: #f7fafd;
}
body[theme-mode="light"] #content-container {
  background-color: #f7fafd !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #cad8e8;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #d9e3ef;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #3c6aac;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #345a96;
}`,
  },
  {
    id: "shan-shui",
    name: "山水",
    description: "Light theme inspired by misty rain landscapes",
    lightPreviewUrl: "/shan-shui.png",
    darkPreviewUrl: "/shan-shui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2c2c2c88;
  --color-background-soft: #5a5a5a;
  --color-background-mute: #2c2c2c66;
  --navbar-background: #2c2c2c;
  --chat-background: #2c2c2c;
  --chat-background-user: #666666;
  --chat-background-assistant: #4a4a4a;
}
body[theme-mode="dark"] #content-container {
  background-color: #3c3c3c !important;
}
:root {
    --color-black-soft: #2c2c2c;
}
body[theme-mode="light"] {
  --color-background: #f5f5f5;
  --color-background-soft: #ebebeb;
  --color-background-mute: #e0e0e0;
  --navbar-background: #f0f0f0;
  --chat-background: #ffffff;
  --chat-background-user: #f5f5f5;
  --chat-background-assistant: #ebebeb;
  --color-white: #ffffff;
}
body[theme-mode="light"] #content-container {
  background-color: #ffffff !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #C9C9C9;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #DADADA;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #6a6a6a;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #5a5a5a;
}`,
  },
  {
    id: "yu-shi",
    name: "玉石",
    description: "Light theme inspired by jade and traditional ornaments",
    lightPreviewUrl: "/yu-shi.png",
    darkPreviewUrl: "/yu-shi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1c382988;
  --color-background-soft: #3d7f5e;
  --color-background-mute: #326b4f66;
  --navbar-background: #1c3829;
  --chat-background: #1c3829;
  --chat-background-user: #2a4f3e;
  --chat-background-assistant: #326b4f;
}
body[theme-mode="dark"] #content-container {
  background-color: #2a4f3e !important;
}
:root {
  --color-black-soft: #1c3829;
}
body[theme-mode="light"] {
  --color-background: #e8f3ea;
  --color-background-soft: #d5e8d8;
  --color-background-mute: #c2ddc6;
  --navbar-background: #daf0dd;
  --chat-background: #f3f9f4;
  --chat-background-user: #e8f3ea;
  --chat-background-assistant: #d5e8d8;
  --color-white: #f3f9f4;
}
body[theme-mode="light"] #content-container {
  background-color: #f3f9f4 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #abcead;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #c0dbc3;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #489369;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #3d7f5e;
}`,
  },
  {
    id: "zi-tao",
    name: "紫陶",
    description: "Light theme inspired by purple and traditional pottery",
    lightPreviewUrl: "/zi-tao.png",
    darkPreviewUrl: "/zi-tao.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4a314d88;
  --color-background-soft: #7C5980;
  --color-background-mute: #4a314d66;
  --navbar-background: #4a314d;
  --chat-background: #4a314d;
  --chat-background-user: #614464;
  --chat-background-assistant: #583B5B;
}
body[theme-mode="dark"] #content-container {
  background-color: #614464 !important;
}
:root {
  --color-black-soft: #4a314d;
}
body[theme-mode="light"] {
  --color-background: #f4eef5;
  --color-background-soft: #e8dcea;
  --color-background-mute: #dbcbde;
  --navbar-background: #efe5f0;
  --chat-background: #f9f6fa;
  --chat-background-user: #f4eef5;
  --chat-background-assistant: #e8dcea;
  --color-white: #f9f6fa;
}
body[theme-mode="light"] #content-container {
  background-color: #f9f6fa !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #c2b0c6;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #d5c6d8;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #7C5980;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #6A4A6D;
}`
  },
  {
    id: "qing-wu",
    name: "青雾",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-wu.png",
    darkPreviewUrl: "/qing-wu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4c584488;
  --color-background-soft: #4a5443;
  --color-background-mute: #55614d66;
  --navbar-background: #4c5844;
  --chat-background: #4c5844;
  --chat-background-user: #5f6b57;
  --chat-background-assistant: #3d4637;
}
body[theme-mode="dark"] #content-container {
  background-color: #5f6b57 !important;
}
:root {
  --color-black-soft: #4c5844;
}
body[theme-mode="light"] {
  --color-background: #eef2eb;
  --color-background-soft: #e2e8dd;
  --color-background-mute: #d6decf;
  --navbar-background: #e8ede4;
  --chat-background: #f4f6f2;
  --chat-background-user: #eef2eb;
  --chat-background-assistant: #e2e8dd;
  --color-white: #f4f6f2;
}
body[theme-mode="light"] #content-container {
  background-color: #f4f6f2 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #bec4b9;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #d0d6cb;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #576350;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4a5443;
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
    css: `body[theme-mode="dark"] {
  --color-background: #2C2123;
  --color-background-soft: #5C3E41;
  --color-background-mute: #352528;
  --navbar-background: #2C2123;
  --chat-background: #2C2123;
  --chat-background-user: #3D2B2E;
  --chat-background-assistant: #4A3235;
}
body[theme-mode="dark"] #content-container {
  background-color: #3D2B2E !important;
}
:root {
  --color-black-soft: #2C2123;
}
body[theme-mode="light"] {
  --color-background: #F7F3F3;
  --color-background-soft: #F0E8E8;
  --color-background-mute: #E8E0E0;
  --navbar-background: #F9F5F5;
  --chat-background: #FCFAFA;
  --chat-background-user: #F7F3F3;
  --chat-background-assistant: #F0E8E8;
  --color-white: #FCFAFA;
}
body[theme-mode="light"] #content-container {
  background-color: #FCFAFA !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #E0C8C8;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #E8D8D8;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #6E4A4E;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #5C3E41;
}`,
  },
  {
    id: "yan-hui",
    name: "雁灰",
    description: "Light theme inspired by gray and traditional pottery",
    lightPreviewUrl: "/yan-hui.png",
    darkPreviewUrl: "/yan-hui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #282A36;
  --color-background-soft: #525569;
  --color-background-mute: #2F3240;
  --navbar-background: #282A36;
  --chat-background: #282A36;
  --chat-background-user: #343746;
  --chat-background-assistant: #44475A;
}
body[theme-mode="dark"] #content-container {
  background-color: #343746 !important;
}
:root {
  --color-black-soft: #282A36;
}
body[theme-mode="light"] {
  --color-background: #f2f3f4;
  --color-background-soft: #e6e7e8;
  --color-background-mute: #d9dadc;
  --navbar-background: #eeeff0;
  --chat-background: #f7f8f9;
  --chat-background-user: #f2f3f4;
  --chat-background-assistant: #e6e7e8;
  --color-white: #f7f8f9;
}
body[theme-mode="light"] #content-container {
  background-color: #f7f8f9 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #c6c7c8;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #d6d7d8;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #5F6378;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #525569;
}`},
  {
    id: "yao-huo",
    name: "窑火",
    description: "Light theme inspired by brown and traditional pottery",
    lightPreviewUrl: "/yao-huo.png",
    darkPreviewUrl: "/yao-huo.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2c1810;
  --color-background-soft: #6B4636;
  --color-background-mute: #443026;
  --navbar-background: #2c1810;
  --chat-background: #2c1810;
  --chat-background-user: #5c392c;
  --chat-background-assistant: #443026;
}
body[theme-mode="dark"] #content-container {
  background-color: #5c392c !important;
}
:root {
  --color-black-soft: #2c1810;
}
body[theme-mode="light"] {
  --color-background: #f8e3c4;
  --color-background-soft: #e6c89b;
  --color-background-mute: #d4b176;
  --navbar-background: #f1d6ae;
  --chat-background: #faf0dd;
  --chat-background-user: #e6c89b;
  --chat-background-assistant: #f1d6ae;
  --color-white: #faf0dd;
}
body[theme-mode="light"] #content-container {
  background-color: #faf0dd !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #deb57e;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #e8c696;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #664A3A;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #553C30;
}`,
  },
  {
    id: "nai-cha",
    name: "奶茶",
    description: "Light theme inspired by brown and traditional pottery",
    lightPreviewUrl: "/nai-cha.png",
    darkPreviewUrl: "/nai-cha.png",
    css: `body[theme-mode="dark"] {
  --color-background: #463229AA;
  --color-background-soft: #6B5044;
  --color-background-mute: #46322966;
  --navbar-background: #382720;
  --chat-background: #463229;
  --chat-background-user: #624B41;
  --chat-background-assistant: #5D443A;
}
body[theme-mode="dark"] #content-container {
  background-color: #3F2D24 !important;
}
:root {
  --color-black-soft: #382720;
}
body[theme-mode="light"] {
  --color-background: #F5E6D3;
  --color-background-soft: #E8D4BE;
  --color-background-mute: #DEC5AA;
  --navbar-background: #F2E2CF;
  --chat-background: #ffffff;
  --chat-background-user: #F5E6D3;
  --chat-background-assistant: #E8D4BE;
  --color-white: #ffffff;
}
body[theme-mode="light"] #content-container {
  background-color: #ffffff !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #D4BA9C;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #DEC7AD;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #7A5D50;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #6B5044;
}`
  },
  {
    id: "qing-ci",
    name: "青瓷",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-ci.png",
    darkPreviewUrl: "/qing-ci.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2c3635;
  --color-background-soft: #4a5755;
  --color-background-mute: #445352;
  --navbar-background: #2c3635;
  --chat-background: #2c3635;
  --chat-background-user: #3a4745;
  --chat-background-assistant: #445352;
}
body[theme-mode="dark"] #content-container {
  background-color: #3a4745 !important;
}
:root {
  --color-black-soft: #2c3635;
}
body[theme-mode="light"] {
  --color-background: #f0f5f3;
  --color-background-soft: #e1eae7;
  --color-background-mute: #d2deda;
  --navbar-background: #e8efec;
  --chat-background: #f5f9f7;
  --chat-background-user: #e1eae7;
  --chat-background-assistant: #e8efec;
  --color-white: #f5f9f7;
}
body[theme-mode="light"] #content-container {
  background-color: #f5f9f7 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #c8d6d1;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #dae5e1;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #2a3534;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #374544;
}`
  },
  {
    id: "liu-yun",
    name: "流云",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/liu-yun.png",
    darkPreviewUrl: "/liu-yun.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3c6188;
  --color-background-soft: #23496b;
  --color-background-mute: #15294466;
  --navbar-background: #1a3c61;
  --chat-background: #152944;
  --chat-background-user: #234875;
  --chat-background-assistant: #1d405f;
}
body[theme-mode="dark"] #content-container {
  background-color: #1d405f !important;
}
:root {
    --color-black-soft: #152944;
}
body[theme-mode="light"] {
  --color-background: #f3f6fa;
  --color-background-soft: #e8eef5;
  --color-background-mute: #dce6f2;
  --navbar-background: #f0f4f9;
  --chat-background: #ffffff;
  --chat-background-user: #e8eef5;
  --chat-background-assistant: #f3f6fa;
  --color-white: #ffffff;
}
body[theme-mode="light"] #content-container {
  background-color: #ffffff !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #c5d3e3;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #e0e9f2;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #2a5377;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #23496b;
}`
  },
  {
    id: "ru-yao-lan",
    name: "汝窑蓝",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/ru-yao-lan.png",
    darkPreviewUrl: "/ru-yao-lan.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a2c3d;
  --color-background-soft: #355d80;
  --color-background-mute: #2d5475;
  --navbar-background: #1a2c3d;
  --chat-background: #1a2c3d;
  --chat-background-user: #234863;
  --chat-background-assistant: #2d5475;
}
body[theme-mode="dark"] #content-container {
  background-color: #234863 !important;
}
:root {
  --color-black-soft: #1a2c3d;
}
body[theme-mode="light"] {
  --color-background: #e8f0f2;
  --color-background-soft: #bed3d7;
  --color-background-mute: #a5c6cc;
  --navbar-background: #d9e6e9;
  --chat-background: #f2f7f8;
  --chat-background-user: #bed3d7;
  --chat-background-assistant: #d9e6e9;
  --color-white: #f2f7f8;
}
body[theme-mode="light"] #content-container {
  background-color: #f2f7f8 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #b1cad0;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #c5d8dd;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #3e678b;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #355d80;
}`
  },
  {
    id: "ru-yao-lv",
    name: "汝窑绿",
    description: "Light theme inspired by green and traditional pottery",
    lightPreviewUrl: "/ru-yao-lv.png",
    darkPreviewUrl: "/ru-yao-lv.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3937;
  --color-background-soft: #3a706c;
  --color-background-mute: #315f5c;
  --navbar-background: #1a3937;
  --chat-background: #1a3937;
  --chat-background-user: #264d4a;
  --chat-background-assistant: #315f5c;
}
body[theme-mode="dark"] #content-container {
  background-color: #264d4a !important;
}
:root {
  --color-black-soft: #1a3937;
}
body[theme-mode="light"] {
  --color-background: #e8f0f0;
  --color-background-soft: #cee3e2;
  --color-background-mute: #b5d5d3;
  --navbar-background: #dce8e7;
  --chat-background: #f0f6f6;
  --chat-background-user: #cee3e2;
  --chat-background-assistant: #dce8e7;
  --color-white: #f0f6f6;
}
body[theme-mode="light"] #content-container {
  background-color: #f0f6f6 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #b4c8c5;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #c8d8d6;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #44817d;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #3a706c;
}`
  },
  {
    id: "han-bai-yu",
    name: "汉白玉",
    description: "Light theme inspired by white and traditional pottery",
    lightPreviewUrl: "/han-bai-yu.png",
    darkPreviewUrl: "/han-bai-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2b2926ee;
  --color-background-soft: #4A4845;
  --color-background-mute: #2b292666;
  --navbar-background: #2b2926;
  --chat-background: #2b2926;
  --chat-background-user: #3d3a36;
  --chat-background-assistant: #353331;
}
body[theme-mode="dark"] #content-container {
  background-color: #302d29 !important;
}
:root {
    --color-black-soft: #2b2926;
}
body[theme-mode="light"] {
  --color-background: #f7f6f2;
  --color-background-soft: #f2f0eb;
  --color-background-mute: #eae8e3;
  --navbar-background: #f5f3ef;
  --chat-background: #ffffff;
  --chat-background-user: #f7f6f2;
  --chat-background-assistant: #f2f0eb;
  --color-white: #ffffff;
}
body[theme-mode="light"] #content-container {
  background-color: #fdfcfa !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #dedad5;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #e8e6e1;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #5F5D5A;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4A4845;
}`
  },
  {
    id: "mo-nai",
    name: "莫奈",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/mo-nai.png",
    darkPreviewUrl: "/mo-nai.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4c768688;
  --color-background-soft: #5a8296;
  --color-background-mute: #4c768666;
  --navbar-background: #4c7686;
  --chat-background: #4c7686;
  --chat-background-user: #689aaf;
  --chat-background-assistant: #3d6170;
}
body[theme-mode="dark"] #content-container {
  background-color: #456f80 !important;
}
:root {
  --color-black-soft: #4c7686;
}
body[theme-mode="light"] {
  --color-background: #e6f3f7;
  --color-background-soft: #cce6f0;
  --color-background-mute: #b3dae8;
  --navbar-background: #f0f7f9;
  --chat-background: #f4fafb;
  --chat-background-user: #e6f3f7;
  --chat-background-assistant: #cce6f0;
  --color-white: #f4fafb;
}
body[theme-mode="light"] #content-container {
  background-color: #f4fafb !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #94cad8;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #b0d8e6;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #5a8296;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #4b7183;
}`
  },
  {
    id: "hu-guang",
    name: "湖光",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/hu-guang.png",
    darkPreviewUrl: "/hu-guang.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2a525488;
  --color-background-soft: #3e7a83;
  --color-background-mute: #2f616b66;
  --navbar-background: #2a5254;
  --chat-background: #2a5254;
  --chat-background-user: #3c707a;
  --chat-background-assistant: #1d4247;
}
body[theme-mode="dark"] #content-container {
  background-color: #3c707a !important;
}
:root {
  --color-black-soft: #2a5254;
}
body[theme-mode="light"] {
  --color-background: #e6f3f4;
  --color-background-soft: #d4ebec;
  --color-background-mute: #c2e3e4;
  --navbar-background: #daf0f1;
  --chat-background: #f0f7f8;
  --chat-background-user: #e6f3f4;
  --chat-background-assistant: #d4ebec;
  --color-white: #f0f7f8;
}
body[theme-mode="light"] #content-container {
  background-color: #f0f7f8 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #a9d5d7;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #bfe0e1;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #2d5a61;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #254e54;
}`
  },
  {
    id: "chun-mei",
    name: "春梅",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/chun-mei.png",
    darkPreviewUrl: "/chun-mei.png",
    css: `body[theme-mode="dark"] {
  --color-background: #8c435688;
  --color-background-soft: #B4657A;
  --color-background-mute: #94505f66;
  --navbar-background: #8c4356;
  --chat-background: #8c4356;
  --chat-background-user: #a25768;
  --chat-background-assistant: #763848;
}
body[theme-mode="dark"] #content-container {
  background-color: #a25768 !important;
}
:root {
  --color-black-soft: #8c4356;
}
body[theme-mode="light"] {
  --color-background: #ffeef2;
  --color-background-soft: #ffe6ec;
  --color-background-mute: #ffdee6;
  --navbar-background: #fff1f5;
  --chat-background: #fff6f9;
  --chat-background-user: #ffeef2;
  --chat-background-assistant: #ffe6ec;
  --color-white: #fff6f9;
}
body[theme-mode="light"] #content-container {
  background-color: #fff6f9 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #ffc6d4;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #ffd6e0;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #9F5669;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #8A4759;
}`
  },
  {
    id: "dan-xia",
    name: "丹霞",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/dan-xia.png",
    darkPreviewUrl: "/dan-xia.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4a1c1c88;
  --color-background-soft: #a03c3c;
  --color-background-mute: #8b343466;
  --navbar-background: #4a1c1c;
  --chat-background: #4a1c1c;
  --chat-background-user: #642424;
  --chat-background-assistant: #8b3434;
}
body[theme-mode="dark"] #content-container {
  background-color: #642424 !important;
}
:root {
  --color-black-soft: #4a1c1c;
}
body[theme-mode="light"] {
  --color-background: #fff7f7;
  --color-background-soft: #ffe4e4;
  --color-background-mute: #ffd4d4;
  --navbar-background: #fff0f0;
  --chat-background: #fffafa;
  --chat-background-user: #ffe4e4;
  --chat-background-assistant: #fff0f0;
  --color-white: #fffafa;
}
body[theme-mode="light"] #content-container {
  background-color: #fffafa !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #ffd0d0;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #ffe0e0;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #b54545;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #a03c3c;
}`
  },
  {
    id: "chan-zong",
    name: "禅棕",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/chan-zong.png",
    darkPreviewUrl: "/chan-zong.png",
    css: `body[theme-mode="dark"] {
  --color-background: #5d403788;
  --color-background-soft: #8A665F;
  --color-background-mute: #5d403766;
  --navbar-background: #5d4037;
  --chat-background: #5d4037;
  --chat-background-user: #795548;
  --chat-background-assistant: #795650;
}
body[theme-mode="dark"] #content-container {
  background-color: #4e342e !important;
}
:root{
    --color-black-soft: #5d4037;
}
body[theme-mode="light"] {
  --color-background: #efebe9;
  --color-background-soft: #d7ccc8;
  --color-background-mute: #bcaaa4;
  --navbar-background: #efebe9;
  --chat-background: #faf8f7;
  --chat-background-user: #efebe9;
  --chat-background-assistant: #d7ccc8;
  --color-white: #faf8f7;
}
body[theme-mode="light"] #content-container {
  background-color: #faf8f7 !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #b3a49f;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #c5b8b4;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #9B7670;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #8A665F;
}`
  },
  {
    id: "qing-hua",
    name: "青花",
    description: "Light theme inspired by blue and traditional pottery",
    lightPreviewUrl: "/qing-hua.png",
    darkPreviewUrl: "/qing-hua.png",
    css: `body[theme-mode="dark"] {
  --color-background: #10234988;
  --color-background-soft: #275983;
  --color-background-mute: #1b4b7766;
  --navbar-background: #102349;
  --chat-background: #102349;
  --chat-background-user: #1e3f66;
  --chat-background-assistant: #1b4b77;
}
body[theme-mode="dark"] #content-container {
  background-color: #1e3f66 !important;
}
:root {
  --color-black-soft: #102349;
}
body[theme-mode="light"] {
  --color-background: #f2f7ff;
  --color-background-soft: #d4e5ff;
  --color-background-mute: #b9d7ff;
  --navbar-background: #e6f0ff;
  --chat-background: #f7fbff;
  --chat-background-user: #d4e5ff;
  --chat-background-assistant: #e6f0ff;
  --color-white: #f7fbff;
}
body[theme-mode="light"] #content-container {
  background-color: #f7fbff !important;
}
body[theme-mode="light"] .ant-collapse {
  background-color: #b3d1ff;
}
body[theme-mode="light"] .ant-collapse-content {
  background-color: #cce0ff;
}
body[theme-mode="dark"] .ant-collapse {
  background-color: #336790;
}
body[theme-mode="dark"] .ant-collapse-content {
  background-color: #275983;
}`
  },
  {
    id: "claude",
    name: "Claude",
    description: "Theme inspired by Claude",
    lightPreviewUrl: "/claude.png",
    darkPreviewUrl: "/claude.png",
    css: `/* Claude Theme */
/* Theme variables */
:root {
  --color-black-soft: #2A2B2A;
  --color-white-soft: #F8F7F2;
}

/* Dark theme */
body[theme-mode="dark"] {
  /* Colors */
  --color-background: #2B2B2B;
  --color-background-soft: #303030;
  --color-background-mute: #282C34;
  --navbar-background: var(--color-black-soft);
  --chat-background: var(--color-black-soft);
  --chat-background-user: #323332;
  --chat-background-assistant: #2D2E2D;
}

/* Dark theme specific styles */
body[theme-mode="dark"] {
  #content-container {
    background-color: var(--chat-background-assistant) !important;
  }

  #content-container #messages {
    background-color: var(--chat-background-assistant);
  }

  .inputbar-container {
    background-color: #3D3D3A;
    border: 1px solid #5E5D5940;
    border-radius: 8px;
  }

  /* Code styling */
  code {
    background-color: #E5E5E20D;
    color: #EA928A;
  }

  pre code {
    color: #ABB2BF;
  }
}

/* Light theme */
body[theme-mode="light"] {
  /* Colors */
  --color-white: #FFFFFF;
  --color-background: #EBE8E2;
  --color-background-soft: #CBC7BE;
  --color-background-mute: #E4E1D7;
  --navbar-background: var(--color-white-soft);
  --chat-background: var(--color-white-soft);
  --chat-background-user: #F8F7F2;
  --chat-background-assistant: #F6F4EC;
}

/* Light theme specific styles */
body[theme-mode="light"] {
  #content-container {
    background-color: var(--chat-background-assistant) !important;
  }

  #content-container #messages {
    background-color: var(--chat-background-assistant);
  }

  .inputbar-container {
    background-color: #FFFFFF;
    border: 1px solid #87867F40;
    border-radius: 8px;
  }

  /* Code styling */
  code {
    background-color: #3D39290D;
    color: #7C1B13;
  }

  pre code {
    color: #000000;
  }
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