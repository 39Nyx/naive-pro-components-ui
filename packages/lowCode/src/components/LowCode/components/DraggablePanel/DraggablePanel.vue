<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import { Ref, ref } from 'vue'
import { NCollapse, NCollapseItem } from 'naive-ui'

const group: Ref<any> = ref({
  name: 'DraggablePanel',
  pull: 'clone',
  put: false
})

const draggableList = [
  {
    title: '表格类',
    name: 'table',
    components: [
      {
        name: '高级表格',
        id: 'pro-table',
        valueType: 'ProTable',
        config: {
          columns: [
            {
              title: '标题',
              key: 'index',
            },
            {
              title: '状态',
              key:'status',
            }
          ]
        }
      }
    ]
  },
  {
    title: '表单类',
    name: 'form',
    components: [
      {
        name: '高级表单',
        id: 'pro-form',
        valueType: 'ProForm'
      }
    ]
  }
]

function clone(element: Record<string, any>) {
  const len = Math.random() * 1000000
  return {
    ...element,
    id: `${element.id}-clone-${len}`,
  }
}
</script>

<template>
  <div class="draggable-panel">
    <n-collapse arrow-placement="right">
      <n-collapse-item
        v-for="draggableItem in draggableList"
        :key="draggableItem.name"
        :title="draggableItem.title"
        :name="draggableItem.name"
      >
        <VueDraggable
          v-model="draggableItem.components"
          :animation="150"
          ghostClass="ghost"
          :group="group"
          :clone="clone"
          :sort="false"
          class="draggable-list"
        >
          <div
            v-for="item in draggableItem.components"
            :key="item.id"
            class="draggable-item"
          >
            <div class="p-2">
              <div>{{ item.name }}</div>
            </div>
          </div>
        </VueDraggable>
      </n-collapse-item>
    </n-collapse>
  </div>

</template>

<style scoped>
.draggable-panel {
  width: 280px;
  background: #ffffff;
  padding: 12px;
}

.draggable-list {
  display: flex;
  flex-wrap: wrap;

  .draggable-item {
    width: calc(50% - 4px);
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background: #f5f5f5;
    }
  }
}


:deep(.n-collapse) {
  .n-collapse-item {
    margin: 8px 0 0 0;
  }

  .n-collapse-item__header {
    padding: 8px 0 0 0;
  }

  .n-collapse-item__header-main {
    justify-content: space-between;
  }
}
</style>
