<script setup lang="ts">
import { type ProField, ProForm } from '@39nyx/naive-pro-components';
import type { FormItemRule } from 'naive-ui';
import { type Ref, ref } from 'vue';

const columns: Ref<ProField[]> = ref([
  {
    title: '姓名',
    key: 'name',
    valueType: 'input',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  },
  {
    title: '年龄',
    key: 'age',
    valueType: 'inputNumber',
    rules: [
      {
        required: true,
        validator: (rule: FormItemRule, value: number) => {
          if (value === null) {
            return new Error('年龄不能为空');
          } else if (value < 18) {
            return new Error('年龄必须大于18');
          }
          return true;
        },
        trigger: ['blur'],
      },
    ],
  },
  {
    title: '电话号码',
    key: 'phone',
    valueType: 'input',
    rules: [
      {
        validator: (rule: FormItemRule, value: string) => {
          if (value) {
            return new Promise<void>((resolve, reject) => {
              setTimeout(() => {
                if (value === '12345') {
                  reject(new Error('电话号码已经存在'))
                } else {
                  resolve()
                }
              }, 2000)
            })
          }
        },
        trigger: 'input'
      },
    ],
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
