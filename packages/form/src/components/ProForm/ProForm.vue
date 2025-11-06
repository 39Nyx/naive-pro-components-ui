<script setup lang="ts">
import { NForm, NFormItem, NGi, NGrid } from 'naive-ui'
import { type ProFormProps } from '@39nyx/model'
import { computed, useSlots } from 'vue'

withDefaults(defineProps<ProFormProps>(), {
  model: () => ({}),
  rules: () => ({}),
  labelPlacement: 'left',
})

const cols: number = 24

const slots = useSlots()

const normalizedChildren = computed(() => {
  if (!slots.default || typeof slots.default !== 'function') {
    return []
  }
  return slots.default().map(child => {
    // 提取子组件的栅格配置
    const childProps: any = child.props || {}
    return {
      ...childProps,
      component: child,
    }
  })
})
</script>

<template>
  <NForm
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
  >
    <NGrid :cols="cols" item-responsive :x-gap="12" :responsive="'screen'">
      <NGi
        v-for="(column, index) in normalizedChildren"
        :key="column.path || index"
        :span="column.span || 24"
      >
        <NFormItem
          :label="column.title"
          :path="column.path"
          :rule="column.rules"
        >
          <component :is="column.component" />
        </NFormItem>
      </NGi>
    </NGrid>
  </NForm>
</template>

<style scoped></style>
