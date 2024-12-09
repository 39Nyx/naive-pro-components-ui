<script setup lang="ts">
import { NButton, NTooltip } from 'naive-ui'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false,
  },
)
const emit = defineEmits<{
  (e: 'toggle', collapsed: boolean): void
}>()

function collapsedChange() {
  emit('toggle', !props.collapsed)
}

const tooltipText = computed(() => {
  return props.collapsed ? '展开菜单' : '折叠菜单'
})
</script>

<template>
  <n-tooltip>
    <template #trigger>
      <n-button quaternary class="menu-button" circle @click="collapsedChange">
        <template #icon>
          <svg
            v-if="!collapsed"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5h-14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="16;0"
                ></animate>
              </path>
              <path stroke-dasharray="10" stroke-dashoffset="10" d="M19 12h-9">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="10;0"
                ></animate>
              </path>
              <path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19h-14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="16;0"
                ></animate>
              </path>
              <path
                stroke-dasharray="10"
                stroke-dashoffset="10"
                d="M7 9l-3 3l3 3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="10;0"
                ></animate>
              </path>
            </g>
          </svg>
          <svg
            v-if="collapsed"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--line-md"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 5h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="16;0"
                ></animate>
              </path>
              <path stroke-dasharray="10" stroke-dashoffset="10" d="M5 12h9">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.2s"
                  dur="0.2s"
                  values="10;0"
                ></animate>
              </path>
              <path stroke-dasharray="16" stroke-dashoffset="16" d="M5 19h14">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.4s"
                  dur="0.2s"
                  values="16;0"
                ></animate>
              </path>
              <path
                stroke-dasharray="10"
                stroke-dashoffset="10"
                d="M17 9l3 3l-3 3"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="10;0"
                ></animate>
              </path>
            </g>
          </svg>
        </template>
      </n-button>
    </template>
    {{ tooltipText }}
  </n-tooltip>
</template>

<style scoped lang="scss">
.menu-button {
  margin-left: 8px;
}
</style>
