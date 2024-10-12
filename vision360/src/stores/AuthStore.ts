// authStore.ts
import { defineStore } from 'pinia';
import { registerUser, loginUser, logoutUser, user, observeAuthState } from './useFirebase';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(null);

  const register = async (email: string, password: string) => {
    await registerUser(email, password);
    currentUser.value = user.value;
  };

  const login = async (email: string, password: string) => {
    await loginUser(email, password);
    currentUser.value = user.value;
  };

  const logout = async () => {
    await logoutUser();
    currentUser.value = null;
  };

  const setUserObserver = (callback: (user: any) => void) => {
    observeAuthState((current) => {
      currentUser.value = current;
      callback(current);
    });
  };

  return {
    currentUser,
    register,
    login,
    logout,
    setUserObserver,
  };
});
