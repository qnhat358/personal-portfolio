<template>
  <q-header
    class="navbar full-width q-py-sm q-px-md"
    :class="{
      colored: isEnableColorNavbar
    }"
  >
    <q-toolbar class="q-mx-sm q-px-none full-width row">
      <q-btn
        flat
        label="Nhat | Software Developer"
        @click="scrollTo('index')"
      />
      <q-space />
      <q-tabs v-model="tab" shrink>
        <q-tab name="about" label="About" @click="scrollTo('about')" />
        <q-tab name="work" label="Work" @click="scrollTo('experience')" />
        <q-tab name="contact" label="Contact" @click="scrollTo('contact')" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isEnableColorNavbar = ref(false);
const tab = ref('home');

const scrollTo = (sectionId) => {
  const sectionContainer = document.getElementById(sectionId);
  if (sectionContainer) {
    window.scrollTo({
      top: sectionContainer.offsetTop,
      behavior: 'smooth'
    });
  }
};

const handleScroll = (event) => {
  isEnableColorNavbar.value = window.scrollY >= 80;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent;
  z-index: 4000 !important;
}

.colored {
  background-color: $primary;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}

:deep(.drawer) {
  padding-top: 58px;
}

.router-link {
  text-decoration: none;
  color: $text-primary !important;
  font-weight: 500;
  font-size: 16px;
}

:deep(.menu-button) {
  margin-right: 16px;

  .q-icon {
    color: v-bind(navbarIconColor);
  }
}

.logo-img {
  background-color: white;
  border-radius: 8px;
  padding: 3px 9px;
}

.btn-sign-out:hover {
  filter: brightness(120%);
}

:deep(.q-tabs__content .q-focus-helper) {
  display: none;
}

:deep(.q-tabs__content > a:last-of-type) {
  margin-right: 16px;
}
</style>
