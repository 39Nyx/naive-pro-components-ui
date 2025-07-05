<script setup lang="ts">
import { computed, type Ref, ref, useTemplateRef, watch } from 'vue'
import { omit } from 'lodash'
import ProFormFieldRender from '../ProFormFieldRender/ProFormFieldRender'
import type { ProField } from '../../entity'
import {
  NCard,
  NForm,
  NGrid,
  NGi,
  NFormItem,
  NButton,
  NSpace,
  FormInst,
} from 'naive-ui'
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
  onFinish: async () => {},
})

const model: Ref<any> = ref({})
const formRef = useTemplateRef<FormInst>('formRef')

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
    ...omit(column, ['key', 'span', 'hidden', 'dependencies', 'controls']),
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

function submitForm(e: MouseEvent) {
  e.preventDefault()
  submitLoading.value = true
  formRef.value?.validate(valid => {
    console.log(valid)
    if (valid) {
      submitLoading.value = false
      return
    }
    props
      .onFinish(model.value)
      .then(() => {
        // 空函数
      })
      .finally(() => {
        submitLoading.value = false
      })
  })
}

const renderColumns = computed(() => {
  return props.columns.filter((item: ProField) => {
    if (typeof item?.hidden === 'function') {
      const params: any = {}
      if (item.dependencies) {
        item.dependencies.forEach(dep => {
          if (typeof dep === 'string') {
            params[dep] = model.value[dep]
          } else if (Array.isArray(dep)) {
            if (dep.length < 1) {
              return
            } else if (dep.length === 1) {
              params[dep[0]] = model.value[dep[0]]
              return
            } else if (dep.length > 1) {
              if (!Object.hasOwnProperty.call(params, dep[0])) {
                params[dep[0]] = {}
              }
              let current = params[dep[0]]
              dep.forEach((d, index) => {
                if (index === 0) {
                  return
                } else if (index === dep.length - 1) {
                  current[d] = model.value[d]
                } else {
                  current[d] = {}
                  current = current[key]
                }
              })
            }
          }
        })
      }
      return !item.hidden(params)
    }
    return !item.hidden
  })
})

defineExpose({
  submitForm,
})
</script>

<template>
  <NCard :bordered="true" class="card-wrapper">
    <NForm
      label-placement="left"
      label-width="auto"
      :model="model"
      ref="formRef"
    >
      <NGrid :cols="cols" item-responsive :x-gap="12" :responsive="'screen'">
        <NGi
          v-for="column in renderColumns"
          :key="column.key"
          :span="column.span || 24"
        >
          <NFormItem
            :label="column.title"
            :path="column.key"
            :rule="column.rules"
          >
            <ProFormFieldRender
              v-model:value="model[column.key]"
              v-bind="fieldProps(column)"
            />
          </NFormItem>
        </NGi>
        <NGi v-bind="submitSpan">
          <NFormItem label=" ">
            <NSpace>
              <NButton>{{ props.submitter.searchConfig?.resetText }}</NButton>
              <NButton
                type="primary"
                :loading="submitLoading"
                @click="submitForm"
              >
                {{ props.submitter.searchConfig?.submitText }}
              </NButton>
            </NSpace>
          </NFormItem>
        </NGi>
      </NGrid>
    </NForm>
  </NCard>
</template>

<style scoped lang="scss"></style>
