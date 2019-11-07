<template>
  <div>
    <h1>{{title}}</h1>
    

    
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