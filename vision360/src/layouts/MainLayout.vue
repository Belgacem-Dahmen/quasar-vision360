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
          <router-link to="/">
            <img src="src/assets/logo-ipda.png" alt="" width="200px" />
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item-label header class="q-pa-lg"> VISION 360</q-item-label>
        <NavLinks v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div
        class="row text-red q-gutter-md q-pa-lg align-center justify-between bg-white"
      >
        <ReseauSelection />

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

        <q-btn-dropdown
          color="primary"
          push
          glossy
          icon="fa-solid fa-key"
          label="Manage Token"
          size="11px"
          @click="onMainClick"
        >
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="onItemClick"
              :disable="generateNewToken"
            >
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

            <q-item clickable v-close-popup @click="onDelete">
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

        <q-btn clickable @click="handleLogout"> logout </q-btn>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import NavLinks, { NavLink } from 'src/components/NavLinks.vue';
import { useTokenStore } from 'src/stores/TokenStore';
import ReseauSelection from 'src/components/Ui/ReseauSelection.vue';
import { useAuthStore } from 'src/stores/AuthStore';
import { useRouter } from 'vue-router';

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
const tokenStore = useTokenStore();
const authStore = useAuthStore();
const router = useRouter();
const generateNewToken = computed((): boolean => {
  return tokenStore.token.access_token !== '' ? true : false;
});

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const onMainClick = async () => {};

const onItemClick = async () => {
  await tokenStore.generateToken();
};

const onDelete = () => {
  tokenStore.deleteToken();
};

const handleLogout = async () => {
  await authStore.logout();
  router.push('/auth');
};

// selection
</script>
