// src/boot/myBootFile.ts

import { BootFileParams } from '@quasar/app-vite';
import { useAuthStore } from 'src/stores/AuthStore';

interface State {
  // Define your store state here
  currentUser: string | null; // Customize according to your store
}

export default ({ router }: BootFileParams<State>) => {
  router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();

   
    if (to.meta.requiresAuth && !authStore.currentUser) {
      next('/auth'); 
    } else {
      next();
    }
  });
};
