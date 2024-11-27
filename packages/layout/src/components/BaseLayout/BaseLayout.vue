<script setup lang="ts">
import { h, ref, type Ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import {
  NLayout,
  NLayoutSider,
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

const router = useRouter()

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
    label: () => {
      return h(
        RouterLink,
        {
          to: {
            name: 'about',
          }
        },
        { default: () => '表单设计' }
      )
    },
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
  {
    label: '表单',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '基础表单',
        key: 'base-form'
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

const collapsedStatus: Ref<boolean> = ref(false)

function handleCollapsed(collapsed: boolean) {
  collapsedStatus.value = collapsed
}

function handleCollapsedMenu(name: string) {
  router.push({
    name: name
  })
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
          :on-update:value="handleCollapsedMenu"
        />
      </n-layout-sider>

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

:deep(.n-layout-sider .n-layout-toggle-button) {
  top: 68px;
}
</style>
