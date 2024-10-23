<script setup lang="ts">
import { NInput } from 'naive-ui'
import { ProInputProps } from '../props/ProInputProps'
import { computed } from 'vue'

const model = defineModel<string>()

const props = withDefaults(defineProps<ProInputProps>(), {
  type: 'text',
  disabled: false,
  clearable: true
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请输入${props.title}`
})

</script>

<template>
  <NInput
    v-model:value="model"
    :placeholder="showPlaceholder"
    :type="props.type || 'text'"
    :disabled="props.disabled"
    :clearable="props.clearable"
  />
</template>

<style scoped></style>
