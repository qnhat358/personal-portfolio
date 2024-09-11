<template>
  <div
    v-intersection="onIntersection"
    ref="elementRef"
    style="width: fit-content"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { annotate } from 'rough-notation';
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'underline'
  },
  padding: {
    type: Number,
    required: false,
    default: 10
  },
  animate: {
    type: Boolean,
    required: false,
    default: true
  }
});

const elementRef = ref(null);
const annotation = ref();

function onIntersection(entry) {
  if (!annotation.value) {
    const childElement =
      elementRef.value.firstElementChild || elementRef.value.firstChild;
    annotation.value = annotate(childElement, {
      type: props.type,
      animate: props.animate,
      padding: props.padding
    });
  }
  if (!props.animate) {
    annotation.value.show();
    return;
  }
  if (entry.isIntersecting) {
    setTimeout(() => {
      annotation.value.show();
    }, 300);
  } else {
    annotation.value.hide();
  }
}
</script>

<style lang="scss" scoped></style>
