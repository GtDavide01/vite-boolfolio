<script>
import axios from "axios";
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
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.urlAxios}/api/projects`).then((resp) => {
        this.projects = resp.data.results;
      });
      console.log(this.projects);
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h2>Tutti i progetti!</h2>
    </div>
  </main>
</template>

<style lang="scss">
main {
  background-color: #add8ff;
}
</style>
