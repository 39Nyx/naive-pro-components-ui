<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="relative h-full flex">
    <aside class="aside">

    </aside>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="less">
.aside {
  width: 220px;
  height: 100%;
  box-shadow: 0 0 rgb(0 0 0 / 0), 0 0 rgb(0 0 0 / 0), 2px 0 8px 0 rgb(29, 35, 41, 0.05);
}

.main {
  flex: 1;
  height: 100%;
}
</style>
