<script setup lang="ts">
import { NDataTable, NCard } from 'naive-ui'
import { type ProTableProps } from '../../props/ProTableProps'
import { ProForm, type Submitter } from '@39nyx/pro-form'
import { computed, type Ref, ref, toRef } from 'vue'
import ProToolBar from '../ProToolBar/ProToolBar.vue'
import { type ProTableSize } from '../../props/ProToolBarProps'
import { type ProColumns } from '../../entity'

const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  data: () => [],
  pagination: { pageSize: 10 },
})

const formColumns = computed(() => {
  return props.columns.map(column => {
    return {
      key: column.key,
      title: column.title,
      valueType: column?.valueType,
      span: column.span || 8,
    }
  })
})

const tableColumns = toRef(props.columns)

const submitter = ref<Submitter>({
  searchConfig: {
    submitText: '查询',
    resetText: '重置',
  },
})

const waitTime = (time: number = 100) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const proFormElement: Ref = ref()
const loading: Ref<boolean> = ref(false)

async function searchSubmit(values: any) {
  console.log(values)
  loading.value = true
  await waitTime(3000)
  loading.value = false
}

function reload() {
  proFormElement.value?.submitForm()
}

const tableSize: Ref<ProTableSize> = ref('medium')

function sizeUpdate(size: ProTableSize) {
  tableSize.value = size
}

function updateColumns(data: ProColumns[]) {
  tableColumns.value = data
}
</script>

<template>
  <pro-form
    ref="proFormElement"
    class="pro-form-card"
    :columns="formColumns"
    :submitter="submitter"
    :on-finish="searchSubmit"
  />
  <n-card>
    <pro-tool-bar
      :loading="loading"
      :size="tableSize"
      :columns="tableColumns"
      @reload="reload"
      @sizeUpdate="sizeUpdate"
      @updateColumns="updateColumns"
    />
    <n-data-table
      :columns="tableColumns.filter(column => !column.hideInTable)"
      :data="data"
      :pagination="pagination"
      :bordered="false"
      :loading="loading"
      :size="tableSize"
    />
  </n-card>
</template>

<style scoped>
.pro-form-card {
  margin-bottom: 16px;
}
</style>
