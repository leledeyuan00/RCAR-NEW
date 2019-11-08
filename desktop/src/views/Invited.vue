<template>
  <div>
<div v-html="models[1].submenus[1].body" class="body-main text-center px-3 bg-white fs-lg"></div>

    
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    id:{},
  },
  data() {
    return {
      models: {},
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