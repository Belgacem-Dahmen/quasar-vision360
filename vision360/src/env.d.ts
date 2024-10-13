/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    API_BASE_URL: string | undefined;
    API_ACCES_TOKEN_URL: string;
    API_CLIENT_ID: string | undefined;
    API_CLIENT_SECRET: string | undefined;
    API_USERNAME: string | undefined;
    API_PASSWORD: string | undefined;
    FIREBASE_apiKey: string | undefined;
    FIREBASE_authDomain: string | undefined;
    FIREBASE_projectId: string | undefined;
    FIREBASE_storageBucket: string | undefined;
    FIREBASE_messagingSenderId: string | undefined;
    FIREBASE_appId: string | undefined;
  }
}
