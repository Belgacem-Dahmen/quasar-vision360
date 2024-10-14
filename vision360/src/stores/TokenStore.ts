import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { AxiosResponse } from 'axios';

import { ref } from 'vue';
import { errorNotification, successNotification } from 'src/use/useNotify';
import { Token } from 'src/config/Enums/token.type';
import { saveToLocalStorage } from 'src/use/useLocalStorage';

export const useTokenStore = defineStore('token', () => {
  // initial state
  const token = ref<Token>({
    token_type: '',
    expires_in: 0,
    access_token: '',
    received_at: 0,
    refresh_token: '',
  });
  const isValid = ref(false);

  interface TokenResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
  }

  const generateToken = async (): Promise<Token | null> => {
    try {
      const response: AxiosResponse<TokenResponse> = await api.post(
        process.env.API_ACCES_TOKEN_URL,
        {
          grant_type: 'password',
          client_id: process.env.API_CLIENT_ID,
          client_secret: process.env.API_CLIENT_SECRET,
          username: process.env.API_USERNAME,
          password: process.env.API_PASSWORD,
        }
      );

      const tokenData = response.data;
      token.value = { ...tokenData, received_at: Date.now() };
      saveToLocalStorage('token', token.value.access_token);
      successNotification('Token generated successfully');
      return token.value;
    } catch (error) {
      errorNotification('Error fetching the token');
      return null;
    }
  };
  const deleteToken = () => {
    token.value = {
      token_type: '',
      expires_in: 0,
      received_at: 0,
      access_token: '',
      refresh_token: '',
    };
    successNotification('token deleted successfully');
  };

  const verifyToken = (token: Token): boolean => {
    const expiration = token.received_at / 1000 + token.expires_in;
    const now = Date.now() / 1000;
    return (isValid.value = now < expiration);
  };

  return { token, isValid, generateToken, deleteToken, verifyToken };
});
