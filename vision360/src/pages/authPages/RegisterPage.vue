<template>
  <q-page class="flex flex-center bg-grey-2">
    <q-card class="q-pa-md shadow-2 my_card" bordered>
      <q-card-section class="text-center">
        <img :src="logo" alt="" class="logo" />

        <div class="text-primary text-h6 text-weight-bold">
          Register to Vision 360
        </div>
        <div class="text-grey-8">Register a new account</div>
      </q-card-section>
      <q-card-section>
        <q-input dense outlined v-model="email" label="Email Address"></q-input>
        <q-input
          class="q-mt-md"
          dense
          outlined
          v-model="confirmed_email"
          label="Confirm your Email Address"
        ></q-input>

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
          You do have an account ?
          <router-link
            to="/auth"
            class="text-dark text-weight-bold"
            style="text-decoration: none"
            >Sign In.</router-link
          >
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from 'src/assets/logo-ipda.png';
import { useAuthStore } from 'src/stores/AuthStore';

const authStore = useAuthStore();
const handleClick = async () => {
  console.log(authStore.currentUser)
  await authStore.register(email.value, password.value);
  console.log(authStore.currentUser)
};

const email = ref('');
const confirmed_email = ref('');
const password = ref('');
</script>

<style scoped>
.logo {
  width: 100%;
}
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
</style>
