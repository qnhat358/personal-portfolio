<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from 'quasar';

const myIcons = {
  'flag-en': 'img:/images/flag-icons/flag-en.svg',
  'flag-fr': 'img:/images/flag-icons/flag-fr.svg',
  'flag-vi': 'img:/images/flag-icons/flag-vi.svg'
};

const $q = useQuasar();
document.body.style.overflow = 'hidden';

$q.iconMapFn = (iconName) => {
  const icon = myIcons[iconName];
  if (icon !== void 0) {
    return { icon: icon };
  }
};
</script>
