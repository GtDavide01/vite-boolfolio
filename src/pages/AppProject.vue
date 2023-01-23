<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      // variabile che conterra tutti i progetti presi da axios
      projects: [],
      //url per fare chiamata axios
      urlAxios: "http://localhost:8000",
      currentPage: 1,
      lastPage: null,
      totalProjects: null,
    };
  },
  components: { AppCard },
  created() {
    this.getProjects(1);
  },
  methods: {
    getProjects(page) {
      const options = {
        params: {
          page,
        },
      };
      axios.get(`${this.urlAxios}/api/projects`, options).then((resp) => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.totalProjects = resp.data.results.total;
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
      <section>
        <h3>I progetti trovati sono {{ totalProjects }}</h3>
      </section>
      <section class="allcard flex-wrap">
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

      <nav class="navigation d-flex justify-content-between">
        <div>
          Pagina {{ currentPage }} di {{ lastPage }}
          <a
            class="btn btn-success me-2"
            :class="currentPage === 1 ? 'disabled' : ''"
            href=""
            @click.prevent="getProjects(currentPage - 1)"
            >Indietro</a
          >
          <a
            class="btn btn-success"
            :class="currentPage === lastPage ? 'disabled' : ''"
            href=""
            @click.prevent="getProjects(currentPage + 1)"
            >Avanti</a
          >
        </div>
      </nav>
    </div>
  </main>
</template>

<style lang="scss">
main {
  .title {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }
}
</style>
