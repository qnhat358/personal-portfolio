<template>
  <q-page>
    <IndexSection />
  </q-page>
</template>

<script setup>
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import IndexSection from 'src/components/IndexSection.vue';

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
