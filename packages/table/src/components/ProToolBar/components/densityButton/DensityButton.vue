<script setup lang="ts">
import { NButton, NTooltip, NDropdown } from 'naive-ui'
import { h, type Ref, ref, type VNode } from 'vue'
import { type ProTableSize } from '../../../../props/ProToolBarProps'
import DensityButtonItem from './components/densityButtonItem/DensityButtonItem.vue'

const props = withDefaults(
  defineProps<{
    size: ProTableSize
  }>(),
  {
    size: 'medium',
  },
)

const options: Ref<
  {
    label?: string
    key: ProTableSize
    type?: 'render'
    render?: () => VNode
  }[]
> = ref([
  {
    key: 'large',
    type: 'render',
    render: () => {
      return h(DensityButtonItem, {
        text: '宽松',
        selected: props.size === 'large',
        onSelect: () => {
          handleSelect('large')
        }
      })
    },
  },
  {
    key: 'medium',
    type: 'render',
    render: () => {
      return h(DensityButtonItem, {
        text: '中等',
        selected: props.size === 'medium',
        onSelect: () => {
          handleSelect('medium')
        }
      })
    },
  },
  {
    key: 'small',
    type: 'render',
    render: () => {
      return h(DensityButtonItem, {
        text: '紧凑',
        selected: props.size === 'small',
        onSelect: () => {
          handleSelect('small')
        }
      })
    },
  },
])

const emit = defineEmits<{
  (e: 'updateSize', size: ProTableSize): void
}>()

function handleSelect(key: ProTableSize) {
  debugger
  emit('updateSize', key)
}
</script>

<template>
  <n-tooltip>
    <template #trigger>
      <div>
        <n-dropdown trigger="click" :options="options">
          <n-button text>
            <template #icon>
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="column-height"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"
                ></path>
              </svg>
            </template>
          </n-button>
        </n-dropdown>
      </div>
    </template>
    密度
  </n-tooltip>
</template>

<style scoped></style>
