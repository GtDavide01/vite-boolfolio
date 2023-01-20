<script>
export default {
  name: "AppHeader",
  data() {
    return {
      navigation: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Abous Us",
          routeName: "about",
        },
        {
          label: "Projects",
          routeName: "projects",
        },
      ],
    };
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand text-primary" href="#">Boolfolio</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li
              class="nav-item"
              v-for="(navItem, index) in navigation"
              :key="index"
            >
              <router-link
                :to="{ name: navItem.routeName }"
                class="nav-link"
                aria-current="page"
                >{{ navItem.label }}</router-link
              >
            </li>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  height: 80px;
  background-color: #0078d4;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
  }
}
</style>
