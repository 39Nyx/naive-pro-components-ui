<script setup lang="ts">
import { NDataTable, NCard } from 'naive-ui'
import { type ProTableProps } from '../../props/ProTableProps'
import { ProForm } from '@39nyx/pro-form'
import { computed } from 'vue'

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
      span: column.span || 8
    }
  })
})
</script>

<template>
  <pro-form
    class="pro-form-card"
    :columns="formColumns"
  />
  <n-card>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </n-card>
</template>

<style scoped>
.pro-form-card {
  margin-bottom: 16px;
}
</style>
