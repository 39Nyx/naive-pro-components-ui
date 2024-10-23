<script setup lang="ts">
import { type ProFieldColumn, ProForm } from '@he/naive-pro-components'

const columns: ProFieldColumn[] = [
  {
    title: '名称',
    key: 'name',
    valueType: 'input',
    span: 12,
    type: 'text',
  },
  {
    title: '密码',
    key: 'password',
    valueType: 'input',
    span: 12,
    type: 'password'
  },
  {
    title: '多行文本',
    key: 'textarea',
    valueType: 'input',
    span: 24,
    type: 'textarea'
  },
  {
    title: 'Email',
    key: 'email',
    valueType: 'input',
    span: 12,
  },
  {
    title: '下拉框',
    key: 'phone',
    valueType: 'select',
    span: 12,
    options: [
      {
        label: 'Think For Yourself',
        value: 'song5',
      },
      {
        label: 'The Word',
        value: 'song6',
      },
    ],
  },
]
</script>

<template>
  <ProForm :columns="columns" />
</template>
