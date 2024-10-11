<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-2 text-blue-8">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row bg-grey-2 items-center">
          <img src="src/assets/logo-ipda.png" alt="" width="200px" />
        </q-toolbar-title>

        <div class="text-red">
          <q-input
            v-model="immat"
            dense
            placeholder="Immatriculation"
            color="blue-8"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="q-pa-lg"> VISION 360</q-item-label>

        <NavLinks v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLinks, { NavLink } from 'src/components/NavLinks.vue';

defineOptions({
  name: 'MainLayout',
});
const immat = ref('');
const linksList: NavLink[] = [
  {
    title: 'Prédictions',
    caption: 'Prédictions',
    icon: 'fa-solid fa-chart-line',
    link: '/predictions',
  },
  {
    title: 'Client Data Linked to a Vehicle',
    caption: 'Client Data Linked to a Vehicle',
    icon: 'fa-solid fa-car',
    link: '/client-vehicle-data',
  },

  {
    title: 'Vehicle Operation History',
    caption: 'Vehicle Operation History',
    icon: 'fa-solid fa-wrench',
    link: '/vehicle-operation-history',
  },
  {
    title: 'Maintenance Plans',
    caption: 'Maintenance Plans',
    icon: 'fa-solid fa-calendar-alt',
    link: '/maintenance-plans',
  },
  {
    title: 'List of Qualified Invoices',
    caption: 'List of Qualified Invoices',
    icon: 'fa-solid fa-file-invoice-dollar',
    link: '/qualified-invoices',
  },
  {
    title: 'Follow-Up History',
    caption: 'Follow-Up History',
    icon: 'fa-solid fa-history',
    link: '/follow-up-history',
  },
  {
    title: 'All Previously Mentioned Data',
    caption: 'All Previously Mentioned Data',
    icon: 'fa-solid fa-database',
    link: '/all-data',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
