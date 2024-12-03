<script setup lang="ts">
import { ProTableSize, ProToolBarProps } from '../../props/ProToolBarProps'
import { NSpace } from 'naive-ui'
import SettingButton from './components/settingButton/SettingButton.vue'
import ReloadButton from './components/reloadButton/ReloadButton.vue'
import DensityButton from './components/densityButton/DensityButton.vue'

withDefaults(defineProps<ProToolBarProps>(), {
  headerTitle: '',
  loading: false,
  size: 'medium',
})

const emit = defineEmits<{
  (e: 'reload'): void
  (e: 'sizeUpdate', size: ProTableSize)
}>()

function reload() {
  emit('reload')
}

function updateSize(size: ProTableSize) {
  emit('sizeUpdate', size)
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
        <setting-button />
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
