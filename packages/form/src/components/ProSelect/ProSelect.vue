<script setup lang="ts">
import { NSelect, NEmpty, NSpin } from 'naive-ui'
import { computed, type Ref, ref, onMounted } from 'vue'
import { type ProSelectProps } from '../props/ProSelectProps'

const model = defineModel<string>()

const props = withDefaults(defineProps<ProSelectProps>(), {
  placeholder: '',
  title: '',
  clearable: true,
})

const loading: Ref<boolean> = ref(false)

type Option = { label: string; value: string }

const removeOptions: Ref<Option[]> = ref([])

const selectOptions = computed(() => {
  return props.options || removeOptions.value || []
})

const showPlaceholder = computed(() => {
  return props.placeholder || `请选择${props.title}`
})

onMounted(() => {
  if (typeof props.request === 'function') {
    loading.value = true
    props.request({}).then((options) => {
      removeOptions.value = options
    }).finally(() => {
      loading.value = false
    })
  }
})
</script>

<template>
  <n-select
    v-model:value="model"
    :options="selectOptions"
    :placeholder="showPlaceholder"
    :clearable="props.clearable"
  >
    <template #empty>
      <NEmpty v-if="!loading"></NEmpty>
      <NSpin v-if="loading" :show="loading" :description="'加载中...'" :delay="20"></NSpin>
    </template>
  </n-select>
</template>

<style scoped></style>
