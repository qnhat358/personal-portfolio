<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <HeaderBar />
    <TopScroller />
    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderBar from 'src/components/HeaderBar.vue';
import TopScroller from 'src/components/TopScroller.vue';
</script>
