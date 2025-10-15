<script setup lang="ts">
import { type ProColumns, ProTable } from '@39nyx/pro-components'

const columns: ProColumns[] = [
  {
    key: 'title',
    title: '标题',
    valueType: 'input',
    fixed: 'left',
    width: 200,
  },
  {
    key: 'state',
    title: '状态',
    valueType: 'input',
    fixed: 'left',
    width: 200,
  },
  {
    key: 'labels',
    title: '标签',
    valueType: 'input',
    width: 800
  },
  {
    key: 'createdTime',
    title: '创建时间',
    valueType: 'input',
    fixed: 'right',
    width: 200
  },
]
</script>

<template>
  <pro-table :columns="columns" />
</template>

<style scoped></style>
