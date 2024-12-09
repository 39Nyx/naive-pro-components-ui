<script setup lang="ts">
import { NIcon, NLayoutSider, NMenu } from 'naive-ui'
import { type Component, h, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  BookOutline as BookIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'

const collapsedStatus: Ref<boolean> = ref(false)
const router = useRouter()
const route = useRoute()

function handleCollapsed(collapsed: boolean) {
  collapsedStatus.value = collapsed
}

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(BookIcon),
  },
  {
    label: '表单设计',
    key: 'about',
    icon: renderIcon(BookIcon),
  },
  {
    label: '表单',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '基础表单',
        key: 'base-form',
      },
    ],
  },
  {
    label: '表格',
    key: 'table',
    icon: renderIcon(WineIcon),
    children: [
      {
        label: '基础表格',
        key: 'base-table',
      },
    ],
  },
]

const selectedKey: Ref<string> = ref(route.name as string)

function handleCollapsedMenu(name: string) {
  selectedKey.value = name
  router.push({
    name: name,
  })
}
</script>

<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
    :on-update:collapsed="handleCollapsed"
  >
    <div
      class="side-header"
      :class="{
        'is-collapsed': collapsedStatus,
      }"
    >
      <img src="../../assets/img/naiveLogo.svg" alt="logo" class="logo" />
      <div class="title">管理系统</div>
    </div>
    <NMenu
      v-model:value="selectedKey"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :on-update:value="handleCollapsedMenu"
    />
  </n-layout-sider>
</template>

<style scoped lang="scss">
.side-header {
  position: sticky;
  top: 0;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 2;
  width: calc(100% - 2px);
  margin: 0 auto;

  &.is-collapsed {
    .title {
      width: 0;
      overflow: hidden;
      text-wrap: nowrap;
    }
  }

  .logo {
    width: 20.8px;
    height: 25.3px;
  }

  .title {
    font-weight: 700;
    color: #18a058;
    margin-left: 8px;
    transition: width 0.3s ease-in-out;
    width: auto;
  }
}
</style>
