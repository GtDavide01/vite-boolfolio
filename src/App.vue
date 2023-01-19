<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>

<template>
  <!-- header -->
  <AppHeader />
  <!-- main -->
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
