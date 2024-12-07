<script setup lang="ts">
import { computed, type Ref, ref, watch } from 'vue'
import { omit } from 'lodash'
import ProFormFieldRender from '../ProFormFieldRender/ProFormFieldRender'
import type { ProField } from '../../entity'
import { NCard, NForm, NGrid, NGi, NFormItem, NButton, NSpace } from 'naive-ui'
import { type ProFieldColumn } from '../../entity'
import type { ProFormProps } from '../props/ProFormProps'

const props = withDefaults(defineProps<ProFormProps>(), {
  columns: () => [],
  submitter: () => {
    return {
      searchConfig: {
        submitText: '提交',
        resetText: '重置',
      },
    }
  },
})

const model: Ref<any> = ref({})

function getFieldDefaultValue(column: ProFieldColumn) {
  const defaultValue: any = {
    select: null,
    inputNumber: null,
    datePicker: null,
  }
  if (
    column.valueType &&
    Object.hasOwnProperty.call(defaultValue, column.valueType)
  ) {
    return defaultValue[column.valueType]
  }
  return ''
}

watch(
  () => props.columns,
  newVal => {
    if (!newVal) {
      return
    }
    model.value = newVal.reduce((acc: Record<string, any>, cur: ProField) => {
      acc[cur.key] = getFieldDefaultValue(cur)
      return acc
    }, {})
  },
  {
    immediate: true,
  },
)

function fieldProps(column: ProFieldColumn): any {
  return {
    ...omit(column, ['key', 'span']),
    clearable: column.clearable === undefined ? true : column.clearable,
  }
}

const cols: number = 24

const submitSpan = computed(() => {
  const result = props.columns.reduce(
    (pre, current) => {
      if (typeof current.span === 'number') {
        if (pre.span + current.span > cols) {
          pre.span = current.span
        } else {
          pre.span += current.span
        }
      }
      if (typeof current.span === 'undefined') {
        pre.span = 0
      }
      return pre
    },
    {
      span: 0,
    },
  )
  return {
    span: cols - result.span || cols,
  }
})

const submitLoading = ref(false)

function submitForm() {
  const submit = props.onFinish || ((value: any) => Promise.resolve(value))
  submitLoading.value = true
  submit(model.value)
    .then(() => {
      // 空函数
    })
    .finally(() => {
      submitLoading.value = false
    })
}

defineExpose({
  submitForm
})
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <NForm label-placement="left" label-width="auto" :model="model">
      <NGrid :cols="cols">
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
        <n-gi v-bind="submitSpan">
          <NSpace reverse>
            <NButton
              type="primary"
              :loading="submitLoading"
              @click="submitForm"
            >
              {{ props.submitter.searchConfig?.submitText }}
            </NButton>
            <NButton>{{ props.submitter.searchConfig?.resetText }}</NButton>
          </NSpace>
        </n-gi>
      </NGrid>
    </NForm>
  </NCard>
</template>

<style scoped lang="scss"></style>
