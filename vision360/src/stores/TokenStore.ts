import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { AxiosResponse } from 'axios';

import { ref } from 'vue';
import { errorNotification, successNotification } from 'src/use/useNotify';

export const useTokenStore = defineStore('token', () => {
  const token = ref({
    
  });

  interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
  }

  const generateToken = async (): Promise<string | null> => {
    try {
      const response: AxiosResponse<TokenResponse> = await api.post(
        '/service-authentification/token',
        {
          grant_type: 'password',
          client_id: process.env.API_CLIENT_ID,
          client_secret: process.env.API_CLIENT_SECRET,
          username: process.env.API_USERNAME,
          password: process.env.API_PASSWORD,
        }
      );

      const tokenData = response.data;
      console.log('Access Token:', tokenData.access_token);
      return tokenData.access_token; // Return the access token
    } catch (error) {
      console.error('Error fetching the token:', error);
      errorNotification('Error fetching the token');
      return null;
    }
  };

  const deleteToken = () => {
    token.value = '';
    successNotification('token deleted successfully');
  };

  const verifyToken = (token: string, expirationDate: string): boolean => {
    const expiration = new Date(expirationDate).getTime() / 1000;

    const now = Date.now() / 1000;

    return now < expiration;
  };

  return { token, generateToken, deleteToken, verifyToken };
});
