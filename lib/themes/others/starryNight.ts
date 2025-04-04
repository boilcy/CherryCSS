import type { Theme } from '@/lib/types'

export const starryNight: Theme = {
  id: 'starry-night',
  name: 'Mac-星月夜',
  description: 'Mac风格磨砂玻璃主题 - 星月夜背景',
  lightPreviewUrl: '/starry-night.png',
  darkPreviewUrl: '/starry-night.png',
  css: `/* 磨砂玻璃主题 - 星月夜背景 (Deeper & High Contrast)*/
.bubble {
    background-color: transparent !important;
#chat-main {
    background-color: transparent !important;
}
#messages {
    background-color: transparent !important;
}
}
:root {
    /* 动画与过渡 */
    --duration-quick: 0.15s;
    --duration-normal: 0.3s;
    --duration-long: 0.5s;
    --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
    --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
    --easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
    --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
    
    /* 圆角 */
    --radius-dynamic: 12px;
    --radius-large: 12px;
    
    /* 品牌颜色 */
    --color-brand-primary: oklch(68% 0.06 255);
    --color-brand-hover: color-mix(in oklch, var(--color-brand-primary) 85%, black);
    
    /* 基础设置 */
    --theme-lightness: 1;
    --shadow-intensity: 0.12;
    --highlight-intensity: 0.05;
    --file-line-width: 65rem;
    --font-default: 'LXGWWenKaiGB', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    /* 模糊效果 */
    --background-blur: 14px;
    --element-blur: 16px;
    
    /* 背景图片 */
    --background-image-starry-night: url('https://img.pub/p/6ea4818f4982c0c55ce5.jpg');
    
    /* 交互效果 */
    --hover-scale: 1.01;
    --active-scale: 0.98;
    --card-translate-y: 6px;
    
    /* 金属质感渐变 */
    --metal-gradient-light: linear-gradient(90deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.22) 25%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.22) 75%, rgba(255, 255, 255, 0.12) 100%);
    --metal-gradient-dark: linear-gradient(90deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.14) 25%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.14) 75%, rgba(255, 255, 255, 0.06) 100%);
    
    /* 边框发光效果 */
    --border-glow: 0 0 8px color-mix(in srgb, var(--color-brand-primary), transparent 50%);
    
    /* 文本颜色 */
    --text-secondary: color-mix(in srgb, var(--text-primary), transparent 30%);
    --text-placeholder: color-mix(in srgb, var(--text-primary), transparent 55%);
    --text-on-brand: oklch(98% 0.01 255);
    --text-link: var(--color-brand-primary);
    --text-link-hover: var(--color-brand-hover);
}

/* 深色模式 */
body[theme-mode="dark"] {
    --background-image-url: var(--background-image-starry-night);
    --background-overlay-opacity: 0.5;
    
    /* 背景色 */
    --color-background-base: oklch(25% 0.01 260);
    --color-background: linear-gradient(145deg, oklch(22% 0.01 260 / 0.75) 0%, oklch(28% 0.015 265 / 0.75) 100%);
    --color-background-soft: linear-gradient(145deg, oklch(30% 0.015 265 / 0.7) 0%, oklch(34% 0.02 270 / 0.7) 100%);
    --color-background-mute: linear-gradient(145deg, oklch(38% 0.02 270 / 0.65) 0%, oklch(42% 0.025 275 / 0.65) 100%);
    --navbar-background: linear-gradient(to right, oklch(22% 0.01 260 / 0.8) 0%, oklch(28% 0.015 265 / 0.8) 100%);
    
    /* 元素背景 */
    --bg-element-primary: color-mix(in srgb, var(--color-background-base) 85%, transparent 15%);
    --bg-element-soft: color-mix(in srgb, var(--color-background-base) 75%, transparent 25%);
    --bg-element-mute: color-mix(in srgb, var(--color-background-base) 65%, transparent 35%);
    
    /* 聊天背景 */
    --chat-background-user: linear-gradient(to right, oklch(55% 0.08 255 / 0.65) 0%, oklch(60% 0.1 260 / 0.65) 100%);
    --chat-background-assistant: linear-gradient(to right, oklch(38% 0.02 270 / 0.65) 0%, oklch(42% 0.025 275 / 0.65) 100%);
    
    /* 文本颜色 */
    --ctp-text: oklch(95% 0.005 270);
    --text-primary: var(--ctp-text);
    --deep-thinking-color: oklch(85% 0.01 270);
    
    /* 代码和脚注背景 */
    --code-bg-dark: oklch(20% 0.01 260 / 0.85);
    --footnote-bg-dark: oklch(28% 0.015 265 / 0.75);
    
    /* 阴影和高亮 */
    --shadow-color: rgba(0, 0, 0, 0.4);
    --highlight-color: rgba(255, 255, 255, 0.12);
    --shadow-intensity: 0.35;

    /* Text colors */
    --chat-text-user: #F8F7F2;         /* Antiqued parchment color */
    --color-text: #F8F7F2;             /* General text color */
    
    /* 边框 */
    --border-color: rgba(255, 255, 255, 0.12);
    --border-hover-color: rgba(255, 255, 255, 0.22);
    --metal-gradient: var(--metal-gradient-dark);
    --border-user: color-mix(in oklch, var(--color-brand-primary) 60%, black);
    --border-assistant: oklch(60% 0.03 30);
    
    color: var(--text-primary);
}

/* 浅色模式 */
body[theme-mode="light"] {
    --background-image-url: var(--background-image-starry-night);
    --background-overlay-opacity: 0.05;
    
    /* 背景色 */
    --color-background-base: oklch(97% 0.005 260);
    --color-background: linear-gradient(145deg, oklch(98% 0.005 260 / 0.75) 0%, oklch(96% 0.008 265 / 0.75) 100%);
    --color-background-soft: linear-gradient(145deg, oklch(95% 0.008 265 / 0.8) 0%, oklch(93% 0.01 270 / 0.8) 100%);
    --color-background-mute: linear-gradient(145deg, oklch(92% 0.01 270 / 0.85) 0%, oklch(90% 0.012 275 / 0.85) 100%);
    --navbar-background: linear-gradient(to right, oklch(98% 0.005 260 / 0.85) 0%, oklch(96% 0.008 265 / 0.85) 100%);
    
    /* 元素背景 */
    --bg-element-primary: color-mix(in srgb, var(--color-background-base) 92%, transparent 8%);
    --bg-element-soft: color-mix(in srgb, var(--color-background-base) 88%, transparent 12%);
    --bg-element-mute: color-mix(in srgb, var(--color-background-base) 80%, transparent 20%);
    
    /* 聊天背景 */
    --chat-background-user: linear-gradient(to right, oklch(85% 0.08 255 / 0.65) 0%, oklch(88% 0.09 260 / 0.65) 100%);
    --chat-background-assistant: linear-gradient(to right, oklch(94% 0.008 265 / 0.7) 0%, oklch(92% 0.01 270 / 0.7) 100%);
    
    /* 文本颜色 */
    --ctp-text: oklch(15% 0.01 270);
    --text-primary: var(--ctp-text);
    --deep-thinking-color: oklch(35% 0.02 270);
    
    /* 代码和脚注背景 */
    --code-bg-light: oklch(94% 0.008 265 / 0.85);
    --footnote-bg-light: oklch(96% 0.005 260 / 0.8);
    
    /* 阴影和高亮 */
    --shadow-color: rgba(60, 60, 80, 0.15);
    --highlight-color: rgba(255, 255, 255, 0.4);
    --shadow-intensity: 0.15;
    
    /* 边框 */
    --border-color: rgba(0, 0, 0, 0.1);
    --border-hover-color: rgba(0, 0, 0, 0.18);
    --metal-gradient: var(--metal-gradient-light);
    --border-user: color-mix(in oklch, var(--color-brand-primary) 70%, white);
    --border-assistant: oklch(75% 0.03 30);
    
    color: var(--text-primary);
}

/* 通用样式 */
* {
    font-family: var(--font-default);
    line-height: 1.55;
    letter-spacing: -0.005em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    position: relative;
    background-color: var(--color-background-base);
    background-image: var(--background-image-url);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    transition: color var(--duration-normal) ease-in-out;
}

body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: var(--color-background);
    opacity: var(--background-overlay-opacity);
    backdrop-filter: blur(var(--background-blur));
    -webkit-backdrop-filter: blur(var(--background-blur));
    z-index: -1;
    transition: opacity var(--duration-normal) ease-in-out, background var(--duration-normal) ease-in-out;
}

/* 消息气泡 */
.message-content-container {
    background: var(--bg-element-soft) !important;
    backdrop-filter: blur(var(--element-blur));
    -webkit-backdrop-filter: blur(var(--element-blur));
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    border: none;
    border-radius: var(--radius-dynamic);
    position: relative;
    z-index: 1;
    outline: none;
    transition:
        background var(--duration-normal) var(--easing-standard),
        box-shadow var(--duration-normal) var(--easing-standard);
    margin-block: 8px;
    padding-inline: 14px;
    padding-block: 10px;
    box-shadow: 0 3px 12px var(--shadow-intensity) var(--shadow-color);
}

/* 用户/助手消息背景 - 添加透明效果 */
.chat-item.user .message-content-container {
    border-left: 3px solid var(--border-user);
    background: var(--chat-background-user) !important; 
}
.chat-item.assistant .message-content-container {
    border-left: 3px solid var(--border-assistant);
    background: var(--chat-background-assistant) !important; 
}

/* 浅色模式消息气泡 */
body[theme-mode="light"] .message-content-container {
    background: var(--bg-element-soft) !important;
}

.message-content-container::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--metal-gradient);
    opacity: 0.6;
    pointer-events: none;
    z-index: -1;
    border: 0.5px solid var(--border-color);
    transition: opacity var(--duration-normal) var(--easing-standard), border-color var(--duration-normal) var(--easing-standard);
}

.message-content-container:hover::before {
    opacity: 0.8;
    border-color: var(--border-hover-color);
}

@keyframes cardAppear {
    from { opacity: 0; transform: translateY(var(--card-translate-y)); }
    to { opacity: 1; transform: translateY(0); }
}

.chat-item {
    animation: cardAppear var(--duration-normal) var(--easing-decelerate) forwards;
}

/* 输入栏 */
#inputbar {
    background: var(--bg-element-primary) !important;
    backdrop-filter: blur(var(--element-blur));
    -webkit-backdrop-filter: blur(var(--element-blur));
    border: none;
    position: relative;
    border-radius: var(--radius-large);
    margin: -15px 20px 15px 20px;
    transition: box-shadow var(--duration-normal) var(--easing-standard), background var(--duration-normal) var(--easing-standard);
    outline: none;
    box-shadow: 0 4px 10px var(--shadow-intensity) var(--shadow-color);
}

/* 浅色模式输入栏 */
body[theme-mode="light"] #inputbar {
    background: var(--bg-element-primary) !important;
}

#inputbar::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: var(--metal-gradient);
    opacity: 0.6;
    pointer-events: none;
    z-index: -1;
    border: 0.5px solid var(--border-color);
    transition: opacity var(--duration-normal) var(--easing-standard), border-color var(--duration-normal) var(--easing-standard), box-shadow var(--duration-normal) var(--easing-standard);
}

#inputbar:focus-within {
    box-shadow: 0 4px 10px var(--shadow-intensity) var(--shadow-color), var(--border-glow);
}

#inputbar:focus-within::before {
    opacity: 0.9;
    border-color: var(--color-brand-primary);
}

/* 导航栏 */
.navbar {
    background: var(--navbar-background) !important;
    backdrop-filter: blur(var(--element-blur));
    -webkit-backdrop-filter: blur(var(--element-blur));
    border: none;
    position: relative;
    box-shadow: 0 2px 8px var(--shadow-intensity) var(--shadow-color);
    animation: navbarAppear var(--duration-long) var(--easing-standard) forwards;
    transition: background var(--duration-normal) var(--easing-standard);
}

/* 浅色模式导航栏 */
body[theme-mode="light"] .navbar {
    background: var(--navbar-background) !important;
}

.navbar::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: var(--metal-gradient);
    opacity: 0.3;
}

@keyframes navbarAppear {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.chat-container {
    background: transparent !important;
}

/* 用户/助手消息边框 */
.chat-item.user .message-content-container {
    border-left: 3px solid var(--border-user);
}

.chat-item.assistant .message-content-container {
    border-left: 3px solid var(--border-assistant);
}

/* 高对比度模式 */
@media (prefers-contrast: more) {
    :root {
        --shadow-intensity: 0.2;
    }
    
    body[theme-mode="dark"] {
        --ctp-text: oklch(100% 0 0);
        --background-overlay-opacity: 0.6;
        --border-color: rgba(255, 255, 255, 0.25);
        --border-hover-color: rgba(255, 255, 255, 0.4);
        --code-bg-dark: oklch(18% 0.01 260 / 0.9);
        --footnote-bg-dark: oklch(25% 0.015 265 / 0.85);
		--chat-background-user: linear-gradient(to right, oklch(55% 0.08 255 / 0.75) 0%, oklch(60% 0.1 260 / 0.75) 100%);
        --chat-background-assistant: linear-gradient(to right, oklch(38% 0.02 270 / 0.75) 0%, oklch(42% 0.025 275 / 0.75) 100%);
    }
    
    body[theme-mode="light"] {
        --ctp-text: oklch(0% 0 0);
        --background-overlay-opacity: 0.7;
        --border-color: rgba(0, 0, 0, 0.2);
        --border-hover-color: rgba(0, 0, 0, 0.3);
        --code-bg-light: oklch(96% 0.008 265 / 0.9);
        --footnote-bg-light: oklch(98% 0.005 260 / 0.9);
		--chat-background-user: linear-gradient(to right, oklch(85% 0.08 255 / 0.8) 0%, oklch(88% 0.09 260 / 0.8) 100%);
        --chat-background-assistant: linear-gradient(to right, oklch(94% 0.008 265 / 0.85) 0%, oklch(92% 0.01 270 / 0.85) 100%);
    }
    
    .message-content-container::before, #inputbar::before {
        opacity: 0.9;
        border-width: 1px;
    }
}

/* 文本颜色应用 */
.chat-item .nickname,
.chat-item .message {
    color: var(--text-primary);
    transition: color var(--duration-normal) var(--easing-standard);
}

/* 深度思考块 */
.ant-collapse-content-box .markdown {
    color: var(--deep-thinking-color);
    background: var(--bg-element-mute) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 10px 14px;
    margin-top: 8px;
    border-left: 2px solid color-mix(in srgb, var(--deep-thinking-color), transparent 60%);
    transition: background var(--duration-normal) var(--easing-standard), color var(--duration-normal) var(--easing-standard), border-color var(--duration-normal) var(--easing-standard);
}

/* 代码块 */
.shiki {
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    padding: 0.8em 1em;
    margin: 0.5em 0;
    transition: box-shadow var(--duration-normal) var(--easing-standard), background-color var(--duration-normal) var(--easing-standard);
    border: 0.5px solid var(--border-color);
}

.shiki.one-light {
    background-color: var(--code-bg-light) !important;
}

.shiki.material-theme-darker {
    background-color: var(--code-bg-dark) !important;
}

.shiki code {
    font-family: 'Fira Code', 'JetBrains Mono', monospace !important;
    font-size: 0.9em;
    line-height: 1.6;
}

pre:hover .shiki {
    box-shadow: var(--border-glow);
}

/* 脚注 */
.footnotes {
    background-color: var(--footnote-bg-light);
    border-radius: 8px;
    position: relative;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: box-shadow var(--duration-normal) var(--easing-standard), background-color var(--duration-normal) var(--easing-standard), border-color var(--duration-normal) var(--easing-standard);
    border: 0.5px solid var(--border-color);
    padding: 8px 12px;
    margin-top: 1em;
    font-size: 0.9em;
    color: var(--text-secondary);
}

body[theme-mode="dark"] .footnotes {
    background-color: var(--footnote-bg-dark);
}

.footnotes a {
    color: var(--text-link);
}

.footnotes a:hover {
    color: var(--text-link-hover);
    opacity: 1;
    border-bottom-color: transparent;
}

/* 输入文本区域 */
#inputbar textarea.ant-input {
    min-height: 60px !important;
    height: auto !important;
    max-height: 250px !important;
    padding: 12px;
    color: var(--text-primary);
    background-color: transparent;
    transition: color var(--duration-normal) var(--easing-standard);
    caret-color: var(--color-brand-primary);
    resize: none;
    line-height: 1.5;
}

#inputbar textarea.ant-input::placeholder {
    color: var(--text-placeholder);
    transition: color var(--duration-normal) var(--easing-standard);
}

/* 按钮 */
button,
.ant-btn {
    border-radius: 8px;
    backdrop-filter: blur(var(--element-blur));
    -webkit-backdrop-filter: blur(var(--element-blur));
    transition: background-color var(--duration-quick) var(--easing-standard),
                border-color var(--duration-quick) var(--easing-standard),
                color var(--duration-quick) var(--easing-standard),
                box-shadow var(--duration-quick) var(--easing-standard),
                transform var(--duration-quick) var(--easing-standard);
    position: relative;
    overflow: hidden;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    background-color: color-mix(in srgb, var(--bg-element-mute) 80%, transparent 20%);
    padding: 6px 16px;
    font-weight: 500;
    cursor: pointer;
    outline: none;
}

/* 主要按钮 */
.ant-btn-primary {
    background-color: var(--color-brand-primary);
    border-color: transparent;
    color: var(--text-on-brand);
    box-shadow: 0 2px 5px color-mix(in srgb, var(--color-brand-primary), transparent 60%);
}

/* 按钮金属质感 */
button::before,
.ant-btn::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--metal-gradient);
    opacity: 0.15;
    pointer-events: none;
    z-index: -1;
    transition: opacity var(--duration-quick) var(--easing-standard);
    border-radius: inherit;
}

.ant-btn-primary::before {
    opacity: 0.08;
}

/* 按钮悬停样式 */
button:hover, .ant-btn:hover {
    border-color: var(--border-hover-color);
    color: var(--text-primary);
    transform: translateY(-1px);
    box-shadow: 0 3px 8px var(--shadow-intensity) var(--shadow-color);
}

.ant-btn-primary:hover {
    background-color: var(--color-brand-hover);
    border-color: transparent;
    color: var(--text-on-brand);
    box-shadow: 0 3px 8px color-mix(in srgb, var(--color-brand-hover), transparent 50%);
    transform: translateY(-1px);
}

button:active, .ant-btn:active {
    transform: translateY(0px);
    box-shadow: 0 1px 3px var(--shadow-intensity) var(--shadow-color);
    transition-duration: 0.05s;
}

.ant-btn-primary:active {
    box-shadow: 0 1px 3px color-mix(in srgb, var(--color-brand-hover), transparent 40%);
    transform: translateY(0px);
}

button:hover::before,
.ant-btn:hover::before {
    opacity: 0.3;
}

.ant-btn-primary:hover::before {
    opacity: 0.15;
}

/* 滚动条 */
::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-track {
    background: transparent;
    margin-block: 5px;
}

::-webkit-scrollbar-thumb {
    background: color-mix(in srgb, var(--text-primary), transparent 80%);
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: padding-box;
    transition: background var(--duration-quick) var(--easing-standard);
}

::-webkit-scrollbar-thumb:hover {
    background: color-mix(in srgb, var(--text-primary), transparent 70%);
}

/* 动画与过渡 */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

body { 
    animation: fadeIn 0.5s var(--easing-decelerate) forwards; 
}

.message-content-container .markdown {
    opacity: 0;
    animation: fadeIn 0.4s var(--easing-decelerate) 0.1s forwards;
}

/* 链接 */
a {
    color: var(--text-link);
    transition: color var(--duration-quick) var(--easing-standard), opacity var(--duration-quick) var(--easing-standard), border-color var(--duration-quick) var(--easing-standard);
    text-decoration: none;
    border-bottom: 1px solid transparent;
    cursor: pointer;
}

a:hover {
    color: var(--text-link-hover);
    border-bottom-color: var(--text-link-hover);
}

/* 选择 */
::selection {
    background-color: color-mix(in srgb, var(--color-brand-primary), transparent 50%);
    color: var(--text-on-brand);
}

/* 主题切换按钮 */
.theme-toggle-button {
    transition: opacity var(--duration-normal) var(--easing-emphasized), transform var(--duration-quick) var(--easing-standard), background-color var(--duration-quick) var(--easing-standard), border-color var(--duration-quick) var(--easing-standard), color var(--duration-quick) var(--easing-standard);
}

.theme-toggle-button:hover {
    opacity: 0.9;
    transform: scale(1.05) rotate(5deg);
}

/* 工具提示/悬停弹出窗口 */
.hover-contents, .monaco-hover, .monaco-hover-content, .hover-row,
.markdown-hover, .hover-tooltip, .tooltip-content, [role="tooltip"],
div[class*="hover"], div[class*="tooltip"] {
    /* 浅色模式默认值 */
    --tooltip-bg: oklch(97% 0.005 260 / 0.96);
    --tooltip-text: oklch(10% 0.01 270);
    --tooltip-border: rgba(0, 0, 0, 0.15);
    --tooltip-shadow: rgba(60, 60, 80, 0.2);
    --tooltip-code-bg: rgba(0, 0, 0, 0.08);
    --tooltip-code-border: rgba(0, 0, 0, 0.05);

    background-color: var(--tooltip-bg) !important;
    color: var(--tooltip-text) !important;
    border: 0.5px solid var(--tooltip-border) !important;
    border-radius: 8px !important;
    backdrop-filter: blur(var(--element-blur)) !important;
    -webkit-backdrop-filter: blur(var(--element-blur)) !important;
    box-shadow: 0 4px 16px var(--tooltip-shadow) !important;
    font-family: var(--font-default) !important;
    line-height: 1.5 !important;
    font-size: 0.9em !important;
    padding: 10px 12px !important;
    z-index: 1000;
}

body[theme-mode="dark"] .hover-contents, body[theme-mode="dark"] .monaco-hover,
body[theme-mode="dark"] [role="tooltip"], body[theme-mode="dark"] div[class*="tooltip"] {
    /* 深色模式覆盖 */
    --tooltip-bg: oklch(30% 0.015 265 / 0.96);
    --tooltip-text: oklch(95% 0.005 270);
    --tooltip-border: rgba(255, 255
body[theme-mode="dark"] .hover-contents, body[theme-mode="dark"] .monaco-hover,
body[theme-mode="dark"] [role="tooltip"], body[theme-mode="dark"] div[class*="tooltip"] {
    /* 深色模式覆盖 */
    --tooltip-bg: oklch(30% 0.015 265 / 0.96);
    --tooltip-text: oklch(95% 0.005 270);
    --tooltip-border: rgba(255, 255, 255, 0.18);
    --tooltip-shadow: rgba(0, 0, 0, 0.35);
    --tooltip-code-bg: rgba(255, 255, 255, 0.12);
    --tooltip-code-border: rgba(255, 255, 255, 0.08);
}

/* 工具提示链接 */
[role="tooltip"] a, div[class*="tooltip"] a {
    color: var(--text-link) !important;
    border-bottom: 1px dotted var(--text-link) !important;
    text-decoration: none !important;
    transition: color var(--duration-quick) ease, border-color var(--duration-quick) ease;
}

[role="tooltip"] a:hover, div[class*="tooltip"] a:hover {
    color: var(--text-link-hover) !important;
    border-bottom-style: solid !important;
    border-bottom-color: var(--text-link-hover) !important;
}

/* 工具提示代码 */
[role="tooltip"] code, div[class*="tooltip"] code {
    background-color: var(--tooltip-code-bg) !important;
    color: inherit !important;
    padding: 0.15em 0.4em !important;
    border-radius: 4px !important;
    font-family: 'Fira Code', 'JetBrains Mono', monospace !important;
    font-size: 0.95em !important;
    border: 1px solid var(--tooltip-code-border) !important;
}`,
}
