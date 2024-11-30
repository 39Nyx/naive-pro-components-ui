import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[]  = [
  {
    path: 'base-table',
    name: 'base-table',
    component: () => import('../views/baseTable/BaseTable.vue')
  }
]

export default routes
