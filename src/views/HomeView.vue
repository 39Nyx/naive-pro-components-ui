<script setup lang="ts">
import {
  type ProColumns,
  type ProFieldColumn,
  ProForm,
  ProTable,
} from '@39nyx/naive-pro-components'
import { NButton, NTag } from 'naive-ui'
import axios from 'axios'
import { h } from 'vue'

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
    type: 'password',
  },
  {
    title: '多行文本',
    key: 'textarea',
    valueType: 'input',
    span: 24,
    type: 'textarea',
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

const tableColumns: ProColumns[] = [
  {
    title: '序号',
    key: 'index',
  },
  {
    title: '名称',
    key: 'name',
    render: () => {
      return h(NTag, { type: 'success' }, () => '标签内容')
    },
  },
]

function handleClick() {
  console.log('点击了按钮')
  // 发送请求测试
  axios
    .get('https://apifoxmock.com/m1/5341971-5012913-default/system/test')
    .then(res => {
      console.log(res.data)
    })
}
</script>

<template>
  <pro-table :columns="tableColumns" />
  <ProForm :columns="columns" />
  <NButton @click="handleClick">发送请求测试</NButton>
</template>
