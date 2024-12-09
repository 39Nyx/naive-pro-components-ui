<script setup lang="ts">
import { h } from 'vue'
import { RouterView } from 'vue-router'
import {
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NMenu,
  NIcon,
  NDropdown,
  NAvatar,
} from 'naive-ui'
import { type Component } from 'vue'

import {
  BookOutline as BookIcon,
  WineOutline as WineIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
import LayoutSide from '../LayoutSide/LayoutSide.vue'

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

const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon),
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon),
  },
]
</script>

<template>
  <div style="position: relative; height: 100%">
    <n-layout has-sider style="height: 100%">
      <layout-side />
      <n-layout>
        <n-layout-header bordered class="layout-header">
          <n-menu mode="horizontal" :options="menuOptions" />
          <div class="header-right">
            <n-dropdown trigger="click" :options="options">
              <div class="avatar">
                <n-avatar
                  round
                  size="small"
                  src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                />
                <span class="navbar-name">Soybean</span>
              </div>
            </n-dropdown>
          </div>
        </n-layout-header>
        <n-layout-content content-style="padding: 12px;" class="layout-content">
          <RouterView />
        </n-layout-content>
        <n-layout-footer></n-layout-footer>
      </n-layout>
    </n-layout>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;
  position: relative;
}

.layout-header {
  height: 52px;
  display: flex;
  align-items: center;

  .header-right {
    padding-right: 16px;

    .avatar {
      padding: 4px 12px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;

      &:hover {
        background: rgba(46, 51, 56, 0.09);
        color: rgb(51, 54, 57);
      }

      .navbar-name {
        margin-left: 8px;
      }
    }
  }
}

.layout-content {
  background: rgb(247, 250, 252);
  height: calc(100% - 52px);
}
</style>
