import type { Theme } from '@/lib/types'

export const gladiia: Theme = {
  id: 'clearling',
  name: '简润',
  description: '简约圆润的主题，当鼠标悬停在输入栏或消息上时会有悬浮的效果',
  lightPreviewUrl: '/clearling.png',
  darkPreviewUrl: '/clearling.png',
  css: `/*** clearling ***/
:root {
  --duration-quick: 0.15s;
  --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --radius-dynamic: clamp(8px, (100% - 40px) * 0.015, 16px);
  --radius-large: clamp(12px, (100% - 60px) * 0.02, 24px);
  --color-brand-primary: oklch(62.8% 0.25 29.2);
  --color-brand-hover: color-mix(in oklch, var(--color-brand-primary) 90%, black);
  --theme-lightness: 1; /* 1=light, -1=dark */
  --shadow-intensity: 0.04;
}
 
/* 基础架构 */
* {
  font-family: 'MiSans', system-ui;
  line-height: 1.6;
  letter-spacing: 0.015em;
}
/* 设置深度思考展开的字体颜色 */
.ant-collapse-content-box .markdown{
color: rgb(139, 139, 139); 
}
 
.message-content-container {
  /* 物理渲染层 */
  transform: translateZ(0);
  will-change: transform, box-shadow;
  contain: layout paint style;
 
  /* 动态样式 */
  border: 1px solid color-mix(
    in oklch, 
    var(--color-brand-primary), 
    transparent 92%
  );
  border-radius: var(--radius-dynamic);
  
  /* 增量过渡 */
  transition: 
    transform var(--duration-quick) var(--easing-emphasized),
    box-shadow 0.4s var(--easing-decelerate),
    background-color 1s linear,
    border-radius 0.3s var(--easing-decelerate);
 
  /* 逻辑属性 */
  margin-block: 8px;
  padding-inline: 12px;
  padding-block: 10px;
 
  /* 悬停状态 */
  &:hover {
    border-radius: var(--radius-large);
  }
}
 
/* 阴影系统增强 */
.message-content-container {
  box-shadow: 
    0 6px 16px -8px hsl(0 0% 0% / calc(var(--shadow-intensity) * 8)),
    0 8px 32px -12px hsl(0 0% 100% / calc(0.08 - var(--shadow-intensity)));
  
  border: 1px solid rgb(230,230,230);:root {
  /* 原子化设计令牌 */
  --duration-quick: 0.15s;
  --easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
  --radius-dynamic: clamp(8px, (100% - 40px) * 0.015, 16px);
  --radius-large: clamp(12px, (100% - 60px) * 0.02, 24px);
  
  /* OKLCH色彩空间 */
  --color-brand-primary: oklch(62.8% 0.25 29.2);
  --color-brand-hover: color-mix(in oklch, var(--color-brand-primary) 90%, black);
  
  /* 动态主题参数 */
  --theme-lightness: 1; /* 1=light, -1=dark */
  --shadow-intensity: 0.04;
}
 
@keyframes border-glow {
   0% { border-color: hsl(0,100%,70%); }  
   50% {border-color: hsl(180,100%,70%);}
   100% {border-color: hsl(360,100%,70%);}
}
 
/* 基础架构 */
* {
  font-family: 'MiSans', system-ui;
  line-height: 1.6;
  letter-spacing: 0.015em;
}
/* 设置深度思考展开的字体颜色 */
.ant-collapse-content-box .markdown{
color: rgb(139, 139, 139); 
}
 
.message-content-container {
  /* 物理渲染层 */
  transform: translateZ(0);
  will-change: transform, box-shadow;
  contain: layout paint style;
 
  /* 动态样式 */
  background: hsl(
    calc(240 * var(--theme-lightness)),
    calc(5% * abs(var(--theme-lightness))),
    calc(98% - 76% * var(--theme-lightness))
  ) !important;
  
  border: 1px solid color-mix(
    in oklch, 
    var(--color-brand-primary), 
    transparent 92%
  );
  border-radius: var(--radius-dynamic);
  
  /* 增量过渡 */
  transition: 
    transform var(--duration-quick) var(--easing-emphasized),
    box-shadow 0.4s var(--easing-decelerate),
    background-color 1s linear,
    border-radius 0.3s var(--easing-decelerate);
 
  /* 逻辑属性 */
  margin-block: 8px;
  padding-inline: 12px;
  padding-block: 10px;
 
  /* 悬停状态 */
  &:hover {
    border-radius: var(--radius-large);
  }
}
 
/* 阴影系统增强 */
.message-content-container {
  box-shadow: 
    0 6px 16px -8px hsl(0 0% 0% / calc(var(--shadow-intensity) * 8)),
    0 8px 32px -12px hsl(0 0% 100% / calc(0.08 - var(--shadow-intensity)));
  transform-style: preserve-3d; 
  border: 1px solid rgb(230,230,230);
  transition: 
    transform 0.3s,
    background-color 0.3s linear,
    border-radius 0.3s var(--easing-decelerate),
    box-shadow 0.3s,
    border 0.3s;
    filter 0.3s;
 
  &:hover {
    box-shadow: 
      0 6px 16px -8px hsl(0 0% 0% / calc(var(--shadow-intensity) * 11)),
      0 8px 32px -12px hsl(0 0% 100% / calc(0.08 - var(--shadow-intensity)));
    border: 1px solid rgb(118, 208, 255);
    animation-play-state: running;
    transform: translateY(-4px);
  }
}
 
 
/* 触摸设备适配 */
@media (pointer: coarse) {
  .message-content-container {
    min-block-size: 44px;
    --shadow-intensity: calc(var(--shadow-intensity) * 2);
    
    transition: 
      transform var(--duration-quick) var(--easing-emphasized),
      box-shadow 0.3s linear,
      border-radius 0.3s var(--easing-decelerate);
  }
}
 
/* 高对比度模式 */
@media (prefers-contrast: more) {
  .message-content-container {
    border-width: 2px;
    
    &::after {
      content: "";
      display: block;
      border: 1px solid CanvasText;
      border-radius: inherit;
    }
  }
}
  transition: 
    transform var(--duration-quick) var(--easing-emphasized),
    background-color 1s linear,
    border-radius 0.3s var(--easing-decelerate),
    transform 0.5s,
    box-shadow 0.5s,
    border 0.5s;
 
  &:hover {
    box-shadow: 
      0 8px 32px -8px hsl(0 0% 0% / calc(var(--shadow-intensity) * 5)),
      0 16px 64px -12px hsl(0 0% 100% / calc(0.12 - var(--shadow-intensity)));
      transform: translateY(-6px);
      border: 1px solid rgb(118, 208, 255);
  }
}
 
 
/* 输入栏优化 */
#inputbar {
  background: color-mix(
    in oklab,
    var(--chat-background-white),
    transparent 4%
  ) !important;
  backdrop-filter: blur(3px);
  border: 1px solid rgb(230, 230, 230);
  border-radius: var(--radius-large);
  margin: -15px 20px 15px 20px;
  transition: 
      border-radius 0.3s var(--easing-decelerate),
      transform 0.5s !important,
      border 0.5s,
      background-color:0.5s;
 
  &:focus-within {
    border-radius: var(--radius-dynamic);
  }
&:hover {
    border: 1px solid rgb(118, 208, 255);
    transform: translateY(-6px);
}
    
}
body[theme-mode="light"]
{
  
}`,
}
