import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/AuthStore';

export default boot(({ router }) => {
  const authStore = useAuthStore(); // Access your Pinia store

  router.beforeEach((to, from, next) => {
    const currentUser = authStore.currentUser; // Access currentUser from the store

    // Check if the route requires authentication and if there's no current user
    if (to.meta.requiresAuth && currentUser == null) {
      next('/auth');  // Redirect to the auth page
    } else {
      next();  // Proceed to the next route if authenticated or no auth required
    }
  });
});
