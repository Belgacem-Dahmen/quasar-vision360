// authStore.ts
import { defineStore } from 'pinia';
import { loginUser, logoutUser, registerUser } from 'src/use/useFirebase';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref();

  const register = async (email: string, password: string) => {
    await registerUser(email, password);
  };

  const login = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    currentUser.value = user;
  };

  const logout = async () => {
    await logoutUser()
  }

  return {
    currentUser,
    register,
    login,
    logout
  };
});
