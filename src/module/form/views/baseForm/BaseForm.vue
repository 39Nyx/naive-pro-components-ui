<script setup lang="ts">
import { ProForm, type ProFieldColumn } from '@39nyx/naive-pro-components'

const columns: ProFieldColumn[] = [
  {
    key: 'age',
    title: '年龄',
    valueType: 'inputNumber',
  },
  {
    key: 'sex',
    title: '性别',
    valueType:'select',
    options: [
      {
        label: '男',
        value: 'male',
      },
      {
        label: '女',
        value: 'female',
      },
    ],
  },
  {
    key: 'password',
    title: '密码',
    valueType: 'input',
  },
  {
    key: 'reenteredPassword',
    title: '重复密码',
    valueType: 'input',
  },
  {
    key: 'birthday',
    title: '生日',
    valueType: 'datePicker'
  },
  {
    key: 'time',
    title: '日期时间',
    valueType: 'datePicker',
    type: 'datetime'
  }
]
</script>

<template>
  <pro-form :columns="columns" />
</template>

<style scoped></style>
