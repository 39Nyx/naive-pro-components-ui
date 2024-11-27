import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'base-form',
    name: 'base-form',
    component: () => import('../views/baseForm/BaseForm.vue')
  }
]

export default routes
