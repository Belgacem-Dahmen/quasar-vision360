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

        <div class="row text-red q-gutter-md">
          <q-btn-dropdown
            split
            color="primary"
            push
            glossy
            no-caps
            icon="fa-solid fa-key"
            label="Manage Token"
            size="12px"
            @click="onMainClick"
          >
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar
                    icon="fa-solid fa-plus-circle"
                    color="primary"
                    text-color="white"
                    size="md"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Generate new </q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section avatar>
                  <q-avatar
                    icon="fa-solid fa-trash"
                    color="secondary"
                    text-color="white"
                    size="md"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Delete Token</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

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
import { useTokenStore } from 'src/stores/TokenStore';

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
    link: '/client-data',
  },

  {
    title: 'Vehicle Operation History',
    caption: 'Vehicle Operation History',
    icon: 'fa-solid fa-wrench',
    link: '/history',
  },
  {
    title: 'Maintenance Plans',
    caption: 'Maintenance Plans',
    icon: 'fa-solid fa-calendar-alt',
    link: '/plans',
  },
  {
    title: 'List of Qualified Invoices',
    caption: 'List of Qualified Invoices',
    icon: 'fa-solid fa-file-invoice-dollar',
    link: '/invoices',
  },
  {
    title: 'Follow-Up History',
    caption: 'Follow-Up History',
    icon: 'fa-solid fa-history',
    link: '/history',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
const tokenStore = useTokenStore();
const onMainClick = async () => {
  console.log('Clicked on main button');
  await tokenStore.generateToken();
};

function onItemClick() {
  console.log('Clicked on an Item');
}
</script>
