<script setup lang="ts">
import type { ProTableSize, ProToolBarProps } from '../../props/ProToolBarProps'
import { NSpace } from 'naive-ui'
import SettingButton from './components/settingButton/SettingButton.vue'
import ReloadButton from './components/reloadButton/ReloadButton.vue'
import DensityButton from './components/densityButton/DensityButton.vue'
import type { ProColumns } from '../../entity'

withDefaults(defineProps<ProToolBarProps>(), {
  headerTitle: '',
  loading: false,
  size: 'medium',
  columns: () => [],
})

const emit = defineEmits<{
  (e: 'reload'): void
  (e: 'sizeUpdate', size: ProTableSize): void
  (e: 'updateColumns', columns: ProColumns[]): void
}>()

function reload() {
  emit('reload')
}

function updateSize(size: ProTableSize) {
  emit('sizeUpdate', size)
}

function updateColumns(data: ProColumns[]) {
  emit('updateColumns', data)
}
</script>

<template>
  <div class="pro-toolbar">
    <div class="toolbar-title">
      {{ headerTitle }}
    </div>
    <div class="toolbar-actions">
      <div></div>
      <n-space>
        <reload-button :loading="loading" @reload="reload" />
        <density-button :size="size" @updateSize="updateSize" />
        <setting-button :columns="columns" @updateColumns="updateColumns" />
      </n-space>
    </div>
  </div>
</template>

<style scoped lang="less">
.pro-toolbar {
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 4px 0;
}
</style>
