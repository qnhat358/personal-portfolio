<template>
  <div class="top-scroller" :style="{ width: scrollOffset + '%' }"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollOffset = ref(0);
const handleScroll = (event) => {
  const body = document.body;
  const p = body.parentNode;
  setTimeout(() => {
    scrollOffset.value =
      ((body.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight)) *
      100;
  }, 100);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped lang="scss">
.top-scroller {
  position: fixed;
  top: 66px;
  left: 0;
  background-color: $primary-lighter;

  height: 4px;
  z-index: 9999;
}
</style>
