// authStore.ts
import { getAuth } from 'firebase/auth';
import { defineStore } from 'pinia';
import {
  loginUser,
  loginWithGmail,
  logoutUser,
  registerUser,
} from 'src/use/useFirebase';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref();
  const auth = ref(getAuth())
  const register = async (email: string, password: string) => {
    await registerUser(email, password);
  };

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    currentUser.value = user;
  };
  const loginWithGoogle = async () => {
    const user = loginWithGmail();
    currentUser.value = user;
  };
  const logout = async () => {
    currentUser.value = await logoutUser();
  };

  return {
    currentUser,
    register,
    login,
    loginWithGoogle,
    logout,
    auth
  };
});
