<template>
  <div class="row fullscreen homePage">
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GuestLayout',
});
</script>
<style scoped lang="scss">
.homePage {
  background-image: url('src/assets/ipda-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat; /* Pour éviter la répétition de l'image */
  background-position: center; /* Centrer l'image */
  height: 100vh; /* Assurez-vous que la hauteur de la div prend tout l'écran */
}
</style>
