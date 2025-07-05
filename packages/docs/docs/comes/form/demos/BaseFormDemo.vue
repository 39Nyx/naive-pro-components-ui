<script setup lang="ts">
import { type ProField, ProForm } from '@39nyx/naive-pro-components';
import { type Ref, ref } from 'vue';

const columns: Ref<ProField[]> = ref([
  {
    title: '姓名',
    key: 'name',
    valueType: 'input'
  },
  {
    title: '年龄',
    key: 'age',
    valueType: 'inputNumber'
  },
  {
    title: '电话号码',
    key: 'phone',
    valueType: 'input'
  }
])

function mockApiFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: '假装成功了' })
    }, 2000)
  })
}

async function onFinish(values: any): Promise<any> {
  console.log(values)
  return mockApiFunction().then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <pro-form :columns="columns" :on-finish="onFinish">
  </pro-form>
</template>

<style scoped>

</style>
