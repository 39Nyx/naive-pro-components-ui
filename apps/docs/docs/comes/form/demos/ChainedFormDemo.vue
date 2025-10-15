<script setup lang="ts">
import { type ProField, ProForm } from '@39nyx/pro-components';
import { type Ref, ref } from 'vue';

const columns: Ref<ProField[]> = ref([
  {
    title: '控制者',
    key: 'controller',
    valueType: 'select',
    options: [
      { label: '显示', value: 'display' },
      { label: '隐藏', value: 'hidden' },
    ],
  },
  {
    title: '受控者1',
    key: 'controlled1',
    valueType: 'select',
    options: [
      { label: '显示', value: 'display' },
      { label: '隐藏', value: 'hidden' },
    ],
    dependencies: ['controller'],
    hidden: (value: any) => {
      return value && value.controller !== 'display';
    },
  },
  {
    title: '受控者2',
    key: 'controlled2',
    valueType: 'input',
    dependencies: ['controlled1'],
    hidden: ({ controlled1 }) => {
      return controlled1 !== 'display';
    },
  },
]);

function mockApiFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: '假装成功了' });
    }, 2000);
  });
}

async function onFinish(values: any): Promise<any> {
  console.log(values);
  return mockApiFunction().then((res) => {
    console.log(res);
  });
}
</script>

<template>
  <pro-form :columns="columns" :on-finish="onFinish"></pro-form>
</template>

<style scoped></style>
