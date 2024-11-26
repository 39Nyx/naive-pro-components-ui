This is a guide example.

```vue
<script setup>
import { ref } from 'vue';

const color = ref('red');
</script>

<template>
  <p class="greeting">
    Vue 测试
  </p>
</template>

<style>
.greeting {
  color: v-bind('color');
  font-size: 16px;
  font-weight: bold;
}
</style>
```
