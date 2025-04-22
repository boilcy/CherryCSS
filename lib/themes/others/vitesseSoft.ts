import type { Theme } from '@/lib/types'

export const vitesseSoft: Theme = {
  id: 'vitesse-soft',
  name: 'Vitesse Soft',
  description: 'Theme inspired by Vitesse Theme',
  lightPreviewUrl: '/vitesse-soft.png',
  darkPreviewUrl: '/vitesse-soft.png',
  css: `
body[theme-mode=dark]  {
  --color-white: #ffffff;
  --color-white-soft: #f2f2f2;
  --color-white-mute: #eee;
  --color-black: #1b1b1f;
  --color-black-soft: #262626;
  --color-black-mute: #363636;
  --color-gray-1: #8e8e93;
  --color-gray-2: #aeaeb2;
  --color-gray-3: #c7c7cc;
  --color-text-1: #dbd7ca;
  --color-text-2: #dbd7caa9;
  --color-text-3: #dbd7ca8f;
  --color-background: #222;
  --color-background-accent: #292929;
  --color-background-soft: #3d3d3d;
  --color-background-mute: #3a3a3a;
  --color-background-opacity: #22222260;
  --color-primary: #4d9375;
  --color-primary-soft: #00b96b99;
  --color-primary-mute: #00b96b33;
  --color-text: var(--color-text-1);
  --color-icon: #d1d5da;
  --color-icon-white: #586069;
  --color-border: #2f363d;
  --color-border-soft: #2f363dea;
  --color-border-mute: #2f363dd3;
  --color-error: #cb7676;
  --color-link: #4d9375;
  --color-code-background: transparent;
  --color-hover: var(--color-white-mute);
  --color-active: var(--color-white-soft);
  --color-frame-border: #292929;
  --color-group-background: var(--color-white);
  --color-reference: #6394bf;
  --color-reference-text: #000000;
  --color-reference-background: #f1f7ff;
  --navbar-background-mac: var(--color-background-accent);
  --navbar-background: var(--color-background-accent);
  --chat-background: #292929;
  --chat-background-user: #333333;
  --chat-background-assistant: #222222;
  --chat-text-user: var(--color-text);

  background: var(--color-background-accent) !important;

  .ant-drawer-header {
    background: var(--color-background-accent) !important;
  }
  .ant-drawer-content {
    background: var(--color-background-accent) !important;
  }
  .ant-pagination-item {
    background: var(--color-background-accent) !important;
  }
  .ant-collapse-content-box {
    background: var(--color-background-accent) !important;
  }
  .ant-table-thead{
    background: var(--color-background-accent) !important;
    .ant-table-cell  {
      background: var(--color-background-accent) !important;
    }
  }
  .ant-table-tbody,
  .ant-table-placeholder {
    background: var(--color-background-accent) !important;
  }

  .ant-card-head {
    background: var(--color-background-accent) !important;
  }

  .ant-modal-content {
    background: var(--color-background-accent) !important;
  }
  .ant-card-body,
  .ant-modal-header {
    background: var(--color-background-accent) !important;
  }
  .ant-input,
  .ant-input-number,
  .ant-input-password,
  .ant-input-affix-wrapper {
    background: var(--color-background-accent) !important;
  }
  .ant-select,
  .ant-select-selector,
  .ant-select-dropdown {
    background: var(--color-background-accent) !important;
  }
  .ant-dropdown,
  .ant-dropdown-menu {
    background: var(--color-background-accent) !important;
  }
  .ant-btn-color-default {
    background: var(--color-background-accent) !important;
  }
  .ant-popover,
  .ant-popover-inner {
    background: var(--color-background-accent) !important;
  }
  .ant-radio-button-wrapper {
    background: var(--color-background-accent) !important;
  }
  .ant-radio-button-checked {
    background: var(--color-primary-soft) !important;
  }
  #inputbar.inputbar-container > textarea {
   background: transparent !important;
  }
  #app-sidebar {
    background-color: var(--navbar-background) !important;
  }
}

body[theme-mode=light]  {
  --color-white: #ffffff;
  --color-white-soft: #f2f2f2;
  --color-white-mute: #eee;
  --color-black: #1b1b1f;
  --color-black-soft: #262626;
  --color-black-mute: #363636;
  --color-gray-1: #8e8e93;
  --color-gray-2: #aeaeb2;
  --color-gray-3: #c7c7cc;
  --color-text-1: rgba(0, 0, 0, 1);
  --color-text-2: rgba(0, 0, 0, 0.6);
  --color-text-3: rgba(0, 0, 0, 0.38);
  --color-background: #f1f0e9;
  --color-background-accent: #e6e4de;
  --color-background-soft: #eae8e0;
  --color-background-mute: #f1f0n9;
  --color-background-opacity: rgba(255, 255, 255, 0.7);
  --color-primary: #1c6b48;
  --color-primary-soft: #00b96b99;
  --color-primary-mute: #00b96b33;
  --color-text: var(--color-text-1);
  --color-icon: #00000099;
  --color-icon-white: #000000;
  --color-border: #00000028;
  --color-border-soft: #00000020;
  --color-border-mute: #00000010;
  --color-error: #ab5959;
  --color-link: #4d9375;
  --color-code-background: #e3e3e3;
  --color-hover: var(--color-white-mute);
  --color-active: var(--color-white-soft);
  --color-frame-border: #ddd;
  --color-group-background: var(--color-white);
  --color-reference: #296aa3;
  --color-reference-text: #000000;
  --color-reference-background: #f1f7ff;
  --navbar-background-mac: #eae8e0;
  --navbar-background: #eae8e0;
  --chat-background: #f3f3f3;
  --chat-background-user: #95ec69;
  --chat-background-assistant: #ffffff;
  --chat-text-user: var(--color-text);

  background: var(--color-background-accent) !important;

  .ant-drawer-header {
    background: var(--color-background-accent) !important;
  }
  .ant-drawer-content {
    background: var(--color-background-accent) !important;
  }
  .ant-pagination-item {
    background: var(--color-background-accent) !important;
  }
  .ant-collapse-content-box {
    background: var(--color-background-accent) !important;
  }
  .ant-table-thead{
    background: var(--color-background-accent) !important;
    .ant-table-cell  {
      background: var(--color-background-accent) !important;
    }
  }
  .ant-table-tbody,
  .ant-table-placeholder {
    background: var(--color-background-accent) !important;
  }

  .ant-card-head {
    background: var(--color-background-accent) !important;
  }

  .ant-modal-content {
    background: var(--color-background-accent) !important;
  }
  .ant-card-body,
  .ant-modal-header {
    background: var(--color-background-accent) !important;
  }
  .ant-input,
  .ant-input-number,
  .ant-input-password,
  .ant-input-affix-wrapper {
    background: var(--color-background-accent) !important;
  }
  .ant-select,
  .ant-select-selector,
  .ant-select-dropdown {
    background: var(--color-background-accent) !important;
  }
  .ant-dropdown,
  .ant-dropdown-menu {
    background: var(--color-background-accent) !important;
  }
  .ant-btn-color-default {
    background: var(--color-background-accent) !important;
  }
  .ant-popover,
  .ant-popover-inner {
    background: var(--color-background-accent) !important;
  }
  .ant-radio-button-wrapper {
    background: var(--color-background-accent) !important;
  }
  .ant-radio-button-checked {
    background: var(--color-primary-soft) !important;
  }
  #inputbar.inputbar-container > textarea {
   background: transparent !important;
  }
  #app-sidebar {
    background-color: var(--navbar-background) !important;
  }
}
  `,
}
