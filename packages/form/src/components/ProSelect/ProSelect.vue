<script setup lang="ts">
import { NSelect } from 'naive-ui'

const model = defineModel<string>()

const props = withDefaults(
  defineProps<{
    options?: any[]
  }>(),
  {
    options: () => [],
  },
)
</script>

<template>
  <NSelect v-model:value="model" :options="props.options" />
</template>

<style scoped></style>
