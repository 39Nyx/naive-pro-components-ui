import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

export default defineConfig({
  base: '/naive-pro-components-ui/docs/',
  publicPath: '/naive-pro-components-ui/docs/',
  outputPath: 'docs-dist',
  presets: [require.resolve('@dumijs/preset-vue')],
  vue: {
    compiler: {
      babelStandaloneCDN: '/naive-pro-components-ui/docs/js/babel.min.js',
    },
  },
  themeConfig: defineThemeConfig({
    name: 'naive-pro-components-ui',
    lastUpdated: true,
    nav: [
      { title: '研发', link: '/guide/introduce' },
      { title: '组件', link: '/components/pro-table' },
    ],
    footer: '<span>Copyright © 2025 | Powered by naive pro components</span>',
    github: 'https://github.com/KuangPF/dumi-theme-antd',
    sidebarGroupModePath: ['/config', '/components'],
    title: 'Naive Pro Components',
    description: 'naive 实现的 pro components',
    actions: [
      {
        type: 'primary',
        text: '快速开始',
        link: '/guide/introduce',
      },
      {
        text: '开始使用',
        link: '/config/base',
      },
    ],
    features: [
      {
        title: '简单易用',
        details: '开箱即用，案例丰富。',
      },
      {
        title: '更高效',
        details: '傻瓜写法，超高性能, 忽略后半句。',
      },
      {
        title: '更专业',
        details: '完备，灵活，优雅。',
      },
      {
        title: '场景复用',
        details: '基于协议驱动，抽象场景组件',
      },
      {
        title: '协议驱动',
        details: '使用JSON-Schema, 标不标准另说。',
      },
      {
        title: '智能提示',
        details: '拥抱Typescript',
      },
    ],
    rtl: false,
    loading: {
      skeleton: ['/guide', '/config', '/demo'],
    },
    docVersions: {
      '1.0.0': '',
    },
  }),
});
