<script setup lang="ts">
import { h, ref, Ref } from 'vue'
import { RouterView } from 'vue-router'
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NIcon,
} from 'naive-ui'
import { Component } from 'vue'

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '首页',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon),
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon),
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]

const collapsedStatus: Ref<boolean> = ref(false)

function handleCollapsed(collapsed: boolean) {
  collapsedStatus.value = collapsed
}
</script>

<template>
  <div style="position: relative; height: 100%">
    <n-layout has-sider style="height: 100%">
      <n-layout-sider
        bordered
        show-trigger
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
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>

      <n-layout>
        <n-layout-header></n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          <RouterView />
        </n-layout-content>
        <n-layout-footer></n-layout-footer>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="less">
.layout {
  height: 100%;
  position: relative;
}

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

:deep(.n-layout-sider .n-layout-toggle-button) {
  top: 68px;
}
</style>
