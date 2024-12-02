<script setup lang="ts">
import { NDataTable, NCard } from 'naive-ui'
import { type ProTableProps } from '../../props/ProTableProps'
import { ProForm, type Submitter } from '@39nyx/pro-form'
import { computed, ref } from 'vue'

const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  data: () => [],
  pagination: { pageSize: 10 },
})

const formColumns = computed(() => {
  return props.columns.map(column => {
    return {
      key: column.key,
      title: column.title,
      valueType: column?.valueType,
      span: column.span || 8,
    }
  })
})

const submitter = ref<Submitter>({
  searchConfig: {
    submitText: '查询',
    resetText: '重置',
  },
})


const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function searchSubmit(values: any) {
  console.log(values)
  await waitTime(3000);
}
</script>

<template>
  <pro-form
    class="pro-form-card"
    :columns="formColumns"
    :submitter="submitter"
    :on-finish="searchSubmit"
  />
  <n-card>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
    />
  </n-card>
</template>

<style scoped>
.pro-form-card {
  margin-bottom: 16px;
}
</style>
