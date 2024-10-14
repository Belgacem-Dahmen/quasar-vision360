<template>
  <q-page class="row items-center justify-evenly">
    <p>Invoices Page</p>
  </q-page>
</template>

<script setup lang="ts">
import { useDataStore } from 'src/stores/DataStore';
import { ref } from 'vue';
import { onMounted } from 'vue';

const dataStore = useDataStore();
const history = ref();
onMounted( async () => {
 history.value = await dataStore.getHistory();
  console.log(history.value);

  return history;
});
</script>
