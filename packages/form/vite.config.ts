import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), vueJsx(), dts({ tsconfigPath: './tsconfig.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
    },
    target: 'modules',
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    rollupOptions: {
      // 你不想打包进库的依赖
      external: ['vue', /node_modules/],
      input: ['./src/index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'dist',
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
})
