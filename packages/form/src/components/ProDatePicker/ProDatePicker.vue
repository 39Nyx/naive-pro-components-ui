<script setup lang="ts">
import { NDatePicker } from 'naive-ui'
import { ProDatePickerProps } from '../props/ProDatePickerProps'
import { computed } from 'vue'

const model = defineModel()

const props = withDefaults(defineProps<ProDatePickerProps>(), {
  type: 'date',
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请选择${props.title}`
})
</script>

<template>
  <n-date-picker
    v-model:value="model"
    class="pro-date-picker"
    :type="props.type"
    :placeholder="showPlaceholder"
  />
</template>

<style scoped>
.pro-date-picker {
  width: 100%;
}
</style>
