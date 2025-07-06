<script setup lang="ts">
import { NInput } from 'naive-ui'
import { type ProInputProps } from '../props/ProInputProps'
import { computed, onBeforeUnmount, onMounted, inject } from 'vue'
import { offEvent, onEvent } from '../../utils/eventBus'
import { omit } from 'lodash'

const model = defineModel<string>()

const eventBus: any = inject('eventBus', () => {
  return {}
})

const props = withDefaults(defineProps<ProInputProps>(), {
  type: 'text',
  disabled: false,
  clearable: true,
})

const inputProps = computed<any>(() => {
  return omit(props, ['prop', 'placeholder', 'type'])
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请输入${props.title}`
})

function subEvent(value: any): void {
  console.log(value)
}

function handleInputChange(value: string) {
  console.log(props)
  eventBus?.emit?.(props.prop, value)
}

onMounted(() => {
  onEvent(props.dependencies || [], subEvent, eventBus)
})

onBeforeUnmount(() => {
  offEvent(props.dependencies || [], subEvent, eventBus)
})
</script>

<template>
  <NInput
    v-model:value="model"
    v-bind="inputProps"
    :placeholder="showPlaceholder"
    :type="props.type || 'text'"
    @change="handleInputChange"
  />
</template>

<style scoped></style>
