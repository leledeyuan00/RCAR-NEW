<template>
  <div class="text-center fs-xxl fw-xxl pt-5">
    <h1>{{title}} Page is Coming Soon</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {}
  },
  data() {
    return {
      models: {}
    };
  },
  methods: {
    async fetchArticles() {
      const res = await this.$http.get("articles");
      this.models = res.data;
      console.log(this.models);
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style>
</style>