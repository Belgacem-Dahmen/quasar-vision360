import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useTokenStore = defineStore('token', () => {
  const token = ref('');

  const generateToken = async () => {
    try {
      const response = await api('/service-authentification/token', {
        method: 'POST',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      });
      token.value = response.data.token;
      console.log(token.value); // Assuming the API returns a `token` field
    } catch (error) {
      console.error('Failed to generate token:', error);
    }
  };

  return { token, generateToken };
});
