<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { computed } from 'vue'
import { type ProSelectProps } from '../props/ProSelectProps'

const model = defineModel<string>()

const props = withDefaults(defineProps<ProSelectProps>(), {
  options: () => [],
  placeholder: '',
  title: '',
  clearable: true,
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请选择${props.title}`
})
</script>

<template>
  <n-select
    v-model:value="model"
    :options="props.options"
    :placeholder="showPlaceholder"
    :clearable="props.clearable"
  />
</template>

<style scoped></style>
