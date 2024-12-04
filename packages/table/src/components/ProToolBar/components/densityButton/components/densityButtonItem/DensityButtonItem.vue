<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    selected: boolean
  }>(),
  {
    text: '',
    selected: false,
  },
)

const emit = defineEmits<{
  (e: 'select'): void
}>()

function selectItem() {
  emit('select')
}
</script>

<template>
  <div class="density-button-item" :class="{ selected }" @click="selectItem">
    {{ text }}
  </div>
</template>

<style scoped>
.density-button-item {
  padding: 0 14px;
  cursor: pointer;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(243, 243, 245);
  }

  &.selected {
    color: #1677ff;
    background-color: #e1f0ff;
  }
}
</style>
