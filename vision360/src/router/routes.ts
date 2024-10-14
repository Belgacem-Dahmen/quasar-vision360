

import { RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta:{requireAuth :true},
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'),meta:{requireAuth :true}, },
      {
        path: 'predictions',
        component: () => import('src/pages/dataPages/PredictionsPage.vue'),
        meta:{requireAuth :true},
      },
      {
        path: 'history',
        component: () => import('src/pages/dataPages/HistoryPage.vue'),
        meta:{requireAuth :true},
      },
      {
        path: 'plans',
        component: () => import('src/pages/dataPages/PlansPage.vue'),
        meta:{requireAuth :true},
      },
      {
        path: 'invoices',
        component: () => import('src/pages/dataPages/InvoicesPage.vue'),
        meta:{requireAuth :true},
      },
      {
        path: 'client-data',
        component: () => import('src/pages/dataPages/ClientDataPage.vue'),
        meta:{requireAuth :true},
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
      },
      {
        path: 'register',
        component: () => import('src/pages/authPages/RegisterPage.vue'),
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
