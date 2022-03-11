import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/testView.vue'),
  },
  {
    path: '/testone',
    component: () => import('../views/pages/testOnce.vue'),
    props: (route) => route.query,
  },
  {
    path: '/caselist',
    component: () => import('../views/CaseList.vue'),
    props: (route) => route.query,
  },
  // {
  //   path: '/openaccount',
  //   component: () => import('../views/OpenAccount.vue'),
  //   props: (route) => route.query,
  // },
  // {
  //   path: '/todolist',
  //   component: () => import('../views/CompletedTodoList.vue'),
  //   props: (route) => route.query,
  // },
  // {
  //   path: '/cardconfirm',
  //   component: () => import('../views/CardConfirm.vue'),
  //   props: (route) => route.query,
  // },
  // {
  //   path: '/casequery',
  //   component: () => import('../views/CompletedCaseQuery.vue'),
  //   props: (route) => route.query,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
