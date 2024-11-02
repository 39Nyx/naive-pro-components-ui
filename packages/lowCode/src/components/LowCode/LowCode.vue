<script setup lang="ts">
import DraggablePanel from './components/DraggablePanel/DraggablePanel.vue'
import SheetPanel from './components/SheetPanel/SheetPanel.vue'
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel.vue'
</script>

<template>
  <div class="flex h-full">
    <draggable-panel />
    <sheet-panel />
    <properties-panel />
  </div>
</template>

<style scoped>
</style>
