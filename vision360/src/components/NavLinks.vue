<template>
  <q-item clickable tag="a" :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" color="primary " class="q-ml-md" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NavLinks',
});

export interface NavLink {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
}

withDefaults(defineProps<NavLink>(), {
  caption: '',
  link: '#',
  icon: '',
});
</script>
