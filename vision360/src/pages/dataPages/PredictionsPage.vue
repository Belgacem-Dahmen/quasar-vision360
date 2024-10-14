<template>
  <q-page class="row items-center justify-evenly">
    <p>Prédictions</p>
  </q-page>
</template>

<script setup lang="ts">
import { useDataStore } from 'src/stores/DataStore';
import { onMounted } from 'vue';
import { ref } from 'vue';

const dataStore = useDataStore();
const predictions = ref();

onMounted( async()=> {
  predictions.value = await  dataStore.getFullData()
  console.log(predictions.value)
})
</script>
