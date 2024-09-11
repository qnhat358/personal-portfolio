<template>
  <div class="flex flex-center padding-container">
    <div class="row">
      <div class="avatar-container">
        <q-img src="~assets/avatar.png" width="200px" fit="contain" />
      </div>
      <div class="column justify-center q-ml-xl">
        <p>Hello! I am <span class="text-secondary">Nhat</span></p>
        <p>
          I am a creative software developer <br />
          With a strong focus on motion and interaction.
        </p>
        <div class="row justify-end">
          <AnimatedNotion type="box" :padding="5">
            <q-btn class="q-mb-none" @click="scrollTo('contact')"
              >Contact me</q-btn
            >
          </AnimatedNotion>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { scrollTo } from 'src/utils/scroll.util';
import AnimatedNotion from './AnimatedNotion.vue';
</script>

<style lang="scss" scoped>
.padding-container {
  padding-top: 0 !important;
}

.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px; /* Adjust size */
  height: 200px; /* Adjust size */
  background: white; /* Color of the blur */
  border-radius: 50%; /* Match the shape of the image */
  filter: blur(40px); /* Intensity of the blur */
  z-index: -1;
}
.avatar-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px; /* Adjust size */
  height: 300px; /* Adjust size */
  background: $text-secondary; /* Color of the blur */
  border-radius: 50%; /* Match the shape of the image */
  filter: blur(80px); /* Intensity of the blur */
  z-index: -2;
}
</style>
