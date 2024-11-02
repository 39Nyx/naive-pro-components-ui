<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { Ref, ref } from 'vue'
import DraggableRender from '../DraggableRender/DraggableRender'

type Item = {
  name: string
  id: string
  valueType: string
  config: any
}

const list: Ref<Item[]> = ref([])
</script>

<template>
  <VueDraggable
    v-model="list"
    :animation="150"
    group="DraggablePanel"
    ghostClass="ghost"
    class="sheet-panel"
  >
    <DraggableRender
      v-for="item in list"
      :key="item.id"
      v-bind="item"
    />
  </VueDraggable>
</template>

<style scoped lang="less">
.sheet-panel {
  flex: 1;
  background: #ffffff;
  margin: 12px;
  padding: 12px;
}
</style>
