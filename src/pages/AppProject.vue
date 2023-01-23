<script>
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppMain",
  data() {
    return {
      // variabile che conterra tutti i progetti presi da axios
      projects: [],
      types: [],
      typeChange: "",
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
    this.getType();
  },
  methods: {
    getProjects(page) {
      const options = {
        params: {
          page,
          ...(this.typeChange && { types_id: this.typeChange }),
        },
      };
      axios.get(`${this.urlAxios}/api/projects`, options).then((resp) => {
        this.projects = resp.data.results.data;
        this.currentPage = resp.data.results.current_page;
        this.lastPage = resp.data.results.last_page;
        this.totalProjects = resp.data.results.total;
      });
    },
    getType() {
      axios.get(`${this.urlAxios}/api/types`).then((resp) => {
        this.types = resp.data.results;
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
      <div class="containform">
        <form @submit.prevent="getProjects(1)" action="" class="d-flex mb-4">
          <select name="" id="" class="form-select me-3" v-model="typeChange">
            <option value="">Tutti i progetti</option>
            <option v-for="typeone in types" :value="typeone.id">
              {{ typeone.name }}
            </option>
          </select>
          <button type="submit" class="btn btn-success">Filtra</button>
        </form>
      </div>
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
  .containform {
    width: 50%;
  }
}
</style>
