<script>
export default {
  name: "AppCard",
  data() {
    return {
      urlImage: "http://localhost:8000",
    };
  },
  props: {
    project: Object,
  },
  computed: {
    contentPreview() {
      if (this.project.content && this.project.content.length > 100) {
        return this.project.content.substr(0, 50) + "...";
      }
      return this.project.content;
    },
  },
};
</script>

<template>
  <div class="card mt-2 mb-3 flex-wrap" style="width: 18rem">
    <img
      :src="`${urlImage}/storage/${project.image}`"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p>
        <span v-for="technology in project.technologies" :key="technology.id"
          >#{{ technology.name }}</span
        >
      </p>
      <p>
        Tipologia : {{ project.type ? project.type.name : "Nessuna tipologia" }}
      </p>
      <p class="card-text">
        {{ contentPreview }}
      </p>
      <router-link
        :to="{ name: 'single-project', params: { slug: project.slug } }"
        class="btn btn-primary"
        href=""
        >Maggiori Dettagli</router-link
      >
    </div>
  </div>
</template>

<style lang="scss"></style>
