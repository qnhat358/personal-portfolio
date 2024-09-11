<template>
  <div class="padding-container column justify-center">
    <div style="width: fit-content" class="q-mb-xl fontsize-23">
      <p class="typewriter">I'm a Software Engineer.</p>
    </div>
    <p>
      A passionate frontend developer based in Da Nang with a love for creating
      clean, scalable web solutions. With hands-on experience in Vue.js, Quasar
      Framework, and enterprise management systems, I focus on delivering fast
      and intuitive applications. Over the years, I’ve collaborated on projects
      ranging from business websites to complex cross-platform enterprise
      systems.
    </p>
    <div class="skills column flex-center q-col-gutter-y-sm q-mt-xl">
      <div class="row q-gutter-md">
        <q-btn round>
          <q-img src="~assets/vue.png" width="25px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/quasar.svg" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/tailwindcss.svg" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/vuetify.svg" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/bootstrap.svg" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/laravel.svg" width="25px" />
        </q-btn>
      </div>
      <div class="row q-gutter-md">
        <q-btn round>
          <q-img src="~assets/nodejs.svg" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/csharp.png" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/javascript.png" width="23px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/css.png" width="30px" />
        </q-btn>
        <q-btn round>
          <q-img src="~assets/html.svg" width="22px" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.skills {
  .q-btn {
    background-color: $primary-lighter !important;
    height: 44px;
    width: 44px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
}
</style>
