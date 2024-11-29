<script setup lang="ts">
import { NInputNumber } from 'naive-ui'
import { type ProInputNumberProps } from '../props/ProInputNumberProps'
import { computed } from 'vue'

const model = defineModel<number>()

const props = withDefaults(defineProps<ProInputNumberProps>(), {
  clearable: true,
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请输入${props.title}`
})
</script>

<template>
  <n-input-number
    class="pro-input-number"
    v-model:value="model"
    :clearable="props.clearable"
    :placeholder="showPlaceholder"
  />
</template>

<style scoped>
.pro-input-number {
  width: 100%;
}
</style>
