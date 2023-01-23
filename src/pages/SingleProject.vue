<script>
import axios from "axios";

export default {
  name: "SingleProject",
  data() {
    return {
      url: "http://localhost:8000",
      project: {},
    };
  },
  created() {
    const slug = this.$route.params.slug;
    axios.get(`${this.url}/api/projects/${slug}`).then((resp) => {
      if (resp.data.success) {
        this.project = resp.data.project;
      } else {
        this.$router.push({ name: "notfound" });
      }
    });
  },
};
</script>

<template>
  <main>
    <section>
      <h1 class="mt-5 mb-3 text-center">{{ project.title }}</h1>
      <div class="container text-center">
        <img
          v-if="project.image"
          :src="`${url}/storage/${project.image}`"
          alt=""
        />
        <h2 v-else>Nessuna immagine per questo progetto</h2>
        <p class="mt-3">{{ project.content }}</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss"></style>
