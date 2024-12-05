<script setup lang="ts">
import { NCheckbox } from 'naive-ui'
import { type Ref, ref, watch } from 'vue'
import ColumnsList from '../columnsList/ColumnsList.vue'
import type { ProColumns } from '../../../../../../entity'

const props = withDefaults(
  defineProps<{
    columns: ProColumns[]
  }>(),
  {
    columns: () => [],
  },
)

const checkAll: Ref<boolean> = ref(false)
const indeterminate: Ref<boolean> = ref(false)
const fixedLeftList: Ref<ProColumns[]> = ref([])
const fixedRightList: Ref<ProColumns[]> = ref([])
const noFixedList: Ref<ProColumns[]> = ref([])

watch(
  () => props.columns,
  newVal => {
    if (!Array.isArray(newVal)) {
      return
    }
    fixedLeftList.value = newVal.filter(item => item.fixed === 'left')
    fixedRightList.value = newVal.filter(item => item.fixed === 'right')
    noFixedList.value = newVal.filter(item => !item.fixed)
    checkAll.value = newVal.every(item => !item.hideInTable)
    indeterminate.value =
      !checkAll.value && newVal.some(item => !item.hideInTable)
  },
  { immediate: true },
)

const emit = defineEmits<{
  (e: 'updateColumns', columns: ProColumns[])
}>()

function updateColumns() {
  const allColumns = [
    ...fixedLeftList.value,
    ...noFixedList.value,
    ...fixedRightList.value,
  ]
  checkAll.value = allColumns.every(item => !item.hideInTable)
  indeterminate.value =
    !checkAll.value && allColumns.some(item => !item.hideInTable)
  emit('updateColumns', allColumns)
}

function checkAllColumns(value: boolean) {
  checkAll.value = value
  indeterminate.value = false
  const allColumns = [
    ...fixedLeftList.value,
    ...noFixedList.value,
    ...fixedRightList.value,
  ]
  allColumns.forEach(item => {
    item.hideInTable = !value
  })
  emit('updateColumns', allColumns)
}
</script>

<template>
  <div class="columns-setting-container">
    <div class="flex justify-between">
      <n-checkbox
        :checked="checkAll"
        :indeterminate="indeterminate"
        :on-update:checked="checkAllColumns"
        >列展示
      </n-checkbox>
      <div class="reset-button">重置</div>
    </div>
    <div class="columns-list">
      <div v-if="fixedLeftList.length" class="title">固定在左侧</div>
      <columns-list :columns="fixedLeftList" @update:columns="updateColumns" />
      <div v-if="noFixedList.length" class="title">不固定</div>
      <columns-list :columns="noFixedList" @update:columns="updateColumns" />
      <div v-if="fixedRightList.length" class="title">固定在右侧</div>
      <columns-list :columns="fixedRightList" @update:columns="updateColumns" />
    </div>
  </div>
</template>

<style scoped lang="less">
.columns-setting-container {
  background-color: #ffffff;
  background-clip: padding-box;
  border-radius: 8px;
  box-shadow:
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  padding: 12px;
  width: 224px;

  .reset-button {
    color: #1677ff;
    cursor: pointer;
    font-weight: 600;
  }

  .columns-list {
    .title {
      padding-inline-start: 24px;
      color: rgba(42, 46, 54, 0.65);
      font-size: 12px;
      margin: 4px 0;
    }
  }
}
</style>
