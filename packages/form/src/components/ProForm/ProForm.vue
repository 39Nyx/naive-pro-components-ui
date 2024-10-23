<script setup lang="ts">
import { type Ref, ref, watch } from 'vue'
import { omit } from 'lodash'
import ProFormFieldRender from '../ProFormFieldRender/ProFormFieldRender'
import type { ProField } from '../../entity/ProField'
import { NCard, NForm, NGrid, NGi, NFormItem, NButton, NSpace } from 'naive-ui'

interface Props {
  columns?: ProField[]
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
})

const model: Ref<any> = ref({})

watch(
  () => props.columns,
  newVal => {
    if (!newVal) {
      return
    }
    model.value = newVal.reduce((acc: Record<string, any>, cur: ProField) => {
      acc[cur.key] = ''
      return acc
    }, {})
  },
  {
    immediate: true,
  },
)

function fieldProps(column: any): any {
  return omit(column, ['key', 'title', 'span'])
}

function submitForm() {
  console.log(model.value)
}
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <NForm label-placement="left" label-width="auto" :model="model">
      <NGrid cols="24">
        <NGi
          v-for="column in props.columns"
          :key="column.key"
          :span="column.span || 24"
        >
          <NFormItem :label="column.title" :path="column.key">
            <ProFormFieldRender
              v-model:value="model[column.key]"
              v-bind="fieldProps(column)"
            />
          </NFormItem>
        </NGi>
      </NGrid>
      <NSpace>
        <NButton>重置</NButton>
        <NButton type="primary" @click="submitForm">提交</NButton>
      </NSpace>
    </NForm>
  </NCard>
</template>

<style scoped lang="less">
.form-btn {
  :nth-child(n + 2) {
  }
}
</style>
