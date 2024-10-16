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
        <div class="row">
          <div class="q-pa-md q-gutter-sm">
            <q-btn square color="grey-3" @click="handleGoogleLogin">
              <q-icon
                name="fa-brands fa-google"
                size="md"
                class="custom-google-icon"
            /></q-btn>

            <q-btn square color="secondary" @click="handleMicrosoftLogin">
              <q-icon
                name="fa-brands fa-microsoft"
                size="md"
                class="custom-microsoft-icon"
              />
            </q-btn>
          </div>
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
const router = useRouter();
const isLoading = ref(false)
const errorMsg = ref('')
const handleClick = async () => {
  isLoading.value = true
  try {
    await authStore.login(email.value, password.value);
    router.push('/');
  } catch (error) {
    errorMsg.value = 'Merci de Verifier vos données'  }
    finally {
      
    }
};

const handleGoogleLogin = async () => {
  await authStore.loginWithGoogle();
  router.push('/');
};

const handleMicrosoftLogin = () => {
  console.log('login with microsoft');
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

.custom-google-icon {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.custom-microsoft-icon {
  background: conic-gradient(
    from 180deg at 50% -20%,
    #f25022,
    #db7a00,
    #3a3469,
    #7fba00,
    #7fba00,
    #7fba00
  );
  background: conic-gradient(
    from 90deg at -20% 50%,
    #4285f4,
    #5e82f8,
    #c672fa,
    #ff9492,
    #feb72d,
    #fbbc05
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
