<script setup lang="ts">
import type { ProColumns } from '../../../../../../entity'
import UpMoveIcon from '../upMoveIcon/UpMoveIcon.vue'
import DownMoveIcon from '../downMoveIcon/DownMoveIcon.vue'
import CenterMoveIcon from '../centerMoveIcon/CenterMoveIcon.vue'
import { NCheckbox, NTooltip } from 'naive-ui'

const props = withDefaults(
  defineProps<{
    columns: ProColumns[]
  }>(),
  {
    columns: () => [],
  },
)

const emit = defineEmits<{
  (e: 'update:columns', columns: ProColumns[])
}>()

function checkedChange(column: ProColumns) {
  return (checked: boolean) => {
    column.hideInTable = !checked
    emit('update:columns', props.columns)
  }
}
</script>

<template>
  <div>
    <div
      v-for="column in columns"
      :key="column.key"
      class="flex justify-between items-center column-item"
    >
      <n-checkbox
        :checked="!column.hideInTable"
        :on-update-checked="checkedChange(column)"
        >{{ column.title }}
      </n-checkbox>
      <div class="flex">
        <n-tooltip v-if="column.fixed !== 'left'" trigger="hover">
          <template #trigger>
            <up-move-icon class="icon" />
          </template>
          固定在首列
        </n-tooltip>
        <n-tooltip v-if="column.fixed" trigger="hover">
          <template #trigger>
            <center-move-icon class="icon" />
          </template>
          不固定
        </n-tooltip>
        <n-tooltip v-if="column.fixed !== 'right'" trigger="hover">
          <template #trigger>
            <down-move-icon class="icon" />
          </template>
          固定在列尾
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column-item {
  padding-inline-start: 24px;
  height: 24px;

  .icon {
    color: #1677ff;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    .icon {
      opacity: 1;
    }
  }
}
</style>
