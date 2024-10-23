<script setup lang="ts">
import { NSelect } from 'naive-ui'
import { computed } from 'vue'

interface ProSelectProps {
  options: any[]
  placeholder?: string
  title?: string
}

const model = defineModel<string>()

const props = withDefaults(defineProps<ProSelectProps>(), {
  options: () => [],
  placeholder: '',
  title: '',
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
  />
</template>

<style scoped></style>
