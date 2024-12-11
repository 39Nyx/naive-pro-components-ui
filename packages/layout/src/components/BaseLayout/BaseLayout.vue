<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import LayoutSide from '../LayoutSide/LayoutSide.vue'
import LayoutHeader from '../LayoutHeader/LayoutHeader.vue'
import { ref } from 'vue'
import TabsView from '../TabsView/TabsView.vue'

const collapsed = ref(false)

function toggle(value: boolean) {
  collapsed.value = value
}
</script>

<template>
  <div style="position: relative; height: 100%">
    <n-layout has-sider style="height: 100%">
      <layout-side :collapsed="collapsed" />
      <n-layout>
        <n-layout-header
          bordered
          class="layout-header flex justify-between items-center"
        >
          <layout-header :collapsed="collapsed" @toggle="toggle" />
        </n-layout-header>
        <n-layout-content class="layout-content">
          <tabs-view />
          <div class="router-view">
            <RouterView />
          </div>
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
}

.layout-content {
  background: rgb(247, 250, 252);
  height: calc(100% - 52px);
  position: relative;
}

.router-view {
  padding: 12px;
  height: calc(100% - 44px);
}
</style>
