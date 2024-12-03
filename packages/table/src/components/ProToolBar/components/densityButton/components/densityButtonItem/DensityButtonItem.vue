<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="density-button-item">{{ text }}</div>
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
}
</style>
