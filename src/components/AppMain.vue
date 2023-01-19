<script>
import axios from "axios";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      // variabile che conterra tutti i progetti presi da axios
      projects: [],
      //url per fare chiamata axios
      urlAxios: "http://localhost:8000",
    };
  },
  components: { AppCard },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.urlAxios}/api/projects`).then((resp) => {
        this.projects = resp.data.results;
        console.log(this.projects);
      });
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <section class="title">
        <h2>Tutti i progetti!</h2>
      </section>
      <section class="allcard d-flex flex-wrap">
        <div class="row justify-content-center">
          <div class="d-flex flex-wrap gap-4">
            <AppCard
              :project="project"
              v-for="project in projects"
              :key="project.id"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
main {
  background-color: #add8ff;
  .title {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }
}
</style>
