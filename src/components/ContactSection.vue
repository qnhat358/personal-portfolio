<template>
  <div class="padding-container column justify-center">
    <p class="fontsize-23">Contact</p>
    <p>
      I'm currently looking to join a cross-functional team that values
      improving people's lives through accessible design. Or have a project in
      mind? Let's connect.
    </p>
    <p>quangnhat358@gmail.com</p>
    <p class="row q-gutter-x-md">
      <a
        title="Linkedin"
        href="https://www.linkedin.com/in/quangnhat358/"
        target="_blank"
        class="icon-wrapper row items-center justify-center"
      >
        <q-icon name="fa-brands fa-linkedin-in" class="text-white icon" />
      </a>
      <a
        title="Facebook page"
        href="https://www.facebook.com/quangnhat358/"
        target="_blank"
        class="icon-wrapper row items-center justify-center"
      >
        <q-icon name="fa-brands fa-facebook-f" class="text-white icon" />
      </a>
      <a
        title="Github"
        href="https://github.com/qnhat358"
        target="_blank"
        class="icon-wrapper row items-center justify-center"
      >
        <q-icon name="fa-brands fa-github" class="text-white icon" />
      </a>
      <a
        title="Email"
        href="mailto: quangnhat358@gmail.com"
        class="icon-wrapper row items-center justify-center"
      >
        <q-icon name="fa-solid fa-envelope" class="text-white icon" />
      </a>
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;

  &:hover i {
    opacity: 0.7;
    transition: all 0.2s;
  }
}

p {
  margin-bottom: 40px;
}
</style>
