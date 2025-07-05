import { defineConfig } from 'dumi';

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
  themeConfig: {
    name: 'naiveProComponents',
    logo: '/naive-pro-components-ui/docs/assets/images/AntDesign.png',
    lastUpdated: true,
    showLineNum: true,
    nav: [
      { title: '研发', link: '/guide/introduce' },
      { title: '组件', link: '/comes/form' },
    ],
    github: 'https://github.com/KuangPF/dumi-theme-antd'
  }
});
