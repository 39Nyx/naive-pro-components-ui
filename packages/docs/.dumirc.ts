import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/naive-pro-components-ui/docs/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: '文档',
  },
  presets: [require.resolve('@dumijs/preset-vue')],
  vue: {
    compiler: {
      babelStandaloneCDN: '/js/babel.min.js'
    }
  }
});
