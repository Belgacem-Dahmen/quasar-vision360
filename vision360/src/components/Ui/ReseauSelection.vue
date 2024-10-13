<template>

    <div class="q-gutter-md row items-start">
      <q-select
        filled
        v-model="selected"
        label="Réseau"
        :options="options"
        dense
        style="width: 250px"
      />
    </div>

</template>

<script setup>
import { ReseauEnum } from 'src/config/Enums/reseau.enum';
import { ref } from 'vue';

const selected = ref(ReseauEnum.Ateliofid);
const options = ref([
  ReseauEnum.Ateliofid,
  ReseauEnum.AteliofidDomtom,
  ReseauEnum.Eurorepar,
  ReseauEnum.Gaap,
  ReseauEnum.Gnac,
  ReseauEnum.Karway,
  ReseauEnum.Motrio,
  ReseauEnum.Roady,
  ReseauEnum.Speedy,
  ReseauEnum.firstStop,
]);

</script>
