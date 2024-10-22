<script setup lang="ts">
const model = defineModel<string>()
import { NInput } from 'naive-ui'
</script>

<template>
  <NInput v-model:value="model" />
</template>

<style scoped></style>
