<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <HeaderBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderBar from 'src/components/HeaderBar.vue';
</script>
