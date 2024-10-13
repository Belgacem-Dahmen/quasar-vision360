<template>
  <q-page class="row items-center justify-evenly">
    <p>Home Page</p>
    <p>{{ tokenStore.token }}</p>
    <br />
  </q-page>
</template>

<script setup lang="ts">
import { useTokenStore } from 'src/stores/TokenStore';

const tokenStore = useTokenStore();
</script>
