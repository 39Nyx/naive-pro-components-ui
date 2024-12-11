<script setup lang="ts">
import { ref } from 'vue'

const tabs = ref([
  {
    name: 'Home',
    icon: 'home',
    path: '/home',
    title: '主页是一个小',
  },
  {
    name: 'About',
    icon: 'info',
    path: '/about',
    title: '关于',
  },
])

const activeTab = ref(tabs.value[0])
</script>

<template>
  <div class="transition-300 tabs-container">
    <div class="h-full flex pr-18 items-end tabs-left">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="whitespace-nowrap gap-16 justify-center inline-flex cursor-pointer items-center py-6px px-24px tab -mr-18px"
        :class="{ active: tab.name === activeTab.name }"
      >
        <div
          class="pointer-events-none absolute left-0 top-0 h-full w-full -z-1 bg"
        >
          <svg class="size-full">
            <defs>
              <symbol id="geometry-left" viewBox="0 0 214 36">
                <path
                  d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z"
                ></path>
              </symbol>
              <symbol id="geometry-right" viewBox="0 0 214 36">
                <use xlink:href="#geometry-left"></use>
              </symbol>
              <clipPath>
                <rect width="100%" height="100%" x="0"></rect>
              </clipPath>
            </defs>
            <svg width="51%" height="100%">
              <use
                xlink:href="#geometry-left"
                width="214"
                height="36"
                fill="currentColor"
              ></use>
            </svg>
            <g transform="scale(-1, 1)">
              <svg width="51%" height="100%" x="-100%" y="0">
                <use
                  xlink:href="#geometry-right"
                  width="214"
                  height="36"
                  fill="currentColor"
                ></use>
              </svg>
            </g>
          </svg>
        </div>
        <div
          class="max-w-240px text-ellipsis overflow-hidden whitespace-nowrap"
        >
          {{ tab.title }}
        </div>
      </div>
    </div>
    <div class="tabs-right"></div>
  </div>
</template>

<style scoped>
.tabs-container {
  box-shadow:
    0 0 rgb(0 0 0 / 0),
    0 0 rgb(0 0 0 / 0),
    0 1px 2px rgb(0, 21, 41, 0.08);
  height: 44px;
  padding: 0 16px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 2;
  font-size: 14px;

  .tabs-left {
    .tab {
      position: relative;

      .bg {
        color: #ffffff;
      }

      &:hover {
        .bg {
          color: #dee1e6;
        }
      }
    }

    .tab.active {
      color: #646cff;
      z-index: 2;

      .bg {
        color: #f0f0ff;
      }

      &:hover {
        .bg {
          color: #f0f0ff;
        }
      }
    }
  }
}
</style>
