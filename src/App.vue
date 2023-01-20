<script>
import AppHeader from "./components/AppHeader.vue";
// import AppMain from "./components/AppMain.vue";

export default {
  name: "App",
  components: { AppHeader },
};
</script>
+
<template>
  <!-- header -->
  <AppHeader />
  <!-- router view -->
  <router-view></router-view>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
