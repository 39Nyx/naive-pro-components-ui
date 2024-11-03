<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { type Ref, ref } from 'vue'
import DraggableRender from '../DraggableRender/DraggableRender'

type Item = {
  name: string
  id: string
  valueType: string
  config: any
}

const list: Ref<Item[]> = ref([])

const selectId: Ref<string> = ref('')

function clickHandle(item: Item) {
  if (item.id === selectId.value) {
    selectId.value = ''
    return
  }
  selectId.value = item.id
}
</script>

<template>
  <VueDraggable
    v-model="list"
    :animation="150"
    group="DraggablePanel"
    ghostClass="ghost"
    class="sheet-panel"
  >
    <div
      v-for="item in list"
      :key="item.id"
      class="item"
      :class="{ selected: item.id === selectId }"
      @click="clickHandle(item)"
    >
      <DraggableRender v-bind="item" />
      <div class="wrapper"></div>
    </div>

  </VueDraggable>
</template>

<style scoped lang="less">
.sheet-panel {
  flex: 1;
  background: #ffffff;
  margin: 12px;
  padding: 12px;

  .item {
    position: relative;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    transition: all 0.3s ease;

    &.selected {
      border-color: #1890ff;
    }

    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }
}
</style>
