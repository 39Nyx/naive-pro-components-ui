<script setup lang="ts">
import { type ProColumns, ProTable } from '@39nyx/naive-pro-components'

const columns: ProColumns[] = [
  {
    key: 'title',
    title: '标题',
    valueType: 'input'
  },
  {
    key: 'state',
    title: '状态',
    valueType: 'input'
  },
  {
    key: 'labels',
    title: '标签',
    valueType: 'input'
  },
  {
    key: 'createdTime',
    title: '创建时间',
    valueType: 'input'
  },
]
</script>

<template>
  <pro-table :columns="columns" />
</template>

<style scoped></style>
