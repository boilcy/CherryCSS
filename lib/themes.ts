import type { Theme } from "./types"

export const themes: Theme[] = [
  {
    id: "chang-an",
    name: "长安",
    description: "Light theme inspired by traditional Chinese aesthetics",
    previewUrl: "/chang-an.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2C2420;
  --color-background-soft: #3D312A;
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
}`,
  },
  {
    id: "xuan-zhi",
    name: "宣纸",
    description: "Light theme inspired by traditional Chinese paper",
    previewUrl: "/xuan-zhi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2C2C2C;
  --color-background-soft: #454545;
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
}`,
  },
  {
    id: "sheepskin",
    name: "羊皮纸",
    description: "Light theme inspired by ancient parchment",
    previewUrl: "/yang-pi-zhi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #32281A;
  --color-background-soft: #463524;
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
}`,
  },
  {
    id: "gold-jade",
    name: "金镶玉",
    description: "Light theme inspired by gold and jade ornaments",
    previewUrl: "/jin-xiang-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2A2420;
  --color-background-soft: #463C35;
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
}`,
  },
  {
    id: "bamboo",
    name: "琵琶",
    description: "Light theme inspired by bamboo and traditional instruments",
    previewUrl: "/pi-pa.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2B1F1C;
  --color-background-soft: #463933;
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
}`,
  },
  {
    id: "smoke-rain",
    name: "烟雨",
    description: "Light theme inspired by misty rain landscapes",
    previewUrl: "/yan-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #283339;
  --color-background-soft: #364550;
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
}`,
  },
  {
    id: "tian-shui",
    name: "天水",
    description: "Light theme inspired by misty rain landscapes",
    previewUrl: "/tian-shui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3059;
  --color-background-soft: #264573;
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
}`,
  },
  {
    id: "shan-shui",
    name: "山水",
    description: "Light theme inspired by misty rain landscapes",
    previewUrl: "/shan-shui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2c2c2c88;
  --color-background-soft: #4A4A4A;
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
}`,
  },
  {
    id: "yu-shi",
    name: "玉石",
    description: "Light theme inspired by jade and traditional ornaments",
    previewUrl: "/yu-shi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1c382988;
  --color-background-soft: #2a5b43;
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
}`,
  },
  {
    id: "zi-tao",
    name: "紫陶",
    description: "Light theme inspired by purple and traditional pottery",
    previewUrl: "/zi-tao.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4a314d88;
  --color-background-soft: #735475;
  --color-background-mute: #4a314d66;
  --navbar-background: #4a314d;
  --chat-background: #4a314d;
  --chat-background-user: #614464;
  --chat-background-assistant: #735f76;
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
}`
  },
  {
    id: "qing-wu",
    name: "青雾",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/qing-wu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4c584488;
  --color-background-soft: #697a60;
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
}`,
  },
  {
    id: "su-xuan",
    name: "素宣",
    description: "Light theme inspired by white and traditional paper",
    previewUrl: "/su-xuan.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1F2428;
  --color-background-soft: #2A3035;
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
}`,
  },
  {
    id: "yan-zhi",
    name: "胭脂",
    description: "Light theme inspired by red and traditional pottery",
    previewUrl: "/yan-zhi.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2C2123;
  --color-background-soft: #4A3634;
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
}`,
  },
  {
    id: "yan-hui",
    name: "雁灰",
    description: "Light theme inspired by gray and traditional pottery",
    previewUrl: "/yan-hui.png",
    css: `body[theme-mode="dark"] {
  --color-background: #282A36;
  --color-background-soft: #454857;
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
}`},
  {
    id: "yao-huo",
    name: "窑火",
    description: "Light theme inspired by brown and traditional pottery",
    previewUrl: "/yao-huo.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2c1810;
  --color-background-soft: #6b4435;
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
}`,
  },
  {
    id: "nai-cha",
    name: "奶茶",
    description: "Light theme inspired by brown and traditional pottery",
    previewUrl: "/nai-cha.png",
    css: `body[theme-mode="dark"] {
  --color-background: #463229AA;
  --color-background-soft: #5D443A;
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
}`
  },
  {
    id: "qing-ci",
    name: "青瓷",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/qing-ci.png",
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
}`
  },
  {
    id: "liu-yun",
    name: "流云",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/liu-yun.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3c6188;
  --color-background-soft: #234875;
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
}`
  },
  {
    id: "ru-yao-lan",
    name: "汝窑蓝",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/ru-yao-lan.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a2c3d;
  --color-background-soft: #2D5A7A;
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
}`
  },
  {
    id: "ru-yao-lv",
    name: "汝窑绿",
    description: "Light theme inspired by green and traditional pottery",
    previewUrl: "/ru-yao-lv.png",
    css: `body[theme-mode="dark"] {
  --color-background: #1a3937;
  --color-background-soft: #3a5f5c;
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
}`
  },
  {
    id: "han-bai-yu",
    name: "汉白玉",
    description: "Light theme inspired by white and traditional pottery",
    previewUrl: "/han-bai-yu.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2b2926ee;
  --color-background-soft: #353331;
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
}`
  },
  {
    id: "mo-nai",
    name: "莫奈",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/mo-nai.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4c768688;
  --color-background-soft: #3d6273;
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
}`
  },
  {
    id: "hu-guang",
    name: "湖光",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/hu-guang.png",
    css: `body[theme-mode="dark"] {
  --color-background: #2a525488;
  --color-background-soft: #264f57;
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
}`
  },
  {
    id: "chun-mei",
    name: "春梅",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/chun-mei.png",
    css: `body[theme-mode="dark"] {
  --color-background: #8c435688;
  --color-background-soft: #a85f6f;
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
}`
  },
  {
    id: "dan-xia",
    name: "丹霞",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/dan-xia.png",
    css: `body[theme-mode="dark"] {
  --color-background: #4a1c1c88;
  --color-background-soft: #873636;
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
}`
  },
  {
    id: "chan-zong",
    name: "禅棕",
    description: "Light theme inspired by blue and traditional pottery",
    previewUrl: "/chan-zong.png",
    css: `body[theme-mode="dark"] {
  --color-background: #5d403788;
  --color-background-soft: #6d4c41;
  --color-background-mute: #5d403766;
  --navbar-background: #5d4037;
  --chat-background: #5d4037;
  --chat-background-user: #795548;
  --chat-background-assistant: #8d6e63;
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
}`
  }
]