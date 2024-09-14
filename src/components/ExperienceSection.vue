<template>
  <div class="padding-container">
    <AnimatedNotion>
      <p class="fontsize-23 q-mb-xl">Work Experience</p>
    </AnimatedNotion>
    <q-timeline
      color="secondary"
      :layout="$q.screen.gt.sm ? 'comfortable' : 'dense'"
    >
      <q-timeline-entry
        title="Intern Fullstack Developer"
        subtitle="June 2022 - August 2022"
        avatar="~assets/dac.png"
      >
        <p class="fontsize-9">DAC Data Technology Vietnam</p>
        <ul class="fontsize-8">
          <li>
            Learn technologies such as Flask, VueJS, and PostgreSQL by
            developing a website. The website has features such as
            authorization, CRUD with RESTful API, and business processing to
            manage advertising campaigns.
          </li>
          <li>Learn Git and Scrum.</li>
        </ul>
      </q-timeline-entry>

      <q-timeline-entry
        title="Part-time Fullstack Developer"
        subtitle="September 2022 - March 2023"
        avatar="~assets/dac.png"
      >
        <p class="fontsize-9">DAC Data Technology Vietnam</p>
        <p class="fontsize-8">
          Migrate website system from outSystems to VueJS - Laravel app (include
          writing detailed design, coding, doing unit test for api)
        </p>
        <ul class="fontsize-8">
          <li>
            Write detailed design document based on the available template.
          </li>
          <li>Code backend and frontend.</li>
          <li>Write API unit test.</li>
          <li>Technologies used: Laravel, VueJS, MySQL.</li>
        </ul>
      </q-timeline-entry>

      <q-timeline-entry
        title="Software Developer (Main FE)"
        subtitle="June 2023 - July 2024"
        avatar="~assets/logi-vietfrance.svg"
      >
        <p class="fontsize-9">Logi VietFrance</p>
        <ul class="fontsize-8">
          <li>
            Developed and maintained multi-platform enterprise management system
            using Vuejs and .Net
          </li>
          <li>
            Join in developing two company websites using Vue.js and Firebase.
          </li>
          <li>Developed and maintained internal website for company.</li>
          <li>Write unit test for frontend and backend.</li>
          <li>
            Implementing responsive design and ensuring cross-browser
            compatibility.
          </li>
          <li>Analyze and optimize codes and flows.</li>
        </ul>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup>
import AnimatedNotion from './AnimatedNotion.vue';
</script>

<style lang="scss" scoped>
:deep(.q-timeline__dot) {
  width: 45px;
}

:deep(.q-timeline__entry) {
  line-height: 1.8rem;
}

:deep(.q-timeline__entry--right) {
  padding-left: 54px;
}

:deep(.q-timeline__dot-img) {
  width: 31px;
  height: 31px;
  left: 7px;
  top: 12px;
  border-radius: 0;
  background-color: transparent;
}

:deep(.q-timeline__dot:before) {
  width: 45px;
  height: 45px;
}

:deep(.q-timeline__dot:after) {
  left: 50%;
  transform: translateX(-50%);
}
</style>
