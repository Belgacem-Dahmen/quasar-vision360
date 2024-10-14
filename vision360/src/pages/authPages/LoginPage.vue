<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 my_card" bordered>
      <q-card-section class="text-center">
        <img :src="logo" alt="" class="logo" />

        <div class="text-primary text-h6 text-weight-bold">
          Sign in to Vision 360
        </div>
        <div class="text-grey-8">Sign in below to access your account</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input
          dense
          outlined
          class="q-mt-md"
          v-model="password"
          type="password"
          label="Password"
        ></q-input>
      </q-card-section>
      <q-card-section>
        <q-btn
          style="border-radius: 8px"
          color="primary"
          rounded
          size="md"
          label="Sign in"
          no-caps
          class="full-width"
          @click="handleClick"
        ></q-btn>
      </q-card-section>
      <q-card-section class="text-center q-pt-none">
        <div class="text-grey-8">
          Don't have an account yet?
          <router-link
            to="auth/register"
            class="text-dark text-weight-bold"
            style="text-decoration: none"
            >Sign up.</router-link
          >
        </div>
      </q-card-section>
      <q-item> </q-item>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const email = ref('');
const password = ref('');
import logo from 'src/assets/logo-ipda.png';
import { useAuthStore } from 'src/stores/AuthStore';
import { useRouter } from 'vue-router';
const authStore = useAuthStore();
const router = useRouter()

const handleClick = async () => {
  await authStore.login(email.value, password.value);
  router.push('/');
};
</script>

<style scoped>
.logo {
  width: 100%;
}
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
