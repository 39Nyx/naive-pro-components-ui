<script setup lang="ts">
import { NAvatar, NDropdown, NIcon } from 'naive-ui'
import {
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon,
} from '@vicons/ionicons5'
import { Component, h } from 'vue'
import MenuButton from './components/MenuButton/MenuButton.vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false,
  },
)
const emit = defineEmits<{
  (e: 'toggle', value: boolean): boolean
}>()

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

function toggle(value: boolean) {
  emit('toggle', value)
}
</script>

<template>
  <div>
    <menu-button :collapsed="collapsed" @toggle="toggle" />
  </div>
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
</template>

<style scoped lang="scss">
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
</style>
