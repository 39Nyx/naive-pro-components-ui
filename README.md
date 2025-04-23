# naive-pro-components-ui

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 功能

- 组件值联动
- 组件内容显示联动
  - 通过条件值判断表单项是否显示
  - 表单项在初始化数据的时候是否显示
  - 表单项的数据联动
- 表格操作列删除
  - 删除
    - 支持静态数据删除
    - 支持自定义发送请求删除， 自定义发送请求删除分静态数据和动态请求数据，静态数据自动移除数据，动态数据自动发送请求刷新数据，返回false则不执行后续逻辑
    - 支持自定义事件删除
  - 编辑
    - 支持抽屉或者弹窗展示编辑
    - 支持自定义编辑事件
    - 支持界面跳转逻辑
  - 查看
    - 支持抽屉或者弹窗显示数据信息
    - 支持自定义查看事件
    - 支持界面跳转逻辑
- 表格头部导出功能
- 表格列操作编辑
- 弹窗和抽屉组件可配置, 可以通过配置决定是抽屉还是弹窗
- 表格列数据支持配置是否是表单项、表格列、编辑弹窗(抽屉)表单项