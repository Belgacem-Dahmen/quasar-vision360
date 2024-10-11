import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') },
                    {path:'predictions',component:()=>import ('src/pages/dataPages/PredictionsPage.vue')},
                    {path:'history',component:()=>import ('src/pages/dataPages/HistoryPage.vue')},
                    {path:'plans',component:()=>import ('src/pages/dataPages/PlansPage.vue')},
                    {path:'invoices',component:()=>import ('src/pages/dataPages/InvoicesPage.vue')},
                    {path:'client-data',component:()=>import ('src/pages/dataPages/ClientDataPage.vue')},
    ],
  },{
    path:'/auth',
    component: () => import('layouts/GuestLayout.vue'),
  children: [
    { path: '', component: () => import('pages/authPages/LoginPage.vue') },
    {path:'register',component:()=>import ('src/pages/authPages/RegisterPage.vue')}
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
