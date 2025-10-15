<script setup lang="ts">
import { type ProField, ProForm } from '@39nyx/pro-components';
import { type Ref, ref } from 'vue';

const columns: Ref<ProField[]> = ref([
  {
    title: '状态',
    key: 'status',
    valueType: 'select',
    options: [
      { label: '全部', value: 'all' },
      { label: '未解决', value: 'open' },
      { label: '已解决', value: 'closed' },
      { label: '解决中', value: 'processing' },
    ],
  },
  {
    title: '性别',
    key: 'sex',
    valueType: 'select',
    request: async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { label: '男', value: '男' },
            { label: '女', value: '女' },
          ]);
        }, 2000);
      });
    },
  },
  {
    title: '电话号码',
    key: 'phone',
    valueType: 'input',
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
  <div>
    <pro-form :columns="columns" :on-finish="onFinish"></pro-form>
  </div>
</template>

<style scoped></style>
