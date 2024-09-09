<template>
  <q-page> Hello world </q-page>
</template>

<script setup>
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// set values for meta tags
useMeta(() => {
  return {
    title: t('homePage.title'),
    meta: {
      description: {
        name: 'description',
        content: t('homePage.meta.description')
      }
    }
  };
});
</script>
