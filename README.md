# Cherry Studio 主题库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![GitHub stars](https://img.shields.io/github/stars/boilcy/CherryCSS.svg)](https://github.com/boilcy/CherryCSS/stargazers) [![Last commit](https://img.shields.io/github/last-commit/boilcy/CherryCSS.svg)](https://github.com/boilcy/CherryCSS/commits/main)

Cherry Studio 自定义主题库, 点击复制即用!

## 🌟 Features

- **一键复制**: 一键复制CSS主题到剪贴板
- **主题预览**: 每个主题的视觉展示
- **整理集合**: 分类主题以便于浏览

## 🗺️ Roadmap

### Theme Renderer (In Progress)

- [x] 实时 CSS 预览渲染器
- [ ] 实时主题编辑

### Stateful Web (Planned)

- [ ] 用户登录
- [ ] 个人主题合集
- [ ] 主题点赞和收藏
- [ ] 社交分享功能

## 主题来源

- 在逛 L 站时看见的主题分享：https://linux.do/t/topic/325119

## 🛠️ 技术栈

- Next.js - React 框架
- TypeScript - 类型安全
- Tailwind CSS - 样式系统
- Lucide Icons - 图标库

## 📝 使用方法

1. 浏览主题库中的各种主题
2. 点击喜欢的主题卡片或复制按钮
3. CSS 代码会自动复制到剪贴板
4. 在 **设置 > 外观 > 自定义 CSS** 中粘贴复制的 CSS

导出的样式面向 Cherry Studio v2，只使用公开的语义变量与 `data-ui` 令牌。如果编辑器中已有带 `cherry-studio:custom-css:v1` 标记的旧样式，请全选并用新导出的 CSS 完整替换；不要把 v2 CSS 追加到旧内容后面。

## 🤝 贡献指南

欢迎提交 PR 来贡献新主题！请确保：

1. 主题预览图清晰展示主题效果
2. CSS 代码经过优化和测试
3. 提供简明的主题描述
4. 新主题的色板会在导出边界编译为 v2 变量；新写的结构规则只能使用维护中的 `data-ui` 语义令牌
5. 不要使用 `theme-mode`、Ant Design/内部/生成类名、旧版 ID（例如旧聊天容器 ID）或全局 `!important`

### 贡献步骤

1. Fork 仓库
2. 克隆fork后的仓库而非本仓库
3. 在本地创建你的功能分支（`git checkout -b feature/AmazingTheme`）
   - 在lib/themes/others/下添加你的主题, 注意在index.ts中import
     格式可参考现有的theme，记住你设置的id
   - 添加预览图片到public/light, public/dark下，图片名与上一步设置的id一致
   - 添加i18n(messages文件夹下)，在json文件中themes属性下添加内容；如：
     ```typescript
     "chang-an": {
         "name": "长安",
         "description": "主题以唐朝美学和古都长安为灵感，采用温暖的土色调"
     }
     ```
     这里的key`chang-an`同样替换为之前设置的id
4. 提交你的更改（`git add .` `git commit -m 'add new AmazingTheme'`）
5. 推送到分支（`git push origin feature/AmazingTheme`）
6. 提交Pull Request

## 📄 许可证

MIT License

## 👥 联系方式

如有问题或建议，欢迎：

- 提交 Issue
- 发起 Pull Request
- 通过 Email 联系我们

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=boilcy/CherryCSS&type=Date)](https://www.star-history.com/#boilcy/CherryCSS&Date)

---

💡 持续更新中，欢迎 Star 和 Fork！
