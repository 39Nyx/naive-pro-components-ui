<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import { type ProTableProps } from '../../props/ProTableProps'

withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  data: () => [],
  pagination: { pageSize: 10 },
})
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<style scoped></style>
