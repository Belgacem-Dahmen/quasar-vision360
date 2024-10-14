import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'predictions',
        component: () => import('src/pages/dataPages/PredictionsPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'history',
        component: () => import('src/pages/dataPages/HistoryPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'plans',
        component: () => import('src/pages/dataPages/PlansPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'invoices',
        component: () => import('src/pages/dataPages/InvoicesPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'client-data',
        component: () => import('src/pages/dataPages/ClientDataPage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/authPages/LoginPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'register',
        component: () => import('src/pages/authPages/RegisterPage.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
